window.onscroll = function() {scrollFunction()};

document.addEventListener('DOMContentLoaded', () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-156100338-2');

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('m-fadeIn');
            });
        });
    }
});

function scrollFunction() {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
                el.classList.remove('is-active');
        });
    };
    document.getElementById("appMenuHeader").classList.remove("m-fadeIn");
  } else {
    document.getElementById("navbar").style.top = "-100px";
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
                el.classList.remove('is-active');
        });
    };
    document.getElementById("appMenu").classList.remove("m-fadeIn");
  }
}