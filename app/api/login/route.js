import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const request = await req.json();
  try {
    const send = await axios('http://103.56.148.33:9011/login', {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: request,
    });

    const data = await send?.data;
    return NextResponse.json(
      {
        data,
      },
      { status: data?.code }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error?.response?.data,
      },
      { status: error?.status }
    );
  }

}