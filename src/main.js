/* eslint-disable */
import "bootstrap";
import "./styles.css";

window.onload = function() {
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
  let suits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
  function randomSuit() {
    return suits[Math.floor(Math.random()) * suits.length];
  }
  function randomNumber() {
    return numbers[Math.floor(Math.random()) * numbers.length];
  }
  console.log();
};

document.querySelector(".top").innerHTML = "&#9824;";

document.querySelector(".number").innerHTML = "5";

document.querySelector(".bottom").innerHTML = "&#9824;";
