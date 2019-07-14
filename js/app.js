const input = document.querySelector("#input")
input.value = 1;

const add = document.querySelector("#add")

const subtract = document.querySelector("#subtract")

const result = document.querySelector("#result")

let word = 0;
result.innerText = word;

add.addEventListener("click", (e) => {
  word += parseInt(input.value);
  result.innerHTML = word;
  if (word < 0) {
    document.querySelector("#result").style.color = "red";
  } else {
    document.querySelector("#result").style.color = "black";
  }
  input.value = "";
})

subtract.addEventListener("click", (e) => {
  word -= parseInt(input.value);
  result.innerHTML = word;
  if (word < 0) {
    document.querySelector("#result").style.color = "red";
  } else {
    document.querySelector("#result").style.color = "black";
  }
  input.value = "";
})