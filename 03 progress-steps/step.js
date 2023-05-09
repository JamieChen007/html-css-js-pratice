/* <div class="container">
      <div class="step_container">
        <div class="stepCurrent">1</div>
        <div class="line"></div>
        <div class="step">2</div>
        <div class="line"></div>
        <div class="step">3</div>
        <div class="line"></div>
        <div class="step">4</div>
      </div>
      <div class="button_container">
        <button class="step_button" id="prev">Prev</button>
        <button class="step_button_active" id="next">Next</button>
      </div>
    </div> */

let stepNumber = document.getElementsByName("step_number");
let stepLine = document.getElementsByName("step_line");

let preBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

// currentStep[X].className="stepCurrent" change to blue
// currentStep[X].className="step" change to gray
// stepLine[X].className="lineLink" change to blue
// stepLine[X].className="line" change to gray
// className="step_button" change to not allow and gray
// className="step_button_active" change to allow and blue

let stepNum = 0;

function preStep() {
  if (stepNum === 0) {
    return;
  }
  if (stepNum === 1) {
    preBtn.className = "step_button";
  }
  stepNumber[stepNum].className = "step";
  stepNum--;
  stepLine[stepNum].className = "line";
  nextBtn.className = "step_button_active";
}

function nextStep() {
  if (stepNum >= stepNumber.length - 1) {
    return;
  }

  stepNum++;
  if (stepNum === stepNumber.length - 1) {
    nextBtn.className = "step_button";
  }

  stepNumber[stepNum].className = "stepCurrent";
  stepLine[stepNum - 1].className = "lineLink";
  preBtn.className = "step_button_active";
}

preBtn.addEventListener("click", preStep);
nextBtn.addEventListener("click", nextStep);
