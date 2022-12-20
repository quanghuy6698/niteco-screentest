const baseUrl = "https://dog.ceo/api/breed/";

const dogInput = document.getElementById("dogInput");
const dogImg = document.getElementById("dogImg");
const msg = document.getElementById("message");

/**
 * Delay search
 */
function delaySearch() {
  let searchTxt = dogInput.value;
  if (searchTxt !== "") {
    let searchUrl = baseUrl + searchTxt + "/images/random/1";
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          dogImg.src = data.message[0];
          msg.innerHTML = "";
        } else {
          dogImg.src = "";
          msg.innerHTML = "Not found.";
        }
      });
  }
}

// Add event for input
let typingTimer;
let typeInterval = 3000;

dogInput.addEventListener("keyup", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(delaySearch, typeInterval);
});

// Dog breeds footer
const dogBreedLst = [
  "affenpinscher",
  "african",
  "airedale",
  "akita",
  "appenzeller",
  "australian",
  "basenji",
  "beagle",
  "bluetick",
  "borzoi",
  "bouvier",
  "boxer",
  "brabancon",
  "briard",
  "buhund",
  "bulldog",
  "bullterrier",
  "cattledog",
  "chihuahua",
  "chow",
  "clumber",
  "cockapoo",
  "collie",
  "coonhound",
  "corgi",
  "cotondetulear",
  "dachshund",
  "dalmatian",
  "dane",
  "deerhound",
  "dhole",
  "dingo",
  "doberman",
  "elkhound",
  "entlebucher",
  "eskimo",
  "finnish",
  "frise",
  "germanshepherd",
  "greyhound",
  "groenendael",
  "havanese",
  "hound",
  "husky",
  "keeshond",
  "kelpie",
  "komondor",
  "kuvasz",
  "labradoodle",
  "labrador",
  "leonberg",
  "lhasa",
  "malamute",
  "malinois",
  "maltese",
  "mastiff",
  "mexicanhairless",
  "mix",
  "mountain",
  "newfoundland",
  "otterhound",
  "ovcharka",
  "papillon",
  "pekinese",
  "pembroke",
  "pinscher",
  "pitbull",
  "pointer",
  "pomeranian",
  "poodle",
  "pug",
  "puggle",
  "pyrenees",
  "redbone",
  "retriever",
  "ridgeback",
  "rottweiler",
  "saluki",
  "samoyed",
  "schipperke",
  "schnauzer",
  "segugio",
  "setter",
  "sharpei",
  "sheepdog",
  "shiba",
  "shihtzu",
  "spaniel",
  "springer",
  "stbernard",
  "terrier",
  "tervuren",
  "vizsla",
  "waterdog",
  "weimaraner",
  "whippet",
  "wolfhound",
];
const dogBreeds = document.getElementById("dogBreeds");
let dogBreedsStr = dogBreedLst.join(" - ");
dogBreeds.innerHTML = dogBreedsStr;
