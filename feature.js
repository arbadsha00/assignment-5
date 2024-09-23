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
// toggle home
function home() {
    window.location.href = "./index.html";
}
// toggle blog
function blog() {
    window.location.href = "./blog.html";
}
// toggle history btn
document.getElementById("history-btn").addEventListener("click", function () {
    setBtn("history-btn");
    unSetBtn("donate-btn");
    unHide("history-container");
    hide("donate-container");
});
// toggle donate btn
document.getElementById("donate-btn").addEventListener("click", function () {
    unSetBtn("history-btn");
    setBtn("donate-btn");
    hide("history-container");
    unHide("donate-container");
});
