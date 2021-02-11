import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>PeteChu</title>
      </Head>

      <section className="container">
        <div className="introduce flex flex-col">
          <p className="my-1">Hi, i'am</p>
          <p className="my-1 alias-name">PeteChu</p>
          <p className="my-1">i'm a Full Stack Developer</p>
        </div>

        <div className="learn-more flex flex-col items-center">
          <p className="text-white text-3xl font-semibold">
            Learn more about me
          </p>
          <FontAwesomeIcon
            className="text-white text-4xl text-thin mt-5"
            icon={faArrowDown}
            width="0"
          />
        </div>
      </section>

      <section className="container">
        <div className="my-3">
          <div className="text-white" id="about-me-1">
            Occaecat eu mollit labore est sunt pariatur labore fugiat est
            deserunt quis. Adipisicing aute veniam aliqua amet ullamco aliquip
            enim incididunt dolore. Cupidatat nulla nostrud voluptate et sit
            sunt incididunt enim ex labore aliquip. Lorem ipsum reprehenderit
            excepteur nulla voluptate culpa ut reprehenderit.
          </div>
        </div>
      </section>

      <div className="jump-to-top flex flex-col items-center cursor-pointer">
        <FontAwesomeIcon
          className="text-white text-1xl mt-5"
          icon={faArrowUp}
          width="0"
        />
        <p className="text-white text-md font-semibold">Jump to top</p>
      </div>
    </div>
  );
}
