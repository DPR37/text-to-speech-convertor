var volume = 1; 
   var speed=1.0;
function speak(){
    var text = document.getElementById("input").value;
    var utter = new SpeechSynthesisUtterance(text);
    utter.volume = volume; 
    utter.rate=speed;
    window.speechSynthesis.speak(utter);
}

function increaseVolume() {
    if(volume==1)alert('max.volume');
    else if (volume < 1) {
        volume += 0.1; 
        if (volume > 1)volume=1; 
    }
}

function decreaseVolume() {
    if (volume > 0) {
        volume -= 0.1; 
        if (volume < 0) volume = 0; 
    }
}
function increaseSpeed() {
            speed += 0.1; 
        }

        function decreaseSpeed() {
            speed -= 0.1; 
        }