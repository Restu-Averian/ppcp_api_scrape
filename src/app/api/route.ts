import { NextResponse } from "next/server";
import cloudinary from "../cloudinary";

export async function GET(req: Request) {
  const url = new URL(req?.url);
  const searchParam = new URLSearchParams(url.searchParams);

  const num = searchParam?.get("num");

  const randNum = Math.floor(Math.random() * 10) + 1;

  const data = await cloudinary?.api?.resources(
    {
      type: "upload",
      prefix: `ppcp/${num || randNum}/`, // add your folder
    },
    function (error, result) {
      if (error) return error;
      return result;
    }
  );
  return NextResponse?.json(
    { data: data || [] },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
