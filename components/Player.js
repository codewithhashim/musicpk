import React from "react";
import style from "../styles/player.module.css"

function Player(props) {
    return (
        <div className={style.cplayer}>
            <audio></audio>
            <h4>Playing Now</h4>
            {/* Info about music */}
            <p>
                Coming up: {props.nextSong.title} by {props.nextSong.artist}
            </p>
        </div>
    )
}

export default Player
