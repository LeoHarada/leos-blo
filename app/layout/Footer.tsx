import React from "react";
import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/github-icon.svg";
import linkedinIcon from "../../public/linkedin-icon.svg";

type Props = {};

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-12 px-4">
            <div className="flex container justify-between">
                <div className="flex flex-row items-center">
                    <div className="text-2xl mb-3">Leo's Blog</div>
                    <div className="text-sm">© 2024 Leo's Blog</div>
                </div>
                <div className="flex">
                    <a href="https://github.com/LeoHarada" target="_blank">
                        <Image
                            src={githubIcon}
                            alt="github link"
                            width={32}
                            height={32}
                            className="mr-3"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/leoharada/"
                        target="_blank"
                    >
                        <Image
                            src={linkedinIcon}
                            alt="linkedin link"
                            width={32}
                            height={32}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
