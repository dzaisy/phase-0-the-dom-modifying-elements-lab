// Write your code here!
const element = document.querySelector('main#main');
element.remove();
// no longer has DOM node 'main#main'

const newHeader = document.createElement('H1'); // new dom created
newHeader.setAttribute('id','victory'); // id set to 'victory'

newHeader.innerHTML = 'anna is the champion' // sets innerHTML 'to anna is .....'
