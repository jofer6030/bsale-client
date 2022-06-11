export default async () => {
  const body = document.querySelector("body");
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  const titleNotFound = document.createElement("h2");
  titleNotFound.innerHTML = "404";
  titleNotFound.classList.add("title-not-found");
  body.appendChild(titleNotFound);
};
