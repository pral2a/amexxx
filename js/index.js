/* Raster effect & password check */
var hello = document.querySelector('.intro');
var code = document.querySelector('.code');
var enter = document.querySelector('.enter');

code.addEventListener('click', function(){
	this.textContent = "";
	this.classList.remove('error');	
});

enter.addEventListener('click', checkCode);

code.addEventListener('keypress', function(evt) {
    if (evt.which === 13) {
    	code.classList.remove('error');
        evt.preventDefault();
    }
});

document.addEventListener('keypress', function(evt) {
	code.classList.remove('error');
    if (evt.which === 13) {
        checkCode();
    }
});

function checkCode() {
	var inputFromForm = code.textContent;
	console.log(inputFromForm);
	if((inputFromForm >= 771782 - 100 && inputFromForm <= 771782) || inputFromForm == 'MDSKPR') {
	  code.textContent = "♥♥♥♥♥♥";
	  hello.classList.add('out');
	} else {
	  code.classList.add('error');
	}
}

/* Audio player */
$(document).ready(function() {
  var $player = $('.audio');

  $player.each(function(index) {
    var $audio = $(this).find('audio'),
        audio = $audio[0],
        $playPauseButton = $(this).find('.play'),
        $stopButton = $(this).find('.stop');

    $playPauseButton.on('click', function() {
      if (audio.paused) {
        $player.trigger('stop_all');
        audio.play();
      } else {
        audio.pause();
      }
    });

    $stopButton.on('click', function() {
      audio.pause();
      audio.currentTime = 0;
      $playPauseButton.text('PLAY');
    });

    $player.on('stop_all', function() {
      audio.pause();
    });
    
    $audio.bind('pause', function() {
      $playPauseButton.text('PLAY');
    });

    $audio.bind('play', function() {
      $playPauseButton.text('PAUSE');
    });
    
    $audio.bind('ended', function() {
      $playPauseButton.text('PLAY');
    });
  });
});
