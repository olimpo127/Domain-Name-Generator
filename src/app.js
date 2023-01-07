/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let com = ".com";
  //console.log(pronoun[0] + adj[0] + noun[0] + com);
  //console.log(pronoun[0] + adj[0] + noun[1] + com);
  //console.log(pronoun[0] + adj[1] + noun[1] + com);
  //console.log(pronoun[0] + adj[1] + noun[0] + com);
  //console.log(pronoun[1] + adj[0] + noun[0] + com);
  //console.log(pronoun[1] + adj[0] + noun[1] + com);
  //console.log(pronoun[1] + adj[1] + noun[0] + com);
  //console.log(pronoun[1] + adj[1] + noun[1] + com);
  for (let i = 0; i < 2; i++) {
    console.log(pronoun[0] + adj[0] + noun[i] + com);
    console.log(pronoun[0] + adj[1] + noun[i] + com);
    console.log(pronoun[1] + adj[0] + noun[i] + com);
    console.log(pronoun[1] + adj[1] + noun[i] + com);
  }
};
