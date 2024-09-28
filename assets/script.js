(function ($) {
  'use strict';

  /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/
  $('.select').niceSelect();

  // Toggle mobile navigation
  function toggleMobileNavigation() {
    var navbar = $('.navigation-holder');
    var openBtn = $('.mobail-menu .open-btn');
    var xbutton = $('.mobail-menu .navbar-toggler');

    openBtn.on('click', function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass('slideInn');
      xbutton.toggleClass('x-close');
      return false;
    });
  }

  toggleMobileNavigation();

  // Function for toggle class for small menu
  function toggleClassForSmallNav() {
    var windowWidth = window.innerWidth;
    var mainNav = $('#navbar > ul');

    if (windowWidth <= 991) {
      mainNav.addClass('small-nav');
    } else {
      mainNav.removeClass('small-nav');
    }
  }

  toggleClassForSmallNav();

  // Function for small menu
  function smallNavFunctionality() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.navigation-holder');
    var smallNav = $('.navigation-holder > .small-nav');
    var subMenu = smallNav.find('.sub-menu');
    var megamenu = smallNav.find('.mega-menu');
    var menuItemWidthSubMenu = smallNav.find('.menu-item-has-children > a');

    if (windowWidth <= 991) {
      subMenu.hide();
      megamenu.hide();
      menuItemWidthSubMenu.on('click', function (e) {
        var $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
        $this.toggleClass('rotate');
      });
    } else if (windowWidth > 991) {
      mainNav.find('.sub-menu').show();
      mainNav.find('.mega-menu').show();
    }
  }

  smallNavFunctionality();

  // Function for toggle class for small menu
  function toggleClassForcatagoryNav() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.mini-shop-content > ul');

    if (windowWidth <= 991) {
      mainNav.addClass('mini-shop-item');
    } else {
      mainNav.removeClass('mini-shop-item');
    }
  }

  toggleClassForcatagoryNav();

  // Function for catagory menu
  function catagoryNavFunctionality() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.header-shop-item');
    var catagoryNav = $('.header-shop-item > .mini-shop-item');
    var menuItemWidthSubMenu = catagoryNav.find('.menu-item-has-children > a');

    if (windowWidth <= 991) {
      menuItemWidthSubMenu.on('click', function (e) {
        var $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
        $this.toggleClass('rotate');
      });
    } else if (windowWidth > 991) {
      mainNav.find('.sub-menu').show();
      mainNav.find('.mega-menu').show();
    }
  }

  catagoryNavFunctionality();

  $('body').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.open-btn').removeClass('x-close');
  });

  // toggle3
  $('#toggle3').on('click', function () {
    $('#open3').slideToggle();
    $('.caupon-wrap.s3').toggleClass('coupon-3');
  });

  //Setting project slider
  function heroSlider() {
    if ($('.slide-active').length) {
      $('.slide-active').slick({
        autoplay: false,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        arrows: true,
        dots: true,
        fade: true,
        cssEase: 'linear',
      });
    }
  }

  /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
  function preloader() {
    if ($('.preloader').length) {
      $('.preloader')
        .delay(100)
        .fadeOut(500, function () {
          //active wow
          wow.init();
        });
    }
  }

  /*------------------------------------------
            = Header search toggle
        -------------------------------------------*/
  if ($('.header-search-form-wrapper').length) {
    var searchToggleBtn = $('.search-toggle-btn');
    var searchToggleBtnIcon = $('.search-toggle-btn i');
    var searchContent = $('.header-search-form');
    var body = $('body');

    searchToggleBtn.on('click', function (e) {
      searchContent.toggleClass('header-search-content-toggle');
      searchToggleBtnIcon.toggleClass('fi flaticon-search fi ti-close');
      e.stopPropagation();
    });

    body
      .on('click', function () {
        searchContent.removeClass('header-search-content-toggle');
      })
      .find(searchContent)
      .on('click', function (e) {
        e.stopPropagation();
      });
  }

  /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
  if ($('.mini-cart').length) {
    var cartToggleBtn = $('.cart-toggle-btn');
    var cartContent = $('.mini-cart-content');
    var cartContent2 = $('.header-right');
    var cartCloseBtn = $('.mini-cart-close');
    var body = $('body');

    cartToggleBtn.on('click', function (e) {
      cartContent.toggleClass('mini-cart-content-toggle');
      cartContent2.toggleClass('active');
      e.stopPropagation();
    });

    cartCloseBtn.on('click', function (e) {
      cartContent.removeClass('mini-cart-content-toggle');
      cartContent2.removeClass('active');
      e.stopPropagation();
    });

    body
      .on('click', function () {
        cartContent.removeClass('mini-cart-content-toggle');
        cartContent2.removeClass('active');
      })
      .find(cartContent)
      .on('click', function (e) {
        e.stopPropagation();
      });
  }

  const header = document.querySelector('.site-header');
  const toggleClass = 'sticky-header';

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  });

  /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
  var wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
  if ($('.fancybox').length) {
    $('.fancybox').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      wrapCSS: 'project-fancybox-title-style',
    });
  }

  /*------------------------------------------
            = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /*-----------------------
       cart-plus-minus-button 
     -------------------------*/
  $('.cart-plus-minus').append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
  $('.qtybutton').on('click', function () {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.text() == '+') {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find('input').val(newVal);
  });

  // Single gallery slider
  function productGallary() {
    if ($('.product-active').length && $('.product-thumbnil-active').length) {
      var $sync1 = $('.product-active'),
        $sync2 = $('.product-thumbnil-active'),
        flag = false,
        duration = 500;

      $sync1
        .owlCarousel({
          items: 1,
          margin: 0,
          nav: true,
          navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
          dots: false,
        })
        .on('changed.owl.carousel', function (e) {
          if (!flag) {
            flag = true;
            $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
          }
        });

      $sync2
        .owlCarousel({
          margin: 10,
          items: 7,
          nav: false,
          dots: false,
          center: false,
          responsive: {
            0: {
              items: 2,
              autoWidth: false,
            },
            400: {
              items: 3,
              autoWidth: false,
            },
            500: {
              items: 3,
              center: false,
              autoWidth: false,
            },
            600: {
              items: 5,
              autoWidth: false,
            },
            1200: {
              items: 7,
              autoWidth: false,
            },
          },
        })
        .on('click', '.owl-item', function () {
          $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        })
        .on('changed.owl.carousel', function (e) {
          if (!flag) {
            flag = true;
            $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
          }
        });
    }
  }

  productGallary();

  /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
  $('body').append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

  function toggleBackToTopBtn() {
    var amountScrolled = 1000;
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  }

  $('.back-to-top').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on('load', function () {
    preloader();

    toggleMobileNavigation();

    smallNavFunctionality();

    toggleClassForcatagoryNav();

    heroSlider();
  });

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).on('scroll', function () {
    toggleBackToTopBtn();
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on('resize', function () {
    toggleClassForSmallNav();
    //smallNavFunctionality();
    catagoryNavFunctionality();
    clearTimeout($.data(this, 'resizeTimer'));
    $.data(
      this,
      'resizeTimer',
      setTimeout(function () {
        smallNavFunctionality();
      }, 200)
    );
  });
})(window.jQuery);

