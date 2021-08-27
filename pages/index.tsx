import { useState } from "react";
import { useRouter } from "next/router";
import Welcome from "../components/Welcome";

export default function Home() {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);

    return (
        <div className="bg-black">
            <div
                className={
                    clicked ? "cursot-pointer translateUp" : "cursor-pointer"
                }
                onClick={() => {
                    setClicked(true);
                    setTimeout(() => {
                        const el = document.querySelector(".translateUp");
                        el.addEventListener("animationend", () => {
                            router.push("/blog");
                        });
                    }, 100);
                }}
            >
                <Welcome />
            </div>
        </div>
    );
}
