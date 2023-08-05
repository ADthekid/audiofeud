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
          email: 'database@audiofeud.iam.gserviceaccount.com',
          key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        })
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