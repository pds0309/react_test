import { useCustomToast } from 'components/app/hooks/useCustomToast';
import jsonpatch from 'fast-json-patch';
import { UseMutateFunction, useMutation } from 'react-query';
import { queryKeys } from 'react-query/constants';
import { queryClient } from 'react-query/queryClient';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { useUser } from './useUser';

async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

export function usePatchUser(): UseMutateFunction<
  User,
  unknown,
  User,
  unknown
> {
  const { user, updateUser } = useUser();
  const toast = useCustomToast();
  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData, user),
    {
      // onMutate 는 onError 핸들러로 전달될 context를 반환한다.
      onMutate: async (newData: User | null) => {
        // cancel any outgoing queries for user Data,
        // so old server cache data doesn't overwrite our optimistic update
        queryClient.cancelQueries(queryKeys.user);
        // 이전 데이터 스냅샷
        const previousUserData: User = queryClient.getQueryData(queryKeys.user);
        // 낙관적 업데이트로 캐시 업데이트
        updateUser(newData);
        // 컨텍스트(이전데이터) 반환
        return { previousUserData };
      },
      onError: (error, newData, context) => {
        if (context.previousUserData) {
          updateUser(context.previousUserData);
          toast({
            title: 'User Update failed!!',
            status: 'error',
          });
        }
        // rollback
      },
      onSuccess: (userData: User | null) => {
        if (user) {
          toast({
            title: 'User Updated',
            status: 'success',
          });
        }
      },
      onSettled: () => {
        // queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );
  return patchUser;
}
