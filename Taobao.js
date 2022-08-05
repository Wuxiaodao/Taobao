var wrap = document.querySelector(".wraper");
var nextBtn = document.querySelector(".arrow_right");
var preBtn = document.querySelector(".arrow_left");
var container = document.querySelector(".container");
var button = document.querySelector(".button");
var dot = button.getElementsByTagName("span")
var index = 0
nextBtn.onclick = function() {
    next_pic();
}
preBtn.onclick = function() {
    prev_pic();

}

function next_pic() {
    var newLeft
    if (wrap.style.left === "-2400px") {
        newLeft = "0"
    } else {
        newLeft = parseInt(wrap.style.left) - 600;
    }
    wrap.style.left = newLeft + "px";
    index++;
    if (index > 4) {
        index = 0;
    }
    showDot()
}

function prev_pic() {
    var newLeft
    if (wrap.style.left === "0px") {
        newLeft = "-2400"
    } else {
        newLeft = parseInt(wrap.style.left) + 600;
    }
    wrap.style.left = newLeft + "px";
    index--;
    if (index < 0) {
        index = 4;
    }
    showDot()
}

// 自动翻页
var time = null;

function autoPlay() {
    time = setInterval(function() {
        next_pic();
    }, 3000)
}
autoPlay()

// 触碰时
container.onmouseenter = function() {
    clearInterval(time)
}
container.onmouseleave = function() {
    autoPlay()
}

//点击下方按钮
function showDot() {
    for (var i = 0; i < dot.length; i++) {
        dot[i].className = "btn-num"
    }
    dot[index].className = "btn-num on"
}
function clickDot(){
    for (var i = 0, len = dot.length; i < len; i++){
            (function(i){
                dot[i].onclick = function () {
                   var res=index-i;
                   wrap.style.left = (parseInt(wrap.style.left) +  res * 600)+"px";
                   index = i;
                   showDot();
                }
            })(i);            
        }
}

clickDot()