

/*import { NextResponse } from "next/server"
import {google} from "googleapis";

type Feedback = {
    email?: string,
}

export async function POST(request: Request) {
  try {
      const data: Feedback = await request.json();
      console.log('data: ', data);

      const { email } = data;

      await (async () => {
          try {
              const auth = new google.auth.JWT({
                  email: process.env.GOOGLE_CLIENT_EMAIL,
                  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
              });

              const sheet = google.sheets("v4");
              await sheet.spreadsheets.values.append({
                  spreadsheetId: process.env.GOOGLE_SHEET_ID,
                  auth: auth,
                  range: "Sheet1",
                  valueInputOption: "USER_ENTERED",
                  requestBody: {
                      values: [[data.email]]
                  }
              });
          } catch (error) {
              console.error("Error while appending to Google Sheets:", error);
          }
      })();

      return NextResponse.json({ email });
  } catch (error) {
      console.error("Error while processing request:", error);
      return NextResponse.error();
  }
}*/