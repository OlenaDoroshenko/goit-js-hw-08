!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,l.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=l);var n=l("1WSnx"),o=document.querySelector(".feedback-form");o.addEventListener("input",(0,n.throttle)((function(e){var t={email:o.elements.email.value,message:o.elements.message.value};a=t,localStorage.setItem("feedback-form-state",JSON.stringify(a));var a}),500)),o.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:o.elements.email.value,message:o.elements.message.value}),o.reset(),localStorage.removeItem("feedback-form-state")}));window.onload=function(){if(localStorage.getItem("feedback-form-state")){var e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e),a=t.email,l=t.message;o.elements.email.value=a,o.elements.message.value=l}}}();
//# sourceMappingURL=03-feedback.1f6775e6.js.map