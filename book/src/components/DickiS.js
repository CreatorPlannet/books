import React from 'react'
import Dicki from './Dicki'

function DickiS({ posts, deletes }) {
    const element = posts.map(el => {
        const { id, ...elItem } = el;

        return (
            <Dicki key={id} {...elItem} deletes={() => deletes(id)} />
        )
    })

    return (
        <div >
            {element}
        </div>
    )
}

export default DickiS