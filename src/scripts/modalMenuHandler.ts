// -----------------------------------------------------------------------------
// Setup
// -----------------------------------------------------------------------------

// const menu_button = document.querySelector("#menu-button");
// const menu_close_button = document.querySelector("#modal-menu-close-button");
// const modal_menu = document.querySelector("#modal-menu");
// const modal_menu_mask = document.querySelector("#modal-menu-mask");
// const body = document.querySelector("body");

import {
  modal_menu,
  body,
  menu_open_button,
  menu_close_button,
  modal_mask,
} from "./elements";

import { hideMask, showMask } from "@/scripts/maskHandler";

// -----------------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------------

const openMenu = () => {
  modal_menu && modal_menu?.classList.add("modal-menu--show");
  body && body.classList.add("body-no-scroll");

  showMask();
};

const closeMenu = () => {
  modal_menu && modal_menu?.classList.remove("modal-menu--show");
  body && body.classList.remove("body-no-scroll");

  hideMask();
};

// -----------------------------------------------------------------------------
// Listeners
// -----------------------------------------------------------------------------

menu_open_button?.addEventListener("click", (e) => {
  e.stopPropagation();
  openMenu();
});

menu_close_button?.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
});

modal_mask?.addEventListener("click", () => {
  closeMenu();
});
