import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Player from '../components/Player'


export default function Home() {

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)


  const [songs, setSongs] = useState([
    {
      title: "Pakistan National Anthem",
      artist: "Sahar Ali",
      img_src: "./images/img1.jpg",
      src: "./audios/pak-anthem.mp3"
    },
    {
      title: "Zindagi Gulzar Hai",
      artist: "Hadiqa Keyani",
      img_src: "./images/img2.jpg",
      src: "./audios/zgh.mp3"
    }
  ])
  return (
    <div>
      <head>
        <title>
          MusicPk
        </title>
        <meta name="keywords" content="music, pakistan" />
      </head>
      <h1>
        Components here
      </h1>
      <Player
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]}

      />

    </div>

  )
}
