/* eslint-disable */
import "bootstrap";
import "./styles.css";

window.onload = () => {
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
  let suits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];

  function randomSuit() {
    return suits[Math.floor(Math.random() * suits.length)];
  }
  function randomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  var pickACard = randomSuit();
  document.querySelector(".top").innerHTML = pickACard;
  document.querySelector(".number").innerHTML = randomNumber();
  document.querySelector(".bottom").innerHTML = pickACard;
};
