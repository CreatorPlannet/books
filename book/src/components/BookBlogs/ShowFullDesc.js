import React, { Component } from 'react'
import '../../index.css'

export class ShowFullDesc extends Component {
  render() {
    return (
      <div className='full-desc'>
          <div>
              <div className='close' onClick={() => this.props.onShowDesc()}>close</div>
                <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowDesc()} />
                <div className='book_item_text'>
                    <h3>{this.props.item.author}</h3>
                    <p>{this.props.item.name}</p>
                    <p>{this.props.item.desc}</p>
                    <p>Жанр: {this.props.item.category}</p>

                    <p className='price'>{this.props.item.price}$</p>
                    <div className='add_to_cart'></div>
                </div>
          </div>
      </div>
    )
  }
}

export default ShowFullDesc