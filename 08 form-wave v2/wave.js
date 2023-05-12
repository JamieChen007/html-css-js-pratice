// onfocus：当元素获取到焦点的时候触发

// onblur:当元素失去焦点的时候

const emailText = document.getElementById("emailText");
const passwordText = document.getElementById("passwordText");
const emailTitle = document.getElementsByClassName("emailTitle");
const PasswordTitle = document.getElementsByClassName("PasswordTitle");

function emailInputFocus() {
  for (let i = 0; i < emailTitle.length; i++) {
    emailTitle[i].classList.add("active");
  }
}

function passwordInputFocus() {
  for (let i = 0; i < PasswordTitle.length; i++) {
    PasswordTitle[i].classList.add("active");
  }
}

function emailInputBlur() {
  for (let i = 0; i < emailTitle.length; i++) {
    emailTitle[i].classList.remove("active");
  }
}

function passwordInputBlur() {
  for (let i = 0; i < PasswordTitle.length; i++) {
    PasswordTitle[i].classList.remove("active");
  }
}

emailText.addEventListener("focus", emailInputFocus);
passwordText.addEventListener("focus", passwordInputFocus);
emailText.addEventListener("blur", emailInputBlur);
passwordText.addEventListener("blur", passwordInputBlur);
