import { NextResponse } from "next/server"
import {google} from "googleapis";

type Feedback = {
    email?: string,
}

export async function POST(request: Request) {
    const data: Feedback = await request.json()
    console.log('data: ', data)

    const {email} = data

    ;(async () => {
        const auth = new google.auth.JWT({
          email: process.env.GOOGLE_CLIENT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        })
        console.log(auth)
        const sheet = google.sheets("v4")
        await sheet.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          auth: auth,
          range: "Sheet1",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[data.email]]
          }
        })
      })()
      
    return NextResponse.json({email})
}