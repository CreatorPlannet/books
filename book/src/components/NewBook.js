import React, { Component } from 'react'
import '../index.css'

export class NewBook extends Component {
    render() {
        return (
            <div className='main-new-book'>
                <div className="new_books">
                    
                    <div className="newBook first_newBooks">
                        <img src={'./img/' + this.props.item.img} />
                        <div className="text_newBooks element-animation-rigth">
                            <div className='book_item_text'>
                                <h3>{this.props.item.author}</h3>
                                <p>{this.props.item.name}</p>
                                <p>{this.props.item.desc}</p>
                                <p className='price'>{this.props.item.price}$</p>
                                <div className='add_to_cart'></div>
                            </div>
                        </div>
                    </div>




                    {/* <div className="newBook second_newBooks ">
                        <img src="img/book2.jpeg" alt="#" />
                        <div className="text_newBooks element-animation">
                            <h2>«Волнистая карьера», Сара Эллис и Хелен Таппер</h2>
                            <h4 style={{ marginTop: '15px' }}>Жанр: Психология и саморазвитие</h4>
                            <p>Нам с детства внушали: быстрее, выше, сильнее! В классическом представлении успешная карьера — это планомерное вскарабкивание на Олимп или бег вверх по лестнице. Однако авторы этой книги развенчивают миф о линейной карьере — может, когда-то так и было, но 2022 год мы встречаем в новой реальности. Наше развитие может происходить волнами: иметь свои приливы и отливы. И задача современного человека — взять на себя ответственность, понять истинные желания, оценить ресурсы, поймать волну и не бояться перемен. </p>
                        </div>
                    </div>

                    <div className="newBook third_newBooks">
                        <img src="" alt="#" />
                        <div className="text_newBooks element-animation-rigth">
                            <h2>«От всего сердца», Илсе Санд</h2>
                            <h4 style={{ marginTop: '15px' }}>Жанр: Саморазвитие, и личностный рост</h4>
                            <p>Что означает быть ранимой и восприимчивой личностью? Почему одни могут справиться с любыми негативными событиями более-менее легко, а другие принимают любой пустяк близко к сердцу? Известный психотерапевт и автор бестселлера «Близко к сердцу» Илсе Санд разбирает природу нашей чувствительности и рассказывает, как отрастить «броню», оставаясь при этом отзывчивым и эмпатичным человеком. Эта книга о том, как сохранить душевное равновесие в любые периоды жизни. </p>
                        </div>

                    </div> */}
                </div>
            </div>
        )
    }
}

export default NewBook