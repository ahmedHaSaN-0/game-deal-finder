

//This is going to test my current understanding of DOM

//Inserts an element under the paragraph section to see how the DOM manipulation works
const paragraphSection=document.querySelector(".paragraphSection");
const div = document.createElement("p");
div.classList.add("descriptiveParagraph");
div.setAttribute("style", "background-color: #9FFF45; color: #1E1E1E; border-radius: 12 px");
div.textContent="This is a test to see how elements can be added into HTML files with javascript in addition to building a login screen."
paragraphSection.appendChild(div);
let statement;
let informationAddition=false;

let paragraphCount=0;
const emailAddress=document.querySelector("#emailAddress");
const password=document.querySelector("#password");

//Basic function that states the entered information onto the page with the paragraph element
function buildStatement(event)
{
    event.preventDefault();
    if(informationAddition==false){
        statement=document.createElement("p");
        statement.classList.add("BuildParagraph");
        statement.setAttribute("style", "background-color: #9FFF45; color: #1E1E1E; border-radius: 12 px");
        statement.textContent=`The email you entered was ${emailAddress.value}, the password was ${password.value}`;
        paragraphSection.appendChild(statement);
        informationAddition=true;
        //After creating the element and adding particular attributes to it, there's no need to continuously add multiple paragaph elements
        //set a boolean variable to true so that the text content can simply be updated with whatever was entered in the form
        //Will most likely be changed in the future to utilize more modernized methods of utilizing login information.
    }
    else if(informationAddition=true)
    {
        statement=document.querySelector(".BuildParagraph");
        statement.textContent=`The email you entered was ${emailAddress.value}, the password was ${password.value}`;
        //Update the text content to reflect what is actually entered afterwards
    }

}
function clearLineE()
{
    let email_field_select=document.querySelector("#emailAddress");
    email_field_select.setAttribute("placeholder","");
}
function clearLineP()
{
    let email_field_select=document.querySelector("#password");
    email_field_select.setAttribute("placeholder","");
}
//Functions that clear the lines of the inputted text 
const loginButton=document.querySelector("#loginBtn");
loginButton.addEventListener("click", buildStatement);
const emailField=document.querySelector("#emailAddress");
emailField.addEventListener("click", clearLineE);
password.addEventListener("click", clearLineP);
