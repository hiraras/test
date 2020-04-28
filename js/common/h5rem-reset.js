!function(a) {
    var c, d, e,
        f = document.documentElement,
        g = document.querySelector('meta[name="viewport"]'),
        h = document.createElement("style");
    if (g) {
        console.warn("\u5c06\u6839\u636e\u5df2\u6709\u7684meta\u6807\u7b7e\u6765\u8bbe\u7f6e\u7f29\u653e\u6bd4\u4f8b");
        var i = g.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        i && (d = parseFloat(i[2]), c = 1 / d)
    }

    if (!c && !d) {
        var c = a.devicePixelRatio || 1;
        d = 1 / c
    }
    if (f.setAttribute("data-dpr", c), !g) {
        if (g = document.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "target-densitydpi=device-dpi,user-scalable=no,initial-scale=" + d + ",maximum-scale=" + d + ", minimum-scale=" + d), f.firstElementChild) f.firstElementChild.appendChild(g), f.firstElementChild.appendChild(h); else {
            var j = document.createElement("div");
            j.appendChild(g), document.write(j.innerHTML)
        }
        980 == f.clientWidth && g.setAttribute("content", "target-densitydpi=device-dpi,width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1")
    }
}(window);

(function(doc, win) {
    var docEl = doc.documentElement;
    resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize';
    recalc = function(){
        var clientWidth = docEl.clientWidth;
        console.log(clientWidth);
        if(!clientWidth) return;
        docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';

    };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);