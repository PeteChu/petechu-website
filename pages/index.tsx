import { useState } from "react";
import { useRouter } from "next/router";
import Welcome from "../components/Welcome";

export default function Home() {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [clickable, setClickable] = useState(false);

    setTimeout(() => {
        setClickable(false);
    }, 8000);

    return (
        <div className="bg-black">
            <div
                className={
                    clickable && clicked
                        ? "cursor-pointer translateUp "
                        : clickable
                        ? "cursor-pointer"
                        : "cursor-default"
                }
                onClick={() => {
                    if (!clickable) {
                        return;
                    }
                    setClicked(true);
                    setTimeout(() => {
                        const el = document.querySelector(".translateUp");
                        el.addEventListener("animationend", () => {
                            router.push("/playground");
                        });
                    }, 100);
                }}
            >
                <Welcome />
            </div>
        </div>
    );
}
