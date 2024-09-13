import "./style.css";
import "./modern-normalize.css";
import { enableVisibility, disableVisibility } from "./main";

const dropdownBtn = document.querySelector(".dropdown-menu-btn");
const dropdownMenu = document.querySelector(".dropdown-menu-items");

dropdownBtn.addEventListener(
  "click",
  enableVisibility.bind(null, dropdownMenu)
);

document.addEventListener("click", (event) =>
  disableVisibility(event, dropdownMenu)
);
