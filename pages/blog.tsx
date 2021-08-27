import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

function Blog({ posts }) {
    return (
        <div className="bg-black flex flex-wrap justify-around">
            <Head>
                <title>Blog</title>
            </Head>
            {posts.map((post) => {
                return (
                    <div
                        className="flex flex-col w-3/4 md:w-2/3 my-4 bg-gray-100 rounded-xl cursor-pointer"
                        key={post.id}
                    >
                        <div className="flex-grow my-2 pt-2 px-4">
                            <p className="text-xl font-semibold hover:text-blue-800 hover:text-opacity-90">
                                {post.title}
                            </p>
                            <p className="mt-2 font-light">
                                {post.description}
                            </p>
                            <div className="mt-2 tags flex flex-wrap">
                                {post.tag_list.map((tag) => {
                                    return (
                                        <a
                                            className="tag mx-1 text-gray-600 hover:text-black text-sm border border-blue-100 hover:border-blue-300 bg-blue-100 bg-opacity-50 rounded text-center m-0.5 p-1 cursor-pointer"
                                            href="#"
                                        >
                                            #{tag}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        {post.cover_image && (
                            <div className="relative mt-4 h-44 md:h-60">
                                <Image
                                    className={"cover-image rounded-b-xl"}
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
