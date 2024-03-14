// Write your code here!
const element = document.querySelector("main#main");
element.remove();
// no longer has DOM node 'main#main'

let newHeader = document.createElement("H1");
newHeader.setAttribute("id","victory");
// (method) Element.setAttribute(qualifiedName: string, value: string): void
newHeader.innerHTML = "anna is the champion"
