import loader from "../components/loader";
import { pages } from "../pages";

let content = document.getElementById("root");

export const router = async (route) => {
  const category = route.split("/")[2] || "";
  content.innerHTML = "";
  switch (route) {
    case "#/product":
      content.appendChild(loader());
      content.appendChild(await pages.home());
      content.children[0].remove();
      break;
    case `#/product/${category}`:
      console.log(route);
      content.appendChild(loader());
      content.appendChild(await pages.category(category));
      content.children[0].remove();
      break;
    case "":
      content.appendChild(loader());
      content.appendChild(await pages.home());
      content.children[0].remove();
      break;
    default:
      pages.notFound();
  }
};
