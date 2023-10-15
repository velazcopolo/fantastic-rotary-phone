/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function getExcuse() {
    return `${who[getRandomNumber(0, 3)]} ${action[getRandomNumber(0, 3)]} ${
      what[getRandomNumber(0, 2)]
    } ${when[getRandomNumber(0, 4)]}`;
  }

  document.getElementById("excuse").innerHTML = getExcuse();
};
