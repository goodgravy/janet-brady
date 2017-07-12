document.addEventListener('DOMContentLoaded', function() {
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    gutter: 11,
    columnWidth: '.grid-sizer',
  });

  $(".jcb-fancybox").fancybox({
    beforeShow: function() {
        var alt = this.element.find('img').attr('alt');

        this.inner.find('img').attr('alt', alt);

        this.title = alt;
    }
  });
});

