$(document).ready(function() {
    // عند تمرير الصفحة
    $(window).scroll(function() {
      // إذا تم تجاوز ارتفاع الشريط العلوي (navbar) بمقدار 50 بكسل
      if ($(this).scrollTop() > 50) {
        // قم بإضافة الصفة "fixed" إلى عنصر الـ navbar
        $('.navbar').addClass('fixed');
      } else {
        // إزالة الصفة "fixed" من عنصر الـ navbar
        $('.navbar').removeClass('fixed');
      }
    });
  });