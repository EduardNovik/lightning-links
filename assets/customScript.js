const body = document.querySelector("body");
const forPartnersButtons = document.querySelectorAll(".forPartnersButton");
const forPartnersPopup = document.getElementById("for-partners-popup");
const closePopupButton = document.getElementById("closePopupButton");
const cancelPopupButton = document.getElementById("cancelButton");

// const buyPopupCustomButtons = document.querySelectorAll(
//   ".buyPopupCustomButtons"
// );
// const buyPopupCustom = document.getElementById("buy-popup-custom");

// const closeBuyPopupCustomButton = document.getElementById(
//   "closeBuyPopupCustomButton"
// );

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

// buyPopupCustomButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     buyPopupCustom.classList.toggle("hidden");
//     buyPopupCustom.classList.toggle("flex");
//     body.classList.toggle("overflow-hidden");
//   });
// });

// closeBuyPopupCustomButton.addEventListener("click", () => {
//   buyPopupCustom.classList.toggle("hidden");
//   buyPopupCustom.classList.toggle("flex");
//   body.classList.toggle("overflow-hidden");
// });

const buyButtons = document.querySelectorAll(".buyPopupCustomButtons");

buyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // This 'this' keyword refers to the button clicked
    const popupId = this.getAttribute("data-popup-id");
    const popup = document.getElementById(popupId);
    if (popup) {
      // Removes 'hidden' class to show the popup
      // popup.classList.remove("hidden");
      popup.classList.toggle("hidden");
      popup.classList.toggle("flex");
      body.classList.toggle("overflow-hidden");
    }
  });
});

// Close popup functionality
document.querySelectorAll(".closeBuyPopupCustomButton").forEach((button) => {
  button.addEventListener("click", function () {
    // 'this.closest' finds the nearest parent with the '.buy-popup-custom' class and adds 'hidden'
    this.closest(".buy-popup-custom").classList.add("hidden");
  });
});
