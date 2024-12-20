import { ConnectDB } from "@/lib/config/db";
import CourseModel from "@/lib/models/CourseModel";

const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises'

const LoadDB = async ()=>{
    await ConnectDB();
}
LoadDB();
export async function GET(request){
    return NextResponse.json({msg:"API Working"})
}
export async function POST(request){
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = '/${timestamp}_${image.name}';

        const courseData = {
            title:`${formData.get('title')}`,
            description:`${formData.get('description')}`,
            category:`${formData.get('category')}`,
            author:`${formData.get('author')}`,
            image:`${imgUrl}`,
            authorImg:`${formData.get('authorImg')}`,
        }

        await CourseModel.create(courseData);
        console.log("Course Saved");
    return NextResponse.json({success:true,msg :"Course Added"})
}