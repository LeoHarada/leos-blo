"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button as AuthButton } from "../auth/Button";
import { SessionProvider } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
    return (
        <SessionProvider>
            <div className="px-2 py-[7px] border-b flex justify-between">
                <Link href={"/"} className="text-4xl px-2 py-4">
                    <Image src="/logo.svg" alt="logo" width={75} height={75} />
                </Link>
                <AuthButton />
            </div>
        </SessionProvider>
    );
};

export default Header;
