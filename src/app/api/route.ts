import { NextResponse } from "next/server";
import cloudinary from "../cloudinary";

export async function GET() {
  const randNum = Math.floor(Math.random() * 10) + 1;

  const data = await cloudinary?.api?.resources(
    {
      type: "upload",
      prefix: `ppcp/${randNum}/`, // add your folder
    },
    function (error, result) {
      if (error) return error;
      return result;
    }
  );

  return NextResponse?.json({ data: data || [] });
}
