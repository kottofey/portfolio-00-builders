const body = document.querySelector("body");

const menu_open_button = document.querySelector("#menu-button");
const menu_close_button = document.querySelector("#modal-menu-close-button");
const modal_menu = document.querySelector("#modal-menu");

const modal_mask = document.querySelector("#modal-menu-mask");

const request_buttons = document.querySelectorAll(".request__button");

const modal_request = document.querySelector("#modal-request");
const modal_request_close_button = document.querySelector(
  "#modal-request-close-button",
);
const modal_request_send_button = document.querySelector(
  "#modal-request-send-button",
);

export {
  modal_menu,
  body,
  menu_open_button,
  menu_close_button,
  modal_mask,
  request_buttons,
  modal_request,
  modal_request_close_button,
  modal_request_send_button,
};
