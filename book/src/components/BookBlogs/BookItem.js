import React, { Component } from 'react'

export class BookItem extends Component {
    render() {
        return (
            <div className='book_item'>
                <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowDesc(this.props.item)} />
                <div className='book_item_text'>
                    <h3>{this.props.item.author}</h3>
                    <p>{this.props.item.name}</p>
                    {/* <p>{this.props.item.desc}</p> */}
                    <p className='price'>{this.props.item.price}$</p>
                    <div className='add_to_cart'></div>
                </div>
            </div>
        )
    }
}

export default BookItem