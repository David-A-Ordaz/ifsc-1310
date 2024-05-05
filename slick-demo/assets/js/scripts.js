/*<!-- Add before closing body tag before local JS -->

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@accessible360/accessible-slick@1.0.1/slick/slick.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.21.0/prism.min.js"></script>
Alternate Configuation Options Here - https://accessible360.github.io/accessible-slick/#demos -->*/

$(document).ready(function() {
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });
});
