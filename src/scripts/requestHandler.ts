import {
  request_buttons,
  modal_mask,
  modal_request,
  body,
  modal_request_close_button,
} from "@/scripts/elements";
import { showMask, hideMask } from "@/scripts/maskHandler";

// -----------------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------------

const showModal = () => {
  modal_request && modal_request?.classList.add("modal-request--show");
  body && body.classList.add("body-no-scroll");
  showMask();
};

const closeModal = () => {
  modal_request && modal_request?.classList.remove("modal-request--show");
  body && body.classList.remove("body-no-scroll");

  hideMask();
};

// -----------------------------------------------------------------------------
// Listeners
// -----------------------------------------------------------------------------

request_buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
    showMask();
  });
});

modal_mask?.addEventListener("click", () => {
  closeModal();
  hideMask();
});

modal_request_close_button?.addEventListener("click", () => {
  closeModal();
  hideMask();
});
