import Head from "next/head";
import styles from "../styles/Welcome.module.scss";

const Welcome = () => {
    return (
        <div className="bg-black">
            <Head>
                <title>PeteChu</title>
            </Head>
            <section className="h-screen flex flex-col justify-center items-center font-source-code-pro">
                <div id="introduce-message">
                    <div className={`${styles.introduce} hidden md:block`}>
                        <p className={`${styles.introduceName} my-1`}>
                            Hello, my name is
                            <span className={styles.aliasName}>
                                {" "}
                                Phuengton.
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <div className={`${styles.introduce} md:hidden`}>
                            <p
                                className={`${styles.introduceMobileHello} my-1`}
                            >
                                Hello, my name is
                            </p>
                        </div>
                        <div
                            className={`${styles.introduce} md:hidden w-min self-center`}
                        >
                            <p
                                className={`${styles.introduceMobileName} ${styles.aliasName}`}
                            >
                                Phuengton.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="welcome-message">
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
};

export default Welcome;
