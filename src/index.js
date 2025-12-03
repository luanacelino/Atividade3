console.log('Cheguei no arquivo do index.js');

let pAzulElement = document.getElementById('azul');
pAzulElement.innerHTML =
  '<img src="https://www.ifpb.edu.br/prpipg/pasta-imagens-da-prpipg/logoifpb-1.png/@@images/69e3b11e-aab2-4b72-85ff-a95f601ac569.png"/>';

let pElements = document.getElementsByTagName('p');
for (let pElement of pElements) {
  console.log(pElement);
}

let elements = document.getElementsByClassName('verde');
elements = document.querySelector('li.verde');
console.log(elements);
