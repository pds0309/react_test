import { Meetup } from "../Models/types";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS: Meetup[] = [
  {
    id: "m1",
    title: "FC Bayern",
    address: "Bayern Germany",
    image:
      "https://w.namu.la/s/a2f2b1bc47798b43872dfdd6d6d19e7657d31962ed4b81f619c069f8a50cf8450bb0235238aca8d9e45fa51345281c6209aa806a94006415044e029454a13f8de0493dff825da3606df56c2fb32d8225b35eda3eb5538386f5a6d579b7bf3cc3",
    description: "Aliantz Arena",
  },
  {
    id: "m2",
    title: "Real Madrid CF",
    address: "Madrid Spain",
    image:
      "https://w.namu.la/s/f0e4628a0cf3ca4ca0e3c49b7387ea228cdde55fb97afbd5a2704539934d80b4e90761abf7febc6be1f9c7eb318af3d78d3d04cfd0464ac1c4cf1ccc3fc561cb977d44bda5f0f3ec957d59e19348aa4d02a7a4d4cd4e19795e039bae37d9f39e",
    description: "Santiago Bernabéu",
  },
];

const Home = ({ meetups }: { meetups: Meetup[] }) => {
  return <MeetupList meetups={meetups}></MeetupList>;
};

export async function getStaticProps() {
  // TODO: fetch real api data

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default Home;
