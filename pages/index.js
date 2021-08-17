import Head from "next/head";

export default function Home() {
    return (
        <div className="bg-black">
            <Head>
                <title>PeteChu</title>
            </Head>
            <section className="h-screen flex flex-col justify-center items-center font-source-code-pro">
                <div className="introduce hidden md:block">
                    <p className="introduce-name my-1">
                        Hello, my name is
                        <span className="alias-name"> Phuengton.</span>
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="introduce mobile-screen md:hidden">
                        <p className="introduce-mobile-hello my-1">
                            Hello, my name is
                        </p>
                    </div>
                    <div className="introduce mobile-screen md:hidden w-min self-center">
                        <p className="introduce-mobile-name alias-name">
                            Phuengton.
                        </p>
                    </div>
                </div>
                {/* <p className="introduce-position pt-8 text-white">I'm a Full Stack Developer.</p> */}
            </section>
        </div>
    );
}
