import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>PeteChu</title>
      </Head>
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="introduce font-source-code-pro">
          <div className="hidden md:block">
            <p className="introduce-name my-1">Hello, my name is 
              <span className="alias-name"> Phuengton.</span>
            </p>
          </div>
          <div className="mobile-screen md:hidden">
            <p className="introduce-hello my-1">Hello, my name is </p>
            <p className="introduce-name alias-name"> Phuengton.</p>
          </div>
        </div>
        {/* <p className="introduce-position pt-8 text-white">I'm a Full Stack Developer.</p> */}
      </section>
    </div>
  );
}
