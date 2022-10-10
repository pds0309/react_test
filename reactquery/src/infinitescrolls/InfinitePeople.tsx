import InfiniteScroll from "react-infinite-scroller";
import Person from "./Person";
import { useInfiniteQuery } from "react-query";

const initialUrl = "https://swapi.dev/api/people/";

const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const InfinitePeople = (): JSX.Element => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      "sw-people",
      ({ pageParam = initialUrl }) => fetchUrl(pageParam),
      { getNextPageParam: (lastPage) => lastPage.next || undefined }
    );

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<div>기다려</div>}
    >
      {data?.pages.map((pageData) => {
        return pageData.results.map((person: any) => {
          return (
            <Person
              key={person.name}
              name={person.name}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
            ></Person>
          );
        });
      })}
    </InfiniteScroll>
  );
};

export default InfinitePeople;
