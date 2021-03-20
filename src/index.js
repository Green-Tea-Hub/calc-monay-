"use strict";

/** When error is fu . so mutch */
const err = (error_text) => {
  confirm(error_text + "\n\n This page will be reload")
    ? window.location.reload()
    : false;
};
