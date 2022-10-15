import { MongoClient } from "mongodb";

// ep POST: api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dp2uvt0.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
    );
    const db = client.db();
    console.log(process.env.MONGO_USER);
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);

    client.close();
    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;
