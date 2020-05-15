jQuery(document).ready(function() {

    jQuery('.box-menu a').on('click', function(e) {
      var currentAttrValue = jQuery(this).attr('href');
  
      jQuery('.tab-content ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
      jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
  
      e.preventDefault();
    });
  
    jQuery('#close').click(function(o) {
      jQuery('#modal-1').addClass('outAnimation');
      jQuery('#modal-1').removeClass('inAnimation');
      jQuery('.box-menu ul li:nth(3)').removeClass('active');
      jQuery('.openit').delay(500).fadeIn();
    });
  
    jQuery('.openit').click(function(i) {
      jQuery('#modal-1').addClass('inAnimation');
      jQuery('#modal-1').removeClass('outAnimation');
      jQuery('.box-menu ul li:first-child').addClass('active');
      jQuery('.box').hide();
      jQuery('.box#start').show();
      jQuery('.openit').fadeOut(200);
    });
  });