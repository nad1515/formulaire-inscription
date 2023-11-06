console.log("script");
let url = "https://api-adresse.data.gouv.fr/search/?q=paris&type=street";
let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest () {
    const response = await axios.get("https://api-adresse.data.gouv.fr/search/?q=54+boulevard");
    return response.data;
}

// let adresseInput = document.getElementById("rue");
// adresseInput.value = "54 boulevard laveran"