import React from 'react'
import Player from './Player'
import players from '../Players'

const PlayerList = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: 16 }}>
            {players.map(player => {
                return <Player
                name={player.name}
                team={player.team}
                nationality={player.nationality}
                jersyNumber={player.jersyNumber}
                age={player.age}
                imageURL={player.imageURL} />
            })}
        </div>
    )
}
export default PlayerList;