// Add to Cart functionality
$('.addToCart').on('click', function (e) {
  e.preventDefault();

  $('.addToCart').css('display', 'none');
  $('.loadingBtn').css('display', 'block');

  var productId = $('#variantId').val();
  var quantity = $('#quantity').val();

  $.ajax({
    type: 'POST',
    url: '/cart/add',
    dataType: 'json',
    data: {
      id: productId,
      quantity: quantity,
    },
    success: function (data) {
      console.log('Item added to cart:', data);
      // Update cart count
      fetch(window.Shopify.routes.root + 'cart.js')
        .then((response) => response.json())
        .then((cartData) => {
          $('.cartCount').text(cartData.item_count);
          console.log('Updated cart data:', cartData);
          var priceFloat = (cartData.items_subtotal_price / 100).toFixed(2);
          $('#subtotalAmount').text(priceFloat);
          updateCartDisplay(cartData);
        });
      $('.mini-cart-content').addClass('mini-cart-content-toggle');

      $('.addToCart').css('display', 'block');
      $('.loadingBtn').css('display', 'none');
    },
    error: function (error) {
      console.error('Error adding item to cart:', error);
    },
  });
});
// Slider product Add to Cart functionality
$('.sliderAddToCart').on('click', function (e) {
  e.preventDefault();

  $('.cartBtn').css('display', 'none');
  $('.loadingBtn').css('display', 'block');

  var productId = $(this).attr('data-itemid');
  console.log('Slider Add to Cart clicked', productId);
  $.ajax({
    type: 'POST',
    url: '/cart/add',
    dataType: 'json',
    data: {
      id: productId,
      quantity: 1,
    },
    success: function (data) {
      console.log('Item added to cart:', data);
      // Update cart count
      fetch(window.Shopify.routes.root + 'cart.js')
        .then((response) => response.json())
        .then((cartData) => {
          $('.cartCount').text(cartData.item_count);
          var priceFloat = (cartData.items_subtotal_price / 100).toFixed(2);
          $('#subtotalAmount').text(priceFloat);
          console.log('Updated cart data:', cartData);
          updateCartDisplay(cartData);
        });
      $('.mini-cart-content').addClass('mini-cart-content-toggle');

      $('.cartBtn').css('display', 'block');
      $('.loadingBtn').css('display', 'none');
    },
    error: function (error) {
      console.error('Error adding item to cart:', error);
    },
  });
});

