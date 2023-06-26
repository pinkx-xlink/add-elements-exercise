const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!!!!!';

container.appendChild(content);


//<p> with red tag "Hey I'm red!"
const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Hey I am red!'
p.setAttribute('style', 'background-color: red;');

container.appendChild(p);


//<h3> with blue text "Hey I'm blue!"
const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "Howdy, I'm Blue :)";
h3.setAttribute('style', 'color: blue;');

container.appendChild(h3);


// <div> with black border and pink bg color
const box = document.createElement('box');
box.classList.add('box');
box.setAttribute('style', 'background-color: pink; border: 15px solid black; height: 100px; length: 100px;');
    //<h1> "I'm a div"
    const h1 = document.createElement('h1')
    h1.textContent = "I'm a div! :0";
    //<p> "ME TOO!!!!!"
    //HINT: after creating <div> w createElement, append <h1> and <p> to it before adding it to container
