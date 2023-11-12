import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export const POST = async(req:Request)=>{
    try {
        const body = await req.json();
    const {artist,
        release_name,
        spotify_listener,
        instagram_follower,
        twitter_follower,
        music_heroes,
        current_listening,
        album_talk,
        monthly_listener,
        social_followers,
        chat_performance,
        bg_color,
        text_color} =  body;

        const release = await prismadb.release.create({
            data:{
                artist,
            release_name,
            spotify_listener,
            instagram_follower,
            twitter_follower,
            music_heroes,
            current_listening,
            album_talk,
            monthly_listener,
            social_followers,
            chat_performance,
            bg_color,
            text_color
            }
        })
        return  NextResponse.json(release);
    } catch (error) {
        console.log('[CREATE_RELEASE_ERROR]',error);
        return new NextResponse('Interal Server Error',{status:500})
    }
}