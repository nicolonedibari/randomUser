let url = "https://randomuser.me/api/";
let globalPerson;

fetch(url).then(
    (response) => {
        return response.json();
    }
).then(
    function(data){
        globalPerson = data.results[0];
        immagine.src = globalPerson.picture.large;
        nome.innerHTML = globalPerson.name.first + " " + globalPerson.name.last;
        genere.innerHTML = globalPerson.gender;
        indirizzo.innerHTML = `${globalPerson.location.street.name}, ${globalPerson.location.city}, ${globalPerson.location.country}`;
        email.innerHTML = globalPerson.email;

        console.log(data);
    }
).catch(
    function(error){
        console.log("Errore nella richiesta API:", error);
    }
)

let immagine = document.querySelector("#user-image");
let nome = document.querySelector("#user-name");
let genere = document.querySelector("#user-gender");
let indirizzo = document.querySelector("#user-address");
let email = document.querySelector("#user-email");
