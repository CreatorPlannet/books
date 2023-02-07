import React from 'react'


function AuthorItem({ name, surname, age, increase, onDelete }) {
    let classNames = 'colorText'
    if (increase) {
        classNames += ' increase'
    }

    return (
        <div className='AuthorItem'>
            <div>
                <img src={name}/>
                <h3>{name}</h3>
                <h3>{surname}</h3>
                <p>{age}</p>
                <button onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
}

export default AuthorItem