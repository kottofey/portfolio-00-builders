import { modal_mask } from "@/scripts/elements";

// -----------------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------------

const showMask = () => {
  modal_mask && modal_mask?.classList.add("modal-menu__mask--show");
};

const hideMask = () => {
  modal_mask && modal_mask?.classList.remove("modal-menu__mask--show");
};

export { showMask, hideMask };
