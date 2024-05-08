import { useState } from "react";



function Player ({ name , symbol , isActive }) {
    const [isEditing , setIsEditing] = useState(false);
    const [playerName , setPlayerName] = useState(name)
    const handleEditButton = () => {
        setIsEditing((prevState) => !prevState);
    }
    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing ? <span className="player-name" >{playerName}</span> : <input value={playerName} onChange={handleChange}></input>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}

export default Player;