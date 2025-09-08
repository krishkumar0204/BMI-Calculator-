const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const btn = document.querySelector(".calculate");
const result = document.querySelector(".result-num");
const condition = document.querySelector("span");

weight.addEventListener("input", () => {
  return weight.value;
});

height.addEventListener("input", () => {
  return height.value;
});

btn.addEventListener("click", () => {
  if (height.value && weight.value) {
    let bmi = weight.value / (height.value * height.value);
    let finalResult = bmi.toFixed();

    if (bmi >= 40) {
      result.innerText = finalResult;
      condition.innerText = "Obesity (severe)";
    } else if (bmi >= 30 && bmi <= 39.9) {
      result.innerText = finalResult;
      condition.innerText = "Obesity ";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerText = finalResult;
      condition.innerText = "Overweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerText = finalResult;
      condition.innerText = "Normal Weight";
    } else {
      result.innerText = finalResult;
      condition.innerText = "UnderWeight";
    }
  }
});
