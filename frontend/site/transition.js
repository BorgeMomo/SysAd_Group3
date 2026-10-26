(function () {
  // Page transition: fade out, then follow the link
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a.btn[href], a.button[href]");
    if (!a || a.target === "_blank" || e.button !== 0 ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(function () { location.href = a.href; }, 350);
  });
  // Coming back with the browser's Back button: undo the fade-out
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) document.body.classList.remove("leaving");
  });
})();