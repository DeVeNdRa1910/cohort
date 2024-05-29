/* 
function getAnimalData() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
} 
*/


async function getAnimalData() {
    try {
        const resp = await fetch('https://fakestoreapi.com/products')
        const data = await resp.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}