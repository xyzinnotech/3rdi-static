(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js422').attr('src', (dpi>1) ? 'images/pasted-image-432.png' : 'images/pasted-image-216-1.png');}else if($(window).width()>=960){$('.js422').attr('src', (dpi>1) ? 'images/pasted-image-346.png' : 'images/pasted-image-173.png');}else if($(window).width()>=768){$('.js422').attr('src', (dpi>1) ? 'images/pasted-image-276.png' : 'images/pasted-image-138.png');}else if($(window).width()>=480){$('.js422').attr('src', (dpi>1) ? 'images/pasted-image-176.png' : 'images/pasted-image-88.png');}else{$('.js422').attr('src', (dpi>1) ? 'images/pasted-image-118-2.png' : 'images/pasted-image-59-2.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();setTimeout(function(){$('.js423').prop('disabled',false);$("input[name='gvfjogexy']").attr('value', 'rhjpdbeiaflqmv');},1000);
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
initMenu($('#m3')[0]);
$('.c197').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js421')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});