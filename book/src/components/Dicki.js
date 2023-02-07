import React from 'react'

function Dicki({ name, age, deletes }) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button onClick={deletes}>Удалить</button>

        </div>
    )
}

export default Dicki