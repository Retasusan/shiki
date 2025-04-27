import { NextResponse } from "next/server";
import { getAccessToken } from "@auth0/nextjs-auth0";

export async function GET() {
  const res = new NextResponse();

  const { accessToken } = await getAccessToken();

  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token not found" },
      { status: 401 }
    );
  }

  res.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60, // 1時間
  });

  return res;
}
