import React from "react";
import Image from "next/image";

const CalloutSection = () => {
    return (
        <div className="border-t-2 border-b-2 bg-indigo-400 mt-12 p-8">
            <div className="grid grid-cols-12 container">
                <div className="col-span-8 flex flex-col place-self-center">
                    <h2>Stay in the Know</h2>
                    <p>
                        Stay up-to-date with the latest tech news and
                        announcements by reading our curated articles, ranging
                        from bite-sized pieces to in-depth features. Perfect for
                        busy users who want to stay informed on the go and for
                        those who prefer to dive deep into a topic.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CalloutSection;
