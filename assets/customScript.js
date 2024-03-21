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
const screenWidth = window.innerWidth;

switch (activeAtributeValue) {
  case "MILD":
    inchValueElement.innerHTML = " — Mild lower <b>- 1 inch</b>";
    curtain.style.transform = "translateY(30%)";
    if (carBodyElement) {
      carBodyElement.style.removeProperty("margin-top");
      carBodyElement.style.marginTop = "12%";

      if (screenWidth >= 1280) {
        carBodyElement.style.removeProperty("margin-top");
        carBodyElement.style.marginTop = "18%";
      }
      if (screenWidth >= 1536) {
        carBodyElement.style.removeProperty("margin-top");
        carBodyElement.style.marginTop = "20%";
      }
    }
    break;

  case "MEDIUM":
    inchValueElement.innerHTML = " — Medium lower <b>- 2 inch</b>";
    curtain.style.transform = "translateY(50%)";
    if (carBodyElement) {
      carBodyElement.style.removeProperty("margin-top");
      carBodyElement.style.marginTop = "13%";
      if (screenWidth >= 1280) {
        carBodyElement.style.removeProperty("margin-top");
        carBodyElement.style.marginTop = "19%";
      }
      if (screenWidth >= 1536) {
        carBodyElement.style.removeProperty("margin-top");
        carBodyElement.style.marginTop = "21%";
      }
    }
    break;

  case "STANCE":
    inchValueElement.innerHTML = " — Stance lower <b>- 3 inch</b>";
    curtain.style.transform = "translateY(80%)";
    if (carBodyElement) {
      carBodyElement.style.removeProperty("margin-top");
      carBodyElement.style.marginTop = "14%";
      if (screenWidth >= 1280) {
        carBodyElement.style.removeProperty("margin-top");
        carBodyElement.style.marginTop = "20%";
      }
      if (screenWidth >= 1536) {
        carBodyElement.style.removeProperty("margin-top");
        carBodyElement.style.marginTop = "22%";
      }
    }
    break;
  default:
    break;
}

swatchButtonsElement.forEach((button) => {
  button.addEventListener("click", function () {
    const activeOptionValue = this.getAttribute("data-swatch-option");
    const screenWidth = window.innerWidth;

    switch (activeOptionValue) {
      case "MILD":
        inchValueElement.innerHTML = " — Mild lower <b>- 1 inch</b>";
        curtain.style.transform = "translateY(30%)";
        if (carBodyElement) {
          carBodyElement.style.removeProperty("margin-top");
          carBodyElement.style.marginTop = "12%";

          if (screenWidth >= 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "18%";
          }
          if (screenWidth >= 1536) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "20%";
          }
        }
        break;
      case "MEDIUM":
        inchValueElement.innerHTML = " — Medium lower <b>- 2 inch</b>";
        curtain.style.transform = "translateY(50%)";
        if (carBodyElement) {
          carBodyElement.style.removeProperty("margin-top");
          carBodyElement.style.marginTop = "13%";
          if (screenWidth >= 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "19%";
          }
          if (screenWidth >= 1536) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "21%";
          }
        }

        break;
      case "STANCE":
        inchValueElement.innerHTML = " — Stance lower <b>- 3 inch</b>";
        curtain.style.transform = "translateY(80%)";
        if (carBodyElement) {
          carBodyElement.style.removeProperty("margin-top");
          carBodyElement.style.marginTop = "14%";
          if (screenWidth >= 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "20%";
          }
          if (screenWidth >= 1536) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "22%";
          }
        }
        break;
      default:
        break;
    }
  });
});

window.addEventListener(
  "resize",
  function () {
    const swatchActiveButtonElementWhileResize =
      document.querySelector(".swatch--active");
    const activeAttributeValue =
      swatchActiveButtonElementWhileResize.getAttribute("data-swatch-option");
    const screenWidth = window.innerWidth;

    switch (activeAttributeValue) {
      case "MILD":
        if (carBodyElement) {
          if (screenWidth < 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "12%";
          }
          if (screenWidth >= 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "18%";
          }
          if (screenWidth >= 1536) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "20%";
          }
        }
        break;

      case "MEDIUM":
        if (carBodyElement) {
          if (screenWidth < 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "13%";
          }

          if (screenWidth >= 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "19%";
          }
          if (screenWidth >= 1536) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "21%";
          }
        }
        break;

      case "STANCE":
        if (carBodyElement) {
          if (screenWidth < 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "14%";
          }
          if (screenWidth >= 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "20%";
          }
          if (screenWidth >= 1536) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "22%";
          }
        }
        break;
      default:
        if (carBodyElement) {
          if (screenWidth < 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "13%";
          }

          if (screenWidth >= 1280) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "19%";
          }
          if (screenWidth >= 1536) {
            carBodyElement.style.removeProperty("margin-top");
            carBodyElement.style.marginTop = "21%";
          }
        }
        break;
    }
  },
  true
);
