var bannerImg = document.getElementById('bannerImg');
var imgs = bannerImg.getElementsByTagName('img');
var bannerBoxUl = document.getElementById('bannerBoxUl');
var lis = bannerBoxUl.getElementsByTagName('li');


var timer = window.setInterval(autoMove, 2000);
var step = 0;

for(var i = 0;i < imgs.length;i++){
    if(i === 0){
        utils.css(imgs[i].parentNode,'zIndex',10);
        utils.css(imgs[i].parentNode,'opacity',1);
    }
}
function autoMove() {
    step++;
    if (step === imgs.length) {
        step = 0;
    }
    setImg();
}

function setImg() {
    for (var i = 0; i < imgs.length; i++) {
        var curImg = imgs[i];
        if (i === step) {
            utils.css(curImg.parentNode, 'zIndex', 1);
            animate(curImg.parentNode,{opacity:1},300,function () {
var siblings = utils.siblings(this);
                for(var i = 0; i < siblings.length;i++){
                    utils.css(siblings[i],'opacity',0)
                }
            })
        }else{
            utils.css(curImg.parentNode,'zIndex',0)
        }
    }
   for (var i = 0;i < lis.length;i++){
lis[i].className = i === step ? 'selected' : null;
   }
}

banner.onmouseover = function () {
    window.clearInterval(timer);
};

banner.onmouseout = function () {
    timer = window.setInterval(autoMove,2000);
};

(function () {
    for(var i = 0;i < lis.length;i++){
        var curLi = lis[i];
        curLi.index = i;
        curLi.onmouseover = function () {
            step = this.index;
            setImg();
        }
    }
})();