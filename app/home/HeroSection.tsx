import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <div className="border-b bg-[#EEF2ED]">
            <section className="grid container grid-cols-1 sm:grid-cols-12 pt-6 pb-8">
                <div className="col-span-7 w-full place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl md:leading-normal">
                        Leo&apos;s World in Articles
                    </h1>
                    <h2>
                        Stay up-to-date with the latest tech news and
                        announcements.
                    </h2>
                    <ul>
                        <li className="mr-2">
                            ✔️<span>Industry News</span>
                        </li>
                        <li className="mr-2">
                            ✔️<span>Product Launches</span>
                        </li>
                        <li className="mr-2">
                            ✔️<span>Innovation Spotlights</span>
                        </li>
                    </ul>
                    <Link
                        href={"/blog/all"}
                        className="text-white block w-fit bg-pink-500 px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
                    >
                        Browse Articles
                    </Link>
                </div>
                <div className="col-span-5">
                    <Image
                        src="/coding.png"
                        width={300}
                        height={300}
                        alt="Person Coding"
                    />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
