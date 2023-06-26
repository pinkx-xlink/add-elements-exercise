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


// <div> with black border and pink bg color
    //<h1> "I'm a div"
    //<p> "ME TOO!!!!!"
    //HINT: after creating <div> w createElement, append <h1> and <p> to it before adding it to container
