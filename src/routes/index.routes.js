import loader from "../components/loader";
import { pages } from "../pages";

let content = document.getElementById("root");

export const router = async (route, offset) => {
  content.innerHTML = "";
  content.appendChild(loader());
  switch (route) {
    case "#/product":
      content.appendChild(await pages.home(offset));
      content.children[0].remove();
      break;
    case "#/product/bebida_energetica":
      content.appendChild(pages.bebida_energetica());
      break;
    // case "#/product/pisco":
    //   break;
    // case "#/product/ron":
    //   break;
    // case "#/product/bebida":
    //   break;
    // case "#/product/snack":
    //   break;
    // case "#/product/cerveza":
    //   break;
    // case "#/product/vodka":
    //   break;
    default:
      content.appendChild(await pages.notFound());
  }
};
