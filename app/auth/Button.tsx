"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

export const Button = (props: Props) => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (session) {
        return (
            <div className="flex items-center">
                <Link
                    href="/blog/new"
                    className="mr-6 relative px-6 py-3 font-semibold text-white group"
                >
                    <span className="absolute inset-0 w-full h-full transition duration-100 ease-out transform -translate-x-1 -translate-y-1 bg-[#808080] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black transition duration-300 transform translate-x-1 translate-y-1 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative">✍️ Write a Post</span>
                </Link>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        signOut();
                    }}
                    className="relative px-6 py-3 font-semibold text-white group"
                >
                    <span className="absolute inset-0 w-full h-full transition duration-100 ease-out transform -translate-x-1 -translate-y-1 bg-[#808080] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-black transition duration-100 transform translate-x-1 translate-y-1 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative">Sign Out</span>
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center">
            <button
                onClick={() => signIn()}
                className="relative px-6 py-3 font-semibold text-white group"
            >
                <span className="absolute inset-0 w-full h-full transition duration-100 ease-out transform -translate-x-1 -translate-y-1 bg-[#808080] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black transition duration-100 transform translate-x-1 translate-y-1 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="relative">Sign In</span>
            </button>
        </div>
    );
};
