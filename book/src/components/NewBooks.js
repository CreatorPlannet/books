import React, { Component } from 'react'
import NewBook from './NewBook'
import '../index.css'

export class NewBooks extends Component {
  render() {
    return (
      <div>
          
          <div className='main-new-book'>
                <div className="new_books">
                    <h2>Новинки!</h2>
                    <div className="newBook first_newBooks">
                        <div className="text_newBooks element-animation-rigth">
                            <div className='book_item_text'>
                                {this.props.items.map(el => (
                                    <NewBook key={el.id} item={el} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



          
      </div>
    )
  }
}

export default NewBooks