/* 
function getAnimalData() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
} 
*/

document.addEventListener('DOMContentLoaded', getAnimalData )

const main = document.getElementById("container");

async function getAnimalData() {
    try {
        const resp = await fetch('https://fakestoreapi.com/products')
        const data = await resp.json()
        displayData(data)
    } catch (error) {
        console.log(error)
    }

}


function displayData(data){
    main.innerHTML ="";
    data.forEach(item => {
        const itemElement  = document.createElement('div')
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" width="150px">
            <h2>${item.title}</h2>
            <p><strong>${item.price}</strong></p>
        `
        main.appendChild(itemElement);
    });
}


