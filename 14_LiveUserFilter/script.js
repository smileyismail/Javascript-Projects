let resultsContainer = document.querySelector(".resultsContainer");
let filter = document.querySelector(".filter");

let listItems = [];

async function getUsers() {
  let response = await fetch("https://randomuser.me/api?results=100");
  let data = await response.json();

  //   console.log(data.results);

  resultsContainer.innerHTML = "";

  data.results.forEach((result) => {
    // console.log(result);
    let li = document.createElement("li");

    li.innerHTML = `
    <img
        src="${result.picture.medium}" alt="${result.name.first}"
    />
    <div class="user-info">
        <h3>${result.name.title} ${result.name.first} ${result.name.last}</h3>
        <p>${result.location.country}, ${result.location.state}</p>
    </div>
    `;

    listItems.push(li);

    resultsContainer.appendChild(li);
  });
}

getUsers();

filter.addEventListener("input", (e) => {
  let inputValue = e.target.value;

  listItems.forEach((item) => {
    let availableText = item.innerText.toLowerCase();
    let searchText = inputValue.toLowerCase();

    if (availableText.includes(searchText)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
