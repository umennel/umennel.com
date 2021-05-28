import './materialize'

document.addEventListener('DOMContentLoaded', function() {
  M.Sidenav.init(document.querySelectorAll('.sidenav'));
  M.Parallax.init(document.querySelectorAll('.parallax'));
});

window.onscroll = function() {
  document.getElementById("navbar").style.background =
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "#212121" : "none";
}
