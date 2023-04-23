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

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "16be04b17cmshd33d24d6d60cbf5p1f775ajsn9518885a434f",
//     "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
//   },
// };
// fetch("https://unofficial-cricbuzz.p.rapidapi.com/get-image?id=170702", options)
//   .then((res) => {
//     console.log(res);
//     return res.url;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// fetch(
//   "https://unofficial-cricbuzz.p.rapidapi.com/series/list?matchType=fantasy",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const Url =
  "https://api.cricapi.com/v1/series_points?apikey=7faa2b48-b1be-454c-af28-ac56b500f8fb&id=c75f8952-74d4-416f-b7b4-7da4b4e3ae6e";

fetch(Url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let iplTable = data.data;

    // Sort the data by number of wins
    iplTable.sort((a, b) => b.wins - a.wins);

    // Get a reference to the HTML element where the table will be inserted
    const tableDiv = document.getElementById("table");

    // Create the table element and add it to the container
    const table = document.createElement("table");
    tableDiv.appendChild(table);

    // Create the table header
    const tableHeader = document.createElement("thead");
    table.appendChild(tableHeader);

    // Create the table body
    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    // Create a row for the header
    const headerRow = document.createElement("tr");
    tableHeader.appendChild(headerRow);

    // Loop through the keys of the first data object to create the table header cells
    Object.keys(iplTable[0]).forEach((key) => {
      const cell = document.createElement("th");
      cell.textContent = key.toUpperCase();

      headerRow.appendChild(cell);
    });

    // Loop through the data to create the table rows and cells
    iplTable.forEach((data) => {
      const row = document.createElement("tr");
      tableBody.appendChild(row);

      Object.entries(data).forEach(([key, value]) => {
        const cell = document.createElement("td");
        if (key === "img") {
          const img = document.createElement("img");
          img.src = value;
          cell.appendChild(img);
        } else {
          cell.textContent = value;
        }
        if (key == 0) {
          table.remove("cell");
        }
        row.appendChild(cell);
      });
    });
  })
  .catch((err) => console.log(err));
