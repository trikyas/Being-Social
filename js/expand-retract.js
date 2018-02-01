var loopTimer = 0;

function expand(element) {
  clearInterval(loopTimer);
  loopTimer = setInterval('expandA(\''+element+'\')',8);
}

function expandA(element){
    var target = document.getElementById(element);
    var h = target.offsetHeight;
    var sh = target.scrollHeight;
    if(h < sh){
        h += 5;
    } else {
        clearInterval(loopTimer);
    }
    target.style.height = h+"px";
}

function retract(element) {
  clearInterval(loopTimer);
  loopTimer = setInterval('retractA(\''+element+'\')',8);
}

function retractA(element){
    var target = document.getElementById(element);
    var h = target.offsetHeight;
    if(h > 0){
        h -= 5;
    } else {
        target.style.height = "0px";
        clearInterval(loopTimer);
    }
    target.style.height = h+"px";
}
