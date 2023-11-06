import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const CoverPreview = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-10 cover-container">
      <main
        className="container flex justify-between min-h-[850px] bg-gray-50"
        style={{
          backgroundImage: "url('/assets/images/bg-cover.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-2/4 p-5">
          <h1 className="uppercase text-6xl font-bold text-left text-white">
            RaysMuzik
          </h1>
          <div className="bg-white rounded-md p-5 w-4/5 my-5" draggable>
            <h1 className="font-semibold text-2xl my-2">Biography</h1>
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-5.5 text-left">
                RaysMuzik is a gifted vocalist and songwriter, and he grew up
                listening to different genres of music, but fell in love with
                the sweet melodies of Afrobeat, Rhythm &amp; Blues, Reggae, and
                Hip hop
              </p>
              <p className="text-sm leading-5.5 text-left">
                Rahman Adeboriola Bisiriyu also known as RaysMuzik, is a
                Nigerian singer, songwriter, and performer, born in Lagos,
                Nigeria. He is best known for his unique blend of Afro-pop, R&B,
                and soulful music
              </p>
              <p className="text-sm leading-5.5 text-left">
                Raysmuzik released his first single, "My Girl," in 2016 which
                quickly gained popularity on the local music scene. The success
                of the single motivated him to release more music, and he
                followed up with the release of "Fine Girls" and "Badda Man" in
                collaboration with Dj Sean both of which were well-received by
                music lovers
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md p-5 w-4/5 my-10">
            <h1 className="font-semibold text-2xl my-2">DID YOU KNOW!</h1>
            <div className="flex flex-col gap-2">
              <li className="text-sm leading-4 text-left">
                RaysMuzik’s first single garnered nearly 100,000 streams in less
                than three month
              </li>
              <li className="text-sm leading-4 text-left">
                RaysMuzik’s “My girl” was championed by BBC 1]tra, Beat FM and
                leading African music publications
              </li>
              <li className="text-sm leading-4 text-left">
                He received a nomination for Best Newcomer category In 201S
                during the AFRIMMA awards
              </li>
              <li className="text-sm leading-4 text-left">
                RaysMuzik performed at the AFRIMMA awards in 201R
              </li>
              <li className="text-sm leading-4 text-left">
                aysMuzik signed recording deal in 2017 with Hustle-ink
                Entertainment, a Nigerian-based music label
              </li>
            </div>
          </div>
          <div className="flex gap-5 text-white">
            <div className="flex flex-col leading-none">
              <p className="font-bold text-lg">2.1K</p>
              <p className="text-[10px] font-semibold">Spotify Monthly</p>
              <p className="text-sm font-semibold">LISTENERS</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">3.3K</p>
              <BsInstagram size={20} />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">2.2K</p>
              <FiTwitter size={20} />
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-end p-5 text-white">
          <div className="w-3/5 text-justify">
            <p className="uppercase text-sm leading-5 font-semibold drop-shadow-md">
              A melodic intimacy shines front and centre as he envisions his
              ideal partner and the intoxicating desires that take control when
              true love dissolves into lust.
            </p>
          </div>
          <li className="text-lg font-semibold mt-10">-Raysmuzik Hmm Hmm</li>
          <div className="mt-20 text-right text-xs font-semibold">
            <h2 className="underline uppercase font-semibold text-base leading-6">
              Musical Heroes
            </h2>
            <div className="flex gap-x-3 w-3/5 flex-wrap justify-end ml-auto border-b border-white py-2">
              <p className="text-xs uppercase"> - Michael Jackson</p>
              <p className="text-xs uppercase">- bob marley </p>
              <p className="text-xs uppercase"> - Burna BoY</p>
              <p className="text-xs uppercase"> - Davido </p>
              <p className="text-xs uppercase"> - Davido </p>
              <p className="text-xs uppercase"> - Fela Kuti & Wande Coal</p>
            </div>
            <hr className="w-1" />
          </div>
          <div className="mt-5 text-right text-xs font-semibold">
            <h2 className="underline uppercase font-semibold text-base leading-6">
              Currently Listening to
            </h2>
            <div className="flex gap-x-3 w-3/5 flex-wrap justify-end ml-auto border-b border-white py-2">
              <p className="text-xs uppercase"> - Michael Jackson</p>
              <p className="text-xs uppercase">- bob marley </p>
              <p className="text-xs uppercase"> - Burna BoY</p>
              <p className="text-xs uppercase"> - Davido </p>
              <p className="text-xs uppercase"> - Davido </p>
              <p className="text-xs uppercase"> - Fela Kuti & Wande Coal</p>
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
                  SOCIAL MEDIA FOLLOWERS: 500K FOLLOWERS ACROSS INSTAGRAM AND
                  TWITTER
                </li>
                <li>
                  CHAT PERFORMANCE: TOP 20 RECORD ON NIGERIA MUSIC CHART 2023
                </li>
              </ul>
            </div>
            <section className="flex justify-end mt-10 text-black">
              <div className="rounded-md bg-white p-5 w-3/5 text-left">
                <h2 className="text-sm font-semibold my-2">ALBULM TALKS</h2>
                <p className="text-sm ">
                  Raysmuzik _ Hmm Hmm "RaysMuzik, known for his potent lyricism
                  and classic Afrobeat influences, presents a captivating blend
                  of punchy percussion and spacey synths in this release
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoverPreview;
