import { modal_mask, modal_request } from "@/scripts/elements";

// -----------------------------------------------------------------------------
// On load document
// -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", (e) => {
  modal_mask?.classList.remove("notransition");
});

document.addEventListener("DOMContentLoaded", (e) => {
  modal_request?.classList.remove("notransition");
});
