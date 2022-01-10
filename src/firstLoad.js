import Dice from "./dice";

function addContent() {
  let diceFlag = 20;
  let numFlag = 1;
  let allDice = [];
  const page = document.querySelector("#content");
  // Header
  const header = document.createElement("div");
  header.classList.add("header");
  const reloadPage = document.createElement("button");
  reloadPage.classList.add("title");
  // Reload the page when clicking on the title
  reloadPage.textContent = "The Dice of Fate";
  reloadPage.addEventListener("click", () => {
    location.reload();
  });
  // Mid
  const mid = document.createElement("div");
  mid.classList.add("mid");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const mainArea = document.createElement("div");
  mainArea.classList.add("mainArea");
  // Build dice area
  const rollBtn = document.createElement("button");
  rollBtn.textContent = "ROLL";
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "RESET";
  const btnArea = document.createElement("div");
  btnArea.classList.add("btnArea");
  const diceArea = document.createElement("div");
  diceArea.classList.add("diceArea");
  const infoArea = document.createElement("p");
  infoArea.classList.add("info");
  infoArea.textContent =
    "You are rolling (" + numFlag + ") D" + diceFlag + " dice!";
  // Default dice
  const defaultDice = document.createElement("div");
  defaultDice.classList.add("20");
  defaultDice.classList.add("dice");
  defaultDice.textContent = 20;
  diceArea.appendChild(defaultDice);
  allDice.push(new Dice("20"));
  // Append components
  mainArea.appendChild(infoArea);
  mainArea.appendChild(diceArea);
  mainArea.appendChild(btnArea);
  btnArea.appendChild(rollBtn);
  btnArea.appendChild(resetBtn);

  // Build Menu: Choose dice type and choose number of dice
  const numRow = document.createElement("div");
  numRow.classList.add("numRow");
  for (let i = 1; i < 6; i++) {
    const numBtn = document.createElement("button");
    numBtn.classList.add(i);
    numBtn.textContent = i;
    numRow.appendChild(numBtn);
  }
  // Dice Type
  const typeRow = document.createElement("div");
  typeRow.classList.add("typeRow");
  const d20 = document.createElement("button");
  d20.classList.add("20");
  d20.classList.add("dice");
  d20.textContent = "D20";
  const d12 = document.createElement("button");
  d12.classList.add("12");
  d12.classList.add("dice");
  d12.textContent = "D12";
  const d10 = document.createElement("button");
  d10.classList.add("10");
  d10.classList.add("dice");
  d10.textContent = "D10";
  const d8 = document.createElement("button");
  d8.classList.add("8");
  d8.classList.add("dice");
  d8.textContent = "D8";
  const d6 = document.createElement("button");
  d6.classList.add("6");
  d6.classList.add("dice");
  d6.textContent = "D6";
  const d4 = document.createElement("button");
  d4.classList.add("4");
  d4.classList.add("dice");
  d4.textContent = "D4";
  typeRow.appendChild(d20);
  typeRow.appendChild(d12);
  typeRow.appendChild(d10);
  typeRow.appendChild(d8);
  typeRow.appendChild(d6);
  typeRow.appendChild(d4);
  // Create dice flag
  const allTypeBtn = typeRow.querySelectorAll("button");
  allTypeBtn.forEach((button) =>
    button.addEventListener("click", () => {
      diceFlag = button.classList[0];
      console.log("diceFlag = " + diceFlag);
      // Create dice
      createDice();
    })
  );
  // Create number flag
  const allNumBtn = numRow.querySelectorAll("button");
  allNumBtn.forEach((button) =>
    button.addEventListener("click", () => {
      numFlag = button.className;
      console.log("numFlag = " + numFlag);
      // Create dice
      createDice();
    })
  );

  // Create dice based on flags
  function createDice() {
    while (diceArea.firstChild) {
      diceArea.removeChild(diceArea.firstChild);
    }
    allDice = [];
    if (numFlag != 0 && diceFlag != 0) {
      for (let i = 1; i <= numFlag; i++) {
        const diceObj = new Dice(diceFlag.toString());
        allDice.push(diceObj);
        const dice = document.createElement("div");
        dice.classList.add(diceFlag);
        dice.classList.add("dice");
        dice.textContent = diceObj.getSide();
        diceArea.appendChild(dice);
      }
    }
    infoArea.textContent =
      "You are rolling (" + numFlag + ") D" + diceFlag + " dice!";
  }

  // Roll dice
  rollBtn.addEventListener("click", () => {
    const all = diceArea.querySelectorAll(".dice");
    let i = 0;
    all.forEach(function (dice) {
      const res = allDice[i].roll();
      dice.textContent = res;
      i++;
    });
  });

  // Reset button
  resetBtn.addEventListener("click", () => {
    while (diceArea.firstChild) {
      diceArea.removeChild(diceArea.firstChild);
    }
    let diceFlag = 20;
    let numFlag = 1;
    let allDice = [];
    // Default dice
    const defaultDice = document.createElement("div");
    defaultDice.classList.add("20");
    defaultDice.classList.add("dice");
    defaultDice.textContent = 20;
    diceArea.appendChild(defaultDice);
    allDice.push(new Dice(20));
    infoArea.textContent =
      "You are rolling (" + numFlag + ") D" + diceFlag + " dice!";
  });
  // Footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Property of Darren Le";
  // UI
  page.appendChild(header);
  header.appendChild(reloadPage);
  page.appendChild(mid);
  mid.appendChild(mainArea);
  mid.appendChild(menu);
  menu.appendChild(numRow);
  menu.appendChild(typeRow);
  page.appendChild(footer);
}

export default addContent;
