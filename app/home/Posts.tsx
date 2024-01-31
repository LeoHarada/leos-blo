import React from "react";
import { PrismaClient } from "@prisma/client";
import PostCard from "./PostCard";

const prisma = new PrismaClient();

type Props = {};

const Posts = async (props: Props) => {
    const posts = await prisma.post.findMany();
    const sortedPosts = posts.sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const displayedPosts = sortedPosts.slice(0, 3);

    const bgClasses = ["bg-[#EDC9E0]", "bg-[#ffff86]", "bg-[#cefffd]"];

    return (
        <div>
            <h2 className="text-4xl text-center mt-6">Trending</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mx-4 text-center">
                {displayedPosts.map((post, index) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        className={`${bgClasses[index]} hover:-translate-y-1 duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Posts;
