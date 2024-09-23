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

// donate now1
document
  .getElementById("donate-now-btn1")
  .addEventListener("click", function () {
    // validity check
    if (
      getValue("input-field1") <= 0 ||
      getValue("input-field1") > getTaka("balance")
    ) {
      unHide("error1");
      return;
    }
    hide("error1");
    // update balance
    const sum = getValue("input-field1") + getTaka("donated-amount1");
    getElement("donated-amount1").innerText = sum;
    const remain = getTaka("balance") - getValue("input-field1");
    getElement("balance").innerText = remain;
    // get time
    const bdTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    // create history div
    const div = document.createElement("div");
    div.innerHTML = `<div class="rounded-xl border-gray-200 border-2 p-4 space-y-4">
            <h3 class="text-xl font-bold">
              ${getValue(
                "input-field1"
              )} Taka is Donated for flood relief in Noakhali,
              Bangladesh
            </h3>
            <p class="text-gray1">
              Date : ${bdTime} GMT
              +06:00 (Bangladesh Standard Time)
            </p>
          </div>`;
    // add to history
    getElement("history-container").insertBefore(
      div,
      getElement("history-container").firstChild
    );
    // show popup
    my_modal_1.showModal();
    // refresh donate field
    getElement("input-field1").value = "";
  });

// donate now2
document
  .getElementById("donate-now-btn2")
  .addEventListener("click", function () {
    // validity check
    if (
      getValue("input-field2") <= 0 ||
      getValue("input-field2") > getTaka("balance")
    ) {
      unHide("error2");
      return;
    }
    hide("error2");
    // update balance
    const sum = getValue("input-field2") + getTaka("donated-amount2");
    getElement("donated-amount2").innerText = sum;
    const remain = getTaka("balance") - getValue("input-field2");
    getElement("balance").innerText = remain;
    // get time
    const bdTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    // create history div
    const div = document.createElement("div");
    div.innerHTML = `<div class="rounded-xl border-gray-200 border-2 p-4 space-y-4">
            <h3 class="text-xl font-bold">
              ${getValue(
                "input-field2"
              )} Taka is Donated for flood relief in Feni,
              Bangladesh
            </h3>
            <p class="text-gray1">
              Date : ${bdTime} GMT
              +06:00 (Bangladesh Standard Time)
            </p>
          </div>`;
    // add to history
    getElement("history-container").insertBefore(
      div,
      getElement("history-container").firstChild
    );
    // show popup
    my_modal_2.showModal();
    // refresh donate field
    getElement("input-field2").value = "";
  });

// donate now3
document
  .getElementById("donate-now-btn3")
  .addEventListener("click", function () {
    // validity check
    if (
      getValue("input-field3") <= 0 ||
      getValue("input-field3") > getTaka("balance")
    ) {
      unHide("error3");
      return;
    }
    hide("error3");
    // update balance
    const sum = getValue("input-field3") + getTaka("donated-amount3");
    getElement("donated-amount3").innerText = sum;
    const remain = getTaka("balance") - getValue("input-field3");
    getElement("balance").innerText = remain;
    // get time
    const bdTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    // create history div
    const div = document.createElement("div");
    div.innerHTML = `<div class="rounded-xl border-gray-200 border-2 p-4 space-y-4">
            <h3 class="text-xl font-bold">
              ${getValue(
                "input-field3"
              )} Taka is Donated for Injured in the Quota Movement
            </h3>
            <p class="text-gray1">
              Date : ${bdTime} GMT
              +06:00 (Bangladesh Standard Time)
            </p>
          </div>`;
    // add to history
    getElement("history-container").insertBefore(
      div,
      getElement("history-container").firstChild
    );
    // show popup
    my_modal_3.showModal();
    // refresh donate field
    getElement("input-field3").value = "";
  });
