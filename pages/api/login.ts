import { AxiosResponse } from "axios";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
import { post } from "../../axios";
import Cookies from "universal-cookie";

interface LoginResponse {
  message: string;
  status: number;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export default async function handler(
  payload: any
  // req: NextApiRequest,
  // res: NextApiResponse
): Promise<any> {
  try {
    const data = await post("http://localhost:3001/login", payload);
    const { tokens, status } = data.data as LoginResponse;
    if (tokens) {
      // save access token in local storage
      localStorage.setItem("TOKENS", tokens.accessToken);
      // save refresh token in cookie
      const cookies = new Cookies();
      cookies.set("REFRESH_TOKEN", tokens.refreshToken, { path: "/" });
    }
    return status;
  } catch (error) {
    throw new Error("error");
  }
}
