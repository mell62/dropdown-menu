export { enableVisibility, disableVisibility };

function enableVisibility(element) {
  element.classList.add("visibility");
}

function disableVisibility(event, element) {
  if (
    !event.target.classList.contains("dropdown-menu-logo") &&
    !event.target.classList.contains("dropdown-menu-btn")
  ) {
    element.classList.remove("visibility");
  }
}
