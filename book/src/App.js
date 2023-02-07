import React, { Component  } from 'react'
import About from './components/About'
import AuthorItems from './components/AuthorItems'
import AuthorModal from './components/AuthorModal'
import BookItems from './components/BookBlogs/BookItems'
import Categories from './components/BookBlogs/Categories'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import ReadModal from './components/Modal/ReadModal'
import ShowFullDesc from './components/BookBlogs/ShowFullDesc'
import './index.css'
import DickiS from './components/DickiS'
import Main from './Main'
import SearchDick from './components/SearchDick'


export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book1.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'Роман',
                    price: '49.99',
                },
                {
                    id: 2,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book2.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'Психология',
                    price: '140.00',
                },
                {
                    id: 3,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book3.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'Детектив',
                    price: '549.99',
                },
                {
                    id: 4,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book4.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'Детектив',
                    price: '25.00',
                },
                {
                    id: 5,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book5.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'Психология',
                    price: '26.00',
                },
                {
                    id: 6,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'book2.jpeg',
                    desc: 'Нам с детства внушали: быстрее, выше, сильнее! В классическом представлении успешная карьера — это планомерное вскарабкивание на Олимп или бег вверх по лестнице. Однако авторы этой книги развенчивают миф о линейной карьере — может, когда-то так и было, но 2022 год мы встречаем в новой реальности. Наше развитие может происходить волнами: иметь свои приливы и отливы. И задача современного человека — взять на себя ответственность, понять истинные желания, оценить ресурсы, поймать волну и не бояться перемен. ',
                    category: 'Психология',
                    price: '25.00',
                },
                {
                    id: 7,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book5.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'Приключение',
                    price: '26.00',
                },
                {
                    id: 8,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'book2.jpeg',
                    desc: 'Нам с детства внушали: быстрее, выше, сильнее! В классическом представлении успешная карьера — это планомерное вскарабкивание на Олимп или бег вверх по лестнице. Однако авторы этой книги развенчивают миф о линейной карьере — может, когда-то так и было, но 2022 год мы встречаем в новой реальности. Наше развитие может происходить волнами: иметь свои приливы и отливы. И задача современного человека — взять на себя ответственность, понять истинные желания, оценить ресурсы, поймать волну и не бояться перемен. ',
                    category: 'Ужасы',
                    price: '25.00',
                },
            ],
            newBook: [
                {
                    id: 1,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book1.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'chairs',
                    price: '49.99',
                },
                {
                    id: 2,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'slider_book2.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ullam!',
                    category: 'tables',
                    price: '140.00',
                },
                {
                    id: 3,
                    author: 'Оскар Уайльд',
                    name: 'Портрет дориана грея',
                    img: 'book2.jpeg',
                    desc: 'Нам с детства внушали: быстрее, выше, сильнее! В классическом представлении успешная карьера — это планомерное вскарабкивание на Олимп или бег вверх по лестнице. Однако авторы этой книги развенчивают миф о линейной карьере — может, когда-то так и было, но 2022 год мы встречаем в новой реальности. Наше развитие может происходить волнами: иметь свои приливы и отливы. И задача современного человека — взять на себя ответственность, понять истинные желания, оценить ресурсы, поймать волну и не бояться перемен. ',
                    category: 'Психология и саморазвитие',
                    price: '25.00',
                },
            ],
            currentBooks: [],
            showFullDesc: false,
            fullDesc: {},
            authorModal: false,
            bookModal: false,
            readModal: false,
            author: [
                { name: 'Tari', surname: 'Imanjanov', age: 18, increase: false, id: 1 },
                { name: 'Madi', surname: 'Habidenov', age: 17, increase: false, id: 2 },
                { name: 'Rauan', surname: 'Tusupbekov', age: 17, increase: true, id: 3 }, 
                { name: 'John', surname: 'Westwrny', age: 18, increase: false, id: 4 },
                { name: 'Rony', surname: 'Roberrs', age: 17, increase: false, id: 5 },
                { name: 'Dilaida', surname: 'Sanches', age: 17, increase: false, id: 6 }, 
                { name: 'Sam', surname: 'Westwrny', age: 18, increase: false, id: 7 },
                { name: 'Poste', surname: 'Roberrs', age: 17, increase: false, id: 8 },
                { name: 'Garret', surname: 'Sanches', age: 17, increase: false, id: 9 }, 
                { name: 'Piter', surname: 'Imanjanov', age: 18, increase: false, id: 10 },
            ],
            arr:[
                { id: 1, name: 'tari', age: 18 },
                { id: 2, name: 'rauan', age: 18 },
                { id: 3, name: 'madi', age: 18 },
            ],
            term: '',
        }
        this.state.currentBooks = this.state.items  //Тут мы говорим при загрузке страницы мы будем записывать в currentBooks все эл items
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowDesc = this.onShowDesc.bind(this)
        this.onAuthorModal = this.onAuthorModal.bind(this)
        this.onReadModal = this.onReadModal.bind(this)
    }

    deleteAuthor = (id) => {
        this.setState(({author}) => {
            const index = author.findIndex(elem => elem.id === id)
                //Первый метод
            // data.splice(index, 1)
                //Второй метод иммутабельный правильный
            // const before = data.slice(0, index)
            // const after = data.slice(index + 1)
            // const newArr = [...before, ...after]

            return{
                    //Второй метод
                // data: newArr

                    //Третьи метод
                author: author.filter(item => item.id !== id)
            }
        })
    }

    deletes = (id) => {
        this.setState(({arr}) => {
            return {
                arr: arr.filter(el => el.id !== id)
            }
        })
    }


    searchEmp = (items, term) => {
        if (term.length === 0) { return items }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (valueTerm) => {
        return this.setState({term: valueTerm}) // === return this.setState(term: term)
    }



    render() {
        const {arr, term} = this.state
        const visibleData = this.searchEmp(arr, term)

        return (
            <div className='wrapper'>
                <Header onAuthorModal={this.onAuthorModal} onReadModal={this.onReadModal} />
                {this.state.authorModal && <AuthorModal onAuthorModal={this.onAuthorModal} />}
                {this.state.readModal && <ReadModal onReadModal={this.onReadModal} />}

                <Categories chooseCategory={this.chooseCategory} />
                <BookItems onShowDesc={this.onShowDesc} items={this.state.currentBooks} />
                {this.state.showFullDesc && <ShowFullDesc item={this.state.fullDesc} onShowDesc={this.onShowDesc} />}

                {/* <Counter firstName='Tari' age='18' />
                <Counter firstName='Madi' age='17' />
                <Counter firstName='Rauan' age='17' /> */}

                <AuthorItems author={this.state.author} onDelete={this.deleteAuthor} />


                <SearchDick onUpdateSearch={this.onUpdateSearch}/>
                <DickiS posts={visibleData} deletes={this.deletes}/>
                <Main />

                <Footer />
            </div>
        )
    }


    chooseCategory(category) {
        if (category === 'all') {
            this.setState({ currentBooks: this.state.items })
            return
        }

        this.setState({
            currentBooks: this.state.items.filter(el => el.category === category)
        })
        console.log(category)
    }
    onShowDesc(item) {
        this.setState({ fullDesc: item }) //Будем записывать в этот объект ту книгу которую передали в item нажав на картинку
        this.setState({ showFullDesc: !this.state.showFullDesc })
    }
    onAuthorModal() {
        this.setState({ authorModal: !this.state.authorModal })
    }

    onReadModal() {
        this.setState({ readModal: !this.state.readModal })
    }
}

export default App