export default async () => {
  const body = document.querySelector("body");
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  const titleNotFound = document.createElement("div");
  const enlaceNotFound = document.createElement("span");
  titleNotFound.classList.add("title-not-found");
  titleNotFound.style.fontWeight = "bold";
  titleNotFound.innerHTML = "404 | Page not found";
  enlaceNotFound.innerHTML = " Go to Home";
  enlaceNotFound.style.color = "#ff680d";
  enlaceNotFound.style.cursor = "pointer";
  titleNotFound.appendChild(enlaceNotFound);
  body.appendChild(titleNotFound);
  body.querySelector("span").addEventListener("click", () => {
    window.location.href = "/";
  });
};
