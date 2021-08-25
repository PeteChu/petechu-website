import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

function Blog({ posts }) {
    return (
        <div className="flex flex-wrap bg-gray-100 justify-around">
            <Head>
                <title>Blog</title>
            </Head>
            {posts.map((post) => {
                return (
                    <div
                        className="flex flex-col h-auto md:h-72 xl:w-80 md:w-72 w-full m-2 bg-white shadow-lg rounded-lg cursor-pointer"
                        key={post.id}
                    >
                        <div className="my-2 p-4 bg-white">
                            <p className="text-lg font-semibold hover:text-blue-800 hover:text-opacity-90">
                                {post.title}
                            </p>
                            <div className="tags flex flex-wrap">
                                {post.tag_list.map((tag) => {
                                    return (
                                        <a
                                            className="tag mx-1 text-gray-600 hover:text-black border border-blue-100 hover:border-blue-300 bg-blue-100 bg-opacity-50 rounded text-center m-0.5 p-1 cursor-pointer"
                                            href="#"
                                        >
                                            #{tag}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        {post.cover_image && (
                            <div className="relative h-64 m-2">
                                <Image
                                    className="cover-image rounded"
                                    src={post.cover_image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="article image cover"
                                ></Image>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch("https://dev.to/api/articles");
    const posts = await res.json();
    return {
        props: {
            posts,
        },
    };
};

export default Blog;
