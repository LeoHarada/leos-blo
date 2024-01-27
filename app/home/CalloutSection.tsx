import React from "react";
import Image from "next/image";
import NewsletterSubscribe from "./NewsletterSubscribe";

const CalloutSection = () => {
    return (
        <div className="border-t-2 mt-12 sm:p-8">
            <div className="container flex flex-col justify-evenly items-center md:flex-row">
                <div className="place-self-center px-4 my-12 text-center md:max-w-[60%]">
                    <h2 className="font-bold text-xl">Stay in the Know</h2>
                    <p className="mb-4">
                        Stay up-to-date with the latest tech news and
                        announcements by reading our curated articles, ranging
                        from bite-sized pieces to in-depth features. Perfect for
                        busy users who want to stay informed on the go and for
                        those who prefer to dive deep into a topic.
                    </p>
                    <NewsletterSubscribe />
                </div>
                <div className="mb-8">
                    <Image
                        priority={true}
                        className="w-[150px] h-[150px] sm:h-[300px]"
                        src="/coding.svg"
                        width={300}
                        height={300}
                        alt="Person Coding"
                    />
                </div>
            </div>
        </div>
    );
};

export default CalloutSection;
