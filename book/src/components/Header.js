import React, { Component } from 'react'
import '../index.css'

export class Header extends Component {
    render() {
        return (
            <div className='main_header'>
                <header>
                    <div className="left_panel">
                        <a href="#" className='ExpensiveBook'>Expansive Book</a>
                    </div>
                    <div className="rigth_panel">
                        <ul>
                            <li className="active"><a href="#">Главное</a></li>
                            <li className='author-li'><a href="#" onClick={() => this.props.onAuthorModal()}>Авторы</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>

                </header>
                <div className="main_bg">
                    <div className="text">
                        <h1>Books на любой вкус</h1>
                        <p>Книги – это кладезь знаний и опыта, которые так непросто получить в реальном мире. Однако за счет мыслей и ценностей автора, поданные в формате сюжетных поворотов и экспозиции, гораздо проще понять, что делать в собственной жизни.</p>
                        <button onClick={() => this.props.onReadModal()}>Читать подробнее...</button>
                    </div>
                    <img className="img_book_font" src="img/book_font_opacity_50.png" alt="" />
                    <img className="img_right" src="img/bgImg2.png" alt="" />
                    <img className="img_bottom" src="img/bgImg.png" alt="#" />
                </div>
            </div>
        )
    }
}

export default Header