import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
export const GET = async ()=> {

    try {
        await connect();
        const posts = await Post.find();

        const postsJSON = JSON.stringify(posts);

        return new NextResponse(postsJSON, {status:200});
    } catch (error) {
        return new NextResponse("DataBase Error", {status: 500})
    }
   
}

export const POST = async (request:Request) => {
    const body = await request.json();
  
    const newPost = new Post(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };