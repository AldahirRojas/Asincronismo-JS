import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors', //cors es el permiso que va a tener, por defecto siempre estara en cors
        credentials: 'same-origin', //es opcional
        headers: {
            'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura del objeto que se quiere crear con POST
const data = {
    "title": "New Product Course",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  //Podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json para mostrarlo en consola
postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));


//PUT
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "xxxxxxxxx",
    "price": 10
  }

putData(`${API}/products/203`, dataUpdate)
  .then(response => response.json())
  .then(dataUpdate => console.log(dataUpdate));


//DELETE
//Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) {
    //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'} //no es necesario especificar el body
    });
    return response;
}

const idNumber = 271; //se debe colocar el id del objeto que se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });