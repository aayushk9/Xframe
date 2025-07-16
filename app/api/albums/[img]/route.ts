import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import path from "path";

export async function GET(req: NextRequest, { params }: { params: { img: string } }) {
    // user should be able to get image album when frontend hits this endpoint
    // get images from public/img-album/social-network

    const { img } = await params // public/img-albums/actual-albums -> for eg social network

    // we are using fs and path so that we can access image albums and images inside it and generate urls

    // path to folder inside public i.e img-albums/actual albums
    const dirPath = path.join(process.cwd(), "public", "img-albums", img);

    try {
        const files = fs.readdirSync(dirPath); // read each img inside img folder 
        const imagePaths = files.map(fileName => {
            // iterates for actual images such as img1, img2
            return `/img-albums/${img}/${fileName}`
        })
        console.log(imagePaths)
        return NextResponse.json({
            message: "path-to-img-albums: " + imagePaths
        })
    } catch (err) {
        return NextResponse.json({
            error: err + "something went wrong"
        })
    }

}