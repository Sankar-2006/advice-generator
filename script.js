const adviceBox = document.querySelector(".advice-text");
const idBox = document.querySelector(".top-text span");
const diceButton = document.querySelector(".dice-button");

const fetchAdvice = (num) => {
  console.log('fetching'+ num)
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const advice = data["slip"]["advice"];
      const id = data["slip"]["id"];
      adviceBox.innerHTML = "\"" + advice + "\"";
      idBox.innerHTML = id;
    })
    .catch((error) => {
      adviceBox.innerHTML = "Failed to fetch advice. Please try again.";
    });
}

window.addEventListener('load', fetchAdvice);

diceButton.onclick = fetchAdvice;
