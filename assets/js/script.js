console.log("hello world")
const hamburgerBtn = $("#hamburger")
const hamburgerCheckEl = $("#hamburger-check")
const modalEl = $("#modal")
modalEl.hide()

hamburgerBtn.click(() => {
  modalEl.is(":hidden") ? modalEl.show() : modalEl.hide()
})
