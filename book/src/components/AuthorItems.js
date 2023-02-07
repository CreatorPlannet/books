import React from 'react'
import AuthorItem from './AuthorItem'

function AuthorItems({author, onDelete}) {

    const elem = author.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            <AuthorItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <div className='authorList'>
            {elem}
        </div>
    )
}

export default AuthorItems
