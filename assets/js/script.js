console.log("script");
let url = "https://api-adresse.data.gouv.fr/search/?q=${query}";


// let adresseInput = document.getElementById("rue");
// const query = adresseInput.value;
// console.log("adresseInput.value : ", adresseInput.value);
// //"54 boulevard Laver" -> "54+boulevard+Laveran"

// // let query = "54 boulevard Lave";
// let mot = query.split(' ').join('+');
// console.log("mot", mot);
// let datasAxios = await axiosTest();
// console.log("Datas via Axios : ", datasAxios);
// async function axiosTest () {
// const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${query}`);
//     return response.data;
// }

 
// document.querySelector("#rue").addEventListener("input", function(){
    

// })


document.addEventListener("DOMContentLoaded", function () {
    const rueInput = document.getElementById("rue");
    const resultaAdresse = document.getElementById("resultaAdresse");
    const villeInput = document.getElementById("ville");
    const codeInput = document.getElementById("code");
  
    rueInput.addEventListener("input", () => {
      const query = rueInput.value;
      console.log("rueInput.value : ", rueInput.value);
       let mot = query.split(' ').join('+');
      if (query.length >= 3) {
        fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erreur de réseau");
            }
            return response.json();
          })
          .then((data) => {
            const addresses = data.features;
  
            if (addresses.length > 0) {
                let addressList = document.createElement("ul");
                addresses.forEach(address => {
                    let ListItem = document.createElement("li");
                    ListItem.textContent = address.fullAddress;
                    ListItem.addEventListener("click",()=>{
                        document.getElementById("ville").value = address.city;
                        document.getElementById("code").value = address.postalCode;
                         document.getElementById("adresseId").value = address.id;
                        resultaAdresse.innerHTML = "";
                        
                    })
                    addressList.appendChild(ListItem);
                });
                resultaAdresse.innerHTML = "";
                resultaAdresse.appendChild(addressList);
            //   const address = addresses[0].properties;
  
            //   villeInput.value = address.city;
            //   codeInput.value = address.postcode;
            //   resultaAdresse.innerHTML = "";
            } else {
                
            //   villeInput.value = "";
            //   codeInput.value = "";
             resultaAdresse.innerHTML = "Aucune adresse trouvée.";
            }
          })
          .catch((error) => {
            console.error("Erreur lors de la requête API : ", error);
          });
      } else {
        resultaAdresse.innerHTML = "";
        // villeInput.value = "";
        // codeInput.value = "";
      }
    });
})