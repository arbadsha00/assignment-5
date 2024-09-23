function setBtn(id) {
  document.getElementById(id).classList.add("bg-primary");
  document.getElementById(id).classList.remove("btn-outline", "text-gray1");
}
function unSetBtn(id) {
  document.getElementById(id).classList.remove("bg-primary");
  document.getElementById(id).classList.add("btn-outline", "text-gray1");
}
function hide(id) {
  document.getElementById(id).classList.add("hidden");
}
function unHide(id) {
  document.getElementById(id).classList.remove("hidden");
}
function getValue(id) {
  const value = Number(document.getElementById(id).value);
  return value;
}
function getTaka(id) {
  const value = Number(document.getElementById(id).innerText);
  return value;
}
function getElement(id) {
  return document.getElementById(id);
}

// toggle home
function home() {
  window.location.href = "./index.html";
}
// toggle blog
function blog() {
  window.location.href = "./blog.html";
}
