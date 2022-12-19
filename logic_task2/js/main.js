const baseUrl = "https://dog.ceo/api/breed/";

const catHttp = document.getElementById("catHttp");

catHttp.addEventListener(
  "keyup",
  delaySearch((ev) => {
    let searchTxt = ev.target.value;
    let searchUrl = baseUrl + searchTxt + "/images";
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, 3000)
);

function delaySearch(func, ms) {
  var timer = 0;

  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);

    timer = setTimeout(function () {
      func.apply(context, args);
    }, ms || 0);
  };
}
