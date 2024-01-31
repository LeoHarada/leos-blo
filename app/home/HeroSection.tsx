import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <div className="border-b">
            <section className="grid container grid-cols-1 sm:grid-cols-12 pt-6 pb-8">
                <div className="flex flex-col items-center col-span-7 w-full place-self-center text-center justify-self-start">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl md:leading-normal">
                        Leo&apos;s World Through Articles
                    </h1>
                    <h2 className="mt-3.5 font-bold">
                        Stay up-to-date on my coding journey and find out
                        what&apos;s going on in my world.
                    </h2>
                    <ul>
                        <li className="mr-6">
                            ✔️<span>New Technologies</span>
                        </li>
                        <li className="mr-6">
                            ✔️<span>Project Building</span>
                        </li>
                        <li className="mr-6">
                            ✔️<span>Personal Development</span>
                        </li>
                    </ul>
                    <Link
                        href={"/blog/all"}
                        className="mr-6 mt-5 relative px-6 py-3 font-semibold text-white rounded-lg group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-100 ease-out transform translate-x-1 translate-y-1 bg-[#ffbefb] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black transition duration-100 transform -translate-x-1 -translate-y-1 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="relative">Browse Articles</span>
                    </Link>
                </div>
                <div className="col-span-5 place-self-center mt-12">
                    <Image
                        src="/avatar.png"
                        alt="avatar"
                        width={300}
                        height={300}
                    />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
