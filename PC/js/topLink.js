/**
 * Created by caojiaxing on 2017/1/14.
 */
var topLink = document.getElementById('topLink');
topLink.onclick = function () {
    var duration = 50,
        interval = 10,
        target = document.documentElement.scrollTop || document.body.scrollTop;
    var step = (target / duration) * interval;

    var timer = window.setInterval(function () {
        var curTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (curTop <= 0) {
            window.clearInterval(timer);
            return;
        }
        curTop -= step;
        document.documentElement.scrollTop = curTop;
        document.body.scrollTop = curTop;

    }, interval)
};