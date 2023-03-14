const pass = document.getElementById("pass"),
  confirmPass = document.getElementById("confirm-pass");

const confirmPassWrapper = document.getElementById("confirm-pass_wrapper");

const passNotMatch = document.createElement("text")
passNotMatch.innerText= "*Password do not match";
confirmPassWrapper.appendChild(passNotMatch);
passNotMatch.style.display = "none";
// passNotMatch.style.color = "#E94F37)"

function passValidate() {
  if (pass.value !== confirmPass.value) {
    confirmPass.style.borderColor = "hsl(8.09,80.18%,56.47%)";
    pass.style.borderColor = "hsl(8.09,80.18%,56.47%)";
    confirmPassWrapper.style.color= "hsl(8.09,80.18%,56.47%)";
    passNotMatch.style.display = "block";
  } else {
    confirmPass.style.borderColor = "hsl(142.57,52.15%,40.98%)";
    pass.style.borderColor = "hsl(142.57,52.15%,40.98%)";
    passNotMatch.style.display = "none";

  }
}

// pass.onchange = passValidate
confirmPass.onchange = passValidate;
confirmPass.onkeyup = passValidate;
