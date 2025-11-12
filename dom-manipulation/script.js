const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// red paragraph
const p = document.createElement("p");
p.textContent = "Hey I’m red!";
p.style.color = "red";

container.appendChild(p);


//blue h3
const h3 = document.createElement("h3");
h3.textContent = "I’m a blue h3!"
h3.style.color = "blue";

container.appendChild(h3);


const div = document.createElement("div");
div.style.border = "black";
div.classList.add = "div";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";

const divP = document.createElement("p");
divP.classList.add = "divP";
divP.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(divP);

container.appendChild(div);