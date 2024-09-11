const adviceBox = document.querySelector('#advice-text span');
const idBox = document.querySelector('#top-text span')
const diceButton = document.querySelector('#dice-button')

adviceBox.innerHTML = "Loading advice...";
idBox.innerHTML = "-";


fetch(`https://api.adviceslip.com/advice`).then((res) => {
  return res.json();
}).then(data => {
  const advice = data['slip']['advice'];
  const id = data['slip']['id']
  adviceBox.innerHTML = advice;
  idBox.innerHTML = id;
}).catch(error => {
  adviceBox.innerHTML = "Failed to fetch advice. Please try again.";
});


diceButton.onclick = () => {
  location.reload();
}
