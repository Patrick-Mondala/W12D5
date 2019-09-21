const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const dogLinks = [];

  Object.keys(dogs).forEach( dogName => {
    let a = document.createElement("a");
    a.innerHTML = dogName;
    a.setAttribute("href", dogs[dogName]);
    let li = document.createElement("li");
    li.appendChild(a);
    dogLinks.push(li);
  });
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  
  const ul = document.getElementsByClassName("drop-down-dog-list");
  ul.item(0).classList.add("hidden");
  dogLinks.forEach( link => {
    ul.item(0).appendChild(link);
  });

}

function handleEnter() {
  let documentPage = document.getElementsByClassName("drop-down-dog-nav");
  documentPage.item(0).addEventListener("mouseenter", () => {
    const ul = document.getElementsByClassName("drop-down-dog-list");
    ul.item(0).classList.remove("hidden");
  })
}

function handleLeave() {
  let documentPage = document.getElementsByClassName("drop-down-dog-nav");
  documentPage.item(0).addEventListener("mouseleave", () => {
    const ul = document.getElementsByClassName("drop-down-dog-list");
    ul.item(0).classList.add("hidden");
  })
}

export { attachDogLinks, dogLinkCreator, handleEnter, handleLeave }; 
