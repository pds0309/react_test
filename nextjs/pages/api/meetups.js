import { MongoClient } from "mongodb";

// ep GET: api/meetups

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dp2uvt0.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
    );
    const db = client.db();
    console.log(process.env.MONGO_USER);
    const meetupCollection = db.collection("meetups");

    const meetups = await meetupCollection.find().toArray();

    client.close();
    res.status(200).json(
      meetups.map((meetup) => {
        return { ...meetup, id: meetup._id.toString() };
      })
    );
    console.log(res);
  }
}

export default handler;
