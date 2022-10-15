import { GetStaticPropsContext } from "next";
import { Meetup } from "../../Models/types";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";

const DetailMeetup = ({ meetupData }: { meetupData: Meetup }) => {
  const router = useRouter();
  return <MeetupDetails meetup={meetupData} />;
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const meetupId = context?.params?.meetupid;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "image",
        address: "address",
        id: meetupId,
        title: "title",
        description: "desc",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false, // false: 지원되는 파라미터에 대한 프리렌더링만 포함시킨다.
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export default DetailMeetup;
