// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
import { get } from "../../axios";

export default async function HomeHandler() {
  try {
    const data = await get("http://localhost:3001/home");
  } catch (error) {
    throw new Error("error");
  }
}
