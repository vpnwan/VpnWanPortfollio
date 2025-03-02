import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "contacts.csv");

  try {
    const fileContent = await fs.readFile(filePath);

    return new NextResponse(fileContent, {
      headers: {
        "Content-Disposition": 'attachment; filename="contacts.csv"',
        "Content-Type": "text/csv",
      },
    });
  } catch (error) {
    return new NextResponse("File not found", { status: 404 });
  }
}
