import React from "react";
import { PrismaClient } from "@prisma/client";
import PostCard from "./PostCard";

const prisma = new PrismaClient();

type Props = {};

const Posts = async (props: Props) => {
    const posts = await prisma.post.findMany();

    const bgClasses = ["bg-[#EDC9E0]", "bg-[#ffff86]", "bg-[#cefffd]"];

    return (
        <div>
            <h2 className="text-4xl text-center mt-6">Trending</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mx-4 text-center">
                {posts.map((post, index) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        className={bgClasses[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Posts;
