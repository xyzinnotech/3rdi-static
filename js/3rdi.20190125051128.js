(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js123').attr('src', (dpi>1) ? 'images/icons8-project-120.png' : 'images/icons8-project-60.png');
$('.js124').attr('src', (dpi>1) ? 'images/icons8-states-120.png' : 'images/icons8-states-60.png');
$('.js125').attr('src', (dpi>1) ? 'images/icons8-3d_scale-180.png' : 'images/icons8-3d_scale-90.png');
$('.js126').attr('src', (dpi>1) ? 'images/icons8-graph-134.png' : 'images/icons8-graph-67.png');
$('.js127').attr('src', (dpi>1) ? 'images/icons8-activity_grid-134.png' : 'images/icons8-activity_grid-67.png');
$('.js128').attr('src', (dpi>1) ? 'images/icons8-workflow-134.png' : 'images/icons8-workflow-67.png');
$('.js129').attr('src', (dpi>1) ? 'images/icons8-overtime-134.png' : 'images/icons8-overtime-67.png');
$('.js130').attr('src', (dpi>1) ? 'images/icons8-settings3-136.png' : 'images/icons8-settings3-68.png');
$('.js131').attr('src', (dpi>1) ? 'images/icons8-odometer_filled-136.png' : 'images/icons8-odometer_filled-68.png');
$('.js132').attr('src', (dpi>1) ? 'images/pasted-image-432.png' : 'images/pasted-image-216-1.png');}else if($(window).width()>=960){$('.js123').attr('src', (dpi>1) ? 'images/icons8-project-96.png' : 'images/icons8-project-48.png');
$('.js124').attr('src', (dpi>1) ? 'images/icons8-states-96.png' : 'images/icons8-states-48.png');
$('.js125').attr('src', (dpi>1) ? 'images/icons8-3d_scale-144-1.png' : 'images/icons8-3d_scale-72-1.png');
$('.js126').attr('src', (dpi>1) ? 'images/icons8-graph-108.png' : 'images/icons8-graph-54.png');
$('.js127').attr('src', (dpi>1) ? 'images/icons8-activity_grid-108.png' : 'images/icons8-activity_grid-54.png');
$('.js128').attr('src', (dpi>1) ? 'images/icons8-workflow-108.png' : 'images/icons8-workflow-54.png');
$('.js129').attr('src', (dpi>1) ? 'images/icons8-overtime-108.png' : 'images/icons8-overtime-54.png');
$('.js130').attr('src', (dpi>1) ? 'images/icons8-settings3-108.png' : 'images/icons8-settings3-54.png');
$('.js131').attr('src', (dpi>1) ? 'images/icons8-odometer_filled-108.png' : 'images/icons8-odometer_filled-54.png');
$('.js132').attr('src', (dpi>1) ? 'images/pasted-image-346.png' : 'images/pasted-image-173.png');}else if($(window).width()>=768){$('.js123').attr('src', (dpi>1) ? 'images/icons8-project-78.png' : 'images/icons8-project-39.png');
$('.js124').attr('src', (dpi>1) ? 'images/icons8-states-78.png' : 'images/icons8-states-39.png');
$('.js125').attr('src', (dpi>1) ? 'images/icons8-3d_scale-114.png' : 'images/icons8-3d_scale-57.png');
$('.js126').attr('src', (dpi>1) ? 'images/icons8-graph-88.png' : 'images/icons8-graph-44.png');
$('.js127').attr('src', (dpi>1) ? 'images/icons8-activity_grid-88.png' : 'images/icons8-activity_grid-44.png');
$('.js128').attr('src', (dpi>1) ? 'images/icons8-workflow-88.png' : 'images/icons8-workflow-44.png');
$('.js129').attr('src', (dpi>1) ? 'images/icons8-overtime-86.png' : 'images/icons8-overtime-43.png');
$('.js130').attr('src', (dpi>1) ? 'images/icons8-settings3-86.png' : 'images/icons8-settings3-43.png');
$('.js131').attr('src', (dpi>1) ? 'images/icons8-odometer_filled-86.png' : 'images/icons8-odometer_filled-43.png');
$('.js132').attr('src', (dpi>1) ? 'images/pasted-image-276.png' : 'images/pasted-image-138.png');}else if($(window).width()>=480){$('.js123').attr('src', (dpi>1) ? 'images/icons8-project-84.png' : 'images/icons8-project-42-1.png');
$('.js124').attr('src', (dpi>1) ? 'images/icons8-states-84.png' : 'images/icons8-states-42.png');
$('.js125').attr('src', (dpi>1) ? 'images/icons8-3d_scale-84-1.png' : 'images/icons8-3d_scale-42-2.png');
$('.js126').attr('src', (dpi>1) ? 'images/icons8-graph-86.png' : 'images/icons8-graph-43.png');
$('.js127').attr('src', (dpi>1) ? 'images/icons8-activity_grid-86.png' : 'images/icons8-activity_grid-43.png');
$('.js128').attr('src', (dpi>1) ? 'images/icons8-workflow-86.png' : 'images/icons8-workflow-43.png');
$('.js129').attr('src', (dpi>1) ? 'images/icons8-overtime-86.png' : 'images/icons8-overtime-43.png');
$('.js130').attr('src', (dpi>1) ? 'images/icons8-settings3-86.png' : 'images/icons8-settings3-43.png');
$('.js131').attr('src', (dpi>1) ? 'images/icons8-odometer_filled-86.png' : 'images/icons8-odometer_filled-43.png');
$('.js132').attr('src', (dpi>1) ? 'images/pasted-image-176.png' : 'images/pasted-image-88.png');}else{$('.js123').attr('src', (dpi>1) ? 'images/icons8-project-56.png' : 'images/icons8-project-28.png');
$('.js124').attr('src', (dpi>1) ? 'images/icons8-states-56.png' : 'images/icons8-states-28.png');
$('.js125').attr('src', (dpi>1) ? 'images/icons8-3d_scale-56.png' : 'images/icons8-3d_scale-28.png');
$('.js126').attr('src', (dpi>1) ? 'images/icons8-graph-58.png' : 'images/icons8-graph-29.png');
$('.js127').attr('src', (dpi>1) ? 'images/icons8-activity_grid-58.png' : 'images/icons8-activity_grid-29.png');
$('.js128').attr('src', (dpi>1) ? 'images/icons8-workflow-58.png' : 'images/icons8-workflow-29.png');
$('.js129').attr('src', (dpi>1) ? 'images/icons8-overtime-58.png' : 'images/icons8-overtime-29.png');
$('.js130').attr('src', (dpi>1) ? 'images/icons8-settings3-58.png' : 'images/icons8-settings3-29.png');
$('.js131').attr('src', (dpi>1) ? 'images/icons8-odometer_filled-58.png' : 'images/icons8-odometer_filled-29.png');
$('.js132').attr('src', (dpi>1) ? 'images/pasted-image-118-2.png' : 'images/pasted-image-59-2.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();setTimeout(function(){$('.js133').prop('disabled',false);$("input[name='gvfjogexy']").attr('value', 'rhjpdbeiaflqmv');},1000);
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
initMenu($('#m3')[0]);
$('.c90').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js121')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js122')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});