const adviceBox = document.querySelector('#advice-text span');

fetch(`https://api.adviceslip.com/advice`).then((res) => {
  return res.json();
}).then(data => {
  console.log(data['slip']['advice'])
  const advice = data['slip']['advice'];
  adviceBox.innerHTML = advice;
});
