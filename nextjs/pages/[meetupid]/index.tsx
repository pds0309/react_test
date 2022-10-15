import { MongoClient, ObjectId } from "mongodb";

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
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dp2uvt0.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetup = await meetupCollection.findOne({
    // @ts-ignore
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: { ...meetup, id: meetupId, _id: meetupId?.toString() },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dp2uvt0.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  // @ts-ignore
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false, // false: 지원되는 파라미터에 대한 프리렌더링만 포함시킨다.
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export default DetailMeetup;
