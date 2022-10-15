import Head from "next/head";
import { Meetup } from "../Models/types";
import MeetupList from "../components/meetups/MeetupList";

const Home = ({ meetups }: { meetups: Meetup[] }) => {
  return (
    <>
      <Head>
        <title>제목</title>
        <meta name="name" content="contents contents" />
      </Head>
      <MeetupList meetups={meetups}></MeetupList>
    </>
  );
};

export async function getStaticProps() {
  const respose = await fetch("http://localhost:3000/api/meetups");
  const result: Meetup[] = await respose.json();
  console.log(result);
  return {
    props: {
      meetups: result,
    },
  };
}

export default Home;
