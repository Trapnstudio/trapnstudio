import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';

export default function Home() {
  const [audio, setAudio] = useState<Howl | undefined>(undefined);

  const play = () => {
    if (audio) {
      audio.stop();
      setAudio(undefined);
    } else {
      const sound = new Howl({
        src: ['vibe.mp3'],
        autoplay: true,
        loop: true,
        volume: 0.25,
        preload: true,
      });
      sound.seek(6);
      setAudio(sound);
    }
  };

  useEffect(() => {
    return () => {
      audio?.stop();
    };
  }, [audio]);

  return (
    <>
      <Head>
        <title>TRAPNSTUDIO</title>
        <meta
          name="description"
          content="TRAPNSTUDIO™ is a tech studio that is working on enhancing
          the way humans experience the world with the use of tech"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1>TRAPNSTUDIO</h1>

        <p>
          TRAPNSTUDIO™ is a tech studio that is working on enhancing the way
          humans experience the world with the use of tech.
        </p>

        <h2>Work</h2>
        <ul>
          <li>
            <a href="https://mindfulgram.app" target="_blank">
              Mindfulgram
            </a>
            <br />A web extension to use Instagram in a mindful way.
          </li>
          <li>
            <a href="https://thegiftapp.org" target="_blank">
              The Gift App
            </a>
            <br />
            An app to increase self worth.
          </li>
          <li>
            <a href="https://vibecue.app" target="_blank">
              Vibecue
            </a>
            <br />A platform that will democratize the music that is played.
          </li>
          <li>
            <a href="https://sortspotifyplaylists.com" target="_blank">
              Playsorter
            </a>
            <br />A web app that sorts Spotify playlists based on various
            features.
          </li>
          <li>
            <a href="https://drilllatino.net" target="_blank">
              Drill Latino
            </a>
            <br />A multi-platform Latin Drill playlist.
          </li>
          <li>
            <a href="https://trapcorridosboard.com" target="_blank">
              Trap y Corridos Soundboard
            </a>
            <br />A web app that allows users to play and share catchphrases
            that are popular among the music genres of Latin Trap and Corridos
            via a soundboard-like interface.
          </li>
        </ul>

        <h2>Team</h2>
        <ul>
          <li>
            <a href="https://memije.io" target="_blank">
              Christian
            </a>
            <br />
            Founder
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carlosmemije" target="_blank">
              Carlos
            </a>
            <br />
            Software engineer
          </li>
        </ul>

        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://github.com/Trapnstudio" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/trapnstudio" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>

        <button onClick={play}>🔊 ENHANCE</button>
      </main>
    </>
  );
}
