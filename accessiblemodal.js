const KEYCODES = {
  ESC: 27,
  TAB: 9,
  RETURN: 13
};

const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal");
const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const closers = document.querySelectorAll('[wb-data="close"]');
let previousActiveElement;

const openModal = (event) => {
  previousActiveElement = document.activeElement;
  const focusableContent = modal.querySelectorAll(focusableElements);
  modal.classList.add("is-open");
  document.addEventListener("keydown", (e) => keyPressed(e, focusableContent));
  closers.forEach((closer) => {
    closer.addEventListener("click", closeModal);
  });
  focusableContent[0].focus();
};

const closeModal = () => {
  modal.classList.remove("is-open");
  closers.forEach((closer) => {
    closer.removeEventListener("click", closeModal);
  });
  document.removeEventListener("keydown", keyPressed);
  previousActiveElement.focus(); 
};

const keyPressed = (event, focusableContent) => {
  if (event.keyCode === KEYCODES.ESC) {
    closeModal();
  }
  if (event.keyCode !== KEYCODES.TAB) {
    return;
  }
  if (event.shiftKey) {
    if (document.activeElement === focusableContent[0]) {
      focusableContent[focusableContent.length - 1].focus();
      event.preventDefault();
    }
  } else {
    if (
      document.activeElement === focusableContent[focusableContent.length - 1]
    ) {
      focusableContent[0].focus();
      event.preventDefault();
    }
  }
};

btn.addEventListener("click", openModal);
