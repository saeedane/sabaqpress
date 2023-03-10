 /**
 * ----------------------------------------------
 * Layout mode (dark or light)
 * ----------------------------------------------
 */

// Delete cookie
function deleteCookie(key, path, domain) {
    document.cookie = key +
        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
        (domain ? "; domain=" + domain : "") +
        (path ? "; path=" + path : "");
}

// Set cookie
function setCookie(name, value, expiry = 60 * 24 * 60 * 60 * 1000) {
    let date = new Date();
    date.setTime(date.getTime() + expiry);
    let expires = "; expires=" + date.toUTCString();
    document.cookie = name + '=' + value + expires + "; path=/";
}

jQuery(window).scroll(function() {
    var $height = jQuery(window).scrollTop();
  if($height > 5) {
        jQuery('.header-wrapper').addClass('sticky');
        jQuery('.shart-contianer').addClass('sticky');

    } else {
        jQuery('.header-wrapper').removeClass('sticky');
        jQuery('.shart-contianer').removeClass('sticky');

    }


    if(jQuery(".header-wrapper").hasClass("sticky") || jQuery(".shart-contianer").hasClass("sticky") ){
        jQuery('.menuNews').addClass('d-none');
        jQuery('.shart-contianer').addClass('d-none');

    }else{
         jQuery('.menuNews').removeClass('d-none');
         jQuery('.shart-contianer').removeClass('d-none');

    }



});


  jQuery(".footerWidgetColum .titleWidget").click(function () {
        jQuery(this).parent().toggleClass("active");
    });


   jQuery(".menu_bar").click(function(){
    jQuery('input[name="s"]').val("");
    jQuery(".menu_side").addClass("active");
    jQuery("body").addClass("oveflow");
  });

  

  jQuery(".search_icon").click(function(){
    jQuery('input[name="s"]').val("الحدث");
    jQuery(".menu_side").addClass("active");

  });

  

  jQuery(".close_menu").click(function(){
    jQuery(".menu_side").removeClass("active");
    jQuery("body").removeClass("oveflow");
  });

  jQuery(".close_news").click(function(){
    jQuery(this).parent(".menu_side").fadeOut();

  });


  
  jQuery('.list--ticker').on('mouseenter',()=>{
    jQuery(this).find('li').addClass('danger');

  });
 
  jQuery('.list--ticker').on('mouseleave',()=>{
   jQuery(this).find('li').addClass('info');
 });


/*
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  alert('mobile welcome ');
}

*/

 let body = jQuery('body');

     jQuery(".dropdown-item").click(function (e) {
              jQuery('.dropdown-item').removeClass("active");
              jQuery(this).addClass("active");


              // Dark mode
    if (body.hasClass('dark-mode')) {
        body.removeClass('dark-mode');
        
        deleteCookie('__dark-mode', '/');
    } else { // Light mode
        body.addClass('dark-mode');

        setCookie('__dark-mode', 'DARK');
    }


         e.stopImmediatePropagation();
    return false;
    });
    
    jQuery(".switch__dark").click(function (e) {
    
    
              // Dark mode
    if (body.hasClass('dark-mode')) {
        body.removeClass('dark-mode');
        
        deleteCookie('__dark-mode', '/');
    } else { // Light mode
        body.addClass('dark-mode');

        setCookie('__dark-mode', 'DARK');
    }
    
    e.stopImmediatePropagation();
    return false;
    });
    
     jQuery(".close_news").click(function () {
        jQuery(this).parent(".newsConten").addClass("d-none");
        setCookie('__close-breaking', 'NEWS',60 * 60 * 6 * 1000);

    });

 jQuery(".header__close").click(function () {
        jQuery(".slide-top").addClass("d-none");

});

     jQuery("#saveData").click(function (e) {

     

        
        let ajax_request = new XMLHttpRequest(),
         email = jQuery('#userEmail'),
        username =  jQuery('#userUsername'),
        password =    jQuery('#userPassword');
        message =    jQuery('#message__success');



       var formData = new FormData();
        formData.append("action", "user_register");
        formData.append("email", email.val());
        formData.append("username", username.val());
        formData.append("password", password.val());



    
 

       if(username == ''){
        alert('حقل اسم مستخدم مطلوب ');

      }else if(email == '' ){
        alert('حقل البريد الالكتروني مطلوب');

      } else if(password == ''){
        alert('حقل كلمة سر مطلوبة ');

      }


      else{

           ajax_request.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {

            if (this.responseText === 'Error') {
                // Do nothing
            } else {
                jQuery('#message__success').removeClass('d-none');
                t = setTimeout('fade_message()', 1000);
                username.val(null);
                password.val(null);
                email.val(null);



            }
        }
    }
           ajax_request.open('POST', frontendajax.ajaxurl, true);
        ajax_request.send(formData);   
      }

   
    
      
    
    e.stopImmediatePropagation();
    return false;
    
    });  

// show slide news left 
jQuery(window).scroll(function() {
    var jQueryheight = jQuery(window).scrollTop();
  if(jQueryheight > 2300) {
        console.log("show");
        jQuery(".slide-top").addClass("active");
    } else {
        jQuery(".slide-top").removeClass("active");
    }


});


// share article facbook and twitter 

(function () {
  var t = function (t, e, a, n) {
      var r = a || 640,
          o = n || 320,
          i = window.screenLeft || window.screenX,
          c = window.screenTop || window.screenY,
          s = i + (window.innerWidth || document.documentElement.clientWidth) / 2 - r / 2,
          d = c + (window.innerHeight || document.documentElement.clientHeight) / 2 - o / 2;
      return window.open(t, e, "scrollbars=yes, width=" + r + ", height=" + o + ", top=" + d + ", left=" + s).focus(), !0;
  };
  jQuery(".share_twitter").on("click", function (e) {
      e.preventDefault();
      var a = this.getAttribute("data-url"),
          n = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) + "&via=TadamsaNews&url=" + encodeURIComponent(a);
      t(n, "Partager sur Twitter");
  }),
  jQuery(".share_facebook").on("click", function (e) {
          e.preventDefault();
          var a = this.getAttribute("data-url"),
              n = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(a);
          t(n, "Partager sur facebook");
      });
})();


function fade_message() {
            jQuery('#message__success').fadeOut(function() {
                jQuery('#message__success').addClass('d-none');
            });
            clearTimeout(t);
        }

