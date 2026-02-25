import { useRef } from "react";
import styles from "./Hero.module.css";
import { useHeroVideo } from "./useHeroVideo";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { handleMouseEnter, handleMouseLeave } =
    useHeroVideo(videoRef);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>
          Prepare-se no Brasil.
          <br />
          Conquiste seu espaço na Europa.
        </h1>

        <p>
          Cursos práticos, estratégias reais e orientação
          profissional para brasileiros que querem crescer
          no mercado europeu.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Começar agora
          </button>
          <button className={styles.secondary}>
            Ver como funciona
          </button>
        </div>
      </div>

      <div
        className={styles.videoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
       <video
         ref={videoRef}
         muted
            loop
            playsInline
            preload="metadata"
            poster="/img/imgHero.jpeg"
            className={styles.video}
            >
  <source src="/video/heroVideo.mp4" type="video/mp4" />
</video>
      </div>
    </section>
  );
}