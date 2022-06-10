import loader from "../views/loader.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList.add("loader-container");
  divElement.innerHTML = loader;
  return divElement;
};
