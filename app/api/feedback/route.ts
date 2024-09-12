/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendFeedbackForm } from '../../services/form.api';
import { NextResponse } from 'next/server';

export  async function POST(
  request: Request & {
    body: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
    };
  }
) {
  const formData = await request.formData();
  const firstName = formData.get('firstName')as string;
  const lastName = formData.get('lastName')as string;
  const email = formData.get('email')as string;
  const message = formData.get('message')as string;
  try {
  const response = await sendFeedbackForm({
    firstName,
    lastName,
    email,
    message
  })
  const json_response = {
    status: "success",
    data: {
      response,
    },
  };
  return NextResponse.json(json_response);
}catch(error: any){
  const error_response = {
    status: "error",
    message: error.message,
  };
  return new NextResponse(JSON.stringify(error_response), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
  }
}