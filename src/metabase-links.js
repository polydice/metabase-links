(function(){
  NodeList.prototype.forEach = Array.prototype.forEach;
  document.querySelectorAll('span.cellData').forEach(function(el) {
    el.innerHTML = el.innerText.autoLink({ target: "_blank" });
  });
})();
