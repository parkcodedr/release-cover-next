"use client";
import { useFormPreview } from "@/context/PreviewContext";
import { formatThousand } from "@/utils/formatThousand";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const CoverPreview = () => {
  const { formState, setFormState } = useFormPreview();

  console.log({ formState });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-10 cover-container">
      <main
        className="container flex justify-between min-h-[850px] bg-gray-50"
        style={{
          backgroundImage: `url(${formState?.selectedFile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-2/4 p-5">
          <h1
            className={`uppercase text-6xl font-bold text-left 
              text-white
            `}
            style={{
              color: formState.text_color ? formState.text_color : "white",
            }}
          >
            {formState.artist}
          </h1>
          <div
            className="bg-white rounded-md p-5 w-4/5 my-5"
            style={{
              backgroundColor: formState.bg_color ? formState.bg_color : "",
            }}
            draggable
          >
            <h1 className="font-semibold text-2xl my-2">Biography</h1>
            <div
              className="flex flex-col gap-4 text-sm leading-5.5 text-left"
              dangerouslySetInnerHTML={{ __html: formState?.biography }}
            ></div>
          </div>
          <div
            className={`
             bg-white rounded-md p-5 w-4/5 my-10`}
            style={{
              backgroundColor: formState.bg_color ? formState.bg_color : "",
            }}
          >
            <h1 className="font-semibold text-2xl my-2">DID YOU KNOW!</h1>
            <div
              className="flex flex-col gap-2 text-sm leading-4 text-left"
              dangerouslySetInnerHTML={{ __html: formState?.know }}
            ></div>
          </div>
          <div
            className={`flex gap-5 ${
              formState.text_color ? formState.text_color : "text-white"
            }`}
            style={{
              color: formState.text_color ? formState.text_color : "white",
            }}
          >
            <div className="flex flex-col leading-none">
              <p className="font-bold text-lg">
                {formatThousand(Number(formState.monthly_listener))}
              </p>
              <p className="text-[10px] font-semibold">Spotify Monthly</p>
              <p className="text-sm font-semibold">LISTENERS</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">
                {formatThousand(Number(formState.instagram_follower))}
              </p>
              <BsInstagram size={20} />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">
                {formatThousand(Number(formState.twitter_follower))}
              </p>
              <FiTwitter size={20} />
            </div>
          </div>
        </div>
        <div
          className={`w-2/5 flex flex-col items-end p-5 
            text-white
          `}
          style={{
            color: formState.text_color ? formState.text_color : "white",
          }}
        >
          <div className="w-3/5 text-justify">
            <p className="uppercase text-sm leading-5 font-semibold drop-shadow-md">
              {formState.music_quote}
            </p>
          </div>
          <li className="text-lg font-semibold mt-10">
            -{formState.artist}: {formState.release_name}
          </li>
          <div className="mt-20 text-right text-xs font-semibold">
            <h2 className="underline uppercase font-semibold text-base leading-6">
              Musical Heroes
            </h2>
            <div className="flex gap-x-3 w-3/5 flex-wrap justify-end ml-auto border-b border-white py-2">
              {formState.music_heroes.split(",").map((item, index) => (
                <p className="text-xs uppercase" key={index}>
                  {" "}
                  - {item}
                </p>
              ))}
            </div>
            <hr className="w-1" />
          </div>
          <div className="mt-5 text-right text-xs font-semibold">
            <h2 className="underline uppercase font-semibold text-base leading-6">
              Currently Listening to
            </h2>
            <div className="flex gap-x-3 w-3/5 flex-wrap justify-end ml-auto border-b border-white py-2">
              {formState.current_listening.split(",").map((item, index) => (
                <p className="text-xs uppercase" key={index}>
                  {" "}
                  - {item}
                </p>
              ))}
            </div>
            <hr className="w-1" />
          </div>
          <div className="mt-5 text-right ">
            <h2 className="underline uppercase font-semibold text-base leading-6">
              BenchMark
            </h2>
            <div className="flex justify-end text-xs font-semibold leading-6">
              <ul className="list-disc w-3/5 text-right">
                <li>MONTHLY LISTENERS: 500K MONTHLY LISTENERS</li>
                <li>
                  SOCIAL MEDIA FOLLOWERS:{" "}
                  {formatThousand(Number(formState.social_followers))} FOLLOWERS
                  ACROSS INSTAGRAM AND TWITTER
                </li>
                <li className="upercase">
                  CHAT PERFORMANCE: {formState.chat_performance}
                </li>
              </ul>
            </div>
            <section className="flex justify-end mt-10 text-black">
              <div
                className={`rounded-md ${
                  formState.bg_color ? formState.bg_color : "bg-white"
                } p-5 w-3/5 text-left`}
                style={{
                  backgroundColor: formState.bg_color
                    ? formState.bg_color
                    : "white",
                }}
              >
                <h2 className="text-sm font-semibold my-2">ALBULM TALKS</h2>
                <p className="text-sm ">{formState.album_talk}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoverPreview;
