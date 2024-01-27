"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import React from "react";

export default function Layout({ children, session }: any) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
