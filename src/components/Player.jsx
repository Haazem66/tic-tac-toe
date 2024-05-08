import { useState } from "react";



function Player ({ name , symbol }) {
    const [isEditing , setIsEditing] = useState(false);
    const [pName , setPname] = useState(name)
    const handleEditButton = () => {
        setIsEditing(!isEditing);
    }
    const handleSaveButton = () => {
        setPname()
    }
    return (
        <li>
            <span className="player">
                {!isEditing ? <span className="player-name" >{name}</span> : <input></input>}
              <span className="player-symbol">{symbol}</span>
            </span>
            {!isEditing ? <button onClick={handleEditButton}>Edit</button> : <button onClick={handleEditButton}>Save</button> }
          </li>
    )
}

export default Player;