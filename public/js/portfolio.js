requirejs.config({
  baseURL: './public/js'
});

define (["jquery", "isotope.pkgd.min", "matches-selector", "index"], function($, Isotope, matchesSelector) {
  "use strict";

    var Portfolio = {
            init: function () {
                this.isotopePortfolio ();
            },
            isotopePortfolio: function () {
                var iso = new Isotope('.grid', {
                    itemSelector: '.grid-item',
                    layoutMode: 'masonry',
                    resize: true,
                    masonry: {
                        columnWidth: 220,
                        gutter: 40
                    },
                    transitionDuration: '0.8s',
                    // only opacity for reveal/hide transition
                    hiddenStyle: {
                        opacity: 0
                    },
                    visibleStyle: {
                        opacity: 1
                    }
                });
                // bind filter button click
                var filtersElem = document.querySelector('.filters-button-group');
                filtersElem.addEventListener( 'click', function (event) {
                    // only work with buttons
                    if (!matchesSelector(event.target, 'button')) {
                        return;
                    }
                    var filterValue = event.target.getAttribute ('data-filter');
                    iso.arrange({filter: filterValue});
                });
                // change is-checked class on buttons
                var buttonGroups = document.querySelectorAll ('.button-group');
                for (var i=0, len = buttonGroups.length; i < len; i++) {
                    var buttonGroup = buttonGroups[i];
                    radioButtonGroup(buttonGroup);
                }
                function radioButtonGroup (buttonGroup) {
                    buttonGroup.addEventListener('click', function (event) {
                        // only work with buttons
                        if (!matchesSelector(event.target, 'button')) {
                            return;
                        }
                        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
                        event.target.classList.add('is-checked');
                        window.location.hash="#"+buttonGroup.querySelector('.is-checked').getAttribute('data-filter').replace('.', '');
                    });
                }
            }
        };



  var NextPages={
    init: function(){
      this.pagination();
    },
    pagination: function(){
      $('.pagination').each( function( i, pageNext ) {
        var $pageNext = $( pageNext );
        $pageNext.on( 'click', 'a', function() {
          $pageNext.find('.checked').removeClass('checked');
          $( this ).addClass('checked');
        });
      });
    }
  };

  Portfolio.init();
  NextPages.init();
});