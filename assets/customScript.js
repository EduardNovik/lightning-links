const body = document.querySelector("body");
const forPartnersButtons = document.querySelectorAll(".forPartnersButton");
const forPartnersPopup = document.getElementById("for-partners-popup");
const closePopupButton = document.getElementById("closePopupButton");
const cancelPopupButton = document.getElementById("cancelButton");
const inchValueElement = document.getElementsByClassName("inch-value")[0];
const swatchButtonsElement = document.querySelectorAll(".swatch-btn");
const swatchActiveButtonElement = document.querySelector(".swatch--active");
const productBgElement = document.querySelector(".product-bg");

const buyPopupCustomButtons = document.querySelectorAll(
  ".buyPopupCustomButtons"
);

const closeBuyPopupCustomButtons = document.querySelectorAll(
  ".closeBuyPopupCustomButton"
);

const successPopup = document.getElementById("successPopup");
const sendButtonInForPartnersPopup = document.getElementById(
  "sendButtonInForPartnersPopup"
);
const quickOrderPopup = document.getElementById("quick-order-popup");
const sendButtonInQuickOrderPopup = document.getElementById(
  "sendButtonInQuickOrderPopup"
);
const quickOrderBtn = document.getElementById("quickOrderBtn");

forPartnersButtons.forEach((button) => {
  button.addEventListener("click", () => {
    forPartnersPopup.classList.toggle("hidden");
    forPartnersPopup.classList.toggle("flex");
    body.classList.toggle("overflow-hidden");
  });
});

closePopupButton.addEventListener("click", () => {
  forPartnersPopup.classList.toggle("hidden");
  forPartnersPopup.classList.toggle("flex");
  body.classList.toggle("overflow-hidden");
});

cancelPopupButton.addEventListener("click", () => {
  forPartnersPopup.classList.toggle("hidden");
  forPartnersPopup.classList.toggle("flex");
  body.classList.toggle("overflow-hidden");
});

sendButtonInForPartnersPopup.addEventListener("click", () => {
  forPartnersPopup.classList.toggle("hidden");
  forPartnersPopup.classList.toggle("flex");
  successPopup.classList.toggle("hidden");
  successPopup.classList.toggle("flex");
});

sendButtonInQuickOrderPopup.addEventListener("click", () => {
  quickOrderPopup.classList.toggle("hidden");
  quickOrderPopup.classList.toggle("flex");
  successPopup.classList.toggle("hidden");
  successPopup.classList.toggle("flex");
  body.classList.toggle("overflow-hidden");
});

if (quickOrderBtn) {
  quickOrderBtn.addEventListener("click", () => {
    quickOrderPopup.classList.toggle("hidden");
    quickOrderPopup.classList.toggle("flex");
    body.classList.toggle("overflow-hidden");
  });
}

buyPopupCustomButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // This 'this' keyword refers to the button clicked
    const popupId = this.getAttribute("data-popup-id");
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.classList.remove("invisible");
      body.classList.toggle("overflow-hidden");
    }
  });
});

// Close popup functionality
closeBuyPopupCustomButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // 'this.closest' finds the nearest parent with the '.buy-popup-custom' class and adds 'hidden'
    this.closest(".buy-popup-custom").classList.add("invisible");
    body.classList.toggle("overflow-hidden");
  });
});

// p element data changer-----
const activeAtributeValue =
  swatchActiveButtonElement.getAttribute("data-swatch-option");
switch (activeAtributeValue) {
  case "MILD":
    inchValueElement.innerHTML = " — Mild lower <b>- 1 inch</b>";

    break;
  case "MEDIUM":
    inchValueElement.innerHTML = " — Medium lower <b>- 2 inch</b>";

    break;
  case "STANCE":
    inchValueElement.innerHTML = " — Stance lower <b>- 3 inch</b>";

    break;
  default:
    break;
}

// product-bg element data changer-----

swatchButtonsElement.forEach((button) => {
  button.addEventListener("click", function () {
    const activeOptionValue = this.getAttribute("data-swatch-option");
    const productBgElement = document.querySelector(".product-bg");

    switch (activeOptionValue) {
      case "MILD":
        productBgElement.style.setProperty("--gradientStart", "#C7CCD3");
        productBgElement.style.setProperty("--gradientEnd", "#FFFFFF");
        // Adjust the gradient percentage as needed
        productBgElement.style.background =
          "linear-gradient(0deg, var(--gradientStart) 80%, var(--gradientEnd) 0%)";
        break;
      case "MEDIUM":
        productBgElement.style.setProperty("--gradientStart", "#A8B1B8");
        productBgElement.style.setProperty("--gradientEnd", "#FFFFFF");
        // Adjust the gradient percentage as needed
        productBgElement.style.background =
          "linear-gradient(0deg, var(--gradientStart) 50%, var(--gradientEnd) 0%)";
        break;
      case "STANCE":
        productBgElement.style.setProperty("--gradientStart", "#8A949A");
        productBgElement.style.setProperty("--gradientEnd", "#FFFFFF");
        // Adjust the gradient percentage as needed
        productBgElement.style.background =
          "linear-gradient(0deg, var(--gradientStart) 30%, var(--gradientEnd) 0%)";
        break;
      default:
        // Handle default case or reset to initial values
        break;
    }
  });
});
