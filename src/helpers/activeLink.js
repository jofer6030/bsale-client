export const activeLink = (path) => {
  switch (path) {
    case "#/product/bebida%20energetica":
      document.getElementById("bebida-energetica").classList.add("active");
      break;
    case "#/product/pisco":
      document.getElementById("pisco").classList.add("active");
      break;
    case "#/product/ron":
      document.getElementById("ron").classList.add("active");
      break;
    case "#/product/bebida":
      document.getElementById("bebida").classList.add("active");
      break;
    case "#/product/snack":
      document.getElementById("snack").classList.add("active");
      break;
    case "#/product/cerveza":
      document.getElementById("cerveza").classList.add("active");
      break;
    case "#/product/vodka":
      document.getElementById("vodka").classList.add("active");
      break;
    default:
      return;
  }
};
