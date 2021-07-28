import dbConnect from "../../../helper/db";
import Post from "../../../models/Post";
dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const post = await new Post({ ...data }).save();
    res.status(200).json(post);
  }
}
