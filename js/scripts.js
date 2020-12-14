const toggle = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-links');
const toggleProfileLinks = document.querySelector('.hamburger-two');
const leftContent = document.querySelector('.left-content');

toggle.addEventListener('click', () => {
  mobileNav.classList.toggle('show-nav');
})
toggleProfileLinks.addEventListener('click', () => {
  leftContent.classList.toggle('show-profileLinks');
})

function myCloseBar(closeNav) {
  closeNav.classList.toggle("change");
}

$(function () {

  $('.dropdown > .caption').on('click', function () {
    $(this).parent().toggleClass('open');
  });

  $('.dropdown > .list > .item').on('click', function () {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($(this).text());
  });

  $(document).on('keyup', function (evt) {
    if ((evt.keyCode || evt.which) === 27) {
      $('.dropdown').removeClass('open');
    }
  });

  $(document).on('click', function (evt) {
    if ($(evt.target).closest(".dropdown > .caption").length === 0) {
      $('.dropdown').removeClass('open');
    }
  });

});


jQuery(document).ready(function () {
  jQuery('#datepicker').datepicker({
    format: 'dd-mm-yyyy',
    startDate: '+1d'
  });
});




(function ($) {
	$(document).ready(function () {
	  removeClass()
	  uploadImage()
	  
	  function removeClass() {
		$('body').on('click', function () { 
		  $('.select-option').removeClass('active')   
		})                  
	  }
	  
	  function uploadImage() {
		var button = $('.images .pic')
		var uploader = $('<input type="file" accept="image/*" />')
		var images = $('.images')
		
		button.on('click', function () {
		  uploader.click()
		})
		
		uploader.on('change', function () {
			var reader = new FileReader()
			reader.onload = function(event) {
			  images.prepend('<div class="img" style="background-image: url(\'' + event.target.result + '\');" rel="'+ event.target.result  +'"><span>remove</span></div>')
			}
			reader.readAsDataURL(uploader[0].files[0])
	
		 })
		
		images.on('click', '.img', function () {
		  $(this).remove()
		})
	  
	  }
	
	})
  })(jQuery)


   $("input[name=time]").clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            default: 'now',
            donetext: "Select",
            init: function () {
                console.log("colorpicker initiated");
            },
            beforeShow: function () {
                console.log("before show");
            },
            afterShow: function () {
                console.log("after show");
            },
            beforeHide: function () {
                console.log("before hide");
            },
            afterHide: function () {
                console.log("after hide");
            },
            beforeHourSelect: function () {
                console.log("before hour selected");
            },
            afterHourSelect: function () {
                console.log("after hour selected");
            },
            beforeDone: function () {
                console.log("before done");
            },
            afterDone: function () {
                console.log("after done");
            }
        });