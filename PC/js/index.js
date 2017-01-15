/*回到顶部*/




window.onscroll = function () {
    var curTop = document.documentElement.scrollTop || document.body.scrollTop;
    var curHeight = document.documentElement.clientHeight || document.body.clientHeight;
    topLink.style.display = curTop > curHeight ? "block" : "none";
};


/*banner浮层*/
(function () {
    window.onscroll = function () {
        var top = document.getElementById('top');
        var bannerFloat = document.getElementById('bannerFloat');
        var curTop2 = document.documentElement.scrollTop || document.body.scrollTop;
        top.style.display = curTop2 > 580 ? "block" : "none";
        bannerFloat.style.display = curTop2 > 580 ? "block" : "none";
    }

})();
