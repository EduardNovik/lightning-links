const body = document.querySelector("body");
const forPartnersButtons = document.querySelectorAll(".forPartnersButton");
const forPartnersPopup = document.getElementById("for-partners-popup");
const closePopupButton = document.getElementById("closePopupButton");
const cancelPopupButton = document.getElementById("cancelButton");
const inchValueElement = document.getElementsByClassName("inch-value")[0];
const swatchButtonsElement = document.querySelectorAll(".swatch-btn");
const swatchActiveButtonElement = document.querySelector(".swatch--active");
const productBgElement = document.querySelector(".product-bg");
const curtain = document.querySelector(".curtain");
const carBodyElement = document.querySelector(".car-body");

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

const activeAtributeValue =
  swatchActiveButtonElement.getAttribute("data-swatch-option");
switch (activeAtributeValue) {
  case "MILD":
    inchValueElement.innerHTML = " — Mild lower <b>- 1 inch</b>";
    curtain.style.transform = "translateY(30%)";
    break;

  case "MEDIUM":
    inchValueElement.innerHTML = " — Medium lower <b>- 2 inch</b>";
    curtain.style.transform = "translateY(50%)";

    break;

  case "STANCE":
    inchValueElement.innerHTML = " — Stance lower <b>- 3 inch</b>";
    curtain.style.transform = "translateY(80%)";
    break;
  default:
    break;
}

swatchButtonsElement.forEach((button) => {
  button.addEventListener("click", function () {
    const activeOptionValue = this.getAttribute("data-swatch-option");
    switch (activeOptionValue) {
      case "MILD":
        inchValueElement.innerHTML = " — Mild lower <b>- 1 inch</b>";
        curtain.style.transform = "translateY(30%)";
        // if (carBodyElement) {
        //   curtain.style.transform = "translateY(20px)";
        // }
        break;
      case "MEDIUM":
        inchValueElement.innerHTML = " — Medium lower <b>- 2 inch</b>";
        curtain.style.transform = "translateY(50%)";
        // if (carBodyElement) {
        //   curtain.style.transform = "translateY(15px)";
        // }

        break;
      case "STANCE":
        inchValueElement.innerHTML = " — Stance lower <b>- 3 inch</b>";
        curtain.style.transform = "translateY(80%)";
        // if (carBodyElement) {
        //   curtain.style.transform = "translateY(10px)";
        // }
        break;
      default:
        break;
    }
  });
});

// const variantButtons = document.querySelectorAll(".variant-btn");
// console.log(variantButtons);

// variantButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     const isSoldout = button.getAttribute("data-swatch-soldout") === "true";
//     const isActive = button.classList.contains("swatch--active");
//     const hiddenBuyBtn = document.querySelector(".hidden-buy-btn");
//     const visibleBuyBtn = document.querySelector(".visible-buy-btn");
//     console.log(isSoldout, isActive, hiddenBuyBtn, visibleBuyBtn);

//     if (isSoldout && isActive) {
//       hiddenBuyBtn.style.display = "block";
//       visibleBuyBtn.style.display = "none";
//       console.log("Sold out");
//     } else {
//       visibleBuyBtn.style.display = "block";
//       hiddenBuyBtn.style.display = "none";
//       log("Not sold out");
//     }
//   });
// });
