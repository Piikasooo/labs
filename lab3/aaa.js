function animateText(textArea) {
      var text = textArea.value;
      var to = text.length,
        from = 0;

      animate({
        duration: 20000,
        timing: bounce,
        draw: function(progress) {
          var result = (to - from) * progress + from;
          textArea.value = text.substr(0, Math.ceil(result))
        }
      });
    }


    function bounce(timeFraction) {
      for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }
	
  $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "red",
          color: "red",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "red",
          color: "red",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
	
	
