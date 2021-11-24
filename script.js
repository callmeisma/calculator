let result = "";
let input = "";
let operator = "";

const display = document.getElementById("result");

function showResult() {
  display.innerHTML = parseFloat(result).toLocaleString();
  input = "";
}

function showInput() {
  // Avoid leading zero
  if (input[0] === 0 && input.length > 1) {
    input = input.slice(1);
  }

  display.innerHTML = parseFloat(input).toLocaleString();
}

function operate() {
  if (input == "" && result == "") {
    result = "0";
  } else if (input === "") {
    input = result;
    input = "0";
  } else if (result === "") {
    result = input;
    input = "";
  } else {
    result = eval(result + operator + input);
  }
}

function btnToggler(id, key) {
  temp = document.getElementsByClassName("btnPoint");
  for (let i = 0; i < temp.length; i++) {
    temp[i].classList.remove("bg-success");
  }

  if (key === undefined) {
    if (id !== "") {
      document.getElementById(id).classList.add("bg-success");
    }
  }
  // Avoid causing errors with shift,ctrl, and other non mapped keys
  else {
    if (key === "=") {
      document.getElementById("enter").classList.add("bg-success");
    } else if (document.getElementById(key)) {
      document.getElementById(key.toLowerCase()).classList.add("bg-success");
    }
  }
}

let talk = function (e) {
  btnToggler(e.target.id, e.key);

  if (display.innerHTML.length <= 12) {
    if (e.key === "0" || e.target.id === "0") {
      input += "0";
      showInput();
    }
    if (e.key === "1" || e.target.id === "1") {
      input += "1";
      showInput();
    }
    if (e.key === "2" || e.target.id === "2") {
      input += "2";
      showInput();
    }
    if (e.key === "3" || e.target.id === "3") {
      input += "3";
      showInput();
    }
    if (e.key === "4" || e.target.id === "4") {
      input += "4";
      showInput();
    }
    if (e.key === "5" || e.target.id === "5") {
      input += "5";
      showInput();
    }
    if (e.key === "6" || e.target.id === "6") {
      input += "6";
      showInput();
    }
    if (e.key === "7" || e.target.id === "7") {
      input += "7";
      showInput();
    }
    if (e.key === "8" || e.target.id === "8") {
      input += "8";
      showInput();
    }
    if (e.key === "9" || e.target.id === "9") {
      input += "9";
      showInput();
    }
    if (e.key === "." || e.target.id === ".") {
      if (input.length < 1) {
        input += "0.";
        showInput();
      } else {
        input += ".";
        showInput();
      }
    }
  }
  if (e.key === "+" || e.target.id === "+") {
    operate();
    showResult();
    operator = "+";
  }
  if (e.key === "-" || e.target.id === "-") {
    operate();
    showResult();
    operator = "-";
  }
  if (e.key === "*" || e.target.id === "*") {
    operate();
    showResult();
    operator = "*";
  }
  if (e.key === "/" || e.target.id === "/") {
    operate();
    showResult();
    operator = "/";
  }
  if (e.key === "Enter" || e.target.id === "enter" || e.key === "=") {
    operate();
    showResult();
  }
  if (e.key === "Backspace" || e.target.id === "backspace") {
    if (input.length > 1) {
      input = input.slice(0, -1);
      showInput();
    }
    if (result.length > 1) {
      result = result.slice(0, -1);
      showResult();
    }
  }
  if (e.key === "Delete" || e.target.id === "delete") {
    result = "0";
    input = "0";
    showInput();
  }
};

document.addEventListener("keydown", talk, false);
document.addEventListener("click", talk, false);
