const $ = element => document.querySelector(element)
const $$ = element => document.querySelector(element)


const $texSearch = $("#tex-search")
const $buttonSearch = $("#button-search")
const $containerImages = $("#container-images")
const $containerDetail = $("#container-detail")
const $containerButton = $("#container-button")
const $buttonPrev = $("#button-prev")
const $buttonNex = $("#button-nex")



let page = 1

$buttonSearch.addEventListener("click", async () => {
      try {

            $containerImages.innerHTML = "";
            $containerImages.innerHTML = `<h1>Loading..</h1>`
            const response = await axios(`https://api.unsplash.com/search/photos?query=${$texSearch.value}&orientation=portrait`, {

                  headers: {
                        Authorization: "Client-ID 0RnT6D0wWzvRPTEwjTdETWOOPeweiR1_P-HSRaHl8H4"
                  }
            })
            pintarDatos(response.data.results)
      } catch (error) {

      }
})



//buscar datos dcobn el textsearch
//si se cumpke opuntar datos


/*$img.addEventListener("click",()=>{
      $containerImages.innerHTML = "";
      $containerImages.innerHTML = `<h1>Loading..</h1>`
      fetch(`https://api.unsplash.com/search/photos?query=${imagesApi.current_user_collections.description
            }`, {
            method: "GET",
            headers: {
                  Authorization:"Client-ID 0RnT6D0wWzvRPTEwjTdETWOOPeweiR1_P-HSRaHl8H4"
            }

      })
            .then(res => res.json())
                  .then(response => {
                        console.log(response.results)
                        pintarDatos(response.results)
                        console.log(response)
                  })
                  .catch(error => {
                     console.log(error)   
                  })
               

})
//funcion onclick cuando se cquilea la id de la imagen ${imagesApi.urls.full}
//pintar datos de la info de la imagen 

*/
$buttonPrev.addEventListener("click", async () => {
      try {
            $containerImages.innerHTML = "";
            $containerImages.innerHTML = `<h1>Loading..</h1>`
            page -= 1;
            const response = await axios(`https://api.unsplash.com/search/photos?query=${$texSearch.value}&page={page}&orientation=portrait`, {

                  headers: {
                        Authorization: "Client-ID 0RnT6D0wWzvRPTEwjTdETWOOPeweiR1_P-HSRaHl8H4"
                  }

            })
            pintarDatos(response.data.results)
      } catch (error) {
            console.log(error)
      }




      //buscar datos con lo escrito en text search pero una pagina menos 
      //pintar datos si se cumpkle
      //
})

$buttonNex.addEventListener("click", async () => {
      try {
            $containerImages.innerHTML = "";

            $containerImages.innerHTML = `<h1>Loading..</h1>`
            page = page + 1;
            const response = await axios(`https://api.unsplash.com/search/photos?query=${$texSearch.value}&page=${page}&orientation=portrait`, {

                  headers: {
                        Authorization: "Client-ID 0RnT6D0wWzvRPTEwjTdETWOOPeweiR1_P-HSRaHl8H4"
                  }
            })
            pintarDatos(response.data.results)
      }
      catch (error) {
            console.log(error)
      }





      //buscar datos con lo escrito en text search pero una pagina mas 
      //pintar datos si se cumpkle
      //
})





function pintarDatos(array) {
      $containerImages.innerHtml = "";
      for (imagesApi of array) {
            $containerImages.innerHTML += `<img src ="${imagesApi.urls.full}"/>`
      }

}


//722310
// 0RnT6D0wWzvRPTEwjTdETWOOPeweiR1_P-HSRaHl8H4
// GyiS3JF-VU_RigvMhRptOIG2aYWd3PN5zWQS6FXxjBY

// Authorization: Client-ID YOUR_ACCESS_KEY