// Remove from cart functionality
function removeCartItem(line) {
  var productId = $(this).attr('data-line');
  $.ajax({
    type: 'POST',
    url: '/cart/change',
    dataType: 'json',
    data: {
      line: line,
      quantity: 0,
    },
    success: function (data) {
      console.log('Item Remove to cart:', data);
      // Update cart count
      fetch(window.Shopify.routes.root + 'cart.js')
        .then((response) => response.json())
        .then((cartData) => {
          $('.cartCount').text(cartData.item_count);
          var priceFloat = (cartData.items_subtotal_price / 100).toFixed(2);
          $('#subtotalAmount').text(priceFloat);
          console.log('Updated cart data:', cartData);
          updateCartDisplay(cartData);
        });
      $('.mini-cart-content').addClass('mini-cart-content-toggle');
    },
    error: function (error) {
      console.error('Error adding item to cart:', error);
    },
  });
}

// Remove from cart functionality
function updateValue(line, quantity, type) {
  var qty = parseInt(quantity);
  if (type == 'inc') {
    qty = quantity + 1;
  }
  if (type == 'dec') {
    qty = quantity - 1;
  }
  console.log('Line:', line, 'Quantity:', qty);
  $.ajax({
    type: 'POST',
    url: '/cart/change',
    dataType: 'json',
    data: {
      line: line,
      quantity: qty,
    },
    success: function (data) {
      console.log('Item Remove to cart:', data);
      // Update cart count
      fetch(window.Shopify.routes.root + 'cart.js')
        .then((response) => response.json())
        .then((cartData) => {
          $('.cartCount').text(cartData.item_count);
          var priceFloat = (cartData.items_subtotal_price / 100).toFixed(2);
          $('#subtotalAmount').text(priceFloat);
          console.log('Updated cart data:', cartData);
          updateCartDisplay(cartData);
        });
      $('.mini-cart-content').addClass('mini-cart-content-toggle');
    },
    error: function (error) {
      console.error('Error adding item to cart:', error);
    },
  });
}

//Add To Checkout
$('.buyCheckout').on('click', function (e) {
  e.preventDefault();
  var productId = $('#variantId').val();
  var quantity = $('#quantity').val();
  $.ajax({
    type: 'POST',
    url: '/cart/add',
    dataType: 'json',
    data: {
      id: productId,
      quantity: quantity,
    },
    success: function (data) {
      var current_url = '/checkout';
      window.location.href = current_url;
    },
  });
});

// Function to update cart display
function updateCartDisplay(cartData) {
  var cartContainer = document.getElementById('mini-cart');
  cartContainer.innerHTML = ''; // Clear existing content

  cartData.items.forEach((item, index) => {
    const itemHTML = createCartItemHTML(item, index);
    cartContainer.insertAdjacentHTML('beforeend', itemHTML);
  });
}

function createCartItemHTML(item, index) {
  return `
    <div class="mini-cart-item clearfix">
      <div class="mini-cart-item-image">
        <a href="${item.url}">
          <img
            src="${item.featured_image.url}"
            alt="${item.featured_image.alt ? item.featured_image.alt : ''}"
            width="300"
            height="auto"
          >
        </a>
      </div>
      <div class="mini-cart-item-des">
        <div class="mini-cart-item-des-top">
          <h4>
            <a href="${item.url}">${item.title}</a>
          </h4>
          <ul class="product-text-sub">
            <li>${item.variant_title ? item.variant_title : 'Black'}</li>
          </ul>
        </div>
        <span class="price">${(item.price / 100).toFixed(2)}</span>
      </div>
      <div class="pro-single-btn">
        <div class="quantity cart-plus-minus">
          <input type="text" value="${item.quantity}">
          <div class="dec qtybutton" onclick="updateValue(${index + 1}, ${item.quantity}, 'dec')">-</div>
          <div class="inc qtybutton" onclick="updateValue(${index + 1}, ${item.quantity}, 'inc')">+</div>
        </div>
        <a href="#" class="dlt-btn" onclick="removeCartItem(${index + 1})">
          <i class="ti-trash"></i>
        </a>
      </div>
    </div>
  `;
}

//Ajax Search Result
$(document).ready(function () {
  $('#search-box').keyup(function () {
    console.log('searching...');
    const search_result = $('.search-lists-loop');
    const query = document.querySelector('input').value;
    const searchSection = $('.search-suggest');
    var ajax_spiner = $('.search-loading');

    if (query != '') {
      $.ajax({
        url: '/search/suggest.json?q=' + query + '&resources[type]=product',
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
          ajax_spiner.show();
        },
      }).done(function (data) {
        if (data.resources.results.products != null) {
          searchSection.css({
            visibility: 'visible',
            opacity: 1,
          });
          $(search_result).empty();
          data.resources.results.products.forEach(function (product) {
            console.log(product);
            searchSection.show();
            var html = '<a class="product" href="' + product.url + '">';
            html += '<span><img src="' + product['image'] + '" alt=""></span>';
            html += '<small>' + product.title + '</small>';
            html += ' </a>';
            ajax_spiner.hide();
            $(search_result).append(html);
          });
        } else {
          searchSection.hide();
          $(search_result).empty();
          $(search_result).append('<li>No Data Found</li>');
        }
      });
    } else {
      searchSection.hide();
      $(search_result).empty();
      $(search_result).append('<li>No Data Found</li>');
    }
    $(search_result).empty();
  });
});
