//    CALLSTACK
//
// console.log(1);

// function hola() {
// console.log(5)
// }

// hola()
// setTimeout(() => {
//   console.log(2);
// }, 5000);

// console.log(3);

/* const conductor = "LE PARECIO POCO DINERO";

let loadingPedido = false;

loadingPedido = true;
new Promise((resolve, reject) => {
  if (conductor === "EXITOSO") {
    resolve("Pedido entregado");
  } else {
    reject("Pedido no entregado");
  }
})
  .then((res) => {
    // SI SE CUMPLE ENTRA ACA
    divSectionCentral.innerHtml; // mostra la serie
  })
  .catch((err) => {
    // SI FALLA ENTRA ACA
    divSectionCentral.innerText = "Recargue la pagina"; // Ok mostra mas bonito
  })
  .finally(() => {
    loadingPedido = false;
  }); */

// SI UNA PROMESA ESTA EN PROCESO DE CUMPLIRSE O NO ========> Esta en estado PENDING
// SI UNA PROMESA SE CUMPLE ========> Esta en estado FULLFILLED
// SI UNA PROMESA NO SE CUMPLE ========> Esta en estado REJECT

// const conductorALocal = "Llego al local de comida";
// const conductorACasa = "Llego";

// let loadingPedido = false;

// loadingPedido = true;
// /* function saludar() {
//   return function () {
//     return "Hola";
//   };
// }
// const pepe = saludar();
// const cosa = pepe(); */
// new Promise((resolve, reject) => {
//   if (conductorALocal === "Llego al local de comida") {
//     resolve(
//       new Promise((resolve, reject) => {
//         if (conductorACasa === "Llego") {
//           resolve("Pedido completado");
//         } else {
//           reject("Pedido frustrado");
//         }
//       })
//     );
//   } else {
//     reject("Pedido no entregado");
//   }
// })
//   .then((res) => {
//     // SI SE CUMPLE ENTRA ACA
//     res
//       .then((resolution) => {
//         console.log("resolution");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((err) => {
//     // SI FALLA ENTRA ACA
//     divSectionCentral.innerText = "Recargue la pagina"; // Ok mostra mas bonito
//   })
//   .finally(() => {
//     loadingPedido = false;
//   });

// new Promise((resolve, reject) => {
//   if (conductorALocal === "Llego al local de comida") {
//     resolve(5);
//   } else {
//     reject("Pedido no entregado");
//   }
// })
//   .then((res) => {
//     // SI SE CUMPLE ENTRA ACA
//     const suma = res + 15; // 20
//   })
//   .catch((err) => {
//     // SI FALLA ENTRA ACA
//     divSectionCentral.innerText = "Recargue la pagina"; // Ok mostra mas bonito
//   })
//   .finally(() => {
//     loadingPedido = false;
//   });

//const $divContainer = $("#container");
/*let datosPokemon;

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => {
    console.log(res)
    return res.json();
  })
  .then((res) => {
   console.log(res)
  })
  .catch((err) => {
   console.log(err)
  });*/

/*let datosPokemon

fetch("https://rickandmortyapi.com/api/character/?tatus=dead")
 
.then((res)=>{
 console.log(res)
  return res.json();
})
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err)
})*/
const $ = (elem) => document.querySelector(elem)

const $containerCard = $("#containerCard")
const $backPage = $("#backPage");
const $nextPage = $("#nextPage")

let currentPage = 1

$nextPage.addEventListener("click", () => {
  currentPage += 1

  fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)

    .then(res => res.json())
    .then(response => {
      const personajes = response.results;
      pintarDatos(personajes)
    })
    .catch(error => {
      console.log(error)
    })
})

function pintarDatos(arrayPersonajes) {
  $containerCard.innerHTML = ""
  for (personaje of arrayPersonajes) {

    $containerCard.innerHTML += `<div><img src ="${personaje.image}"><h5>${personaje.name}</h5><h5>${personaje.status}</h5><h5></5>
    </div>`
  }
}

function obtenerDatosPokemones() {
  let pokemones = []
  let detallePokemones = []

  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json)
    .then(response => {
      pokemones = response.results;
      pokemones.forEach(element => {
        fetch(element.url)
          .then(res => res.json)
          .then(response => {
            console.log(response)
            detallePokemones.push(response)
          })
          .catch(error => {
            console.log(error)
          })
      });
      console.log(detallePokemones)
    })
    .catch(error => {
      $containerCard.innerHTML = ""
    })
  //pintar datos
}



window.onload = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(response => {

      const personajes = response.results
      pintarDatos(personajes)
    })
    .catch(error => {
      console.log(error)
    })
    obtenerDatosPokemones(currentPage)
}





