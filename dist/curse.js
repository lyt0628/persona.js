function name(params) {
  console.log("Hello");
}
function collapse() {
  let collapseElems = document.querySelector('.collapse');
  for (elem in collapseElems) {
    elem.style.hide = true;
  }
}