import React, { Component } from 'react'
import "../../index.css"

export class ReadModal extends Component {
  render() {
    return (
        <div className='author-modal'>
            <div style={{padding: '10vh 5vw '}}>
            <div className='close' onClick={() => this.props.onReadModal()}>close</div>
                <h2 style={{wordWrap: 'break-word', fontSize: '2vw'}}>Книги - </h2>
                <p style={{wordWrap: 'break-word', fontSize: '1.7vw'}}>Книги – это кладезь знаний и опыта, которые так непросто получить в реальном мире. Однако за счет мыслей и ценностей автора, поданные в формате сюжетных поворотов и экспозиции, гораздо проще понять, что делать в собственной жизни.
                </p>
            </div>
        </div>
    )
  }
}

export default ReadModal