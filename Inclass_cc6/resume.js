function changemode() {
  document.querySelector(".ligth").style.display = "none";
  document.querySelector(".dark").style.display = "block";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("body").style.color = "#fff";
  for (let i = 0; i <= 5; i++) {
    document.querySelectorAll(".skill-value")[i].style.border =
      "1px solid #fff";
    document.querySelectorAll(".skill-value-1")[i].style.backgroundColor =
      "#fff";
  }
  document.querySelector(".sec-head").style.backgroundColor = "#fff";
  document.querySelector(".sec-head").style.color = "#000";
}

function changemodedark() {
  document.querySelector(".ligth").style.display = "block";
  document.querySelector(".dark").style.display = "none";
  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector("body").style.color = "#000";
  for (let i = 0; i <= 5; i++) {
    document.querySelectorAll(".skill-value")[i].style.border =
      "1px solid #000";
    document.querySelectorAll(".skill-value-1")[i].style.backgroundColor =
      "#000";
  }
  document.querySelector(".sec-head").style.backgroundColor = "#000";
  document.querySelector(".sec-head").style.color = "#fff";
}

function addskill() {
  let count = document.getElementById("count_name").childNodes;
  let sum = 0;
  for (let i = 0; i < count.length; i++) {
    if (i % 2 != 0) {
      sum += 1;
    }
  }
  document
    .querySelector(".skill-item ul")
    .appendChild(document.createElement("li"));
  document.querySelectorAll(".skill-item ul li")[sum].className = "name-skill";
  document.querySelectorAll(".skill-item ul .name-skill")[
    sum
  ].innerHTML = document.querySelector(".inputskill").value;

  document
    .querySelectorAll(".skill-item ul")[1]
    .appendChild(document.createElement("li"));
  document.querySelectorAll(".skill-item ul")[1].querySelectorAll("li")[
    sum
  ].className = "skill-value";

  document
    .querySelectorAll(".skill-item ul")[1]
    .querySelectorAll("li")
    [sum].appendChild(document.createElement("div"));
  document.querySelectorAll(".skill-item ul")[1].querySelectorAll("li div")[
    sum
  ].className = "skill-value-1";
}
