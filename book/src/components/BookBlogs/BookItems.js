import React, { Component } from 'react'
import BookItem from './BookItem'

export class BookItems extends Component {
    render() {
        return (
            <div>
                <main>
                    
                    {this.props.items.map(el => (
                        <BookItem key={el.id} item={el} onShowDesc={this.props.onShowDesc} />
                    ))}
                    
                </main>
            </div>
        )
    }
}

export default BookItems