const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0"; //setea en cero...
  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    // console.log(dataCeil);

    const increment = dataCeil / 5;
    currentNum = Math.ceil(currentNum + increment);
    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50); //50 ms
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
