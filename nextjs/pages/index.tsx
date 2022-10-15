import { Meetup } from "../Models/types";
import MeetupList from "../components/meetups/MeetupList";

const Home = ({ meetups }: { meetups: Meetup[] }) => {
  return <MeetupList meetups={meetups}></MeetupList>;
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
