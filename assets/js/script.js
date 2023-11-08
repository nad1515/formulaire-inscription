console.log("script");


let adresseInput = document.getElementById("rue")

let urlRecherche ;
let result;
let listAdresse = document.querySelector("ul");
let adresseChoisie ;
let urlApi = `https://api-adresse.data.gouv.fr/search/?q=` ;
const datasFetch = async () => {
    const res = await fetch(urlRecherche);
    result = await res.json();
    console.log("result : ", result);
    
for (let index = 0; index < result.features.length ; index++){
  let listRecherche = document.createElement("li");
  listRecherche.classList.add("list-rue");
  listRecherche.textContent = result.features[index].properties.label;
  listAdresse.appendChild(listRecherche);
  listAdresse.style.listStyleType = "none";
  listAdresse.style.cursor = "pointer";
} 
  
}

  document.querySelector("#rue_fact").addEventListener("input", (eventText)=>{
    listAdresse.innerHTML = "";
    const query = eventText.target.value;
    console.log("query", query);
    let mot = query.split(' ').join('+');
console.log("mot", mot);
  urlRecherche = urlApi + mot;
  console.log(urlRecherche);
    if (mot.length > 4){
      datasFetch()
    }
})
listAdresse.addEventListener("click", (eventClick)=>{
  listAdresse.innerHTML = "";
  console.log(eventClick.target.innerText);
adresseChoisie = eventClick.target.innerText;
 for(let i=0; i< result.features.length; i++){
   if (adresseChoisie == result.features[i].properties.label){
    document.querySelector("#rue_fact").value =result.features[i].properties.name; 
     document.querySelector("#ville_fact").value = result.features[i].properties.city; 
     document.querySelector("#code_fact").value = result.features[i].properties.postcode; 
   }


 }
})

