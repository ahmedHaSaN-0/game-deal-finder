//This is going to test my current understanding of DOM

//Inserts an element under the paragraph section to see how the DOM manipulation works
const paragraphSection=document.querySelector(".paragraphSection");
const div = document.createElement("p");
div.classList.add("descriptiveParagraph");
div.setAttribute("style", "background-color: #9FFF45; color: #1E1E1E; border-radius: 12 px");
div.textContent="This is a test to see how elements can be added into HTML files with javascript in addition to building a login screen."
paragraphSection.appendChild(div);
