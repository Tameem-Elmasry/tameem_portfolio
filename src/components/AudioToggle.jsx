import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AudioToggle = () => {
    const audioRef = useRef(new Audio("/background_quraan.mp3"));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.5;

        const handleFirstInteraction = () => {
            audio
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((err) => {
                    console.error("Autoplay error:", err);
                });

            // Remove event listeners after first interaction
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };

        // Listen for any interaction to trigger autoplay
        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("keydown", handleFirstInteraction);

        return () => {
            audio.pause();
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };
    }, []);

    const toggleAudio = () => {
        const audio = audioRef.current;

        if (audio.paused) {
            audio
                .play()
                .then(() => setIsPlaying(true))
                .catch((err) => {
                    console.error("Play error:", err);
                });
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    return (
        <button
            onClick={toggleAudio}
            className="toggle-theme-btn"
            title={isPlaying ? "Stop Quraan" : "Play Quraan"}
        >
            {isPlaying ? <Pause className={`sm:size-[24px] size-[18px]`} /> : <Play className={`sm:size-[24px] size-[18px]`} />}
        </button>
    );
};

export default AudioToggle;
