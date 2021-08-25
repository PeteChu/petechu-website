import Head from "next/head";
import styles from "../components/Home.module.scss";

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
                <div className="welcome-message">
                    <div className={styles.WelcomeButton}>
                        <p className={styles.WelcomeText}>
                            Welcome to my site!
                        </p>
                    </div>
                    <div className={styles.WelcomeButtonMobile}>
                        <p className={styles.WelcomeText}>
                            Welcome to my site!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
