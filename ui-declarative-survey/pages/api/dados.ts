import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([2, 23]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
