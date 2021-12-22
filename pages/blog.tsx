import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

const Card = styled.div.attrs({
    className:
        "h-fit-content w-3/4 md:w-2/3 my-4 bg-gray-100 rounded-xl cursor-pointer",
})``;

const Title = styled.p.attrs({
    className:
        "text-xl font-semibold hover:text-blue-800 hover:text-opacity-90",
})``;

const Tag = styled.a.attrs({
    className:
        "mx-1 text-gray-600 hover:text-black text-sm border border-blue-100 hover:border-blue-300 bg-blue-100 bg-opacity-50 rounded text-center m-0.5 p-1 cursor-pointer",
})``;

const ImageCover = styled.div.attrs({
    className: "mt-4 h-44 md:h-60",
})``;

function Blog({ posts = [] }) {
    return (
        <div className="bg-black flex flex-wrap justify-around">
            <Head>
                <title>Blog</title>
            </Head>
            {posts.slice(-10).map((post, index) => {
                return (
                    <Card
                        className="flex flex-col"
                        key={post.id}
                        onClick={() => {
                            window.open(post.url, "_blank");
                        }}
                    >
                        <div className="flex-grow my-2 pt-2 px-4">
                            <Title>{post.title}</Title>
                            <small className="font-light">
                                {post.published_at}
                            </small>
                            <p className="mt-2 font-light">
                                {post.description}
                            </p>
                            <div className="mt-2 tags flex flex-wrap">
                                {post.tag_list.map((tag) => {
                                    return (
                                        <Tag
                                            href="#"
                                            key={`${index}-${tag}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            {`#${tag}`}
                                        </Tag>
                                    );
                                })}
                            </div>
                        </div>
                        {post.cover_image && (
                            <ImageCover className="relative">
                                <Image
                                    className="cover-image rounded-b-xl"
                                    src={post.cover_image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="article image cover"
                                ></Image>
                            </ImageCover>
                        )}
                    </Card>
                );
            })}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const headers = {
        "api-key": process.env.DEV_TO_API_TOKEN,
    };
    const res = await fetch(process.env.DEV_TO_API_URL, {
        headers,
    });
    const posts = res.status !== 200 ? [] : await res.json();
    return {
        props: {
            posts,
        },
    };
};

export default Blog;
