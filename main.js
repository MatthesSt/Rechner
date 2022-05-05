let difficulty = 1;
let numbers = 1;
let streak = 0;
function createTask() {
  if (difficulty % 30 == 0) {
    difficulty -= 25 - streak;
    numbers++;
  }
  document.getElementById("anwser").className = "";
  let task = "";
  task +=
    Math.floor(Math.random() * (10 + difficulty / 2)) +
    Math.floor(Math.random() * (10 + difficulty / 2));
  for (let i = 0; i < numbers + 1; i++) {
    operation = ["+", "-"][Math.round(Math.random() * 1)];
    task += " " + operation + " ";
    task +=
      Math.floor(Math.random() * (10 + difficulty / 2)) +
      Math.floor(Math.random() * (10 + difficulty / 2));
  }
  setInner("task", task);
  console.log(difficulty);
  difficulty++;
}

function submitAnwser() {
  document.getElementById("anwser").className = "";
  let anwserInput = document.getElementById("anwserInput").value;
  let anwser = getTaskAnwser();
  if (parseInt(anwserInput) == anwser) {
    document.getElementById("anwser").innerHTML = anwserInput;
    document.getElementById("anwser").classList.add("correct");
    streak += 1;
  } else {
    document.getElementById(
      "anwser"
    ).innerHTML = `that's incorrect, the correct anwser was ${anwser}\n you reached a streak of ${streak}`;
    console.log("gameover");
    gameOver();
  }
  document.getElementById("streak").innerHTML = streak;
}

function getTaskAnwser() {
  let task = document.getElementById("task").innerHTML;
  let arr = task.split(" ");
  let numbers = [];
  let operations = [];
  for (let e of arr) {
    if (parseInt(e)) {
      numbers.push(e);
    } else {
      operations.push(e);
    }
  }
  let anwser = parseInt(numbers[0]);
  for (let i = 0; i < numbers.length - 1; i++) {
    switch (operations[i]) {
      case "+":
        anwser += parseInt(numbers[i + 1]);
        break;
      case "-":
        anwser -= parseInt(numbers[i + 1]);
        break;
    }
  }
  console.log(anwser);
  return anwser;
}

function gameOver() {
  streak = 0;
  difficulty = 1;
  numbers = 1;
  document.getElementById("anwser").classList.add("incorrect");
}

function setInner(id, value) {
  document.getElementById(id).innerHTML = value;
}
