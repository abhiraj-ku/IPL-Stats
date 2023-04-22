let toggle_bar = document.querySelector(".nav-header");

let sidebar = document.querySelector(".sidebar");

toggle_bar.addEventListener("click", function () {
  if (toggle_bar.firstElementChild.classList.contains("fa-bars")) {
    toggle_bar.firstElementChild.classList.replace("fa-bars", "fa-times");
  } else {
    toggle_bar.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
  sidebar.classList.toggle("sidebaractive");
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16be04b17cmshd33d24d6d60cbf5p1f775ajsn9518885a434f",
    "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
  },
};
// fetch("https://unofficial-cricbuzz.p.rapidapi.com/get-image?id=170702", options)
//   .then((res) => {
//     console.log(res);
//     return res.url;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
fetch(
  "https://unofficial-cricbuzz.p.rapidapi.com/series/list?matchType=fantasy",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
