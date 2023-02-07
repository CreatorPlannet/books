import React, { Component } from 'react'
import '../index.css'

export class AuthorModal extends Component {
    render() {
        return (
            <div className='author-modal'>
                <div >
                    <div className='close' onClick={() => this.props.onAuthorModal()}>close</div>
                    <div class="search_author">
                        <div class="search">
                            <input type="text" placeholder="Введите автора"/>
                                <button type="submit"> search</button>
                        </div>
                        <div class="filter_authors">
                            <div class="cart cart_num1">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Харуки Мураками</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num2">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num3">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num4">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num5">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num6">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num6">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num6">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                            <div class="cart cart_num6">
                                <img src="../img/Харуки_Мураками_Прозрачность.png" alt=""/>
                                    <h3>Зигмунд Фрейд</h3>
                                    <p>1898 - 1728</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
  }
}

export default AuthorModal