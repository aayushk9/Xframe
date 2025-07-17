// render all existing albums in public/img-albums
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs"

export async function GET(req: NextRequest) { 
  // use path to go to albums inside public folder
  // use fs to read each albums and save it in a folder
  // iterate over it
  // render all existing albums 
}