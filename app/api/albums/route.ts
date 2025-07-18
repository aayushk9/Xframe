// render all existing albums in public/img-albums
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs"

export async function GET(req: NextRequest) {
  // use path to go to albums inside public folder
  const albumsPath = path.join(process.cwd(), "public", "img-albums");
  // use fs to read each albums and save it in a folder
  try {
    const folders = fs.readdirSync(albumsPath).filter((file) => {
      const fullPath = path.join(albumsPath, file);
      return fs.statSync(fullPath).isDirectory(); // only include folders
    });

    return NextResponse.json({
      imgAlbums: folders
    })
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: err
    })
  }
  // iterate over it
  // render all existing albums 
}