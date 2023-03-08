let text = document.querySelector("textarea");
let tagContainer = document.querySelector(".tag-container");

text.addEventListener("keyup", (e) => {
   createTags(e.target.value);

   if (e.key === "Enter") {
      setTimeout(() => {
         e.target.value = "";
      }, 10);
      randomSelect();
   }
});

let createTags = (input) => {
   let tags = input.split(",");
   tags = tags.filter((tag) => tag.trim() !== "");
   tags = tags.map((tag) => tag.trim());

   tagContainer.innerHTML = "";
   tags.forEach((tag) => {
      let tagEl = document.createElement("span");
      tagEl.classList.add("tag");
      tagEl.innerText = tag;

      tagContainer.appendChild(tagEl);
   });
};

let randomSelect = () => {
   let times = 30;
   let interval = setInterval(() => {
      let randomTag = pickRandomTag();
      highlightTag(randomTag);
      setTimeout(() => {
         unHighlightTag(randomTag);
      }, 100);
   }, 100);

   setTimeout(() => {
      clearInterval(interval);
      let randomTag = pickRandomTag();
      highlightTag(randomTag);
   }, times * 100);
};

let pickRandomTag = () => {
   let tags = document.querySelectorAll(".tag");
   return tags[Math.floor(Math.random() * tags.length)];
};

let highlightTag = (tag) => {
   tag.classList.add("highlight");
};

let unHighlightTag = (tag) => {
   tag.classList.remove("highlight");
};
