const RANDOM_IMAGE_URL = "https://dog.ceo/api/breeds/image/random";
const images = document.getElementById("randomPhoto");
const RANDOM_FACT_URL = "https://dogapi.dog/api/facts";
const facts = document.getElementById("randomFact");
const number = document.getElementById("number");
const submit = document.getElementById("submit");
const photo = document.getElementById("photo");
const fact = document.getElementById("fact");
const clear = document.getElementById("clear");
function getImage() {
  fetch(RANDOM_IMAGE_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const source = data.message;
      const img = document.createElement("img");
      img.src = source;
      img.className = "img";
      images.append(img);
    });
}

function getFact() {
  fetch(RANDOM_FACT_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const fact = data.facts;
      const p = document.createElement("p");
      p.innerText = fact;
      p.className = "p";
      facts.append(p);
    });
}

submit.addEventListener("click", () => {
  photo.innerHTML = "";
  fact.innerHTML = "";
  const count = parseInt(number.value);
  if (photo.checked == 1) {
    for (let i = 0; i < count; i++) {
      getImage();
    }
  }
  if (fact.checked == 1) {
    for (let i = 0; i < count; i++) {
      getFact();
    }
  }
});
clear.addEventListener("click", () => {
  location.reload();
});
