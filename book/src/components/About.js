import React, { Component } from 'react'
import '../index.css'

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            console.log('Hello')
        }
        else {
            change.target.classList.remove('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
let elementsRigth = document.querySelectorAll('.element-animation-rigth');


for (let elm of elements) {
    observer.observe(elm);
}

let about = document.querySelector('about')



export class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <h2>Местонахождение</h2>
                    <p className="element-animation-rigth">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatem. Sequi dolor qui distinctio ipsa nam exercitationem iusto, architecto temporibus accusantium, facilis delectus nemo odio et. Quos autem illum repellat.</p>
                    <div className="map">
                        <div id="map"></div>
                    </div>


                    <div className="element-animation-rigth">
                        <h2>История</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime tempora, quos possimus nobis modi laboriosam quaerat explicabo provident voluptate dolor debitis culpa soluta sed. Perferendis, neque. Veniam, veritatis! Quasi consequuntur quidem, eius nihil expedita natus nemo optio ex accusamus minima voluptatibus et perspiciatis, nam cumque iure sunt velit inventore, architecto facilis dolore numquam aliquam. Culpa, deleniti. Consequuntur reiciendis veniam harum a illo error necessitatibus dolor aliquam tenetur dolorum quaerat architecto iusto dicta amet aspernatur earum autem hic unde ullam sed eius, ex nostrum porro consequatur. Atque eligendi sit quam laudantium reiciendis! Qui dolore amet accusantium, officiis sunt nulla debitis!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime tempora, quos possimus nobis modi laboriosam quaerat explicabo provident voluptate dolor debitis culpa soluta sed. Perferendis, neque. Veniam, veritatis! Quasi consequuntur quidem, eius nihil expedita natus nemo optio ex accusamus minima voluptatibus et perspiciatis, nam cumque iure sunt velit inventore, architecto facilis dolore numquam aliquam. Culpa, deleniti. Consequuntur reiciendis veniam harum a illo error necessitatibus dolor aliquam tenetur dolorum quaerat architecto iusto dicta amet aspernatur earum autem hic unde ullam sed eius, ex nostrum porro consequatur. Atque eligendi sit quam laudantium reiciendis! Qui dolore amet accusantium, officiis sunt nulla debitis!</p>
                    </div>
                    <div className="element-animation-rigth">
                        <h2>История</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime tempora, quos possimus nobis modi laboriosam quaerat explicabo provident voluptate dolor debitis culpa soluta sed. Perferendis, neque. Veniam, veritatis! Quasi consequuntur quidem, eius nihil expedita natus nemo optio ex accusamus minima voluptatibus et perspiciatis, nam cumque iure sunt velit inventore, architecto facilis dolore numquam aliquam. Culpa, deleniti. Consequuntur reiciendis veniam harum a illo error necessitatibus dolor aliquam tenetur dolorum quaerat architecto iusto dicta amet aspernatur earum autem hic unde ullam sed eius, ex nostrum porro consequatur. Atque eligendi sit quam laudantium reiciendis! Qui dolore amet accusantium, officiis sunt nulla debitis!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime tempora, quos possimus nobis modi laboriosam quaerat explicabo provident voluptate dolor debitis culpa soluta sed. Perferendis, neque. Veniam, veritatis! Quasi consequuntur quidem, eius nihil expedita natus nemo optio ex accusamus minima voluptatibus et perspiciatis, nam cumque iure sunt velit inventore, architecto facilis dolore numquam aliquam. Culpa, deleniti. Consequuntur reiciendis veniam harum a illo error necessitatibus dolor aliquam tenetur dolorum quaerat architecto iusto dicta amet aspernatur earum autem hic unde ullam sed eius, ex nostrum porro consequatur. Atque eligendi sit quam laudantium reiciendis! Qui dolore amet accusantium, officiis sunt nulla debitis!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime tempora, quos possimus nobis modi laboriosam quaerat explicabo provident voluptate dolor debitis culpa soluta sed. Perferendis, neque. Veniam, veritatis! Quasi consequuntur quidem, eius nihil expedita natus nemo optio ex accusamus minima voluptatibus et perspiciatis, nam cumque iure sunt velit inventore, architecto facilis dolore numquam aliquam. Culpa, deleniti. Consequuntur reiciendis veniam harum a illo error necessitatibus dolor aliquam tenetur dolorum quaerat architecto iusto dicta amet aspernatur earum autem hic unde ullam sed eius, ex nostrum porro consequatur. Atque eligendi sit quam laudantium reiciendis! Qui dolore amet accusantium, officiis sunt nulla debitis!</p>
                    </div>
                </div>
            </div>
        )
    }



    
}

export default About