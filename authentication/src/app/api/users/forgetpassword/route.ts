import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import { Connect } from "@/app/dbconfig/dbconfig";
Connect();
export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { token } = reqbody;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
