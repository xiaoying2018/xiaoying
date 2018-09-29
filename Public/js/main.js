(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}var b=new Error("Cannot find module '"+a+"'");
throw b.code="MODULE_NOT_FOUND",b}var f=j[a]={exports:{}};h[a][0].call(f.exports,function(g){var n=h[a][1][g];
return m(n?n:g)},f,f.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(n,m,i){var l=n("./ac-browser/BrowserData");
var j=/applewebkit/i;var k=n("./ac-browser/IE");var o=l.create();o.isWebKit=function(b){var a=b||window.navigator.userAgent;
return a?!!j.test(a):false};o.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(o.name==="IE"){o.IE={documentMode:k.getDocumentMode()}}m.exports=o},{"./ac-browser/BrowserData":2,"./ac-browser/IE":3}],2:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.filter");
g("@marcom/ac-polyfills/Array/prototype.some");var j=g("./data");function i(){}i.prototype={__getBrowserVersion:function(c,b){var d;
if(!c||!b){return}var a=j.browser.filter(function(f){return f.identity===b});a.some(function(f){var o=f.versionSearch||b;
var n=c.indexOf(o);if(n>-1){d=parseFloat(c.substring(n+o.length+1));return true
}});return d},__getName:function(a){return this.__getIdentityStringFromArray(a)
},__getIdentity:function(a){if(a.string){return this.__matchSubString(a)}else{if(a.prop){return a.identity
}}},__getIdentityStringFromArray:function(d){for(var a=0,c=d.length,b;a<c;a++){b=this.__getIdentity(d[a]);
if(b){return b}}},__getOS:function(a){return this.__getIdentityStringFromArray(a)
},__getOSVersion:function(d,a){if(!d||!a){return}var b=j.os.filter(function(l){return l.identity===a
})[0];var m=b.versionSearch||a;var c=new RegExp(m+" ([\\d_\\.]+)","i");var f=d.match(c);
if(f!==null){return f[1].replace(/_/g,".")}},__matchSubString:function(b){var c=b.subString;
if(c){var a=c.test?!!c.test(b.string):b.string.indexOf(c)>-1;if(a){return b.identity
}}}};i.create=function(){var b=new i();var a={};a.name=b.__getName(j.browser);a.version=b.__getBrowserVersion(j.versionString,a.name);
a.os=b.__getOS(j.os);a.osVersion=b.__getOSVersion(j.versionString,a.os);return a
};k.exports=i},{"./data":4,"@marcom/ac-polyfills/Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","@marcom/ac-polyfills/Array/prototype.some":"@marcom/ac-polyfills/Array/prototype.some"}],3:[function(d,g,f){g.exports={getDocumentMode:function(){var a;
if(document.documentMode){a=parseInt(document.documentMode,10)}else{a=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){a=7
}}}return a}}},{}],4:[function(d,g,f){g.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],5:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.slice");g("@marcom/ac-polyfills/Element/prototype.classList");
var j=g("./className/add");k.exports=function i(){var a=Array.prototype.slice.call(arguments);
var b=a.shift(a);var c;if(b.classList&&b.classList.add){b.classList.add.apply(b.classList,a);
return}for(c=0;c<a.length;c++){j(b,a[c])}}},{"./className/add":7,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice","@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],6:[function(d,g,f){g.exports={add:d("./className/add"),contains:d("./className/contains"),remove:d("./className/remove")}
},{"./className/add":7,"./className/contains":8,"./className/remove":10}],7:[function(g,k,h){var j=g("./contains");
k.exports=function i(a,b){if(!j(a,b)){a.className+=" "+b}}},{"./contains":8}],8:[function(g,k,h){var i=g("./getTokenRegExp");
k.exports=function j(a,b){return i(b).test(a.className)}},{"./getTokenRegExp":9}],9:[function(f,i,g){i.exports=function h(a){return new RegExp("(\\s|^)"+a+"(\\s|$)")
}},{}],10:[function(m,l,h){var k=m("./contains");var j=m("./getTokenRegExp");l.exports=function i(a,b){if(k(a,b)){a.className=a.className.replace(j(b),"$1").trim()
}}},{"./contains":8,"./getTokenRegExp":9}],11:[function(g,j,h){g("@marcom/ac-polyfills/Element/prototype.classList");
var i=g("./className/contains");j.exports=function k(a,b){if(a.classList&&a.classList.contains){return a.classList.contains(b)
}return i(a,b)}},{"./className/contains":8,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],12:[function(d,g,f){g.exports={add:d("./add"),contains:d("./contains"),remove:d("./remove"),toggle:d("./toggle")}
},{"./add":5,"./contains":11,"./remove":13,"./toggle":14}],13:[function(j,i,k){j("@marcom/ac-polyfills/Array/prototype.slice");
j("@marcom/ac-polyfills/Element/prototype.classList");var g=j("./className/remove");
i.exports=function h(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.remove){b.classList.remove.apply(b.classList,a);
return}for(c=0;c<a.length;c++){g(b,a[c])}}},{"./className/remove":10,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice","@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],14:[function(k,j,g){k("@marcom/ac-polyfills/Element/prototype.classList");
var i=k("./className");j.exports=function h(b,c,a){var d=(typeof a!=="undefined");
var f;if(b.classList&&b.classList.toggle){if(d){return b.classList.toggle(c,a)}return b.classList.toggle(c)
}if(d){f=!!a}else{f=!i.contains(b,c)}if(f){i.add(b,c)}else{i.remove(b,c)}return f
}},{"./className":6,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],15:[function(d,g,f){g.exports={path:d("./ac-path/path")}
},{"./ac-path/path":16}],16:[function(f,i,g){function h(a){return h.parse(a)}h.basename=function(c,d){h._assertStr(c);
var a;var b=c.match(/[^/]*$/)[0];if(d){a=b.match(new RegExp("(.*)"+d+"$"));if(a){b=a[1]
}}return b};h.dirname=function(a){h._assertStr(a);var b=a.match(/^(.*)\b\/|.*/);
return b[1]||a};h.extname=function(b){h._assertStr(b);var a=b.match(/\.[^.]*$/);
return a?a[0]:""};h.filename=function(a){h._assertStr(a);return h.basename(a,h.extname(a))
};h.format=function(b,a){h._assertObj(b);var c=(b.dirname)?b.dirname+"/":"";if(b.basename){c+=b.basename
}else{if(b.filename){c+=b.filename;if(b.extname){c+=b.extname}}}if(a){if(typeof a==="string"){c+="?"+a
}else{if(Object.prototype.toString.call(a)===Object.prototype.toString.call([])){c+="?"+a.join("&")
}}}return c};h.isAbsolute=function(a){h._assertStr(a);return(!!a.match(/(^http(s?))/))
};h.isRootRelative=function(a){h._assertStr(a);return !!a.match(/^\/(?!\/)/)};h.parse=function(a){h._assertStr(a);
return{dirname:h.dirname(a),basename:h.basename(a),filename:h.filename(a),extname:h.extname(a)}
};h._assertStr=function(a){h._assertType(a,"string")};h._assertObj=function(a){h._assertType(a,"object")
};h._assertType=function(a,c){var b=typeof a;if(b==="undefined"||b!==c){throw new TypeError("path param must be of type "+c)
}};i.exports=h},{}],17:[function(d,g,f){g.exports={cname:d("./ac-cname/cname")}
},{"./ac-cname/cname":18}],18:[function(k,j,h){var i=k("ac-path").path;function g(a){return g.addPrefix(a)
}g._prefix=(function(){var a="https://images.apple.com/global/elements/blank.gif";return a.replace(/global\/.*/,"")
}());g.addPrefix=function(a){if(i.isAbsolute(a)){return a}g._assertRootRelative(a);
a=g._prefix+a.replace(/^\//,"");a=a.replace(/(^.+)(\/105\/)/,"$1/");return a};g.formatUrl=function(c,m,a,b){var d=i.format({dirname:c,filename:m,extname:a},b);
if(i.isAbsolute(d)){return d}g._assertRootRelative(c);var f=g.addPrefix(d);return f
};g._assertRootRelative=function(a){if(!i.isRootRelative(a)){throw new URIError("Only root-relative paths are currently supported")
}};j.exports=g},{"ac-path":15}],19:[function(d,g,f){g.exports={getContentDimensions:d("./getContentDimensions"),getDimensions:d("./getDimensions"),getPagePosition:d("./getPagePosition"),getPercentInViewport:d("./getPercentInViewport"),getPixelsInViewport:d("./getPixelsInViewport"),getPosition:d("./getPosition"),getScrollX:d("./getScrollX"),getScrollY:d("./getScrollY"),getViewportPosition:d("./getViewportPosition"),isInViewport:d("./isInViewport")}
},{"./getContentDimensions":20,"./getDimensions":21,"./getPagePosition":22,"./getPercentInViewport":23,"./getPixelsInViewport":24,"./getPosition":25,"./getScrollX":26,"./getScrollY":27,"./getViewportPosition":28,"./isInViewport":29}],20:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b=1;if(a){b=g(c).width/c.offsetWidth}return{width:c.scrollWidth*b,height:c.scrollHeight*b}
}},{"./utils/getBoundingClientRect":30}],21:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b;if(a){b=g(c);return{width:b.width,height:b.height}
}return{width:c.offsetWidth,height:c.offsetHeight}}},{"./utils/getBoundingClientRect":30}],22:[function(n,m,o){var q=n("./getDimensions");
var p=n("./utils/getBoundingClientRect");var j=n("./getScrollX");var k=n("./getScrollY");
m.exports=function l(d,f){var b;var g;var a;var c;if(f){b=p(d);g=j();a=k();return{top:b.top+a,right:b.right+g,bottom:b.bottom+a,left:b.left+g}
}c=q(d,f);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height};while((d=d.offsetParent)){b.top+=d.offsetTop;
b.left+=d.offsetLeft}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}
}},{"./getDimensions":21,"./getScrollX":26,"./getScrollY":27,"./utils/getBoundingClientRect":30}],23:[function(m,k,h){var i=m("./getDimensions");
var j=m("./getPixelsInViewport");k.exports=function l(b,a){var c=j(b,a);var d=i(b,a).height;
return(c/d)}},{"./getDimensions":21,"./getPixelsInViewport":24}],24:[function(k,j,g){var h=k("./getViewportPosition");
j.exports=function i(d,a){var b=document.documentElement.clientHeight;var f=h(d,a);
var c;if(f.top>=b||f.bottom<=0){return 0}c=(f.bottom-f.top);if(f.top<0){c+=f.top
}if(f.bottom>b){c-=f.bottom-b}return c}},{"./getViewportPosition":28}],25:[function(l,k,m){var i=l("./getDimensions");
var h=l("./utils/getBoundingClientRect");k.exports=function j(d,a){var b;var f;
var c;if(a){b=h(d);if(d.offsetParent){f=h(d.offsetParent);b.top-=f.top;b.left-=f.left
}}else{c=i(d,a);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height}
}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}}},{"./getDimensions":21,"./utils/getBoundingClientRect":30}],26:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageXOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollLeft}},{}],27:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageYOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollTop}},{}],28:[function(n,m,o){var l=n("./getPagePosition");
var p=n("./utils/getBoundingClientRect");var q=n("./getScrollX");var j=n("./getScrollY");
m.exports=function k(c,f){var d;var a;var b;if(f){d=p(c);return{top:d.top,right:d.right,bottom:d.bottom,left:d.left}
}d=l(c);a=q();b=j();return{top:d.top-b,right:d.right-a,bottom:d.bottom-b,left:d.left-a}
}},{"./getPagePosition":22,"./getScrollX":26,"./getScrollY":27,"./utils/getBoundingClientRect":30}],29:[function(h,l,i){var j=h("./getPixelsInViewport");
var m=h("./getPercentInViewport");l.exports=function k(b,a,d){var c;d=d||0;if(typeof d==="string"&&d.slice(-2)==="px"){d=parseInt(d,10);
c=j(b,a)}else{c=m(b,a)}return(c>0&&c>=d)}},{"./getPercentInViewport":23,"./getPixelsInViewport":24}],30:[function(i,h,f){h.exports=function g(b){var a=b.getBoundingClientRect();
return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}
}},{}],31:[function(d,g,f){g.exports=8},{}],32:[function(d,g,f){g.exports=11},{}],33:[function(d,g,f){g.exports=9
},{}],34:[function(d,g,f){g.exports=10},{}],35:[function(d,g,f){g.exports=1},{}],36:[function(d,g,f){g.exports=3
},{}],37:[function(d,g,f){g.exports={createDocumentFragment:d("./createDocumentFragment"),filterByNodeType:d("./filterByNodeType"),hasAttribute:d("./hasAttribute"),indexOf:d("./indexOf"),insertAfter:d("./insertAfter"),insertBefore:d("./insertBefore"),insertFirstChild:d("./insertFirstChild"),insertLastChild:d("./insertLastChild"),isComment:d("./isComment"),isDocument:d("./isDocument"),isDocumentFragment:d("./isDocumentFragment"),isDocumentType:d("./isDocumentType"),isElement:d("./isElement"),isNode:d("./isNode"),isNodeList:d("./isNodeList"),isTextNode:d("./isTextNode"),remove:d("./remove"),replace:d("./replace"),COMMENT_NODE:d("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:d("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:d("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:d("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:d("./ELEMENT_NODE"),TEXT_NODE:d("./TEXT_NODE")}
},{"./COMMENT_NODE":31,"./DOCUMENT_FRAGMENT_NODE":32,"./DOCUMENT_NODE":33,"./DOCUMENT_TYPE_NODE":34,"./ELEMENT_NODE":35,"./TEXT_NODE":36,"./createDocumentFragment":38,"./filterByNodeType":39,"./hasAttribute":40,"./indexOf":41,"./insertAfter":42,"./insertBefore":43,"./insertFirstChild":44,"./insertLastChild":45,"./isComment":48,"./isDocument":49,"./isDocumentFragment":50,"./isDocumentType":51,"./isElement":52,"./isNode":53,"./isNodeList":54,"./isTextNode":55,"./remove":56,"./replace":57}],38:[function(i,h,f){h.exports=function g(b){var c=document.createDocumentFragment();
var a;if(b){a=document.createElement("div");a.innerHTML=b;while(a.firstChild){c.appendChild(a.firstChild)
}}return c}},{}],39:[function(l,k,m){l("@marcom/ac-polyfills/Array/prototype.slice");
l("@marcom/ac-polyfills/Array/prototype.filter");var j=l("./internal/isNodeType");
var i=l("./ELEMENT_NODE");k.exports=function h(a,b){b=b||i;a=Array.prototype.slice.call(a);
return a.filter(function(c){return j(c,b)})}},{"./ELEMENT_NODE":35,"./internal/isNodeType":46,"@marcom/ac-polyfills/Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],40:[function(i,h,g){h.exports=function f(a,b){if("hasAttribute" in a){return a.hasAttribute(b)
}return(a.attributes.getNamedItem(b)!==null)}},{}],41:[function(m,l,h){m("@marcom/ac-polyfills/Array/prototype.indexOf");
m("@marcom/ac-polyfills/Array/prototype.slice");var j=m("./internal/validate");
var i=m("./filterByNodeType");l.exports=function k(a,c){var d=a.parentNode;var b;
if(!d){return 0}b=d.childNodes;if(c!==false){b=i(b,c)}else{b=Array.prototype.slice.call(b)
}return b.indexOf(a)}},{"./filterByNodeType":39,"./internal/validate":47,"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],42:[function(g,k,h){var i=g("./internal/validate");
k.exports=function j(b,a){i.insertNode(b,true,"insertAfter");i.childNode(a,true,"insertAfter");
i.hasParentNode(a,"insertAfter");if(!a.nextSibling){return a.parentNode.appendChild(b)
}return a.parentNode.insertBefore(b,a.nextSibling)}},{"./internal/validate":47}],43:[function(k,j,h){var i=k("./internal/validate");
j.exports=function g(b,a){i.insertNode(b,true,"insertBefore");i.childNode(a,true,"insertBefore");
i.hasParentNode(a,"insertBefore");return a.parentNode.insertBefore(b,a)}},{"./internal/validate":47}],44:[function(k,j,g){var i=k("./internal/validate");
j.exports=function h(b,a){i.insertNode(b,true,"insertFirstChild");i.parentNode(a,true,"insertFirstChild");
if(!a.firstChild){return a.appendChild(b)}return a.insertBefore(b,a.firstChild)
}},{"./internal/validate":47}],45:[function(g,k,h){var j=g("./internal/validate");
k.exports=function i(b,a){j.insertNode(b,true,"insertLastChild");j.parentNode(a,true,"insertLastChild");
return a.appendChild(b)}},{"./internal/validate":47}],46:[function(g,k,h){var j=g("../isNode");
k.exports=function i(a,b){if(!j(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)}},{"../isNode":53}],47:[function(z,B,w){var D=z("./isNodeType");
var C=z("../COMMENT_NODE");var v=z("../DOCUMENT_FRAGMENT_NODE");var x=z("../ELEMENT_NODE");
var y=z("../TEXT_NODE");var t=[x,y,C,v];var A=" must be an Element, TextNode, Comment, or Document Fragment";
var q=[x,y,C];var u=" must be an Element, TextNode, or Comment";var s=[x,v];var r=" must be an Element, or Document Fragment";
var E=" must have a parentNode";B.exports={parentNode:function(d,a,b,c){c=c||"target";
if((d||a)&&!D(d,s)){throw new TypeError(b+": "+c+r)}},childNode:function(d,a,b,c){c=c||"target";
if(!d&&!a){return}if(!D(d,q)){throw new TypeError(b+": "+c+u)}},insertNode:function(d,a,b,c){c=c||"node";
if(!d&&!a){return}if(!D(d,t)){throw new TypeError(b+": "+c+A)}},hasParentNode:function(c,a,b){b=b||"target";
if(!c.parentNode){throw new TypeError(a+": "+b+E)}}}},{"../COMMENT_NODE":31,"../DOCUMENT_FRAGMENT_NODE":32,"../ELEMENT_NODE":35,"../TEXT_NODE":36,"./isNodeType":46}],48:[function(m,l,i){var j=m("./internal/isNodeType");
var k=m("./COMMENT_NODE");l.exports=function h(a){return j(a,k)}},{"./COMMENT_NODE":31,"./internal/isNodeType":46}],49:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_NODE":33,"./internal/isNodeType":46}],50:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_FRAGMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_FRAGMENT_NODE":32,"./internal/isNodeType":46}],51:[function(h,m,i){var j=h("./internal/isNodeType");
var k=h("./DOCUMENT_TYPE_NODE");m.exports=function l(a){return j(a,k)}},{"./DOCUMENT_TYPE_NODE":34,"./internal/isNodeType":46}],52:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./ELEMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./ELEMENT_NODE":35,"./internal/isNodeType":46}],53:[function(f,i,g){i.exports=function h(a){return !!(a&&a.nodeType)
}},{}],54:[function(k,j,g){var i=/^\[object (HTMLCollection|NodeList|Object)\]$/;
j.exports=function h(a){if(!a){return false}if(typeof a.length!=="number"){return false
}if(typeof a[0]==="object"&&(!a[0]||!a[0].nodeType)){return false}return i.test(Object.prototype.toString.call(a))
}},{}],55:[function(m,l,i){var j=m("./internal/isNodeType");var h=m("./TEXT_NODE");
l.exports=function k(a){return j(a,h)}},{"./TEXT_NODE":36,"./internal/isNodeType":46}],56:[function(k,j,g){var i=k("./internal/validate");
j.exports=function h(a){i.childNode(a,true,"remove");if(!a.parentNode){return a
}return a.parentNode.removeChild(a)}},{"./internal/validate":47}],57:[function(g,j,h){var i=g("./internal/validate");
j.exports=function k(b,a){i.insertNode(b,true,"insertFirstChild","newNode");i.childNode(a,true,"insertFirstChild","oldNode");
i.hasParentNode(a,"insertFirstChild","oldNode");return a.parentNode.replaceChild(b,a)
}},{"./internal/validate":47}],58:[function(n,m,o){var i=n("./shared/stylePropertyCache");
var k=n("./getStyleProperty");var l=n("./getStyleValue");m.exports=function j(a,b){var c;
a=k(a);if(!a){return false}c=i[a].css;if(typeof b!=="undefined"){b=l(a,b);if(b===false){return false
}c+=":"+b+";"}return c}},{"./getStyleProperty":59,"./getStyleValue":60,"./shared/stylePropertyCache":63}],59:[function(q,r,o){var u=q("./shared/stylePropertyCache");
var n=q("./shared/getStyleTestElement");var t=q("./utils/toCSS");var l=q("./utils/toDOM");
var m=q("./shared/prefixHelper");var s=function(c,b){var a=t(c);var d=(b===false)?false:t(b);
u[c]=u[b]=u[a]=u[d]={dom:b,css:d};return b};r.exports=function p(c){var f;var b;
var d;var a;c+="";if(c in u){return u[c].dom}d=n();c=l(c);b=c.charAt(0).toUpperCase()+c.substring(1);
if(c==="filter"){f=["WebkitFilter","filter"]}else{f=(c+" "+m.dom.join(b+" ")+b).split(" ")
}for(a=0;a<f.length;a++){if(typeof d.style[f[a]]!=="undefined"){if(a!==0){m.reduce(a-1)
}return s(c,f[a])}}return s(c,false)}},{"./shared/getStyleTestElement":61,"./shared/prefixHelper":62,"./shared/stylePropertyCache":63,"./utils/toCSS":66,"./utils/toDOM":67}],60:[function(t,v,q){var s=t("./getStyleProperty");
var n=t("./shared/styleValueAvailable");var o=t("./shared/prefixHelper");var w=t("./shared/stylePropertyCache");
var p={};var m=/(\([^\)]+\))/gi;var r=/([^ ,;\(]+(\([^\)]+\))?)/gi;v.exports=function u(b,c){var a;
c+="";b=s(b);if(!b){return false}if(n(b,c)){return c}a=w[b].css;c=c.replace(r,function(h){var i;
var d;var f;var g;if(h[0]==="#"||!isNaN(h[0])){return h}d=h.replace(m,"");f=a+":"+d;
if(f in p){if(p[f]===false){return""}return h.replace(d,p[f])}i=o.css.map(function(j){return j+h
});i=[h].concat(i);for(g=0;g<i.length;g++){if(n(b,i[g])){if(g!==0){o.reduce(g-1)
}p[f]=i[g].replace(m,"");return i[g]}}p[f]=false;return""});c=c.trim();return(c==="")?false:c
}},{"./getStyleProperty":59,"./shared/prefixHelper":62,"./shared/stylePropertyCache":63,"./shared/styleValueAvailable":64}],61:[function(k,j,g){var i;
j.exports=function h(){if(!i){i=document.createElement("_")}else{i.style.cssText="";
i.removeAttribute("style")}return i};j.exports.resetElement=function(){i=null}},{}],62:[function(j,p,k){var l=["-webkit-","-moz-","-ms-"];
var o=["Webkit","Moz","ms"];var m=["webkit","moz","ms"];var q=function(){this.initialize()
};var n=q.prototype;n.initialize=function(){this.reduced=false;this.css=l;this.dom=o;
this.evt=m};n.reduce=function(a){if(!this.reduced){this.reduced=true;this.css=[this.css[a]];
this.dom=[this.dom[a]];this.evt=[this.evt[a]]}};p.exports=new q()},{}],63:[function(d,g,f){g.exports={}
},{}],64:[function(s,t,r){var u=s("./stylePropertyCache");var q=s("./getStyleTestElement");
var n=false;var l;var m;var p=function(){var b;if(!n){n=true;l=("CSS" in window&&"supports" in window.CSS);
m=false;b=q();try{b.style.width="invalid"}catch(a){m=true}}};t.exports=function o(d,f){var a;
var b;p();if(l){d=u[d].css;return CSS.supports(d,f)}b=q();a=b.style[d];if(m){try{b.style[d]=f
}catch(c){return false}}else{b.style[d]=f}return(b.style[d]&&b.style[d]!==a)};t.exports.resetFlags=function(){n=false
}},{"./getStyleTestElement":61,"./stylePropertyCache":63}],65:[function(k,j,h){var g=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
j.exports=function i(a){a=String.prototype.replace.call(a,g,"");return a.charAt(0).toLowerCase()+a.substring(1)
}},{}],66:[function(k,j,g){var i=/^(webkit|moz|ms)/gi;j.exports=function h(a){var b;
if(a.toLowerCase()==="cssfloat"){return"float"}if(i.test(a)){a="-"+a}return a.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],67:[function(g,k,h){var i=/-([a-z])/g;k.exports=function j(a){var b;if(a.toLowerCase()==="float"){return"cssFloat"
}a=a.replace(i,function(c,d){return d.toUpperCase()});if(a.substr(0,2)==="Ms"){a="ms"+a.substring(2)
}return a}},{}],68:[function(d,g,f){g.exports={getStyle:d("./getStyle"),setStyle:d("./setStyle")}
},{"./getStyle":69,"./setStyle":71}],69:[function(m,l,h){var k=m("@marcom/ac-prefixer/getStyleProperty");
var j=m("@marcom/ac-prefixer/stripPrefixes");l.exports=function i(){var c=Array.prototype.slice.call(arguments);
var g=c.shift(c);var a=window.getComputedStyle(g);var b={};var q;var f;var r;var d;
if(typeof c[0]!=="string"){c=c[0]}for(d=0;d<c.length;d++){q=c[d];f=k(q);if(f){q=j(f);
r=a[f];if(!r||r==="auto"){r=null}if(r){r=j(r)}}else{r=null}b[q]=r}return b}},{"@marcom/ac-prefixer/getStyleProperty":59,"@marcom/ac-prefixer/stripPrefixes":65}],70:[function(i,h,f){h.exports=function g(a){var b;
var c;var d;if(!a&&a!==0){return""}if(Array.isArray(a)){return a+""}if(typeof a==="object"){b="";
c=Object.keys(a);for(d=0;d<c.length;d++){b+=c[d]+"("+a[c[d]]+") "}return b.trim()
}return a}},{}],71:[function(n,m,o){var j=n("@marcom/ac-prefixer/getStyleCSS");
var l=n("@marcom/ac-prefixer/getStyleProperty");var i=n("./internal/normalizeValue");
m.exports=function k(h,b){var c="";var d;var q;var f;var a;var g;if(typeof b!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(q in b){a=i(b[q]);if(!a&&a!==0){f=l(q);if("removeAttribute" in h.style){h.style.removeAttribute(f)
}else{h.style[f]=""}}else{d=j(q,a);if(d!==false){c+=" "+d}}}if(c.length){g=h.style.cssText;
if(g.charAt(g.length-1)!==";"){g+=";"}g+=c;h.style.cssText=g}return h}},{"./internal/normalizeValue":70,"@marcom/ac-prefixer/getStyleCSS":58,"@marcom/ac-prefixer/getStyleProperty":59}],72:[function(o,n,i){var l=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function m(a,c,d){var b=[];
k.childNode(a,true,"ancestors");k.selector(c,false,"ancestors");if(d&&l(a)&&(!c||j(a,c))){b.push(a)
}if(a!==document.body){while((a=a.parentNode)&&l(a)){if(!c||j(a,c)){b.push(a)}if(a===document.body){break
}}}return b}},{"./internal/validate":74,"./matchesSelector":75,"@marcom/ac-dom-nodes/isElement":52}],73:[function(d,g,f){g.exports=window.Element?(function(a){return a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector
}(Element.prototype)):null},{}],74:[function(z,C,x){z("@marcom/ac-polyfills/Array/prototype.indexOf");
var r=z("@marcom/ac-dom-nodes/isNode");var D=z("@marcom/ac-dom-nodes/COMMENT_NODE");
var v=z("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var w=z("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var y=z("@marcom/ac-dom-nodes/ELEMENT_NODE");var A=z("@marcom/ac-dom-nodes/TEXT_NODE");
var E=function(a,b){if(!r(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)};var t=[y,w,v];var s=" must be an Element, Document, or Document Fragment";
var q=[y,A,D];var u=" must be an Element, TextNode, or Comment";var B=" must be a string";
C.exports={parentNode:function(d,a,b,c){c=c||"node";if((d||a)&&!E(d,t)){throw new TypeError(b+": "+c+s)
}},childNode:function(d,a,b,c){c=c||"node";if(!d&&!a){return}if(!E(d,q)){throw new TypeError(b+": "+c+u)
}},selector:function(d,a,b,c){c=c||"selector";if((d||a)&&typeof d!=="string"){throw new TypeError(b+": "+c+B)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":31,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":32,"@marcom/ac-dom-nodes/DOCUMENT_NODE":33,"@marcom/ac-dom-nodes/ELEMENT_NODE":35,"@marcom/ac-dom-nodes/TEXT_NODE":36,"@marcom/ac-dom-nodes/isNode":53,"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf"}],75:[function(p,o,q){var n=p("@marcom/ac-dom-nodes/isElement");
var l=p("./internal/validate");var k=p("./internal/nativeMatches");var m=p("./shims/matchesSelector");
o.exports=function j(a,b){l.selector(b,true,"matchesSelector");if(!n(a)){return false
}if(!k){return m(a,b)}return k.call(a,b)}},{"./internal/nativeMatches":73,"./internal/validate":74,"./shims/matchesSelector":80,"@marcom/ac-dom-nodes/isElement":52}],76:[function(o,n,i){var m=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function l(a,b){k.childNode(a,true,"nextSibling");
k.selector(b,false,"nextSibling");if(a.nextElementSibling&&!b){return a.nextElementSibling
}while(a=a.nextSibling){if(m(a)){if(!b||j(a,b)){return a}}}return null}},{"./internal/validate":74,"./matchesSelector":75,"@marcom/ac-dom-nodes/isElement":52}],77:[function(o,n,i){var l=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function m(a,b){k.childNode(a,true,"previousSibling");
k.selector(b,false,"previousSibling");if(a.previousElementSibling&&!b){return a.previousElementSibling
}while(a=a.previousSibling){if(l(a)){if(!b||j(a,b)){return a}}}return null}},{"./internal/validate":74,"./matchesSelector":75,"@marcom/ac-dom-nodes/isElement":52}],78:[function(o,n,j){var k=o("./internal/validate");
var i=o("./shims/querySelector");var l=("querySelector" in document);n.exports=function m(b,a){a=a||document;
k.parentNode(a,true,"querySelector","context");k.selector(b,true,"querySelector");
if(!l){return i(b,a)}return a.querySelector(b)}},{"./internal/validate":74,"./shims/querySelector":81}],79:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.slice");
var k=i("./internal/validate");var l=i("./shims/querySelectorAll");var m=("querySelectorAll" in document);
o.exports=function n(b,a){a=a||document;k.parentNode(a,true,"querySelectorAll","context");
k.selector(b,true,"querySelectorAll");if(!m){return l(b,a)}return Array.prototype.slice.call(a.querySelectorAll(b))
}},{"./internal/validate":74,"./shims/querySelectorAll":82,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],80:[function(k,j,g){var i=k("../querySelectorAll");
j.exports=function h(a,f){var b=a.parentNode||document;var d=i(f,b);var c;for(c=0;
c<d.length;c++){if(d[c]===a){return true}}return false}},{"../querySelectorAll":79}],81:[function(g,k,h){var j=g("./querySelectorAll");
k.exports=function i(b,a){var c=j(b,a);return c.length?c[0]:null}},{"./querySelectorAll":82}],82:[function(s,t,q){s("@marcom/ac-polyfills/Array/prototype.indexOf");
var m=s("@marcom/ac-dom-nodes/isElement");var o=s("@marcom/ac-dom-nodes/isDocumentFragment");
var l=s("@marcom/ac-dom-nodes/remove");var r="_ac_qsa_";var n=function(c,b){var a;
if(b===document){return true}a=c;while((a=a.parentNode)&&m(a)){if(a===b){return true
}}return false};var p=function(a){if("recalc" in a){a.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};t.exports=function u(b,g){var d=document.createElement("style");
var c=r+(Math.random()+"").slice(-6);var a=[];var f;g=g||document;document[c]=[];
if(o(g)){g.appendChild(d)}else{document.documentElement.firstChild.appendChild(d)
}d.styleSheet.cssText="*{display:recalc;}"+b+'{ac-qsa:expression(document["'+c+'"] && document["'+c+'"].push(this));}';
p(g);while(document[c].length){f=document[c].shift();f.style.removeAttribute("ac-qsa");
if(a.indexOf(f)===-1&&n(f,g)){a.push(f)}}document[c]=null;l(d);p(g);return a}},{"@marcom/ac-dom-nodes/isDocumentFragment":50,"@marcom/ac-dom-nodes/isElement":52,"@marcom/ac-dom-nodes/remove":56,"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf"}],83:[function(m,l,h){var j=m("./ac-clock/Clock"),k=m("./ac-clock/ThrottledClock"),i=m("./ac-clock/sharedClockInstance");
i.Clock=j;i.ThrottledClock=k;l.exports=i},{"./ac-clock/Clock":84,"./ac-clock/ThrottledClock":85,"./ac-clock/sharedClockInstance":86}],84:[function(o,n,i){o("@marcom/ac-polyfills/Function/prototype.bind");
o("@marcom/ac-polyfills/requestAnimationFrame");var l;var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=new Date().getTime();function k(){m.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}l=k.prototype=new m(null);
l.start=function(){if(this._active){return}this._tick()};l.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};l.destroy=function(){this.stop();
this.off();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};l.isRunning=function(){return this._active
};l._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};l._onAnimationFrame=function(b){if(this.lastFrameTime===null){this.lastFrameTime=b
}var a=b-this.lastFrameTime;var c=0;if(a>=1000){a=0}if(a!==0){c=1000/a}if(this._firstFrame===true){a=0;
this._firstFrame=false}if(c===0){this._firstFrame=true}else{var d={time:b,delta:a,fps:c,naturalFps:c,timeNow:this._getTime()};
this.trigger("update",d);this.trigger("draw",d)}this._animationFrame=null;this.lastFrameTime=b;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};n.exports=k
},{"@marcom/ac-event-emitter-micro":117,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame"}],85:[function(o,n,i){o("@marcom/ac-polyfills/requestAnimationFrame");
var l;var j=o("./sharedClockInstance"),m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function k(a,b){if(a===null){return}m.call(this);b=b||{};this._fps=a||null;this._clock=b.clock||j;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}l=k.prototype=new m(null);l.setFps=function(a){this._fps=a;return this};l.getFps=function(){return this._fps
};l.start=function(){this._clock.start();return this};l.stop=function(){this._clock.stop();
return this};l.isRunning=function(){return this._clock.isRunning()};l.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};l._onClockUpdate=function(b){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var a=b.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(Math.ceil(1000/a)>=this._fps+2){return}this._clockEvent=b;this._clockEvent.delta=a;
this._clockEvent.fps=1000/a;this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};l._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};n.exports=k},{"./sharedClockInstance":86,"@marcom/ac-event-emitter-micro":117,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame"}],86:[function(f,i,g){var h=f("./Clock");
i.exports=new h()},{"./Clock":84}],87:[function(d,g,f){g.exports={Clip:d("./ac-clip/Clip")}
},{"./ac-clip/Clip":88}],88:[function(u,v,t){u("@marcom/ac-polyfills/Array/isArray");
var r=u("@marcom/ac-object/create");var m=u("@marcom/ac-easing").createPredefined;
var w=u("@marcom/ac-clock");var o=u("@marcom/ac-easing").Ease;var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p="ease";function q(d,f,b,a){a=a||{};this._options=a;this._isYoyo=a.yoyo;this._direction=1;
this._timeScale=1;this._loop=a.loop||0;this._loopCount=0;this._target=d;this.duration(f);
this._delay=(a.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=a.clock||w;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=b||{};this._propsFrom=a.propsFrom||{};this._onStart=a.onStart||null;
this._onUpdate=a.onUpdate||null;this._onDraw=a.onDraw||null;this._onComplete=a.onComplete||null;
var c=a.ease||p;this._ease=(typeof c==="function")?new o(c):m(c);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
q._add(this);n.call(this)}var s=q.prototype=r(n.prototype);q.COMPLETE="complete";
q.PAUSE="pause";q.PLAY="play";s.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};s.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(q.PAUSE,this)}return this
};s.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;q._remove(this);n.prototype.destroy.call(this);
return this};s.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};s.playing=function(){return this._playing
};s.target=function(){return this._target};s.duration=function(a){if(a!==undefined){this._duration=a;
this._durationMs=(a*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};s.timeScale=function(a){if(a!==undefined){this._timeScale=a;
this.duration(this._duration)}return this._timeScale};s.currentTime=function(a){if(a!==undefined){return this.progress(a/this._duration)*this._duration
}return(this.progress()*this._duration)};s.progress=function(a){if(a!==undefined){this._progress=Math.min(1,Math.max(0,a));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&a===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};s._resetLoop=function(c,a){var b;
for(b in a){if(a.hasOwnProperty(b)){if(a[b]!==null){if(typeof a[b]==="object"){this._resetLoop(c[b],a[b])
}else{c[b]=a[b]}}}}};s._cloneObjects=function(){var b={};var c={};var a={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,b,c,a);
return{target:b,propsTo:c,propsFrom:a}};s._cloneObjectsLoop=function(g,b,c,d,i,a){var h;
var f;for(f in c){if(c.hasOwnProperty(f)&&b[f]===undefined&&g[f]!==undefined){d[f]=g[f];
i[f]=g[f];a[f]=c[f]}}for(f in b){if(g.hasOwnProperty(f)){h=typeof g[f];if(g[f]!==null&&h==="object"){if(Array.isArray(g[f])){d[f]=[];
i[f]=[];a[f]=[]}else{d[f]={};i[f]={};a[f]={}}this._cloneObjectsLoop(g[f],b[f]||{},c[f]||{},d[f],i[f],a[f])
}else{if(b[f]!==null&&h==="number"){d[f]=g[f];i[f]=b[f];if(c&&c[f]!==undefined){a[f]=c[f]
}}}}}};s._prepareProperties=function(){if(!this._isPrepared){var a=this._cloneObjects();
this._storeTarget=a.target;this._propsTo=a.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=a.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};s._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};s._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
s._setDiffLoop=function(b,c,f,g){var a;var d;for(d in b){if(b.hasOwnProperty(d)){a=typeof b[d];
if(b[d]!==null&&a==="object"){c[d]=c[d]||{};g[d]=g[d]||{};this._setDiffLoop(b[d],c[d],f[d],g[d])
}else{if(a==="number"&&f[d]!==undefined){if(c[d]!==undefined){f[d]=c[d]}else{c[d]=f[d]
}g[d]=b[d]-f[d]}else{b[d]=null;c[d]=null}}}}};s._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(q.PLAY,this)};s._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};s._updateProps=function(){var a;
if(this._direction===1){a=this._ease.getValue(this._progress)}else{a=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,a)
};s._updatePropsLoop=function(b,c,f,g,a){var d;for(d in b){if(b.hasOwnProperty(d)&&b[d]!==null){if(typeof b[d]!=="number"){this._updatePropsLoop(b[d],c[d],f[d],g[d],a)
}else{f[d]=c[d]+(g[d]*a)}}}};s._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};s._completePropsLoop=function(b,a){var c;for(c in b){if(b.hasOwnProperty(c)&&b[c]!==null){if(typeof b[c]!=="number"){this._completePropsLoop(b[c],a[c])
}else{a[c]=b[c]}}}};s._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(q.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};s._update=function(a){if(this._running){this._progress=(a.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
s._draw=function(a){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};q._instantiate=function(){this._clips=[];
return this};q._add=function(a){this._clips.push(a)};q._remove=function(b){var a=this._clips.indexOf(b);
if(a>-1){this._clips.splice(a,1)}};q.getAll=function(b){if(b!==undefined){var a=[];
var c=this._clips.length;while(c--){if(this._clips[c].target()===b){a.push(this._clips[c])
}}return a}return Array.prototype.slice.call(this._clips)};q.destroyAll=function(b){var a=this.getAll(b);
if(this._clips.length===a.length){this._clips=[]}var c=a.length;while(c--){a[c].destroy()
}return a};q.to=function(c,d,b,a){a=a||{};if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new q(c,d,b,a).play()};q.from=function(b,c,a,d){d=d||{};d.propsFrom=a;if(d.destroyOnComplete===undefined){d.destroyOnComplete=true
}return new q(b,c,d.propsTo,d).play()};v.exports=q._instantiate()},{"@marcom/ac-clock":83,"@marcom/ac-easing":109,"@marcom/ac-event-emitter-micro":117,"@marcom/ac-object/create":458,"@marcom/ac-polyfills/Array/isArray":"@marcom/ac-polyfills/Array/isArray"}],89:[function(f,i,g){var h=f("./ac-color/Color");
h.decimalToHex=f("./ac-color/static/decimalToHex");h.hexToDecimal=f("./ac-color/static/hexToDecimal");
h.hexToRgb=f("./ac-color/static/hexToRgb");h.isColor=f("./ac-color/static/isColor");
h.isHex=f("./ac-color/static/isHex");h.isRgb=f("./ac-color/static/isRgb");h.isRgba=f("./ac-color/static/isRgba");
h.mixColors=f("./ac-color/static/mixColors");h.rgbaToArray=f("./ac-color/static/rgbaToArray");
h.rgbToArray=f("./ac-color/static/rgbToArray");h.rgbToDecimal=f("./ac-color/static/rgbToDecimal");
h.rgbToHex=f("./ac-color/static/rgbToHex");h.rgbToHsl=f("./ac-color/static/rgbToHsl");
h.rgbToHsv=f("./ac-color/static/rgbToHsv");h.rgbaToObject=f("./ac-color/static/rgbaToObject");
h.rgbToObject=f("./ac-color/static/rgbToObject");h.shortToLongHex=f("./ac-color/static/shortToLongHex");
i.exports={Color:h}},{"./ac-color/Color":90,"./ac-color/static/decimalToHex":92,"./ac-color/static/hexToDecimal":93,"./ac-color/static/hexToRgb":94,"./ac-color/static/isColor":95,"./ac-color/static/isHex":96,"./ac-color/static/isRgb":97,"./ac-color/static/isRgba":98,"./ac-color/static/mixColors":99,"./ac-color/static/rgbToArray":100,"./ac-color/static/rgbToDecimal":101,"./ac-color/static/rgbToHex":102,"./ac-color/static/rgbToHsl":103,"./ac-color/static/rgbToHsv":104,"./ac-color/static/rgbToObject":105,"./ac-color/static/rgbaToArray":106,"./ac-color/static/rgbaToObject":107,"./ac-color/static/shortToLongHex":108}],90:[function(H,K,v){var E=H("./helpers/cssColorNames");
var z=H("./static/hexToRgb");var A=H("./static/isColor");var G=H("./static/isHex");
var J=H("./static/isRgba");var w=H("./static/mixColors");var B=H("./static/rgbaToArray");
var y=H("./static/rgbToArray");var t=H("./static/rgbToDecimal");var D=H("./static/rgbToHex");
var I=H("./static/rgbaToObject");var C=H("./static/rgbToObject");var x=H("./static/shortToLongHex");
function u(a){if(!A(a)&&!E.nameToRgbObject[a]){throw new Error(a+" is not a supported color.")
}this._setColor(a)}var F=u.prototype;F._setColor=function(c){this._color={};if(G(c)){this._color.hex=x(c);
this._color.rgb={color:z(c)}}else{if(J(c)){this._color.rgba={color:c};var a=this.rgbaObject();
this._color.rgb={color:"rgb("+a.r+", "+a.g+", "+a.b+")"}}else{if(E.nameToRgbObject[c]){var b=E.nameToRgbObject[c];
this._color.rgb={object:b,color:"rgb("+b.r+", "+b.g+", "+b.b+")"}}else{this._color.rgb={color:c}
}}}};F.rgb=function(){return this._color.rgb.color};F.rgba=function(){if(this._color.rgba===undefined){var a=this.rgbObject();
this._color.rgba={color:"rgba("+a.r+", "+a.g+", "+a.b+", 1)"}}return this._color.rgba.color
};F.hex=function(){if(this._color.hex===undefined){this._color.hex=D.apply(this,this.rgbArray())
}return this._color.hex};F.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=t(this.rgb())
}return this._color.decimal};F.cssName=function(){return E.rgbToName[this.rgb()]||null
};F.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=y(this.rgb())
}return this._color.rgb.array};F.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=B(this.rgba())}return this._color.rgba.array
};F.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=C(this.rgb())
}return this._color.rgb.object};F.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=I(this.rgba())
}return this._color.rgba.object};F.getRed=function(){return this.rgbObject().r};
F.getGreen=function(){return this.rgbObject().g};F.getBlue=function(){return this.rgbObject().b
};F.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};F.setRed=function(a){if(a!==this.getRed()){this._setColor("rgba("+a+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};F.setGreen=function(a){if(a!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+a+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};F.setBlue=function(a){if(a!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+a+", "+this.getAlpha()+")")
}return this.rgbObject().b};F.setAlpha=function(a){if(a!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+a+")")
}return this.rgbaObject().a};F.mix=function(c,b){var a=C(w(this.rgb(),c,b));this._setColor("rgba("+a.r+", "+a.g+", "+a.b+", "+this.getAlpha()+")");
return this.rgb()};F.clone=function(){return new u(this.rgb())};K.exports=u},{"./helpers/cssColorNames":91,"./static/hexToRgb":94,"./static/isColor":95,"./static/isHex":96,"./static/isRgba":98,"./static/mixColors":99,"./static/rgbToArray":100,"./static/rgbToDecimal":101,"./static/rgbToHex":102,"./static/rgbToObject":105,"./static/rgbaToArray":106,"./static/rgbaToObject":107,"./static/shortToLongHex":108}],91:[function(g,k,h){var j={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var i={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
k.exports={rgbToName:j,nameToRgbObject:i}},{}],92:[function(i,h,f){h.exports=function g(a){return"#"+(a).toString(16)
}},{}],93:[function(i,h,g){h.exports=function f(a){return parseInt(a.substr(1),16)
}},{}],94:[function(j,i,k){var h=j("./shortToLongHex");i.exports=function g(a){a=h(a);
var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?"rgb("+parseInt(b[1],16)+", "+parseInt(b[2],16)+", "+parseInt(b[3],16)+")":null
}},{"./shortToLongHex":108}],95:[function(o,m,i){var k=o("./isRgb");var l=o("./isRgba");
var j=o("./isHex");m.exports=function n(a){return j(a)||k(a)||l(a)}},{"./isHex":96,"./isRgb":97,"./isRgba":98}],96:[function(i,h,f){h.exports=function g(a){var b=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return b.test(a)}},{}],97:[function(f,i,g){i.exports=function h(a){var b=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return b.exec(a)!==null}},{}],98:[function(f,i,g){i.exports=function h(a){var b=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return b.exec(a)!==null}},{}],99:[function(n,m,o){var i=n("./isHex");var j=n("./hexToRgb");
var k=n("./rgbToObject");m.exports=function l(g,a,b){g=i(g)?j(g):g;a=i(a)?j(a):a;
g=k(g);a=k(a);var c=g.r+((a.r-g.r)*b);var d=g.g+((a.g-g.g)*b);var f=g.b+((a.b-g.b)*b);
return"rgb("+Math.round(c)+", "+Math.round(d)+", "+Math.round(f)+")"}},{"./hexToRgb":94,"./isHex":96,"./rgbToObject":105}],100:[function(g,k,h){var j=g("./rgbToObject");
k.exports=function i(b){var a=j(b);return[a.r,a.g,a.b]}},{"./rgbToObject":105}],101:[function(n,m,i){var o=n("./hexToDecimal");
var k=n("./rgbToArray");var l=n("./rgbToHex");m.exports=function j(b){var a=l.apply(this,k(b));
return o(a)}},{"./hexToDecimal":93,"./rgbToArray":100,"./rgbToHex":102}],102:[function(f,i,g){i.exports=function h(a,b,c){return"#"+((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)
}},{}],103:[function(i,h,f){h.exports=function g(v,l,c){if(arguments.length!==3){return false
}v/=255;l/=255;c/=255;var b=Math.max(v,l,c);var s=Math.min(v,l,c);var d=b+s;var a=b-s;
var r;var w;var u=(d/2);if(b===s){r=w=0}else{w=u>0.5?a/(2-b-s):a/d;switch(b){case v:r=(l-c)/a;
break;case l:r=2+((c-v)/a);break;case c:r=4+((v-l)/a);break}r*=60;if(r<0){r+=360
}}return([r,Math.round(100*w),Math.round(100*u)])}},{}],104:[function(i,h,g){h.exports=function f(y,r,d){if(arguments.length!==3){return false
}var x=y/255;var w=r/255;var b=d/255;var c=Math.max(x,w,b);var v=Math.min(x,w,b);
var s;var z;var A=c;var a=c-v;z=c===0?0:a/c;if(c===v){s=0}else{switch(c){case x:s=(w-b)/a+(w<b?6:0);
break;case w:s=(b-x)/a+2;break;case b:s=(x-w)/a+4;break}s/=6}return[Math.round(360*s),Math.round(100*z),Math.round(100*A)]
}},{}],105:[function(f,i,g){i.exports=function h(b){var a=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3])}}},{}],106:[function(g,k,h){var i=g("./rgbaToObject");
k.exports=function j(b){var a=i(b);return[a.r,a.g,a.b,a.a]}},{"./rgbaToObject":107}],107:[function(f,i,g){i.exports=function h(b){var a=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3]),a:Number(c[4])}
}},{}],108:[function(i,h,f){h.exports=function g(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
a=a.replace(b,function(l,c,d,m){return"#"+c+c+d+d+m+m});return a}},{}],109:[function(d,g,f){g.exports={createBezier:d("./ac-easing/createBezier"),createPredefined:d("./ac-easing/createPredefined"),createStep:d("./ac-easing/createStep"),Ease:d("./ac-easing/Ease")}
},{"./ac-easing/Ease":110,"./ac-easing/createBezier":111,"./ac-easing/createPredefined":112,"./ac-easing/createStep":113}],110:[function(h,m,i){var j="Ease expects an easing function.";
function k(a,b){if(typeof a!=="function"){throw new TypeError(j)}this.easingFunction=a;
this.cssString=b||null}var l=k.prototype;l.getValue=function(a){return this.easingFunction(a,0,1,1)
};m.exports=k},{}],111:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.every");
var m=i("./Ease");var k=i("./helpers/KeySpline");var n="Bezier curve expects exactly four (4) numbers. Given: ";
o.exports=function l(r,b,s,c){var a=Array.prototype.slice.call(arguments);var f=a.every(function(p){return(typeof p==="number")
});if(a.length!==4||!f){throw new TypeError(n+a)}var d=new k(r,b,s,c);var h=function(q,w,p,v){return d.get(q/v)*p+w
};var g="cubic-bezier("+a.join(", ")+")";return new m(h,g)}},{"./Ease":110,"./helpers/KeySpline":114,"@marcom/ac-polyfills/Array/prototype.every":"@marcom/ac-polyfills/Array/prototype.every"}],112:[function(q,s,p){var l=q("./createStep");
var o=q("./helpers/cssAliases");var r=q("./helpers/easingFunctions");var m=q("./Ease");
var n='Easing function "%TYPE%" not recognized among the following: '+Object.keys(r).join(", ");
s.exports=function k(b){var a;if(b==="step-start"){return l(1,"start")}else{if(b==="step-end"){return l(1,"end")
}else{a=r[b]}}if(!a){throw new Error(n.replace("%TYPE%",b))}return new m(a,o[b])
}},{"./Ease":110,"./createStep":113,"./helpers/cssAliases":115,"./helpers/easingFunctions":116}],113:[function(n,m,o){var l=n("./Ease");
var i="Step function expects a numeric value greater than zero. Given: ";var j='Step function direction must be either "start" or "end" (default). Given: ';
m.exports=function k(d,a){a=a||"end";if(typeof d!=="number"||d<1){throw new TypeError(i+d)
}if(a!=="start"&&a!=="end"){throw new TypeError(j+a)}var b=function(h,f,g,s){var t=g/d;
var u=Math[(a==="start")?"floor":"ceil"](h/s*d);return f+t*u};var c="steps("+d+", "+a+")";
return new l(b,c)}},{"./Ease":110}],114:[function(f,i,g){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
;
function h(a,d,b,q){this.get=function(j){if(a===d&&b===q){return j}return t(p(j),d,q)
};function r(k,j){return 1-3*j+3*k}function s(k,j){return 3*j-6*k}function u(j){return 3*j
}function t(j,l,k){return((r(l,k)*j+s(l,k))*j+u(l))*j}function c(j,l,k){return 3*r(l,k)*j*j+2*s(l,k)*j+u(l)
}function p(k){var m=k;for(var l=0;l<4;++l){var j=c(m,a,b);if(j===0){return m}var n=t(m,a,b)-k;
m-=n/j}return m}}i.exports=h},{}],115:[function(i,h,f){var g={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
g.easeIn=g["ease-in"];g.easeOut=g["ease-out"];g.easeInOut=g["ease-in-out"];g.easeInCubic=g["ease-in-cubic"];
g.easeOutCubic=g["ease-out-cubic"];g.easeInOutCubic=g["ease-in-out-cubic"];g.easeInQuad=g["ease-in-quad"];
g.easeOutQuad=g["ease-out-quad"];g.easeInOutQuad=g["ease-in-out-quad"];g.easeInQuart=g["ease-in-quart"];
g.easeOutQuart=g["ease-out-quart"];g.easeInOutQuart=g["ease-in-out-quart"];g.easeInQuint=g["ease-in-quint"];
g.easeOutQuint=g["ease-out-quint"];g.easeInOutQuint=g["ease-in-out-quint"];g.easeInSine=g["ease-in-sine"];
g.easeOutSine=g["ease-out-sine"];g.easeInOutSine=g["ease-in-out-sine"];g.easeInExpo=g["ease-in-expo"];
g.easeOutExpo=g["ease-out-expo"];g.easeInOutExpo=g["ease-in-out-expo"];g.easeInCirc=g["ease-in-circ"];
g.easeOutCirc=g["ease-out-circ"];g.easeInOutCirc=g["ease-in-out-circ"];g.easeInBack=g["ease-in-back"];
g.easeOutBack=g["ease-out-back"];g.easeInOutBack=g["ease-in-out-back"];h.exports=g
},{}],116:[function(ay,aA,W){var S=ay("../createBezier");var af=S(0.25,0.1,0.25,1).easingFunction;
var aw=S(0.42,0,1,1).easingFunction;var Z=S(0,0,0.58,1).easingFunction;var ae=S(0.42,0,0.58,1).easingFunction;
var ah=function(b,d,a,c){return a*b/c+d};var av=function(b,d,a,c){return a*(b/=c)*b+d
};var O=function(b,d,a,c){return -a*(b/=c)*(b-2)+d};var Y=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b+d
}return -a/2*((--b)*(b-2)-1)+d};var au=function(b,d,a,c){return a*(b/=c)*b*b+d};
var aB=function(b,d,a,c){return a*((b=b/c-1)*b*b+1)+d};var at=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b+d
}return a/2*((b-=2)*b*b+2)+d};var an=function(b,d,a,c){return a*(b/=c)*b*b*b+d};
var ap=function(b,d,a,c){return -a*((b=b/c-1)*b*b*b-1)+d};var am=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b+d
}return -a/2*((b-=2)*b*b*b-2)+d};var ad=function(b,d,a,c){return a*(b/=c)*b*b*b*b+d
};var ag=function(b,d,a,c){return a*((b=b/c-1)*b*b*b*b+1)+d};var ac=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b*b+d
}return a/2*((b-=2)*b*b*b*b+2)+d};var az=function(b,d,a,c){return -a*Math.cos(b/c*(Math.PI/2))+a+d
};var Q=function(b,d,a,c){return a*Math.sin(b/c*(Math.PI/2))+d};var aa=function(b,d,a,c){return -a/2*(Math.cos(Math.PI*b/c)-1)+d
};var V=function(b,d,a,c){return(b===0)?d:a*Math.pow(2,10*(b/c-1))+d};var ab=function(b,d,a,c){return(b===c)?d+a:a*(-Math.pow(2,-10*b/c)+1)+d
};var ak=function(b,d,a,c){if(b===0){return d}else{if(b===c){return d+a}else{if((b/=c/2)<1){return a/2*Math.pow(2,10*(b-1))+d
}}}return a/2*(-Math.pow(2,-10*--b)+2)+d};var aq=function(b,d,a,c){return -a*(Math.sqrt(1-(b/=c)*b)-1)+d
};var ax=function(b,d,a,c){return a*Math.sqrt(1-(b=b/c-1)*b)+d};var T=function(b,d,a,c){if((b/=c/2)<1){return -a/2*(Math.sqrt(1-b*b)-1)+d
}return a/2*(Math.sqrt(1-(b-=2)*b)+1)+d};var X=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a}}if(!b){b=d*0.3
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}return -(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
};var U=function(c,f,a,d){var h=1.70158;var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a
}}if(!b){b=d*0.3}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)
}return g*Math.pow(2,-10*c)*Math.sin((c*d-h)*(2*Math.PI)/b)+a+f};var ai=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d/2)===2){return f+a}}if(!b){b=d*(0.3*1.5)
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}if(c<1){return -0.5*(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
}return g*Math.pow(2,-10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b)*0.5+a+f};var aj=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*(b/=c)*b*((f+1)*b-f)+d};var al=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*((b=b/c-1)*b*((f+1)*b+f)+1)+d};var ar=function(b,d,a,c,f){if(f===undefined){f=1.70158
}if((b/=c/2)<1){return a/2*(b*b*(((f*=(1.525))+1)*b-f))+d}return a/2*((b-=2)*b*(((f*=(1.525))+1)*b+f)+2)+d
};var R=function(b,d,a,c){if((b/=c)<(1/2.75)){return a*(7.5625*b*b)+d}else{if(b<(2/2.75)){return a*(7.5625*(b-=(1.5/2.75))*b+0.75)+d
}else{if(b<(2.5/2.75)){return a*(7.5625*(b-=(2.25/2.75))*b+0.9375)+d}}}return a*(7.5625*(b-=(2.625/2.75))*b+0.984375)+d
};var ao=function(b,d,a,c){return a-R(c-b,0,a,c)+d};var P=function(b,d,a,c){if(b<c/2){return ao(b*2,0,a,c)*0.5+d
}return R(b*2-c,0,a,c)*0.5+a*0.5+d};aA.exports={linear:ah,ease:af,easeIn:aw,"ease-in":aw,easeOut:Z,"ease-out":Z,easeInOut:ae,"ease-in-out":ae,easeInCubic:au,"ease-in-cubic":au,easeOutCubic:aB,"ease-out-cubic":aB,easeInOutCubic:at,"ease-in-out-cubic":at,easeInQuad:av,"ease-in-quad":av,easeOutQuad:O,"ease-out-quad":O,easeInOutQuad:Y,"ease-in-out-quad":Y,easeInQuart:an,"ease-in-quart":an,easeOutQuart:ap,"ease-out-quart":ap,easeInOutQuart:am,"ease-in-out-quart":am,easeInQuint:ad,"ease-in-quint":ad,easeOutQuint:ag,"ease-out-quint":ag,easeInOutQuint:ac,"ease-in-out-quint":ac,easeInSine:az,"ease-in-sine":az,easeOutSine:Q,"ease-out-sine":Q,easeInOutSine:aa,"ease-in-out-sine":aa,easeInExpo:V,"ease-in-expo":V,easeOutExpo:ab,"ease-out-expo":ab,easeInOutExpo:ak,"ease-in-out-expo":ak,easeInCirc:aq,"ease-in-circ":aq,easeOutCirc:ax,"ease-out-circ":ax,easeInOutCirc:T,"ease-in-out-circ":T,easeInBack:aj,"ease-in-back":aj,easeOutBack:al,"ease-out-back":al,easeInOutBack:ar,"ease-in-out-back":ar,easeInElastic:X,"ease-in-elastic":X,easeOutElastic:U,"ease-out-elastic":U,easeInOutElastic:ai,"ease-in-out-elastic":ai,easeInBounce:ao,"ease-in-bounce":ao,easeOutBounce:R,"ease-out-bounce":R,easeInOutBounce:P,"ease-in-out-bounce":P}
},{"../createBezier":111}],117:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":118}],118:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],119:[function(d,g,f){g.exports={PageVisibilityManager:d("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":120}],120:[function(o,m,i){var n=o("@marcom/ac-object/create");
var k=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;function j(){if(typeof document.addEventListener==="undefined"){return
}var a;if(typeof document.hidden!=="undefined"){this._hidden="hidden";a="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";a="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";a="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
a="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(a){document.addEventListener(a,this._handleVisibilityChange.bind(this),false)
}k.call(this)}var l=j.prototype=n(k.prototype);l.CHANGED="changed";l._handleVisibilityChange=function(a){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};m.exports=new j()},{"@marcom/ac-event-emitter-micro":117,"@marcom/ac-object/create":458}],121:[function(f,i,g){i.exports=h;
function h(b){var a=new Float32Array(16);a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];
a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];
a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}},{}],122:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(16);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;
a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a
}},{}],123:[function(f,i,g){i.exports=h;function h(b,v,z){var G=v[0],H=v[1],I=v[2],F=v[3],a=G+G,M=H+H,E=I+I,J=G*a,K=G*M,L=G*E,c=H*M,y=H*E,q=I*E,d=F*a,w=F*M,x=F*E;
b[0]=1-(c+q);b[1]=K+x;b[2]=L-w;b[3]=0;b[4]=K-x;b[5]=1-(J+q);b[6]=y+d;b[7]=0;b[8]=L+w;
b[9]=y-d;b[10]=1-(J+c);b[11]=0;b[12]=z[0];b[13]=z[1];b[14]=z[2];b[15]=1;return b
}},{}],124:[function(i,h,f){h.exports=g;function g(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;
a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;
a[15]=1;return a}},{}],125:[function(f,i,g){i.exports=h;function h(c,U){var L=U[0],P=U[1],S=U[2],Y=U[3],ag=U[4],ah=U[5],ai=U[6],aj=U[7],K=U[8],M=U[9],O=U[10],Q=U[11],b=U[12],d=U[13],N=U[14],W=U[15],R=L*ah-P*ag,T=L*ai-S*ag,V=L*aj-Y*ag,X=P*ai-S*ah,aa=P*aj-Y*ah,ab=S*aj-Y*ai,ac=K*d-M*b,ad=K*N-O*b,ae=K*W-Q*b,af=M*N-O*d,Z=M*W-Q*d,a=O*W-Q*N,ak=R*a-T*Z+V*af+X*ae-aa*ad+ab*ac;
if(!ak){return null}ak=1/ak;c[0]=(ah*a-ai*Z+aj*af)*ak;c[1]=(S*Z-P*a-Y*af)*ak;c[2]=(d*ab-N*aa+W*X)*ak;
c[3]=(O*aa-M*ab-Q*X)*ak;c[4]=(ai*ae-ag*a-aj*ad)*ak;c[5]=(L*a-S*ae+Y*ad)*ak;c[6]=(N*V-b*ab-W*T)*ak;
c[7]=(K*ab-O*V+Q*T)*ak;c[8]=(ag*Z-ah*ae+aj*ac)*ak;c[9]=(P*ae-L*Z-Y*ac)*ak;c[10]=(b*aa-d*V+W*R)*ak;
c[11]=(M*V-K*aa-Q*R)*ak;c[12]=(ah*ad-ag*af-ai*ac)*ak;c[13]=(L*af-P*ad+S*ac)*ak;
c[14]=(d*T-b*X-N*R)*ak;c[15]=(K*X-M*T+O*R)*ak;return c}},{}],126:[function(i,h,f){h.exports=g;
function g(G,C,F){var a=C[0],b=C[1],d=C[2],E=C[3],O=C[4],Q=C[5],S=C[6],U=C[7],I=C[8],K=C[9],L=C[10],M=C[11],H=C[12],J=C[13],c=C[14],D=C[15];
var N=F[0],P=F[1],R=F[2],T=F[3];G[0]=N*a+P*O+R*I+T*H;G[1]=N*b+P*Q+R*K+T*J;G[2]=N*d+P*S+R*L+T*c;
G[3]=N*E+P*U+R*M+T*D;N=F[4];P=F[5];R=F[6];T=F[7];G[4]=N*a+P*O+R*I+T*H;G[5]=N*b+P*Q+R*K+T*J;
G[6]=N*d+P*S+R*L+T*c;G[7]=N*E+P*U+R*M+T*D;N=F[8];P=F[9];R=F[10];T=F[11];G[8]=N*a+P*O+R*I+T*H;
G[9]=N*b+P*Q+R*K+T*J;G[10]=N*d+P*S+R*L+T*c;G[11]=N*E+P*U+R*M+T*D;N=F[12];P=F[13];
R=F[14];T=F[15];G[12]=N*a+P*O+R*I+T*H;G[13]=N*b+P*Q+R*K+T*J;G[14]=N*d+P*S+R*L+T*c;
G[15]=N*E+P*U+R*M+T*D;return G}},{}],127:[function(i,h,g){h.exports=f;function f(V,s,c,am){var ac=am[0],ad=am[1],ae=am[2],U=Math.sqrt(ac*ac+ad*ad+ae*ae),Q,x,S,a,b,d,t,af,ag,ah,ai,W,Y,aa,ab,T,X,Z,y,z,R,aj,ak,al;
if(Math.abs(U)<0.000001){return null}U=1/U;ac*=U;ad*=U;ae*=U;Q=Math.sin(c);x=Math.cos(c);
S=1-x;a=s[0];b=s[1];d=s[2];t=s[3];af=s[4];ag=s[5];ah=s[6];ai=s[7];W=s[8];Y=s[9];
aa=s[10];ab=s[11];T=ac*ac*S+x;X=ad*ac*S+ae*Q;Z=ae*ac*S-ad*Q;y=ac*ad*S-ae*Q;z=ad*ad*S+x;
R=ae*ad*S+ac*Q;aj=ac*ae*S+ad*Q;ak=ad*ae*S-ac*Q;al=ae*ae*S+x;V[0]=a*T+af*X+W*Z;V[1]=b*T+ag*X+Y*Z;
V[2]=d*T+ah*X+aa*Z;V[3]=t*T+ai*X+ab*Z;V[4]=a*y+af*z+W*R;V[5]=b*y+ag*z+Y*R;V[6]=d*y+ah*z+aa*R;
V[7]=t*y+ai*z+ab*R;V[8]=a*aj+af*ak+W*al;V[9]=b*aj+ag*ak+Y*al;V[10]=d*aj+ah*ak+aa*al;
V[11]=t*aj+ai*ak+ab*al;if(s!==V){V[12]=s[12];V[13]=s[13];V[14]=s[14];V[15]=s[15]
}return V}},{}],128:[function(i,h,g){h.exports=f;function f(A,t,u){var a=Math.sin(u),v=Math.cos(u),b=t[4],c=t[5],d=t[6],s=t[7],w=t[8],x=t[9],y=t[10],z=t[11];
if(t!==A){A[0]=t[0];A[1]=t[1];A[2]=t[2];A[3]=t[3];A[12]=t[12];A[13]=t[13];A[14]=t[14];
A[15]=t[15]}A[4]=b*v+w*a;A[5]=c*v+x*a;A[6]=d*v+y*a;A[7]=s*v+z*a;A[8]=w*v-b*a;A[9]=x*v-c*a;
A[10]=y*v-d*a;A[11]=z*v-s*a;return A}},{}],129:[function(i,h,f){h.exports=g;function g(w,b,c){var a=Math.sin(c),d=Math.cos(c),x=b[0],y=b[1],z=b[2],A=b[3],s=b[8],t=b[9],u=b[10],v=b[11];
if(b!==w){w[4]=b[4];w[5]=b[5];w[6]=b[6];w[7]=b[7];w[12]=b[12];w[13]=b[13];w[14]=b[14];
w[15]=b[15]}w[0]=x*d-s*a;w[1]=y*d-t*a;w[2]=z*d-u*a;w[3]=A*d-v*a;w[8]=x*a+s*d;w[9]=y*a+t*d;
w[10]=z*a+u*d;w[11]=A*a+v*d;return w}},{}],130:[function(i,h,f){h.exports=g;function g(w,t,u){var a=Math.sin(u),v=Math.cos(u),x=t[0],y=t[1],z=t[2],A=t[3],b=t[4],c=t[5],d=t[6],s=t[7];
if(t!==w){w[8]=t[8];w[9]=t[9];w[10]=t[10];w[11]=t[11];w[12]=t[12];w[13]=t[13];w[14]=t[14];
w[15]=t[15]}w[0]=x*v+b*a;w[1]=y*v+c*a;w[2]=z*v+d*a;w[3]=A*v+s*a;w[4]=b*v-x*a;w[5]=c*v-y*a;
w[6]=d*v-z*a;w[7]=s*v-A*a;return w}},{}],131:[function(f,i,g){i.exports=h;function h(c,l,d){var m=d[0],a=d[1],b=d[2];
c[0]=l[0]*m;c[1]=l[1]*m;c[2]=l[2]*m;c[3]=l[3]*m;c[4]=l[4]*a;c[5]=l[5]*a;c[6]=l[6]*a;
c[7]=l[7]*a;c[8]=l[8]*b;c[9]=l[9]*b;c[10]=l[10]*b;c[11]=l[11]*b;c[12]=l[12];c[13]=l[13];
c[14]=l[14];c[15]=l[15];return c}},{}],132:[function(f,i,g){i.exports=h;function h(v,c,D){var E=D[0],F=D[1],G=D[2],y,a,b,d,H,I,J,K,x,z,B,C;
if(c===v){v[12]=c[0]*E+c[4]*F+c[8]*G+c[12];v[13]=c[1]*E+c[5]*F+c[9]*G+c[13];v[14]=c[2]*E+c[6]*F+c[10]*G+c[14];
v[15]=c[3]*E+c[7]*F+c[11]*G+c[15]}else{y=c[0];a=c[1];b=c[2];d=c[3];H=c[4];I=c[5];
J=c[6];K=c[7];x=c[8];z=c[9];B=c[10];C=c[11];v[0]=y;v[1]=a;v[2]=b;v[3]=d;v[4]=H;
v[5]=I;v[6]=J;v[7]=K;v[8]=x;v[9]=z;v[10]=B;v[11]=C;v[12]=y*E+H*F+x*G+c[12];v[13]=a*E+I*F+z*G+c[13];
v[14]=b*E+J*F+B*G+c[14];v[15]=d*E+K*F+C*G+c[15]}return v}},{}],133:[function(f,i,g){i.exports=h;
function h(n,o){if(n===o){var a=o[1],c=o[2],d=o[3],q=o[6],b=o[7],p=o[11];n[1]=o[4];
n[2]=o[8];n[3]=o[12];n[4]=a;n[6]=o[9];n[7]=o[13];n[8]=c;n[9]=q;n[11]=o[14];n[12]=d;
n[13]=b;n[14]=p}else{n[0]=o[0];n[1]=o[4];n[2]=o[8];n[3]=o[12];n[4]=o[1];n[5]=o[5];
n[6]=o[9];n[7]=o[13];n[8]=o[2];n[9]=o[6];n[10]=o[10];n[11]=o[14];n[12]=o[3];n[13]=o[7];
n[14]=o[11];n[15]=o[15]}return n}},{}],134:[function(f,h,g){h.exports=i;function i(){var a=new Float32Array(3);
a[0]=0;a[1]=0;a[2]=0;return a}},{}],135:[function(f,i,g){i.exports=h;function h(r,c,d){var s=c[0],a=c[1],b=c[2],o=d[0],p=d[1],q=d[2];
r[0]=a*q-b*p;r[1]=b*o-s*q;r[2]=s*p-a*o;return r}},{}],136:[function(i,h,f){h.exports=g;
function g(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}},{}],137:[function(f,i,g){i.exports=h;
function h(d,a,b){var c=new Float32Array(3);c[0]=d;c[1]=a;c[2]=b;return c}},{}],138:[function(f,i,g){i.exports=h;
function h(c){var d=c[0],a=c[1],b=c[2];return Math.sqrt(d*d+a*a+b*b)}},{}],139:[function(i,h,f){h.exports=g;
function g(c,d){var l=d[0],a=d[1],b=d[2];var m=l*l+a*a+b*b;if(m>0){m=1/Math.sqrt(m);
c[0]=d[0]*m;c[1]=d[1]*m;c[2]=d[2]*m}return c}},{}],140:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a}},{}],141:[function(f,i,g){i.exports=h;
function h(k,a,b,d){var c=new Float32Array(4);c[0]=k;c[1]=a;c[2]=b;c[3]=d;return c
}},{}],142:[function(f,h,g){h.exports=i;function i(c,d,n){var o=d[0],a=d[1],b=d[2],m=d[3];
c[0]=n[0]*o+n[4]*a+n[8]*b+n[12]*m;c[1]=n[1]*o+n[5]*a+n[9]*b+n[13]*m;c[2]=n[2]*o+n[6]*a+n[10]*b+n[14]*m;
c[3]=n[3]*o+n[7]*a+n[11]*b+n[15]*m;return c}},{}],143:[function(d,g,f){g.exports={Transform:d("./ac-transform/Transform")}
},{"./ac-transform/Transform":144}],144:[function(ae,al,L){var af=ae("./gl-matrix/mat4");
var an=ae("./gl-matrix/vec3");var ao=ae("./gl-matrix/vec4");var ak=Math.PI/180;
var am=180/Math.PI;var Q=0,J=0,U=1,K=1,Y=2,I=3;var ag=4,M=4,ah=5,O=5,ai=6,aj=7;
var S=8,X=9,ab=10,ac=11;var N=12,P=12,R=13,T=13,W=14,aa=15;function Z(){this.m=af.create()
}var V=Z.prototype;V.rotateX=function(a){var b=ak*a;af.rotateX(this.m,this.m,b);
return this};V.rotateY=function(a){var b=ak*a;af.rotateY(this.m,this.m,b);return this
};V.rotateZ=function(a){var b=ak*a;af.rotateZ(this.m,this.m,b);return this};V.rotate=V.rotateZ;
V.rotate3d=function(c,f,a,b){if(f===null||f===undefined){f=c}if(a===null||f===undefined){a=c
}var d=ak*b;af.rotate(this.m,this.m,d,[c,f,a]);return this};V.rotateAxisAngle=V.rotate3d;
V.scale=function(a,b){b=b||a;af.scale(this.m,this.m,[a,b,1]);return this};V.scaleX=function(a){af.scale(this.m,this.m,[a,1,1]);
return this};V.scaleY=function(a){af.scale(this.m,this.m,[1,a,1]);return this};
V.scaleZ=function(a){af.scale(this.m,this.m,[1,1,a]);return this};V.scale3d=function(a,b,c){af.scale(this.m,this.m,[a,b,c]);
return this};V.skew=function(a,b){if(b===null||b===undefined){return this.skewX(a)
}a=ak*a;b=ak*b;var c=af.create();c[M]=Math.tan(a);c[K]=Math.tan(b);af.multiply(this.m,this.m,c);
return this};V.skewX=function(a){a=ak*a;var b=af.create();b[M]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.skewY=function(a){a=ak*a;var b=af.create();b[K]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.translate=function(a,b){b=b||0;af.translate(this.m,this.m,[a,b,0]);
return this};V.translate3d=function(b,c,a){af.translate(this.m,this.m,[b,c,a]);
return this};V.translateX=function(a){af.translate(this.m,this.m,[a,0,0]);return this
};V.translateY=function(a){af.translate(this.m,this.m,[0,a,0]);return this};V.translateZ=function(a){af.translate(this.m,this.m,[0,0,a]);
return this};V.perspective=function(a){var b=af.create();if(a!==0){b[ac]=-1/a}af.multiply(this.m,this.m,b)
};V.inverse=function(){var a=this.clone();a.m=af.invert(a.m,this.m);return a};V.reset=function(){af.identity(this.m);
return this};V.getTranslateXY=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T]]
}return[a[N],a[R]]};V.getTranslateXYZ=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T],0]
}return[a[N],a[R],a[W]]};V.getTranslateX=function(){var a=this.m;if(this.isAffine()){return a[P]
}return a[N]};V.getTranslateY=function(){var a=this.m;if(this.isAffine()){return a[T]
}return a[R]};V.getTranslateZ=function(){var a=this.m;if(this.isAffine()){return 0
}return a[W]};V.clone=function(){var a=new Z();a.m=af.clone(this.m);return a};V.toArray=function(){var a=this.m;
if(this.isAffine()){return[a[J],a[K],a[M],a[O],a[P],a[T]]}return[a[Q],a[U],a[Y],a[I],a[ag],a[ah],a[ai],a[aj],a[S],a[X],a[ab],a[ac],a[N],a[R],a[W],a[aa]]
};V.fromArray=function(a){this.m=Array.prototype.slice.call(a);return this};V.setMatrixValue=function(c){c=String(c).trim();
var d=af.create();if(c==="none"){this.m=d;return this}var a=c.slice(0,c.indexOf("(")),f,b;
if(a==="matrix3d"){f=c.slice(9,-1).split(",");for(b=0;b<f.length;b++){d[b]=parseFloat(f[b])
}}else{if(a==="matrix"){f=c.slice(7,-1).split(",");for(b=f.length;b--;){f[b]=parseFloat(f[b])
}d[Q]=f[0];d[U]=f[1];d[N]=f[4];d[ag]=f[2];d[ah]=f[3];d[R]=f[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=d;return this};var ad=function(a){return Math.abs(a)<0.0001};V.decompose=function(h){h=h||false;
var c=af.clone(this.m);var m=an.create();var v=an.create();var p=an.create();var k=ao.create();
var r=ao.create();var q=an.create();for(var a=0;a<16;a++){c[a]/=c[aa]}var f=af.clone(c);
f[I]=0;f[aj]=0;f[ac]=0;f[aa]=1;var y=c[3],o=c[7],l=c[11],t=c[12],u=c[13],w=c[14],x=c[15];
var i=ao.create();if(!ad(c[I])||!ad(c[aj])||!ad(c[ac])){i[0]=c[I];i[1]=c[aj];i[2]=c[ac];
i[3]=c[aa];var b=af.invert(af.create(),f);var j=af.transpose(af.create(),b);k=ao.transformMat4(k,i,j)
}else{k=ao.fromValues(0,0,0,1)}m[0]=t;m[1]=u;m[2]=w;var n=[an.create(),an.create(),an.create()];
n[0][0]=c[0];n[0][1]=c[1];n[0][2]=c[2];n[1][0]=c[4];n[1][1]=c[5];n[1][2]=c[6];n[2][0]=c[8];
n[2][1]=c[9];n[2][2]=c[10];v[0]=an.length(n[0]);an.normalize(n[0],n[0]);p[0]=an.dot(n[0],n[1]);
n[1]=this._combine(n[1],n[0],1,-p[0]);v[1]=an.length(n[1]);an.normalize(n[1],n[1]);
p[0]/=v[1];p[1]=an.dot(n[0],n[2]);n[2]=this._combine(n[2],n[0],1,-p[1]);p[2]=an.dot(n[1],n[2]);
n[2]=this._combine(n[2],n[1],1,-p[2]);v[2]=an.length(n[2]);an.normalize(n[2],n[2]);
p[1]/=v[2];p[2]/=v[2];var d=an.cross(an.create(),n[1],n[2]);if(an.dot(n[0],d)<0){for(a=0;
a<3;a++){v[a]*=-1;n[a][0]*=-1;n[a][1]*=-1;n[a][2]*=-1}}r[0]=0.5*Math.sqrt(Math.max(1+n[0][0]-n[1][1]-n[2][2],0));
r[1]=0.5*Math.sqrt(Math.max(1-n[0][0]+n[1][1]-n[2][2],0));r[2]=0.5*Math.sqrt(Math.max(1-n[0][0]-n[1][1]+n[2][2],0));
r[3]=0.5*Math.sqrt(Math.max(1+n[0][0]+n[1][1]+n[2][2],0));if(n[2][1]>n[1][2]){r[0]=-r[0]
}if(n[0][2]>n[2][0]){r[1]=-r[1]}if(n[1][0]>n[0][1]){r[2]=-r[2]}var s=ao.fromValues(r[0],r[1],r[2],2*Math.acos(r[3]));
var g=this._rotationFromQuat(r);if(h){p[0]=Math.round(p[0]*am*100)/100;p[1]=Math.round(p[1]*am*100)/100;
p[2]=Math.round(p[2]*am*100)/100;g[0]=Math.round(g[0]*am*100)/100;g[1]=Math.round(g[1]*am*100)/100;
g[2]=Math.round(g[2]*am*100)/100;s[3]=Math.round(s[3]*am*100)/100}return{translation:m,scale:v,skew:p,perspective:k,quaternion:r,eulerRotation:g,axisAngle:s}
};V.recompose=function(f,g,b,a,h){f=f||an.create();g=g||an.create();b=b||an.create();
a=a||ao.create();h=h||ao.create();var c=af.fromRotationTranslation(af.create(),h,f);
c[I]=a[0];c[aj]=a[1];c[ac]=a[2];c[aa]=a[3];var d=af.create();if(b[2]!==0){d[X]=b[2];
af.multiply(c,c,d)}if(b[1]!==0){d[X]=0;d[S]=b[1];af.multiply(c,c,d)}if(b[0]){d[S]=0;
d[4]=b[0];af.multiply(c,c,d)}af.scale(c,c,g);this.m=c;return this};V.isAffine=function(){return(this.m[Y]===0&&this.m[I]===0&&this.m[ai]===0&&this.m[aj]===0&&this.m[S]===0&&this.m[X]===0&&this.m[ab]===1&&this.m[ac]===0&&this.m[W]===0&&this.m[aa]===1)
};V.toString=function(){var a=this.m;if(this.isAffine()){return"matrix("+a[J]+", "+a[K]+", "+a[M]+", "+a[O]+", "+a[P]+", "+a[T]+")"
}return"matrix3d("+a[Q]+", "+a[U]+", "+a[Y]+", "+a[I]+", "+a[ag]+", "+a[ah]+", "+a[ai]+", "+a[aj]+", "+a[S]+", "+a[X]+", "+a[ab]+", "+a[ac]+", "+a[N]+", "+a[R]+", "+a[W]+", "+a[aa]+")"
};V.toCSSString=V.toString;V._combine=function(c,f,a,b){var d=an.create();d[0]=(a*c[0])+(b*f[0]);
d[1]=(a*c[1])+(b*f[1]);d[2]=(a*c[2])+(b*f[2]);return d};V._matrix2dToMat4=function(d){var b=af.create();
for(var a=0;a<4;a++){for(var c=0;c<4;c++){b[a*4+c]=d[a][c]}}return b};V._mat4ToMatrix2d=function(a){var d=[];
for(var b=0;b<4;b++){d[b]=[];for(var c=0;c<4;c++){d[b][c]=a[b*4+c]}}return d};V._rotationFromQuat=function(k){var g=k[3]*k[3];
var h=k[0]*k[0];var i=k[1]*k[1];var j=k[2]*k[2];var a=h+i+j+g;var f=k[0]*k[1]+k[2]*k[3];
var b,c,d;if(f>0.499*a){c=2*Math.atan2(k[0],k[3]);d=Math.PI/2;b=0;return an.fromValues(b,c,d)
}if(f<-0.499*a){c=-2*Math.atan2(k[0],k[3]);d=-Math.PI/2;b=0;return an.fromValues(b,c,d)
}c=Math.atan2(2*k[1]*k[3]-2*k[0]*k[2],h-i-j+g);d=Math.asin(2*f/a);b=Math.atan2(2*k[0]*k[3]-2*k[1]*k[2],-h+i-j+g);
return an.fromValues(b,c,d)};al.exports=Z},{"./gl-matrix/mat4":145,"./gl-matrix/vec3":146,"./gl-matrix/vec4":147}],145:[function(i,h,g){var f={create:i("gl-mat4/create"),rotate:i("gl-mat4/rotate"),rotateX:i("gl-mat4/rotateX"),rotateY:i("gl-mat4/rotateY"),rotateZ:i("gl-mat4/rotateZ"),scale:i("gl-mat4/scale"),multiply:i("gl-mat4/multiply"),translate:i("gl-mat4/translate"),invert:i("gl-mat4/invert"),clone:i("gl-mat4/clone"),transpose:i("gl-mat4/transpose"),identity:i("gl-mat4/identity"),fromRotationTranslation:i("gl-mat4/fromRotationTranslation")};
h.exports=f},{"gl-mat4/clone":121,"gl-mat4/create":122,"gl-mat4/fromRotationTranslation":123,"gl-mat4/identity":124,"gl-mat4/invert":125,"gl-mat4/multiply":126,"gl-mat4/rotate":127,"gl-mat4/rotateX":128,"gl-mat4/rotateY":129,"gl-mat4/rotateZ":130,"gl-mat4/scale":131,"gl-mat4/translate":132,"gl-mat4/transpose":133}],146:[function(f,h,g){var i={create:f("gl-vec3/create"),dot:f("gl-vec3/dot"),normalize:f("gl-vec3/normalize"),length:f("gl-vec3/length"),cross:f("gl-vec3/cross"),fromValues:f("gl-vec3/fromValues")};
h.exports=i},{"gl-vec3/create":134,"gl-vec3/cross":135,"gl-vec3/dot":136,"gl-vec3/fromValues":137,"gl-vec3/length":138,"gl-vec3/normalize":139}],147:[function(i,h,g){var f={create:i("gl-vec4/create"),transformMat4:i("gl-vec4/transformMat4"),fromValues:i("gl-vec4/fromValues")};
h.exports=f},{"gl-vec4/create":140,"gl-vec4/fromValues":141,"gl-vec4/transformMat4":142}],148:[function(p,r,o){p("./helpers/Float32Array");
var s=p("./helpers/transitionEnd");var n=p("@marcom/ac-clip").Clip;var l=p("./clips/ClipEasing");
var q=p("./clips/ClipInlineCss");var m=p("./clips/ClipTransitionCss");function t(d,a,c,b){if(d.nodeType){if(s===undefined||(b&&b.inlineStyles)){return new q(d,a,c,b)
}return new m(d,a,c,b)}return new l(d,a,c,b)}for(var u in n){if(typeof n[u]==="function"&&u.substr(0,1)!=="_"){t[u]=n[u].bind(n)
}}t.to=function(d,a,c,b){b=b||{};if(b.destroyOnComplete===undefined){b.destroyOnComplete=true
}return new t(d,a,c,b).play()};t.from=function(c,d,b,a){a=a||{};a.propsFrom=b;if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new t(c,d,a.propsTo,a).play()};r.exports=t},{"./clips/ClipEasing":151,"./clips/ClipInlineCss":152,"./clips/ClipTransitionCss":153,"./helpers/Float32Array":156,"./helpers/transitionEnd":165,"@marcom/ac-clip":87}],149:[function(d,g,f){g.exports=d("./timeline/Timeline")
},{"./timeline/Timeline":167}],150:[function(d,g,f){g.exports={Clip:d("./Clip"),Timeline:d("./Timeline")}
},{"./Clip":148,"./Timeline":149}],151:[function(z,A,y){var r=z("@marcom/ac-object/clone");
var v=z("@marcom/ac-object/create");var o=z("@marcom/ac-easing").createPredefined;
var q=z("../helpers/isCssCubicBezierString");var w=z("../helpers/BezierCurveCssManager");
var t=z("@marcom/ac-clip").Clip;var s=z("@marcom/ac-easing").Ease;function p(b,c,a,d){if(d&&q(d.ease)){d.ease=w.create(d.ease).toEasingFunction()
}d=d||{};this._propsEase=d.propsEase||{};t.call(this,b,c,a,d)}var u=t.prototype;
var x=p.prototype=v(u);x.reset=function(){var a=u.reset.call(this);if(this._clips){var b=this._clips.length;
while(b--){this._clips[b].reset()}}return a};x.destroy=function(){if(this._clips){var a=this._clips.length;
while(a--){this._clips[a].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return u.destroy.call(this)};x._prepareProperties=function(){var i=0;var f={};var h={};
var d={};var a;var b;if(this._propsEase){for(a in this._propsTo){if(this._propsTo.hasOwnProperty(a)){b=this._propsEase[a];
if(q(b)){b=w.create(b).toEasingFunction()}if(b===undefined){if(f[this._ease]===undefined){f[this._ease]={};
h[this._ease]={};d[this._ease]=this._ease.easingFunction;i++}f[this._ease][a]=this._propsTo[a];
h[this._ease][a]=this._propsFrom[a]}else{if(typeof b==="function"){f[i]={};h[i]={};
f[i][a]=this._propsTo[a];h[i][a]=this._propsFrom[a];d[i]=b;i++}else{if(f[b]===undefined){f[b]={};
h[b]={};d[b]=b;i++}f[b][a]=this._propsTo[a];h[b][a]=this._propsFrom[a]}}}}if(i>1){var g=r(this._options||{},true);
var c=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
g.onStart=null;g.onUpdate=null;g.onDraw=null;g.onComplete=null;this._clips=[];for(b in f){if(f.hasOwnProperty(b)){g.ease=d[b];
g.propsFrom=h[b];this._clips.push(new t(this._target,c,f[b],g))}}b="linear";this._propsTo={};
this._propsFrom={}}else{for(a in d){if(d.hasOwnProperty(a)){b=d[a]}}}if(b!==undefined){this._ease=(typeof b==="function")?new s(b):o(b)
}}return u._prepareProperties.call(this)};x._onUpdateClips=function(a){var c=(this._direction===1)?a.progress():1-a.progress();
var b=this._clips.length;while(b--){this._clips[b].progress(c)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};A.exports=p},{"../helpers/BezierCurveCssManager":155,"../helpers/isCssCubicBezierString":161,"@marcom/ac-clip":87,"@marcom/ac-easing":109,"@marcom/ac-object/clone":457,"@marcom/ac-object/create":458}],152:[function(u,w,t){var o=u("@marcom/ac-dom-styles/setStyle");
var x=u("../helpers/convertToStyleObject");var v=u("../helpers/convertToTransitionableObjects");
var r=u("@marcom/ac-object/create");var q=u("../helpers/removeTransitions");var n=u("./ClipEasing");
function y(b,c,a,d){d=d||{};this._el=b;this._storeOnStart=d.onStart||null;this._storeOnDraw=d.onDraw||null;
this._storeOnComplete=d.onComplete||null;d.onStart=this._onStart;d.onDraw=this._onDraw;
d.onComplete=this._onComplete;n.call(this,{},c,a,d)}var p=n.prototype;var s=y.prototype=r(p);
s.play=function(){var a=p.play.call(this);if(this._remainingDelay!==0){o(this._el,x(this._target))
}return a};s.reset=function(){var a=p.reset.call(this);o(this._el,x(this._target));
return a};s.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return p.destroy.call(this)};
s.target=function(){return this._el};s._prepareProperties=function(){var b=v(this._el,this._propsTo,this._propsFrom);
this._target=b.target;this._propsFrom=b.propsFrom;this._propsTo=b.propsTo;q(this._el,this._target);
var d=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=x(d);if(this._options.removeStylesOnComplete!==undefined){var a;
var c=this._options.removeStylesOnComplete;if(typeof c==="boolean"&&c){for(a in this._completeStyles){if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}else{if(typeof c==="object"&&c.length){var f=c.length;while(f--){a=c[f];if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}}}return p._prepareProperties.call(this)};s._onStart=function(a){if(this.playing()&&this._direction===1&&this._delay===0){o(this._el,x(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
s._onDraw=function(a){o(this._el,x(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};s._onComplete=function(a){o(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};w.exports=y},{"../helpers/convertToStyleObject":158,"../helpers/convertToTransitionableObjects":159,"../helpers/removeTransitions":162,"./ClipEasing":151,"@marcom/ac-dom-styles/setStyle":71,"@marcom/ac-object/create":458}],153:[function(N,V,z){var T=N("@marcom/ac-dom-styles/setStyle");
var S=N("@marcom/ac-dom-styles/getStyle");var U=N("../helpers/convertToStyleObject");
var I=N("../helpers/convertToTransitionableObjects");var A=N("@marcom/ac-object/clone");
var K=N("@marcom/ac-object/create");var D=N("@marcom/ac-easing").createPredefined;
var L=N("../helpers/isCssCubicBezierString");var C=N("../helpers/removeTransitions");
var O=N("../helpers/transitionEnd");var J=N("../helpers/waitAnimationFrames");var B=N("../helpers/BezierCurveCssManager");
var W=N("@marcom/ac-clip").Clip;var F=N("./ClipEasing");var E=N("@marcom/ac-page-visibility").PageVisibilityManager;
var R="ease";var P="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var M="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function Q(d,a,c,b){b=b||{};this._el=d;this._storeEase=b.ease;if(typeof this._storeEase==="function"){throw new Error(M)
}this._storeOnStart=b.onStart||null;this._storeOnComplete=b.onComplete||null;b.onStart=this._onStart.bind(this);
b.onComplete=this._onComplete.bind(this);this._stylesTo=A(c,true);this._stylesFrom=(b.propsFrom)?A(b.propsFrom,true):{};
this._propsEase=(b.propsEase)?A(b.propsEase,true):{};if(L(b.ease)){b.ease=B.create(b.ease).toEasingFunction()
}W.call(this,{},a,{},b);this._propsFrom={}}var H=W.prototype;var G=Q.prototype=K(H);
G.play=function(){var a=H.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,U(this._stylesFrom))
}return a};G.reset=function(){var a=H.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,U(this._styles));return a};G.destroy=function(){E.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return H.destroy.call(this)};G.target=function(){return this._el};G.duration=function(a){var b=H.duration.call(this,a);
if(a===undefined){return b}if(this.playing()){this.progress(this._progress)}return b
};G.progress=function(b){var a=H.progress.call(this,b);if(b===undefined){return a
}b=(this._direction===1)?b:1-b;this._stylesClip.progress(b);this._applyStyles(0,U(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;J(this._setStylesAfterWaiting,2)
}return a};G._prepareProperties=function(){var g=I(this._el,this._stylesTo,this._stylesFrom);
this._styles=g.target;this._stylesTo=g.propsTo;this._stylesFrom=g.propsFrom;var f=this._storeEase||R;
this._eases={};this._propsArray=[];var b;this._styleCompleteTo=U(this._stylesTo);
this._styleCompleteFrom=U(this._stylesFrom);this._propsEaseKeys={};var c;for(c in this._stylesTo){if(this._stylesTo.hasOwnProperty(c)){this._propsArray[this._propsArray.length]=c;
if(this._propsEase[c]===undefined){if(this._eases[f]===undefined){b=this._convertEase(f);
this._eases[f]=b.css}this._propsEaseKeys[c]=f}else{if(this._eases[this._propsEase[c]]===undefined){b=this._convertEase(this._propsEase[c]);
this._eases[this._propsEase[c]]=b.css;this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=b.js}else{if(L(this._propsEase[c])){this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=this._eases[this._propsEase[c]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=U((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var a=this._options.removeStylesOnComplete;
if(typeof a==="boolean"&&a){for(c in this._stylesTo){this._completeStyles[c]=null
}}else{if(typeof a==="object"&&a.length){var d=a.length;while(d--){this._completeStyles[a[d]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);E.on(E.CHANGED,this._onVisibilityChanged);
this._stylesClip=new F(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
W._remove(this._stylesClip);return H._prepareProperties.call(this)};G._convertEase=function(d){if(typeof d==="function"){throw new Error(M)
}var c;var a;if(L(d)){c=B.create(d);a=c.toEasingFunction()}else{var b=D(d);if(b.cssString===null){throw new Error(P.replace(/%EASE%/g,d))
}c=B.create(b.cssString);a=d}return{css:{"1":c,"-1":c.reversed()},js:a}};G._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
H._complete.call(this)}};G._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};G._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(O,this._onTransitionEnded)
}};G._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(O,this._onTransitionEnded)
}};G._applyStyles=function(f,d){if(f>0){var c="";var a={};var b;for(b in this._eases){if(this._eases.hasOwnProperty(b)){a[b]=this._eases[b][this._direction].splitAt(this.progress()).toCSSString()
}}for(b in this._stylesTo){if(this._stylesTo.hasOwnProperty(b)){c+=b+" "+f+"ms "+a[this._propsEaseKeys[b]]+" 0ms, "
}}this._currentTransitionStyles=c.substr(0,c.length-2);if(!this._doStylesMatchCurrentStyles(d)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}d.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
T(this._el,d)};G._doStylesMatchCurrentStyles=function(c){var a=S.apply(this,[this._el].concat([this._propsArray]));
var b;for(b in c){if(c.hasOwnProperty(b)&&a.hasOwnProperty(b)&&c[b]!==a[b]){return false
}}return true};G._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var a=this._durationMs*(1-this.progress());var b=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(a,b)}};G._setOtherTransitions=function(){C(this._el,this._stylesTo);
var b=W.getAll(this._el);var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._otherTransitions&&b[a]._otherTransitions.length){this._otherTransitions=b[a]._otherTransitions;
return}}this._otherTransitions=S(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};G._getTransitionStyles=function(){var a=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){a+=this._otherTransitions}else{if(a.length){a=a.substr(0,a.length-2)
}}return a};G._getOtherClipTransitionStyles=function(){var c="";var b=W.getAll(this._el);
var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._currentTransitionStyles&&b[a]._currentTransitionStyles.length){c+=b[a]._currentTransitionStyles+", "
}}return c};G._onVisibilityChanged=function(b){if(this.playing()&&!b.isHidden){this._update({timeNow:this._getTime()});
var a=this.progress();if(a<1){this.progress(a)}}};G._onPaused=function(a){var b=S.apply(this,[this._el].concat([this._propsArray]));
b.transition=this._getTransitionStyles();this._removeTransitionListener();T(this._el,b)
};G._onStart=function(b){var a=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(a){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}J(this._setStylesAfterWaiting,a);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};G._onComplete=function(a){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
T(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};V.exports=Q},{"../helpers/BezierCurveCssManager":155,"../helpers/convertToStyleObject":158,"../helpers/convertToTransitionableObjects":159,"../helpers/isCssCubicBezierString":161,"../helpers/removeTransitions":162,"../helpers/transitionEnd":165,"../helpers/waitAnimationFrames":166,"./ClipEasing":151,"@marcom/ac-clip":87,"@marcom/ac-dom-styles/getStyle":69,"@marcom/ac-dom-styles/setStyle":71,"@marcom/ac-easing":109,"@marcom/ac-object/clone":457,"@marcom/ac-object/create":458,"@marcom/ac-page-visibility":119}],154:[function(m,l,i){var j=m("@marcom/ac-easing").createBezier;
function h(a,b){this.manager=b;this.p1={x:a[0],y:a[1]};this.p2={x:a[2],y:a[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var k=h.prototype;k.splitAt=function(t){if(this._isLinear){return this}t=Math.round(t*40)/40;
if(t===0){return this}else{if(this._cacheSplits[t]!==undefined){return this._cacheSplits[t]
}}var b=[this.p1.x,this.p2.x];var f=[this.p1.y,this.p2.y];var g=0;var d=t;var v=0;
var c=1;var u=this._getStartX(t,b);while(d!==u&&g<1000){if(d<u){c=t}else{v=t}t=v+((c-v)*0.5);
u=this._getStartX(t,b);++g}var s=this._splitBezier(t,b,f);var a=this._normalize(s);
var w=this.manager.create(a);this._cacheSplits[d]=w;return w};k.reversed=function(){var a=this.toArray();
return this.manager.create([0.5-(a[2]-0.5),0.5-(a[3]-0.5),0.5-(a[0]-0.5),0.5-(a[1]-0.5)])
};k.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};k.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};k.toEasingFunction=function(){return j.apply(this,this.toArray()).easingFunction
};k._getStartX=function(a,g){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return f-3*c*b*g[1]+3*a*d*g[0]
};k._splitBezier=function(a,g,o){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return[f-3*c*b*g[1]+3*a*d*g[0],f-3*c*b*o[1]+3*a*d*o[0],c-2*a*b*g[1]+d*g[0],c-2*a*b*o[1]+d*o[0],a-b*g[1],a-b*o[1]]
};k._normalize=function(a){return[(a[2]-a[0])/(1-a[0]),(a[3]-a[1])/(1-a[1]),(a[4]-a[0])/(1-a[0]),(a[5]-a[1])/(1-a[1])]
};l.exports=h},{"@marcom/ac-easing":109}],155:[function(m,l,i){var h=m("./BezierCurveCss");
function j(){this._instances={}}var k=j.prototype;k.create=function(a){var b;if(typeof a==="string"){b=a.replace(/ /g,"")
}else{b="cubic-bezier("+a.join(",")+")"}if(this._instances[b]===undefined){if(typeof a==="string"){a=a.match(/\d*\.?\d+/g);
var c=a.length;while(c--){a[c]=Number(a[c])}}this._instances[b]=new h(a,this)}return this._instances[b]
};l.exports=new j()},{"./BezierCurveCss":154}],156:[function(d,g,f){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],157:[function(o,n,p){var k=o("@marcom/ac-dom-metrics/getDimensions");var q=o("./splitUnits");
var j={translateX:"width",translateY:"height"};function l(d,b,a){this._transform=d;
var c;var g;var f;for(f in a){if(a.hasOwnProperty(f)&&typeof this._transform[f]==="function"){c=q(a[f]);
if(c.unit==="%"){g=this._convertPercentToPixelValue(f,c.value,b)}else{g=c.value
}this._transform[f].call(this._transform,g)}}}var m=l.prototype;m._convertPercentToPixelValue=function(a,b,c){a=j[a];
var d=k(c);if(d[a]){b*=0.01;return d[a]*b}return b};m.toArray=function(){return this._transform.toArray()
};m.toCSSString=function(){return this._transform.toCSSString()};n.exports=l},{"./splitUnits":163,"@marcom/ac-dom-metrics/getDimensions":21}],158:[function(f,i,g){i.exports=function h(b){var c={};
var d;var a;for(a in b){if(b.hasOwnProperty(a)&&b[a]!==null){if(b[a].isColor){if(b[a].isRgb){c[a]="rgb("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+")"
}else{if(b[a].isRgba){c[a]="rgba("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+", "+b[a].a+")"
}}}else{if(a==="transform"){d=(b[a].length===6)?"matrix":"matrix3d";c[a]=d+"("+b[a].join(",")+")"
}else{if(!b[a].unit){c[a]=b[a].value}else{c[a]=b[a].value+b[a].unit}}}}}return c
}},{}],159:[function(C,F,A){var x=C("@marcom/ac-dom-styles/getStyle");var v=C("@marcom/ac-object/clone");
var E=C("./splitUnits");var H=C("./toCamCase");var G=C("@marcom/ac-color").Color;
var y=C("@marcom/ac-feature/cssPropertyAvailable");var B=C("@marcom/ac-transform").Transform;
var I=C("./TransformMatrix");var w=function(a){if(G.isRgba(a)){a=new G(a).rgbaObject();
a.isRgba=true}else{a=new G(a).rgbObject();a.isRgb=true}a.isColor=true;return a};
var s=function(a){if(a.isRgb){a.isRgb=false;a.isRgba=true;a.a=1}};var t=function(b,c,a){if(b.isRgba||c.isRgba||a.isRgba){s(b);
s(c);s(a)}};var u=function(a){return[a[0],a[1],0,0,a[2],a[3],0,0,0,0,1,0,a[4],a[5],0,1]
};var z=function(b,c,a){if(b.transform.length===16||c.transform.length===16||a.transform.length===16){if(b.transform.length===6){b.transform=u(b.transform)
}if(c.transform.length===6){c.transform=u(c.transform)}if(a.transform.length===6){a.transform=u(a.transform)
}}};F.exports=function D(i,b,c){var g={};b=v(b,true);c=v(c,true);var j;var a;var f;
var d;var h=y("transform");var k;for(k in b){if(b.hasOwnProperty(k)&&b[k]!==null){if(k==="transform"){if(h){a=new B();
j=x(i,"transform")["transform"]||"none";a.setMatrixValue(j);f=new I(new B(),i,b[k])
}if(f&&f.toCSSString()!==a.toCSSString()){d=new I(c[k]?new B():a.clone(),i,c[k]);
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null}}else{j=x(i,k)[H(k)]||c[k];
if(G.isColor(j)){g[k]=w(j);c[k]=(c[k]!==undefined)?w(c[k]):v(g[k],true);b[k]=w(b[k])
}else{g[k]=E(j);c[k]=(c[k]!==undefined)?E(c[k]):v(g[k],true);b[k]=E(b[k])}}}}for(k in c){if(c.hasOwnProperty(k)&&c[k]!==null&&(b[k]===undefined||b[k]===null)){if(k==="transform"){if(h){a=new B();
a.setMatrixValue(getComputedStyle(i).transform||getComputedStyle(i).webkitTransform||"none");
d=new I(new B(),i,c[k])}if(d&&d.toCSSString()!==a.toCSSString()){f=new I(a.clone());
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null;c[k]=null
}}else{j=x(i,k)[H(k)];if(G.isColor(j)){g[k]=w(j);b[k]=v(g[k],true);c[k]=w(c[k])
}else{g[k]=E(j);c[k]=E(c[k]);b[k]=v(g[k],true)}}}if(g[k]&&g[k].isColor){t(g[k],c[k],b[k])
}}if(g.transform){z(g,c,b)}return{target:g,propsTo:b,propsFrom:c}}},{"./TransformMatrix":157,"./splitUnits":163,"./toCamCase":164,"@marcom/ac-color":89,"@marcom/ac-dom-styles/getStyle":69,"@marcom/ac-feature/cssPropertyAvailable":222,"@marcom/ac-object/clone":457,"@marcom/ac-transform":143}],160:[function(f,i,g){i.exports=function h(d){if(d.transitionProperty){var a="";
var n=d.transitionProperty.split(", ");var c=d.transitionDuration.split(", ");var b=d.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(j){return j.substr(0,j.length-1)
}).split(", ");var p=d.transitionDelay.split(", ");var o=n.length;while(o--){a+=n[o]+" "+c[o]+" "+b[o]+" "+p[o]+", "
}return a.substr(0,a.length-2)}return false}},{}],161:[function(i,h,f){h.exports=function g(a){return typeof a==="string"&&a.substr(0,13)==="cubic-bezier("
}},{}],162:[function(n,m,o){var k=n("@marcom/ac-dom-styles/setStyle");var j=n("@marcom/ac-dom-styles/getStyle");
var l=n("./getShorthandTransition");m.exports=function i(b,g){var a=j(b,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
a=a.transition||l(a);if(a&&a.length){a=a.split(",");var c=0;var f;var d=a.length;
while(d--){f=a[d].trim().split(" ")[0];if(g[f]!==undefined){a.splice(d,1);++c}}if(c){if(a.length===0){a=["all"]
}k(b,{transition:a.join(",").trim()})}}}},{"./getShorthandTransition":160,"@marcom/ac-dom-styles/getStyle":69,"@marcom/ac-dom-styles/setStyle":71}],163:[function(i,h,f){h.exports=function g(a){a=String(a);
if(a.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var b=/(\d*\.?\d*)(.*)/;var d=1;if(a&&a.substr(0,1)==="-"){a=a.substr(1);d=-1}var c=String(a).match(b);
return{value:Number(c[1])*d,unit:c[2]}}},{}],164:[function(i,h,f){h.exports=function g(a){var b=function(l,d,c,m){return(c===0)&&(m.substr(1,3)!=="moz")?d:d.toUpperCase()
};return a.replace(/-(\w)/g,b)}},{}],165:[function(j,i,k){var h;i.exports=(function g(){if(h){return h
}var c;var b=document.createElement("fakeelement");var a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(c in a){if(b.style[c]!==undefined){h=a[c];return h}}})()},{}],166:[function(j,i,g){var h=j("@marcom/ac-page-visibility").PageVisibilityManager;
i.exports=function k(a,c){if(c){var b=function(m){if(h.isHidden){setTimeout(m,16)
}else{window.requestAnimationFrame(m)}};var d=0;var f=function(){if(d===c){a.call(this)
}else{++d;b(f)}};f()}else{a.call(this)}}},{"@marcom/ac-page-visibility":119}],167:[function(u,w,t){var q=u("@marcom/ac-object/create");
var p=u("@marcom/ac-clip").Clip;var s=u("./TimelineClip");var v=u("./TimelineCallback");
var m=u("./TimelineItemList");var n=p.prototype;function o(a){a=a||{};a.ease=a.ease||"linear";
a.destroyOnComplete=false;this.options=a;p.call(this,{t:0},0,{t:1},a);this._itemList=new m()
}var r=o.prototype=q(n);o.prototype.constructor=o;r._update=function(a){n._update.call(this,a);
this._render()};r.progress=function(a){n.progress.call(this,a);if(a!==undefined){this._render()
}return this._progress};r._render=function(){if(this._itemList.length===0){return
}var b=this._target.t*this._duration;var a=this._itemList.head;var d=a;while(d){d=a.next;
var c=(b-a.position);a.currentTime(c);a=d}};r.addClip=function(b,c){c=(c===undefined)?this.duration():c;
var a=b._delay/1000;this._itemList.append(new s(b,c+a));this._updateDuration()};
r.addCallback=function(b,a){a=(a===undefined)?this.duration():a;this._itemList.append(new v(b,a));
this._updateDuration()};r.remove=function(a){var b=this._itemList.getItem(a);if(b){this._itemList.remove(b);
this._updateDuration()}};r._updateDuration=function(){var a=this._itemList.head;
var b=a.position+a.duration();this._itemList.forEach(function(c){var d=c.position+c.duration();
if(d>=b){a=c;b=d}});this.duration(b)};r.destroy=function(){var a=this._itemList.head;
while(a){var b=a;a=b.next;this._itemList.remove(b)}this._duration=0;return n.destroy.call(this)
};w.exports=o},{"./TimelineCallback":168,"./TimelineClip":169,"./TimelineItemList":170,"@marcom/ac-clip":87,"@marcom/ac-object/create":458}],168:[function(g,k,h){function i(a,b){this.callback=a;
this._delay=0;this.position=b;this._hasTriggered=false;this.prev=null;this.next=null
}var j=i.prototype;j.duration=function(){return 0};j.currentTime=function(a){if(a>=0&&!this._hasTriggered){this.callback();
this._hasTriggered=true}if(a<0&&this._hasTriggered){this.callback();this._hasTriggered=false
}return 0};k.exports=i},{}],169:[function(g,k,h){function i(a,b){this.clip=a;this.position=b;
this.duration=this.clip.duration.bind(this.clip);this.lastProgress=-1;this.prev=null;
this.next=null}var j=i.prototype;j.currentTime=function(a){var b=Math.min(1,Math.max(0,a/this.clip._duration));
if(b!==b){b=1}if(this.lastProgress===b){return this.lastProgress}if(this.lastProgress===0||b===0||this.lastProgress===-1){if(this.clip._storeOnStart){this.clip._storeOnStart(this.clip)
}}this.clip._playing=(b*this.clip._duration===this.clip._duration);this.lastProgress=this.clip.progress(b);
return this.lastProgress};j.destroy=function(){this.clip.destroy();this.prev=null;
this.next=null;this.duration=null};k.exports=i},{}],170:[function(i,o,j){var k=i("./TimelineClip");
var m=i("./TimelineCallback");var l=function(){this.head=null;this.tail=null;this.length=0
};var n=l.prototype;n.append=function(a){a.prev=null;a.next=null;if(this.tail){this.tail.next=a;
a.prev=this.tail}else{this.head=a}this.tail=a;this.length++};n.remove=function(a){if(a===this.head){this.head=this.head.next
}else{if(a===this.tail){this.tail=this.tail.prev}}if(a.prev){a.prev.next=a.next
}if(a.next){a.next.prev=a.prev}a.next=a.prev=null;if(this.head===null){this.tail=null
}this.length--};n.getItem=function(c){var b=this.head;while(b){var a=b;if((a instanceof k&&a.clip===c)||(a instanceof m&&a.callback===c)){return a
}b=a.next}return null};n.forEach=function(a){var d=0;var c=this.head;while(c){var b=c;
a(b,d,this.length);c=b.next}};n.destroy=function(){while(this.head){var a=this.head;
this.remove(a);a.destroy()}};o.exports=l},{"./TimelineCallback":168,"./TimelineClip":169}],171:[function(d,g,f){g.exports={flatten:d("./flatten"),intersection:d("./intersection"),shuffle:d("./shuffle"),toArray:d("./toArray"),union:d("./union"),unique:d("./unique"),without:d("./without")}
},{"./flatten":172,"./intersection":173,"./shuffle":174,"./toArray":175,"./union":176,"./unique":177,"./without":178}],172:[function(f,i,g){f("@marcom/ac-polyfills/Array/isArray");
f("@marcom/ac-polyfills/Array/prototype.forEach");i.exports=function h(a){var c=[];
var b=function(d){if(Array.isArray(d)){d.forEach(b)}else{c.push(d)}};a.forEach(b);
return c}},{"@marcom/ac-polyfills/Array/isArray":"@marcom/ac-polyfills/Array/isArray","@marcom/ac-polyfills/Array/prototype.forEach":"@marcom/ac-polyfills/Array/prototype.forEach"}],173:[function(f,i,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
i.exports=function h(p){if(!p){return[]}var a=arguments.length;var c=0;var j=p.length;
var o=[];var b;for(c;c<j;c++){b=p[c];if(o.indexOf(b)>-1){continue}for(var d=1;d<a;
d++){if(arguments[d].indexOf(b)<0){break}}if(d===a){o.push(b)}}return o}},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf"}],174:[function(f,i,g){i.exports=function h(a){var d=a.length;
var b;var c;while(d){b=Math.floor(Math.random()*d--);c=a[d];a[d]=a[b];a[b]=c}return a
}},{}],175:[function(f,h,g){f("@marcom/ac-polyfills/Array/prototype.slice");h.exports=function i(a){return Array.prototype.slice.call(a)
}},{"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],176:[function(i,n,j){var k=i("./flatten");
var o=i("./toArray");var l=i("./unique");n.exports=function m(a){return l(k(o(arguments)))
}},{"./flatten":172,"./toArray":175,"./unique":177}],177:[function(f,i,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
f("@marcom/ac-polyfills/Array/prototype.reduce");i.exports=function h(a){var b=function(d,c){if(d.indexOf(c)<0){d.push(c)
}return d};return a.reduce(b,[])}},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.reduce":"@marcom/ac-polyfills/Array/prototype.reduce"}],178:[function(f,h,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
f("@marcom/ac-polyfills/Array/prototype.slice");h.exports=function i(q,r,a){var c;
var o=q.indexOf(r);var b=q.length;if(o>=0){if(a){c=q.slice(0,b);var d,p=0;for(d=o;
d<b;d++){if(q[d]===r){c.splice(d-p,1);p++}}}else{if(o===(b-1)){c=q.slice(0,(b-1))
}else{if(o===0){c=q.slice(1)}else{c=q.slice(0,o);c=c.concat(q.slice(o+1))}}}}else{return q
}return c}},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],179:[function(m,l,h){var j=m("./utils/addEventListener");
var i=m("./shared/getEventType");l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)
}},{"./shared/getEventType":189,"./utils/addEventListener":193}],180:[function(l,k,m){var i=l("./utils/dispatchEvent");
var h=l("./shared/getEventType");k.exports=function j(a,b,c){b=h(a,b);return i(a,b,c)
}},{"./shared/getEventType":189,"./utils/dispatchEvent":194}],181:[function(d,g,f){g.exports={addEventListener:d("./addEventListener"),dispatchEvent:d("./dispatchEvent"),preventDefault:d("./preventDefault"),removeEventListener:d("./removeEventListener"),stop:d("./stop"),stopPropagation:d("./stopPropagation"),target:d("./target")}
},{"./addEventListener":179,"./dispatchEvent":180,"./preventDefault":187,"./removeEventListener":188,"./stop":190,"./stopPropagation":191,"./target":192}],182:[function(p,r,o){var n=p("./utils/eventTypeAvailable");
var k=p("./shared/camelCasedEventTypes");var q=p("./shared/windowFallbackEventTypes");
var m=p("./shared/prefixHelper");var s={};r.exports=function l(a,b){var f;var d;
var c;b=b||"div";a=a.toLowerCase();if(!(b in s)){s[b]={}}d=s[b];if(a in d){return d[a]
}if(n(a,b)){return d[a]=a}if(a in k){for(c=0;c<k[a].length;c++){f=k[a][c];if(n(f.toLowerCase(),b)){return d[a]=f
}}}for(c=0;c<m.evt.length;c++){f=m.evt[c]+a;if(n(f,b)){m.reduce(c);return d[a]=f
}}if(b!=="window"&&q.indexOf(a)){return d[a]=l(a,"window")}return d[a]=false}},{"./shared/camelCasedEventTypes":183,"./shared/prefixHelper":184,"./shared/windowFallbackEventTypes":185,"./utils/eventTypeAvailable":186}],183:[function(d,g,f){g.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],184:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],185:[function(d,g,f){g.exports=["transitionend","animationstart","animationend","animationiteration"]
},{}],186:[function(k,i,g){var h={window:window,document:document};i.exports=function j(a,c){var b;
a="on"+a;if(!(c in h)){h[c]=document.createElement(c)}b=h[c];if(a in b){return true
}if("setAttribute" in b){b.setAttribute(a,"return;");return(typeof b[a]==="function")
}return false}},{}],187:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],188:[function(l,k,m){var h=l("./utils/removeEventListener");
var i=l("./shared/getEventType");k.exports=function j(a,c,b,d){c=i(a,c);return h(a,c,b,d)
}},{"./shared/getEventType":189,"./utils/removeEventListener":195}],189:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"@marcom/ac-prefixer/getEventType":182}],190:[function(l,j,h){var i=l("./stopPropagation");
var m=l("./preventDefault");j.exports=function k(a){a=a||window.event;i(a);m(a);
a.stopped=true;a.returnValue=false}},{"./preventDefault":187,"./stopPropagation":191}],191:[function(i,h,f){h.exports=function g(a){a=a||window.event;
if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}}},{}],192:[function(f,i,g){i.exports=function h(a){a=a||window.event;
return(typeof a.target!=="undefined")?a.target:a.srcElement}},{}],193:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],194:[function(f,i,g){f("@marcom/ac-polyfills/CustomEvent");
i.exports=function h(a,b,c){var d;if(a.dispatchEvent){if(c){d=new CustomEvent(b,c)
}else{d=new CustomEvent(b)}a.dispatchEvent(d)}else{d=document.createEventObject();
if(c&&"detail" in c){d.detail=c.detail}a.fireEvent("on"+b,d)}return a}},{"@marcom/ac-polyfills/CustomEvent":"@marcom/ac-polyfills/CustomEvent"}],195:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,!!d)
}else{a.detachEvent("on"+c,b)}return a}},{}],196:[function(f,i,g){var h=f("./ac-element-tracker/ElementTracker");
i.exports=new h();i.exports.ElementTracker=h},{"./ac-element-tracker/ElementTracker":197}],197:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
var n=v("@marcom/ac-array");var o=v("@marcom/ac-dom-nodes");var y={getDimensions:v("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:v("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:v("@marcom/ac-dom-metrics/getScrollY")};
var p=v("@marcom/ac-dom-events");var t=v("@marcom/ac-object");var q=v("./TrackedElement");
var u={autoStart:false,useRenderedPosition:false};function x(a,b){this.options=t.clone(u);
this.options=typeof b==="object"?t.extend(this.options,b):this.options;this._scrollY=this._getScrollY();
this._windowHeight=this._getWindowHeight();this.tracking=false;this.elements=[];
if(a&&(Array.isArray(a)||o.isNodeList(a)||o.isElement(a))){this.addElements(a)}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);
this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);if(this.options.autoStart){this.start()
}}var r=x.prototype;r.destroy=function(){var a,b;this.stop();for(a=0,b=this.elements.length;
a<b;a++){this.elements[a].destroy()}this.elements=null;this.options=null};r._registerElements=function(a){a=[].concat(a);
a.forEach(function(b){if(this._elementInDOM(b)){var c=new q(b,this.options.useRenderedPosition);
c.offsetTop=c.element.offsetTop;this.elements.push(c)}},this)};r._registerTrackedElements=function(b){var a=[].concat(b);
a.forEach(function(c){if(this._elementInDOM(c.element)){c.offsetTop=c.element.offsetTop;
this.elements.push(c)}},this)};r._elementInDOM=function(a){var b=false;var c=document.getElementsByTagName("body")[0];
if(o.isElement(a)&&c.contains(a)){b=true}return b};r._elementPercentInView=function(a){return a.pixelsInView/a.height
};r._elementPixelsInView=function(b){var c=b.top-this._scrollY;var a=b.bottom-this._scrollY;
if(c>this._windowHeight||a<0){return 0}return Math.min(a,this._windowHeight)-Math.max(c,0)
};r._ifInView=function(b,a){if(!a){b.trigger("enterview",b)}};r._ifAlreadyInView=function(a){if(!a.inView){a.trigger("exitview",a)
}};r.addElements=function(a,b){if(typeof b==="undefined"){b=this.options.useRenderedPosition
}a=o.isNodeList(a)?n.toArray(a):[].concat(a);for(var c=0,d=a.length;c<d;c++){this.addElement(a[c],b)
}};r.addElement=function(b,a){var c=null;if(typeof a==="undefined"){a=this.options.useRenderedPosition
}if(o.isElement(b)){c=new q(b,a);this._registerTrackedElements(c);this.refreshElementMetrics(c);
this.refreshElementState(c)}else{throw new TypeError("ElementTracker: "+b+" is not a valid DOM element")
}return c};r.removeElement=function(a){var b=[];var c;this.elements.forEach(function(d,f){if(d===a||d.element===a){b.push(f)
}});c=this.elements.filter(function(d,f){return b.indexOf(f)<0});this.elements=c
};r.start=function(){if(this.tracking===false){this.tracking=true;p.addEventListener(window,"resize",this.refreshAllElementMetrics);
p.addEventListener(window,"orientationchange",this.refreshAllElementMetrics);p.addEventListener(window,"scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};r.stop=function(){if(this.tracking===true){this.tracking=false;
p.removeEventListener(window,"resize",this.refreshAllElementMetrics);p.removeEventListener(window,"orientationchange",this.refreshAllElementMetrics);
p.removeEventListener(window,"scroll",this.refreshAllElementStates)}};r.refreshAllElementMetrics=function(b,a){if(typeof b!=="number"){b=this._getScrollY()
}if(typeof a!=="number"){a=this._getWindowHeight()}this._scrollY=b;this._windowHeight=a;
this.elements.forEach(this.refreshElementMetrics,this)};r.refreshElementMetrics=function(b){var a=y.getDimensions(b.element,b.useRenderedPosition);
var c=y.getPagePosition(b.element,b.useRenderedPosition);b=t.extend(b,a,c);return this.refreshElementState(b)
};r.refreshAllElementStates=function(a){if(typeof a!=="number"){a=this._getScrollY()
}this._scrollY=a;this.elements.forEach(this.refreshElementState,this)};r.refreshElementState=function(b){var a=b.inView;
b.pixelsInView=this._elementPixelsInView(b);b.percentInView=this._elementPercentInView(b);
b.inView=b.pixelsInView>0;if(b.inView){this._ifInView(b,a)}if(a){this._ifAlreadyInView(b)
}return b};r._getWindowHeight=function(){return document.documentElement.clientHeight||window.innerHeight
};r._getScrollY=function(){return y.getScrollY()};w.exports=x},{"./TrackedElement":198,"@marcom/ac-array":171,"@marcom/ac-dom-events":181,"@marcom/ac-dom-metrics/getDimensions":21,"@marcom/ac-dom-metrics/getPagePosition":22,"@marcom/ac-dom-metrics/getScrollY":27,"@marcom/ac-dom-nodes":37,"@marcom/ac-object":456,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind"}],198:[function(r,s,q){var p=r("@marcom/ac-object").create;
var m=r("@marcom/ac-dom-nodes");var l=r("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var k=l.prototype;function n(b,a){if(!m.isElement(b)){throw new TypeError("TrackedElement: "+b+" is not a valid DOM element")
}l.call(this);this.element=b;this.inView=false;this.percentInView=0;this.pixelsInView=0;
this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;this.width=0;
this.height=0;this.useRenderedPosition=a||false}var o=n.prototype=p(k);o.destroy=function(){this.element=null;
k.destroy.call(this)};s.exports=n},{"@marcom/ac-dom-nodes":37,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object":456}],199:[function(f,h,g){var i=f("./ac-element-engagement/ElementEngagement");
h.exports=new i();h.exports.ElementEngagement=i},{"./ac-element-engagement/ElementEngagement":200}],200:[function(s,t,q){var p;
var l=s("@marcom/ac-event-emitter-micro").EventEmitterMicro;var r={create:s("@marcom/ac-object/create"),defaults:s("@marcom/ac-object/defaults"),extend:s("@marcom/ac-object/extend")};
var o=s("@marcom/ac-element-tracker").ElementTracker;var m={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var n={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var u=function(a){o.call(this,null,a);l.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};p=u.prototype=r.create(o.prototype);p=r.extend(p,l.prototype);
p._decorateTrackedElement=function(a,b){var c;c=r.defaults(m,b||{});r.extend(a,c);
r.extend(a,n)};p._attachElementListeners=function(a){a.on("thresholdenter",this._thresholdEnter,this);
a.on("thresholdexit",this._thresholdExit,this);a.on("enterview",this._enterView,this);
a.on("exitview",this._exitView,this)};p._removeElementListeners=function(a){a.off("thresholdenter",this._thresholdEnter);
a.off("thresholdexit",this._thresholdExit);a.off("enterview",this._enterView);a.off("exitview",this._exitView)
};p._attachAllElementListeners=function(){this.elements.forEach(function(a){if(!a.stopOnEngaged){this._attachElementListeners(a)
}else{if(!a.engaged){this._attachElementListeners(a)}}},this)};p._removeAllElementListeners=function(){this.elements.forEach(function(a){this._removeElementListeners(a)
},this)};p._elementInViewPastThreshold=function(c){var b=document.documentElement.clientHeight||window.innerHeight;
var a=false;if(c.pixelsInView===b){a=true}else{a=(c.percentInView>c.inViewThreshold)
}return a};p._ifInView=function(b,c){var a=b.inThreshold;o.prototype._ifInView.apply(this,arguments);
if(!a&&this._elementInViewPastThreshold(b)){b.inThreshold=true;b.trigger("thresholdenter",b);
if(typeof b.timeToEngage==="number"&&b.timeToEngage>=0){b.engagedTimeout=window.setTimeout(this._engaged.bind(this,b),b.timeToEngage)
}}};p._ifAlreadyInView=function(b){var a=b.inThreshold;o.prototype._ifAlreadyInView.apply(this,arguments);
if(a&&!this._elementInViewPastThreshold(b)){b.inThreshold=false;b.trigger("thresholdexit",b);
if(b.engagedTimeout){window.clearTimeout(b.engagedTimeout);b.engagedTimeout=null
}}};p._engaged=function(a){a.engagedTimeout=null;this._elementEngaged(a);a.trigger("engaged",a);
this.trigger("engaged",a)};p._thresholdEnter=function(a){a.thresholdEnterTime=Date.now();
a.thresholdExitTime=0;this.trigger("thresholdenter",a)};p._thresholdExit=function(a){a.thresholdExitTime=Date.now();
this.trigger("thresholdexit",a)};p._enterView=function(a){this.trigger("enterview",a)
};p._exitView=function(a){this.trigger("exitview",a)};p._elementEngaged=function(a){a.engaged=true;
if(a.stopOnEngaged){this.stop(a)}};p.stop=function(a){if(this.tracking&&!a){this._removeAllElementListeners();
o.prototype.stop.call(this)}if(a&&a.tracking){a.tracking=false;this._removeElementListeners(a)
}};p.start=function(a){if(!a){this._attachAllElementListeners()}if(a&&!a.tracking){if(!a.stopOnEngaged){a.tracking=true;
this._attachElementListeners(a)}else{if(!a.engaged){a.tracking=true;this._attachElementListeners(a)
}}}if(!this.tracking){o.prototype.start.call(this)}else{this.refreshAllElementMetrics();
this.refreshAllElementStates()}};p.addElement=function(c,b){b=b||{};var a=o.prototype.addElement.call(this,c,b.useRenderedPosition);
this._decorateTrackedElement(a,b);return a};p.addElements=function(a,b){[].forEach.call(a,function(c){this.addElement(c,b)
},this)};t.exports=u},{"@marcom/ac-element-tracker":196,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/create":458,"@marcom/ac-object/defaults":459,"@marcom/ac-object/extend":460}],201:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":202}],202:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],203:[function(k,j,g){var h=function(){var a="";
var b;for(b=0;b<arguments.length;b++){if(b>0){a+=","}a+=arguments[b]}return a};
j.exports=function i(a,b){b=b||h;var c=function(){var f=arguments;var d=b.apply(this,f);
if(!(d in c.cache)){c.cache[d]=a.apply(this,f)}return c.cache[d]};c.cache={};return c
}},{}],204:[function(f,i,g){i.exports=function h(a){var b;return function(){if(typeof b==="undefined"){b=a.apply(this,arguments)
}return b}}},{}],205:[function(d,g,f){arguments[4][182][0].apply(f,arguments)},{"./shared/camelCasedEventTypes":208,"./shared/prefixHelper":210,"./shared/windowFallbackEventTypes":213,"./utils/eventTypeAvailable":214,dup:182}],206:[function(d,g,f){arguments[4][59][0].apply(f,arguments)
},{"./shared/getStyleTestElement":209,"./shared/prefixHelper":210,"./shared/stylePropertyCache":211,"./utils/toCSS":215,"./utils/toDOM":216,dup:59}],207:[function(d,g,f){arguments[4][60][0].apply(f,arguments)
},{"./getStyleProperty":206,"./shared/prefixHelper":210,"./shared/stylePropertyCache":211,"./shared/styleValueAvailable":212,dup:60}],208:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],209:[function(d,g,f){arguments[4][61][0].apply(f,arguments)},{dup:61}],210:[function(d,g,f){arguments[4][62][0].apply(f,arguments)
},{dup:62}],211:[function(d,g,f){arguments[4][63][0].apply(f,arguments)},{dup:63}],212:[function(d,g,f){arguments[4][64][0].apply(f,arguments)
},{"./getStyleTestElement":209,"./stylePropertyCache":211,dup:64}],213:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],214:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],215:[function(d,g,f){arguments[4][66][0].apply(f,arguments)
},{dup:66}],216:[function(d,g,f){arguments[4][67][0].apply(f,arguments)},{dup:67}],217:[function(d,g,f){g.exports={canvasAvailable:d("./canvasAvailable"),continuousScrollEventsAvailable:d("./continuousScrollEventsAvailable"),cookiesAvailable:d("./cookiesAvailable"),cssLinearGradientAvailable:d("./cssLinearGradientAvailable"),cssPropertyAvailable:d("./cssPropertyAvailable"),cssViewportUnitsAvailable:d("./cssViewportUnitsAvailable"),elementAttributeAvailable:d("./elementAttributeAvailable"),eventTypeAvailable:d("./eventTypeAvailable"),isDesktop:d("./isDesktop"),isHandheld:d("./isHandheld"),isRetina:d("./isRetina"),isTablet:d("./isTablet"),localStorageAvailable:d("./localStorageAvailable"),mediaElementsAvailable:d("./mediaElementsAvailable"),mediaQueriesAvailable:d("./mediaQueriesAvailable"),sessionStorageAvailable:d("./sessionStorageAvailable"),svgAvailable:d("./svgAvailable"),threeDTransformsAvailable:d("./threeDTransformsAvailable"),touchAvailable:d("./touchAvailable"),webGLAvailable:d("./webGLAvailable")}
},{"./canvasAvailable":218,"./continuousScrollEventsAvailable":219,"./cookiesAvailable":220,"./cssLinearGradientAvailable":221,"./cssPropertyAvailable":222,"./cssViewportUnitsAvailable":223,"./elementAttributeAvailable":224,"./eventTypeAvailable":225,"./isDesktop":227,"./isHandheld":228,"./isRetina":229,"./isTablet":230,"./localStorageAvailable":231,"./mediaElementsAvailable":232,"./mediaQueriesAvailable":233,"./sessionStorageAvailable":234,"./svgAvailable":235,"./threeDTransformsAvailable":236,"./touchAvailable":237,"./webGLAvailable":238}],218:[function(h,m,i){var j=h("./helpers/globals");
var k=h("@marcom/ac-function/once");var l=function(){var b=j.getDocument();var a=b.createElement("canvas");
return !!(typeof a.getContext==="function"&&a.getContext("2d"))};m.exports=k(l);
m.exports.original=l},{"./helpers/globals":226,"@marcom/ac-function/once":204}],219:[function(o,m,i){var n=o("@marcom/ac-useragent");
var j=o("./touchAvailable").original;var l=o("@marcom/ac-function/once");function k(){return(!j()||(n.os.ios&&n.os.version.major>=8)||n.browser.chrome)
}m.exports=l(k);m.exports.original=k},{"./touchAvailable":237,"@marcom/ac-function/once":204,"@marcom/ac-useragent":584}],220:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=false;var d=j.getDocument();
var b=j.getNavigator();try{if("cookie" in d&&!!b.cookieEnabled){d.cookie="ac_feature_cookie=1";
a=(d.cookie.indexOf("ac_feature_cookie")!==-1);d.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(c){}return a}l.exports=k(i);l.exports.original=i},{"./helpers/globals":226,"@marcom/ac-function/once":204}],221:[function(m,l,h){var j=m("@marcom/ac-prefixer/getStyleValue");
var k=m("@marcom/ac-function/once");function i(){var a=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return a.some(function(b){return !!j("background-image",b)})}l.exports=k(i);l.exports.original=i
},{"@marcom/ac-function/once":204,"@marcom/ac-prefixer/getStyleValue":207}],222:[function(o,n,i){var l=o("@marcom/ac-prefixer/getStyleValue");
var m=o("@marcom/ac-prefixer/getStyleProperty");var k=o("@marcom/ac-function/memoize");
function j(a,b){if(typeof b!=="undefined"){return !!l(a,b)}else{return !!m(a)}}n.exports=k(j);
n.exports.original=j},{"@marcom/ac-function/memoize":203,"@marcom/ac-prefixer/getStyleProperty":206,"@marcom/ac-prefixer/getStyleValue":207}],223:[function(h,m,i){var k=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function j(){return !!k("margin","1vw 1vh")
}m.exports=l(j);m.exports.original=j},{"@marcom/ac-function/once":204,"@marcom/ac-prefixer/getStyleValue":207}],224:[function(h,l,i){var k=h("./helpers/globals");
var j=h("@marcom/ac-function/memoize");function m(d,b){var c=k.getDocument();var a;
b=b||"div";a=c.createElement(b);return(d in a)}l.exports=j(m);l.exports.original=m
},{"./helpers/globals":226,"@marcom/ac-function/memoize":203}],225:[function(m,k,h){var i=m("@marcom/ac-prefixer/getEventType");
var j=m("@marcom/ac-function/memoize");function l(a,b){return !!i(a,b)}k.exports=j(l);
k.exports.original=l},{"@marcom/ac-function/memoize":203,"@marcom/ac-prefixer/getEventType":205}],226:[function(d,g,f){g.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],227:[function(n,m,i){var j=n("./touchAvailable").original;var k=n("./helpers/globals");
var l=n("@marcom/ac-function/once");function o(){var a=k.getWindow();return(!j()&&!a.orientation)
}m.exports=l(o);m.exports.original=o},{"./helpers/globals":226,"./touchAvailable":237,"@marcom/ac-function/once":204}],228:[function(m,l,o){var n=m("./isDesktop").original;
var j=m("./isTablet").original;var k=m("@marcom/ac-function/once");function i(){return(!n()&&!j())
}l.exports=k(i);l.exports.original=i},{"./isDesktop":227,"./isTablet":230,"@marcom/ac-function/once":204}],229:[function(g,k,h){var j=g("./helpers/globals");
k.exports=function i(){var a=j.getWindow();return("devicePixelRatio" in a&&a.devicePixelRatio>=1.5)
}},{"./helpers/globals":226}],230:[function(o,n,q){var p=o("./isDesktop").original;
var l=o("./helpers/globals");var m=o("@marcom/ac-function/once");var j=600;function k(){var a=l.getWindow();
var b=a.screen.width;if(a.orientation&&a.screen.height<b){b=a.screen.height}return(!p()&&b>=j)
}n.exports=m(k);n.exports.original=k},{"./helpers/globals":226,"./isDesktop":227,"@marcom/ac-function/once":204}],231:[function(m,l,i){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function h(){var a=j.getWindow();var b=false;
try{b=!!(a.localStorage&&a.localStorage.non_existent!==null)}catch(c){}return b
}l.exports=k(h);l.exports.original=h},{"./helpers/globals":226,"@marcom/ac-function/once":204}],232:[function(h,m,i){var j=h("./helpers/globals");
var l=h("@marcom/ac-function/once");function k(){var a=j.getWindow();return("HTMLMediaElement" in a)
}m.exports=l(k);m.exports.original=k},{"./helpers/globals":226,"@marcom/ac-function/once":204}],233:[function(m,l,h){m("@marcom/ac-polyfills/matchMedia");
var j=m("./helpers/globals");var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();
var b=a.matchMedia("only all");return !!(b&&b.matches)}l.exports=k(i);l.exports.original=i
},{"./helpers/globals":226,"@marcom/ac-function/once":204,"@marcom/ac-polyfills/matchMedia":"@marcom/ac-polyfills/matchMedia"}],234:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=false;
try{if("sessionStorage" in a&&typeof a.sessionStorage.setItem==="function"){a.sessionStorage.setItem("ac_feature","test");
c=true;a.sessionStorage.removeItem("ac_feature","test")}}catch(b){}return c}l.exports=k(i);
l.exports.original=i},{"./helpers/globals":226,"@marcom/ac-function/once":204}],235:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getDocument();return !!a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":226,"@marcom/ac-function/once":204}],236:[function(h,m,i){var j=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function k(){return !!(j("perspective","1px")&&j("transform","translateZ(0)"))
}m.exports=l(k);m.exports.original=k},{"@marcom/ac-function/once":204,"@marcom/ac-prefixer/getStyleValue":207}],237:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=j.getDocument();
var b=j.getNavigator();return !!(("ontouchstart" in a)||(a.DocumentTouch&&c instanceof a.DocumentTouch)||(b.maxTouchPoints>0)||(b.msMaxTouchPoints>0))
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":226,"@marcom/ac-function/once":204}],238:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var b=j.getDocument();var a=b.createElement("canvas");
if(typeof a.getContext==="function"){return !!(a.getContext("webgl")||a.getContext("experimental-webgl"))
}return false}l.exports=k(i);l.exports.original=i},{"./helpers/globals":226,"@marcom/ac-function/once":204}],239:[function(d,g,f){arguments[4][179][0].apply(f,arguments)
},{"./shared/getEventType":249,"./utils/addEventListener":253,dup:179}],240:[function(d,g,f){arguments[4][180][0].apply(f,arguments)
},{"./shared/getEventType":249,"./utils/dispatchEvent":254,dup:180}],241:[function(d,g,f){arguments[4][181][0].apply(f,arguments)
},{"./addEventListener":239,"./dispatchEvent":240,"./preventDefault":247,"./removeEventListener":248,"./stop":250,"./stopPropagation":251,"./target":252,dup:181}],242:[function(d,g,f){arguments[4][182][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":243,"./shared/prefixHelper":244,"./shared/windowFallbackEventTypes":245,"./utils/eventTypeAvailable":246,dup:182}],243:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],244:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],245:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],246:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],247:[function(d,g,f){arguments[4][187][0].apply(f,arguments)
},{dup:187}],248:[function(d,g,f){arguments[4][188][0].apply(f,arguments)},{"./shared/getEventType":249,"./utils/removeEventListener":255,dup:188}],249:[function(d,g,f){arguments[4][189][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":242,dup:189}],250:[function(d,g,f){arguments[4][190][0].apply(f,arguments)
},{"./preventDefault":247,"./stopPropagation":251,dup:190}],251:[function(d,g,f){arguments[4][191][0].apply(f,arguments)
},{dup:191}],252:[function(d,g,f){arguments[4][192][0].apply(f,arguments)},{dup:192}],253:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],254:[function(d,g,f){arguments[4][194][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":"@marcom/ac-polyfills/CustomEvent",dup:194}],255:[function(d,g,f){arguments[4][195][0].apply(f,arguments)
},{dup:195}],256:[function(f,i,g){i.exports=function h(c,a){var b=null;return function(){if(b===null){c.apply(this,arguments);
b=setTimeout(function(){b=null},a)}}}},{}],257:[function(v,w,t){var n=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var q=v("@marcom/ac-dom-events/utils/addEventListener");var x=v("@marcom/ac-dom-events/utils/removeEventListener");
var r=v("@marcom/ac-object/create");var u=v("./internal/KeyEvent");var p="keydown";
var o="keyup";function y(a){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=a||document;q(this._context,p,this._DOMKeyDown,true);
q(this._context,o,this._DOMKeyUp,true);n.call(this)}var s=y.prototype=r(n.prototype);
s.onDown=function(b,a){return this.on(p+":"+b,a)};s.onceDown=function(b,a){return this.once(p+":"+b,a)
};s.offDown=function(b,a){return this.off(p+":"+b,a)};s.onUp=function(b,a){return this.on(o+":"+b,a)
};s.onceUp=function(b,a){return this.once(o+":"+b,a)};s.offUp=function(b,a){return this.off(o+":"+b,a)
};s.isDown=function(a){a+="";return this._keysDown[a]||false};s.isUp=function(a){return !this.isDown(a)
};s.destroy=function(){x(this._context,p,this._DOMKeyDown,true);x(this._context,o,this._DOMKeyUp,true);
this._keysDown=null;this._context=null;n.prototype.destroy.call(this);return this
};s._DOMKeyDown=function(b){var c=this._normalizeKeyboardEvent(b);var a=c.keyCode+="";
this._trackKeyDown(a);this.trigger(p+":"+a,c)};s._DOMKeyUp=function(b){var c=this._normalizeKeyboardEvent(b);
var a=c.keyCode+="";this._trackKeyUp(a);this.trigger(o+":"+a,c)};s._normalizeKeyboardEvent=function(a){return new u(a)
};s._trackKeyUp=function(a){if(this._keysDown[a]){this._keysDown[a]=false}};s._trackKeyDown=function(a){if(!this._keysDown[a]){this._keysDown[a]=true
}};w.exports=y},{"./internal/KeyEvent":259,"@marcom/ac-dom-events/utils/addEventListener":253,"@marcom/ac-dom-events/utils/removeEventListener":255,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/create":458}],258:[function(i,h,f){var g=i("./Keyboard");
h.exports=new g()},{"./Keyboard":257}],259:[function(k,j,g){var h=["keyLocation"];
function i(b){this.originalEvent=b;var a;for(a in b){if(h.indexOf(a)===-1&&typeof b[a]!=="function"){this[a]=b[a]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}i.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};j.exports=i},{}],260:[function(d,g,f){g.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],261:[function(d,g,f){arguments[4][119][0].apply(f,arguments)},{"./ac-page-visibility/PageVisibilityManager":262,dup:119}],262:[function(d,g,f){arguments[4][120][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/create":458,dup:120}],263:[function(d,g,f){arguments[4][1][0].apply(f,arguments)
},{"./ac-browser/BrowserData":264,"./ac-browser/IE":265,dup:1}],264:[function(d,g,f){arguments[4][2][0].apply(f,arguments)
},{"./data":266,"@marcom/ac-polyfills/Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","@marcom/ac-polyfills/Array/prototype.some":"@marcom/ac-polyfills/Array/prototype.some",dup:2}],265:[function(d,g,f){arguments[4][3][0].apply(f,arguments)
},{dup:3}],266:[function(d,g,f){arguments[4][4][0].apply(f,arguments)},{dup:4}],267:[function(d,g,f){g.exports={PointerTracker:d("./ac-pointer-tracker/PointerTracker")}
},{"./ac-pointer-tracker/PointerTracker":268}],268:[function(z,A,w){var o=z("@marcom/ac-browser");
var q=z("@marcom/ac-dom-events");var r=z("@marcom/ac-dom-styles");var u=z("@marcom/ac-object/create");
var y=o.os==="Android"||(o.name==="IE"&&o.version<=8);var s=z("@marcom/ac-feature/touchAvailable")();
var p=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;function x(b,a,c){this._el=b;
c=c||{};this._lockVertical=c.lockVertical!==false;this._swipeThreshold=c.swipeThreshold||x.DEFAULT_SWIPE_THRESHOLD;
this._pointerEvents=a||{};this._pointerEvents.down=this._pointerEvents.down||((s)?x.TOUCH_EVENTS.down:x.MOUSE_EVENTS.down);
this._pointerEvents.up=this._pointerEvents.up||((s)?x.TOUCH_EVENTS.up:x.MOUSE_EVENTS.up);
this._pointerEvents.out=this._pointerEvents.out||((s)?x.TOUCH_EVENTS.out:x.MOUSE_EVENTS.out);
this._pointerEvents.move=this._pointerEvents.move||((s)?x.TOUCH_EVENTS.move:x.MOUSE_EVENTS.move);
this._onMouseDown=this._onMouseDown.bind(this);this._onMouseUp=this._onMouseUp.bind(this);
this._onMouseOut=this._onMouseOut.bind(this);this._onMouseMove=this._onMouseMove.bind(this);
p.call(this);q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle("grab")}x.START="start";x.END="end";x.UPDATE="update";x.SWIPE_RIGHT="swiperight";
x.SWIPE_LEFT="swipeleft";x.DEFAULT_SWIPE_THRESHOLD=(y)?2:8;x.TOUCH_EVENTS={down:"touchstart",up:"touchend",out:"mouseout",move:"touchmove"};
x.MOUSE_EVENTS={down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove"};
var t=p.prototype;var v=x.prototype=u(t);v.destroy=function(){if(this._isDragging){this._onMouseUp()
}q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);this._setCursorStyle(null);
this._el=null;this._pointerEvents=null;this._lockVertical=null;this._swipeThreshold=null;
this._checkForTouchScrollY=null;this._isDragging=null;this._currentX=null;this._currentY=null;
this._velocityX=null;this._velocityY=null;this._lastX=null;this._lastY=null;return t.destroy.call(this)
};v._onMouseDown=function(b){if(this._isDragging){return}this._isDragging=true;
this._setCursorStyle("grabbing");q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=this._lockVertical&&!!(b.touches&&b.touches[0]);
if(this._checkForTouchScrollY){this._lastY=this._getTouchY(b)}var a=this._storeAndGetValues(b);
this._velocityX=a.diffX=0;this._velocityY=a.diffY=0;this.trigger(x.START,a)};v._onMouseUp=function(c){if(!this._isDragging){return
}this._isDragging=false;this._setCursorStyle("grab");q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
var a;if(this._checkForTouchScrollY){a=null}else{if(this._velocityX>this._swipeThreshold){a=x.SWIPE_LEFT
}else{if((this._velocityX*-1)>this._swipeThreshold){a=x.SWIPE_RIGHT}}}var b=this._storeAndGetValues(c);
b.swipe=a;this.trigger(x.END,b);if(a){this.trigger(a,b)}};v._onMouseOut=function(b){b=(b)?b:window.event;
var a=b.relatedTarget||b.toElement;if(!a||a.nodeName==="HTML"){this._onMouseUp(b)
}};v._onMouseMove=function(a){if(this._checkForTouchScrollY&&this._isVerticalTouchMove(a)){this._onMouseUp(a);
return}q.preventDefault(a);this.trigger(x.UPDATE,this._storeAndGetValues(a))};v._storeAndGetValues=function(b){if(b===undefined){return{}
}this._currentX=this._getPointerX(b);this._currentY=this._getPointerY(b);this._velocityX=this._lastX-this._currentX;
this._velocityY=this._lastY-this._currentY;var a={x:this._currentX,y:this._currentY,lastX:this._lastX,lastY:this._lastY,diffX:this._velocityX,diffY:this._velocityY,interactionEvent:b};
this._lastX=this._currentX;this._lastY=this._currentY;return a};v._getPointerX=function(a){if(a.pageX){return a.pageX
}else{if(a.touches&&a.touches[0]){return a.touches[0].pageX}else{if(a.clientX){return a.clientX
}}}return 0};v._getPointerY=function(a){if(a.pageY){return a.pageY}else{if(a.touches&&a.touches[0]){return a.touches[0].pageY
}else{if(a.clientY){return a.clientY}}}return 0};v._getTouchX=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageX
}return 0};v._getTouchY=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageY
}return 0};v._isVerticalTouchMove=function(d){var f=this._getTouchX(d);var a=this._getTouchY(d);
var b=Math.abs(f-this._lastX);var c=Math.abs(a-this._lastY);this._checkForTouchScrollY=(b<c);
return this._checkForTouchScrollY};v._setCursorStyle=function(a){r.setStyle(this._el,{cursor:a})
};A.exports=x},{"@marcom/ac-browser":263,"@marcom/ac-dom-events":241,"@marcom/ac-dom-styles":68,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-feature/touchAvailable":237,"@marcom/ac-object/create":458}],269:[function(v,w,s){var t=v("@marcom/ac-classlist");
var o=v("./singletons/analyticsManager");var q=v("@marcom/ac-object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var u=v("./Item");function p(a){a=a||{};this._wrapAround=a.wrapAround||false;this._itemType=a.itemType||u;
this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
m.call(this);if(a.startAt){this._startAt(a.startAt)}p._add(this,a.analyticsOptions)
}p.FADE="fade";p.FADE_SELECTOR="[data-ac-gallery-fade]";p.SLIDE="slide";p.SLIDE_SELECTOR="[data-ac-gallery-slide]";
p.UPDATE="update";p.UPDATE_COMPLETE="update:complete";var n=m.prototype;var r=p.prototype=q(n);
r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)}else{if(this._items.indexOf(b)>-1){return b
}}if(typeof a==="number"){this._items.splice(a,0,b)}else{this._items.push(b)}if(this._items.length===1){b.show();
this._setCurrentItem(b)}else{b.hide();if(this.getNextItem()===b){this._setNextItem(b)
}if(this.getPreviousItem()===b){this._setPreviousItem(b)}}if(b.getElementId()!==null){this._itemsIdLookup[b.getElementId()]=b
}b.on(u.SELECTED,this._update);return b};r.removeItem=function(b,c){c=c||{};if(typeof b==="number"){b=this._items[b]
}var d=this._items.indexOf(b);if(d>-1){var a=this.getNextItem();var f=this.getPreviousItem();
this._items.splice(d,1);b.off(u.SELECTED,this._update);if(a===b){this._setNextItem(this.getNextItem())
}if(f===b){this._setPreviousItem(this.getPreviousItem())}}if(b===this._currentItem&&this._items.length&&c.setCurrentItem!==false){this._update({item:this._items[0]});
this._setLastItem(null)}if(c.destroyItem&&b.getElement()){b.destroy()}return b};
r.show=function(b,a){if(typeof b==="number"){b=this._items[b]}else{if(typeof b==="string"){b=this._itemsIdLookup[b]
}}if(b){a=a||{};this._update({item:b,interactionEvent:a.interactionEvent})}return b||null
};r.showNext=function(a){var b=this.getNextItem();if(b){this.show(b,a)}return b
};r.showPrevious=function(a){var b=this.getPreviousItem();if(b){this.show(b,a)}return b
};r.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
r.getTotalItems=function(){return this._items.length};r.getItems=function(){return this._items
};r.getItem=function(a){if(typeof a==="number"){return this.getItemAt(a)}else{if(typeof a==="string"){return this.getItemById(a)
}}};r.getItemAt=function(a){return this._items[a]||null};r.getItemById=function(a){return this._itemsIdLookup[a]||null
};r.getItemIndex=function(a){return this._items.indexOf(a)};r.getCurrentItem=function(){return this._currentItem||null
};r.getLastItem=function(){return this._lastItem||null};r.getNextItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a<this._items.length-1){b=this._items[a+1]
}else{if(this._wrapAround){b=this._items[0]}}return b||null};r.getPreviousItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a>0){b=this._items[a-1]}else{if(this._wrapAround){b=this._items[this._items.length-1]
}}return b||null};r.getId=function(){return this._id};r.destroy=function(a){a=a||{};
if(a.destroyItems===undefined){a.destroyItems=true}this._setCurrentItem(null);if(a.destroyItems){var b;
while(this._items.length){b=this._items[0];b.off(u.SELECTED,this._update);this.removeItem(b,{destroyItem:true,setCurrentItem:false})
}}this._items=null;this._itemsIdLookup=null;p._remove(this);return n.destroy.call(this)
};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.hide();
this._setCurrentItem(b);this._currentItem.show();this.trigger(p.UPDATE,this._items)
}};r._setCurrentItem=function(a){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==a){t.remove(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setLastItem(this._currentItem)}this._currentItem=a;if(this._currentItem&&this._currentItem.getElement()){t.add(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
}};r._setLastItem=function(a){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==a){t.remove(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}this._lastItem=a;if(this._lastItem&&this._lastItem.getElement()){t.add(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}};r._setNextItem=function(a){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==a){t.remove(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}this._nextItem=a;if(this._nextItem&&this._nextItem.getElement()){t.add(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}};r._setPreviousItem=function(a){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==a){t.remove(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}this._previousItem=a;if(this._previousItem&&this._previousItem.getElement()){t.add(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}};r._updateItems=function(b,a){if(b.outgoing[0]){b.outgoing[0].hide()}b.incoming[0].show();
if(!a){this.trigger(p.UPDATE_COMPLETE,b)}};r._update=function(a){var b=this._currentItem!==a.item;
if(b){this._setCurrentItem(a.item)}var c={incoming:[a.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:a.interactionEvent||null};
if(b){this.trigger(p.UPDATE,c)}this._updateItems(c,!b)};p._instantiate=function(){this._galleries=[];
this._idCounter=0;return this};p._add=function(b,a){this._galleries.push(b);b._id=++this._idCounter;
o.add(b,a)};p._remove=function(a){var b=this._galleries.indexOf(a);if(b>-1){this._galleries.splice(b,1);
o.remove(a)}};p.getAll=function(){return Array.prototype.slice.call(this._galleries)
};p.getAllInView=function(){var b=[];var a=this._galleries.length;while(a--){if(this._galleries[a].isInView()){b.push(this._galleries[a])
}}return b};p.destroyAll=function(){var a=this._galleries.length;while(a--){this._galleries[a].destroy()
}this._galleries=[]};w.exports=p._instantiate()},{"./Item":270,"./singletons/analyticsManager":284,"@marcom/ac-classlist":12,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/create":458}],270:[function(z,J,t){var I=z("@marcom/ac-classlist");
var D=z("@marcom/ac-dom-events/addEventListener");var B=z("@marcom/ac-dom-events/removeEventListener");
var A=z("@marcom/ac-dom-events/preventDefault");var E=z("@marcom/ac-dom-metrics/isInViewport");
var K=z("@marcom/ac-dom-metrics/getPercentInViewport");var u=z("@marcom/ac-dom-traversal/querySelectorAll");
var y=z("@marcom/ac-object/create");var F=z("./singletons/tabManager");var v=z("@marcom/ac-keyboard/keyMap");
var x=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;var G=z("@marcom/ac-keyboard");
var C="current";function H(a,b){this._el=a;b=b||{};this._triggerKeys=[];this._triggerEls={};
this._isShown=false;this._isACaption=(b.isACaption===undefined)?false:b.isACaption;
this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);this._onTriggered=this._onTriggered.bind(this);
if(!this._isACaption){this._el.setAttribute("role","tabpanel")}this._focusableEls=u(F.focusableSelectors,a);
x.call(this)}H.CSS_CURRENT_ITEM="ac-gallery-currentitem";H.CSS_LAST_ITEM="ac-gallery-lastitem";
H.CSS_NEXT_ITEM="ac-gallery-nextitem";H.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
H.SELECTED="selected";H.SHOW="show";H.HIDE="hide";var w=H.prototype=y(x.prototype);
w.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this.trigger(H.SHOW,this)};w.hide=function(){this._isShown=false;
this._removeCurrentClassFromTriggers();this._setTabIndexOnFocusableItems("-1");
this._el.setAttribute("aria-hidden","true");this.trigger(H.HIDE,this)};w.addElementTrigger=function(b,c){c=c||"click";
if(this._triggerEls[c]===undefined){this._triggerEls[c]=[]}var d=this._triggerEls[c].indexOf(b);
if(d<0){b.setAttribute("role","tab");b.setAttribute("tabindex","0");var a=this.getElementId();
if(a){b.setAttribute("aria-controls",a)}a=b.getAttribute("id");if(a&&this._el.getAttribute("aria-labelledby")===null){this._el.setAttribute("aria-labelledby",a)
}D(b,c,this._onTriggered);this._triggerEls[c].push(b);if(this._isShown){b.setAttribute("aria-selected","true");
I.add(b,C)}else{b.setAttribute("aria-selected","false")}}};w.removeElementTrigger=function(a,b){b=b||"click";
if(this._triggerEls[b]===undefined){return}var c=this._triggerEls[b].indexOf(a);
if(c>-1){this._cleanElementTrigger(a,b)}if(this._triggerEls[b].length===0){this._triggerEls[b]=undefined
}};w.addKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);
if(b<0){G.onDown(a,this._onKeyboardInteraction);this._triggerKeys.push(a)}}};w.removeKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]
}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);if(b>-1){G.offDown(a,this._onKeyboardInteraction);
this._triggerKeys.splice(b,1)}}};w.removeAllTriggers=function(){var c;var d=this._triggerKeys.length;
while(d--){c=this._triggerKeys[d];G.offDown(c,this._onKeyboardInteraction)}this._triggerKeys=[];
var a;var b;for(b in this._triggerEls){d=this._triggerEls[b].length;while(d--){a=this._triggerEls[b][d];
this._cleanElementTrigger(a,b)}}this._triggerEls={}};w.isInView=function(){if(this._el){return E(this._el)
}return false};w.percentageInView=function(){if(this._el){return K(this._el)}return 0
};w.getElement=function(){return this._el};w.getElementId=function(){if(this._elId!==undefined){return this._elId
}this._elId=this._el.getAttribute("id")||null;return this._elId};w.destroy=function(){if(this._isShown){this._isShown=null;
I.remove(this._el,H.CSS_CURRENT_ITEM,H.CSS_LAST_ITEM,H.CSS_NEXT_ITEM,H.CSS_PREVIOUS_ITEM);
this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this._el.removeAttribute("role");this._el.removeAttribute("aria-labelledby");
this._isACaption=null;this._triggerKeys=null;this._triggerEls=null;this._el=null
};w._addCurrentClassToTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","true");I.add(a,C)
}}};w._removeCurrentClassFromTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","false");I.remove(a,C)
}}};w._cleanElementTrigger=function(a,b){a.removeAttribute("aria-selected");a.removeAttribute("role");
a.removeAttribute("tabindex");a.removeAttribute("aria-controls");B(a,b,this._onTriggered);
if(this._isShown){I.remove(a,C)}};w._onKeyboardInteraction=function(a){if(this.isInView()){this._onTriggered(a)
}};w._setTabIndexOnFocusableItems=function(c){var d=c===null;var a=[];this._currentTabbableEls=this._currentTabbableEls||F.getTabbable(this._focusableEls);
if(!d){a=F.getTabbable(this._focusableEls);this._currentTabbableEls=a}var b=this._currentTabbableEls.length;
while(b--){if(d){this._currentTabbableEls[b].removeAttribute("tabindex")}else{this._currentTabbableEls[b].setAttribute("tabindex",c)
}}};w._onTriggered=function(a){A(a);this.trigger(H.SELECTED,{item:this,interactionEvent:a})
};J.exports=H},{"./singletons/tabManager":285,"@marcom/ac-classlist":12,"@marcom/ac-dom-events/addEventListener":239,"@marcom/ac-dom-events/preventDefault":247,"@marcom/ac-dom-events/removeEventListener":248,"@marcom/ac-dom-metrics/getPercentInViewport":23,"@marcom/ac-dom-metrics/isInViewport":29,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-keyboard":258,"@marcom/ac-keyboard/keyMap":260,"@marcom/ac-object/create":458}],271:[function(t,w,r){var q=t("./helpers/extendProto");
var o=t("./Gallery");var v=t("./auto/AutoGallery");var p=t("./fade/FadeGallery");
var m=t("./fade/FadeItem");var u=t("./slide/SlideGallery");var n=t("./slide/SlideItem");
var s=t("./Item");o.create=t("./factories/create");o.autoCreate=t("./factories/autoCreate");
o.extend=q;v.extend=q;p.extend=q;m.extend=q;u.extend=q;n.extend=q;s.extend=q;w.exports={Gallery:o,AutoGallery:v,FadeGallery:p,FadeGalleryItem:m,SlideGallery:u,SlideGalleryItem:n,Item:s,ToggleNav:t("./navigation/ToggleNav")}
},{"./Gallery":269,"./Item":270,"./auto/AutoGallery":273,"./factories/autoCreate":274,"./factories/create":275,"./fade/FadeGallery":276,"./fade/FadeItem":277,"./helpers/extendProto":278,"./navigation/ToggleNav":283,"./slide/SlideGallery":286,"./slide/SlideItem":287}],272:[function(j,p,k){var l;
try{l=j("ac-analytics").observer.Gallery}catch(m){}var n="data-analytics-gallery-id";
function q(){this._observers={}}var o=q.prototype;o.add=function(d,b){var a=d.getId();
if(!l||this._observers[a]){return}b=b||{};if(!b.galleryName){b.galleryName=this._getAnalyticsId(d,b.dataAttribute)||a
}if(!b.beforeUpdateEvent){b.beforeUpdateEvent="update"}if(!b.afterUpdateEvent){b.afterUpdateEvent="update:complete"
}var c=new l(d,b);if(c.gallery){this._observers[a]=c}};o.remove=function(b){var a=b.getId();
if(!l||!this._observers[a]){return}if(typeof this._observers[a].destroy==="function"){this._observers[a].destroy()
}this._observers[a]=null};o._getAnalyticsId=function(c,b){if(typeof c.getElement==="function"){b=b||n;
var a=c.getElement();return a.getAttribute(b)||a.getAttribute("id")}return null
};p.exports=q},{"ac-analytics":"ac-analytics"}],273:[function(ad,ap,N){ad("@marcom/ac-polyfills/requestAnimationFrame");
var ao=ad("@marcom/ac-classlist");var ai=ad("@marcom/ac-dom-events/addEventListener");
var af=ad("@marcom/ac-dom-events/removeEventListener");var ae=ad("@marcom/ac-dom-events/preventDefault");
var Q=ad("@marcom/ac-dom-styles");var al=ad("@marcom/ac-dom-traversal/querySelector");
var U=ad("@marcom/ac-dom-traversal/querySelectorAll");var aa=ad("@marcom/ac-object/create");
var S=ad("@marcom/ac-dom-metrics/getContentDimensions");var O=ad("@marcom/ac-keyboard/keyMap");
var W=ad("./../helpers/selectElementFromDataAttributeValue");var ac=ad("./../helpers/selectElementThatHasDataAttribute");
var ag=ad("./../helpers/inputHasFocus");var aj=ad("@marcom/ac-function/throttle");
var ah=ad("@marcom/ac-feature/touchAvailable");var V=ad("./../Gallery");var an=ad("@marcom/ac-keyboard");
var K=ad("@marcom/ac-page-visibility").PageVisibilityManager;var ak=ad("@marcom/ac-pointer-tracker").PointerTracker;
var R=ad("./../navigation/ToggleNav");var ab="disabled";var J=3;var am=0.5;var M="[data-ac-gallery-item]";
var Y=0.12;var Z=ad("../templates/paddlenav.js");var P="No element supplied.";var L='Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.';
function X(f,a){a=a||{};if(!f||f.nodeType===undefined){throw new Error(P)}this._el=f;
V.call(this,a);this._itemHeights=[];this._itemHeightsLookup={};this._toggleNavDuration=a.toggleNavDuration;
this._isRightToLeft=(a.rightToLeft===undefined)?Q.getStyle(f,"direction").direction==="rtl":a.rightToLeft;
this._keyboardThrottleDelay=((a.keyboardThrottleDelay===undefined)?Y:a.keyboardThrottleDelay)*1000;
this._resizeContainer=!!a.resizeContainer;this._setUpContainerAutoResize(a.resizeContainerOnUpdate);
this._createToggleNav();this._addPaddleNav(a.addPaddleNav);this._isACaptionsGallery=f.getAttribute("data-ac-gallery-captions")==="";
this._addItems(a.itemSelector||M);if(!this._wrapAround){this._updatePaddleNavState()
}if(a.enableArrowKeys!==false){this._enableArrowKeys=true;this._addKeyboardListener()
}if(a.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
ai(window,"resize",this._onWindowResize)}this._componentsContainer=document.getElementById(a.container);
if(a.startAt){this._startAt(a.startAt)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
if(a.autoPlay){if(!this._componentsContainer){throw new Error(L)}var b=(typeof a.autoPlay==="number")?a.autoPlay:J;
this.startAutoPlay(b)}if(a.deeplink!==false){var d=this._getDeeplinkedItem();if(d&&d!==this._currentItem){this.show(d)
}}if(this._containerResizeDuration!==false){var c=this._itemHeightsLookup[this._currentItem.getElementId()];
if(c){this._setElHeight(c)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(a.touch&&ah(),a.desktopSwipe);
if(this._componentsContainer){this._componentsContainer.setAttribute("tabIndex",-1)
}}X.RESIZED="resized";X.UPDATE=V.UPDATE;X.UPDATE_COMPLETE=V.UPDATE_COMPLETE;var aq=V.prototype;
var T=X.prototype=aa(aq);T.addItem=function(a,c){if(a.nodeType){var b=this._isACaptionsGallery;
a=new this._itemType(a,{isACaption:b})}else{if(this._items.indexOf(a)>-1){return a
}}if(this._resizeContainer){this._storeItemHeight(a,this._containerResizeDuration===false)
}this._addItemTriggers(a);return aq.addItem.call(this,a,c)};T.removeItem=function(a,b){if(this._resizeContainer){var c=this._itemHeights.length;
while(c--){if(this._itemHeights[c].item===a){this._itemHeights.splice(c,1);if(c===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
}}}}return aq.removeItem.call(this,a,b)};T.startAutoPlay=function(a,b){b=b||{};
this._isAutoPlaying=true;this._autoPlayDelay=(a||J)*1000;this._cancelAutoPlayOnInteraction=(b.cancelOnInteraction===undefined)?true:b.cancelOnInteraction;
setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}if(this._componentsContainer){ai(this._componentsContainer,"focus",this.stopAutoPlay,true);
ai(this._componentsContainer,"touchend",this.stopAutoPlay,true);ai(this._componentsContainer,"click",this.stopAutoPlay,true)
}else{throw new Error(L)}};T.stopAutoPlay=function(){this._isAutoPlaying=false;
if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){af(this._componentsContainer,"focus",this.stopAutoPlay,true);
af(this._componentsContainer,"touchend",this.stopAutoPlay,true);af(this._componentsContainer,"click",this.stopAutoPlay,true)
}};T.getElement=function(){return this._el};T.getToggleNav=function(){return this._toggleNav||null
};T.resize=function(b,c){if(this._resizeContainer){this._itemHeights=[];var a=this._items.length;
while(a--){this._storeItemHeight(this._items[a],false)}if(this._containerResizeDuration!==false){this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
}else{this._setElHeight(this._itemHeights[0].height)}}if(this._toggleNav){this._toggleNav.resize()
}this.trigger(X.RESIZED,this)};T.enableKeyboard=function(){if(!this._enableArrowKeys){this._enableArrowKeys=true;
this._addKeyboardListener()}};T.disableKeyboard=function(){if(this._enableArrowKeys){this._enableArrowKeys=false;
an.offDown(O.ARROW_RIGHT,this._rightArrowFunc);an.offDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T.enableTouch=function(){if(!this._touchSwipe){this._setUpSwiping(true,false)
}};T.disableTouch=function(){if(this._touchSwipe){this._touchSwipe.off(ak.END,this._onSwipeEnd);
this._touchSwipe.destroy();this._touchSwipe=null}};T.enableDesktopSwipe=function(){if(!this._clickSwipe){this._setUpSwiping(false,true)
}};T.disableDesktopSwipe=function(){if(this._clickSwipe){this._clickSwipe.off(ak.END,this._onSwipeEnd);
this._clickSwipe.destroy();this._clickSwipe=null}};T.destroy=function(a){if(this._isAutoPlaying){this.stopAutoPlay()
}if(this._componentsContainer){af(this._componentsContainer,"focus",this.stopAutoPlay,true);
af(this._componentsContainer,"touchend",this.stopAutoPlay,true);af(this._componentsContainer,"click",this.stopAutoPlay,true)
}if(this._resizeContainer){Q.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){an.offDown(O.ARROW_RIGHT,this._rightArrowFunc);
an.offDown(O.ARROW_LEFT,this._leftArrowFunc)}var b;if(this._previousButtons){b=this._previousButtons.length;
while(b--){af(this._previousButtons[b],"click",this._onPaddlePrevious)}this._setPaddleDisabledState(this._previousButtons,false)
}if(this._nextButtons){b=this._nextButtons.length;while(b--){af(this._nextButtons[b],"click",this._onPaddleNext)
}this._setPaddleDisabledState(this._nextButtons,false)}if(this._dynamicPaddleNav){this._el.removeChild(this._dynamicPaddleNav)
}if(this._hasPaddleNavStateHandler){this.off(V.UPDATE,this._updatePaddleNavState)
}this.disableTouch();this.disableDesktopSwipe();if(this._toggleNav){this._toggleNav.destroy();
this._toggleNav=null}af(window,"resize",this._onWindowResize);this._el=null;this._itemHeights=null;
this._itemHeightsLookup=null;this._resizeContainer=null;this._isRightToLeft=null;
this._enableArrowKeys=null;this._previousButtons=null;this._onPaddlePrevious=null;
this._nextButtons=null;this._onPaddleNext=null;this._isACaptionsGallery=null;this._componentsContainer=null;
return aq.destroy.call(this,a)};T._getDeeplinkedItem=function(){var a=window.location.hash.substr(1);
var b;var c=this._items.length;while(c--){b=this._items[c];if(a===b.getElementId()){return b
}}return null};T._addItems=function(b){var d;var c;var g=/(^\[).*(\]$)/.test(b);
if(g){b=b.replace(/\[|\]/g,"");c=ac(b,this._el)}else{c=U(b,this._el)}var a=0;var f=c.length;
var h=this._isACaptionsGallery;for(a;a<f;a++){d=new this._itemType(c[a],{isACaption:h});
this.addItem(d);this._addItemTriggers(d)}};T._createToggleNav=function(){var a=this._getElementId();
var c='[data-ac-gallery-togglenav="'+a+'"], [data-ac-gallery-tabnav="'+a+'"]';var b=al(c);
if(b){this._toggleNav=new R(b,this,{duration:this._toggleNavDuration})}};T._addItemTriggers=function(d,c){var a=W("data-ac-gallery-trigger",d.getElementId());
if(c&&c.length){a=a.concat(c)}var b=0;var f=a.length;for(b;b<f;b++){d.addElementTrigger(a[b]);
if(this._toggleNav){this._toggleNav.addTrigger(a[b],d)}}};T._addPaddleNav=function(g){var a;
var d=this._getElementId();if(g){var h=(typeof g==="string")?g:Z;h=h.replace(/%ID%/g,this._getElementId());
this._dynamicPaddleNav=document.createElement("div");this._dynamicPaddleNav.innerHTML=h;
this._el.insertBefore(this._dynamicPaddleNav,this._el.firstChild)}this._previousButtons=W("data-ac-gallery-previous-trigger",d);
this._nextButtons=W("data-ac-gallery-next-trigger",d);var c=this._el.getAttribute("aria-label")||"";
if(c.length){c="("+c+")"}this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
a=this._previousButtons.length;if(a){var f=this._el.getAttribute("data-ac-gallery-previouslabel");
if(f&&c.length){if(this._isRightToLeft){f=c+" "+f}else{f+=" "+c}}while(a--){if(f&&this._previousButtons[a].getAttribute("aria-label")===null){this._previousButtons[a].setAttribute("aria-label",f)
}ai(this._previousButtons[a],"click",this._onPaddlePrevious)}}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);
a=this._nextButtons.length;if(a){var b=this._el.getAttribute("data-ac-gallery-nextlabel");
if(b&&c.length){if(this._isRightToLeft){b=c+" "+b}else{b+=" "+c}}while(a--){if(b&&this._nextButtons[a].getAttribute("aria-label")===null){this._nextButtons[a].setAttribute("aria-label",b)
}ai(this._nextButtons[a],"click",this._onPaddleNext)}}if(this._nextButtons.length||this._previousButtons.length){this._hasPaddleNavStateHandler=true;
this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this.on(V.UPDATE,this._updatePaddleNavState)
}};T._onPaddleInteraction=function(a,b){ae(b);a.call(null,{interactionEvent:b})
};T._updatePaddleNavState=function(){if(!this._wrapAround){var a=this._items.indexOf(this._currentItem);
if(a===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
this._setPaddleDisabledState(this._nextButtons,false)}else{if(a===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}}}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}};T._setPaddleDisabledState=function(a,c){var b=a.length;
while(b--){a[b].disabled=c;if(c){ao.add(a[b],ab)}else{ao.remove(a[b],ab)}}};T._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
var b;var a;if(this._isRightToLeft){b=this.showPrevious;a=this.showNext}else{b=this.showNext;
a=this.showPrevious}this._rightArrowFunc=aj(this._onKeyboardInteraction.bind(null,b),this._keyboardThrottleDelay);
this._leftArrowFunc=aj(this._onKeyboardInteraction.bind(null,a),this._keyboardThrottleDelay);
an.onDown(O.ARROW_RIGHT,this._rightArrowFunc);an.onDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T._onKeyboardInteraction=function(a,b){if(this.isInView()&&!ag()){var c=V.getAllInView();
if(c.length>1){c.sort(function(d,f){d=(d._enableArrowKeys)?d.getCurrentItem().percentageInView():0;
f=(f._enableArrowKeys)?f.getCurrentItem().percentageInView():0;return f-d});if(this!==c[0]){return
}}a.call(null,{interactionEvent:b})}};T._setUpSwiping=function(a,b){this._onSwipeEnd=this._onSwipeEnd.bind(this);
if(a){this._touchSwipe=new ak(this._el,ak.TOUCH_EVENTS);this._touchSwipe.on(ak.END,this._onSwipeEnd)
}if(b){this._clickSwipe=new ak(this._el,ak.MOUSE_EVENTS);this._clickSwipe.on(ak.END,this._onSwipeEnd)
}};T._onSwipeEnd=function(b){var d;var c=b.interactionEvent;var g=c.type!=="touchend"||c.type!=="touchstart"||c.type!=="touchmove";
if(g){var f={type:"touchmove",target:c.target,srcElement:c.srcElement}}var a={interactionEvent:f||c};
if(b.swipe===ak.SWIPE_RIGHT){d=(this._isRightToLeft)?this.showNext:this.showPrevious
}else{if(b.swipe===ak.SWIPE_LEFT){d=(this._isRightToLeft)?this.showPrevious:this.showNext
}}if(d){return d.call(this,a)}c=null;return null};T._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
}return this._elementId};T._setUpContainerAutoResize=function(a){if(typeof a==="number"){this._containerResizeDuration=a
}else{if(a){this._containerResizeDuration=am}else{this._containerResizeDuration=false
}}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
this.on(V.UPDATE,this._updateContainerSize)}};T._updateContainerSize=function(a){var b=this._itemHeightsLookup[a.incoming[0].getElementId()];
if(b){this._setElHeight(b,this._containerResizeDuration)}};T._storeItemHeight=function(b,a){var c=S(b.getElement());
this._itemHeights.push({item:b,height:c.height});this._itemHeightsLookup[b.getElementId()]=c.height;
this._itemHeights.sort(function(d,f){return f.height-d.height});if(a&&this._itemHeights[0].item===b){this._setElHeight(c.height)
}};T._setElHeight=function(c,a){var b={height:c+"px"};if(a){b.transition="height "+a+"s"
}else{b.transition=null}Q.setStyle(this._el,b)};T._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!K.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)
}var a=this.showNext();if(a!==null){if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}};T._onWindowResize=function(a){window.requestAnimationFrame(function(){if(this._el){this.resize()
}}.bind(this))};ap.exports=X},{"../templates/paddlenav.js":289,"./../Gallery":269,"./../helpers/inputHasFocus":280,"./../helpers/selectElementFromDataAttributeValue":281,"./../helpers/selectElementThatHasDataAttribute":282,"./../navigation/ToggleNav":283,"@marcom/ac-classlist":12,"@marcom/ac-dom-events/addEventListener":239,"@marcom/ac-dom-events/preventDefault":247,"@marcom/ac-dom-events/removeEventListener":248,"@marcom/ac-dom-metrics/getContentDimensions":20,"@marcom/ac-dom-styles":68,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-feature/touchAvailable":237,"@marcom/ac-function/throttle":256,"@marcom/ac-keyboard":258,"@marcom/ac-keyboard/keyMap":260,"@marcom/ac-object/create":458,"@marcom/ac-page-visibility":261,"@marcom/ac-pointer-tracker":267,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame"}],274:[function(q,r,p){var m=q("./create");
var k=q("./../helpers/selectElementThatHasDataAttribute");var l=q("./../Gallery");
var s=l.FADE_SELECTOR.replace(/\[|\]/g,"");var n=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
r.exports=function o(b){b=b||{};var a=b.context||document.body;var d;var c;d=k(n,a);
c=d.length;while(c--){m(d[c],l.SLIDE,b)}d=k(s,a);c=d.length;while(c--){m(d[c],l.FADE,b)
}return l.getAll()}},{"./../Gallery":269,"./../helpers/selectElementThatHasDataAttribute":282,"./create":275}],275:[function(r,t,q){var n=r("./../fade/FadeGallery");
var l=r("./../Gallery");var s=r("./../slide/SlideGallery");var m="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
var u=l.FADE_SELECTOR.replace(/\[|\]/g,"");var o=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
t.exports=function p(c,d,a){var b;if(typeof d==="string"){if(d===l.SLIDE){b=s}else{if(d===l.FADE){b=n
}}}if(b===undefined){if(c.getAttribute(o)!==null){b=s}else{if(c.getAttribute(u)!==null){b=n
}}}if(b===undefined){throw new Error(m.replace(/%TYPE%/g,d))}return new b(c,a)}
},{"./../Gallery":269,"./../fade/FadeGallery":276,"./../slide/SlideGallery":286}],276:[function(u,w,s){var o=u("@marcom/ac-object/clone");
var q=u("@marcom/ac-object/create");var t=u("./FadeItem");var v=u("./../auto/AutoGallery");
var n=0.5;function p(b,a){a=o(a)||{};a.itemType=a.itemType||t;this._fadeDuration=a.duration||n;
a.toggleNavDuration=(a.toggleNavDuration===undefined)?this._fadeDuration:a.toggleNavDuration;
this._crossFade=a.crossFade;this._zIndexCount=a.startZIndex||1;this._ease=a.ease;
if(a.resizeContainerOnUpdate===true){a.resizeContainerOnUpdate=this._fadeDuration
}this._onItemShowComplete=this._onItemShowComplete.bind(this);v.call(this,b,a);
if(this._currentItem){this._currentItem.fadeIn(0)}}p.RESIZED=v.RESIZED;p.UPDATE=v.UPDATE;
p.UPDATE_COMPLETE=v.UPDATE_COMPLETE;var m=v.prototype;var r=p.prototype=q(m);r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=m.addItem.call(this,b,a);if(b!==this._currentItem){b.fadeOut()}else{b.fadeIn(0)
}return c};r.destroy=function(a){var b=m.destroy.call(this,a);this._fadeDuration=null;
this._crossFade=null;this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;
return b};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.fadeOut(0);
this._currentItem.hide();this._setCurrentItem(b);this._currentItem.show();this._currentItem.fadeIn(0);
this.trigger(p.UPDATE,this._items)}};r._onItemShowComplete=function(b){if(b&&b.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}return}var c;var a=this._items.length;while(a--){c=this._items[a];if(c!==this._currentItem){c.fadeOut()
}}if(this._incomingOutgoingItems){this.trigger(p.UPDATE_COMPLETE,this._incomingOutgoingItems)
}};r._updateItems=function(c,a){if(a){return}if(this._crossFade){var b=(a)?null:this.trigger.bind(this,p.UPDATE_COMPLETE,c);
c.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,b)
}else{this._incomingOutgoingItems=(a)?false:c;if(!c.outgoing[0].isFading()){c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}}c.outgoing[0].hide();c.incoming[0].show()};w.exports=p},{"./../auto/AutoGallery":273,"./FadeItem":277,"@marcom/ac-object/clone":457,"@marcom/ac-object/create":458}],277:[function(x,y,t){var p=x("@marcom/ac-dom-styles/setStyle");
var q=x("@marcom/ac-object/create");var u=x("@marcom/ac-solar/fade");var o=x("@marcom/ac-solar/fadeIn");
var r=x("@marcom/ac-solar/fadeOut");var v=x("./../Item");function w(a,b){v.call(this,a,b);
p(a,{position:"absolute"})}w.SELECTED=v.SELECTED;w.SHOW=v.SHOW;w.HIDE=v.HIDE;var n=v.prototype;
var s=w.prototype=q(n);s.fadeIn=function(d,c,a,b){if(d){p(this._el,{zIndex:a||1});
this._destroyCurrentClip();this._clip=u(this._el,0,1,d,{ease:c,onComplete:b})}else{o(this._el,0);
p(this._el,{zIndex:a||1})}};s.fadeOut=function(b,a){if(b){this._destroyCurrentClip();
this._clip=r(this._el,b,{ease:a})}else{r(this._el,0)}};s.isFading=function(){return !!(this._clip&&this._clip.playing())
};s.destroy=function(){p(this._el,{position:null,opacity:null,zIndex:null});n.destroy.call(this);
this._destroyCurrentClip();this._clip=null};s._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
}};y.exports=w},{"./../Item":270,"@marcom/ac-dom-styles/setStyle":71,"@marcom/ac-object/create":458,"@marcom/ac-solar/fade":575,"@marcom/ac-solar/fadeIn":576,"@marcom/ac-solar/fadeOut":577}],278:[function(m,k,h){var l=m("@marcom/ac-object/create");
var j=m("@marcom/ac-object/extend");k.exports=function i(a){var c=this;var b=function(){c.apply(this,arguments)
};var d=l(this.prototype);b.prototype=j(d,a);j(b,this);return b}},{"@marcom/ac-object/create":458,"@marcom/ac-object/extend":460}],279:[function(l,k,m){var h=l("@marcom/ac-dom-styles/getStyle");
var i=l("@marcom/ac-dom-metrics/getContentDimensions");k.exports=function j(b){var a=h(b,"margin-right","margin-left");
return Math.round(i(b).width)+parseInt(a.marginRight,10)+parseInt(a.marginLeft,10)
}},{"@marcom/ac-dom-metrics/getContentDimensions":20,"@marcom/ac-dom-styles/getStyle":69}],280:[function(f,i,g){i.exports=function h(){var a=["input","select","textarea"];
return a.indexOf(document.activeElement.nodeName.toLowerCase())>-1}},{}],281:[function(m,k,h){var j=m("@marcom/ac-dom-traversal/querySelectorAll");
var i=function(f,o){var d;var a=document.getElementsByTagName("*");var g=0;var c=a.length;
var b=[];for(g;g<c;g++){d=a[g];if(d.getAttribute(f)!==null&&d.getAttribute(f).split(" ").indexOf(o)>-1){b[b.length]=d
}}return b};k.exports=function l(d,a){var b=j("["+d+'*="'+a+'"]');if(b.length===0&&document.documentMode===7){return i(d,a)
}var o=[];var f=0;var c=b.length;var g;for(f;f<c;f++){g=b[f].getAttribute(d);if(g===a){o.push(b[f])
}else{if(g&&g.length){g=g.split(" ");if(g.indexOf(a)>-1){o.push(b[f])}}}}return o
}},{"@marcom/ac-dom-traversal/querySelectorAll":79}],282:[function(o,n,i){var k=o("@marcom/ac-dom-traversal/querySelectorAll");
var m=o("@marcom/ac-dom-traversal/ancestors");var j=function(d,c){var b;var g=document.getElementsByTagName("*");
var f=0;var a=g.length;var h=[];for(f;f<a;f++){b=g[f];if(b.getAttribute(d)!==null&&(!c||m(b).indexOf(c)>-1)){h[h.length]=b
}}return h};n.exports=function l(c,b){b=b||document.body;var a=k("["+c+"]",b);if(a.length===0&&document.documentMode===7){return j(c,b)
}return a}},{"@marcom/ac-dom-traversal/ancestors":72,"@marcom/ac-dom-traversal/querySelectorAll":79}],283:[function(D,I,t){var F=D("@marcom/ac-dom-events/addEventListener");
var E=D("@marcom/ac-dom-events/removeEventListener");var z=D("@marcom/ac-dom-metrics/getDimensions");
var u=D("@marcom/ac-dom-metrics/getPosition");var G=D("@marcom/ac-dom-styles/getStyle");
var H=D("@marcom/ac-dom-styles/setStyle");var K=D("@marcom/ac-dom-traversal/ancestors");
var C=D("@marcom/ac-object/create");var v=D("@marcom/ac-solar/scrollX");var B=D("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var y=D("./../Gallery");var A=0.5;function w(a,c,b){b=b||{};this._el=a;this._isRightToLeft=(b.rightToLeft===undefined)?G(a,"direction").direction==="rtl":b.rightToLeft;
this._scrollType=this._scrollDirection();this._gallery=c;this._triggers={};this._ordered=[];
this._containerEl=this._el.children[0];this._slideDuration=(b.duration===undefined)?A:b.duration;
B.call(this)}var J=B.prototype;var x=w.prototype=C(J);x.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(y.UPDATE,this._onGalleryUpdated);
this.resize();F(window,"load",this._onWindowLoad)};x.addTrigger=function(c,b){if(this._triggers[b.getElementId()]!==undefined){return
}var d=K(c);if(d.indexOf(this._el)>-1){var a={el:c};this._triggers[b.getElementId()]=a;
this._ordered.push(a)}};x.resize=function(){if(!this._ordered.length){return}H(this._containerEl,{paddingLeft:null,paddingRight:null});
this._containerWidth=z(this._containerEl).width;this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);
var c=this._ordered.length;while(c--){this._setTriggerData(this._ordered[c])}this._ordered.sort(function(h,i){return h.left-i.left
});if(this._containerWidth>this._width){var a=this._ordered[0];var b=this._ordered[this._ordered.length-1];
var d=(this._width-a.width)*0.5;var g=(this._width-b.width)*0.5;H(this._containerEl,{paddingLeft:d+"px",paddingRight:g+"px"});
var f=this._triggers[this._gallery.getCurrentItem().getElementId()];if(f){this._centerNav(f)
}}};x.destroy=function(){this._gallery.off(y.UPDATE,this._onGalleryUpdated);E(window,"load",this._onWindowLoad);
H(this._containerEl,{paddingLeft:null,paddingRight:null});this._el=null;this._gallery=null;
this._triggers=null;this._ordered=null;this._containerEl=null;this._destroyCurrentClip();
this._clip=null;return J.destroy.call(this)};x._onWindowLoad=function(){E(window,"load",this._onWindowLoad);
this.resize()};x._setTriggerData=function(a){a.width=z(a.el).width;var b=u(a.el);
a.left=b.left;a.right=b.right;a.center=a.left+(a.width*0.5)};x._centerNav=function(c,a){this._setTriggerData(c);
this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);var b=Math.round(c.center-this._viewCenter);
if(this._isRightToLeft){if(this._scrollType!=="negative"){b=Math.abs(b)}if(this._scrollType==="default"){b=this._el.scrollWidth-this._el.clientWidth-b
}}this._destroyCurrentClip();if(a){this._clip=v(this._el,b,a)}else{this._el.scrollLeft=b
}};x._onGalleryUpdated=function(b){var a=this._triggers[b.incoming[0].getElementId()];
if(a){this._centerNav(a,this._slideDuration)}};x._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};x._scrollDirection=function(){var a="reverse";var b=document.createElement("div");
b.style.cssText="width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;";
b.style.direction="rtl";b.innerHTML="test";document.body.appendChild(b);if(b.scrollLeft>0){a="default"
}else{b.scrollLeft=1;if(b.scrollLeft===0){a="negative"}}document.body.removeChild(b);
return a};I.exports=w},{"./../Gallery":269,"@marcom/ac-dom-events/addEventListener":239,"@marcom/ac-dom-events/removeEventListener":248,"@marcom/ac-dom-metrics/getDimensions":21,"@marcom/ac-dom-metrics/getPosition":25,"@marcom/ac-dom-styles/getStyle":69,"@marcom/ac-dom-styles/setStyle":71,"@marcom/ac-dom-traversal/ancestors":72,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/create":458,"@marcom/ac-solar/scrollX":581}],284:[function(f,h,g){var i=f("./../analytics/AnalyticsManager");
h.exports=new i()},{"./../analytics/AnalyticsManager":272}],285:[function(o,n,i){var l=["input","select","textarea","button","object"];
var k=["href","tabindex","contenteditable"];var j=function(){this.focusableSelectors=l.concat(k.map(function(a){return(a==="href")?"a["+a+"]":"*["+a+"]"
})).join(",")};var m=j.prototype;m.isFocusable=function(b,d){var a=b.nodeName.toLowerCase();
var c=l.indexOf(a)>-1;if(a==="a"){return true}if(c){return !b.disabled}if(!b.contentEditable){return true
}d=d||b.tabIndex;return isNaN(d)};m.isTabbable=function(a){var b=a.getAttribute("tabindex");
if(!isNaN(b)){return(b>=0)}else{return this.isFocusable(a,b)}};m.getTabbable=function(d){var b=d.length;
var c=[];for(var a=0;a<b;a++){if(this.isTabbable(d[a])){c.push(d[a])}}return c};
n.exports=new j()},{}],286:[function(N,Q,x){var P=N("@marcom/ac-classlist");var F=N("@marcom/ac-dom-styles");
var z=N("@marcom/ac-dom-traversal/querySelectorAll");var B=N("@marcom/ac-object/clone");
var L=N("@marcom/ac-object/create");var y=N("./../helpers/getElementFullWidth");
var H=N("@marcom/ac-solar/moveX");var A=N("./../helpers/selectElementFromDataAttributeValue");
var M=N("./../helpers/selectElementThatHasDataAttribute");var I=N("./../auto/AutoGallery");
var O=N("@marcom/ac-pointer-tracker").PointerTracker;var D=N("./SlideItem");var K=N("./SlideItemWrapper");
var S=0.5;var J=0.5;var C=true;function E(c,d){d=B(d)||{};d.itemType=d.itemType||D;
this._itemsPerSlide=d.itemsPerSlide||1;var b=d.deeplink!==false;d.deeplink=false;
this._slideDuration=(d.duration!==undefined)?d.duration:J;d.toggleNavDuration=(d.toggleNavDuration===undefined)?this._slideDuration:d.toggleNavDuration;
this._itemCenterPoint=(d.itemCenterPoint!==undefined)?d.itemCenterPoint:S;this._edgePullResistance=(d.edgePullResistance?d.edgePullResistance:C);
this._slideOptions={ease:d.ease};if(d.resizeContainerOnUpdate===true){d.resizeContainerOnUpdate=this._slideDuration
}d.touch=d.touch!==false;this._originalWrapAround=d.wrapAround||false;I.call(this,c,d);
if(b){var a=this._getDeeplinkedItem();if(a){if(this._currentItem!==a){this._currentItem.hide();
this._setCurrentItem(a);this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);
this._createContainer();if(this._items.length!==0){this._positionItems()}this._isInstantiated=true
}E.RESIZED=I.RESIZED;E.UPDATE=I.UPDATE;E.UPDATE_COMPLETE=I.UPDATE_COMPLETE;var R=I.prototype;
var G=E.prototype=L(R);G.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=R.addItem.call(this,b,a);if(this._containerEl!==undefined){this._addItemToContainer(b);
this._positionItems()}this._updateWrapAround();return c};G.removeItem=function(b,d){if(this._containerEl&&b.getElement().parentElement===this._containerEl){var a=b.getOriginalParentElement();
if(a){a.appendChild(b.getElement())}else{if(typeof b.removeItems==="function"){b.removeItems();
d.destroyItem=true}}var c=R.removeItem.call(this,b,d);if(this._currentItem){this._positionItems(this._currentItem)
}this._updateWrapAround();return c}return R.removeItem.call(this,b,d)};G.resize=function(){this._positionItems();
this._snapToPosition(this._currentItem.position());return R.resize.call(this)};
G.destroy=function(d){this._destroyCurrentClip();this._clip=null;var b=this._items.length;
while(b--){this._items[b].off(D.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(O.START,this._onSwipeStart);
this._touchSwipe.off(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(O.START,this._onSwipeStart);
this._clickSwipe.off(O.UPDATE,this._onSwipeUpdate)}var a=this._el;var c=R.destroy.call(this,d);
a.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return c
};G._addItems=function(d){if(this._itemsPerSlide>1){var i;var f=/(^\[).*(\]$)/.test(d);
if(f){i=M(d.replace(/\[|\]/g,""),this._el)}else{i=z(d,this._el)}var h;var j;var c;
var b=0;var a=0;var g=i.length;for(a;a<g;a++){if(b===0){h=new K()}h.addItem(i[a]);
c=i[a].getAttribute("id");if(c){j=A("data-ac-gallery-trigger",c);this._addItemTriggers(h,j)
}if(++b===this._itemsPerSlide||a===g-1){b=0;h.resize();this.addItem(h)}}}else{R._addItems.call(this,d)
}};G._createContainer=function(){this._containerEl=document.createElement("div");
P.add(this._containerEl,"ac-gallery-slidecontainer");F.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
this._el.appendChild(this._containerEl);var a=0;var b=this._items.length;for(a;
a<b;a++){this._addItemToContainer(this._items[a])}};G._addItemToContainer=function(a){this._containerEl.appendChild(a.getElement());
a.on(D.CENTER_POINT_CHANGED,this._positionItems)};G._positionItems=function(c){c=c||this._currentItem;
var l=this._items;if(this._wrapAround){l=this._shuffleItems()}var j=(this._getActualPositionX()-c.position())||0;
var k=parseInt(F.getStyle(this._el,"width").width,10);var g=0;var a=0;var d=l.length;
var i;var f;var h;var b;var m;for(a;a<d;a++){i=l[a];i.resize();f=i.getElement();
F.setStyle(f,{left:g+"px"});h=y(f);b=k-h;m=(i.centerPoint&&i.centerPoint()!==null)?i.centerPoint():this._itemCenterPoint;
i.position((g*-1)+(b*m));if(this._isRightToLeft){g-=h}else{g+=h}}g=c.position()+j;
this._snapToPosition(g)};G._getActualPositionX=function(){var c=F.getStyle(this._containerEl,"transform").transform;
if(!c||c==="none"){var b=F.getStyle(this._containerEl,"left").left;return parseInt(b,10)
}else{if(c===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
}}this._transformStyles=c;var a=this._transformStyles.split(",");this._actualPositionX=a[4]||this._currentItem.position();
return this._actualPositionX*1};G._snapToPosition=function(a){this._destroyCurrentClip();
this._positionX=a;F.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
H(this._containerEl,a,0,this._slideOptions)};G._slideToPosition=function(a,c,b){this._positionX=a;
this._clip=H(this._containerEl,a,c,{ease:this._slideOptions.ease,onComplete:b})
};G._setUpSwiping=function(c,a){var b=R._setUpSwiping.call(this,c,a);this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(O.START,this._onSwipeStart);
this._touchSwipe.on(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(O.START,this._onSwipeStart);
this._clickSwipe.on(O.UPDATE,this._onSwipeUpdate)}return b};G._onSwipeStart=function(a){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
this._positionX=this._getActualPositionX()}};G._onSwipeUpdate=function(b){this._destroyCurrentClip();
var c=this.getItems().slice(-1)[0].position();var a=this._positionX>0||this._positionX<c;
var d=b.diffX;if(this._edgePullResistance&&!this._wrapAround&&a){d*=0.5}this._snapToPosition(this._positionX-d)
};G._onSwipeEnd=function(a){var b=R._onSwipeEnd.call(this,a);if(b===null){b=this.show(this._currentItem,{interactionEvent:a.interactionEvent})
}return b};G._shuffleItems=function(){var i=this._items.length===2&&!this._isAutoPlaying;
if(i){return this._items.slice()}var c=this._items.length;var h=this._items.indexOf(this._currentItem);
var d=Math.floor(c*0.5);var b;var a;var g;if(h<d){b=d-h;var f=c-b;a=this._items.slice(f);
g=this._items.slice(0,f);return a.concat(g)}else{if(h>d){b=h-d;a=this._items.slice(0,b);
g=this._items.slice(b);return g.concat(a)}}return this._items};G._updateItems=function(d,b){this._destroyCurrentClip();
if(this._wrapAround){this._positionItems(d.outgoing[0])}if(this.getItemIndex(d.outgoing[0])>-1){var a=(b)?null:this.trigger.bind(this,E.UPDATE_COMPLETE,d);
var c=this._slideDuration;this._slideToPosition(d.incoming[0].position(),c,a);if(d.incoming[0]!==d.outgoing[0]){d.incoming[0].show();
d.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
d.incoming[0].show();if(!b){this.trigger(E.UPDATE_COMPLETE,d)}}};G._updateWrapAround=function(){if(this._items.length<=2){this._wrapAround=false
}else{if(this._originalWrapAround){this._wrapAround=this._originalWrapAround}}if(this._isInstantiated&&(this._previousButtons||this._nextButtons)){this._updatePaddleNavState()
}};G._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};Q.exports=E},{"./../auto/AutoGallery":273,"./../helpers/getElementFullWidth":279,"./../helpers/selectElementFromDataAttributeValue":281,"./../helpers/selectElementThatHasDataAttribute":282,"./SlideItem":287,"./SlideItemWrapper":288,"@marcom/ac-classlist":12,"@marcom/ac-dom-styles":68,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-object/clone":457,"@marcom/ac-object/create":458,"@marcom/ac-pointer-tracker":267,"@marcom/ac-solar/moveX":579}],287:[function(r,s,p){var m=r("@marcom/ac-dom-styles/setStyle");
var n=r("@marcom/ac-object/create");var q=r("./../Item");function l(a,b){q.call(this,a,b);
m(a,{position:"absolute",transform:{translateZ:0}});this._parentElement=a.parentElement
}l.CENTER_POINT_CHANGED="centerpointchanged";l.SELECTED=q.SELECTED;l.SHOW=q.SHOW;
l.HIDE=q.HIDE;var k=q.prototype;var o=l.prototype=n(k);o.position=function(a){if(a!==undefined){this._position=a
}return this._position||0};o.centerPoint=function(a){if(a!==undefined){this._centerPoint=a;
this.trigger(l.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
};o.getOriginalParentElement=function(){return this._parentElement};o.resize=function(){};
o.destroy=function(){m(this._el,{position:null,left:null,transform:null});k.destroy.call(this)
};s.exports=l},{"./../Item":270,"@marcom/ac-dom-styles/setStyle":71,"@marcom/ac-object/create":458}],288:[function(x,z,w){var q=x("@marcom/ac-classlist");
var t=x("@marcom/ac-dom-styles/setStyle");var A=x("@marcom/ac-dom-traversal/querySelectorAll");
var u=x("@marcom/ac-object/create");var p=x("./../singletons/tabManager");var C=x("./../helpers/getElementFullWidth");
var s=x("./SlideItem");var B="ac-gallery-slideitemwrapper";function y(){s.call(this,document.createElement("div"));
this._items=[];this._currentWidth=0;q.add(this._el,B)}var r=s.prototype;var v=y.prototype=u(r);
v.addItem=function(b){this._items.push({el:b,parentElement:b.parentElement});this._el.appendChild(b);
var d=b.getAttribute("id");if(d){var a=this._el.getAttribute("id")||"";var c=(a.length)?"-":"";
a+=c+d;this._el.setAttribute("id",a)}this._focusableEls=this._focusableEls.concat(A(p.focusableSelectors,b))
};v.removeItems=function(){var b;var d;var c=0;var a=this._items.length;for(c;c<a;
c++){b=this._items[c].el;t(b,{position:null,left:null});d=this._items[c].parentElement;
if(d){d.appendChild(b)}}};v.resize=function(){this._currentWidth=0;var b;var c=0;
var a=this._items.length;for(c;c<a;c++){b=this._items[c].el;t(b,{position:"absolute",left:this._currentWidth+"px"});
this._currentWidth+=C(b)}t(this._el,{width:this._currentWidth+"px"})};v.destroy=function(){this.removeItems();
this._items=null;this._currentWidth=null;var a=this._el.parentElement;if(a){a.removeChild(this._el)
}r.destroy.call(this)};z.exports=y},{"./../helpers/getElementFullWidth":279,"./../singletons/tabManager":285,"./SlideItem":287,"@marcom/ac-classlist":12,"@marcom/ac-dom-styles/setStyle":71,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-object/create":458}],289:[function(f,i,g){var h="";
h+='<nav class="paddlenav">';h+="<ul>";h+='<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
h+='<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
h+="</ul>";h+="</nav>";i.exports=h},{}],290:[function(d,g,f){g.exports={GPUReporter:d("./ac-gpu-reporter/GPUReporter")}
},{"./ac-gpu-reporter/GPUReporter":291}],291:[function(n,m,o){var i=n("@marcom/ac-feature/webGLAvailable");
var j=n("./defaults");function l(){}var k=l.prototype;k.BLACKLISTED=1;k.WHITELISTED=2;
k.NOT_LISTED=4;k.NOT_FOUND=8;k.NO_WEBGL=16;k.getGPUClass=function(b){var c;var a=this._extendLists(b);
if(i()){c=this.getGPU();if(c!==null){if(this._matchesList(c,a.whitelist)){return this.WHITELISTED
}else{if(this._matchesList(c,a.blacklist)){return this.BLACKLISTED}else{return this.NOT_LISTED
}}}else{return this.NOT_FOUND}}else{return this.NO_WEBGL}};k.getGPU=function(){var c,b,a;
c=document.createElement("canvas");b=c.getContext("webgl")||c.getContext("experimental-webgl")||c.getContext("moz-webgl");
if(b){a=b.getExtension("WEBGL_debug_renderer_info");if(a!==null){return b.getParameter(a.UNMASKED_RENDERER_WEBGL)
}return b.getParameter(b.VERSION)}return null};k._matchesList=function(b,a){var c;
for(c=0;c<a.length;c++){if(this._matchesEntry(b,a[c])){return true}}return false
};k._matchesEntry=function(b,g){var f=b.toLowerCase();var d=g.toLowerCase().split(" ");
var a=true;var c;for(c=0;c<d.length;c++){if(f.indexOf(d[c])===-1){a=false}}return a
};k._extendLists=function(b){var c;var a=JSON.parse(JSON.stringify(j));if(b!==undefined){if(b.blacklist!==undefined&&b.blacklist.length>0){for(c=0;
c<b.blacklist.length;c++){a.blacklist.push(b.blacklist[c])}}if(b.whitelist!==undefined&&b.whitelist.length>0){for(c=0;
c<b.whitelist.length;c++){a.whitelist.push(b.whitelist[c])}}}return a};m.exports=l
},{"./defaults":292,"@marcom/ac-feature/webGLAvailable":238}],292:[function(d,g,f){g.exports={blacklist:["Intel HD Graphics 5300","AMD Radeon R5 Graphics","Apple A7 GPU"],whitelist:["Radeon FirePro D700","GeForce GT 750 M","Apple A8 GPU","Apple A9 GPU","Apple A9X GPU"]}
},{}],293:[function(d,g,f){(function(a8){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
;
"use strict";var cw=d("base64-js");var bn=d("ieee754");var bo=d("isarray");f.Buffer=cy;
f.SlowBuffer=cl;f.INSPECT_MAX_BYTES=50;cy.poolSize=8192;var cH={};cy.TYPED_ARRAY_SUPPORT=a8.TYPED_ARRAY_SUPPORT!==undefined?a8.TYPED_ARRAY_SUPPORT:cs();
function cs(){function i(){}try{var j=new Uint8Array(1);j.foo=function(){return 42
};j.constructor=i;return j.foo()===42&&j.constructor===i&&typeof j.subarray==="function"&&j.subarray(1,1).byteLength===0
}catch(h){return false}}function bX(){return cy.TYPED_ARRAY_SUPPORT?2147483647:1073741823
}function cy(h){if(!(this instanceof cy)){if(arguments.length>1){return new cy(h,arguments[1])
}return new cy(h)}if(!cy.TYPED_ARRAY_SUPPORT){this.length=0;this.parent=undefined
}if(typeof h==="number"){return bO(this,h)}if(typeof h==="string"){return bm(this,h,arguments.length>1?arguments[1]:"utf8")
}return b8(this,h)}function bO(h,i){h=bh(h,i<0?0:cp(i)|0);if(!cy.TYPED_ARRAY_SUPPORT){for(var j=0;
j<i;j++){h[j]=0}}return h}function bm(k,j,h){if(typeof h!=="string"||h===""){h="utf8"
}var i=bM(j,h)|0;k=bh(k,i);k.write(j,h);return k}function b8(h,i){if(cy.isBuffer(i)){return cc(h,i)
}if(bo(i)){return a(h,i)}if(i==null){throw new TypeError("must start with number, buffer, array or string")
}if(typeof ArrayBuffer!=="undefined"){if(i.buffer instanceof ArrayBuffer){return by(h,i)
}if(i instanceof ArrayBuffer){return b2(h,i)}}if(i.length){return bC(h,i)}return bI(h,i)
}function cc(h,j){var i=cp(j.length)|0;h=bh(h,i);j.copy(h,0,0,i);return h}function a(h,k){var i=cp(k.length)|0;
h=bh(h,i);for(var j=0;j<i;j+=1){h[j]=k[j]&255}return h}function by(h,k){var i=cp(k.length)|0;
h=bh(h,i);for(var j=0;j<i;j+=1){h[j]=k[j]&255}return h}function b2(i,h){if(cy.TYPED_ARRAY_SUPPORT){h.byteLength;
i=cy._augment(new Uint8Array(h))}else{i=by(i,new Uint8Array(h))}return i}function bC(h,k){var i=cp(k.length)|0;
h=bh(h,i);for(var j=0;j<i;j+=1){h[j]=k[j]&255}return h}function bI(l,j){var k;var h=0;
if(j.type==="Buffer"&&bo(j.data)){k=j.data;h=cp(k.length)|0}l=bh(l,h);for(var i=0;
i<h;i+=1){l[i]=k[i]&255}return l}if(cy.TYPED_ARRAY_SUPPORT){cy.prototype.__proto__=Uint8Array.prototype;
cy.__proto__=Uint8Array}else{cy.prototype.length=undefined;cy.prototype.parent=undefined
}function bh(h,i){if(cy.TYPED_ARRAY_SUPPORT){h=cy._augment(new Uint8Array(i));h.__proto__=cy.prototype
}else{h.length=i;h._isBuffer=true}var j=i!==0&&i<=cy.poolSize>>>1;if(j){h.parent=cH
}return h}function cp(h){if(h>=bX()){throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+bX().toString(16)+" bytes")
}return h|0}function cl(i,h){if(!(this instanceof cl)){return new cl(i,h)}var j=new cy(i,h);
delete j.parent;return j}cy.isBuffer=function c(h){return !!(h!=null&&h._isBuffer)
};cy.compare=function cI(m,h){if(!cy.isBuffer(m)||!cy.isBuffer(h)){throw new TypeError("Arguments must be Buffers")
}if(m===h){return 0}var i=m.length;var k=h.length;var l=0;var j=Math.min(i,k);while(l<j){if(m[l]!==h[l]){break
}++l}if(l!==j){i=m[l];k=h[l]}if(i<k){return -1}if(k<i){return 1}return 0};cy.isEncoding=function bs(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;
default:return false}};cy.concat=function cK(l,m){if(!bo(l)){throw new TypeError("list argument must be an Array of Buffers.")
}if(l.length===0){return new cy(0)}var i;if(m===undefined){m=0;for(i=0;i<l.length;
i++){m+=l[i].length}}var j=new cy(m);var k=0;for(i=0;i<l.length;i++){var h=l[i];
h.copy(j,k);k+=h.length}return j};function bM(i,h){if(typeof i!=="string"){i=""+i
}var j=i.length;if(j===0){return 0}var k=false;for(;;){switch(h){case"ascii":case"binary":case"raw":case"raws":return j;
case"utf8":case"utf-8":return ci(i).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j*2;
case"hex":return j>>>1;case"base64":return b7(i).length;default:if(k){return ci(i).length
}h=(""+h).toLowerCase();k=true}}}cy.byteLength=bM;function bz(i,k,j){var h=false;
k=k|0;j=j===undefined||j===Infinity?this.length:j|0;if(!i){i="utf8"}if(k<0){k=0
}if(j>this.length){j=this.length}if(j<=k){return""}while(true){switch(i){case"hex":return ca(this,k,j);
case"utf8":case"utf-8":return cn(this,k,j);case"ascii":return bF(this,k,j);case"binary":return cm(this,k,j);
case"base64":return cu(this,k,j);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b3(this,k,j);
default:if(h){throw new TypeError("Unknown encoding: "+i)}i=(i+"").toLowerCase();
h=true}}}cy.prototype.toString=function bU(){var h=this.length|0;if(h===0){return""
}if(arguments.length===0){return cn(this,0,h)}return bz.apply(this,arguments)};
cy.prototype.equals=function bG(h){if(!cy.isBuffer(h)){throw new TypeError("Argument must be a Buffer")
}if(this===h){return true}return cy.compare(this,h)===0};cy.prototype.inspect=function ch(){var h="";
var i=f.INSPECT_MAX_BYTES;if(this.length>0){h=this.toString("hex",0,i).match(/.{2}/g).join(" ");
if(this.length>i){h+=" ... "}}return"<Buffer "+h+">"};cy.prototype.compare=function cI(h){if(!cy.isBuffer(h)){throw new TypeError("Argument must be a Buffer")
}if(this===h){return 0}return cy.compare(this,h)};cy.prototype.indexOf=function bi(h,i){if(i>2147483647){i=2147483647
}else{if(i<-2147483648){i=-2147483648}}i>>=0;if(this.length===0){return -1}if(i>=this.length){return -1
}if(i<0){i=Math.max(this.length+i,0)}if(typeof h==="string"){if(h.length===0){return -1
}return String.prototype.indexOf.call(this,h,i)}if(cy.isBuffer(h)){return j(this,h,i)
}if(typeof h==="number"){if(cy.TYPED_ARRAY_SUPPORT&&Uint8Array.prototype.indexOf==="function"){return Uint8Array.prototype.indexOf.call(this,h,i)
}return j(this,[h],i)}function j(o,l,m){var k=-1;for(var n=0;m+n<o.length;n++){if(o[m+n]===l[k===-1?0:n-k]){if(k===-1){k=n
}if(n-k+1===l.length){return m+k}}else{k=-1}}return -1}throw new TypeError("val must be string, number or Buffer")
};cy.prototype.get=function cA(h){console.log(".get() is deprecated. Access using array indexes instead.");
return this.readUInt8(h)};cy.prototype.set=function bA(i,h){console.log(".set() is deprecated. Access using array indexes instead.");
return this.writeUInt8(i,h)};function bb(h,i,k,l){k=Number(k)||0;var n=h.length-k;
if(!l){l=n}else{l=Number(l);if(l>n){l=n}}var m=i.length;if(m%2!==0){throw new Error("Invalid hex string")
}if(l>m/2){l=m/2}for(var o=0;o<l;o++){var j=parseInt(i.substr(o*2,2),16);if(isNaN(j)){throw new Error("Invalid hex string")
}h[k+o]=j}return o}function bq(i,j,k,h){return br(ci(j,i.length-k),i,k,h)}function cG(i,j,k,h){return br(b6(j),i,k,h)
}function ce(i,j,k,h){return cG(i,j,k,h)}function bu(i,j,k,h){return br(b7(j),i,k,h)
}function a0(i,j,k,h){return br(bP(j,i.length-k),i,k,h)}cy.prototype.write=function cf(j,l,n,h){if(l===undefined){h="utf8";
n=this.length;l=0}else{if(n===undefined&&typeof l==="string"){h=l;n=this.length;
l=0}else{if(isFinite(l)){l=l|0;if(isFinite(n)){n=n|0;if(h===undefined){h="utf8"
}}else{h=n;n=undefined}}else{var m=h;h=l;l=n|0;n=m}}}var i=this.length-l;if(n===undefined||n>i){n=i
}if((j.length>0&&(n<0||l<0))||l>this.length){throw new RangeError("attempt to write outside buffer bounds")
}if(!h){h="utf8"}var k=false;for(;;){switch(h){case"hex":return bb(this,j,l,n);
case"utf8":case"utf-8":return bq(this,j,l,n);case"ascii":return cG(this,j,l,n);
case"binary":return ce(this,j,l,n);case"base64":return bu(this,j,l,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a0(this,j,l,n);
default:if(k){throw new TypeError("Unknown encoding: "+h)}h=(""+h).toLowerCase();
k=true}}};cy.prototype.toJSON=function bQ(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}
};function cu(i,h,j){if(h===0&&j===i.length){return cw.fromByteArray(i)}else{return cw.fromByteArray(i.slice(h,j))
}}function cn(q,r,o){o=Math.min(q.length,o);var l=[];var n=r;while(n<o){var j=q[n];
var k=null;var h=(j>239)?4:(j>223)?3:(j>191)?2:1;if(n+h<=o){var i,s,m,p;switch(h){case 1:if(j<128){k=j
}break;case 2:i=q[n+1];if((i&192)===128){p=(j&31)<<6|(i&63);if(p>127){k=p}}break;
case 3:i=q[n+1];s=q[n+2];if((i&192)===128&&(s&192)===128){p=(j&15)<<12|(i&63)<<6|(s&63);
if(p>2047&&(p<55296||p>57343)){k=p}}break;case 4:i=q[n+1];s=q[n+2];m=q[n+3];if((i&192)===128&&(s&192)===128&&(m&192)===128){p=(j&15)<<18|(i&63)<<12|(s&63)<<6|(m&63);
if(p>65535&&p<1114112){k=p}}}}if(k===null){k=65533;h=1}else{if(k>65535){k-=65536;
l.push(k>>>10&1023|55296);k=56320|k&1023}}l.push(k);n+=h}return b9(l)}var bt=4096;
function b9(i){var j=i.length;if(j<=bt){return String.fromCharCode.apply(String,i)
}var k="";var h=0;while(h<j){k+=String.fromCharCode.apply(String,i.slice(h,h+=bt))
}return k}function bF(h,k,j){var i="";j=Math.min(h.length,j);for(var l=k;l<j;l++){i+=String.fromCharCode(h[l]&127)
}return i}function cm(h,k,j){var i="";j=Math.min(h.length,j);for(var l=k;l<j;l++){i+=String.fromCharCode(h[l])
}return i}function ca(m,k,i){var j=m.length;if(!k||k<0){k=0}if(!i||i<0||i>j){i=j
}var h="";for(var l=k;l<i;l++){h+=cD(m[l])}return h}function b3(h,k,i){var j=h.slice(k,i);
var l="";for(var m=0;m<j.length;m+=2){l+=String.fromCharCode(j[m]+j[m+1]*256)}return l
}cy.prototype.slice=function bV(k,i){var j=this.length;k=~~k;i=i===undefined?j:~~i;
if(k<0){k+=j;if(k<0){k=0}}else{if(k>j){k=j}}if(i<0){i+=j;if(i<0){i=0}}else{if(i>j){i=j
}}if(i<k){i=k}var l;if(cy.TYPED_ARRAY_SUPPORT){l=cy._augment(this.subarray(k,i))
}else{var m=i-k;l=new cy(m,undefined);for(var h=0;h<m;h++){l[h]=this[h+k]}}if(l.length){l.parent=this.parent||this
}return l};function bS(h,j,i){if((h%1)!==0||h<0){throw new RangeError("offset is not uint")
}if(h+j>i){throw new RangeError("Trying to access beyond buffer length")}}cy.prototype.readUIntLE=function bj(k,j,m){k=k|0;
j=j|0;if(!m){bS(k,j,this.length)}var l=this[k];var h=1;var i=0;while(++i<j&&(h*=256)){l+=this[k+i]*h
}return l};cy.prototype.readUIntBE=function cC(k,j,h){k=k|0;j=j|0;if(!h){bS(k,j,this.length)
}var l=this[k+ --j];var i=1;while(j>0&&(i*=256)){l+=this[k+ --j]*i}return l};cy.prototype.readUInt8=function bf(h,i){if(!i){bS(h,1,this.length)
}return this[h]};cy.prototype.readUInt16LE=function bc(h,i){if(!i){bS(h,2,this.length)
}return this[h]|(this[h+1]<<8)};cy.prototype.readUInt16BE=function cr(h,i){if(!i){bS(h,2,this.length)
}return(this[h]<<8)|this[h+1]};cy.prototype.readUInt32LE=function bB(h,i){if(!i){bS(h,4,this.length)
}return((this[h])|(this[h+1]<<8)|(this[h+2]<<16))+(this[h+3]*16777216)};cy.prototype.readUInt32BE=function cF(h,i){if(!i){bS(h,4,this.length)
}return(this[h]*16777216)+((this[h+1]<<16)|(this[h+2]<<8)|this[h+3])};cy.prototype.readIntLE=function b1(k,j,m){k=k|0;
j=j|0;if(!m){bS(k,j,this.length)}var l=this[k];var h=1;var i=0;while(++i<j&&(h*=256)){l+=this[k+i]*h
}h*=128;if(l>=h){l-=Math.pow(2,8*j)}return l};cy.prototype.readIntBE=function bT(k,j,m){k=k|0;
j=j|0;if(!m){bS(k,j,this.length)}var i=j;var h=1;var l=this[k+ --i];while(i>0&&(h*=256)){l+=this[k+ --i]*h
}h*=128;if(l>=h){l-=Math.pow(2,8*j)}return l};cy.prototype.readInt8=function cq(h,i){if(!i){bS(h,1,this.length)
}if(!(this[h]&128)){return(this[h])}return((255-this[h]+1)*-1)};cy.prototype.readInt16LE=function bK(h,j){if(!j){bS(h,2,this.length)
}var i=this[h]|(this[h+1]<<8);return(i&32768)?i|4294901760:i};cy.prototype.readInt16BE=function bE(h,j){if(!j){bS(h,2,this.length)
}var i=this[h+1]|(this[h]<<8);return(i&32768)?i|4294901760:i};cy.prototype.readInt32LE=function cg(h,i){if(!i){bS(h,4,this.length)
}return(this[h])|(this[h+1]<<8)|(this[h+2]<<16)|(this[h+3]<<24)};cy.prototype.readInt32BE=function cb(h,i){if(!i){bS(h,4,this.length)
}return(this[h]<<24)|(this[h+1]<<16)|(this[h+2]<<8)|(this[h+3])};cy.prototype.readFloatLE=function bg(h,i){if(!i){bS(h,4,this.length)
}return bn.read(this,h,true,23,4)};cy.prototype.readFloatBE=function cx(h,i){if(!i){bS(h,4,this.length)
}return bn.read(this,h,false,23,4)};cy.prototype.readDoubleLE=function bp(h,i){if(!i){bS(h,8,this.length)
}return bn.read(this,h,true,52,8)};cy.prototype.readDoubleBE=function b0(h,i){if(!i){bS(h,8,this.length)
}return bn.read(this,h,false,52,8)};function co(i,l,k,m,j,h){if(!cy.isBuffer(i)){throw new TypeError("buffer must be a Buffer instance")
}if(l>j||l<h){throw new RangeError("value is out of bounds")}if(k+m>i.length){throw new RangeError("index out of range")
}}cy.prototype.writeUIntLE=function bY(h,k,j,l){h=+h;k=k|0;j=j|0;if(!l){co(this,h,k,j,Math.pow(2,8*j),0)
}var m=1;var i=0;this[k]=h&255;while(++i<j&&(m*=256)){this[k+i]=(h/m)&255}return k+j
};cy.prototype.writeUIntBE=function bJ(h,k,j,l){h=+h;k=k|0;j=j|0;if(!l){co(this,h,k,j,Math.pow(2,8*j),0)
}var i=j-1;var m=1;this[k+i]=h&255;while(--i>=0&&(m*=256)){this[k+i]=(h/m)&255}return k+j
};cy.prototype.writeUInt8=function cB(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,1,255,0)
}if(!cy.TYPED_ARRAY_SUPPORT){j=Math.floor(j)}this[h]=(j&255);return h+1};function cE(i,m,k,l){if(m<0){m=65535+m+1
}for(var h=0,j=Math.min(i.length-k,2);h<j;h++){i[k+h]=(m&(255<<(8*(l?h:1-h))))>>>(l?h:1-h)*8
}}cy.prototype.writeUInt16LE=function cd(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,2,65535,0)
}if(cy.TYPED_ARRAY_SUPPORT){this[h]=(j&255);this[h+1]=(j>>>8)}else{cE(this,j,h,true)
}return h+2};cy.prototype.writeUInt16BE=function bl(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,2,65535,0)
}if(cy.TYPED_ARRAY_SUPPORT){this[h]=(j>>>8);this[h+1]=(j&255)}else{cE(this,j,h,false)
}return h+2};function bv(i,m,k,l){if(m<0){m=4294967295+m+1}for(var h=0,j=Math.min(i.length-k,4);
h<j;h++){i[k+h]=(m>>>(l?h:3-h)*8)&255}}cy.prototype.writeUInt32LE=function bZ(j,h,i){j=+j;
h=h|0;if(!i){co(this,j,h,4,4294967295,0)}if(cy.TYPED_ARRAY_SUPPORT){this[h+3]=(j>>>24);
this[h+2]=(j>>>16);this[h+1]=(j>>>8);this[h]=(j&255)}else{bv(this,j,h,true)}return h+4
};cy.prototype.writeUInt32BE=function bN(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,4,4294967295,0)
}if(cy.TYPED_ARRAY_SUPPORT){this[h]=(j>>>24);this[h+1]=(j>>>16);this[h+2]=(j>>>8);
this[h+3]=(j&255)}else{bv(this,j,h,false)}return h+4};cy.prototype.writeIntLE=function a7(n,k,i,l){n=+n;
k=k|0;if(!l){var j=Math.pow(2,8*i-1);co(this,n,k,i,j-1,-j)}var h=0;var m=1;var o=n<0?1:0;
this[k]=n&255;while(++h<i&&(m*=256)){this[k+h]=((n/m)>>0)-o&255}return k+i};cy.prototype.writeIntBE=function ck(n,k,i,l){n=+n;
k=k|0;if(!l){var j=Math.pow(2,8*i-1);co(this,n,k,i,j-1,-j)}var h=i-1;var m=1;var o=n<0?1:0;
this[k+h]=n&255;while(--h>=0&&(m*=256)){this[k+h]=((n/m)>>0)-o&255}return k+i};
cy.prototype.writeInt8=function b5(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,1,127,-128)
}if(!cy.TYPED_ARRAY_SUPPORT){j=Math.floor(j)}if(j<0){j=255+j+1}this[h]=(j&255);
return h+1};cy.prototype.writeInt16LE=function b4(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,2,32767,-32768)
}if(cy.TYPED_ARRAY_SUPPORT){this[h]=(j&255);this[h+1]=(j>>>8)}else{cE(this,j,h,true)
}return h+2};cy.prototype.writeInt16BE=function bW(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,2,32767,-32768)
}if(cy.TYPED_ARRAY_SUPPORT){this[h]=(j>>>8);this[h+1]=(j&255)}else{cE(this,j,h,false)
}return h+2};cy.prototype.writeInt32LE=function cv(j,h,i){j=+j;h=h|0;if(!i){co(this,j,h,4,2147483647,-2147483648)
}if(cy.TYPED_ARRAY_SUPPORT){this[h]=(j&255);this[h+1]=(j>>>8);this[h+2]=(j>>>16);
this[h+3]=(j>>>24)}else{bv(this,j,h,true)}return h+4};cy.prototype.writeInt32BE=function bw(j,h,i){j=+j;
h=h|0;if(!i){co(this,j,h,4,2147483647,-2147483648)}if(j<0){j=4294967295+j+1}if(cy.TYPED_ARRAY_SUPPORT){this[h]=(j>>>24);
this[h+1]=(j>>>16);this[h+2]=(j>>>8);this[h+3]=(j&255)}else{bv(this,j,h,false)}return h+4
};function bx(i,l,k,m,j,h){if(l>j||l<h){throw new RangeError("value is out of bounds")
}if(k+m>i.length){throw new RangeError("index out of range")}if(k<0){throw new RangeError("index out of range")
}}function b(j,i,k,l,h){if(!h){bx(j,i,k,4,3.4028234663852886e+38,-3.4028234663852886e+38)
}bn.write(j,i,k,l,23,4);return k+4}cy.prototype.writeFloatLE=function be(j,h,i){return b(this,j,h,true,i)
};cy.prototype.writeFloatBE=function ct(j,h,i){return b(this,j,h,false,i)};function a9(j,i,k,l,h){if(!h){bx(j,i,k,8,1.7976931348623157e+308,-1.7976931348623157e+308)
}bn.write(j,i,k,l,52,8);return k+8}cy.prototype.writeDoubleLE=function bH(j,h,i){return a9(this,j,h,true,i)
};cy.prototype.writeDoubleBE=function cJ(j,h,i){return a9(this,j,h,false,i)};cy.prototype.copy=function bL(m,l,k,i){if(!k){k=0
}if(!i&&i!==0){i=this.length}if(l>=m.length){l=m.length}if(!l){l=0}if(i>0&&i<k){i=k
}if(i===k){return 0}if(m.length===0||this.length===0){return 0}if(l<0){throw new RangeError("targetStart out of bounds")
}if(k<0||k>=this.length){throw new RangeError("sourceStart out of bounds")}if(i<0){throw new RangeError("sourceEnd out of bounds")
}if(i>this.length){i=this.length}if(m.length-l<i-k){i=m.length-l+k}var j=i-k;var h;
if(this===m&&k<l&&l<i){for(h=j-1;h>=0;h--){m[h+l]=this[h+k]}}else{if(j<1000||!cy.TYPED_ARRAY_SUPPORT){for(h=0;
h<j;h++){m[h+l]=this[h+k]}}else{m._set(this.subarray(k,k+j),l)}}return j};cy.prototype.fill=function bR(l,k,h){if(!l){l=0
}if(!k){k=0}if(!h){h=this.length}if(h<k){throw new RangeError("end < start")}if(h===k){return
}if(this.length===0){return}if(k<0||k>=this.length){throw new RangeError("start out of bounds")
}if(h<0||h>this.length){throw new RangeError("end out of bounds")}var m;if(typeof l==="number"){for(m=k;
m<h;m++){this[m]=l}}else{var i=ci(l.toString());var j=i.length;for(m=k;m<h;m++){this[m]=i[m%j]
}}return this};cy.prototype.toArrayBuffer=function bD(){if(typeof Uint8Array!=="undefined"){if(cy.TYPED_ARRAY_SUPPORT){return(new cy(this)).buffer
}else{var i=new Uint8Array(this.length);for(var h=0,j=i.length;h<j;h+=1){i[h]=this[h]
}return i.buffer}}else{throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
}};var cj=cy.prototype;cy._augment=function bk(h){h.constructor=cy;h._isBuffer=true;
h._set=h.set;h.get=cj.get;h.set=cj.set;h.write=cj.write;h.toString=cj.toString;
h.toLocaleString=cj.toString;h.toJSON=cj.toJSON;h.equals=cj.equals;h.compare=cj.compare;
h.indexOf=cj.indexOf;h.copy=cj.copy;h.slice=cj.slice;h.readUIntLE=cj.readUIntLE;
h.readUIntBE=cj.readUIntBE;h.readUInt8=cj.readUInt8;h.readUInt16LE=cj.readUInt16LE;
h.readUInt16BE=cj.readUInt16BE;h.readUInt32LE=cj.readUInt32LE;h.readUInt32BE=cj.readUInt32BE;
h.readIntLE=cj.readIntLE;h.readIntBE=cj.readIntBE;h.readInt8=cj.readInt8;h.readInt16LE=cj.readInt16LE;
h.readInt16BE=cj.readInt16BE;h.readInt32LE=cj.readInt32LE;h.readInt32BE=cj.readInt32BE;
h.readFloatLE=cj.readFloatLE;h.readFloatBE=cj.readFloatBE;h.readDoubleLE=cj.readDoubleLE;
h.readDoubleBE=cj.readDoubleBE;h.writeUInt8=cj.writeUInt8;h.writeUIntLE=cj.writeUIntLE;
h.writeUIntBE=cj.writeUIntBE;h.writeUInt16LE=cj.writeUInt16LE;h.writeUInt16BE=cj.writeUInt16BE;
h.writeUInt32LE=cj.writeUInt32LE;h.writeUInt32BE=cj.writeUInt32BE;h.writeIntLE=cj.writeIntLE;
h.writeIntBE=cj.writeIntBE;h.writeInt8=cj.writeInt8;h.writeInt16LE=cj.writeInt16LE;
h.writeInt16BE=cj.writeInt16BE;h.writeInt32LE=cj.writeInt32LE;h.writeInt32BE=cj.writeInt32BE;
h.writeFloatLE=cj.writeFloatLE;h.writeFloatBE=cj.writeFloatBE;h.writeDoubleLE=cj.writeDoubleLE;
h.writeDoubleBE=cj.writeDoubleBE;h.fill=cj.fill;h.inspect=cj.inspect;h.toArrayBuffer=cj.toArrayBuffer;
return h};var cz=/[^+\/0-9A-Za-z-_]/g;function bd(h){h=ba(h).replace(cz,"");if(h.length<2){return""
}while(h.length%4!==0){h=h+"="}return h}function ba(h){if(h.trim){return h.trim()
}return h.replace(/^\s+|\s+$/g,"")}function cD(h){if(h<16){return"0"+h.toString(16)
}return h.toString(16)}function ci(n,i){i=i||Infinity;var h;var k=n.length;var l=null;
var j=[];for(var m=0;m<k;m++){h=n.charCodeAt(m);if(h>55295&&h<57344){if(!l){if(h>56319){if((i-=3)>-1){j.push(239,191,189)
}continue}else{if(m+1===k){if((i-=3)>-1){j.push(239,191,189)}continue}}l=h;continue
}if(h<56320){if((i-=3)>-1){j.push(239,191,189)}l=h;continue}h=(l-55296<<10|h-56320)+65536
}else{if(l){if((i-=3)>-1){j.push(239,191,189)}}}l=null;if(h<128){if((i-=1)<0){break
}j.push(h)}else{if(h<2048){if((i-=2)<0){break}j.push(h>>6|192,h&63|128)}else{if(h<65536){if((i-=3)<0){break
}j.push(h>>12|224,h>>6&63|128,h&63|128)}else{if(h<1114112){if((i-=4)<0){break}j.push(h>>18|240,h>>12&63|128,h>>6&63|128,h&63|128)
}else{throw new Error("Invalid code point")}}}}}return j}function b6(h){var j=[];
for(var i=0;i<h.length;i++){j.push(h.charCodeAt(i)&255)}return j}function bP(l,i){var k,h,m;
var j=[];for(var n=0;n<l.length;n++){if((i-=2)<0){break}k=l.charCodeAt(n);h=k>>8;
m=k%256;j.push(m);j.push(h)}return j}function b7(h){return cw.toByteArray(bd(h))
}function br(l,k,h,i){for(var j=0;j<i;j++){if((j+h>=k.length)||(j>=l.length)){break
}k[j+h]=l[j]}return j}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"base64-js":294,ieee754:295,isarray:296}],294:[function(f,i,g){var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
(function(t){var d=(typeof Uint8Array!=="undefined")?Uint8Array:Array;var r="+".charCodeAt(0);
var x="/".charCodeAt(0);var u="0".charCodeAt(0);var w="a".charCodeAt(0);var c="A".charCodeAt(0);
var a="-".charCodeAt(0);var v="_".charCodeAt(0);function y(k){var j=k.charCodeAt(0);
if(j===r||j===a){return 62}if(j===x||j===v){return 63}if(j<u){return -1}if(j<u+10){return j-u+26+26
}if(j<c+26){return j-c}if(j<w+26){return j-w+26}}function s(j){var p,q,C,o,B,n;
if(j.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")
}var m=j.length;B="="===j.charAt(m-2)?2:"="===j.charAt(m-1)?1:0;n=new d(j.length*3/4-B);
C=B>0?j.length-4:j.length;var k=0;function l(z){n[k++]=z}for(p=0,q=0;p<C;p+=4,q+=3){o=(y(j.charAt(p))<<18)|(y(j.charAt(p+1))<<12)|(y(j.charAt(p+2))<<6)|y(j.charAt(p+3));
l((o&16711680)>>16);l((o&65280)>>8);l(o&255)}if(B===2){o=(y(j.charAt(p))<<2)|(y(j.charAt(p+1))>>4);
l(o&255)}else{if(B===1){o=(y(j.charAt(p))<<10)|(y(j.charAt(p+1))<<4)|(y(j.charAt(p+2))>>2);
l((o>>8)&255);l(o&255)}}return n}function b(p){var l,m=p.length%3,n="",o,j;function k(A){return h.charAt(A)
}function q(A){return k(A>>18&63)+k(A>>12&63)+k(A>>6&63)+k(A&63)}for(l=0,j=p.length-m;
l<j;l+=3){o=(p[l]<<16)+(p[l+1]<<8)+(p[l+2]);n+=q(o)}switch(m){case 1:o=p[p.length-1];
n+=k(o>>2);n+=k((o<<4)&63);n+="==";break;case 2:o=(p[p.length-2]<<8)+(p[p.length-1]);
n+=k(o>>10);n+=k((o>>4)&63);n+=k((o<<2)&63);n+="=";break}return n}t.toByteArray=s;
t.fromByteArray=b}(typeof g==="undefined"?(this.base64js={}):g))},{}],295:[function(d,g,f){f.read=function(m,s,y,z,b){var a,w;
var x=b*8-z-1;var c=(1<<x)-1;var A=c>>1;var C=-7;var i=y?(b-1):0;var D=y?-1:1;var B=m[s+i];
i+=D;a=B&((1<<(-C))-1);B>>=(-C);C+=x;for(;C>0;a=a*256+m[s+i],i+=D,C-=8){}w=a&((1<<(-C))-1);
a>>=(-C);C+=z;for(;C>0;w=w*256+m[s+i],i+=D,C-=8){}if(a===0){a=1-A}else{if(a===c){return w?NaN:((B?-1:1)*Infinity)
}else{w=w+Math.pow(2,z);a=a-A}}return(B?-1:1)*w*Math.pow(2,a-z)};f.write=function(i,E,m,A,B,a){var H,y,F;
var z=a*8-B-1;var b=(1<<z)-1;var C=b>>1;var s=(B===23?Math.pow(2,-24)-Math.pow(2,-77):0);
var c=A?0:(a-1);var G=A?1:-1;var D=E<0||(E===0&&1/E<0)?1:0;E=Math.abs(E);if(isNaN(E)||E===Infinity){y=isNaN(E)?1:0;
H=b}else{H=Math.floor(Math.log(E)/Math.LN2);if(E*(F=Math.pow(2,-H))<1){H--;F*=2
}if(H+C>=1){E+=s/F}else{E+=s*Math.pow(2,1-C)}if(E*F>=2){H++;F/=2}if(H+C>=b){y=0;
H=b}else{if(H+C>=1){y=(E*F-1)*Math.pow(2,B);H=H+C}else{y=E*Math.pow(2,C-1)*Math.pow(2,B);
H=0}}}for(;B>=8;i[m+c]=y&255,c+=G,y/=256,B-=8){}H=(H<<B)|y;z+=B;for(;z>0;i[m+c]=H&255,c+=G,H/=256,z-=8){}i[m+c-G]|=D*128
}},{}],296:[function(f,i,g){var h={}.toString;i.exports=Array.isArray||function(a){return h.call(a)=="[object Array]"
}},{}],297:[function(d,g,f){(function(a){function c(p,i){var j=0;for(var h=p.length-1;
h>=0;h--){var q=p[h];if(q==="."){p.splice(h,1)}else{if(q===".."){p.splice(h,1);
j++}else{if(j){p.splice(h,1);j--}}}}if(i){for(;j--;j){p.unshift("..")}}return p
}var k=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var m=function(h){return k.exec(h).slice(1)
};f.resolve=function(){var h="",j=false;for(var i=arguments.length-1;i>=-1&&!j;
i--){var o=(i>=0)?arguments[i]:a.cwd();if(typeof o!=="string"){throw new TypeError("Arguments to path.resolve must be strings")
}else{if(!o){continue}}h=o+"/"+h;j=o.charAt(0)==="/"}h=c(l(h.split("/"),function(n){return !!n
}),!j).join("/");return((j?"/":"")+h)||"."};f.normalize=function(h){var i=f.isAbsolute(h),j=b(h,-1)==="/";
h=c(l(h.split("/"),function(o){return !!o}),!i).join("/");if(!h&&!i){h="."}if(h&&j){h+="/"
}return(i?"/":"")+h};f.isAbsolute=function(h){return h.charAt(0)==="/"};f.join=function(){var h=Array.prototype.slice.call(arguments,0);
return f.normalize(l(h,function(i,j){if(typeof i!=="string"){throw new TypeError("Arguments to path.join must be strings")
}return i}).join("/"))};f.relative=function(i,h){i=f.resolve(i).substr(1);h=f.resolve(h).substr(1);
function v(p){var n=0;for(;n<p.length;n++){if(p[n]!==""){break}}var o=p.length-1;
for(;o>=0;o--){if(p[o]!==""){break}}if(n>o){return[]}return p.slice(n,o-n+1)}var j=v(i.split("/"));
var w=v(h.split("/"));var x=Math.min(j.length,w.length);var y=x;for(var t=0;t<x;
t++){if(j[t]!==w[t]){y=t;break}}var u=[];for(var t=y;t<j.length;t++){u.push("..")
}u=u.concat(w.slice(y));return u.join("/")};f.sep="/";f.delimiter=":";f.dirname=function(o){var j=m(o),i=j[0],h=j[1];
if(!i&&!h){return"."}if(h){h=h.substr(0,h.length-1)}return i+h};f.basename=function(h,j){var i=m(h)[2];
if(j&&i.substr(-1*j.length)===j){i=i.substr(0,i.length-j.length)}return i};f.extname=function(h){return m(h)[3]
};function l(j,o){if(j.filter){return j.filter(o)}var h=[];for(var i=0;i<j.length;
i++){if(o(j[i],i,j)){h.push(j[i])}}return h}var b="ab".substr(-1)==="b"?function(i,h,j){return i.substr(h,j)
}:function(i,h,j){if(h<0){h=i.length+h}return i.substr(h,j)}}).call(this,d("_process"))
},{_process:298}],298:[function(F,K,t){var C=K.exports={};var B;var z;function E(){throw new Error("setTimeout has not been defined")
}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){B=setTimeout
}else{B=E}}catch(a){B=E}try{if(typeof clearTimeout==="function"){z=clearTimeout
}else{z=v}}catch(a){z=v}}());function G(b){if(B===setTimeout){return setTimeout(b,0)
}if((B===E||!B)&&setTimeout){B=setTimeout;return setTimeout(b,0)}try{return B(b,0)
}catch(a){try{return B.call(null,b,0)}catch(a){return B.call(this,b,0)}}}function H(b){if(z===clearTimeout){return clearTimeout(b)
}if((z===v||!z)&&clearTimeout){z=clearTimeout;return clearTimeout(b)}try{return z(b)
}catch(a){try{return z.call(null,b)}catch(a){return z.call(this,b)}}}var y=[];var u=false;
var D;var x=-1;function A(){if(!u||!D){return}u=false;if(D.length){y=D.concat(y)
}else{x=-1}if(y.length){w()}}function w(){if(u){return}var a=G(A);u=true;var b=y.length;
while(b){D=y;y=[];while(++x<b){if(D){D[x].run()}}x=-1;b=y.length}D=null;u=false;
H(a)}C.nextTick=function(c){var b=new Array(arguments.length-1);if(arguments.length>1){for(var a=1;
a<arguments.length;a++){b[a-1]=arguments[a]}}y.push(new J(c,b));if(y.length===1&&!u){G(w)
}};function J(b,a){this.fun=b;this.array=a}J.prototype.run=function(){this.fun.apply(null,this.array)
};C.title="browser";C.browser=true;C.env={};C.argv=[];C.version="";C.versions={};
function I(){}C.on=I;C.addListener=I;C.once=I;C.off=I;C.removeListener=I;C.removeAllListeners=I;
C.emit=I;C.binding=function(a){throw new Error("process.binding is not supported")
};C.cwd=function(){return"/"};C.chdir=function(a){throw new Error("process.chdir is not supported")
};C.umask=function(){return 0}},{}],299:[function(j,p,k){var n=j("@marcom/ac-classlist/add");
var m=j("@marcom/ac-classlist/remove");var l=j("@marcom/ac-object/extend");var q=function(b,a){this._target=b;
this._tests={};this.addTests(a)};var o=q.prototype;o.addTests=function(a){this._tests=l(this._tests,a||{})
};o._supports=function(a){if(typeof this._tests[a]==="undefined"){return false}if(typeof this._tests[a]==="function"){this._tests[a]=this._tests[a]()
}return this._tests[a]};o._addClass=function(a,b){b=b||"no-";if(this._supports(a)){n(this._target,a)
}else{n(this._target,b+a)}};o.htmlClass=function(){var a;m(this._target,"no-js");
n(this._target,"js");for(a in this._tests){if(this._tests.hasOwnProperty(a)){this._addClass(a)
}}};p.exports=q},{"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/remove":13,"@marcom/ac-object/extend":460}],300:[function(q,r,p){var k="data-focus-method";
var m="touch";var l="mouse";var s="key";function n(a,b){this._target=a||document.body;
this._attr=b||k;this._focusMethod=this._lastFocusMethod=false;this._onKeyDown=this._onKeyDown.bind(this);
this._onMouseDown=this._onMouseDown.bind(this);this._onTouchStart=this._onTouchStart.bind(this);
this._onFocus=this._onFocus.bind(this);this._onBlur=this._onBlur.bind(this);this._onWindowBlur=this._onWindowBlur.bind(this);
this._bindEvents()}var o=n.prototype;o._bindEvents=function(){if(this._target.addEventListener){this._target.addEventListener("keydown",this._onKeyDown);
this._target.addEventListener("mousedown",this._onMouseDown);this._target.addEventListener("touchstart",this._onTouchStart);
this._target.addEventListener("focus",this._onFocus,true);this._target.addEventListener("blur",this._onBlur,true);
window.addEventListener("blur",this._onWindowBlur)}};o._onKeyDown=function(a){this._focusMethod=s
};o._onMouseDown=function(a){if(this._focusMethod===m){return}this._focusMethod=l
};o._onTouchStart=function(a){this._focusMethod=m};o._onFocus=function(a){if(!this._focusMethod){this._focusMethod=this._lastFocusMethod
}a.target.setAttribute(this._attr,this._focusMethod);this._lastFocusMethod=this._focusMethod;
this._focusMethod=false};o._onBlur=function(a){a.target.removeAttribute(this._attr)
};o._onWindowBlur=function(a){this._focusMethod=false};r.exports=n},{}],301:[function(m,k,h){m("@marcom/ac-polyfills");
var l=m("./FeatureDetect");var j=m("./defaultTests");k.exports=new l(document.documentElement,j);
k.exports.FeatureDetect=l;var i=m("./FocusManager");if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){new i()
})}},{"./FeatureDetect":299,"./FocusManager":300,"./defaultTests":302,"@marcom/ac-polyfills":"@marcom/ac-polyfills"}],302:[function(m,l,n){var k=m("@marcom/ac-browser");
var j=m("@marcom/ac-feature/touchAvailable");var o=m("@marcom/ac-feature/svgAvailable");
var i=function(){return(k.IE&&k.IE.documentMode===8)};l.exports={touch:j,svg:o,ie8:i}
},{"@marcom/ac-browser":1,"@marcom/ac-feature/svgAvailable":235,"@marcom/ac-feature/touchAvailable":237}],303:[function(t,w,r){t("@marcom/ac-polyfills/Object/create");
var s=t("@marcom/ac-jetpack-lib/core/BaseComponent");var m=s.prototype;var u=t("@marcom/ac-gallery").SlideGallery;
var o=t("@marcom/ac-gallery").FadeGallery;var n=["xlarge","large","medium","small"];
var p={GALLERY:"data-gallery"};function v(d,b,a,f,h,c,g){this.name="GalleryComponent_"+g;
s.call(this,d,b,a,f,h,c,g);this.galleryOptions={};this._normalizeGalleryOptions();
this._createGalleryForViewport(f)}var q=v.prototype=Object.create(s.prototype);
v.prototype.constructor=v;q._normalizeGalleryOptions=function(){var g={};var h={type:"stacked"};
var i;for(var f=0;f<n.length;f++){var a=n[f];var c=p.GALLERY+"-"+a;var b=this.element.getAttribute(c);
if(b===null){i=h;g[a]=true}if(typeof b==="string"){i=JSON.parse(b)}for(var d in h){if(!i.hasOwnProperty(d)){i[d]=h[d]
}}h=i;this._saveGalleryOptionDataForViewport(a,i)}if(g.xlarge&&!g.large){this.galleryOptions.xlarge=this.galleryOptions.large
}};q._saveGalleryOptionDataForViewport=function(a,b){var c=Object.assign({},b);
this.galleryOptions[a]={};this.galleryOptions[a].type=c.type;delete c.type;this.galleryOptions[a].options=c
};q._createGalleryForViewport=function(a){if(this.galleryObject){this.galleryObject.destroy();
this.galleryObject=null}var b=this.galleryOptions[a];switch(b.type){case"stacked":this.element.classList.add("gallery-stacked");
break;case"fade":this.element.classList.remove("gallery-stacked");this.galleryObject=new o(this.element,b.options);
break;case"slide":this.element.classList.remove("gallery-stacked");this.galleryObject=new u(this.element,b.options);
break;default:console.error("Invalid gallery type. Vaild GalleryComponent types are fade, slide, or stacked.");
break}};q._galleryOptionsAreEqualForViewports=function(c,d){var a=JSON.stringify(this.galleryOptions[c]);
var b=JSON.stringify(this.galleryOptions[d]);return(a===b)};q.onBreakpoint=function(d,b,a,c){m.onBreakpoint.call(this,d,b,a,c);
if(this._galleryOptionsAreEqualForViewports(d,b)){return}this._createGalleryForViewport(d)
};w.exports=v},{"@marcom/ac-gallery":271,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],304:[function(F,K,u){F("@marcom/ac-polyfills/Object/create");
var x=F("@marcom/ac-jetpack-lib/core/BaseComponent");var y=F("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var z=x.prototype;var B=F("path");var D=F("@marcom/ac-classlist/contains");var A=F("@marcom/ac-feature/canvasAvailable");
var M=F("@marcom/ac-media-object");var I=F("@marcom/ac-viewport-emitter");var L=F("@marcom/ac-cname").cname;
var J=F("@marcom/ac-dom-traversal/querySelector");var w=F("@marcom/ac-eclipse/Clip");
var H={ELEMENT_ENGAGEMENT:"data-engaged",MEDIA:"data-media"};var G=0.2;var E=0;
function v(g,i,f,b,d,a,c){this._name="MediaObjectComponent_"+c+"-"+(E++);x.call(this,g,i,f,b,d,a,c);
if(!A()){return}this.uriPattern=v.URI_PATTERN;this.type="flow";this.name=null;this.locale="us";
this.rewindWhenInactive=false;this.loop=false;this.playbackRate=1;this.mute=false;
this.transitionIn=false;this.iosInline=false;try{this._overwriteMediaProps()}catch(h){console.error("MediaObjectComponent::_overwriteMediaProps bad JSON in data-attribute!",h)
}if(!this.name){console.log("Missing media name for "+this.element);return}this._media=null;
this._fadeClip=null;this._breakpoint=b;this._retina=I.retina;this._canLoad=false;
this._loadCalled=false;this._enhanceCalled=false;this._isEngaged=false;this._isSectionVisible=false;
this._isShown=false;this._mediaIsPlaying=false;this._mediaHasPlayed=false;this._playOnceReady=false;
this._onMediaLoaded=this._onMediaLoaded.bind(this);this._onMediaEnhanced=this._onMediaEnhanced.bind(this);
this._onMediaReady=this._onMediaReady.bind(this);this._onFadeInComplete=this._onFadeInComplete.bind(this);
this.timeToEngage=0;this.inViewThreshold=0.75;if(this.element.hasAttribute(H.ELEMENT_ENGAGEMENT)){try{this._overwriteElementEngagementProps()
}catch(h){console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!",h)
}}this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:this.timeToEngage,inViewThreshold:this.inViewThreshold});
this._initializeMedia()}var C=v.prototype=Object.create(x.prototype);v.prototype.constructor=v;
v.URI_PATTERN="";C.setupEvents=function(){z.setupEvents.call(this);this._onElementEngaged=this._onElementEngaged.bind(this);
if(this.trackedElement){this.trackedElement.on("engaged",this._onElementEngaged)
}};C.onSectionWillAppear=function(b,a){z.onSectionWillAppear.call(this,b,a);this._isSectionVisible=true;
this._loadMedia()};C.onSectionWillDisappear=function(b,a){z.onSectionWillDisappear.call(this,b,a);
this._isSectionVisible=false;if(this.rewindWhenInactive){this._rewindMedia()}else{this._pauseMedia()
}};C.onBreakpoint=function(c,a,d,b){z.onSectionWillDisappear.call(this,c,a,d,b);
this._rebuildIfChanged("_breakpoint",c)};C.onRetinaChange=function(a,c,d,b){z.onSectionWillDisappear.call(this,a,c,d,b);
this._rebuildIfChanged("_retina",a)};C._viewportForName=function(a,b){if(b.indexOf("xlarge")>-1){return"large"+((b.indexOf("_2x")>-1)?"_2x":"")
}return b};C._uriPatternForName=function(b,a){return a};C._rebuildIfChanged=function(f,a){var b=JSON.stringify(this._getMediaSource());
this[f]=a;var c=JSON.stringify(this._getMediaSource());if(b!=c){var d=this._mediaIsPlaying;
this._destroyMedia();this._initializeMedia();if(this._isSectionVisible){if(d){this._playMedia()
}else{this._loadMedia()}}}};C._overwriteMediaProps=function(){var a=this.element.getAttribute(H.MEDIA);
var b=JSON.parse(a);this.uriPattern=b.uriPattern===undefined?this.uriPattern:b.uriPattern;
this.type=b.type===undefined?this.type:b.type;this.name=b.name===undefined?this.name:b.name;
this.locale=b.locale===undefined?this.locale:b.locale;this.rewindWhenInactive=b.rewindWhenInactive===undefined?this.rewindWhenInactive:b.rewindWhenInactive;
this.loop=b.loop===undefined?this.loop:b.loop;this.playbackRate=b.playbackRate===undefined?this.playbackRate:b.playbackRate;
this.mute=b.mute===undefined?this.mute:b.mute;this.iosInline=b.iosInline===undefined?this.iosInline:b.iosInline;
this.transitionIn=b.transitionIn===undefined?this.transitionIn:b.transitionIn};
C._overwriteElementEngagementProps=function(){var a=this.element.getAttribute(H.ELEMENT_ENGAGEMENT);
var b=JSON.parse(a);this.timeToEngage=b.timeToEngage===undefined?this.timeToEngage:parseFloat(b.timeToEngage);
this.inViewThreshold=b.inViewThreshold===undefined?this.inViewThreshold:parseFloat(b.inViewThreshold)
};C._getMediaSource=function(){var f=this._uriPatternForName(this.name,this.uriPattern);
var c=(this._retina?this._breakpoint.concat("_2x"):this._breakpoint);c=this._viewportForName(this.name,c);
if(typeof f=="object"){f=f[this.type]}var a=f.replace("{{locale}}",this.locale).replace("{{name}}",this.name).replace("{{type}}",this.type).replace("{{viewport}}",c);
if(B.isAbsolute(a)){a=L.addPrefix(a)}var b=B.dirname(a);var d=B.basename(a);if(this.type==="split-file"&&y.IS_DESKTOP){return{basePath:B.dirname(a)+"/"+B.basename(a),splitFileLoading:true}
}else{return{basePath:B.dirname(a),filename:B.basename(a),fileFormat:this.type==="flow"?"jpg":"mp4"}
}};C._initializeMedia=function(){var a;if(this.type=="flow"){a=M.createFlow}else{a=M.createVideo
}this.element.classList.remove("mediaObject-destroyed","mediaObject-enhanced","mediaObject-ended");
this._media=a(this.element,this._getMediaSource(),{looping:this.loop,playbackRate:this.playbackRate,iosInline:this.iosInline});
this._media.on("ready",this._onMediaReady);this._canLoad=true;this._loadCalled=false;
this._enhanceCalled=false;this._mediaIsPlaying=false;this._mediaHasPlayed=false;
this._isShown=false;this._playOnceReady=false};C._onElementEngaged=function(a){this.element.classList.add("engaged");
if(this._media&&(!this._isEngaged||!this._media.getEnded()||this.rewindWhenInactive||this.loop)){this._isEngaged=true;
this._playMedia()}};C._onMediaLoaded=function(){this._enhanceMedia()};C._onMediaEnhanced=function(){if(this.transitionIn){this._media.mediaElement.style.opacity=0
}if(this._playOnceReady){this._playMedia()}};C._onMediaReady=function(){if(this._playOnceReady){this._playMedia()
}};C._fadeIn=function(){this._fadeClip=new w(this._media.mediaElement,G,{opacity:1},{ease:"easeInQuad",onComplete:this._onFadeInComplete}).play()
};C._onFadeInComplete=function(){this._isShown=true;if(this._playOnceReady){this._playMedia()
}};C._loadMedia=function(){if(this._media&&this._canLoad&&!this._loadCalled){this._loadCalled=true;
this._media.on("loaded",this._onMediaLoaded);this._media.load()}};C._enhanceMedia=function(){if(this._media&&!this._enhanceCalled){this._enhanceCalled=true;
this._media.on("enhanced",this._onMediaEnhanced);this._media.enhance()}};C._playMedia=function(){this._mediaHasPlayed=true;
this._playOnceReady=true;if(!this._media){return}if(this._media.getReady()){if(this.transitionIn){if((!this._fadeClip||!this._fadeClip.playing())&&!this._isShown){this._fadeClip=new w(this._media.mediaElement,G,{opacity:1},{ease:"easeInQuad",onComplete:this._onFadeInComplete}).play()
}else{this._startMedia()}}else{this._startMedia()}}else{this._loadMedia()}};C._startMedia=function(){this._playOnceReady=false;
this._mediaIsPlaying=true;this._media.play();if(this.mute){this._media.mediaElement.muted=true
}};C._pauseMedia=function(){if(this._media&&this._mediaIsPlaying){this._mediaIsPlaying=false;
try{this._media.pause()}catch(a){}}};C._rewindMedia=function(){if(this._media&&this._mediaIsPlaying){this._mediaIsPlaying=false;
try{this._media.pause();this._media.setCurrentTime(0);this._media.pause()}catch(a){}}};
C._destroyMedia=function(){if(this._media){this._media.off();this._pauseMedia();
this._media.destroy();this._media=null;this._canLoad=true;this._loadCalled=false;
this._enhanceCalled=false;this._mediaIsPlaying=false;this._mediaHasPlayed=false;
this._isShown=false;this._playOnceReady=false}if(this._fadeClip&&this._fadeClip.playing()){this._fadeClip.destroy();
this._fadeClip=null}};K.exports=v},{"@marcom/ac-classlist/contains":11,"@marcom/ac-cname":17,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-eclipse/Clip":148,"@marcom/ac-feature/canvasAvailable":218,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341,"@marcom/ac-media-object":444,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create","@marcom/ac-viewport-emitter":590,path:297}],305:[function(d,g,f){g.exports={log:d("./ac-console/log")}
},{"./ac-console/log":306}],306:[function(l,k,h){var i="f7c9180f-5c45-47b4-8de4-428015f096c0";
var m=!!(function(){try{return window.localStorage.getItem(i)}catch(a){}}());k.exports=function j(){if(window.console&&typeof console.log!=="undefined"&&m){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],307:[function(d,g,f){arguments[4][179][0].apply(f,arguments)},{"./shared/getEventType":317,"./utils/addEventListener":321,dup:179}],308:[function(d,g,f){arguments[4][180][0].apply(f,arguments)
},{"./shared/getEventType":317,"./utils/dispatchEvent":322,dup:180}],309:[function(d,g,f){arguments[4][181][0].apply(f,arguments)
},{"./addEventListener":307,"./dispatchEvent":308,"./preventDefault":315,"./removeEventListener":316,"./stop":318,"./stopPropagation":319,"./target":320,dup:181}],310:[function(d,g,f){arguments[4][182][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":311,"./shared/prefixHelper":312,"./shared/windowFallbackEventTypes":313,"./utils/eventTypeAvailable":314,dup:182}],311:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],312:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],313:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],314:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],315:[function(d,g,f){arguments[4][187][0].apply(f,arguments)
},{dup:187}],316:[function(d,g,f){arguments[4][188][0].apply(f,arguments)},{"./shared/getEventType":317,"./utils/removeEventListener":323,dup:188}],317:[function(d,g,f){arguments[4][189][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":310,dup:189}],318:[function(d,g,f){arguments[4][190][0].apply(f,arguments)
},{"./preventDefault":315,"./stopPropagation":319,dup:190}],319:[function(d,g,f){arguments[4][191][0].apply(f,arguments)
},{dup:191}],320:[function(d,g,f){arguments[4][192][0].apply(f,arguments)},{dup:192}],321:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],322:[function(d,g,f){arguments[4][194][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":"@marcom/ac-polyfills/CustomEvent",dup:194}],323:[function(d,g,f){arguments[4][195][0].apply(f,arguments)
},{dup:195}],324:[function(d,g,f){arguments[4][171][0].apply(f,arguments)},{"./flatten":325,"./intersection":326,"./shuffle":327,"./toArray":328,"./union":329,"./unique":330,"./without":331,dup:171}],325:[function(d,g,f){arguments[4][172][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/isArray":"@marcom/ac-polyfills/Array/isArray","@marcom/ac-polyfills/Array/prototype.forEach":"@marcom/ac-polyfills/Array/prototype.forEach",dup:172}],326:[function(d,g,f){arguments[4][173][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf",dup:173}],327:[function(d,g,f){arguments[4][174][0].apply(f,arguments)
},{dup:174}],328:[function(d,g,f){arguments[4][175][0].apply(f,arguments)},{"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice",dup:175}],329:[function(d,g,f){arguments[4][176][0].apply(f,arguments)
},{"./flatten":325,"./toArray":328,"./unique":330,dup:176}],330:[function(d,g,f){arguments[4][177][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.reduce":"@marcom/ac-polyfills/Array/prototype.reduce",dup:177}],331:[function(d,g,f){arguments[4][178][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice",dup:178}],332:[function(d,g,f){arguments[4][196][0].apply(f,arguments)
},{"./ac-element-tracker/ElementTracker":333,dup:196}],333:[function(d,g,f){arguments[4][197][0].apply(f,arguments)
},{"./TrackedElement":334,"@marcom/ac-array":324,"@marcom/ac-dom-events":309,"@marcom/ac-dom-metrics/getDimensions":21,"@marcom/ac-dom-metrics/getPagePosition":22,"@marcom/ac-dom-metrics/getScrollY":27,"@marcom/ac-dom-nodes":37,"@marcom/ac-object":456,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind",dup:197}],334:[function(d,g,f){arguments[4][198][0].apply(f,arguments)
},{"@marcom/ac-dom-nodes":37,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object":456,dup:198}],335:[function(o,n,i){o("@marcom/ac-polyfills/Object/create");
o("@marcom/ac-polyfills/Element/prototype.classList");var l=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var k=l.prototype;function j(a,g,f,b,d,h,c){if(arguments.length!==7){throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
}l.call(this);this.section=a;this.element=g;this.componentName=f;this.index=c;this.isEnabled=true;
this.rafWhenVisible=this.rafWhenVisible||false}var m=j.prototype=Object.create(l.prototype);
j.prototype.constructor=j;m.destroy=function(){this.teardownEvents();this.section=null;
k.destroy.call(this)};m.setupEvents=function(){};m.teardownEvents=function(){};
m.onSectionWillAppear=function(b,a){};m.activate=function(){};m.animateIn=function(){};
m.onRequestAnimationFrame=function(){};m.deactivate=function(){};m.onScroll=function(b,c,a){};
m.onSectionWillDisappear=function(b,a){};m.onResizeDebounced=function(b,c,a){};
m.onResizeImmediate=function(b,c,a){};m.onOrientationChange=function(b,c,d,a){};
m.onBreakpoint=function(c,a,d,b){};m.onRetinaChange=function(a,c,d,b){};n.exports=j
},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],336:[function(A,C,x){A("@marcom/ac-polyfills/Element/prototype.classList");
A("@marcom/ac-polyfills/Object/assign");A("@marcom/ac-polyfills/Object/assign");
A("@marcom/ac-polyfills/console.log");var w=A("@marcom/ac-dom-traversal/querySelector");
var D=A("@marcom/ac-dom-traversal/querySelectorAll");var u=A("@marcom/ac-dom-events/addEventListener");
var F=A("@marcom/ac-dom-events/removeEventListener");var E=A("@marcom/ac-element-tracker").ElementTracker;
var r=A("@marcom/ac-viewport-emitter");if(!r.viewport){console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.");
console.log("Jetpack Error: Breakpoint will always be 'large' and no `onBreakPoint` events will be fired");
r=A("../utils/ViewportEmitterStub")()}var s=A("./LocalNavStyleChanger");var t=A("../utils/Page");
var G=A("../model/SectionMap");var y=A("../model/DataAttributes");var B=A("../model/EnabledFeatures");
function z(a){B.init();this.name=this.name||"[NOT SET]";this._mainEl=w("main,.main");
this._sections=[];this._visibleSections=[];this._elementTracker=new E(null,{autoStart:true});
this._currentSection=null;this._sectionUnderLocalNav=null;this._currentBreakpoint=r.viewport;
this.isRetina=r.retina;this._cachedScrollY=this._getScrollY(true);this._cachedWindowHeight=this._getWindowHeight(true);
this._rafId=-1;this._resizeTimeout=-1;this._resizeTimeoutDelay=this._resizeTimeoutDelay||250;
this.setupSections();this.setupLocalNavStyleChanger();this.setupEvents();this._updateSectionVisibility();
this._updateLocalNavTheme();this._onRequestAnimationFrame()}var v=z.prototype;v.destroy=function(){for(var a=0,b=this._sections.length;
a<b;a++){this._sections[a].destroy()}this.teardownEvents();this._elementTracker.destroy();
this._elementTracker=null;this._sections=null;this._currentSection=null;this._sectionUnderLocalNav=null;
this._visibleSections=null;this._mainEl=null};v.setupEvents=function(){this._onScroll=this._onScroll.bind(this);
this._onBreakpoint=this._onBreakpoint.bind(this);this._onRetinaChange=this._onRetinaChange.bind(this);
this._onPageDidAppear=this._onPageDidAppear.bind(this);this._onResizeImmediate=this._onResizeImmediate.bind(this);
this._onOrientationChange=this._onOrientationChange.bind(this);this._onPageWillDisappear=this._onPageWillDisappear.bind(this);
this._onRequestAnimationFrame=this._onRequestAnimationFrame.bind(this);this.performDeepMetricsRefresh=this.performDeepMetricsRefresh.bind(this);
u(window,"scroll",this._onScroll);u(window,"resize",this._onResizeImmediate);u(window,"orientationchange",this._onOrientationChange);
r.on("change",this._onBreakpoint);r.on("retinachange",this._onRetinaChange);t.on(t.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh)
};v.teardownEvents=function(){F(window,"scroll",this._onScroll);F(window,"resize",this._onResizeImmediate);
F(window,"orientationchange",this._onOrientationChange);r.off("change",this._onBreakpoint);
r.off("retinachange",this._onRetinaChange);t.off(t.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh);
this._elementTracker.stop();clearTimeout(this._resizeTimeout);cancelAnimationFrame(this._rafId)
};v.setupSections=function(){var c=D("section,.section,[data-section-type]",this._mainEl);
for(var a=0,d=c.length;a<d;a++){if(c[a].parentElement!==this._mainEl){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",c[a]);
continue}var b=c[a];this._addSectionImp(b)}};v.addSection=function(b){var a=this.getBaseSectionForElement(b);
if(a){return a}a=this._addSectionImp(b);this._updateSectionVisibility();this._updateLocalNavTheme();
return a};v.removeSection=function(c){var a=(c instanceof G.BaseSection);var b=a?c:this.getBaseSectionForElement(c);
if(b){this._sections.splice(this._sections.indexOf(b),1)}this._updateSectionVisibility();
this._updateLocalNavTheme();return b};v._addSectionImp=function(c){if(c.parentNode!==this._mainEl&&this._isNestedSection(c)){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",c);
return null}var d=this._elementTracker.addElement(c);this._elementTracker.refreshElementState(d);
var b=(c.hasAttribute(y.SECTION_TYPE))?c.getAttribute(y.SECTION_TYPE):"BaseSection";
if(b===""){b="BaseSection"}if(!G.hasOwnProperty(b)){throw"BasePage::setupSections parsing '#"+c.id+" ."+c.className+"' no section type '"+b+"'found!"
}var f=G[b];var a=new f(c,d,this._getCurrentBreakpoint(),this._getScrollY(),this._getWindowHeight(),this._sections.length);
a.setupEvents();this._sections.push(a);return a};v.setupLocalNavStyleChanger=function(){s.setCurrentSection(this._currentSection);
if(B.PAGE_JUMP){var a=this._mainEl.getAttribute("data-page-type");s.setCurrentPage(a)
}};v._activateSection=function(a){if(this._currentSection===a){return}if(this._currentSection){this._currentSection.deactivate()
}this._currentSection=a;this._currentSection.activate()};v._updateSectionVisibility=function(){var c=this._getScrollY();
var a=this._getWindowHeight();var h=this._sections[0];var j=[];var d=0;for(var i=0,g=this._sections.length;
i<g;i++){var b=this._sections[i];var f=b.trackedElement.pixelsInView;if(b.isFixedHero){f=a-c
}if(f>d){h=b;d=f}if(f>0.000001){j.push(b)}}for(i=0,g=Math.max(this._visibleSections.length,j.length);
i<g;i++){if(this._visibleSections[i]&&j.indexOf(this._visibleSections[i])===-1){this._visibleSections[i].onSectionWillDisappear(c,a)
}if(j[i]&&this._visibleSections.indexOf(j[i])===-1){j[i].onSectionWillAppear(c,a)
}}this._visibleSections=j;this._activateSection(h)};v._updateLocalNavTheme=function(){var b=this._getScrollY();
this._sectionUnderLocalNav=this._visibleSections[0];for(var a=0,c=this._visibleSections.length;
a<c;a++){if(b+s.height>this._visibleSections[a].scrollToPosition){this._sectionUnderLocalNav=this._visibleSections[a]
}}if(this._sectionUnderLocalNav){s.setCurrentSection(this._sectionUnderLocalNav)
}};v._onPageDidAppear=function(a){};v._onPageWillDisappear=function(a){this.destroy()
};v._onBreakpoint=function(b){var g=b.to;var d=b.from;this._currentBreakpoint=g;
var f=this._getScrollY();var a=this._getWindowHeight();this._elementTracker.refreshAllElementMetrics(f,a);
for(var c=0,h=this._sections.length;c<h;c++){this._sections[c].onBreakpoint(g,d,f,a)
}this.performDeepMetricsRefresh()};v._onRetinaChange=function(b){var f=this._getScrollY(true);
var a=this._getWindowHeight(true);this.isRetina=r.retina;var c=this._currentBreakpoint;
this._elementTracker.refreshAllElementMetrics(f,a);for(var d=0,g=this._sections.length;
d<g;d++){this._sections[d].onRetinaChange(this.isRetina,c,f,a)}};v._onScroll=function(b){var d=this._getScrollY(true);
var a=this._getWindowHeight();this._updateSectionVisibility();this._updateLocalNavTheme();
for(var c=0,f=this._visibleSections.length;c<f;c++){this._visibleSections[c].onScroll(b,d,a)
}};v._onResizeDebounced=function(b){var f=this._getScrollY();var a=this._getWindowHeight();
var c=false;for(var d=0,g=this._sections.length;d<g;d++){if(!c&&this._sections[d]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._sections[d].onResizeDebounced(b,f,a)}this._updateSectionVisibility();
this._updateLocalNavTheme()};v.performDeepMetricsRefresh=function(){var c=this._getScrollY();
var a=this._getWindowHeight();this._elementTracker.refreshAllElementMetrics(c,a);
for(var b=0,d=this._sections.length;b<d;b++){this._sections[b].elementEngagement.refreshAllElementMetrics(c,a);
this._sections[b].updateScrollToPosition()}this._updateSectionVisibility();this._updateLocalNavTheme()
};v._onOrientationChange=function(b){var d=this._getScrollY(true);var a=this._getWindowHeight(true);
var f=b.orientation;for(var c=0,g=this._sections.length;c<g;c++){this._sections[c].onOrientationChange(b,f,d,a)
}};v._onResizeImmediate=function(b){var f=this._getScrollY();var a=this._getWindowHeight(true);
var c=false;for(var d=0,g=this._sections.length;d<g;d++){if(!c&&this._sections[d]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._sections[d].onResizeImmediate(b,f,a)}window.clearTimeout(this._resizeTimeout);
this._resizeTimeout=window.setTimeout(this._onResizeDebounced.bind(this,b),this._resizeTimeoutDelay)
};v._onRequestAnimationFrame=function(){this._rafId=requestAnimationFrame(this._onRequestAnimationFrame);
for(var b=0,c=this._visibleSections.length;b<c;b++){var a=this._visibleSections[b];
if(a.rafWhenVisible||a.isActive){a.onRequestAnimationFrame()}}};v._getScrollY=function(a){if(a){this._cachedScrollY=window.pageYOffset||(document.documentElement||document.body).scrollTop
}return this._cachedScrollY};v._getWindowHeight=function(a){if(a){this._cachedWindowHeight=document.documentElement.clientHeight||window.innerHeight
}return this._cachedWindowHeight};v._getVisibleBottomOfPage=function(){return this._getScrollY()+this._getWindowHeight()
};v._getCurrentBreakpoint=function(){return this._currentBreakpoint};v._isNestedSection=function(b){var a=b;
var d=this._sections.length;while(a=a.parentElement){for(var c=0;c<d;c++){if(this._sections[c].element===a){return true
}}}return false};v.getBaseSectionForElement=function(a){for(var b=0,c=this._sections.length;
b<c;b++){if(this._sections[b].element===a){return this._sections[b]}}return null
};C.exports=z},{"../model/DataAttributes":340,"../model/EnabledFeatures":341,"../model/SectionMap":342,"../utils/Page":343,"../utils/ViewportEmitterStub":344,"./LocalNavStyleChanger":338,"@marcom/ac-dom-events/addEventListener":307,"@marcom/ac-dom-events/removeEventListener":316,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-element-tracker":332,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/assign":"@marcom/ac-polyfills/Object/assign","@marcom/ac-polyfills/console.log":"@marcom/ac-polyfills/console.log","@marcom/ac-viewport-emitter":590}],337:[function(y,z,v){y("@marcom/ac-polyfills/Object/create");
y("@marcom/ac-polyfills/Element/prototype.classList");var C=y("@marcom/ac-console");
var r=y("@marcom/ac-dom-metrics");var B=y("@marcom/ac-element-engagement").ElementEngagement;
var A=y("@marcom/ac-dom-traversal/querySelectorAll");var w=y("./../model/DataAttributes");
var u=y("./../model/ComponentMap");var x=y("./BaseComponent");var q=y("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=q.prototype;function s(b,c,d,g,a,f){if(arguments.length!==6){throw new Error("Incorrect number of arguments passed to BaseSection")
}q.call(this);this.element=b;this.trackedElement=c;this.elementEngagement=new B(null,{autoStart:false});
this.rafWhenVisible=this.rafWhenVisible||false;this.index=f;this.isVisible=this.trackedElement.pixelsInView>0;
this.hasAnimatedIn=false;this.isActive=false;this.isFixedHero=false;this.cachedBreakpoint=d;
this.cachedScrollPosition=g;this.cachedWindowHeight=a;this.name=this.name||this.element.className;
this.scrollToPosition=0;this.updateScrollToPosition();this._components=[];this.setupComponents(d,g,a);
this.setIsFixedHero();this.performDeprecatedMethodCheck()}var t=s.prototype=Object.create(q.prototype);
s.prototype.constructor=s;t.performDeprecatedMethodCheck=function(){if(this["onViewWillAppear"]){throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass")
}if(this["onViewWillDisappear"]){throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass")
}return true};t.destroy=function(){this.teardownEvents();this.elementEngagement.stop();
this.elementEngagement=null;for(var a=0,b=this._components.length;a<b;a++){this._components[a].destroy()
}this._components=null;this.trackedElement=null;this.element=null;p.destroy.call(this)
};t.setupEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].setupEvents()
}};t.teardownEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].teardownEvents()
}};t.setupComponents=function(){var c=A("["+w.COMPONENT_LIST+"]",this.element);
if(this.element.hasAttribute(w.COMPONENT_LIST)){c.push(this.element)}for(var f=0;
f<c.length;f++){var a=c[f];var b=a.getAttribute(w.COMPONENT_LIST);if(b.indexOf("|")!==-1){throw"BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '"+b+"'"
}var d=b.split(" ");for(var g=0,i=d.length;g<i;g++){var h=d[g];if(h===""||h===" "){continue
}this.addComponentOfType(h,a)}setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement),100)
}};t.addComponentOfType=function(c,a){if(!u.hasOwnProperty(c)){throw"BaseSection::setupComponents parsing '#"+a.id+" ."+a.className+"' no component type '"+c+"'found!"
}var b=u[c];if(!this.componentIsSupported(b,c)){C.log("BaseSection::setupComponents unsupported component '"+c+"'. Reason: '"+c+".IS_SUPPORTED' returned false");
return}var d=new b(this,a,c,this.cachedBreakpoint,this.cachedScrollPosition,this.cachedWindowHeight,this._components.length);
this.rafWhenVisible=d.rafWhenVisible||this.rafWhenVisible;this._components.push(d);
return d};t.removeComponentOfType=function(b){var a=this.getComponentOfType(b);
if(a===null){return}this.removeComponent(a)};t.removeComponent=function(a){var b=this._components.indexOf(a);
if(b===-1){return}this._components.splice(b,1);a.destroy()};t.activate=function(){this.element.classList.add("active");
for(var a=0,b=this._components.length;a<b;a++){if(!this._components[a].isEnabled){continue
}this._components[a].activate()}this.isActive=true;if(!this.hasAnimatedIn){this.element.classList.add("animated");
this.animateIn();this.hasAnimatedIn=true}};t.deactivate=function(){this.element.classList.remove("active");
this.isActive=false;for(var a=0,b=this._components.length;a<b;a++){if(!this._components[a].isEnabled){continue
}this._components[a].deactivate()}};t.animateIn=function(){for(var a=0,b=this._components.length;
a<b;a++){if(!this._components[a].isEnabled){continue}this._components[a].animateIn()
}};t.onRequestAnimationFrame=function(){for(var a=0,c=this._components.length;a<c;
a++){var b=this._components[a];if(!b.isEnabled){continue}if(b.rafWhenVisible||this.isActive){b.onRequestAnimationFrame()
}}};t.onResizeImmediate=function(b,f,a){this.cachedScrollPosition=f;this.cachedWindowHeight=a;
var c=false;for(var d=0,g=this._components.length;d<g;d++){if(!this._components[d].isEnabled){continue
}if(!c&&this._components[d]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeImmediate(b,f,a)}};t.onResizeDebounced=function(b,f,a){this.updateScrollToPosition();
var c=false;for(var d=0,g=this._components.length;d<g;d++){if(!this._components[d].isEnabled){continue
}if(!c&&this._components[d]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeDebounced(b,f,a)}this.elementEngagement.refreshAllElementMetrics(f,a)
};t.onBreakpoint=function(d,a,f,b){this.cachedBreakpoint=d;for(var c=0,g=this._components.length;
c<g;c++){if(!this._components[c].isEnabled){continue}this._components[c].onBreakpoint(d,a,f,b)
}};t.onRetinaChange=function(a,c,f,b){for(var d=0,g=this._components.length;d<g;
d++){if(!this._components[d].isEnabled){continue}this._components[d].onRetinaChange(a,c,f,b)
}this.elementEngagement.refreshAllElementMetrics(f,b)};t.onOrientationChange=function(b,d,f,a){this.cachedScrollPosition=f;
this.cachedWindowHeight=a;for(var c=0,g=this._components.length;c<g;c++){if(!this._components[c].isEnabled){continue
}this._components[c].onOrientationChange(b,d,f,a)}};t.onScroll=function(b,d,a){this.cachedScrollPosition=d;
this.elementEngagement.refreshAllElementStates(d);for(var c=0,f=this._components.length;
c<f;c++){if(!this._components[c].isEnabled){continue}this._components[c].onScroll(b,d,a)
}};t.onSectionWillAppear=function(c,a){this.cachedScrollPosition=c;this.isVisible=true;
this.elementEngagement.refreshAllElementStates(c);for(var b=0,d=this._components.length;
b<d;b++){this._components[b].onSectionWillAppear(c,a)}};t.onSectionWillDisappear=function(c,a){this.cachedScrollPosition=c;
this.isVisible=false;for(var b=0,d=this._components.length;b<d;b++){this._components[b].onSectionWillDisappear(c,a)
}};t.getComponentOfType=function(b){if(!u.hasOwnProperty(b)){throw"BaseSection::getComponentOfType no component type '"+b+"' exist in ComponentMap!"
}for(var a=0,c=this._components.length;a<c;a++){if(this._components[a].componentName===b){return this._components[a]
}}return null};t.getAllComponentsOfType=function(c){if(!u.hasOwnProperty(c)){throw"BaseSection::getAllComponentsOfType no component type '"+c+"' exist in ComponentMap!"
}var a=[];for(var b=0,d=this._components.length;b<d;b++){if(this._components[b].componentName===c){a.push(this._components[b])
}}return a};t.updateScrollToPosition=function(){return this.scrollToPosition=r.getPagePosition(this.element).top
};t.setIsFixedHero=function(){if(this.index!==0){this.isFixedHero=false}else{var a=window.getComputedStyle(this.element);
this.isFixedHero=a.position==="fixed"}};s.prototype.componentIsSupported=function(a,c){var d=a.IS_SUPPORTED;
if(d===undefined){return true}if(typeof d!=="function"){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}var b=a.IS_SUPPORTED();if(b===undefined){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}return b};z.exports=s},{"./../model/ComponentMap":339,"./../model/DataAttributes":340,"./BaseComponent":335,"@marcom/ac-console":305,"@marcom/ac-dom-metrics":19,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-element-engagement":199,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],338:[function(i,o,j){i("@marcom/ac-polyfills/Element/prototype.classList");
var k=i("./../model/DataAttributes");var n=false;var l=function(){if(n){throw new Error("Do not call the constructor, use LocalNavStyleChanger.initialize(settings)")
}n=true;this._currentTheme="";this.defaultTheme="theme-light";this._currentPageNavLink=null;
this._section=null;this.elementToApplyClassesAgainst=null;this.height=0};var m=l.prototype;
m.initialize=function(a){this.elementToApplyClassesAgainst=a.elementToApplyClassesAgainst;
this.sectionThemeMap=a.sectionThemeMap;this.defaultTheme=a.defaultTheme;this.height=a.localNavHeight
};m.setCurrentPage=function(b){var a=document.querySelector(".localnav-link["+k.JUMP_SECTION_NAME+"="+b+"]");
if(a===this._currentPageNavLink){return}if(this._currentPageNavLink){this._currentPageNavLink.classList.remove("current")
}if(a){a.classList.add("current");this._currentPageNavLink=a}};m.setCurrentSection=function(a){if(this.elementToApplyClassesAgainst===null){return
}if(this._section&&this._section===a){return}this._section=a;for(var b=0,d=this._section.element.classList.length;
b<d;b++){var c=this._section.element.classList[b];if(this.sectionThemeMap.hasOwnProperty(c)){this.setTheme(this.sectionThemeMap[c]);
return}}this.setTheme(this.defaultTheme)};m.setTheme=function(a){if(this._currentTheme===a){return
}for(var c in this.sectionThemeMap){var b=this.sectionThemeMap[c];if(b!==a){this.elementToApplyClassesAgainst.classList.remove(b)
}}this.elementToApplyClassesAgainst.classList.add(a);this._currentTheme=a};m.removeThemes=function(){this._currentTheme=null;
for(var a in this.sectionThemeMap){this.elementToApplyClassesAgainst.classList.remove(this.sectionThemeMap[a])
}};o.exports=new l()},{"./../model/DataAttributes":340,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],339:[function(d,g,f){g.exports={BaseComponent:d("../core/BaseComponent")}
},{"../core/BaseComponent":335}],340:[function(d,g,f){g.exports={PAGE_TYPE:"data-page-type",SECTION_TYPE:"data-section-type",JUMP_SECTION_NAME:"data-page-jump-name",COMPONENT_LIST:"data-component-list"}
},{}],341:[function(i,h,f){var g={isDesktop:i("@marcom/ac-feature/isDesktop"),isRetina:i("@marcom/ac-feature/isRetina")};
h.exports={TOUCH:undefined,SVG:undefined,PAGE_JUMP:undefined,IS_IE8:undefined,IS_DESKTOP:undefined,IS_RETINA:undefined,init:function(){var a=document.getElementsByTagName("html")[0];
this.TOUCH=a.classList.contains("touch");this.SVG=a.classList.contains("svg");this.PAGE_JUMP=a.classList.contains("pageJump");
this.IS_IE8=a.classList.contains("ie8");this.IS_DESKTOP=g.isDesktop();this.IS_RETINA=g.isRetina()
},extend:function(b){if(!b.hasOwnProperty("init")||(typeof b.init!=="function")){throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
}var a=this.init;var c=b.init;var d=Object.assign(this,b);d.init=function(){if(this.HAS_INITIALIZED){return
}this.HAS_INITIALIZED=true;a.call(d);c.call(d)};return d},HAS_INITIALIZED:false}
},{"@marcom/ac-feature/isDesktop":227,"@marcom/ac-feature/isRetina":229}],342:[function(d,g,f){g.exports={BaseSection:d("../core/BaseSection")}
},{"../core/BaseSection":337}],343:[function(h,l,i){var j=h("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function m(){j.call(this)}var k=m.prototype=Object.create(j.prototype);m.prototype.constructor=m;
k.deepRefreshAllElementMetrics=function(){this.trigger(m.prototype.DEEP_REFRESH_ALL_METRICS)
};k.DEEP_REFRESH_ALL_METRICS="page.deep_refresh_all_metrics";l.exports=new m()},{"@marcom/ac-event-emitter-micro":201}],344:[function(d,g,f){g.exports=function(){var a;
if(window.ViewportEmitterTestProxy){a=window.ViewportEmitterTestProxy}else{a={};
a.viewport="large";a.on=a.off=function(){}}return a}},{}],345:[function(g,i,h){var j=g("./ac-ajax/Ajax");
var k=g("./ac-ajax/Request");i.exports=new j();i.exports.Ajax=j;i.exports.Request=k
},{"./ac-ajax/Ajax":346,"./ac-ajax/Request":347}],346:[function(o,l,i){var m=o("./Request");
var k=o("./XDomain-request");var j=o("./URLParser");var n=function(){};n._Request=m;
n.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var a=1;
a<arguments.length;a++){for(var b in arguments[a]){if(arguments[a].hasOwnProperty(b)){arguments[0][b]=arguments[a][b]
}}}return arguments[0]},_getOptions:function(b,a){return this._extend({},this._defaults,a,b)
},_isCrossDomainRequest:function(a){var b=new j();var c=b.parse(window.location.href).origin;
var d=b.parse(a).origin;b.destroy();return(d!==c)},create:function(a){return new m(a)
},cors:function(a){var b=(window.XDomainRequest&&document.documentMode<10)?k:m;
return new b(a)},get:function(a){var b;a=this._getOptions({method:"get"},a);if(this._isCrossDomainRequest(a.url)){b=this.cors(a)
}else{b=this.create(a)}return b.send()},getJSON:function(a){return this.get(a).then(function(b){return JSON.parse(b.responseText)
})},head:function(a){a=this._getOptions({method:"head"},a);return this.create(a).send()
},isCrossDomainRequest:function(a){return this._isCrossDomainRequest(a)},post:function(a){a=this._getOptions({method:"post"},a);
return this.create(a).send()}};l.exports=n},{"./Request":347,"./URLParser":348,"./XDomain-request":349}],347:[function(f,h,g){var i=function(a){this._initialize(a)
};i.create=function(){var a=function(){};a.prototype=i.prototype;return new a()
};i.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(a){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(a,b){this.resolve=a;
this.reject=b}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(a){var b=this._validateConfiguration(a);if(b){throw b}this._configuration=a;
var c=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(c,this._configuration.url);this._setRequestHeaders(a.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(a){if(a){a.forEach(function(b){this.xhr.setRequestHeader(b.name,b.value)
},this)}},_setTimeout:function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(a>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),a)
}},_timeout:null,_validateConfiguration:function(a){if(!a){return"Must provide a configuration object"
}var b=[];var c=a.headers;if(!a.url){b.push("Must provide a url")}if(!a.method){b.push("Must provide a method")
}if(c){if(!Array.isArray(c)){return"Must provide an array of headers"}this._validateHeaders(c,b)
}return b.join(", ")},_validateHeaders:function(b,a){for(var c=0,d=b.length;c<d;
c++){if(!b[c].hasOwnProperty("name")||!b[c].hasOwnProperty("value")){a.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};h.exports=i},{}],348:[function(k,j,g){var h=function(){this.parser=null
};var i=h.prototype;i.parse=function(b){var d;var a;var f;var m;var c;if(typeof b!=="string"){throw new TypeError(b+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(b);
f=this.parser.hostname;a=this.parser.protocol;m=this._normalizePort(this.parser);
d=this.parser.origin||this._constructOriginString(this.parser,m);c=this.parser.search;
return{originalPath:b,qualifiedPath:this.parser.href,protocol:a,hostname:f,origin:d,port:m,search:c}
};i.destroy=function(){this.parser=null};i._constructOriginString=function(a,c){var b=c?":"+c:"";
return a.protocol+"//"+a.hostname+b};i._normalizePort=function(a){return(a.port==="80"||a.port==="443"||a.port==="0")?"":a.port
};i._qualifyPath=function(a){this.parser.href=a;this.parser.href=this.parser.href
};j.exports=h},{}],349:[function(g,j,h){var k=g("./Request");var i=function(a){k.apply(this,arguments)
};i.prototype=k.create();i.prototype._getTransport=function(){return new XDomainRequest()
};i.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};i.prototype._setTimeout=function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}}if(a>0){this.xhr.timeout=a}};i.prototype._sendXHR=function(){setTimeout(function(){k.prototype._sendXHR.call(this)
}.bind(this),0)};j.exports=i},{"./Request":347}],350:[function(d,g,f){g.exports.EventEmitter=d("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":351}],351:[function(r,s,q){var o="EventEmitter:propagation";
var l=function(a){if(a){this.context=a}};var p=l.prototype;var n=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var u=function(a,f){var d=a[0];var c=a[1];var g=a[2];if((typeof d!=="string"&&typeof d!=="object")||d===null||Array.isArray(d)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof d==="string")&&!c){throw new Error("Expecting a callback function to be provided.")
}if(c&&(typeof c!=="function")){if(typeof d==="object"&&typeof c==="object"){g=c
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof d==="object"){for(var b in d){f.call(this,b,d[b],g)
}}if(typeof d==="string"){d=d.split(" ");d.forEach(function(h){f.call(this,h,c,g)
},this)}};var m=function(d,c){var b;var a;var f;b=n.call(this)[d];if(!b||b.length===0){return
}b=b.slice();this._stoppedImmediatePropagation=false;for(a=0,f=b.length;a<f;a++){if(this._stoppedImmediatePropagation||c(b[a],a)){break
}}};var t=function(a,d,c){var b=-1;m.call(this,d,function(f,g){if(f.callback===c){b=g;
return true}});if(b===-1){return}a[d].splice(b,1)};p.on=function(){var a=n.call(this);
u.call(this,arguments,function(d,c,b){a[d]=a[d]||(a[d]=[]);a[d].push({callback:c,context:b})
});return this};p.once=function(){u.call(this,arguments,function(a,c,b){var d=function(f){c.call(b||this,f);
this.off(a,d)};this.on(a,d,this)});return this};p.off=function(f,c){var a=n.call(this);
if(arguments.length===0){this._events={}}else{if(!f||(typeof f!=="string"&&typeof f!=="object")||Array.isArray(f)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof f==="object"){for(var d in f){t.call(this,a,d,f[d])}}if(typeof f==="string"){var b=f.split(" ");
if(b.length===1){if(c){t.call(this,a,f,c)}else{a[f]=[]}}else{b.forEach(function(g){a[g]=[]
})}}return this};p.trigger=function(a,c,b){if(!a){throw new Error("trigger method requires an event name")
}if(typeof a!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(b&&typeof b!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}a=a.split(" ");a.forEach(function(d){m.call(this,d,function(f){f.callback.call(f.context||this.context||this,c)
}.bind(this));if(!b){m.call(this,o,function(f){var g=d;if(f.prefix){g=f.prefix+g
}f.emitter.trigger(g,c)})}},this);return this};p.propagateTo=function(a,c){var b=n.call(this);
if(!b[o]){this._events[o]=[]}b[o].push({emitter:a,prefix:c})};p.stopPropagatingTo=function(d){var a=n.call(this);
if(!d){a[o]=[];return}var c=a[o];var f=c.length;var b;for(b=0;b<f;b++){if(c[b].emitter===d){c.splice(b,1);
break}}};p.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};p.has=function(b,c,g){var h=n.call(this);var a=h[b];if(arguments.length===0){return Object.keys(h)
}if(!a){return false}if(!c){return(a.length>0)?true:false}for(var i=0,f=a.length;
i<f;i++){var d=a[i];if(g&&c&&d.context===g&&d.callback===c){return true}else{if(c&&!g&&d.callback===c){return true
}}}return false};s.exports=l},{}],352:[function(d,g,f){(function(b,a){if(typeof f==="object"&&f){g.exports=a
}else{if(typeof define==="function"&&define.amd){define(a)}else{b.Deferred=a}}}(this,(function(){var s={};
var t,c,a,u,o,p,b,r;t={0:"pending",1:"resolved",2:"rejected"};c=function(k,i){var l,h,j,m,n;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=i;h=this.pending;j=h.length;for(l=0;l<j;l++){m=h[l];if(m[k]){n=m[k](i)
}if(typeof n==="object"&&n.hasOwnProperty("then")&&n.hasOwnProperty("status")){n.then(function(w){m.deferred.resolve(w)
},function(w){m.deferred.reject(w)},function(w){m.deferred.progress(w)})}else{m.deferred[k](n||undefined)
}}if(k!=="progress"){h=[]}return true};p=function(h,i){this.then=h;this.status=i
};b=p.prototype;r=function(h){return h};b.success=function(h,i){return this.then(h.bind(i),r,r)
};b.fail=function(h,i){return this.then(r,h.bind(i),r)};b.progress=function(h,i){return this.then(r,r,h.bind(i))
};u=function(h){if(typeof h!=="function"){return function(){}}return h};a=function(h,i,j){this.resolve=u(h);
this.reject=u(i);this.progress=u(j);this.deferred=new o()};o=function(){this.pending=[];
this._status=0;this._promise=new p(this.then.bind(this),this.status.bind(this))
};o.prototype={status:function(){return t[this._status]},promise:function(){return this._promise
},progress:function(h){c.call(this,"progress",h);return this._promise},resolve:function(h){c.call(this,"resolve",h);
if(this._status===0){this._status=1}return this._promise},reject:function(h){c.call(this,"reject",h);
if(this._status===0){this._status=2}return this._promise},then:function(h,j,k){var l,i;
i=new a(h,j,k);if(this._status===0){this.pending.push(i)}else{if(this._status===1&&typeof h==="function"){l=h(this.data);
if(typeof l==="object"&&l.hasOwnProperty("then")&&l.hasOwnProperty("status")){l.then(function(m){i.deferred.resolve(m)
},function(m){i.deferred.reject(m)},function(m){i.deferred.progress(m)})}else{i.deferred.resolve(l)
}}else{if(this._status===2&&typeof j==="function"){l=j(this.data);i.deferred.reject(l)
}}}return i.deferred.promise()}};var q=function(){var j,k,h,i,l;j=[].slice.call(arguments);
k=new o();h=0;i=function(m){h--;var n=j.indexOf(this);j[n]=m;if(h===0){k.resolve(j)
}};l=function(m){k.reject(m)};j.forEach(function(m){if(m.then){h++}});j.forEach(function(m){if(m.then){m.then(i.bind(m),l)
}});return k.promise()};o.when=q;s.Deferred=o;return s}())))},{}],353:[function(q,r,p){function n(){}n.prototype={resolve:function m(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function k(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function s(){var a="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(a);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function o(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function l(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};r.exports=n},{}],354:[function(q,p,k){var m=new (q("./ac-deferred/Deferred"))(),n=q("smartsign-deferred").Deferred;
function j(){this._defer=new n()}j.prototype=m;p.exports.join=function l(){return n.when.apply(null,[].slice.call(arguments))
};p.exports.all=function o(a){return n.when.apply(null,a)};p.exports.Deferred=j
},{"./ac-deferred/Deferred":353,"smartsign-deferred":352}],355:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":356,"./ac-asset-loader/AssetLoader/Asset":357,"./ac-asset-loader/AssetLoader/Asset/Ajax":358,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":359,"./ac-asset-loader/AssetLoader/Asset/Binary":360,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":361,"./ac-asset-loader/AssetLoader/Asset/Img":362,"./ac-asset-loader/AssetLoader/Asset/Video":365,"./ac-asset-loader/AssetLoader/Queue":366,"@marcom/ac-polyfills":"@marcom/ac-polyfills"}],356:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":367,"./AssetLoader/Asset/Ajax":358,"./AssetLoader/Asset/Ajax/JSON":359,"./AssetLoader/Asset/Img":362,"./AssetLoader/Asset/Video":365,"./AssetLoader/Queue":366,"@marcom/ac-event-emitter":350,"@marcom/ac-object":456}],357:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":367,"@marcom/ac-event-emitter":350,"ac-deferred":354}],358:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":357,"@marcom/ac-ajax":345,"@marcom/ac-object":456}],359:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":358,"@marcom/ac-object":456}],360:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":357,"./Binary/Chunk":361,"@marcom/ac-ajax":345,"@marcom/ac-object":456}],361:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":357,"@marcom/ac-ajax":345,"@marcom/ac-object":456}],362:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":357,"@marcom/ac-object":456}],363:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":357,"./SplitFile/Chunk":364,"@marcom/ac-ajax":345,"@marcom/ac-object":456}],364:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":357,"@marcom/ac-ajax":345,"@marcom/ac-object":456}],365:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function")
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":357,"./Binary":360,"./SplitFile":363,"@marcom/ac-feature":217,"@marcom/ac-object":456}],366:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":367,"@marcom/ac-event-emitter":350,"@marcom/ac-object":456,"ac-deferred":354}],367:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],368:[function(d,g,f){arguments[4][83][0].apply(f,arguments)
},{"./ac-clock/Clock":369,"./ac-clock/ThrottledClock":370,"./ac-clock/sharedClockInstance":371,dup:83}],369:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:84}],370:[function(d,g,f){arguments[4][85][0].apply(f,arguments)
},{"./sharedClockInstance":371,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:85}],371:[function(d,g,f){arguments[4][86][0].apply(f,arguments)
},{"./Clock":369,dup:86}],372:[function(d,g,f){arguments[4][350][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":373,dup:350}],373:[function(d,g,f){arguments[4][351][0].apply(f,arguments)
},{dup:351}],374:[function(d,g,f){g.exports={DOMEmitter:d("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":375}],375:[function(s,t,r){var q;var l=s("ac-event-emitter").EventEmitter,m=s("./DOMEmitterEvent"),p={addEventListener:s("@marcom/ac-dom-events/addEventListener"),removeEventListener:s("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:s("@marcom/ac-dom-events/dispatchEvent")},u={querySelectorAll:s("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:s("@marcom/ac-dom-traversal/matchesSelector")};
var n="dom-emitter";function o(a){if(a===null){return}this.el=a;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new l()}q=o.prototype;q.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};q.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};q.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};q.has=function(b,d,f,h){var g,c;if(typeof d==="string"){g=d;c=f}else{c=d;
h=f}if(g){var a=this._getDelegateFuncBindingIdx(b,g,c,h,true);if(a>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};q.trigger=function(i,a,h,c){i=this._parseEventNames(i);i=this._cleanStringData(i);
var f,d,g,b=i.length;if(typeof a==="string"){f=this._cleanStringData(a);d=h}else{d=a;
c=h}for(g=0;g<b;g++){this._triggerDOMEvents(i[g],d,f)}return this};q.emitterTrigger=function(a,d,c){if(!this._eventEmitter){return this
}a=this._parseEventNames(a);a=this._cleanStringData(a);d=new m(d,this);var f,b=a.length;
for(f=0;f<b;f++){this._eventEmitter.trigger(a[f],d,c)}return this};q.propagateTo=function(b,a){this._eventEmitter.propagateTo(b,a);
return this};q.stopPropagatingTo=function(a){this._eventEmitter.stopPropagatingTo(a);
return this};q.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};q.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q._parseEventNames=function(a){if(!a){return[a]
}return a.split(" ")};q._onListenerEvent=function(c,a){var b=new m(a,this);this._eventEmitter.trigger(c,b,false)
};q._setListener=function(a){this._bindings[a]=this._onListenerEvent.bind(this,a);
p.addEventListener(this.el,a,this._bindings[a])};q._removeListener=function(a){p.removeEventListener(this.el,a,this._bindings[a]);
this._bindings[a]=null};q._triggerInternalEvent=function(b,a){this.emitterTrigger(n+":"+b,a)
};q._normalizeArgumentsAndCall=function(b,h){var c={};if(b.length===0){h.call(this,c);
return}if(typeof b[0]==="string"||b[0]===null){b=this._cleanStringData(b);c.events=b[0];
if(typeof b[1]==="string"){c.delegateQuery=b[1];c.callback=b[2];c.context=b[3]}else{c.callback=b[1];
c.context=b[2]}h.call(this,c);return}var a,f,d=":",g=b[0];for(a in g){if(g.hasOwnProperty(a)){c={};
f=this._cleanStringData(a.split(d));c.events=f[0];c.delegateQuery=f[1];c.callback=g[a];
c.context=b[1];h.call(this,c)}}};q._registerDelegateFunc=function(g,d,c,b,f){var a=this._delegateFunc.bind(this,g,d,c,f);
this._delegateFuncs[d]=this._delegateFuncs[d]||{};this._delegateFuncs[d][g]=this._delegateFuncs[d][g]||[];
this._delegateFuncs[d][g].push({func:b,context:f,delegateFunc:a});return a};q._cleanStringData=function(h){var i=false;
if(typeof h==="string"){h=[h];i=true}var a=[],f,c,d,g,b=h.length;for(f=0;f<b;f++){c=h[f];
if(typeof c==="string"){if(c===""||c===" "){continue}d=c.length;while(c[0]===" "){c=c.slice(1,d);
d--}while(c[d-1]===" "){c=c.slice(0,d-1);d--}}a.push(c)}if(i){return a[0]}return a
};q._unregisterDelegateFunc=function(g,c,b,d){if(!this._delegateFuncs[c]||!this._delegateFuncs[c][g]){return
}var f=this._getDelegateFuncBindingIdx(g,c,b,d),a;if(f>-1){a=this._delegateFuncs[c][g][f].delegateFunc;
this._delegateFuncs[c][g].splice(f,1);if(this._delegateFuncs[c][g].length===0){this._delegateFuncs[c][g]=null
}}return a};q._unregisterDelegateFuncs=function(b,c){if(!this._delegateFuncs[c]){return
}if(b!==null&&!this._delegateFuncs[c][b]){return}if(b===null){var a;for(a in this._delegateFuncs[c]){if(this._delegateFuncs[c].hasOwnProperty(a)){this._unbindDelegateFunc(a,c)
}}return}this._unbindDelegateFunc(b,c)};q._unbindDelegateFunc=function(b,f){var d,c,a=0;
while(this._delegateFuncs[f][b]&&this._delegateFuncs[f][b][a]){d=this._delegateFuncs[f][b][a];
c=this._delegateFuncs[f][b][a].length;this._off({events:b,delegateQuery:f,callback:d.func,context:d.context});
if(this._delegateFuncs[f][b]&&c===this._delegateFuncs[f][b].length){a++}}d=c=null
};q._unregisterDelegateFuncsByEvent=function(b){var a;for(a in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(a)){this._unregisterDelegateFuncs(b,a)
}}};q._delegateFunc=function(b,f,c,h,d){if(this._targetHasDelegateAncestor(d.target,f)){var a=Array.prototype.slice.call(arguments,0),g=a.slice(4,a.length);
h=h||window;if(typeof d.detail==="object"){g[0]=d.detail}c.apply(h,g)}};q._targetHasDelegateAncestor=function(c,a){var b=c;
while(b&&b!==this.el&&b!==document.documentElement){if(u.matchesSelector(b,a)){return true
}b=b.parentNode}return false};q._on=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
a=this._parseEventNames(a);a.forEach(function(h,w,j,i,k){if(!this.has(k)){this._setListener(k)
}if(typeof i==="string"){h=this._registerDelegateFunc(k,i,h,w,j)}this._triggerInternalEvent("willon",{evt:k,callback:h,context:j,delegateQuery:i});
this._eventEmitter.on(k,h,j);this._triggerInternalEvent("didon",{evt:k,callback:h,context:j,delegateQuery:i})
}.bind(this,c,b,g,f));a=c=b=f=g=null};q._off=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
if(typeof a==="undefined"){this._eventEmitter.off();var h;for(h in this._bindings){if(this._bindings.hasOwnProperty(h)){this._removeListener(h)
}}for(h in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(h)){this._delegateFuncs[h]=null
}}return}a=this._parseEventNames(a);a.forEach(function(i,y,k,j,x){if(typeof j==="string"&&typeof y==="function"){i=this._unregisterDelegateFunc(x,j,y,k);
if(!i){return}}if(typeof j==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncs(x,j);
return}if(typeof x==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncsByEvent(x);
if(typeof j==="string"){return}}this._triggerInternalEvent("willoff",{evt:x,callback:i,context:k,delegateQuery:j});
this._eventEmitter.off(x,i,k);this._triggerInternalEvent("didoff",{evt:x,callback:i,context:k,delegateQuery:j});
if(!this.has(x)){this._removeListener(x)}}.bind(this,c,b,g,f));a=c=b=f=g=null};
q._once=function(d){var b=d.events,c=d.callback,f=d.delegateQuery,a=d.context;b=this._parseEventNames(b);
b.forEach(function(g,i,h,j){if(typeof h==="string"){return this._handleDelegateOnce(j,g,i,h)
}if(!this.has(j)){this._setListener(j)}this._triggerInternalEvent("willonce",{evt:j,callback:g,context:i,delegateQuery:h});
this._eventEmitter.once.call(this,j,g,i);this._triggerInternalEvent("didonce",{evt:j,callback:g,context:i,delegateQuery:h})
}.bind(this,c,a,f));b=c=f=a=null};q._handleDelegateOnce=function(b,c,a,d){this._triggerInternalEvent("willonce",{evt:b,callback:c,context:a,delegateQuery:d});
this._on({events:b,context:a,delegateQuery:d,callback:this._getDelegateOnceCallback.bind(this,b,c,a,d),unboundCallback:c});
this._triggerInternalEvent("didonce",{evt:b,callback:c,context:a,delegateQuery:d});
return this};q._getDelegateOnceCallback=function(b,c,g,d){var a=Array.prototype.slice.call(arguments,0),f=a.slice(4,a.length);
c.apply(g,f);this._off({events:b,delegateQuery:d,callback:c,context:g})};q._getDelegateFuncBindingIdx=function(j,c,f,h,i){var a=-1;
if(this._delegateFuncs[c]&&this._delegateFuncs[c][j]){var d,g,b=this._delegateFuncs[c][j].length;
for(d=0;d<b;d++){g=this._delegateFuncs[c][j][d];if(i&&typeof f==="undefined"){f=g.func
}if(g.func===f&&g.context===h){a=d;break}}}return a};q._triggerDOMEvents=function(h,d,f){var a=[this.el];
if(f){a=u.querySelectorAll(f,this.el)}var g,c,b=a.length;for(g=0;g<b;g++){p.dispatchEvent(a[g],h,{bubbles:true,cancelable:true,detail:d})
}};t.exports=o},{"./DOMEmitterEvent":376,"@marcom/ac-dom-events/addEventListener":377,"@marcom/ac-dom-events/dispatchEvent":378,"@marcom/ac-dom-events/removeEventListener":385,"@marcom/ac-dom-traversal/matchesSelector":75,"@marcom/ac-dom-traversal/querySelectorAll":79,"ac-event-emitter":372}],376:[function(h,m,i){var k={preventDefault:h("@marcom/ac-dom-events/preventDefault"),stopPropagation:h("@marcom/ac-dom-events/stopPropagation"),target:h("@marcom/ac-dom-events/target")};
var l;var j=function(a,b){this._domEmitter=b;this.originalEvent=a||{};this._originalTarget=k.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(a){this.data=this.originalEvent;this.originalEvent={}}}};l=j.prototype;
l.preventDefault=function(){k.preventDefault(this.originalEvent)};l.stopPropagation=function(){k.stopPropagation(this.originalEvent)
};l.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};l._isDOMEvent=function(a){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&a instanceof CustomEvent)){return true
}return false};m.exports=j},{"@marcom/ac-dom-events/preventDefault":384,"@marcom/ac-dom-events/stopPropagation":387,"@marcom/ac-dom-events/target":388}],377:[function(d,g,f){arguments[4][179][0].apply(f,arguments)
},{"./shared/getEventType":386,"./utils/addEventListener":389,dup:179}],378:[function(d,g,f){arguments[4][180][0].apply(f,arguments)
},{"./shared/getEventType":386,"./utils/dispatchEvent":390,dup:180}],379:[function(d,g,f){arguments[4][182][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":380,"./shared/prefixHelper":381,"./shared/windowFallbackEventTypes":382,"./utils/eventTypeAvailable":383,dup:182}],380:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],381:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],382:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],383:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],384:[function(d,g,f){arguments[4][187][0].apply(f,arguments)
},{dup:187}],385:[function(d,g,f){arguments[4][188][0].apply(f,arguments)},{"./shared/getEventType":386,"./utils/removeEventListener":391,dup:188}],386:[function(d,g,f){arguments[4][189][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":379,dup:189}],387:[function(d,g,f){arguments[4][191][0].apply(f,arguments)
},{dup:191}],388:[function(d,g,f){arguments[4][192][0].apply(f,arguments)},{dup:192}],389:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],390:[function(d,g,f){arguments[4][194][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":"@marcom/ac-polyfills/CustomEvent",dup:194}],391:[function(d,g,f){arguments[4][195][0].apply(f,arguments)
},{dup:195}],392:[function(d,g,f){arguments[4][345][0].apply(f,arguments)},{"./ac-ajax/Ajax":393,"./ac-ajax/Request":394,dup:345}],393:[function(d,g,f){arguments[4][346][0].apply(f,arguments)
},{"./Request":394,"./URLParser":395,"./XDomain-request":396,dup:346}],394:[function(d,g,f){arguments[4][347][0].apply(f,arguments)
},{dup:347}],395:[function(d,g,f){arguments[4][348][0].apply(f,arguments)},{dup:348}],396:[function(d,g,f){arguments[4][349][0].apply(f,arguments)
},{"./Request":394,dup:349}],397:[function(d,g,f){arguments[4][350][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":398,dup:350}],398:[function(d,g,f){arguments[4][351][0].apply(f,arguments)
},{dup:351}],399:[function(d,g,f){arguments[4][352][0].apply(f,arguments)},{dup:352}],400:[function(d,g,f){arguments[4][353][0].apply(f,arguments)
},{dup:353}],401:[function(d,g,f){arguments[4][354][0].apply(f,arguments)},{"./ac-deferred/Deferred":400,dup:354,"smartsign-deferred":399}],402:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":403,"./ac-asset-loader/AssetLoader/Asset":404,"./ac-asset-loader/AssetLoader/Asset/Ajax":405,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":406,"./ac-asset-loader/AssetLoader/Asset/Binary":407,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":408,"./ac-asset-loader/AssetLoader/Asset/Img":409,"./ac-asset-loader/AssetLoader/Asset/Video":412,"./ac-asset-loader/AssetLoader/Queue":413,"@marcom/ac-polyfills":"@marcom/ac-polyfills"}],403:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":414,"./AssetLoader/Asset/Ajax":405,"./AssetLoader/Asset/Ajax/JSON":406,"./AssetLoader/Asset/Img":409,"./AssetLoader/Asset/Video":412,"./AssetLoader/Queue":413,"@marcom/ac-event-emitter":397,"@marcom/ac-object":456}],404:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":414,"@marcom/ac-event-emitter":397,"ac-deferred":401}],405:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":404,"@marcom/ac-ajax":392,"@marcom/ac-object":456}],406:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":405,"@marcom/ac-object":456}],407:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":404,"./Binary/Chunk":408,"@marcom/ac-ajax":392,"@marcom/ac-object":456}],408:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":404,"@marcom/ac-ajax":392,"@marcom/ac-object":456}],409:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":404,"@marcom/ac-object":456}],410:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":404,"./SplitFile/Chunk":411,"@marcom/ac-ajax":392,"@marcom/ac-object":456}],411:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":404,"@marcom/ac-ajax":392,"@marcom/ac-object":456}],412:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&r.isDesktop()===true)
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":404,"./Binary":407,"./SplitFile":410,"@marcom/ac-feature":217,"@marcom/ac-object":456}],413:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":414,"@marcom/ac-event-emitter":397,"@marcom/ac-object":456,"ac-deferred":401}],414:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],415:[function(d,g,f){d("@marcom/ac-polyfills/Promise");d("@marcom/ac-polyfills/JSON");
g.exports={createFlow:d("./ac-flow/flow/factory"),Player:d("./ac-flow/flow/Player")}
},{"./ac-flow/flow/Player":418,"./ac-flow/flow/factory":429,"@marcom/ac-polyfills/JSON":"@marcom/ac-polyfills/JSON","@marcom/ac-polyfills/Promise":"@marcom/ac-polyfills/Promise"}],416:[function(v,w,u){var o=v("@marcom/ac-event-emitter-micro").EventEmitterMicro,p=v("./compositor/decorator/Keyframe"),q=v("./compositor/decorator/Superframe"),r=v("./compositor/decorator/SuperKeyframe"),m=v("./compositor/decorator/Cache");
var n=v("./compositor/Sequence");function t(a,c,b,d){o.call(this);this._compositor=new n(c,b,d);
this.options=a||{}}var s=t.prototype=new o(null);s._gotoImageFrame=function(a){if(this._rendering){return Promise.resolve()
}else{if(this._currentFrame===a){return Promise.resolve()}}this._rendering=true;
return this._compositor.compositeFrames(this._currentFrame,a).then(function(){this._rendering=false;
this._currentFrame=a}.bind(this))};s.init=function(){var a;if(this.options.element.nodeName==="CANVAS"){a=this.options.element
}else{a=document.createElement("canvas");this.options.element.appendChild(a)}this.gotoFrame=this._gotoImageFrame;
return this._compositor.init(a).then(this._decorateCompositor.bind(this))};s.resumeLoading=function(){return this._compositor.resumeLoading()
};s.pauseLoading=function(){this._compositor.pauseLoading()};s._decorateCompositor=function(){var a=this._compositor;
var b;var c;if(a){b=this._compositor._diffRender.flowData;c=this._compositor.canvas;
if(b.superframeFrequency){a=new q(a,b.superframeFrequency)}if(b.version>=4){a=new p(a)
}if(b.version>=4&&b.superframeFrequency){a=new r(a)}if(this.options.keyframeCache){a=new m(a,this.options.keyframeCache)
}if(a===this._compositor){return Promise.resolve()}else{this._compositor=a;return this._compositor.init(c)
}}else{return Promise.reject()}};s._destroy=function(){this.off();this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(s,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});w.exports=t},{"./compositor/Sequence":419,"./compositor/decorator/Cache":420,"./compositor/decorator/Keyframe":421,"./compositor/decorator/SuperKeyframe":422,"./compositor/decorator/Superframe":423,"@marcom/ac-event-emitter-micro":201}],417:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,l=o("./data/provider/Async");
var k=function(c,b,a){this._manifestUrl=c;this._keyframeUrls=b;this._imageUrlPattern=a;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this)};var m=k.prototype;m.setManifestUrl=function(a){this._manifestUrl=a;
return this};m.setKeyframeUrls=function(a){this._keyframeUrls=a;return this};m.setImageUrlPattern=function(a){this._imageUrlPattern=a;
return this};m.pause=function(){this._shouldPause=true;var a,b=this._activeLoaders.length;
for(a=0;a<b;a++){this._activeLoaders[a].pause()}this._paused=true};m.destroy=function(){var b,c,a;
this.pause();for(b in this._loaders){if(this._loaders.hasOwnProperty(b)){this._loaders[b].destroy()
}}for(c in this._promises){if(this._promises.hasOwnProperty(c)){if(this._promises[c].status()==="pending"){this._promises[c].reject()
}}}for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};m.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return true}};m._resume=function(){this._shouldPause=false;var d,c=this._activeLoaders.length;
for(d=0;d<c;d++){this._activeLoaders[d].load()}var a,b=this._resumeQueue.length;
for(a=0;a<b;a++){this._resumeQueue[a].call(this)}this._resumeQueue=[];this._paused=false
};m.loadManifest=function(){if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return}if(this.assets.manifest){return this.assets.manifest}else{this._paused=false;
this._loaders.manifest=new l(this._getManifestAssetsData());this._activeLoaders.push(this._loaders.manifest);
return this._loaders.manifest.load().then(this._boundOnManifestLoaded)}};m.loadKeyframes=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes)}if(this.assets.keyframes){a=Promise.resolve(this.assets.keyframes)
}else{this._paused=false;this._loaders.keyframes=new i(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);a=this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
}this._promises.keyframes=a;return this._promises.keyframes};m.loadDiffs=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadDiffs)}if(this.assets.diffs){a=this._promises.diffs.resolve(this.assets.diffs)
}else{this._paused=false;this._loaders.diffs=new i(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);a=this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
}this._promises.diffs=a;return this._promises.diffs};m._getManifestAssetsData=function(){return this._manifestUrl
};m._getKeyframesAssetsData=function(){return this._keyframeUrls};m._getDiffsAssetsData=function(){var b=this.assets.manifest.imagesRequired,d=[],a,c,f=this._imageUrlPattern.match(/#/g).length;
for(a=1;a<=b;a++){c="0000"+a;c=c.substring(c.length-f);d.push(this._imageUrlPattern.replace(/#{2,}/g,c))
}return d};m._onManifestLoaded=function(a){if(this.assets){this.assets.manifest=a;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
return this.assets.manifest}};m._onKeyframesLoaded=function(a){if(this.assets){this.assets.keyframes=a;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
return Promise.resolve(this.assets.keyframes)}};m._onDiffsLoaded=function(a){if(this.assets){this.assets.diffs=a;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
return Promise.resolve(this.assets.diffs)}};m._removeFromActiveLoaders=function(a){var b,c=this._activeLoaders.length;
for(b=0;b<c;b++){if(this._activeLoaders[b]===a){this._activeLoaders.splice(b,1);
return}}};n.exports=k},{"./data/provider/Async":427,"@marcom/ac-asset-loader":402}],418:[function(h,m,i){var j=h("@marcom/ac-dom-emitter").DOMEmitter;
function k(b,a){this.element=a;this._domEmitter=new j(a);this._frameRate=30;this.paused=true;
this.loop=false;this._destroyed=false;this._flow=b;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this)
}var l=k.prototype;l._timeToFrame=function(b){var a;a=Math.round(b/this.duration*this._flow.frameCount);
a=a%(this._flow.frameCount+1);return(a<0)?this._flow.frameCount+a:a};l._advanceToTimeGlobal=function(b){if(this._requestAnimationFrame){this._prevTime=this._prevTime||b;
this._currentTime+=((b-this._prevTime)/1000)*this.playbackRate;this._prevTime=b;
this._pauseAfterRender=false;var a=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){a=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){a=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(a).then(this._onBoundGlobalTimeUpdate)
}}};l._onGlobalTimeUpdate=function(){this.trigger("timeupdate");if(this._pauseAfterRender){this.paused=true;
this.trigger("ended")}else{this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}};l._onLocalTimeUpdate=function(){this.seeking=false;this.trigger("timeupdate");
this.trigger("seeked");this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
};l._advanceToTimeLocal=function(a){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*a;this._prevTime=null;window.cancelAnimationFrame(this._requestAnimationFrame);
this._flow.gotoFrame(this._timeToFrame(a)).then(this._onBoundLocalTimeUpdate)}};
l._onLoaded=function(){this.trigger("loaded");this.trigger("canplaythrough")};l._nullProperties=function(a){var b;
for(b in a){if(a.hasOwnProperty(b)){a[b]=null}}return a};l.destroy=function(){if(this._requestAnimationFrame){window.cancelAnimationFrame(this._requestAnimationFrame)
}this.trigger("destroy");this.pause();this.off();this._flow.destroy();this._flow=this._nullProperties(this._flow);
this._nullProperties(this)};l.load=function(){if(this._flow.resumeLoading()){return
}this.trigger("loadstart");return this._flow.init().then(function(a){var b=function(){this._onLoaded()
}.bind(this);var c=function(){if(this._destroyed===false){this.trigger("error")
}}.bind(this);if(a){return a.then(b,c)}else{b()}}.bind(this))};l.pauseLoading=function(){this._flow.pauseLoading()
};l.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}return this};l.pause=function(){if(!this.paused){this.paused=true;window.cancelAnimationFrame(this._requestAnimationFrame);
this.trigger("pause")}return this};l.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};l.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};l.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};l.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(l,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:l._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(a){if(isFinite(a)){this._frameRate=a;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(a){if(isFinite(a)){this._playbackRate=1*a;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});m.exports=k},{"@marcom/ac-dom-emitter":374}],419:[function(i,n,j){var k=i("../diff/Render");
var l=i("../LoadController");function o(b,a,c){this._keyframes=a;this._imageUrlPattern=c;
this._loadController=new l(b,a,c)}var m=o.prototype;m._initDiffRender=function(a){a.then(function(b){this._images=b;
this.canvas.height=b[0].height;this.canvas.width=b[0].width;this.applyFrame(b[0])
}.bind(this))};m.init=function(a){this.canvas=a||document.createElement("canvas");
this.context=a.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
};m.resumeLoading=function(){return this._loadController.load()};m.pauseLoading=function(){this._loadController.pause()
};m.createDiffRender=function(a){this._diffRender=new k(a,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};m.applyFrame=function(a){var b=this.context;b.drawImage(a,0,0)
};m.calculateRenderCount=function(c,b){var a=0;if(Math.abs(b-c)>=b){c=1;a=1}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
a=1}}if(b>0&&b<this.frameCount-1){return Math.abs(c-b)+a}else{return a}};m.compositeFrames=function(c,b){b=(this.frameCount<b)?this.frameCount-1:(b<0)?0:b;
c=(this.frameCount-2<c)?this.frameCount-2:(c<0)?0:c;var a;if(Math.abs(b-c)>=b){c=1;
this.applyFrame(this._images[0])}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
this.applyFrame(this._images[1])}}a=(c>b)?-1:(c<b)?1:0;if(b>0&&b<this.frameCount-1){while(c!==b){this._diffRender.renderDiff(this.canvas,c);
c+=a}}return Promise.resolve(c)};m.destroy=function(){this._loadController.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(m,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(a){return this._canvas=a
},enumerable:true},mainCompositor:{get:function(){var a=this;while(a._compositor){a=a._compositor
}return a},enumerable:true}});n.exports=o},{"../LoadController":417,"../diff/Render":428}],420:[function(k,j,g){function h(a,b){this._compositor=a;
this._keyframeInterval=b||8;this._keyframes=[]}var i=h.prototype;i._getClosestKeyframe=function(c){var b=c%this._keyframeInterval,a=Math.floor(c/this._keyframeInterval)+((b>(this._keyframeInterval/2))?1:0);
return a};i._getFrameFromKeyframe=function(a){return a*this._keyframeInterval};
i._saveKeyframe=function(a){var c,b=Math.floor(a/this._keyframeInterval);if(a%this._keyframeInterval===0&&!this._keyframes[b]){c=document.createElement("canvas");
c.width=this._compositor.canvas.width;c.height=this._compositor.canvas.height;c.getContext("2d").drawImage(this._compositor.canvas,0,0);
this._keyframes[b]=c}};i.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};i.resumeLoading=function(){return this._compositor.resumeLoading()};i.pauseLoading=function(){return this._compositor.pauseLoading()
};i.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};i.calculateRenderCount=function(b,a){b=this._getFrameFromKeyframe(this._getClosestKeyframe(a));
return this._compositor.calculateRenderCount(b,a)+1};i.compositeFrames=function(d,b){var a=this._getClosestKeyframe(b);
if(this._keyframes[a]&&(this._compositor.calculateRenderCount(d,b)>this.calculateRenderCount(d,b))){d=this._getFrameFromKeyframe(a);
this.applyFrame(this._keyframes[a]);return this._compositor.compositeFrames(d,b).then(function c(){})
}else{return this._compositor.compositeFrames(d,b).then(function c(){},null,this._saveKeyframe.bind(this))
}};i.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true}});j.exports=h},{}],421:[function(m,l,i){var h=m("../../keyframe/Render");
function j(a){this._compositor=a;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}var k=j.prototype;k.init=function(a){this._keyframeDiffRender=new h(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};k.resumeLoading=function(){return this._compositor.resumeLoading()
};k.pauseLoading=function(){return this._compositor.pauseLoading()};k.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};k.applyKeyframe=function(b,a){this._keyframeDiffRender.renderKeyframe(this.canvas,b,a)
};k.compositeFrames=function(b,a){if(!this._isKeyframeDiff(a-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}this.applyKeyframe(a-1);return Promise.resolve(b-1)};k._isKeyframeDiff=function(a){return a in this._keyframeDiffRender._loader._keyframes
};k.calculateRenderCount=function(b,a){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};k.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(k,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});l.exports=j},{"../../keyframe/Render":431}],422:[function(g,k,h){function i(a){this._compositor=a;
this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}var j=i.prototype;j.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};j.resumeLoading=function(){return this._compositor.resumeLoading()};j.pauseLoading=function(){return this._compositor.pauseLoading()
};j.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};j.applyKeyframe=function(b,a){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};j.compositeFrames=function(d,b){var a,c;if(b<1||b>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(b-1)){a=Math.abs(d-b)===1?true:false;this.applyKeyframe(b-1,a);
return Promise.resolve(d-1)}if(Math.abs(b-d)>this._superframeInterval){c=this._getShortestRender(d,b);
if(this._isKeyframeDiff(c-1)||c<=0||c>=this.frameCount-2){return this._compositeFromSuperKeyframe(c,b)
}}return this._compositor.compositeFrames.apply(this._compositor,[d,b])};j._getShortestRender=function(m,d){var b=this._compositor.calculateRenderCount,c=this._getClosestSuperKeyframe(d-1),f=b.apply(this._compositor,[c,d])+1,a=b.apply(this._compositor,[m,d]);
if(f<=a){return c}else{return m}};j._compositeFromSuperKeyframe=function(a,c){var f=this.canvas.getContext("2d"),d=(a<=0)?this.mainCompositor._images[0]:(a>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[a-1].image),b;
f.drawImage(d,0,0);return this._compositor.compositeFrames.call(this._compositor,a,c)
};j._getClosestSuperFrame=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j._getClosestSuperKeyframe=function(f){var b,a,c,d,n=this._frames.length;if(f<n+1&&f>0){d=f-1;
while(d>=0){if(this._frames[d].type==="keyframe"){b=d+1;break}d-=1}d=f+1;while(d<=n-1){if(this._frames[d].type==="keyframe"){a=d+1;
break}d+=1}}b=b?b:0;a=a?a:this.frameCount;c=(f-b)<(a-f)?b:a;return c};j._isKeyframeDiff=function(a){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};j.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],423:[function(g,k,h){function i(a,b){this._compositor=a;
this._superframeInterval=b||4}var j=i.prototype;j._getClosestSuperframe=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j.init=function(a){this._screenCanvas=a};j.resumeLoading=function(){return this._compositor.resumeLoading()
};j.pauseLoading=function(){return this._compositor.pauseLoading()};j.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};j.calculateRenderCount=function(c,a){var b=this._getClosestSuperframe(c);if(Math.abs(b-a)>this._superframeInterval/2){c=b+((c>a)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(c,a)+1}else{return Math.abs(b-a)+1}};j.compositeFrames=function(f,b){var a,d;
if(b<=0||b>=this.frameCount-2){this._compositor.compositeFrames(f,b)}if(f>this.frameCount-2){f=this.frameCount-2
}else{if(f<=0){f=1}}d=this._getClosestSuperframe(f);if(this._compositor.calculateRenderCount(f,b)>this.calculateRenderCount(f,b)){a=this._compositor.compositeFrames(d,d).then(function c(){var m=d+((f>b)?-1:1)*this._superframeInterval;
this._compositor.compositeFrames(d,m).then(function(){return this.compositeFrames(m,b)
}.bind(this))}.bind(this))}else{a=this._compositor.compositeFrames(f,b).then(function c(){}.bind(this))
}a.then(function c(){}.bind(this));return a};j.destroy=function(){return this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],424:[function(f,i,g){function h(b,a){this.location=b;
this.length=a}i.exports=h},{}],425:[function(i,h,f){function g(){}h.exports=g},{}],426:[function(o,n,i){var k=o("./Manifest"),j=o("./Block"),l;
var m={parseData:function(b){l=0;var a=b.frames.map(this._parseFrame,this);return Object.create(k.prototype,{version:{value:b.version},framecount:{value:b.frameCount},blockSize:{value:b.blockSize},imagesRequired:{value:b.imagesRequired},reversible:{value:b.reversible},superframeFrequency:{value:b.superframeFrequency},frames:{value:a}})
},_valueForCharAt:function(a,c){var b=a.charCodeAt(c);if(b>64&&b<91){return b-65
}if(b>96&&b<123){return b-71}if(b>47&&b<58){return b+4}if(b===43){return 62}if(b===47){return 63
}},_createNumberFromBase64Range:function(a,f,b){var c=0,d;while(b--){d=this._valueForCharAt(a,f++);
c+=(d<<b*6)}return c},_parseFrame:function(r){var a,f=[],b=r.value,c=r.startImageIndex,g=r.startBlockIndex,h,d;
if(r.type==="keyframe"){f.type="keyframe";f.width=r.width;f.height=r.height;f.x=r.x;
f.y=r.y;return f}for(a=0;a<b.length;a+=5){d=this._createNumberFromBase64Range(b,a,3);
h=this._createNumberFromBase64Range(b,a+3,2);f.push(Object.create(j.prototype,{location:{value:d,enumerable:true},length:{value:h,enumerable:true},block:{value:(g+=h)-h,enumerable:true},startImageIndex:{value:c,enumerable:true}}))
}return f}};n.exports=m},{"./Block":424,"./Manifest":425}],427:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,k=o("../processor");
function l(a){this._assetLoader=new i([a])}var m=l.prototype;m.load=function(){return this._assetLoader.load().then(function(a){var b;
if(a&&a.length){b=k.parseData(a[0]);this._data=b}return b}.bind(this))};n.exports=l
},{"../processor":426,"@marcom/ac-asset-loader":402}],428:[function(k,j,g){function h(a,c,b){this.flowData=a;
this.flowData.imageUrlPattern=c;this._loadController=b}var i=h.prototype;i._storeImages=function(a){a.then(function(d){var f=d.length;
this.images=d;this._blocksPerFullDiff=[];this._blockCountUpToIndex=[];var b=0;for(var c=0;
c<f;c++){this._blocksPerFullDiff[c]=(d[c].width/this.flowData.blockSize)*(d[c].height/this.flowData.blockSize);
b+=this._blocksPerFullDiff[c];this._blockCountUpToIndex[c]=b}}.bind(this))};i._applyDiffRange=function(z,d){var E=d.block,y=d.length,A=z.canvas.width/this.flowData.blockSize,w=d.startImageIndex,C=this.images[w].width,B=E%this._blockCountUpToIndex[w],D=C/this.flowData.blockSize,a=(B%D)*this.flowData.blockSize,b=Math.floor(B/(D||1))*this.flowData.blockSize,f=(d.location%A)*this.flowData.blockSize,v=Math.floor(d.location/A)*this.flowData.blockSize,x,c;
while(y){x=Math.min((y*this.flowData.blockSize),z.canvas.width-f,C-a);c=x/this.flowData.blockSize;
z.drawImage(this.images[w],a,b,x,this.flowData.blockSize,f,v,x,this.flowData.blockSize);
y-=c;if(y){if((a+=x)>=C){a=0;b+=this.flowData.blockSize}if((f+=x)>=z.canvas.width){f=0;
v+=this.flowData.blockSize}E+=c}}};i.init=function(){return this._loadController.loadDiffs().then(this._storeImages.bind(this))
};i.renderDiff=function(d,a){var b=d.getContext("2d");a-=1;for(var c=0,f=this.frames[a].length;
c<f;c++){this._applyDiffRange(b,this.frames[a][c])}};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frames:{get:function(){return this.flowData.frames},set:function(a){this.flowData.frames=a
},enumerable:true}});j.exports=h},{}],429:[function(u,w,s){var p=u("@marcom/ac-object/defaults");
var q=u("./Flow");var v=u("./Player");var x={keyframeCache:8,preload:true};var t={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var y=function(a){if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}return a};var o=function(d){var a=d.basePath?y(d.basePath):null;
var f=d.framePath?y(d.framePath):null;var g=d.diffPath?y(d.diffPath):null;var b=d.manifestPath?y(d.manifestPath):null;
var h=d.baseName+"_";var c={};c.startframe=(f||a)+h+"startframe."+(d.startframeFileFormat||d.fileFormat);
c.endframe=(f||a)+h+"endframe."+(d.endframeFileFormat||d.fileFormat);c.imageUrlPattern=(g||a)+h+d.imageUrlPattern+"."+d.fileFormat;
c.manifest=(b||a)+h+"manifest."+d.manifestFileFormat;return c};var n=function(c,b){var d=o(b);
var a=[d.startframe,d.endframe];return new q(c,d.manifest,a,d.imageUrlPattern)};
var r=function(c,b){var g=c||{};var d=b||{};g=p(x,c);d=p(t,b);if(!g.element){c.element=document.createElement("canvas")
}var f=n(g,d);var a=new v(f,g.element);if(g.preload){a.load()}return a};w.exports=r
},{"./Flow":416,"./Player":418,"@marcom/ac-object/defaults":459}],430:[function(l,k,m){var i=l("@marcom/ac-asset-loader").AssetLoader;
function h(d,a){var b,c=d.match(/#/g).length;this._keyframes={};d=d.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(a.frames){a.frames.forEach(function(f,g){if(f.type==="keyframe"){b="0000"+g;
b=b.substring(b.length-c);this._imageUrls.push(d.replace(/#+/g,b));this._keyframes[g]=f
}}.bind(this))}}var j=h.prototype;j.load=function(){if(this._imageUrls.length>0){return new i(this._imageUrls).load()
}return Promise.resolve()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
k.exports=h},{"@marcom/ac-asset-loader":402}],431:[function(h,m,i){var j=h("./Loader");
function k(a,b){this.flowData=a;this.flowData.imageUrlPattern=b}var l=k.prototype;
l._storeImages=function(d){var b=0,a;if(d&&d.length>0){for(var c in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(c)){a=d[b];
this._loader._keyframes[c].image=a;b+=1}}}};l.init=function(){this._loader=new j(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};l.renderKeyframe=function(t,u,a){var v=t.getContext("2d"),s=this._loader.keyframes[u],g=s.image,c=s.x,d=s.y,b=s.width,f=s.height;
if(a===true){v.drawImage(g,c,d,b,f,c,d,b,f)}else{if(this.flowData.reversible){v.drawImage(g,0,0)
}else{v.drawImage(g,c,d,b,f)}}};m.exports=k},{"./Loader":430}],432:[function(d,g,f){g.exports={SharedInstance:d("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":433}],433:[function(p,m,q){var l=window,n="AC",k="SharedInstance",o=l[n];
var j=(function(){var a={};return{get:function(c,d){var b=null;if(a[c]&&a[c][d]){b=a[c][d]
}return b},set:function(b,d,c){if(!a[b]){a[b]={}}if(typeof c==="function"){a[b][d]=new c()
}else{a[b][d]=c}return a[b][d]},share:function(b,d,c){var f=this.get(b,d);if(!f){f=this.set(b,d,c)
}return f},remove:function(c,d){var b=typeof d;if(b==="string"||b==="number"){if(!a[c]||!a[c][d]){return
}a[c][d]=null;return}if(a[c]){a[c]=null}}}}());if(!o){o=l[n]={}}if(!o[k]){o[k]=j
}m.exports=o[k]},{}],434:[function(d,g,f){g.exports={CID:d("./ac-mvc-cid/CID")}
},{"./ac-mvc-cid/CID":435}],435:[function(q,o,j){var k=q("@marcom/ac-shared-instance").SharedInstance;
var n="ac-mvc-cid:CID",p="1.0.0";function l(){this._idCount=0}var m=l.prototype;
m._cidPrefix="cid";m.getNewCID=function(){var a=this._cidPrefix+"-"+this._idCount;
this._idCount++;return a};o.exports=k.share(n,p,l)},{"@marcom/ac-shared-instance":432}],436:[function(d,g,f){g.exports={Model:d("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":437}],437:[function(q,u,p){var l=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var t=q("@marcom/ac-object/defaults");var n=q("@marcom/ac-object/create");var s=q("@marcom/ac-mvc-cid").CID;
function r(a){l.call(this);this.attributes=t(this.defaultAttributes,a||{});this.cid=s.getNewCID();
if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}}var m=l.prototype;var o=r.prototype=n(m);o.defaultAttributes={};o.idAttribute="id";
o.get=function(a){if(!this.attributes){return}return this.attributes[a]};o.set=function(a,b){if(!this.attributes){return
}var d;var f;var g;var h={};var c=false;for(d in a){if(a.hasOwnProperty(d)){g=this.get(d);
if((g===a[d])||(typeof g==="object"&&typeof a[d]==="object"&&JSON.stringify(g)===JSON.stringify(a[d]))){continue
}c=true;this.attributes[d]=a[d];f={value:a[d],previous:g};h[d]=f;this._triggerChange(d,f,b)
}}if(c){this._trigger("change",h,b)}};o.hasAttribute=function(a){if(!this.attributes){return false
}return(this.attributes[a]!==undefined)};o.eachAttribute=function(a,b){if(!this.attributes){return
}var c;for(c in this.attributes){if(this.attributes.hasOwnProperty(c)){a.call(b,{attribute:c,value:this.attributes[c]})
}}};o.destroy=function(){this.trigger("destroy");m.destroy.call(this);var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};o._trigger=function(c,a,b){b=b||{};if(b.silent!==true){this.trigger(c,a)}};
o._triggerChange=function(c,a,b){return this._trigger("change:"+c,a,b)};u.exports=r
},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-mvc-cid":434,"@marcom/ac-object/create":458,"@marcom/ac-object/defaults":459}],438:[function(d,g,f){arguments[4][432][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":439,dup:432}],439:[function(d,g,f){arguments[4][433][0].apply(f,arguments)
},{dup:433}],440:[function(d,g,f){arguments[4][434][0].apply(f,arguments)},{"./ac-mvc-cid/CID":441,dup:434}],441:[function(d,g,f){arguments[4][435][0].apply(f,arguments)
},{"@marcom/ac-shared-instance":438,dup:435}],442:[function(d,g,f){g.exports={View:d("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":443}],443:[function(t,v,r){var n=t("@marcom/ac-dom-emitter").DOMEmitter;
var u=t("@marcom/ac-mvc-cid").CID;var s={create:t("@marcom/ac-object/create"),defaults:t("@marcom/ac-object/defaults")};
var o={insertLastChild:t("@marcom/ac-dom-nodes/insertLastChild"),remove:t("@marcom/ac-dom-nodes/remove")};
var p=t("@marcom/ac-classlist/add");var m=t("@marcom/ac-classlist/remove");function w(a){var c;
var d;var b;this.options=s.defaults(this.defaultOptions,a||{});this.cid=u.getNewCID();
this.model=this.options.model;if(this.options.template){this.template=this.options.template
}c=this.options.tagName||this.tagName;d=this.options.element;b=this.options.className||this.className;
if(!d){d=document.createElement(c)}n.call(this,d);if(b){this.addClassName(b)}if(this.options.events){this.delegateEvents(this.options.events)
}}var q=w.prototype=s.create(n.prototype);q.tagName="div";q.defaultOptions={};q.getTagName=function(){return this.el.tagName.toLowerCase()
};q.appendTo=function(a){o.insertLastChild(this.el,a);return this};q.render=function(){};
q.addClassName=function(a){return this._manipulateClassName(a,p)};q.removeClassName=function(a){return this._manipulateClassName(a,m)
};q.destroy=function(){this.emitterTrigger("destroy");this.off();o.remove(this.el);
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q.delegateEvents=function(d,c){c=c||this;
var a,b;for(a in d){if(d.hasOwnProperty(a)){b=d[a];if(typeof b==="string"){d[a]=this[d[a]]
}}}this.on(d,c);return this};q._manipulateClassName=function(c,b){var a;if(typeof c==="string"){a=c.split(" ")
}else{if(typeof c==="object"&&Array.isArray(c)){a=c.slice()}else{return this}}a.unshift(this.el);
b.apply(this.el,a);return this};v.exports=w},{"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/remove":13,"@marcom/ac-dom-emitter":374,"@marcom/ac-dom-nodes/insertLastChild":45,"@marcom/ac-dom-nodes/remove":56,"@marcom/ac-mvc-cid":440,"@marcom/ac-object/create":458,"@marcom/ac-object/defaults":459}],444:[function(g,j,h){var i=g("./ac-media-object/factories/createVideo");
var k=g("./ac-media-object/factories/createFlow");j.exports={createFlow:k,createVideo:i}
},{"./ac-media-object/factories/createFlow":445,"./ac-media-object/factories/createVideo":446}],445:[function(k,j,g){var h=k("./../views/FlowView");
var i=k("@marcom/ac-object/clone");j.exports=function(c,a,d){var b=i(d||{},true);
var m;b.type="flow";function f(l){throw new Error(l)}if(!a){f("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!a.basePath){f("Please provide a valid mediaSrc object with a basePath property.")
}}if(!b.mediaObjectView){m=new h(c,a,b);m.options.mediaObjectView=m}else{m=b.mediaObjectView
}return m}},{"./../views/FlowView":449,"@marcom/ac-object/clone":457}],446:[function(k,j,g){var h=k("./../views/VideoView");
var i=k("@marcom/ac-object/clone");j.exports=function(c,a,d){var b=i(d||{},true);
var m;b.type="video";function f(l){throw new Error(l)}if(!a){f("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!a.basePath){f("Please provide a valid mediaSrc object with a basePath property.")
}}if(!b.mediaObjectView){m=new h(c,a,b);m.options.mediaObjectView=m}else{m=b.mediaObjectView
}return m}},{"./../views/VideoView":450,"@marcom/ac-object/clone":457}],447:[function(n,m,o){var k=n("@marcom/ac-mvc-model").Model;
var i=n("@marcom/ac-object");function j(a){k.apply(this,arguments)}var l=j.prototype=i.create(k.prototype);
l.defaultAttributes={type:"video",paused:true,ended:false,ready:false,loadStart:false,loaded:false,error:false,destroyed:false,currentTime:0,playbackRate:1,duration:0,preload:false,autoplay:false,frameRate:24,enhanced:false,looping:false};
l.getType=function(){return this.get("type")};l.getPaused=function(){return this.get("paused")
};l.getEnded=function(){return this.get("ended")};l.getReady=function(){return this.get("ready")
};l.getDestroyed=function(){return this.get("destroyed")};l.getLoadStart=function(){return this.get("loadedStart")
};l.getLoaded=function(){return this.get("loaded")};l.getError=function(){return this.get("error")
};l.getCurrentTime=function(){return this.get("currentTime")};l.getPlaybackRate=function(){return this.get("playbackRate")
};l.getDuration=function(){return this.get("duration")};l.getPreload=function(){return this.get("preload")
};l.getAutoplay=function(){return this.get("autoplay")};l.getFrameRate=function(){return this.get("frameRate")
};l.getEnhanced=function(){return this.get("enhanced")};l.getLooping=function(){return this.get("looping")
};l.setPaused=function(a){this.set({paused:a})};l.setEnded=function(a){this.set({ended:a})
};l.setReady=function(a){this.set({ready:a})};l.setDestroyed=function(a){this.set({destroyed:a})
};l.setDuration=function(a){this.set({duration:a})};l.setLoadStart=function(a){this.set({loadStart:a})
};l.setLoaded=function(a){this.set({loaded:a})};l.setError=function(a){this.set({error:a})
};l.setCurrentTime=function(a){this.set({currentTime:a})};l.setPlaybackRate=function(a){this.set({playbackRate:a})
};l.setPreload=function(a){this.set({preload:a})};l.setAutoplay=function(a){this.set({autoplay:a})
};l.setFrameRate=function(a){this.set({frameRate:a})};l.setEnhanced=function(a){this.set({enhanced:a})
};l.setLooping=function(a){this.set({looping:a})};m.exports=j},{"@marcom/ac-mvc-model":436,"@marcom/ac-object":456}],448:[function(q,r,n){var p=q("./../models/MediaModel");
var k=q("@marcom/ac-mvc-view").View;var o=q("@marcom/ac-object");var s=q("@marcom/ac-classlist");
var m=function(b,a,c){k.call(this,{element:b});this.options=o.clone(c||{},true);
this.mediaSrc=a||"";this.model=this.options.model||new p(this.options);this._onLoadStartChange=this._onLoadStartChange.bind(this);
this._onLoadedChange=this._onLoadedChange.bind(this);this._onPausedChange=this._onPausedChange.bind(this);
this._onReadyChange=this._onReadyChange.bind(this);this._onErrorChange=this._onErrorChange.bind(this);
this._onEnhancedChange=this._onEnhancedChange.bind(this);this._onCurrentTimeChange=this._onCurrentTimeChange.bind(this);
this._onPlaybackRateChange=this._onPlaybackRateChange.bind(this);this._onDestroyedChange=this._onDestroyedChange.bind(this);
this._onEndedChange=this._onEndedChange.bind(this);this._respondToPlay=this._respondToPlay.bind(this);
this._respondToPause=this._respondToPause.bind(this);this._respondToTimeUpdate=this._respondToTimeUpdate.bind(this);
this._respondToEnded=this._respondToEnded.bind(this);this._respondToDurationChange=this._respondToDurationChange.bind(this);
this._respondToRateChange=this._respondToRateChange.bind(this);this._init()};var l=m.prototype=o.create(k.prototype);
l._init=function(){this._createMediaElement();this._createMediaEmitter();this._createMediaLoader();
this._bindEvents();this._config()};l._createMediaElement=function(){};l._createMediaEmitter=function(){};
l._createMediaLoader=function(){};l._config=function(){if(this.options.preload===true){this._setPreload(true);
this.load()}if(this.options.autoplay===true){this._setAutoplay(true)}if(this.options.looping===true){this._setLooping(true)
}if(this.options.frameRate){this._setFrameRate(this.options.frameRate)}};l._bindEvents=function(){this._bindViewEvents();
this._bindModelEvents()};l.destroy=function(){if(!this.getDestroyed()){this._destroy();
this._setDestroyed(true);this.model.off();this.off();for(var a in this){if(this.hasOwnProperty(a)&&typeof this[a]!=="function"){this[a]=null
}}}};l._bindModelEvents=function(){this.model.on("change:loadStart",this._onLoadStartChange);
this.model.on("change:loaded",this._onLoadedChange);this.model.on("change:paused",this._onPausedChange);
this.model.on("change:ready",this._onReadyChange);this.model.on("change:error",this._onErrorChange);
this.model.on("change:enhanced",this._onEnhancedChange);this.model.on("change:currentTime",this._onCurrentTimeChange);
this.model.on("change:playbackRate",this._onPlaybackRateChange);this.model.on("change:destroyed",this._onDestroyedChange);
this.model.on("change:ended",this._onEndedChange)};l._onLoadStartChange=function(){this.trigger("loadstart")
};l._onLoadedChange=function(){this.trigger("loaded")};l._onPausedChange=function(a){if(a.value===true){this.trigger("pause");
s.remove(this.el,"mediaobject-playing")}else{this.trigger("play");s.remove(this.el,"mediaobject-ended");
s.add(this.el,"mediaobject-playing")}};l._onReadyChange=function(){this.trigger("ready")
};l._onErrorChange=function(){this.trigger("error")};l._onEnhancedChange=function(){s.add(this.el,"mediaobject-enhanced");
s.add(this.mediaElement,"mediaobject-element");this.trigger("enhanced")};l._onCurrentTimeChange=function(){this.trigger("timeupdate")
};l._onPlaybackRateChange=function(){this.trigger("ratechange")};l._onDestroyedChange=function(){s.remove(this.el,"mediaobject-playing");
s.remove(this.el,"mediaobject-ended");s.remove(this.el,"mediaobject-enhanced");
s.add(this.el,"mediaobject-destroyed");this.trigger("destroyed")};l._onEndedChange=function(a){if(a.value===true){this.trigger("ended")
}};l._bindViewEvents=function(){if(!this.mediaEmitter){return}this.mediaEmitter.on("play",this._respondToPlay);
this.mediaEmitter.on("pause",this._respondToPause);this.mediaEmitter.on("timeupdate",this._respondToTimeUpdate);
this.mediaEmitter.on("ended",this._respondToEnded);this.mediaEmitter.on("durationchange",this._respondToDurationChange);
this.mediaEmitter.on("ratechange",this._respondToRateChange)};l._respondToPlay=function(){this.model.set({ended:false,paused:false})
};l._respondToPause=function(){this.model.setPaused(true)};l._respondToTimeUpdate=function(){var a=0;
if(this.mediaElement.currentTime){a=this.mediaElement.currentTime}else{if(this.mediaEmitter.currentTime){a=this.mediaEmitter.currentTime
}else{return}}if(this.getCurrentTime()!==a){this.model.set({currentTime:a})}};l._respondToEnded=function(){this.model.set({ended:true,paused:true});
s.remove(this.el,"mediaobject-playing");s.add(this.el,"mediaobject-ended")};l._respondToDurationChange=function(){var a=0;
if(this.mediaElement.duration){a=this.mediaElement.duration}else{if(this.mediaEmitter.duration){a=this.mediaEmitter.duration
}else{return}}this.model.set({duration:a})};l._respondToRateChange=function(){var a=0;
if(this.mediaElement.playbackRate){a=this.mediaElement.playbackRate}else{if(this.mediaEmitter.playbackRate){a=this.mediaEmitter.playbackRate
}else{return}}this.model.set({playbackRate:a})};l.enhance=function(){};l.play=function(){};
l.pause=function(){};l.reset=function(){};l.setCurrentTime=function(a){};l.setPlaybackRate=function(a){};
l.goToFrame=function(a){var b=a/this.model.frameRate;return this.setCurrentTime(b)
};l.goToPercent=function(b){var a=b*this.getDuration();return this.setCurrentTime(a)
};l._setReady=function(a){this.model.setReady(a)};l._setLoadStart=function(a){this.model.setLoadStart(a)
};l._setLoaded=function(a){this.model.setLoaded(a)};l._setError=function(a){this.model.setError(a)
};l._setDuration=function(a){this.model.setDuration(a)};l._setPreload=function(a){this.model.setPreload(a)
};l._setAutoplay=function(a){this.model.setAutoplay(a)};l._setFrameRate=function(a){this.model.setFrameRate(a)
};l._setEnhanced=function(a){this.model.setEnhanced(a)};l._setDestroyed=function(a){this.model.setDestroyed(a)
};l._setLooping=function(a){};l._destroy=function(){};l.getType=function(){return this.model.getType()
};l.getPaused=function(){return this.model.getPaused()};l.getEnded=function(){return this.model.getEnded()
};l.getReady=function(){return this.model.getReady()};l.getLoadStart=function(){return this.model.getLoadStart()
};l.getLoaded=function(){return this.model.getLoaded()};l.getError=function(){return this.model.getError()
};l.getDuration=function(){return this.model.getDuration()};l.getEnhanced=function(){return this.model.getEnhanced()
};l.getCurrentTime=function(){return this.model.getCurrentTime()};l.getCurrentFrame=function(){return Math.floor(this.getCurrentTime()*this.options.frameRate)
};l.getCurrentPercent=function(){return(this.model.getCurrentTime()/this.getDuration())||0
};l.getPlaybackRate=function(){return this.model.getPlaybackRate()};l.getFrameRate=function(){return this.model.getFrameRate()
};l.getPreload=function(){return this.model.getPreload()};l.getAutoplay=function(){return this.model.getAutoplay()
};l.getLooping=function(){return this.model.getLooping()};l.getDestroyed=function(){if(this.model){return this.model.getDestroyed()
}else{return true}};r.exports=m},{"./../models/MediaModel":447,"@marcom/ac-classlist":12,"@marcom/ac-mvc-view":442,"@marcom/ac-object":456}],449:[function(r,s,q){var p=r("./BaseView");
var k=r("@marcom/ac-dom-nodes");var m=r("@marcom/ac-flow").createFlow;var n=r("@marcom/ac-object/create");
var l=function(b,a,c){p.call(this,b,a,c);this._onLoad=this._onLoad.bind(this);this._onError=this._onError.bind(this);
this._onReady=this._onReady.bind(this)};var o=l.prototype=n(p.prototype);o._createMediaElement=function(){this.mediaElement=document.createElement("canvas")
};o._createMediaEmitter=function(){this.flowOptions={element:this.mediaElement,preload:false,keyframeCache:this.options.keyframeCache||false};
this.mediaEmitter=m(this.flowOptions,this.mediaSrc)};o._createMediaLoader=function(){this.mediaLoader=this.mediaEmitter
};o.load=function(){this._setLoadStart(true);this.mediaLoader.once("loaded",this._onLoad);
this.mediaLoader.once("error",this._onError);this.mediaEmitter.once("canplaythrough",this._onReady);
if(!this.loaded){return this._load()}};o._load=function(){return this.mediaLoader.load()
};o._onLoad=function(){this._setLoaded(true)};o._onError=function(){this._setError(true)
};o._onReady=function(){this._setReady(true);this._setDuration(this.mediaEmitter.duration);
this.setPlaybackRate(this.getPlaybackRate());this._totalFrames=this._getTotalFrames();
if(this.getAutoplay()){if(this.getEnhanced===false){this.enhance()}this.play()}};
o._getTotalFrames=function(){return this.getDuration()*this.getFrameRate()};o.enhance=function(){this._setEnhanced(true);
window.requestAnimationFrame(function(){if(this.mediaElement){this._inject()}}.bind(this))
};o._inject=function(){k.insertFirstChild(this.mediaElement,this.el)};o._destroy=function(){this._remove();
if(this.mediaEmitter){this.mediaEmitter.destroy()}};o._remove=function(){k.remove(this.mediaElement)
};o.play=function(){if(this.model.getPaused()===false){return}if(this.mediaEmitter.currentTime>=this.getDuration()){this.setCurrentTime(0)
}if(this.getReady()&&this.mediaEmitter!==null){this.mediaEmitter.play()}};o.pause=function(){if(this.model.getPaused()===true){return
}this.mediaEmitter.pause()};o.reset=function(){if(this.model.getCurrentTime()===0){return
}this.setCurrentTime(0);this.pause()};o.setCurrentTime=function(a){if(a<0){a=0}if(a>this.getDuration()){a=this.getDuration()
}this.mediaEmitter.currentTime=a};o.setPlaybackRate=function(a){this.mediaEmitter.playbackRate=a
};o._setLooping=function(a){this.mediaEmitter.loop=a;this.model.setLooping(a)};
s.exports=l},{"./BaseView":448,"@marcom/ac-dom-nodes":37,"@marcom/ac-flow":415,"@marcom/ac-object/create":458}],450:[function(F,I,t){var u=F("./BaseView");
var x=u.prototype;var G=F("@marcom/ac-clock");var B=F("@marcom/ac-dom-nodes");var w=F("@marcom/ac-dom-emitter").DOMEmitter;
var A=F("@marcom/ac-dom-styles");var J=F("@marcom/ac-asset-loader").AssetLoader;
var C=F("@marcom/ac-asset-loader").Asset.Video;var E=F("@marcom/ac-useragent");
var y=F("@marcom/ac-feature").isHandheld;var v=F("@marcom/ac-feature").isTablet;
var H=F("@marcom/ac-object/create");var K=F("@marcom/ac-classlist/add");var D=function(b,a,c){this._requestAnimationFrame=null;
this.srcForVideoEl=null;this._cannotPlayInlineVideo=null;this._onLoaded=this._onLoaded.bind(this);
this._onReady=this._onReady.bind(this);u.call(this,b,a,c);if(c.iosInline&&y()){this._initInlineVideo(c)
}};var z=D.prototype=H(u.prototype);z.inlineClassName="mediaobject-ios-inline-video";
z.inlineAttribute="playsinline";z._usePolyfill=null;z._cannotPlayInlineVideo=null;
z._initInlineVideo=function(a){if(this.mediaElement.hasAttribute("controls")){this.mediaElement.removeAttribute("controls")
}this.mediaElement.setAttribute(this.inlineAttribute,"");K(this.mediaElement,this.inlineClassName);
this._shouldLoop=false;if(this._inlinePolyfillCheck()){this._clock=a.clock||G;this._boundHandleClockDraw=this._handleClockDraw.bind(this);
this._clock.on("draw",this._boundHandleClockDraw)}};z._inlinePolyfillCheck=function(){if(this._usePolyfill!==null){return this._usePolyfill
}var a=true;if(window.matchMedia){a=!window.matchMedia("(-webkit-video-playable-inline)").matches
}this._usePolyfill=a;return this._usePolyfill};z._createMediaElement=function(){this.mediaElement=document.createElement("video")
};z._createMediaEmitter=function(){this.mediaEmitter=new w(this.mediaElement)};
z._createMediaLoader=function(){var b,a;this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath);
if(this.mediaSrc.splitFileLoading){b=this.mediaSrc.basePath;a=new C(b,{element:this.mediaElement,forceElementLoading:false,split:true});
this.mediaLoader=new J(a)}else{this.mediaSrc.fileFormat=this._checkFileFormat(this.mediaSrc.fileFormat);
b=this.mediaSrc.basePath+this.mediaSrc.filename+this.mediaSrc.fileFormat;this.srcForVideoEl=b
}};z._forceTrailingSlash=function(a){if(a&&a.lastIndexOf("/")!==a.length-1){a=a+"/"
}return a};z._checkFileFormat=function(a){if(a&&a.lastIndexOf(".")!==0){a="."+a
}return a};z.load=function(){this._setLoadStart(true);if(this.mediaSrc.splitFileLoading){var a=function(){if(this.mediaEmitter){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}}.bind(this);var b=function(){this._setError(true);
throw new Error("Video failed to load.")}.bind(this);this.mediaLoader.load().then(a,b)
}else{if(!this.cannotPlayInlineVideo()){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}this.mediaElement.src=this.srcForVideoEl;
if(this.cannotPlayInlineVideo()){this._onLoaded()}else{this.mediaElement.load()
}}};z._onLoaded=function(){this._setLoaded(true)};z.cannotPlayInlineVideo=function(){if(this._cannotPlayInlineVideo!==null){return this._cannotPlayInlineVideo
}var b=E.os==="iOS"&&y();var a=E.os==="iOS"&&v()&&E.version<8;this._cannotPlayInlineVideo=b||a;
return this._cannotPlayInlineVideo};z._onReady=function(){this._setReady(true);
if(this.getAutoplay()){if(!this.getEnhanced()){this.enhance()}this.play()}};z.enhance=function(){this._setEnhanced(true);
this._requestAnimationFrame=window.requestAnimationFrame(function(){if(this.mediaElement.tagName==="VIDEO"){B.insertLastChild(this.mediaElement,this.el);
A.setStyle(this.mediaElement,{visibility:"hidden"});window.requestAnimationFrame(function(){if(this.mediaElement){this.setPlaybackRate(this.getPlaybackRate());
A.setStyle(this.mediaElement,{visibility:"visible"})}}.bind(this))}}.bind(this))
};z._destroy=function(){if(this._requestAnimationFrame){window.cancelAnimationFrame(this._requestAnimationFrame)
}this._remove();if(this.mediaEmitter){this.mediaEmitter.off()}if(this.mediaLoader&&typeof this.mediaLoader.off==="function"){this.mediaLoader.off()
}if(this._clock){if(this._clock.isRunning()){this._clock.stop()}this._clock.off("draw",this._boundHandleClockDraw)
}};z._remove=function(){B.remove(this.mediaElement)};z._onEndedChange=function(a){x._onEndedChange.call(this,a);
if(E.os==="iOS"&&y()&&a.value===true){this.mediaElement.webkitExitFullScreen()}};
z.play=function(){if(this.model.getPaused()===false){return}this.mediaElement.play();
if(this._usePolyfill){if(this.model.getPaused()===false){return}this.model.setPaused(false);
this._clock.start()}};z.pause=function(){if(this.model.getPaused()===true){return
}this.mediaElement.pause();if(this._usePolyfill){if(this.model.getPaused()===true){return
}this.model.setPaused(true);this._clock.stop()}};z.reset=function(){if(this.model.getCurrentTime()===0){return
}this.setCurrentTime(0);this.pause()};z.setCurrentTime=function(a){if(!this.mediaElement.duration){return
}this.model.setCurrentTime(a);this.mediaElement.currentTime=a};z.setPlaybackRate=function(a){this.mediaElement.playbackRate=a
};z._setLooping=function(a){this.mediaElement.loop=a;this.model.setLooping(a)};
z._handleClockDraw=function(c){var g=this.model.getCurrentTime();var h=this.model.getPlaybackRate();
var d=this.mediaElement.duration;var b=(c.delta/1000)*h;if(!this.model.getPaused()){g+=b
}var j=(g<=0);var a=(g>=d);var f=(h>=0);var i=(h<0);if(j){g=0}if(a){g=d}if(this._shouldLoop){this._shouldLoop=false;
if(f){this.setCurrentTime(b)}else{this.setCurrentTime(d-b)}return}this.setCurrentTime(g);
if((j&&i)||(a&&f)){if(this.model.getLooping()){this._shouldLoop=true}else{this.pause();
this.model.setEnded(true)}}};I.exports=D},{"./BaseView":448,"@marcom/ac-asset-loader":355,"@marcom/ac-classlist/add":5,"@marcom/ac-clock":368,"@marcom/ac-dom-emitter":374,"@marcom/ac-dom-nodes":37,"@marcom/ac-dom-styles":68,"@marcom/ac-feature":217,"@marcom/ac-object/create":458,"@marcom/ac-useragent":584}],451:[function(j,i,k){var h=j("qs");
i.exports=function g(b,c){var a=h.stringify(b,{strictNullHandling:true});if(a&&c!==false){a="?"+a
}return a}},{qs:452}],452:[function(h,l,i){var j=h("./stringify");var m=h("./parse");
var k={};l.exports={stringify:j,parse:m}},{"./parse":453,"./stringify":454}],453:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
j.parseValues=function(f,a){var s={};var t=f.split(a.delimiter,a.parameterLimit===Infinity?undefined:a.parameterLimit);
for(var r=0,c=t.length;r<c;++r){var v=t[r];var d=v.indexOf("]=")===-1?v.indexOf("="):v.indexOf("]=")+1;
if(d===-1){s[i.decode(v)]="";if(a.strictNullHandling){s[i.decode(v)]=null}}else{var b=i.decode(v.slice(0,d));
var u=i.decode(v.slice(d+1));if(!Object.prototype.hasOwnProperty.call(s,b)){s[b]=u
}else{s[b]=[].concat(s[b]).concat(u)}}}return s};j.parseObject=function(b,q,c){if(!b.length){return q
}var p=b.shift();var a;if(p==="[]"){a=[];a=a.concat(j.parseObject(b,q,c))}else{a=c.plainObjects?Object.create(null):{};
var d=p[0]==="["&&p[p.length-1]==="]"?p.slice(1,p.length-1):p;var f=parseInt(d,10);
var o=""+f;if(!isNaN(f)&&p!==d&&o===d&&f>=0&&(c.parseArrays&&f<=c.arrayLimit)){a=[];
a[f]=j.parseObject(b,q,c)}else{a[d]=j.parseObject(b,q,c)}}return a};j.parseKeys=function(d,r,p){if(!d){return
}if(p.allowDots){d=d.replace(/\.([^\.\[]+)/g,"[$1]")}var c=/^([^\[\]]*)/;var q=/(\[[^\[\]]*\])/g;
var a=c.exec(d);var b=[];if(a[1]){if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1])){if(!p.allowPrototypes){return
}}b.push(a[1])}var f=0;while((a=q.exec(d))!==null&&f<p.depth){++f;if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))){if(!p.allowPrototypes){continue
}}b.push(a[1])}if(a){b.push("["+d.slice(a.index)+"]")}return j.parseObject(b,r,p)
};k.exports=function(q,a){a=a||{};a.delimiter=typeof a.delimiter==="string"||i.isRegExp(a.delimiter)?a.delimiter:j.delimiter;
a.depth=typeof a.depth==="number"?a.depth:j.depth;a.arrayLimit=typeof a.arrayLimit==="number"?a.arrayLimit:j.arrayLimit;
a.parseArrays=a.parseArrays!==false;a.allowDots=a.allowDots!==false;a.plainObjects=typeof a.plainObjects==="boolean"?a.plainObjects:j.plainObjects;
a.allowPrototypes=typeof a.allowPrototypes==="boolean"?a.allowPrototypes:j.allowPrototypes;
a.parameterLimit=typeof a.parameterLimit==="number"?a.parameterLimit:j.parameterLimit;
a.strictNullHandling=typeof a.strictNullHandling==="boolean"?a.strictNullHandling:j.strictNullHandling;
if(q===""||q===null||typeof q==="undefined"){return a.plainObjects?Object.create(null):{}
}var f=typeof q==="string"?j.parseValues(q,a):q;var s=a.plainObjects?Object.create(null):{};
var b=Object.keys(f);for(var r=0,d=b.length;r<d;++r){var c=b[r];var t=j.parseKeys(c,f[c],a);
s=i.merge(s,t,a)}return i.compact(s)}},{"./utils":455}],454:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",arrayPrefixGenerators:{brackets:function(a,b){return a+"[]"
},indices:function(a,b){return a+"["+b+"]"},repeat:function(a,b){return a}},strictNullHandling:false};
j.stringify=function(r,d,v,t,u){if(typeof u==="function"){r=u(d,r)}else{if(i.isBuffer(r)){r=r.toString()
}else{if(r instanceof Date){r=r.toISOString()}else{if(r===null){if(t){return i.encode(d)
}r=""}}}}if(typeof r==="string"||typeof r==="number"||typeof r==="boolean"){return[i.encode(d)+"="+i.encode(r)]
}var a=[];if(typeof r==="undefined"){return a}var s=Array.isArray(u)?u:Object.keys(r);
for(var f=0,c=s.length;f<c;++f){var b=s[f];if(Array.isArray(r)){a=a.concat(j.stringify(r[b],v(d,b),v,t,u))
}else{a=a.concat(j.stringify(r[b],d+"["+b+"]",v,t,u))}}return a};k.exports=function(d,z){z=z||{};
var w=typeof z.delimiter==="undefined"?j.delimiter:z.delimiter;var u=typeof z.strictNullHandling==="boolean"?z.strictNullHandling:j.strictNullHandling;
var f;var v;if(typeof z.filter==="function"){v=z.filter;d=v("",d)}else{if(Array.isArray(z.filter)){f=v=z.filter
}}var a=[];if(typeof d!=="object"||d===null){return""}var y;if(z.arrayFormat in j.arrayPrefixGenerators){y=z.arrayFormat
}else{if("indices" in z){y=z.indices?"indices":"repeat"}else{y="indices"}}var x=j.arrayPrefixGenerators[y];
if(!f){f=Object.keys(d)}for(var t=0,c=f.length;t<c;++t){var b=f[t];a=a.concat(j.stringify(d[b],b,x,u,v))
}return a.join(w)}},{"./utils":455}],455:[function(g,k,h){var i={};i.hexTable=new Array(256);
for(var j=0;j<256;++j){i.hexTable[j]="%"+((j<16?"0":"")+j.toString(16)).toUpperCase()
}h.arrayToObject=function(b,d){var a=d.plainObjects?Object.create(null):{};for(var c=0,f=b.length;
c<f;++c){if(typeof b[c]!=="undefined"){a[c]=b[c]}}return a};h.merge=function(q,r,f){if(!r){return q
}if(typeof r!=="object"){if(Array.isArray(q)){q.push(r)}else{if(typeof q==="object"){q[r]=true
}else{q=[q,r]}}return q}if(typeof q!=="object"){q=[q].concat(r);return q}if(Array.isArray(q)&&!Array.isArray(r)){q=h.arrayToObject(q,f)
}var b=Object.keys(r);for(var p=0,c=b.length;p<c;++p){var d=b[p];var a=r[d];if(!Object.prototype.hasOwnProperty.call(q,d)){q[d]=a
}else{q[d]=h.merge(q[d],a,f)}}return q};h.decode=function(a){try{return decodeURIComponent(a.replace(/\+/g," "))
}catch(b){return a}};h.encode=function(b){if(b.length===0){return b}if(typeof b!=="string"){b=""+b
}var d="";for(var c=0,f=b.length;c<f;++c){var a=b.charCodeAt(c);if(a===45||a===46||a===95||a===126||(a>=48&&a<=57)||(a>=65&&a<=90)||(a>=97&&a<=122)){d+=b[c];
continue}if(a<128){d+=i.hexTable[a];continue}if(a<2048){d+=i.hexTable[192|(a>>6)]+i.hexTable[128|(a&63)];
continue}if(a<55296||a>=57344){d+=i.hexTable[224|(a>>12)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)];
continue}++c;a=65536+(((a&1023)<<10)|(b.charCodeAt(c)&1023));d+=i.hexTable[240|(a>>18)]+i.hexTable[128|((a>>12)&63)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)]
}return d};h.compact=function(q,d){if(typeof q!=="object"||q===null){return q}d=d||[];
var r=d.indexOf(q);if(r!==-1){return d[r]}d.push(q);if(Array.isArray(q)){var p=[];
for(var b=0,f=q.length;b<f;++b){if(typeof q[b]!=="undefined"){p.push(q[b])}}return p
}var a=Object.keys(q);for(b=0,f=a.length;b<f;++b){var c=a[b];q[c]=h.compact(q[c],d)
}return q};h.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"
};h.isBuffer=function(a){if(a===null||typeof a==="undefined"){return false}return !!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))
}},{}],456:[function(d,g,f){g.exports={clone:d("./clone"),create:d("./create"),defaults:d("./defaults"),extend:d("./extend"),getPrototypeOf:d("./getPrototypeOf"),isDate:d("./isDate"),isEmpty:d("./isEmpty"),isRegExp:d("./isRegExp"),toQueryParameters:d("./toQueryParameters")}
},{"./clone":457,"./create":458,"./defaults":459,"./extend":460,"./getPrototypeOf":461,"./isDate":462,"./isEmpty":463,"./isRegExp":464,"./toQueryParameters":465}],457:[function(o,n,i){o("@marcom/ac-polyfills/Array/isArray");
var k=o("./extend");var j=Object.prototype.hasOwnProperty;var m=function(c,b){var a;
for(a in b){if(j.call(b,a)){if(b[a]===null){c[a]=null}else{if(typeof b[a]==="object"){c[a]=Array.isArray(b[a])?[]:{};
m(c[a],b[a])}else{c[a]=b[a]}}}}return c};n.exports=function l(a,b){if(b){return m({},a)
}return k({},a)}},{"./extend":460,"@marcom/ac-polyfills/Array/isArray":"@marcom/ac-polyfills/Array/isArray"}],458:[function(g,j,h){var i=function(){};
j.exports=function k(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(a)}else{i.prototype=a;
return new i()}}},{}],459:[function(g,k,h){var i=g("./extend");k.exports=function j(a,b){if(typeof a!=="object"){throw new TypeError("defaults: must provide a defaults object")
}b=b||{};if(typeof b!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return i({},a,b)}},{"./extend":460}],460:[function(k,j,g){k("@marcom/ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"@marcom/ac-polyfills/Array/prototype.forEach":"@marcom/ac-polyfills/Array/prototype.forEach"}],461:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(a){if(Object.getPrototypeOf){return Object.getPrototypeOf(a)
}else{if(typeof a!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return a.__proto__}else{var c=a.constructor;
var b;if(h.call(a,"constructor")){b=c;if(!(delete a.constructor)){return null}c=a.constructor;
a.constructor=b}return c?c.prototype:null}}}}},{}],462:[function(f,h,g){h.exports=function i(a){return Object.prototype.toString.call(a)==="[object Date]"
}},{}],463:[function(k,j,g){var h=Object.prototype.hasOwnProperty;j.exports=function i(b){var a;
if(typeof b!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(a in b){if(h.call(b,a)){return false}}return true}},{}],464:[function(i,h,f){h.exports=function g(a){return window.RegExp?a instanceof RegExp:false
}},{}],465:[function(k,i,g){var h=k("@marcom/ac-url/joinSearchParams");i.exports=function j(a){if(typeof a!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return h(a,false)}},{"@marcom/ac-url/joinSearchParams":451}],466:[function(d,g,f){arguments[4][179][0].apply(f,arguments)
},{"./shared/getEventType":473,"./utils/addEventListener":474,dup:179}],467:[function(d,g,f){arguments[4][182][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":468,"./shared/prefixHelper":469,"./shared/windowFallbackEventTypes":470,"./utils/eventTypeAvailable":471,dup:182}],468:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],469:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],470:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],471:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],472:[function(d,g,f){arguments[4][188][0].apply(f,arguments)
},{"./shared/getEventType":473,"./utils/removeEventListener":475,dup:188}],473:[function(d,g,f){arguments[4][189][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":467,dup:189}],474:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],475:[function(d,g,f){arguments[4][195][0].apply(f,arguments)},{dup:195}],476:[function(d,g,f){g.exports={Queue:d("./ac-queue/Queue"),QueueItem:d("./ac-queue/QueueItem"),LiveQueue:d("./ac-queue/LiveQueue")}
},{"./ac-queue/LiveQueue":477,"./ac-queue/Queue":478,"./ac-queue/QueueItem":479}],477:[function(i,o,j){i("@marcom/ac-polyfills/Promise");
i("@marcom/ac-polyfills/requestAnimationFrame");i("@marcom/ac-polyfills/Function/prototype.bind");
var l=i("./Queue");var k=i("./QueueItem");function m(a){this._queue=new l();this._maxProcesses=a||1;
this._availableSlots=this._maxProcesses;this._rafId=0;this._isRunning=false;this._boundFunctions={_run:this._run.bind(this),_releaseSlot:this._releaseSlot.bind(this)}
}var n=m.prototype;n.start=function(){if(this._isRunning){cancelAnimationFrame(this._rafId)
}this._rafId=requestAnimationFrame(this._boundFunctions._run);this._isRunning=true
};n.pause=function(){if(this._isRunning){cancelAnimationFrame(this._rafId);this._rafId=0
}this._isRunning=false};n.stop=function(){this.pause();this.clear()};n.enqueue=function(b,a){if(typeof b!=="function"){throw new Error("LiveQueue can only enqueue functions")
}return this._queue.enqueue(b,a)};n.clear=function(){this._queue=new l()};n.destroy=function(){this.pause();
this._isRunning=false;this._queue=null;this._boundFunctions=null};n.count=function(){return this._queue.count()+this.pending()
};n.pending=function(){return this._maxProcesses-this._availableSlots};n.isEmpty=function(){return this.count()===0
};n._run=function(){if(!this._isRunning){return}this._rafId=requestAnimationFrame(this._boundFunctions._run);
if(this._queue.isEmpty()||this._availableSlots==0){return}var a=this._queue.dequeue();
var b=a.data();if(this._isPromise(b)){this._retainSlot();b.then(this._boundFunctions._releaseSlot,this._boundFunctions._releaseSlot)
}this._stopRunningIfDone()};n._retainSlot=function(){this._availableSlots--};n._releaseSlot=function(){this._availableSlots++;
this._stopRunningIfDone()};n._stopRunningIfDone=function(){if(this._rafId!=0&&this._queue.count()===0&&this._availableSlots==this._maxProcesses){cancelAnimationFrame(this._rafId);
this._rafId=0}};n._isPromise=function(a){return !!(a&&typeof a.then==="function")
};o.exports=m},{"./Queue":478,"./QueueItem":479,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/Promise":"@marcom/ac-polyfills/Promise","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame"}],478:[function(h,m,i){var j=h("./QueueItem");
function k(){this._items=[]}var l=k.prototype;l.enqueue=function(a,b){if(b===undefined){b=k.PRIORITY_DEFAULT
}return this.enqueueQueueItem(new j(a,b))};l.enqueueQueueItem=function(a){this._items.push(a);
return a};l.dequeue=function(){this._heapSort();var a=this._items.length-1;var b=this._items[0];
this._items[0]=this._items[a];this._items.pop();return b};l.peek=function(){if(this.count()==0){return null
}this._heapSort();return this._items[0]};l.isEmpty=function(){return this._items.length===0
};l.count=function(){return this._items.length};l.toString=function(){var a=["Queue total items: "+this.count()+"\n"];
for(var b=0;b<this.count();++b){a.push(this._items[b].toString()+"\n")}return a.join("")
};l._heapSort=function(){var d=0;for(var a=this._items.length-1;a>=0;a--){var f=a;
while(f>0){d++;var c=Math.floor((f-1)/2);if(this._items[f].compareTo(this._items[c])>=0){break
}var b=this._items[f];this._items[f]=this._items[c];this._items[c]=b;f=c}}};k.PRIORITY_LOW=10;
k.PRIORITY_DEFAULT=5;k.PRIORITY_HIGH=1;m.exports=k},{"./QueueItem":479}],479:[function(h,m,i){var j=0;
function k(a,b){this.priority=b;this.data=a;this.insertionOrder=j++}var l=k.prototype;
l.compareTo=function(a){if(this.priority<a.priority){return -1}else{if(this.priority>a.priority){return 1
}else{return(this.insertionOrder<a.insertionOrder)?-1:1}}};l.toString=function(){return"QueueItem {priority:"+this.priority+",\tdata:"+this.data+"\tinsertionOrder:"+this.insertionOrder+"}"
};m.exports=k},{}],480:[function(x,z,s){x("@marcom/ac-polyfills/Object/create");
x("@marcom/ac-polyfills/Element/prototype.classList");var v=x("@marcom/ac-object/defaults");
var t=x("@marcom/ac-queue").LiveQueue;var p=x("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var u=x("@marcom/ac-dom-events/addEventListener");var y=x("@marcom/ac-dom-events/removeEventListener");
var A=x("@marcom/ac-dom-traversal/querySelectorAll");var w={container:document.body,includeContainer:false};
var q={loadingPoolSize:8,timeout:null,imageClassName:"progressive-image"};function o(a){p.call(this);
this.options=v(w,a);this.loadingOptions=null;this.els=[];this.loadingQueue=null;
this._queueItems=[];this._queueItemsObj={};this._loadOrder=[];this._timeout=null;
this._didCallLoad=false}var r=o.prototype=Object.create(p.prototype);r.load=function(c){if(this._didCallLoad){return
}this._didCallLoad=true;this.loadingOptions=v(q,c);this.loadingQueue=new t(this.loadingOptions.loadingPoolSize);
var d=this._getProgressiveClassName(),f="."+d;this.els=A(f,this.options.container);
if(this.options.includeContainer&&this.options.container.classList.contains(d)){this.els.unshift(this.options.container)
}var b,g=this.els.length,a;for(b=0;b<g;b++){a={queueItem:this.loadingQueue.enqueue(this._loadNextItem.bind(this,b),b),el:this.els[b],id:b};
this._queueItems.push(a);this._queueItemsObj[b]=a}this.loadingQueue.start();if(typeof this.loadingOptions.timeout==="number"){this._timeout=setTimeout(this.cancel.bind(this),this.loadingOptions.timeout)
}};r.setVisible=function(a){a.classList.remove(this.loadingOptions.imageClassName)
};r.cancel=function(){if(this.els){var a,b=this.els.length;for(a=0;a<b;a++){this.setVisible(this.els[a])
}}this._handleLoadingComplete()};r.destroy=function(){this.cancel();this.off();
p.prototype.destroy.call(this)};r._loadNextItem=function(a){return new Promise(function(f,c,d){var b=this._queueItemsObj[f];
this._loadAndSetVisible(b.el).then(function(){var g=this._queueItems.indexOf(b);
this._queueItems.splice(g,1);this._queueItemsObj[b.id]=null;c();this._handleImageLoad(b.el);
b=c=null;if(this.loadingQueue.count()===1){this._handleLoadingComplete()}}.bind(this))
}.bind(this,a))};r._loadAndSetVisible=function(b){this.setVisible(b);var a=this._getBackgroundImageSrc(b);
return this._loadImage(a)};r._getBackgroundImageSrc=function(a){var b=a.currentStyle;
if(!b){b=window.getComputedStyle(a,false)}if(b.backgroundImage.indexOf("url(")===0){return b.backgroundImage.slice(4,-1).replace(/"/g,"")
}return null};r._getProgressiveClassName=function(){return this.loadingOptions.imageClassName
};r._loadImage=function(a){return new Promise(this._loadImagePromiseFunc.bind(this,a))
};r._loadImagePromiseFunc=function(a,b,c){function d(){y(this,"load",d);b(this);
b=null}if(!a){b(null);return}var f=new Image();u(f,"load",d);f.src=a};r._clearTimeout=function(){if(this._timeout){window.clearTimeout(this._timeout);
this._timeout=null}};r._handleImageLoad=function(a){this.trigger("image-load",a)
};r._handleLoadingComplete=function(){this.loadingQueue.stop();this._clearTimeout();
this.trigger("complete")};z.exports=o},{"@marcom/ac-dom-events/addEventListener":466,"@marcom/ac-dom-events/removeEventListener":472,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/defaults":459,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create","@marcom/ac-queue":476}],481:[function(d,g,f){arguments[4][179][0].apply(f,arguments)
},{"./shared/getEventType":488,"./utils/addEventListener":489,dup:179}],482:[function(d,g,f){arguments[4][182][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":483,"./shared/prefixHelper":484,"./shared/windowFallbackEventTypes":485,"./utils/eventTypeAvailable":486,dup:182}],483:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],484:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],485:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],486:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],487:[function(d,g,f){arguments[4][188][0].apply(f,arguments)
},{"./shared/getEventType":488,"./utils/removeEventListener":490,dup:188}],488:[function(d,g,f){arguments[4][189][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":482,dup:189}],489:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],490:[function(d,g,f){arguments[4][195][0].apply(f,arguments)},{dup:195}],491:[function(d,g,f){arguments[4][83][0].apply(f,arguments)
},{"./ac-clock/Clock":492,"./ac-clock/ThrottledClock":493,"./ac-clock/sharedClockInstance":494,dup:83}],492:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:84}],493:[function(d,g,f){arguments[4][85][0].apply(f,arguments)
},{"./sharedClockInstance":494,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:85}],494:[function(d,g,f){arguments[4][86][0].apply(f,arguments)
},{"./Clock":492,dup:86}],495:[function(o,n,j){o("@marcom/ac-polyfills/Object/create");
var k=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;var l=o("@marcom/ac-clock");
function i(a){k.call(this);this.options=a||{};this.min=this.options.min||0;this.max=this.options.max||1;
this._boundHandleClockUpdate=this._handleClockUpdate.bind(this);this._boundHandleClockDraw=this._handleClockDraw.bind(this);
if(this.options.easingFunction){this.easingFunction=this.options.easingFunction
}this.clock=this.options.clock||l;this.usesSharedClock=(this.clock===l);this._isRunning=false;
this.specificity=this.options.specificity||4;this.friction=this.options.friction||10;
this._targetValue=null;this._currentValue=null;this._shouldUpdate=false;this._shouldEmitChange=false
}var m=i.prototype=Object.create(k.prototype);m.destroy=function(){this.trigger("destroy");
this.stop();this.off();if(!this.usesSharedClock){this.clock.destroy()}var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}this._isRunning=false};m.start=function(){if(!this.clock||this._isRunning){return
}this._bindEvents();this._isRunning=true;this.clock.start()};m.stop=function(){if(!this.clock||!this._isRunning){return
}this._unbindEvents();this._isRunning=false;if(!this.usesSharedClock){this.clock.stop()
}};m.isRunning=function(){return this._isRunning};m.setProgress=function(a){if(this._targetValue===a){return
}this._targetValue=a;this._shouldUpdate=true};m.updateValue=function(f){if(this._currentValue===null){this._currentValue=this._targetValue
}var g=1;if(this.easingFunction){var a=this.max-this.min,w=this.max-(this.max-this._targetValue)/a,d=this.max-(this.max-this._currentValue)/a,v=1-Math.abs(w-d),c=this.easingFunction(v,0,1,1);
g=1+(c-v)}var b=1;if(f&&f.naturalFps!==f.fps){b=f.naturalFps/f.fps}var u=this._targetValue-this._currentValue,t=u*g*b*(1/this.friction),h=parseFloat((this._currentValue+t).toFixed(this.specificity));
if(h===this._currentValue){this._currentValue=this._targetValue}else{this._currentValue=h
}this._shouldEmitChange=true};m._bindEvents=function(){this.clock.on("update",this._boundHandleClockUpdate);
this.clock.on("draw",this._boundHandleClockDraw)};m._unbindEvents=function(){this.clock.off("update",this._boundHandleClockUpdate);
this.clock.off("draw",this._boundHandleClockDraw)};m._handleClockUpdate=function(a){if(this._shouldUpdate){this.updateValue(a)
}if(!this._shouldEmitChange){return}a.progress=this._currentValue;this.trigger("update",a)
};m._handleClockDraw=function(a){if(!this._shouldEmitChange){return}a.progress=this._currentValue;
this.trigger("draw",a);if(this._targetValue===this._currentValue){this._shouldUpdate=false;
this._shouldEmitChange=false;return}this._shouldUpdate=true};n.exports=i},{"@marcom/ac-clock":491,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],496:[function(s,t,q){s("@marcom/ac-polyfills/Function/prototype.bind");
s("@marcom/ac-polyfills/Object/create");var o=s("@marcom/ac-dom-events/addEventListener");
var u=s("@marcom/ac-dom-events/removeEventListener");var m=s("@marcom/ac-dom-metrics/getScrollY");
var n=s("./ScrollMotionEmitter");function r(a,b){b=b||{};if(!(a instanceof HTMLElement)){return null
}this.el=a;this.options=b;if(this.options.offsetTop){this.offsetTop=this.options.offsetTop
}if(this.options.offsetBottom){this.offsetBottom=this.options.offsetBottom}this.setEmitterBounds();
this._boundHandleResize=this._handleResize.bind(this);this._bindResizeEvents();
n.call(this,b)}var l=n.prototype;var p=r.prototype=Object.create(l);p.setEmitterBounds=function(){this._elementBounds=this.el.getBoundingClientRect();
var c=m(),a=this._elementBounds.top+c,b=this._elementBounds.bottom+c,d=this.offsetTop||0,f=this.offsetBottom||0;
if(typeof this.offsetTop==="function"){d=this.offsetTop()}if(typeof this.offsetBottom==="function"){f=this.offsetBottom()
}this.min=this.options.min=a+d;this.max=this.options.max=b+f};p.destroy=function(){u(window,"resize",this._boundHandleResize);
u(window,"orientationchange",this._boundHandleResize);n.prototype.destroy.call(this)
};p._bindResizeEvents=function(){o(window,"resize",this._boundHandleResize);o(window,"orientationchange",this._boundHandleResize)
};p._handleClockUpdate=function(a){if(this._shouldUpdateOnResize){this.setEmitterBounds();
this.handleScroll();this._shouldUpdateOnResize=false}n.prototype._handleClockUpdate.call(this,a)
};p._handleResize=function(){this._shouldUpdateOnResize=true};t.exports=r},{"./ScrollMotionEmitter":497,"@marcom/ac-dom-events/addEventListener":481,"@marcom/ac-dom-events/removeEventListener":487,"@marcom/ac-dom-metrics/getScrollY":27,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],497:[function(r,s,q){r("@marcom/ac-polyfills/Function/prototype.bind");
r("@marcom/ac-polyfills/Object/create");var o=r("@marcom/ac-dom-events/utils/addEventListener");
var t=r("@marcom/ac-dom-events/utils/removeEventListener");var m=r("@marcom/ac-dom-metrics/getScrollY");
var u=r("@marcom/ac-motion-emitter/MotionEmitter");function n(a){a=a||{};if(typeof a.min!=="number"||typeof a.max!=="number"){return null
}u.call(this,a);this.smooth=this.options.smooth||false;if(!this.options.overrideScroll){this._bindScrollEvents()
}}var l=u.prototype;var p=n.prototype=Object.create(l);p.updateValue=function(a){if(this.smooth){return l.updateValue.call(this,a)
}if(this._currentValue===this._targetValue){this._shouldEmitChange=false;return
}this._currentValue=this._targetValue;this._shouldEmitChange=true};p.handleScroll=function(a){if(typeof a!=="number"){a=m()
}var b;if(a<this.min){b=this.min}else{if(a>this.max){b=this.max}else{b=a}}b=(b-this.min)/(this.max-this.min);
this.setProgress(b)};p.destroy=function(){if(this._boundHandleScroll){t(window,"scroll",this._boundHandleScroll)
}return l.destroy.call(this)};p._bindScrollEvents=function(){this._boundHandleScroll=this.handleScroll.bind(this);
o(window,"scroll",this._boundHandleScroll)};s.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":489,"@marcom/ac-dom-events/utils/removeEventListener":490,"@marcom/ac-dom-metrics/getScrollY":27,"@marcom/ac-motion-emitter/MotionEmitter":495,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],498:[function(d,g,f){g.exports={ScrollMotionEmitter:d("./ScrollMotionEmitter"),ElementScrollMotionEmitter:d("./ElementScrollMotionEmitter")}
},{"./ElementScrollMotionEmitter":496,"./ScrollMotionEmitter":497}],499:[function(d,g,f){arguments[4][83][0].apply(f,arguments)
},{"./ac-clock/Clock":500,"./ac-clock/ThrottledClock":501,"./ac-clock/sharedClockInstance":502,dup:83}],500:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:84}],501:[function(d,g,f){arguments[4][85][0].apply(f,arguments)
},{"./sharedClockInstance":502,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:85}],502:[function(d,g,f){arguments[4][86][0].apply(f,arguments)
},{"./Clock":500,dup:86}],503:[function(d,g,f){arguments[4][179][0].apply(f,arguments)
},{"./shared/getEventType":512,"./utils/addEventListener":515,dup:179}],504:[function(d,g,f){arguments[4][180][0].apply(f,arguments)
},{"./shared/getEventType":512,"./utils/dispatchEvent":516,dup:180}],505:[function(d,g,f){arguments[4][182][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":506,"./shared/prefixHelper":507,"./shared/windowFallbackEventTypes":508,"./utils/eventTypeAvailable":509,dup:182}],506:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],507:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],508:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],509:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],510:[function(d,g,f){arguments[4][187][0].apply(f,arguments)
},{dup:187}],511:[function(d,g,f){arguments[4][188][0].apply(f,arguments)},{"./shared/getEventType":512,"./utils/removeEventListener":517,dup:188}],512:[function(d,g,f){arguments[4][189][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":505,dup:189}],513:[function(d,g,f){arguments[4][191][0].apply(f,arguments)
},{dup:191}],514:[function(d,g,f){arguments[4][192][0].apply(f,arguments)},{dup:192}],515:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],516:[function(d,g,f){arguments[4][194][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":"@marcom/ac-polyfills/CustomEvent",dup:194}],517:[function(d,g,f){arguments[4][195][0].apply(f,arguments)
},{dup:195}],518:[function(d,g,f){arguments[4][350][0].apply(f,arguments)},{"./ac-event-emitter/EventEmitter":519,dup:350}],519:[function(d,g,f){arguments[4][351][0].apply(f,arguments)
},{dup:351}],520:[function(d,g,f){arguments[4][374][0].apply(f,arguments)},{"./ac-dom-emitter/DOMEmitter":521,dup:374}],521:[function(d,g,f){arguments[4][375][0].apply(f,arguments)
},{"./DOMEmitterEvent":522,"@marcom/ac-dom-events/addEventListener":503,"@marcom/ac-dom-events/dispatchEvent":504,"@marcom/ac-dom-events/removeEventListener":511,"@marcom/ac-dom-traversal/matchesSelector":75,"@marcom/ac-dom-traversal/querySelectorAll":79,"ac-event-emitter":518,dup:375}],522:[function(d,g,f){arguments[4][376][0].apply(f,arguments)
},{"@marcom/ac-dom-events/preventDefault":510,"@marcom/ac-dom-events/stopPropagation":513,"@marcom/ac-dom-events/target":514,dup:376}],523:[function(d,g,f){arguments[4][15][0].apply(f,arguments)
},{"./ac-path/path":524,dup:15}],524:[function(d,g,f){arguments[4][16][0].apply(f,arguments)
},{dup:16}],525:[function(d,g,f){arguments[4][17][0].apply(f,arguments)},{"./ac-cname/cname":526,dup:17}],526:[function(d,g,f){arguments[4][18][0].apply(f,arguments)
},{"ac-path":523,dup:18}],527:[function(z,C,v){var q=z("cwise-compiler");var B={body:"",args:[],thisVars:[],localVars:[]};
function A(c){if(!c){return B}for(var a=0;a<c.args.length;++a){var b=c.args[a];
if(a===0){c.args[a]={name:b,lvalue:true,rvalue:!!c.rvalue,count:c.count||1}}else{c.args[a]={name:b,lvalue:false,rvalue:true,count:1}
}}if(!c.thisVars){c.thisVars=[]}if(!c.localVars){c.localVars=[]}return c}function r(a){return q({args:a.args,pre:A(a.pre),body:A(a.body),post:A(a.proc),funcName:a.funcName})
}function s(b){var d=[];for(var c=0;c<b.args.length;++c){d.push("a"+c)}var a=new Function("P",["return function ",b.funcName,"_ndarrayops(",d.join(","),") {P(",d.join(","),");return a0}"].join(""));
return a(r(b))}var x={add:"+",sub:"-",mul:"*",div:"/",mod:"%",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"};
(function(){for(var a in x){var b=x[a];v[a]=s({args:["array","array","array"],body:{args:["a","b","c"],body:"a=b"+b+"c"},funcName:a});
v[a+"eq"]=s({args:["array","array"],body:{args:["a","b"],body:"a"+b+"=b"},rvalue:true,funcName:a+"eq"});
v[a+"s"]=s({args:["array","array","scalar"],body:{args:["a","b","s"],body:"a=b"+b+"s"},funcName:a+"s"});
v[a+"seq"]=s({args:["array","scalar"],body:{args:["a","s"],body:"a"+b+"=s"},rvalue:true,funcName:a+"seq"})
}})();var y={not:"!",bnot:"~",neg:"-",recip:"1.0/"};(function(){for(var a in y){var b=y[a];
v[a]=s({args:["array","array"],body:{args:["a","b"],body:"a="+b+"b"},funcName:a});
v[a+"eq"]=s({args:["array"],body:{args:["a"],body:"a="+b+"a"},rvalue:true,count:2,funcName:a+"eq"})
}})();var w={and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">="};
(function(){for(var a in w){var b=w[a];v[a]=s({args:["array","array","array"],body:{args:["a","b","c"],body:"a=b"+b+"c"},funcName:a});
v[a+"s"]=s({args:["array","array","scalar"],body:{args:["a","b","s"],body:"a=b"+b+"s"},funcName:a+"s"});
v[a+"eq"]=s({args:["array","array"],body:{args:["a","b"],body:"a=a"+b+"b"},rvalue:true,count:2,funcName:a+"eq"});
v[a+"seq"]=s({args:["array","scalar"],body:{args:["a","s"],body:"a=a"+b+"s"},rvalue:true,count:2,funcName:a+"seq"})
}})();var t=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan"];
(function(){for(var b=0;b<t.length;++b){var a=t[b];v[a]=s({args:["array","array"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b)",thisVars:["this_f"]},funcName:a});
v[a+"eq"]=s({args:["array"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a"],body:"a=this_f(a)",thisVars:["this_f"]},rvalue:true,count:2,funcName:a+"eq"})
}})();var p=["max","min","atan2","pow"];(function(){for(var b=0;b<p.length;++b){var a=p[b];
v[a]=s({args:["array","array","array"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(b,c)",thisVars:["this_f"]},funcName:a});
v[a+"s"]=s({args:["array","array","scalar"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(b,c)",thisVars:["this_f"]},funcName:a+"s"});
v[a+"eq"]=s({args:["array","array"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(a,b)",thisVars:["this_f"]},rvalue:true,count:2,funcName:a+"eq"});
v[a+"seq"]=s({args:["array","scalar"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(a,b)",thisVars:["this_f"]},rvalue:true,count:2,funcName:a+"seq"})
}})();var u=["atan2","pow"];(function(){for(var b=0;b<u.length;++b){var a=u[b];
v[a+"op"]=s({args:["array","array","array"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(c,b)",thisVars:["this_f"]},funcName:a+"op"});
v[a+"ops"]=s({args:["array","array","scalar"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(c,b)",thisVars:["this_f"]},funcName:a+"ops"});
v[a+"opeq"]=s({args:["array","array"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b,a)",thisVars:["this_f"]},rvalue:true,count:2,funcName:a+"opeq"});
v[a+"opseq"]=s({args:["array","scalar"],pre:{args:[],body:"this_f=Math."+a,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b,a)",thisVars:["this_f"]},rvalue:true,count:2,funcName:a+"opseq"})
}})();v.any=q({args:["array"],pre:B,body:{args:[{name:"a",lvalue:false,rvalue:true,count:1}],body:"if(a){return true}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return false"},funcName:"any"});
v.all=q({args:["array"],pre:B,body:{args:[{name:"x",lvalue:false,rvalue:true,count:1}],body:"if(!x){return false}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return true"},funcName:"all"});
v.sum=q({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:false,rvalue:true,count:1}],body:"this_s+=a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"sum"});
v.prod=q({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=1"},body:{args:[{name:"a",lvalue:false,rvalue:true,count:1}],body:"this_s*=a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"prod"});
v.norm2squared=q({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:false,rvalue:true,count:2}],body:"this_s+=a*a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norm2squared"});
v.norm2=q({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:false,rvalue:true,count:2}],body:"this_s+=a*a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return Math.sqrt(this_s)"},funcName:"norm2"});
v.norminf=q({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:false,rvalue:true,count:4}],body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norminf"});
v.norm1=q({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:false,rvalue:true,count:3}],body:"this_s+=a<0?-a:a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norm1"});
v.sup=q({args:["array"],pre:{body:"this_h=-Infinity",args:[],thisVars:["this_h"],localVars:[]},body:{body:"if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",args:[{name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2}],thisVars:["this_h"],localVars:[]},post:{body:"return this_h",args:[],thisVars:["this_h"],localVars:[]}});
v.inf=q({args:["array"],pre:{body:"this_h=Infinity",args:[],thisVars:["this_h"],localVars:[]},body:{body:"if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",args:[{name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2}],thisVars:["this_h"],localVars:[]},post:{body:"return this_h",args:[],thisVars:["this_h"],localVars:[]}});
v.argmin=q({args:["index","array","shape"],pre:{body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",args:[{name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},{name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},{name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}],thisVars:["this_i","this_v"],localVars:[]},body:{body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",args:[{name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},{name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],thisVars:["this_i","this_v"],localVars:["_inline_1_k"]},post:{body:"{return this_i}",args:[],thisVars:["this_i"],localVars:[]}});
v.argmax=q({args:["index","array","shape"],pre:{body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",args:[{name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},{name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},{name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}],thisVars:["this_i","this_v"],localVars:[]},body:{body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",args:[{name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},{name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],thisVars:["this_i","this_v"],localVars:["_inline_1_k"]},post:{body:"{return this_i}",args:[],thisVars:["this_i"],localVars:[]}});
v.random=s({args:["array"],pre:{args:[],body:"this_f=Math.random",thisVars:["this_f"]},body:{args:["a"],body:"a=this_f()",thisVars:["this_f"]},funcName:"random"});
v.assign=s({args:["array","array"],body:{args:["a","b"],body:"a=b"},funcName:"assign"});
v.assigns=s({args:["array","scalar"],body:{args:["a","b"],body:"a=b"},funcName:"assigns"});
v.equals=q({args:["array","array"],pre:B,body:{args:[{name:"x",lvalue:false,rvalue:true,count:1},{name:"y",lvalue:false,rvalue:true,count:1}],body:"if(x!==y){return false}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return true"},funcName:"equals"})
},{"cwise-compiler":528}],528:[function(h,m,i){var j=h("./lib/thunk.js");function k(){this.argTypes=[];
this.shimArgs=[];this.arrayArgs=[];this.arrayBlockIndices=[];this.scalarArgs=[];
this.offsetArgs=[];this.offsetArgIndex=[];this.indexArgs=[];this.shapeArgs=[];this.funcName="";
this.pre=null;this.body=null;this.post=null;this.debug=false}function l(b){var d=new k();
d.pre=b.pre;d.body=b.body;d.post=b.post;var a=b.args.slice(0);d.argTypes=a;for(var c=0;
c<a.length;++c){var f=a[c];if(f==="array"||(typeof f==="object"&&f.blockIndices)){d.argTypes[c]="array";
d.arrayArgs.push(c);d.arrayBlockIndices.push(f.blockIndices?f.blockIndices:0);d.shimArgs.push("array"+c);
if(c<d.pre.args.length&&d.pre.args[c].count>0){throw new Error("cwise: pre() block may not reference array args")
}if(c<d.post.args.length&&d.post.args[c].count>0){throw new Error("cwise: post() block may not reference array args")
}}else{if(f==="scalar"){d.scalarArgs.push(c);d.shimArgs.push("scalar"+c)}else{if(f==="index"){d.indexArgs.push(c);
if(c<d.pre.args.length&&d.pre.args[c].count>0){throw new Error("cwise: pre() block may not reference array index")
}if(c<d.body.args.length&&d.body.args[c].lvalue){throw new Error("cwise: body() block may not write to array index")
}if(c<d.post.args.length&&d.post.args[c].count>0){throw new Error("cwise: post() block may not reference array index")
}}else{if(f==="shape"){d.shapeArgs.push(c);if(c<d.pre.args.length&&d.pre.args[c].lvalue){throw new Error("cwise: pre() block may not write to array shape")
}if(c<d.body.args.length&&d.body.args[c].lvalue){throw new Error("cwise: body() block may not write to array shape")
}if(c<d.post.args.length&&d.post.args[c].lvalue){throw new Error("cwise: post() block may not write to array shape")
}}else{if(typeof f==="object"&&f.offset){d.argTypes[c]="offset";d.offsetArgs.push({array:f.array,offset:f.offset});
d.offsetArgIndex.push(c)}else{throw new Error("cwise: Unknown argument type "+a[c])
}}}}}}if(d.arrayArgs.length<=0){throw new Error("cwise: No array arguments specified")
}if(d.pre.args.length>a.length){throw new Error("cwise: Too many arguments in pre() block")
}if(d.body.args.length>a.length){throw new Error("cwise: Too many arguments in body() block")
}if(d.post.args.length>a.length){throw new Error("cwise: Too many arguments in post() block")
}d.debug=!!b.printCode||!!b.debug;d.funcName=b.funcName||"cwise";d.blockSize=b.blockSize||64;
return j(d)}m.exports=l},{"./lib/thunk.js":530}],529:[function(r,u,p){var l=r("uniq");
function n(f,k,a){var c=f.length,h=k.arrayArgs.length,j=k.indexArgs.length>0,g=[],x=[],i=0,y=0,b,d;
for(b=0;b<c;++b){x.push(["i",b,"=0"].join(""))}for(d=0;d<h;++d){for(b=0;b<c;++b){y=i;
i=f[b];if(b===0){x.push(["d",d,"s",b,"=t",d,"p",i].join(""))}else{x.push(["d",d,"s",b,"=(t",d,"p",i,"-s",y,"*t",d,"p",y,")"].join(""))
}}}g.push("var "+x.join(","));for(b=c-1;b>=0;--b){i=f[b];g.push(["for(i",b,"=0;i",b,"<s",i,";++i",b,"){"].join(""))
}g.push(a);for(b=0;b<c;++b){y=i;i=f[b];for(d=0;d<h;++d){g.push(["p",d,"+=d",d,"s",b].join(""))
}if(j){if(b>0){g.push(["index[",y,"]-=s",y].join(""))}g.push(["++index[",i,"]"].join(""))
}g.push("}")}return g.join("\n")}function t(f,c,j,x){var a=c.length,h=j.arrayArgs.length,k=j.blockSize,i=j.indexArgs.length>0,g=[];
for(var y=0;y<h;++y){g.push(["var offset",y,"=p",y].join(""))}for(var y=f;y<a;++y){g.push(["for(var j"+y+"=SS[",c[y],"]|0;j",y,">0;){"].join(""));
g.push(["if(j",y,"<",k,"){"].join(""));g.push(["s",c[y],"=j",y].join(""));g.push(["j",y,"=0"].join(""));
g.push(["}else{s",c[y],"=",k].join(""));g.push(["j",y,"-=",k,"}"].join(""));if(i){g.push(["index[",c[y],"]=j",y].join(""))
}}for(var y=0;y<h;++y){var d=["offset"+y];for(var b=f;b<a;++b){d.push(["j",b,"*t",y,"p",c[b]].join(""))
}g.push(["p",y,"=(",d.join("+"),")"].join(""))}g.push(n(c,j,x));for(var y=f;y<a;
++y){g.push("}")}return g.join("\n")}function o(d){var b=0,c=d[0].length;while(b<c){for(var a=1;
a<d.length;++a){if(d[a][b]!==d[0][b]){return b}}++b}return b}function q(h,g,c){var J=h.body;
var f=[];var a=[];for(var F=0;F<h.args.length;++F){var K=h.args[F];if(K.count<=0){continue
}var d=new RegExp(K.name,"g");var H="";var D=g.arrayArgs.indexOf(F);switch(g.argTypes[F]){case"offset":var k=g.offsetArgIndex.indexOf(F);
var E=g.offsetArgs[k];D=E.array;H="+q"+k;case"array":H="p"+D+H;var G="l"+F;var I="a"+D;
if(g.arrayBlockIndices[D]===0){if(K.count===1){if(c[D]==="generic"){if(K.lvalue){f.push(["var ",G,"=",I,".get(",H,")"].join(""));
J=J.replace(d,G);a.push([I,".set(",H,",",G,")"].join(""))}else{J=J.replace(d,[I,".get(",H,")"].join(""))
}}else{J=J.replace(d,[I,"[",H,"]"].join(""))}}else{if(c[D]==="generic"){f.push(["var ",G,"=",I,".get(",H,")"].join(""));
J=J.replace(d,G);if(K.lvalue){a.push([I,".set(",H,",",G,")"].join(""))}}else{f.push(["var ",G,"=",I,"[",H,"]"].join(""));
J=J.replace(d,G);if(K.lvalue){a.push([I,"[",H,"]=",G].join(""))}}}}else{var i=[K.name],j=[H];
for(var b=0;b<Math.abs(g.arrayBlockIndices[D]);b++){i.push("\\s*\\[([^\\]]+)\\]");
j.push("$"+(b+1)+"*t"+D+"b"+b)}d=new RegExp(i.join(""),"g");H=j.join("+");if(c[D]==="generic"){throw new Error("cwise: Generic arrays not supported in combination with blocks!")
}else{J=J.replace(d,[I,"[",H,"]"].join(""))}}break;case"scalar":J=J.replace(d,"Y"+g.scalarArgs.indexOf(F));
break;case"index":J=J.replace(d,"index");break;case"shape":J=J.replace(d,"shape");
break}}return[f.join("\n"),J,a.join("\n")].join("\n").trim()}function m(f){var b=new Array(f.length);
var c=true;for(var g=0;g<f.length;++g){var a=f[g];var d=a.match(/\d+/);if(!d){d=""
}else{d=d[0]}if(a.charAt(0)===0){b[g]="u"+a.charAt(1)+d}else{b[g]=a.charAt(0)+d
}if(g>0){c=c&&b[g]===b[g-1]}}if(c){return b[0]}return b.join("")}function s(i,N){var c=(N[1].length-Math.abs(i.arrayBlockIndices[0]))|0;
var U=new Array(i.arrayArgs.length);var P=new Array(i.arrayArgs.length);for(var k=0;
k<i.arrayArgs.length;++k){P[k]=N[2*k];U[k]=N[2*k+1]}var L=[],T=[];var S=[],h=[];
var O=[];for(var k=0;k<i.arrayArgs.length;++k){if(i.arrayBlockIndices[k]<0){S.push(0);
h.push(c);L.push(c);T.push(c+i.arrayBlockIndices[k])}else{S.push(i.arrayBlockIndices[k]);
h.push(i.arrayBlockIndices[k]+c);L.push(0);T.push(i.arrayBlockIndices[k])}var d=[];
for(var K=0;K<U[k].length;K++){if(S[k]<=U[k][K]&&U[k][K]<h[k]){d.push(U[k][K]-S[k])
}}O.push(d)}var Q=["SS"];var V=["'use strict'"];var b=[];for(var K=0;K<c;++K){b.push(["s",K,"=SS[",K,"]"].join(""))
}for(var k=0;k<i.arrayArgs.length;++k){Q.push("a"+k);Q.push("t"+k);Q.push("p"+k);
for(var K=0;K<c;++K){b.push(["t",k,"p",K,"=t",k,"[",S[k]+K,"]"].join(""))}for(var K=0;
K<Math.abs(i.arrayBlockIndices[k]);++K){b.push(["t",k,"b",K,"=t",k,"[",L[k]+K,"]"].join(""))
}}for(var k=0;k<i.scalarArgs.length;++k){Q.push("Y"+k)}if(i.shapeArgs.length>0){b.push("shape=SS.slice(0)")
}if(i.indexArgs.length>0){var M=new Array(c);for(var k=0;k<c;++k){M[k]="0"}b.push(["index=[",M.join(","),"]"].join(""))
}for(var k=0;k<i.offsetArgs.length;++k){var a=i.offsetArgs[k];var W=[];for(var K=0;
K<a.offset.length;++K){if(a.offset[K]===0){continue}else{if(a.offset[K]===1){W.push(["t",a.array,"p",K].join(""))
}else{W.push([a.offset[K],"*t",a.array,"p",K].join(""))}}}if(W.length===0){b.push("q"+k+"=0")
}else{b.push(["q",k,"=",W.join("+")].join(""))}}var J=l([].concat(i.pre.thisVars).concat(i.body.thisVars).concat(i.post.thisVars));
b=b.concat(J);V.push("var "+b.join(","));for(var k=0;k<i.arrayArgs.length;++k){V.push("p"+k+"|=0")
}if(i.pre.body.length>3){V.push(q(i.pre,i,P))}var g=q(i.body,i,P);var j=o(O);if(j<c){V.push(t(j,O[0],i,g))
}else{V.push(n(O[0],i,g))}if(i.post.body.length>3){V.push(q(i.post,i,P))}if(i.debug){console.log("-----Generated cwise routine for ",N,":\n"+V.join("\n")+"\n----------")
}var R=[(i.funcName||"unnamed"),"_cwise_loop_",U[0].join("s"),"m",j,m(P)].join("");
var f=new Function(["function ",R,"(",Q.join(","),"){",V.join("\n"),"} return ",R].join(""));
return f()}u.exports=s},{uniq:531}],530:[function(g,k,h){var i=g("./compile.js");
function j(b){var y=["'use strict'","var CACHED={}"];var c=[];var a=b.funcName+"_cwise_thunk";
y.push(["return function ",a,"(",b.shimArgs.join(","),"){"].join(""));var z=[];
var d=[];var A=[["array",b.arrayArgs[0],".shape.slice(",Math.max(0,b.arrayBlockIndices[0]),b.arrayBlockIndices[0]<0?(","+b.arrayBlockIndices[0]+")"):")"].join("")];
var u=[],w=[];for(var f=0;f<b.arrayArgs.length;++f){var v=b.arrayArgs[f];c.push(["t",v,"=array",v,".dtype,","r",v,"=array",v,".order"].join(""));
z.push("t"+v);z.push("r"+v);d.push("t"+v);d.push("r"+v+".join()");A.push("array"+v+".data");
A.push("array"+v+".stride");A.push("array"+v+".offset|0");if(f>0){u.push("array"+b.arrayArgs[0]+".shape.length===array"+v+".shape.length+"+(Math.abs(b.arrayBlockIndices[0])-Math.abs(b.arrayBlockIndices[f])));
w.push("array"+b.arrayArgs[0]+".shape[shapeIndex+"+Math.max(0,b.arrayBlockIndices[0])+"]===array"+v+".shape[shapeIndex+"+Math.max(0,b.arrayBlockIndices[f])+"]")
}}if(b.arrayArgs.length>1){y.push("if (!("+u.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same dimensionality!')");
y.push("for(var shapeIndex=array"+b.arrayArgs[0]+".shape.length-"+Math.abs(b.arrayBlockIndices[0])+"; shapeIndex-->0;) {");
y.push("if (!("+w.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same shape!')");
y.push("}")}for(var f=0;f<b.scalarArgs.length;++f){A.push("scalar"+b.scalarArgs[f])
}c.push(["type=[",d.join(","),"].join()"].join(""));c.push("proc=CACHED[type]");
y.push("var "+c.join(","));y.push(["if(!proc){","CACHED[type]=proc=compile([",z.join(","),"])}","return proc(",A.join(","),")}"].join(""));
if(b.debug){console.log("-----Generated thunk:\n"+y.join("\n")+"\n----------")}var x=new Function("compile",y.join("\n"));
return x(i.bind(undefined,b))}k.exports=j},{"./compile.js":529}],531:[function(m,l,i){function h(p,a){var g=1,d=p.length,c=p[0],f=p[0];
for(var b=1;b<d;++b){f=c;c=p[b];if(a(c,f)){if(b===g){g++;continue}p[g++]=c}}p.length=g;
return p}function k(a){var g=1,d=a.length,c=a[0],f=a[0];for(var b=1;b<d;++b,f=c){f=c;
c=a[b];if(c!==f){if(b===g){g++;continue}a[g++]=c}}a.length=g;return a}function j(a,b,c){if(a.length===0){return a
}if(b){if(!c){a.sort(b)}return h(a,b)}if(!c){a.sort()}return k(a)}l.exports=j},{}],532:[function(v,y,s){var x=v("iota-array");
var n=v("is-buffer");var w=((typeof Float64Array)!=="undefined");function o(a,b){return a[0]-b[0]
}function u(){var a=this.stride;var b=new Array(a.length);var c;for(c=0;c<b.length;
++c){b[c]=[Math.abs(a[c]),c]}b.sort(o);var d=new Array(b.length);for(c=0;c<d.length;
++c){d[c]=b[c][1]}return d}function r(b,E){var m=["View",E,"d",b].join("");if(E<0){m="View_Nil"+b
}var c=(b==="generic");if(E===-1){var g="function "+m+"(a){this.data=a;};var proto="+m+".prototype;proto.dtype='"+b+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+m+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+m+"(a){return new "+m+"(a);}";
var i=new Function(g);return i()}else{if(E===0){var g="function "+m+"(a,d) {this.data = a;this.offset = d};var proto="+m+".prototype;proto.dtype='"+b+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+m+"_copy() {return new "+m+"(this.data,this.offset)};proto.pick=function "+m+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+m+"_get(){return "+(c?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+m+"_set(v){return "+(c?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+m+"(a,b,c,d){return new "+m+"(a,d)}";
var i=new Function("TrivialArray",g);return i(t[b][0])}}var g=["'use strict'"];
var h=x(E);var l=h.map(function(z){return"i"+z});var G="this.offset+"+h.map(function(z){return"this.stride["+z+"]*i"+z
}).join("+");var F=h.map(function(z){return"b"+z}).join(",");var j=h.map(function(z){return"c"+z
}).join(",");g.push("function "+m+"(a,"+F+","+j+",d){this.data=a","this.shape=["+F+"]","this.stride=["+j+"]","this.offset=d|0}","var proto="+m+".prototype","proto.dtype='"+b+"'","proto.dimension="+E);
g.push("Object.defineProperty(proto,'size',{get:function "+m+"_size(){return "+h.map(function(z){return"this.shape["+z+"]"
}).join("*"),"}})");if(E===1){g.push("proto.order=[0]")}else{g.push("Object.defineProperty(proto,'order',{get:");
if(E<4){g.push("function "+m+"_order(){");if(E===2){g.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
}else{if(E===3){g.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")
}}}else{g.push("ORDER})")}}g.push("proto.set=function "+m+"_set("+l.join(",")+",v){");
if(c){g.push("return this.data.set("+G+",v)}")}else{g.push("return this.data["+G+"]=v}")
}g.push("proto.get=function "+m+"_get("+l.join(",")+"){");if(c){g.push("return this.data.get("+G+")}")
}else{g.push("return this.data["+G+"]}")}g.push("proto.index=function "+m+"_index(",l.join(),"){return "+G+"}");
g.push("proto.hi=function "+m+"_hi("+l.join(",")+"){return new "+m+"(this.data,"+h.map(function(z){return["(typeof i",z,"!=='number'||i",z,"<0)?this.shape[",z,"]:i",z,"|0"].join("")
}).join(",")+","+h.map(function(z){return"this.stride["+z+"]"}).join(",")+",this.offset)}");
var f=h.map(function(z){return"a"+z+"=this.shape["+z+"]"});var k=h.map(function(z){return"c"+z+"=this.stride["+z+"]"
});g.push("proto.lo=function "+m+"_lo("+l.join(",")+"){var b=this.offset,d=0,"+f.join(",")+","+k.join(","));
for(var D=0;D<E;++D){g.push("if(typeof i"+D+"==='number'&&i"+D+">=0){d=i"+D+"|0;b+=c"+D+"*d;a"+D+"-=d}")
}g.push("return new "+m+"(this.data,"+h.map(function(z){return"a"+z}).join(",")+","+h.map(function(z){return"c"+z
}).join(",")+",b)}");g.push("proto.step=function "+m+"_step("+l.join(",")+"){var "+h.map(function(z){return"a"+z+"=this.shape["+z+"]"
}).join(",")+","+h.map(function(z){return"b"+z+"=this.stride["+z+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");
for(var D=0;D<E;++D){g.push("if(typeof i"+D+"==='number'){d=i"+D+"|0;if(d<0){c+=b"+D+"*(a"+D+"-1);a"+D+"=ceil(-a"+D+"/d)}else{a"+D+"=ceil(a"+D+"/d)}b"+D+"*=d}")
}g.push("return new "+m+"(this.data,"+h.map(function(z){return"a"+z}).join(",")+","+h.map(function(z){return"b"+z
}).join(",")+",c)}");var d=new Array(E);var a=new Array(E);for(var D=0;D<E;++D){d[D]="a[i"+D+"]";
a[D]="b[i"+D+"]"}g.push("proto.transpose=function "+m+"_transpose("+l+"){"+l.map(function(z,A){return z+"=("+z+"===undefined?"+A+":"+z+"|0)"
}).join(";"),"var a=this.shape,b=this.stride;return new "+m+"(this.data,"+d.join(",")+","+a.join(",")+",this.offset)}");
g.push("proto.pick=function "+m+"_pick("+l+"){var a=[],b=[],c=this.offset");for(var D=0;
D<E;++D){g.push("if(typeof i"+D+"==='number'&&i"+D+">=0){c=(c+this.stride["+D+"]*i"+D+")|0}else{a.push(this.shape["+D+"]);b.push(this.stride["+D+"])}")
}g.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}");g.push("return function construct_"+m+"(data,shape,stride,offset){return new "+m+"(data,"+h.map(function(z){return"shape["+z+"]"
}).join(",")+","+h.map(function(z){return"stride["+z+"]"}).join(",")+",offset)}");
var i=new Function("CTOR_LIST","ORDER",g.join("\n"));return i(t[b],u)}function q(a){if(n(a)){return"buffer"
}if(w){switch(Object.prototype.toString.call(a)){case"[object Float64Array]":return"float64";
case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";
case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";
case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";
case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped"
}}if(Array.isArray(a)){return"array"}return"generic"}var t={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],buffer:[],generic:[]};
(function(){for(var a in t){t[a].push(r(a,-1))}});function p(c,k,f,d){if(c===undefined){var h=t.array[0];
return h([])}else{if(typeof c==="number"){c=[c]}}if(k===undefined){k=[c.length]
}var j=k.length;if(f===undefined){f=new Array(j);for(var b=j-1,i=1;b>=0;--b){f[b]=i;
i*=k[b]}}if(d===undefined){d=0;for(var b=0;b<j;++b){if(f[b]<0){d-=(k[b]-1)*f[b]
}}}var g=q(c);var a=t[g];while(a.length<=j+1){a.push(r(g,a.length-1))}var h=a[j+1];
return h(c,k,f,d)}y.exports=p},{"iota-array":533,"is-buffer":534}],533:[function(i,h,f){function g(a){var c=new Array(a);
for(var b=0;b<a;++b){c[b]=b}return c}h.exports=g},{}],534:[function(k,j,g){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
;
j.exports=function(a){return a!=null&&(i(a)||h(a)||!!a._isBuffer)};function i(a){return !!a.constructor&&typeof a.constructor.isBuffer==="function"&&a.constructor.isBuffer(a)
}function h(a){return typeof a.readFloatLE==="function"&&typeof a.slice==="function"&&i(a.slice(0,0))
}},{}],535:[function(m,l,h){var j=32;h.INT_BITS=j;h.INT_MAX=2147483647;h.INT_MIN=-1<<(j-1);
h.sign=function(a){return(a>0)-(a<0)};h.abs=function(a){var b=a>>(j-1);return(a^b)-b
};h.min=function(b,a){return a^((b^a)&-(b<a))};h.max=function(b,a){return b^((b^a)&-(b<a))
};h.isPow2=function(a){return !(a&(a-1))&&(!!a)};h.log2=function(b){var a,c;a=(b>65535)<<4;
b>>>=a;c=(b>255)<<3;b>>>=c;a|=c;c=(b>15)<<2;b>>>=c;a|=c;c=(b>3)<<1;b>>>=c;a|=c;
return a|(b>>1)};h.log10=function(a){return(a>=1000000000)?9:(a>=100000000)?8:(a>=10000000)?7:(a>=1000000)?6:(a>=100000)?5:(a>=10000)?4:(a>=1000)?3:(a>=100)?2:(a>=10)?1:0
};h.popCount=function(a){a=a-((a>>>1)&1431655765);a=(a&858993459)+((a>>>2)&858993459);
return((a+(a>>>4)&252645135)*16843009)>>>24};function i(b){var a=32;b&=-b;if(b){a--
}if(b&65535){a-=16}if(b&16711935){a-=8}if(b&252645135){a-=4}if(b&858993459){a-=2
}if(b&1431655765){a-=1}return a}h.countTrailingZeros=i;h.nextPow2=function(a){a+=a===0;
--a;a|=a>>>1;a|=a>>>2;a|=a>>>4;a|=a>>>8;a|=a>>>16;return a+1};h.prevPow2=function(a){a|=a>>>1;
a|=a>>>2;a|=a>>>4;a|=a>>>8;a|=a>>>16;return a-(a>>>1)};h.parity=function(a){a^=a>>>16;
a^=a>>>8;a^=a>>>4;a&=15;return(27030>>>a)&1};var k=new Array(256);(function(b){for(var d=0;
d<256;++d){var f=d,a=d,c=7;for(f>>>=1;f;f>>>=1){a<<=1;a|=f&1;--c}b[d]=(a<<c)&255
}})(k);h.reverse=function(a){return(k[a&255]<<24)|(k[(a>>>8)&255]<<16)|(k[(a>>>16)&255]<<8)|k[(a>>>24)&255]
};h.interleave2=function(b,a){b&=65535;b=(b|(b<<8))&16711935;b=(b|(b<<4))&252645135;
b=(b|(b<<2))&858993459;b=(b|(b<<1))&1431655765;a&=65535;a=(a|(a<<8))&16711935;a=(a|(a<<4))&252645135;
a=(a|(a<<2))&858993459;a=(a|(a<<1))&1431655765;return b|(a<<1)};h.deinterleave2=function(b,a){b=(b>>>a)&1431655765;
b=(b|(b>>>1))&858993459;b=(b|(b>>>2))&252645135;b=(b|(b>>>4))&16711935;b=(b|(b>>>16))&65535;
return(b<<16)>>16};h.interleave3=function(c,a,b){c&=1023;c=(c|(c<<16))&4278190335;
c=(c|(c<<8))&251719695;c=(c|(c<<4))&3272356035;c=(c|(c<<2))&1227133513;a&=1023;
a=(a|(a<<16))&4278190335;a=(a|(a<<8))&251719695;a=(a|(a<<4))&3272356035;a=(a|(a<<2))&1227133513;
c|=(a<<1);b&=1023;b=(b|(b<<16))&4278190335;b=(b|(b<<8))&251719695;b=(b|(b<<4))&3272356035;
b=(b|(b<<2))&1227133513;return c|(b<<2)};h.deinterleave3=function(b,a){b=(b>>>a)&1227133513;
b=(b|(b>>>2))&3272356035;b=(b|(b>>>4))&251719695;b=(b|(b>>>8))&4278190335;b=(b|(b>>>16))&1023;
return(b<<22)>>22};h.nextCombination=function(b){var a=b|(b-1);return(a+1)|(((~a&-~a)-1)>>>(i(b)+1))
}},{}],536:[function(m,l,i){function j(a,g,b){var f=a[b]|0;if(f<=0){return[]}var d=new Array(f),c;
if(b===a.length-1){for(c=0;c<f;++c){d[c]=g}}else{for(c=0;c<f;++c){d[c]=j(a,g,b+1)
}}return d}function k(b,a){var d,c;d=new Array(b);for(c=0;c<b;++c){d[c]=a}return d
}function h(b,a){if(typeof a==="undefined"){a=0}switch(typeof b){case"number":if(b>0){return k(b|0,a)
}break;case"object":if(typeof(b.length)==="number"){return j(b,a,0)}break}return[]
}l.exports=h},{}],537:[function(d,g,f){(function(J,V){var H=d("bit-twiddle");var E=d("dup");
if(!J.__TYPEDARRAY_POOL){J.__TYPEDARRAY_POOL={UINT8:E([32,0]),UINT16:E([32,0]),UINT32:E([32,0]),INT8:E([32,0]),INT16:E([32,0]),INT32:E([32,0]),FLOAT:E([32,0]),DOUBLE:E([32,0]),DATA:E([32,0]),UINT8C:E([32,0]),BUFFER:E([32,0])}
}var O=(typeof Uint8ClampedArray)!=="undefined";var M=J.__TYPEDARRAY_POOL;if(!M.UINT8C){M.UINT8C=E([32,0])
}if(!M.BUFFER){M.BUFFER=E([32,0])}var S=M.DATA,c=M.BUFFER;f.free=function R(h){if(V.isBuffer(h)){c[H.log2(h.length)].push(h)
}else{if(Object.prototype.toString.call(h)!=="[object ArrayBuffer]"){h=h.buffer
}if(!h){return}var i=h.length||h.byteLength;var j=H.log2(i)|0;S[j].push(h)}};function N(j){if(!j){return
}var h=j.length||j.byteLength;var i=H.log2(h);S[i].push(j)}function aa(h){N(h.buffer)
}f.freeUint8=f.freeUint16=f.freeUint32=f.freeInt8=f.freeInt16=f.freeInt32=f.freeFloat32=f.freeFloat=f.freeFloat64=f.freeDouble=f.freeUint8Clamped=f.freeDataView=aa;
f.freeArrayBuffer=N;f.freeBuffer=function L(h){c[H.log2(h.length)].push(h)};f.malloc=function G(h,i){if(i===undefined||i==="arraybuffer"){return F(h)
}else{switch(i){case"uint8":return W(h);case"uint16":return b(h);case"uint32":return P(h);
case"int8":return K(h);case"int16":return Z(h);case"int32":return a(h);case"float":case"float32":return X(h);
case"double":case"float64":return Q(h);case"uint8_clamped":return Y(h);case"buffer":return U(h);
case"data":case"dataview":return T(h);default:return null}}return null};function F(h){var h=H.nextPow2(h);
var j=H.log2(h);var i=S[j];if(i.length>0){return i.pop()}return new ArrayBuffer(h)
}f.mallocArrayBuffer=F;function W(h){return new Uint8Array(F(h),0,h)}f.mallocUint8=W;
function b(h){return new Uint16Array(F(2*h),0,h)}f.mallocUint16=b;function P(h){return new Uint32Array(F(4*h),0,h)
}f.mallocUint32=P;function K(h){return new Int8Array(F(h),0,h)}f.mallocInt8=K;function Z(h){return new Int16Array(F(2*h),0,h)
}f.mallocInt16=Z;function a(h){return new Int32Array(F(4*h),0,h)}f.mallocInt32=a;
function X(h){return new Float32Array(F(4*h),0,h)}f.mallocFloat32=f.mallocFloat=X;
function Q(h){return new Float64Array(F(8*h),0,h)}f.mallocFloat64=f.mallocDouble=Q;
function Y(h){if(O){return new Uint8ClampedArray(F(h),0,h)}else{return W(h)}}f.mallocUint8Clamped=Y;
function T(h){return new DataView(F(h),0,h)}f.mallocDataView=T;function U(h){h=H.nextPow2(h);
var i=H.log2(h);var j=c[i];if(j.length>0){return j.pop()}return new V(h)}f.mallocBuffer=U;
f.clearCache=function I(){for(var h=0;h<32;++h){M.UINT8[h].length=0;M.UINT16[h].length=0;
M.UINT32[h].length=0;M.INT8[h].length=0;M.INT16[h].length=0;M.INT32[h].length=0;
M.FLOAT[h].length=0;M.DOUBLE[h].length=0;M.UINT8C[h].length=0;S[h].length=0;c[h].length=0
}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},d("buffer").Buffer)
},{"bit-twiddle":535,buffer:293,dup:536}],538:[function(K,Q,y){var z=K("ndarray");
var P=K("ndarray-ops");var H=K("typedarray-pool");Q.exports=O;var x=null;var E=null;
var C=null;function R(a){x=[a.LINEAR,a.NEAREST_MIPMAP_LINEAR,a.LINEAR_MIPMAP_NEAREST,a.LINEAR_MIPMAP_NEAREST];
E=[a.NEAREST,a.LINEAR,a.NEAREST_MIPMAP_NEAREST,a.NEAREST_MIPMAP_LINEAR,a.LINEAR_MIPMAP_NEAREST,a.LINEAR_MIPMAP_LINEAR];
C=[a.REPEAT,a.CLAMP_TO_EDGE,a.MIRRORED_REPEAT]}function J(a){return(("undefined"!=typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement)||("undefined"!=typeof HTMLImageElement&&a instanceof HTMLImageElement)||("undefined"!=typeof HTMLVideoElement&&a instanceof HTMLVideoElement)||("undefined"!=typeof ImageData&&a instanceof ImageData))
}var I=function(a,b){P.muls(a,b,255)};function B(f,b,c){var a=f.gl;var d=a.getParameter(a.MAX_TEXTURE_SIZE);
if(b<0||b>d||c<0||c>d){throw new Error("gl-texture2d: Invalid texture size")}f._shape=[b,c];
f.bind();a.texImage2D(a.TEXTURE_2D,0,f.format,b,c,0,f.format,f.type,null);f._mipLevels=[0];
return f}function A(g,f,h,j,b,c){this.gl=g;this.handle=f;this.format=b;this.type=c;
this._shape=[h,j];this._mipLevels=[0];this._magFilter=g.NEAREST;this._minFilter=g.NEAREST;
this._wrapS=g.CLAMP_TO_EDGE;this._wrapT=g.CLAMP_TO_EDGE;this._anisoSamples=1;var a=this;
var i=[this._wrapS,this._wrapT];Object.defineProperties(i,[{get:function(){return a._wrapS
},set:function(k){return a.wrapS=k}},{get:function(){return a._wrapT},set:function(k){return a.wrapT=k
}}]);this._wrapVector=i;var d=[this._shape[0],this._shape[1]];Object.defineProperties(d,[{get:function(){return a._shape[0]
},set:function(k){return a.width=k}},{get:function(){return a._shape[1]},set:function(k){return a.height=k
}}]);this._shapeVector=d}var G=A.prototype;Object.defineProperties(G,{minFilter:{get:function(){return this._minFilter
},set:function(a){this.bind();var b=this.gl;if(this.type===b.FLOAT&&x.indexOf(a)>=0){if(!b.getExtension("OES_texture_float_linear")){a=b.NEAREST
}}if(E.indexOf(a)<0){throw new Error("gl-texture2d: Unknown filter mode "+a)}b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,a);
return this._minFilter=a}},magFilter:{get:function(){return this._magFilter},set:function(a){this.bind();
var b=this.gl;if(this.type===b.FLOAT&&x.indexOf(a)>=0){if(!b.getExtension("OES_texture_float_linear")){a=b.NEAREST
}}if(E.indexOf(a)<0){throw new Error("gl-texture2d: Unknown filter mode "+a)}b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,a);
return this._magFilter=a}},mipSamples:{get:function(){return this._anisoSamples
},set:function(a){var b=this._anisoSamples;this._anisoSamples=Math.max(a,1)|0;if(b!==this._anisoSamples){var c=this.gl.getExtension("EXT_texture_filter_anisotropic");
if(c){this.gl.texParameterf(this.gl.TEXTURE_2D,c.TEXTURE_MAX_ANISOTROPY_EXT,this._anisoSamples)
}}return this._anisoSamples}},wrapS:{get:function(){return this._wrapS},set:function(a){this.bind();
if(C.indexOf(a)<0){throw new Error("gl-texture2d: Unknown wrap mode "+a)}this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,a);
return this._wrapS=a}},wrapT:{get:function(){return this._wrapT},set:function(a){this.bind();
if(C.indexOf(a)<0){throw new Error("gl-texture2d: Unknown wrap mode "+a)}this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,a);
return this._wrapT=a}},wrap:{get:function(){return this._wrapVector},set:function(a){if(!Array.isArray(a)){a=[a,a]
}if(a.length!==2){throw new Error("gl-texture2d: Must specify wrap mode for rows and columns")
}for(var c=0;c<2;++c){if(C.indexOf(a[c])<0){throw new Error("gl-texture2d: Unknown wrap mode "+a)
}}this._wrapS=a[0];this._wrapT=a[1];var b=this.gl;this.bind();b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,this._wrapS);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,this._wrapT);return a}},shape:{get:function(){return this._shapeVector
},set:function(a){if(!Array.isArray(a)){a=[a|0,a|0]}else{if(a.length!==2){throw new Error("gl-texture2d: Invalid texture shape")
}}B(this,a[0]|0,a[1]|0);return[a[0]|0,a[1]|0]}},width:{get:function(){return this._shape[0]
},set:function(a){a=a|0;B(this,a,this._shape[1]);return a}},height:{get:function(){return this._shape[1]
},set:function(a){a=a|0;B(this,this._shape[0],a);return a}}});G.bind=function(a){var b=this.gl;
if(a!==undefined){b.activeTexture(b.TEXTURE0+(a|0))}b.bindTexture(b.TEXTURE_2D,this.handle);
if(a!==undefined){return(a|0)}return b.getParameter(b.ACTIVE_TEXTURE)-b.TEXTURE0
};G.dispose=function(){this.gl.deleteTexture(this.handle)};G.generateMipmap=function(){this.bind();
this.gl.generateMipmap(this.gl.TEXTURE_2D);var a=Math.min(this._shape[0],this._shape[1]);
for(var b=0;a>0;++b,a>>>=1){if(this._mipLevels.indexOf(b)<0){this._mipLevels.push(b)
}}};G.setPixels=function(f,h,c,d){var g=this.gl;this.bind();if(Array.isArray(h)){d=c;
c=h[1]|0;h=h[0]|0}else{h=h||0;c=c||0}d=d||0;var b=J(f)?f:f.raw;if(b){var a=this._mipLevels.indexOf(d)<0;
if(a){g.texImage2D(g.TEXTURE_2D,0,this.format,this.format,this.type,b);this._mipLevels.push(d)
}else{g.texSubImage2D(g.TEXTURE_2D,d,h,c,this.format,this.type,b)}}else{if(f.shape&&f.stride&&f.data){if(f.shape.length<2||h+f.shape[1]>this._shape[1]>>>d||c+f.shape[0]>this._shape[0]>>>d||h<0||c<0){throw new Error("gl-texture2d: Texture dimensions are out of bounds")
}D(g,h,c,d,this.format,this.type,this._mipLevels,f)}else{throw new Error("gl-texture2d: Unsupported data type")
}}};function N(a,b){if(a.length===3){return(b[2]===1)&&(b[1]===a[0]*a[2])&&(b[0]===a[2])
}return(b[0]===1)&&(b[1]===a[0])}function D(h,s,j,p,a,o,m,n){var b=n.dtype;var g=n.shape.slice();
if(g.length<2||g.length>3){throw new Error("gl-texture2d: Invalid ndarray, must be 2d or 3d")
}var q=0,d=0;var f=N(g,n.stride.slice());if(b==="float32"){q=h.FLOAT}else{if(b==="float64"){q=h.FLOAT;
f=false;b="float32"}else{if(b==="uint8"){q=h.UNSIGNED_BYTE}else{q=h.UNSIGNED_BYTE;
f=false;b="uint8"}}}var k=1;if(g.length===2){d=h.LUMINANCE;g=[g[0],g[1],1];n=z(n.data,g,[n.stride[0],n.stride[1],1],n.offset)
}else{if(g.length===3){if(g[2]===1){d=h.ALPHA}else{if(g[2]===2){d=h.LUMINANCE_ALPHA
}else{if(g[2]===3){d=h.RGB}else{if(g[2]===4){d=h.RGBA}else{throw new Error("gl-texture2d: Invalid shape for pixel coords")
}}}}k=g[2]}else{throw new Error("gl-texture2d: Invalid shape for texture")}}if((d===h.LUMINANCE||d===h.ALPHA)&&(a===h.LUMINANCE||a===h.ALPHA)){d=a
}if(d!==a){throw new Error("gl-texture2d: Incompatible texture format for setPixels")
}var l=n.size;var i=m.indexOf(p)<0;if(i){m.push(p)}if(q===o&&f){if(n.offset===0&&n.data.length===l){if(i){h.texImage2D(h.TEXTURE_2D,p,a,g[0],g[1],0,a,o,n.data)
}else{h.texSubImage2D(h.TEXTURE_2D,p,s,j,g[0],g[1],a,o,n.data)}}else{if(i){h.texImage2D(h.TEXTURE_2D,p,a,g[0],g[1],0,a,o,n.data.subarray(n.offset,n.offset+l))
}else{h.texSubImage2D(h.TEXTURE_2D,p,s,j,g[0],g[1],a,o,n.data.subarray(n.offset,n.offset+l))
}}}else{var c;if(o===h.FLOAT){c=H.mallocFloat32(l)}else{c=H.mallocUint8(l)}var r=z(c,g,[g[2],g[2]*g[0],1]);
if(q===h.FLOAT&&o===h.UNSIGNED_BYTE){I(r,n)}else{P.assign(r,n)}if(i){h.texImage2D(h.TEXTURE_2D,p,a,g[0],g[1],0,a,o,c.subarray(0,l))
}else{h.texSubImage2D(h.TEXTURE_2D,p,s,j,g[0],g[1],a,o,c.subarray(0,l))}if(o===h.FLOAT){H.freeFloat32(c)
}else{H.freeUint8(c)}}}function L(b){var a=b.createTexture();b.bindTexture(b.TEXTURE_2D,a);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
return a}function S(c,h,b,f,a){var g=c.getParameter(c.MAX_TEXTURE_SIZE);if(h<0||h>g||b<0||b>g){throw new Error("gl-texture2d: Invalid texture shape")
}if(a===c.FLOAT&&!c.getExtension("OES_texture_float")){throw new Error("gl-texture2d: Floating point textures not supported on this platform")
}var d=L(c);c.texImage2D(c.TEXTURE_2D,0,f,h,b,0,f,a,null);return new A(c,d,h,b,f,a)
}function F(c,f,b,a,h,d){var g=L(c);c.texImage2D(c.TEXTURE_2D,0,h,h,d,f);return new A(c,g,b,a,h,d)
}function M(d,b){var h=b.dtype;var a=b.shape.slice();var n=d.getParameter(d.MAX_TEXTURE_SIZE);
if(a[0]<0||a[0]>n||a[1]<0||a[1]>n){throw new Error("gl-texture2d: Invalid texture size")
}var k=N(a,b.stride.slice());var o=0;if(h==="float32"){o=d.FLOAT}else{if(h==="float64"){o=d.FLOAT;
k=false;h="float32"}else{if(h==="uint8"){o=d.UNSIGNED_BYTE}else{o=d.UNSIGNED_BYTE;
k=false;h="uint8"}}}var m=0;if(a.length===2){m=d.LUMINANCE;a=[a[0],a[1],1];b=z(b.data,a,[b.stride[0],b.stride[1],1],b.offset)
}else{if(a.length===3){if(a[2]===1){m=d.ALPHA}else{if(a[2]===2){m=d.LUMINANCE_ALPHA
}else{if(a[2]===3){m=d.RGB}else{if(a[2]===4){m=d.RGBA}else{throw new Error("gl-texture2d: Invalid shape for pixel coords")
}}}}}else{throw new Error("gl-texture2d: Invalid shape for texture")}}if(o===d.FLOAT&&!d.getExtension("OES_texture_float")){o=d.UNSIGNED_BYTE;
k=false}var f,c;var j=b.size;if(!k){var i=[a[2],a[2]*a[0],1];c=H.malloc(j,h);var g=z(c,a,i,0);
if((h==="float32"||h==="float64")&&o===d.UNSIGNED_BYTE){I(g,b)}else{P.assign(g,b)
}f=c.subarray(0,j)}else{if(b.offset===0&&b.data.length===j){f=b.data}else{f=b.data.subarray(b.offset,b.offset+j)
}}var l=L(d);d.texImage2D(d.TEXTURE_2D,0,m,a[0],a[1],0,m,o,f);if(!k){H.free(c)}return new A(d,l,a[0],a[1],m,o)
}function O(b){if(arguments.length<=1){throw new Error("gl-texture2d: Missing arguments for texture2d constructor")
}if(!x){R(b)}if(typeof arguments[1]==="number"){return S(b,arguments[1],arguments[2],arguments[3]||b.RGBA,arguments[4]||b.UNSIGNED_BYTE)
}if(Array.isArray(arguments[1])){return S(b,arguments[1][0]|0,arguments[1][1]|0,arguments[2]||b.RGBA,arguments[3]||b.UNSIGNED_BYTE)
}if(typeof arguments[1]==="object"){var a=arguments[1];var c=J(a)?a:a.raw;if(c){return F(b,c,a.width|0,a.height|0,arguments[2]||b.RGBA,arguments[3]||b.UNSIGNED_BYTE)
}else{if(a.shape&&a.data&&a.stride){return M(b,a)}}}throw new Error("gl-texture2d: Invalid arguments for texture2d constructor")
}},{ndarray:532,"ndarray-ops":527,"typedarray-pool":537}],539:[function(d,g,f){g.exports={TextureLoader:d("./ac-texture-loader/TextureLoader")}
},{"./ac-texture-loader/TextureLoader":540}],540:[function(z,A,w){var o=z("@marcom/ac-event-emitter-micro").EventEmitterMicro,t=z("gl-texture2d"),x=z("@marcom/ac-object"),u=z("ac-cname").cname,q=z("@marcom/ac-dom-emitter").DOMEmitter,r=z("@marcom/ac-viewport").Viewport;
var y={basePath:"/",ignoreBreakpoint:false,type:"image",extension:"png",allowXLarge:false,timeout:5000};
var p=["mp4"];function s(a){o.call(this);a=a||{};this.options=x.defaults(y,a);this.textureUnitCount=0;
this._boundOnBreakpoint=this._onBreakpoint.bind(this);r.on("breakpoint",this._boundOnBreakpoint);
this._onBreakpoint();this.textures={}}var v=s.prototype=Object.create(o.prototype);
v.createTexture=function(b,c,d){var a=this._getTextureDOMElement(d);this.textures[c]={texture:{},el:a,unit:this.textureUnitCount,context:b,options:d||{}};
this.textureUnitCount++;return this.textures[c].texture};v.load=function(c,d){if(typeof c!=="string"){return false
}var b=this.textures[c];if(!b){this.createTexture(c,d);b=this.textures[c]}var g=x.defaults(b.options,d||{});
var f=this.getAssetPath(c,g);var a=new XMLHttpRequest();a.open("GET",f,true);a.responseType="arraybuffer";
a.onload=this._handleXHRLoaded.bind(this,c,b,g,a);a.send(null);return b.texture
};v.emptyTextureCache=function(){var a;for(a in this.textures){if(this.textures.hasOwnProperty(a)){this.textures[a].texture.dispose()
}}this.textures={}};v.getAssetPath=function(g,h){h=x.defaults(this.options,h||{});
var a=h.basePath,b=h.extension,d="",i="_2x";b="."+b;if(!h.ignoreBreakpoint){var f=this.breakpointName;
if(f==="xlarge"&&!h.allowXLarge){f="large"}d+="_"+f}if(h.retina===true){d+=i}else{if(h.retina===false){d+=""
}else{var c="";if(window.devicePixelRatio>1.5){c=i}d+=c}}return u.formatUrl(a,g+d,b)
};v.cancelXHR=function(){};v.destroy=function(){this.emptyTextureCache();this.cancelXHR();
r.off("breakpoint",this._boundOnBreakpoint);var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};v._getTextureDOMElement=function(c){var a,b="img";if(p.indexOf(c.extension)>-1){b="video"
}return document.createElement(b)};v._handleXHRLoaded=function(c,i,g,h){if(h.status>=400){this.trigger("error",{name:c,xhr:h});
h=null;return}var j=window.URL||window.webkitURL;var f="image",b=i.el.tagName.toLowerCase();
if(b==="video"){f="video"}var m=new Uint8Array(h.response),d=new Blob([m],{type:f+"/"+g.extension}),k=j.createObjectURL(d);
var l=new q(i.el);var a="load";if(b==="video"){a="canplay"}l.on(a,this._onImageBlobTextureLoaded.bind(this,c,i,l,h));
i.el.src=k};v._onImageBlobTextureLoaded=function(d,b,c,a){b.texture=t(b.context,b.el);
this.textures[d]=b;this.trigger("load",{name:d,texture:b.texture,el:b.el});c.destroy();
a=c=null};v._onBreakpoint=function(){this.breakpointName=r.getBreakpoint().name
};A.exports=s},{"@marcom/ac-dom-emitter":520,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object":456,"@marcom/ac-viewport":637,"ac-cname":525,"gl-texture2d":538}],541:[function(x,y,w){var r=x("typedarray-pool");
var z=x("ndarray-ops");var o=x("ndarray");var s=["uint8","uint8_clamped","uint16","uint32","int8","int16","int32","float32"];
function p(a,f,b,d,c){this.gl=a;this.type=f;this.handle=b;this.length=d;this.usage=c
}var t=p.prototype;t.bind=function(){this.gl.bindBuffer(this.type,this.handle)};
t.unbind=function(){this.gl.bindBuffer(this.type,null)};t.dispose=function(){this.gl.deleteBuffer(this.handle)
};function u(a,f,h,c,d,b){var g=d.length*d.BYTES_PER_ELEMENT;if(b<0){a.bufferData(f,d,c);
return g}if(g+b>h){throw new Error("gl-buffer: If resizing buffer, must not specify offset")
}a.bufferSubData(f,b,d);return h}function A(a,f){var c=r.malloc(a.length,f);var b=a.length;
for(var d=0;d<b;++d){c[d]=a[d]}return c}function v(d,b){var a=1;for(var c=b.length-1;
c>=0;--c){if(b[c]!==a){return false}a*=d[c]}return true}t.update=function(a,b){if(typeof b!=="number"){b=-1
}this.bind();if(typeof a==="object"&&typeof a.shape!=="undefined"){var h=a.dtype;
if(s.indexOf(h)<0){h="float32"}if(this.type===this.gl.ELEMENT_ARRAY_BUFFER){var d=gl.getExtension("OES_element_index_uint");
if(d&&h!=="uint16"){h="uint32"}else{h="uint16"}}if(h===a.dtype&&v(a.shape,a.stride)){if(a.offset===0&&a.data.length===a.shape[0]){this.length=u(this.gl,this.type,this.length,this.usage,a.data,b)
}else{this.length=u(this.gl,this.type,this.length,this.usage,a.data.subarray(a.offset,a.shape[0]),b)
}}else{var f=r.malloc(a.size,h);var c=o(f,a.shape);z.assign(c,a);if(b<0){this.length=u(this.gl,this.type,this.length,this.usage,f,b)
}else{this.length=u(this.gl,this.type,this.length,this.usage,f.subarray(0,a.size),b)
}r.free(f)}}else{if(Array.isArray(a)){var g;if(this.type===this.gl.ELEMENT_ARRAY_BUFFER){g=A(a,"uint16")
}else{g=A(a,"float32")}if(b<0){this.length=u(this.gl,this.type,this.length,this.usage,g,b)
}else{this.length=u(this.gl,this.type,this.length,this.usage,g.subarray(0,a.length),b)
}r.free(g)}else{if(typeof a==="object"&&typeof a.length==="number"){this.length=u(this.gl,this.type,this.length,this.usage,a,b)
}else{if(typeof a==="number"||a===undefined){if(b>=0){throw new Error("gl-buffer: Cannot specify offset when resizing buffer")
}a=a|0;if(a<=0){a=1}this.gl.bufferData(this.type,a|0,this.usage);this.length=a}else{throw new Error("gl-buffer: Invalid data type")
}}}}};function q(a,b,f,c){f=f||a.ARRAY_BUFFER;c=c||a.DYNAMIC_DRAW;if(f!==a.ARRAY_BUFFER&&f!==a.ELEMENT_ARRAY_BUFFER){throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER")
}if(c!==a.DYNAMIC_DRAW&&c!==a.STATIC_DRAW&&c!==a.STREAM_DRAW){throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW")
}var d=a.createBuffer();var g=new p(a,f,d,0,c);g.update(b);return g}y.exports=q
},{ndarray:547,"ndarray-ops":542,"typedarray-pool":552}],542:[function(d,g,f){arguments[4][527][0].apply(f,arguments)
},{"cwise-compiler":543,dup:527}],543:[function(d,g,f){arguments[4][528][0].apply(f,arguments)
},{"./lib/thunk.js":545,dup:528}],544:[function(d,g,f){arguments[4][529][0].apply(f,arguments)
},{dup:529,uniq:546}],545:[function(d,g,f){arguments[4][530][0].apply(f,arguments)
},{"./compile.js":544,dup:530}],546:[function(d,g,f){arguments[4][531][0].apply(f,arguments)
},{dup:531}],547:[function(d,g,f){arguments[4][532][0].apply(f,arguments)},{dup:532,"iota-array":548,"is-buffer":549}],548:[function(d,g,f){arguments[4][533][0].apply(f,arguments)
},{dup:533}],549:[function(d,g,f){arguments[4][534][0].apply(f,arguments)},{dup:534}],550:[function(d,g,f){arguments[4][535][0].apply(f,arguments)
},{dup:535}],551:[function(d,g,f){arguments[4][536][0].apply(f,arguments)},{dup:536}],552:[function(d,g,f){arguments[4][537][0].apply(f,arguments)
},{"bit-twiddle":550,buffer:293,dup:537}],553:[function(i,h,g){function f(d,z,v){if(z){z.bind()
}else{d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,null)}var x=d.getParameter(d.MAX_VERTEX_ATTRIBS)|0;
if(v){if(v.length>x){throw new Error("gl-vao: Too many vertex attributes")}for(var s=0;
s<v.length;++s){var t=v[s];if(t.buffer){var u=t.buffer;var a=t.size||4;var c=t.type||d.FLOAT;
var b=!!t.normalized;var y=t.stride||0;var w=t.offset||0;u.bind();d.enableVertexAttribArray(s);
d.vertexAttribPointer(s,a,c,b,y,w)}else{if(typeof t==="number"){d.vertexAttrib1f(s,t)
}else{if(t.length===1){d.vertexAttrib1f(s,t[0])}else{if(t.length===2){d.vertexAttrib2f(s,t[0],t[1])
}else{if(t.length===3){d.vertexAttrib3f(s,t[0],t[1],t[2])}else{if(t.length===4){d.vertexAttrib4f(s,t[0],t[1],t[2],t[3])
}else{throw new Error("gl-vao: Invalid vertex attribute")}}}}}d.disableVertexAttribArray(s)
}}for(;s<x;++s){d.disableVertexAttribArray(s)}}else{d.bindBuffer(d.ARRAY_BUFFER,null);
for(var s=0;s<x;++s){d.disableVertexAttribArray(s)}}}h.exports=f},{}],554:[function(m,l,h){var j=m("./do-bind.js");
function k(a){this.gl=a;this._elements=null;this._attributes=null;this._elementsType=a.UNSIGNED_SHORT
}k.prototype.bind=function(){j(this.gl,this._elements,this._attributes)};k.prototype.update=function(c,a,b){this._elements=a;
this._attributes=c;this._elementsType=b||this.gl.UNSIGNED_SHORT};k.prototype.dispose=function(){};
k.prototype.unbind=function(){};k.prototype.draw=function(a,d,b){b=b||0;var c=this.gl;
if(this._elements){c.drawElements(a,d,this._elementsType,b)}else{c.drawArrays(a,b,d)
}};function i(a){return new k(a)}l.exports=i},{"./do-bind.js":553}],555:[function(o,n,i){var k=o("./do-bind.js");
function l(c,b,d,f,g,a){this.location=c;this.dimension=b;this.a=d;this.b=f;this.c=g;
this.d=a}l.prototype.bind=function(a){switch(this.dimension){case 1:a.vertexAttrib1f(this.location,this.a);
break;case 2:a.vertexAttrib2f(this.location,this.a,this.b);break;case 3:a.vertexAttrib3f(this.location,this.a,this.b,this.c);
break;case 4:a.vertexAttrib4f(this.location,this.a,this.b,this.c,this.d);break}};
function j(a,c,b){this.gl=a;this._ext=c;this.handle=b;this._attribs=[];this._useElements=false;
this._elementsType=a.UNSIGNED_SHORT}j.prototype.bind=function(){this._ext.bindVertexArrayOES(this.handle);
for(var a=0;a<this._attribs.length;++a){this._attribs[a].bind(this.gl)}};j.prototype.unbind=function(){this._ext.bindVertexArrayOES(null)
};j.prototype.dispose=function(){this._ext.deleteVertexArrayOES(this.handle)};j.prototype.update=function(c,f,a){this.bind();
k(this.gl,f,c);this.unbind();this._attribs.length=0;if(c){for(var b=0;b<c.length;
++b){var d=c[b];if(typeof d==="number"){this._attribs.push(new l(b,1,d))}else{if(Array.isArray(d)){this._attribs.push(new l(b,d.length,d[0],d[1],d[2],d[3]))
}}}}this._useElements=!!f;this._elementsType=a||this.gl.UNSIGNED_SHORT};j.prototype.draw=function(a,d,b){b=b||0;
var c=this.gl;if(this._useElements){c.drawElements(a,d,this._elementsType,b)}else{c.drawArrays(a,b,d)
}};function m(a,b){return new j(a,b,b.createVertexArrayOES())}n.exports=m},{"./do-bind.js":553}],556:[function(n,m,i){var l=n("./lib/vao-native.js");
var j=n("./lib/vao-emulated.js");function k(a){this.bindVertexArrayOES=a.bindVertexArray.bind(a);
this.createVertexArrayOES=a.createVertexArray.bind(a);this.deleteVertexArrayOES=a.deleteVertexArray.bind(a)
}function o(g,f,a,b){var d=g.createVertexArray?new k(g):g.getExtension("OES_vertex_array_object");
var c;if(d){c=l(g,d)}else{c=j(g)}c.update(f,a,b);return c}m.exports=o},{"./lib/vao-emulated.js":554,"./lib/vao-native.js":555}],557:[function(i,h,f){(function g(){if(typeof ses!=="undefined"&&ses.ok&&!ses.ok()){return
}function b(j){if(j.permitHostObjects___){j.permitHostObjects___(b)}}if(typeof ses!=="undefined"){ses.weakMapPermitHostObjects=b
}var V=false;if(typeof WeakMap==="function"){var S=WeakMap;if(typeof navigator!=="undefined"&&/Firefox/.test(navigator.userAgent)){}else{var Y=new S();
var W=Object.freeze({});Y.set(W,1);if(Y.get(W)!==1){V=true}else{h.exports=WeakMap;
return}}}var K=Object.prototype.hasOwnProperty;var T=Object.getOwnPropertyNames;
var L=Object.defineProperty;var G=Object.isExtensible;var M="weakmap:";var ab=M+"ident:"+Math.random()+"___";
if(typeof crypto!=="undefined"&&typeof crypto.getRandomValues==="function"&&typeof ArrayBuffer==="function"&&typeof Uint8Array==="function"){var N=new ArrayBuffer(25);
var X=new Uint8Array(N);crypto.getRandomValues(X);ab=M+"rand:"+Array.prototype.map.call(X,function(j){return(j%36).toString(36)
}).join("")+"___"}function d(j){return !(j.substr(0,M.length)==M&&j.substr(j.length-3)==="___")
}L(Object,"getOwnPropertyNames",{value:function I(j){return T(j).filter(d)}});if("getPropertyNames" in Object){var a=Object.getPropertyNames;
L(Object,"getPropertyNames",{value:function O(j){return a(j).filter(d)}})}function Q(k){if(k!==Object(k)){throw new TypeError("Not an object: "+k)
}var j=k[ab];if(j&&j.key===k){return j}if(!G(k)){return void 0}j={key:k};try{L(k,ab,{value:j,writable:false,enumerable:false,configurable:false});
return j}catch(l){return void 0}}(function(){var l=Object.freeze;L(Object,"freeze",{value:function o(p){Q(p);
return l(p)}});var j=Object.seal;L(Object,"seal",{value:function n(p){Q(p);return j(p)
}});var k=Object.preventExtensions;L(Object,"preventExtensions",{value:function m(p){Q(p);
return k(p)}})})();function aa(j){j.prototype=null;return Object.freeze(j)}var R=false;
function J(){if(!R&&typeof console!=="undefined"){R=true;console.warn("WeakMap should be invoked as new WeakMap(), not WeakMap(). This will be an error in the future.")
}}var P=0;var Z=function(){if(!(this instanceof Z)){J()}var k=[];var n=[];var p=P++;
function l(s,q){var t;var r=Q(s);if(r){return p in r?r[p]:q}else{t=k.indexOf(s);
return t>=0?n[t]:q}}function m(r){var q=Q(r);if(q){return p in q}else{return k.indexOf(r)>=0
}}function o(s,q){var t;var r=Q(s);if(r){r[p]=q}else{t=k.indexOf(s);if(t>=0){n[t]=q
}else{t=k.length;n[t]=q;k[t]=s}}return this}function j(s){var r=Q(s);var t,q;if(r){return p in r&&delete r[p]
}else{t=k.indexOf(s);if(t<0){return false}q=k.length-1;k[t]=void 0;n[t]=n[q];k[t]=k[q];
k.length=q;n.length=q;return true}}return Object.create(Z.prototype,{get___:{value:aa(l)},has___:{value:aa(m)},set___:{value:aa(o)},delete___:{value:aa(j)}})
};Z.prototype=Object.create(Object.prototype,{get:{value:function c(k,j){return this.get___(k,j)
},writable:true,configurable:true},has:{value:function ac(j){return this.has___(j)
},writable:true,configurable:true},set:{value:function U(k,j){return this.set___(k,j)
},writable:true,configurable:true},"delete":{value:function H(j){return this.delete___(j)
},writable:true,configurable:true}});if(typeof S==="function"){(function(){if(V&&typeof Proxy!=="undefined"){Proxy=undefined
}function j(){if(!(this instanceof Z)){J()}var m=new S();var k=undefined;var p=false;
function n(s,r){if(k){return m.has(s)?m.get(s):k.get___(s,r)}else{return m.get(s,r)
}}function o(r){return m.has(r)||(k?k.has___(r):false)}var q;if(V){q=function(s,r){m.set(s,r);
if(!m.has(s)){if(!k){k=new Z()}k.set(s,r)}return this}}else{q=function(t,s){if(p){try{m.set(t,s)
}catch(r){if(!k){k=new Z()}k.set___(t,s)}}else{m.set(t,s)}return this}}function l(r){var s=!!m["delete"](r);
if(k){return k.delete___(r)||s}return s}return Object.create(Z.prototype,{get___:{value:aa(n)},has___:{value:aa(o)},set___:{value:aa(q)},delete___:{value:aa(l)},permitHostObjects___:{value:aa(function(r){if(r===b){p=true
}else{throw new Error("bogus call to permitHostObjects___")}})}})}j.prototype=Z.prototype;
h.exports=j;Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:false,configurable:true,writable:true})
})()}else{if(typeof Proxy!=="undefined"){Proxy=undefined}h.exports=Z}})()},{}],558:[function(p,o,j){var m=typeof WeakMap==="undefined"?p("weak-map"):WeakMap;
var l=p("gl-buffer");var q=p("gl-vao");var k=new m();function n(a){var b=k.get(a);
if(!b||!a.isBuffer(b._triangleBuffer.buffer)){var c=l(a,new Float32Array([-1,-1,-1,4,4,-1]));
b=q(a,[{buffer:c,type:a.FLOAT,size:2}]);b._triangleBuffer=c;k.set(a,b)}b.bind();
a.drawArrays(a.TRIANGLES,0,3);b.unbind()}o.exports=n},{"gl-buffer":541,"gl-vao":556,"weak-map":557}],559:[function(p,n,q){n.exports=o;
function l(f,c,d,g,b,h,a){this._gl=f;this._program=c;this._location=d;this._dimension=g;
this._name=b;this._constFunc=h;this._relink=a}var m=l.prototype;m.pointer=function k(d,f,c,a){var b=this._gl;
b.vertexAttribPointer(this._location,this._dimension,d||b.FLOAT,!!f,c||0,a||0);
this._gl.enableVertexAttribArray(this._location)};Object.defineProperty(m,"location",{get:function(){return this._location
},set:function(a){if(a!==this._location){this._location=a;this._gl.bindAttribLocation(this._program,a,this._name);
this._gl.linkProgram(this._program);this._relink()}}});function j(b,c,x,g,d,v,i){var y=["gl","v"];
var w=[];for(var f=0;f<g;++f){y.push("x"+f);w.push("x"+f)}y.push(["if(x0.length===void 0){return gl.vertexAttrib",g,"f(v,",w.join(),")}else{return gl.vertexAttrib",g,"fv(v,x0)}"].join(""));
var h=Function.apply(undefined,y);var a=new l(b,c,x,g,v,h,i);Object.defineProperty(d,v,{set:function(r){b.disableVertexAttribArray(a._location);
h(b,a._location,r);return r},get:function(){return a},enumerable:true})}function o(a,b,f,h){var d={};
for(var c=0,g=f.length;c<g;++c){var x=f[c];var i=x.name;var y=x.type;var w=a.getAttribLocation(b,i);
switch(y){case"bool":case"int":case"float":j(a,b,w,1,d,i,h);break;default:if(y.indexOf("vec")>=0){var z=y.charCodeAt(y.length-1)-48;
if(z<2||z>4){throw new Error("gl-shader: Invalid data type for attribute "+i+": "+y)
}j(a,b,w,z,d,i,h)}else{throw new Error("gl-shader: Unknown data type for attribute "+i+": "+y)
}break}}return d}},{}],560:[function(n,m,o){var k=n("dup");var j=n("./reflect");
m.exports=l;function i(b){var a=new Function("y","return function(){return y}");
return a(b)}function l(f,g,a,d){function v(p){var q=new Function("gl","prog","locations","return function(){return gl.getUniform(prog,locations["+p+"])}");
return q(f,g,d)}function h(q,s,r){switch(r){case"bool":case"int":case"sampler2D":case"samplerCube":return"gl.uniform1i(locations["+s+"],obj"+q+")";
case"float":return"gl.uniform1f(locations["+s+"],obj"+q+")";default:var t=r.indexOf("vec");
if(0<=t&&t<=1&&r.length===4+t){var p=r.charCodeAt(r.length-1)-48;if(p<2||p>4){throw new Error("gl-shader: Invalid data type")
}switch(r.charAt(0)){case"b":case"i":return"gl.uniform"+p+"iv(locations["+s+"],obj"+q+")";
case"v":return"gl.uniform"+p+"fv(locations["+s+"],obj"+q+")";default:throw new Error("gl-shader: Unrecognized data type for vector "+name+": "+r)
}}else{if(r.indexOf("mat")===0&&r.length===4){var p=r.charCodeAt(r.length-1)-48;
if(p<2||p>4){throw new Error("gl-shader: Invalid uniform dimension type for matrix "+name+": "+r)
}return"gl.uniformMatrix"+p+"fv(locations["+s+"],false,obj"+q+")"}else{throw new Error("gl-shader: Unknown uniform data type for "+name+": "+r)
}}break}}function y(q,r){if(typeof r!=="object"){return[[q,r]]}var p=[];for(var t in r){var A=r[t];
var s=q;if(parseInt(t)+""===t){s+="["+t+"]"}else{s+="."+t}if(typeof A==="object"){p.push.apply(p,y(s,A))
}else{p.push([s,A])}}return p}function x(q){var C=["return function updateProperty(obj){"];
var E=y("",q);for(var r=0;r<E.length;++r){var D=E[r];var p=D[0];var t=D[1];if(d[t]){C.push(h(p,t,a[t].type))
}}C.push("return obj}");var s=new Function("gl","prog","locations",C.join("\n"));
return s(f,g,d)}function b(r){switch(r){case"bool":return false;case"int":case"sampler2D":case"samplerCube":return 0;
case"float":return 0;default:var p=r.indexOf("vec");if(0<=p&&p<=1&&r.length===4+p){var q=r.charCodeAt(r.length-1)-48;
if(q<2||q>4){throw new Error("gl-shader: Invalid data type")}if(r.charAt(0)==="b"){return k(q,false)
}return k(q)}else{if(r.indexOf("mat")===0&&r.length===4){var q=r.charCodeAt(r.length-1)-48;
if(q<2||q>4){throw new Error("gl-shader: Invalid uniform dimension type for matrix "+name+": "+r)
}return k([q,q])}else{throw new Error("gl-shader: Unknown uniform data type for "+name+": "+r)
}}break}}function c(r,p,s){if(typeof s==="object"){var q=w(s);Object.defineProperty(r,p,{get:i(q),set:x(s),enumerable:true,configurable:false})
}else{if(d[s]){Object.defineProperty(r,p,{get:v(s),set:x(s),enumerable:true,configurable:false})
}else{r[p]=b(a[s].type)}}}function w(q){var s;if(Array.isArray(q)){s=new Array(q.length);
for(var r=0;r<q.length;++r){c(s,r,q[r])}}else{s={};for(var p in q){c(s,p,q[p])}}return s
}var u=j(a,true);return{get:i(w(u)),set:x(u),enumerable:true,configurable:true}
}},{"./reflect":561,dup:562}],561:[function(f,i,g){i.exports=h;function h(v,a){var c={};
for(var b=0;b<v.length;++b){var n=v[b].name;var j=n.split(".");var o=c;for(var d=0;
d<j.length;++d){var w=j[d].split("[");if(w.length>1){if(!(w[0] in o)){o[w[0]]=[]
}o=o[w[0]];for(var k=1;k<w.length;++k){var x=parseInt(w[k]);if(k<w.length-1||d<j.length-1){if(!(x in o)){if(k<w.length-1){o[x]=[]
}else{o[x]={}}}o=o[x]}else{if(a){o[x]=b}else{o[x]=v[b].type}}}}else{if(d<j.length-1){if(!(w[0] in o)){o[w[0]]={}
}o=o[w[0]]}else{if(a){o[w[0]]=b}else{o[w[0]]=v[b].type}}}}}return c}},{}],562:[function(d,g,f){arguments[4][536][0].apply(f,arguments)
},{dup:536}],563:[function(p,q,o){var l=p("./lib/create-uniforms");var r=p("./lib/create-attributes");
var n=p("./lib/reflect");function m(d,a,b,c){this.gl=d;this.handle=a;this.attributes=null;
this.uniforms=null;this.types=null;this.vertexShader=b;this.fragmentShader=c}m.prototype.bind=function(){this.gl.useProgram(this.handle)
};m.prototype.dispose=function(){var a=this.gl;a.deleteShader(this.vertexShader);
a.deleteShader(this.fragmentShader);a.deleteProgram(this.handle)};m.prototype.updateExports=function(b,g){var c=new Array(b.length);
var a=this.handle;var f=this.gl;var d=s.bind(void 0,f,a,c,b);d();this.types={uniforms:n(b),attributes:n(g)};
this.attributes=r(f,a,g,d);Object.defineProperty(this,"uniforms",l(f,a,b,c))};function s(d,a,b,c){for(var f=0;
f<c.length;++f){b[f]=d.getUniformLocation(a,c[f].name)}}function k(f,b,j,u,h){var i=f.createShader(f.VERTEX_SHADER);
f.shaderSource(i,b);f.compileShader(i);if(!f.getShaderParameter(i,f.COMPILE_STATUS)){var a=f.getShaderInfoLog(i);
console.error("gl-shader: Error compling vertex shader:",a);throw new Error("gl-shader: Error compiling vertex shader:"+a)
}var d=f.createShader(f.FRAGMENT_SHADER);f.shaderSource(d,j);f.compileShader(d);
if(!f.getShaderParameter(d,f.COMPILE_STATUS)){var a=f.getShaderInfoLog(d);console.error("gl-shader: Error compiling fragment shader:",a);
throw new Error("gl-shader: Error compiling fragment shader:"+a)}var g=f.createProgram();
f.attachShader(g,d);f.attachShader(g,i);h.forEach(function(t){if(typeof t.location==="number"){f.bindAttribLocation(g,t.location,t.name)
}});f.linkProgram(g);if(!f.getProgramParameter(g,f.LINK_STATUS)){var a=f.getProgramInfoLog(g);
console.error("gl-shader: Error linking shader program:",a);throw new Error("gl-shader: Error linking shader program:"+a)
}var c=new m(f,g,i,d);c.updateExports(u,h);return c}q.exports=k},{"./lib/create-attributes":559,"./lib/create-uniforms":560,"./lib/reflect":561}],564:[function(d,g,f){g.exports={ShaderPlayer2D:d("./ac-shader-player-2d/ShaderPlayer2D")}
},{"./ac-shader-player-2d/ShaderPlayer2D":567}],565:[function(g,k,h){var i=function(a){this.w=0;
this.x=0;this.y=0;this.z=0;if(a===0){return}if(Array.isArray(a)){this._setFromArray(a)
}else{if(typeof a==="object"){this._setFromObject(a)}else{if(typeof a==="number"){this._setFromHexNumber(a)
}else{if(typeof a==="string"){this._setFromHexString(a)}}}}};var j=i.prototype;
j._setFromArray=function(a){this._replaceColorVals.apply(this,a)};j._setFromObject=function(a){this._replaceColorVals(a.r,a.g,a.b,a.a)
};j._setFromHexNumber=function(a){this._setFromHexString(a.toString(16))};j._setFromHexString=function(a){var b=this._hexToRGB(a);
this._setFromObject(b)};j._replaceColorVals=function(a,b,d,c){this._replaceColorVal("w",a);
this._replaceColorVal("x",b);this._replaceColorVal("y",d);this._replaceColorVal("z",c)
};j._replaceColorVal=function(b,a){if(typeof a==="undefined"){return}a=a/255;if(a<0){a=0
}else{if(a>1){a=1}}this[b]=a};j._hexToRGB=function(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
a=a.replace(b,function(f,o,d,m){return o+o+d+d+m+m});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
return c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:null};k.exports=i
},{}],566:[function(g,k,h){var i=function(a){this.extensions={};this.context=a};
var j=i.prototype;j.get=function(c){if(typeof this.extensions[c]!=="undefined"){return this.extensions[c]
}var a,b=this.context;if(c==="EXT_texture_filter_anisotropic"){a=b.getExtension("EXT_texture_filter_anisotropic")||b.getExtension("MOZ_EXT_texture_filter_anisotropic")||b.getExtension("WEBKIT_EXT_texture_filter_anisotropic")
}else{if(c==="WEBGL_compressed_texture_s3tc"){a=b.getExtension("WEBGL_compressed_texture_s3tc")||b.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||b.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc")
}else{if(c==="WEBGL_compressed_texture_pvrtc"){a=b.getExtension("WEBGL_compressed_texture_pvrtc")||b.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")
}else{a=b.getExtension(c)}}}if(a===null){this.extensions[c]=null;return null}this.extensions[c]=a;
return a};k.exports=i},{}],567:[function(E,F,A){var w=E("./WebGLRenderer"),H=E("./Color"),G=E("./TextureController"),u=E("./vertexShader"),t=E("@marcom/ac-event-emitter-micro").EventEmitterMicro,B=E("@marcom/ac-object/defaults"),z=E("@marcom/ac-object/clone"),C=E("@marcom/ac-clock"),v=E("@marcom/ac-dom-emitter").DOMEmitter,x=E("@marcom/ac-viewport").Viewport;
var D={sizes:{},vertexShader:u,antialias:false,preserveDrawingBuffer:false,transparent:false,mipmap:1,reloadOnBreakpoint:false,clearColor:0,autoClearColor:false,allowXLarge:false,backgroundOpacity:0,vertexShadersPath:null,fragmentShadersPath:null,invertX:false,invertY:false,uniforms:{},minFilter:"LINEAR_MIPMAP_LINEAR",magFilter:"LINEAR"};
var s={update:"update",draw:"draw",textureLoadStart:"texture-load-start",textureReloadStart:"texture-reload-start",textureLoad:"texture-load",texturesComplete:"textures-complete",resize:"resize"};
function I(a){t.call(this);this.options=B(D,a||{});this.clock=a.clock||C;this.className=a.className||this.className;
this.activeClassName=a.activeClassName||this.activeClassName;this._currentSize={};
this._textureController=null;this._texturesReady=true;this._shouldUpdate=true;this._progressValue=null;
this._renderingReady=false;this._didBindBreakpoint=false;this._renderCount=0;this._didRender=false;
this._textureKeyMap={};this._textureValMap={};this._textureUpdateMap={};this.devicePixelRatio=this._getDevicePixelRatio();
this._breakpointName=this.getCurrentBreakpointName();this._setBreakpointSizes();
this._boundOnUpdate=this._onUpdate.bind(this);this._boundOnDraw=this._onDraw.bind(this);
this.initialize();this.domEmitter=new v(this.el);this.clock.on("update",this._boundOnUpdate);
this.clock.on("draw",this._boundOnDraw);if(this._getSizesLength()>1||this.options.reloadOnBreakpoint){this._didBindBreakpoint=true;
this._boundOnShaderPlayer2DBreakpoint=this._onShaderPlayer2DBreakpoint.bind(this);
x.on("breakpoint",this._boundOnShaderPlayer2DBreakpoint)}this._bindDOMEvents()}var y=I.prototype=Object.create(t.prototype);
y.rendersBeforeVisible=0;y.className="webgl-object";y.activeClassName="active";
y.initialize=function(){this.options.uniforms=this._appendIncludedUniforms(this.options.uniforms);
this.renderer=this.createRenderer();if(this.options.textures){this._setTextureUniforms(this.options.textures)
}this._initializeRenderer();this.el=this.renderer.el;this.el.className=this.className;
this.setSize()};y.load=function(){if(!this._textureController){return}this.trigger(s.textureLoadStart);
this._textureController.load()};y.start=function(){this.clock.start()};y.stop=function(){this.clock.stop()
};y.render=function(){if(!this.renderer||!this._texturesReady){return}if(!this._didRender){this._setInitialUniforms();
this._didRender=true}this._renderCount++;if(!this._renderingReady){if(this._renderCount<this.rendersBeforeVisible){return
}this.setActive()}this.renderer.render(this.scene,this.camera)};y.createRenderer=function(){return new w(this,this._getRendererOptions())
};y.setClearColor=function(a){a=a||this.options.clearColor;this.options.clearColor=a;
this.renderer.setClearColor(this._getClearColor(a))};y.setBackgroundOpacity=function(a){this.options.backgroundOpacity=a;
this.setClearColor()};y.setTextureMagFilter=function(c,b){var a=this.getTexture(c);
if(!a&&this.renderer.context[b]!=="undefined"){return null}a.texture.magFilter=this.renderer.context[b];
return true};y.setTextureMinFilter=function(c,b){var a=this.getTexture(c);if(!a&&this.renderer.context[b]!=="undefined"){return null
}a.texture.minFilter=this.renderer.context[b];return true};y.createTextureController=function(a){a=a||{};
if(this.options.allowXLarge){a.allowXLarge=true}if(this.options.magFilter){a.magFilter=this.options.magFilter
}if(this.options.minFilter){a.minFilter=this.options.minFilter}this._textureController=new G(this,a);
this._boundOnTextureControllerLoad=this._onTextureControllerLoad.bind(this);this._boundOnTextureControllerComplete=this._onTextureControllerComplete.bind(this);
this._boundOnTextureControllerReadyStateChanged=this._onTextureControllerReadyStateChanged.bind(this);
this._textureController.on("load",this._boundOnTextureControllerLoad);this._textureController.on("complete",this._boundOnTextureControllerComplete);
this._textureController.on("readystatechanged",this._boundOnTextureControllerReadyStateChanged)
};y.getSizesForBreakpoint=function(a){a=a||x.getBreakpoint().name;if(!this.options.sizes[a]){a="defaults"
}return{name:a,sizes:this.options.sizes[a]}};y.getUniform=function(a){if(!this.renderer){return null
}return this.renderer.getUniform(a)};y.setUniform=function(b,a){if(!this.renderer){return false
}return this.renderer.setUniform(b,a)};y.getAttribute=function(a){if(!this.renderer){return null
}return this.renderer.getAttribute(a)};y.setAttribute=function(b,a){if(!this.renderer){return false
}return this.renderer.setAttribute(b,a)};y.setUniforms=function(a){if(typeof a!=="object"){return false
}var b;for(b in a){if(a.hasOwnProperty(b)){this.setUniform(b,a[b])}}};y.setSize=function(a,b){if(typeof a!=="undefined"){this.width=a
}if(typeof b!=="undefined"){this.height=b}this._setResolution();if(this.renderer){this.renderer.setSize(this.width*this.devicePixelRatio,this.height*this.devicePixelRatio,this.options.mipmap)
}if(this.el){this.el.style.width=this.width+"px";this.el.style.height=this.height+"px"
}};y.setBasePath=function(a){if(!this._textureController){return}this._textureController.options.basePath=a
};y.setActive=function(){this.el.classList.add(this.activeClassName);this._renderingReady=true
};y.setInactive=function(){this.el.classList.remove(this.activeClassName);this._renderCount=0;
this._renderingReady=false};y.getTexture=function(a){if(!this.renderer||!this._textureController){return null
}if(typeof this._textureKeyMap[a]!=="undefined"){a=this._textureKeyMap[a]}return this._textureController.getTexture(a)
};y.setTexture=function(b,a){};y.getCurrentBreakpointName=function(){var a=x.getBreakpoint().name;
if(!this.options.allowXLarge&&a==="xlarge"){a="large"}return a};y.getTextures=function(){var b={};
var a;for(a in this._textureKeyMap){if(this._textureKeyMap.hasOwnProperty(a)){b[a]=this.getTexture(a)
}}return b};y.getTextureControllerTextures=function(){if(!this._textureController){return null
}var b={};var a,c=this._textureController._textureLoader.textures;for(a in c){if(c.hasOwnProperty(a)){b[a]=c[a].texture
}}return b};y.refreshTexture=function(a){this._textureUpdateMap[a]=true};y.destroy=function(){this.stop();
if(this._textureController){this._textureController.destroy()}if(this._didBindBreakpoint){x.off("breakpoint",this._boundOnShaderPlayer2DBreakpoint)
}this.domEmitter.destroy();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}t.prototype.destroy.call(this)};y._onTextureControllerLoad=function(a){this.trigger(s.textureLoad,a)
};y._onTextureControllerComplete=function(){this._texturesReady=true;this.trigger(s.texturesComplete)
};y._onTextureControllerReadyStateChanged=function(a){this._texturesReady=a.texturesReady
};y._setTextureUniforms=function(d){var b,c=this.renderer.context,a;for(b in d){if(d.hasOwnProperty(b)){a=d[b];
if(!this._textureController){this.createTextureController()}this._texturesRequired++;
this._textureKeyMap[b]=a.name;this._textureValMap[a.name]=b;this.options.uniforms[b]={type:"sampler2D",value:this._textureController.createTexture(c,a.name,a)}
}}};y._setTime=function(a){this.setUniform("time",a)};y._setResolution=function(){this.setUniform("resolution",[this.width,this.height])
};y._setPointer=function(b,a){if(this.options.invertX){b=1-b}if(this.options.invertY){a=1-a
}this.setUniform("pointer",[b,a])};y._getDevicePixelRatio=function(){if(this.options.devicePixelRatio){return this.options.devicePixelRatio
}return window.devicePixelRatio||1};y._onShaderPlayer2DBreakpoint=function(b){var a=this.getCurrentBreakpointName();
if(this._breakpointName===a){return}this._breakpointName=a;if(this._shouldChangeSize(a)){this._setBreakpointSizes()
}if(this.options.reloadOnBreakpoint&&this._textureController){this._texturesReady=false;
this.setInactive();this._textureController.load();this.trigger(s.textureReloadStart)
}};y._getSizesLength=function(){return Object.keys(this.options.sizes).length};
y._shouldChangeSize=function(a){var b=this.getSizesForBreakpoint(a);if(b.sizes.width===this._currentSize.sizes.width&&b.sizes.height===this._currentSize.sizes.height){return false
}return true};y._setBreakpointSizes=function(){var a=this.getSizesForBreakpoint();
this._currentSize=a;this.setSize(a.sizes.width,a.sizes.height);this.trigger(s.resize)
};y._appendIncludedUniforms=function(a){a=a||{};if(!a.progress){a.progress={type:"float",value:0}
}if(!a.time){a.time={type:"float",value:0}}if(!a.resolution){a.resolution={type:"vec2",value:[this.width,this.height]}
}if(!a.pointer){a.pointer={type:"vec2",value:[0,0]}}return z(a,true)};y._setInitialUniforms=function(){if(!this.options||!this.options.uniforms){return
}var a;for(a in this.options.uniforms){if(this.options.uniforms.hasOwnProperty(a)){this.setUniform(a,this.options.uniforms[a].value)
}}};y._onUpdate=function(a){this._setTime(a.time);this.trigger(s.update,a)};y._onDraw=function(a){this.render();
this.trigger(s.draw,a)};y._refreshTexture=function(b){var a=this.getTexture(b);
if(!a){return null}a.texture.setPixels(a.el)};y._bindDOMEvents=function(){this.domEmitter.on("mousemove",this._handleMouseMove,this);
this.domEmitter.on("touchmove",this._handleTouchMove,this)};y._getClearColor=function(b){var a=new H(b);
a.z=this.options.backgroundOpacity;return a};y._initializeRenderer=function(){this.renderer.initialize(this._getRendererOptions())
};y._getRendererOptions=function(){return{clearColor:this._getClearColor(this.options.clearColor),transparent:this.options.transparent,fragmentShader:this.options.fragmentShader,vertexShader:this.options.vertexShader,uniforms:this.options.uniforms,antialias:this.options.antialias}
};y._handleMouseMove=function(a){this._setPointer(a.originalEvent.offsetX/this.width,1-a.originalEvent.offsetY/this.height)
};y._handleTouchMove=function(a){this._setPointer(a.originalEvent.touches[0].offsetX/this.width,1-a.originalEvent.touches[0].offsetY/this.height)
};F.exports=I},{"./Color":565,"./TextureController":568,"./WebGLRenderer":569,"./vertexShader":570,"@marcom/ac-clock":499,"@marcom/ac-dom-emitter":520,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/clone":457,"@marcom/ac-object/defaults":459,"@marcom/ac-viewport":637}],568:[function(j,q,k){var n=j("@marcom/ac-event-emitter-micro").EventEmitterMicro,l=j("@marcom/ac-object/defaults"),m=j("@marcom/ac-texture-loader").TextureLoader;
var o;var p=function(b,a){n.call(this);this.options=a||{};this.controller=b;this.options.basePath=this.options.basePath||window.location.pathname;
this._textureLoader=new m(this.options);this._texturesRequired=0;this._texturesLoaded=0;
this._textureLoader.on("load",this._handleTextureLoaderLoaded.bind(this))};o=p.prototype=Object.create(n.prototype);
o.createTexture=function(a,b,c){if(this._textureLoader.textures[b]){throw ('Existing texture "'+b+'" already registered.');
return}if(!a){throw ("Textures require a WebGL context in order to be created.");
return}c=l(this.options,c||{});this._textureLoader.createTexture(a,b,c);this._texturesRequired++;
return this.getTexture(b)};o.getTexture=function(a){if(!this._textureLoader){return null
}return this._textureLoader.textures[a]};o.load=function(b){b=l(this.options,b||{});
this._texturesLoaded=0;if(!this._textureLoader){return}var a;for(a in this._textureLoader.textures){if(this._textureLoader.textures.hasOwnProperty(a)){this._textureLoader.load(a,b)
}}};o.destroy=function(){this._textureLoader.destroy();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}n.prototype.destroy.call(this)};o._handleTextureLoaderLoaded=function(a){if(this.controller&&this.controller.renderer){var c=this.controller._textureValMap[a.name];
var b=a.el.width,d=a.el.height;if(a.el instanceof HTMLVideoElement){b=a.el.videoWidth;
d=a.el.videoHeight}if(this._isPowerOfTwo(b)&&this._isPowerOfTwo(d)){a.texture.generateMipmap();
if(this.options.magFilter){a.texture.magFilter=a.texture.gl[this.options.magFilter]
}if(this.options.minFilter){a.texture.minFilter=a.texture.gl[this.options.minFilter]
}}else{a.texture.magFilter=a.texture.gl.LINEAR;a.texture.minFilter=a.texture.gl.LINEAR;
a.texture.wrapT=a.texture.gl.CLAMP_TO_EDGE;a.texture.wrapS=a.texture.gl.CLAMP_TO_EDGE
}this.controller.renderer.bindTexture(c)}this.trigger("load",a);this._texturesLoaded++;
if(this._texturesLoaded===this._texturesRequired){this.trigger("complete")}};o._isPowerOfTwo=function(a){return(a&(a-1))===0
};q.exports=p},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-object/defaults":459,"@marcom/ac-texture-loader":539}],569:[function(u,w,r){var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro,p=u("./ExtensionsController"),t=u("a-big-triangle"),v=u("gl-shader-core");
var q;var s={clearDepth:1,clearColor:[0,0,0,0],clearStencil:0};var m=["OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_standard_derivatives"];
var o=function(a,c){n.call(this);this.options=this._initializeOptions(c);this.controller=a;
var d=document.createElement("canvas");var b=d.getContext("webgl",this.options)||d.getContext("experimental-webgl",this.options);
if(!b){this.trigger("error","Unable to initialize WebGL");return null}this.el=d;
this.context=b};q=o.prototype=Object.create(o.prototype);q.initialize=function(d){var b=this.context;
this.options=this._initializeOptions(d);this._shouldClearColor=true;this.options._transformedUniforms=this.transformShaderParameters(this.options.uniforms);
if(this.options.attributes){this.options._transformedAttributes=this.transformShaderParameters(this.options.attributes)
}var f={};f.clearFlags=this.options.clearFlags===undefined?(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT):this.options.clearFlags;
var c;for(c in s){if(s.hasOwnProperty(c)){f[c]=s[c];if(typeof this.options[c]!=="undefined"){f[c]=this.options[c]
}}}this._renderSettings=f;this.shader=this.createShader(b,this.options.vertexShader,this.options.fragmentShader,this.options._transformedUniforms,this.options._transformedAttributes);
b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,true);b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
this.extensions=new p(this.context);var a=m.length;for(c=0;c<a;c++){this.extensions.get(m[c])
}this.bindShader()};q.createShader=function(d,b,g,a,f){var c=this._normalizeShaderParams({context:d,vertexShader:b,fragmentShader:g,uniforms:a||[],attributes:f||[]});
return v(c.context,c.vertexShader,c.fragmentShader,c.uniforms,c.attributes)};q.linkProgram=function(c,a,b){var d=c.createProgram();
c.attachShader(d,a);c.attachShader(d,b);c.linkProgram(d);c.useProgram(d)};q.bindShader=function(){this.shader.bind()
};q.bindTextures=function(){if(!this.controller||!this.controller.options||!this.controller.options.textures){return
}var b,a=this.controller.options.textures;for(b in a){if(a.hasOwnProperty(b)){this.bindTexture(b)
}}};q.bindTexture=function(a,b){if(b||this.controller._textureUpdateMap[a]){this.controller._refreshTexture(a);
this.controller._textureUpdateMap[a]=false}var c=this.controller.getTexture(a);
if(!c){return}this.shader.uniforms[a]=c.texture.bind(c.unit)};q.setClearColor=function(a){this._renderSettings.clearColor=a;
this._shouldClearColor=true};q.clearColor=function(){var b=this.context,a=this._renderSettings;
b.bindFramebuffer(b.FRAMEBUFFER,null);if(a.clearFlags&b.STENCIL_BUFFER_BIT){b.clearStencil(a.clearStencil)
}if(a.clearFlags&b.COLOR_BUFFER_BIT){b.clearColor(a.clearColor.w,a.clearColor.x,a.clearColor.y,a.clearColor.z)
}if(a.clearFlags&b.DEPTH_BUFFER_BIT){b.clearDepth(a.clearDepth)}if(a.clearFlags){b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT|b.STENCIL_BUFFER_BIT)
}};q.render=function(){if(this.options.autoClearColor||this._shouldClearColor){this.clearColor();
this._shouldClearColor=false}this.bindShader();this.bindTextures();t(this.context)
};q.updateShader=function(a){a=a||{};if(a.uniforms){a.uniforms=this.transformShaderParameters(a.uniforms)
}a.vertexShader=a.vertexShader||this.options.vertexShader;a.fragmentShader=a.fragmentShader||this.options.fragmentShader;
a.uniforms=a.uniforms||this.options.uniforms;a.attributes=a.attributes||this.options.attributes;
a=this._normalizeShaderParams(a);this.shader.dispose();this.shader=this.createShader(this.context,a.vertexShader,a.fragmentShader,a.uniforms,a.attributes);
this.options.vertexShader=a.vertexShader;this.options.fragmentShader=a.fragmentShader;
this.options.uniforms=a.uniforms;this.options.attributes=a.attributes};q.getUniform=function(a){if(!this._hasUniform(a)){return null
}return this.options.uniforms[a].value};q.setUniform=function(a,b){if(!this._hasUniform(a)){return
}this.options.uniforms[a].value=b;this.shader.uniforms[a]=b};q.getAttribute=function(a,b){if(!this.shader){return null
}return this.shader.attributes[a]};q.setAttribute=function(a,b){if(!this.shader){return
}this.shader.attributes[a]=b};q.setSize=function(f,a,c){var d=f*c,b=a*c;this.el.setAttribute("width",d);
this.el.setAttribute("height",b);this.el.style.width=f+"px";this.el.style.height=a+"px";
this.context.viewport(0,0,(d)|0,(b)|0)};q.transformShaderParameters=function(b){b=b||{};
var a=[];var c;for(c in b){if(b.hasOwnProperty(c)){a.push({name:c,type:b[c].type})
}}return a};q.destroy=function(){this.shader.dispose();n.prototype.destroy.call(this)
};q._normalizeShaderParams=function(a){if(this.options.setFloatPrecision!==false){a.fragmentShader="precision highp float;\n"+a.fragmentShader
}return a};q._initializeOptions=function(a){a.alpha=a.transparent;return a};q._hasUniform=function(a){return(this.options||this.options.uniforms||this.options.uniforms[a])
};w.exports=o},{"./ExtensionsController":566,"@marcom/ac-event-emitter-micro":201,"a-big-triangle":558,"gl-shader-core":563}],570:[function(d,g,f){g.exports="attribute vec3 position;					varying vec2 vUV;					void main() {						gl_Position = vec4(position, 1.0);						vUV = position.xy * 0.5 + 0.5;					}"
},{}],571:[function(d,g,f){g.exports={SiriPlayer:d("./ac-siri-player/SiriPlayer")}
},{"./ac-siri-player/SiriPlayer":572}],572:[function(r,s,n){var u=r("@marcom/ac-shader-player-2d").ShaderPlayer2D,p=r("./fragmentShader.js"),l=r("./white-fragmentShader.js"),q=r("@marcom/ac-object/defaults");
var o={antialias:false,mipmap:1,alpha:false,transparent:false,fragmentShader:p,uniforms:{fw:{type:"float",value:0},fj:{type:"vec2",value:[0,0]},ee:{type:"float",value:1.5},kq:{type:"float",value:0},et:{type:"float",value:0.2},dq:{type:"float",value:1.5},ww:{type:"float",value:0.15},qa:{type:"float",value:0.5},te:{type:"float",value:0.05},jf:{type:"vec2",value:[0,0]},qd:{type:"vec2",value:[1,1]}},sizes:{defaults:{width:800,height:180}}};
function t(a){a=a||{};a.uniforms=q(o.uniforms,a.uniforms);a=q(o,a);if(a.white===true){a.fragmentShader=l
}u.call(this,a);this.setUniform("fj",this.getUniform("resolution"));this.on("update",this._updateChangedUniforms.bind(this))
}var m=t.prototype=Object.create(u.prototype);m._updateChangedUniforms=function(d){this.setUniform("fw",this.getUniform("time")/1000);
this.setUniform("fj",this.getUniform("resolution"));var b=this.getUniform("kq"),f=this.getUniform("ee"),c=(d.time-this.clock.lastFrameTime)/1000;
var a=b+(c*f);this.setUniform("kq",a)};s.exports=t},{"./fragmentShader.js":573,"./white-fragmentShader.js":574,"@marcom/ac-object/defaults":459,"@marcom/ac-shader-player-2d":564}],573:[function(d,g,f){g.exports="/* * Description : Array and textureless GLSL 2D/3D/4D simplex  *            noise functions. *     Author : Ian McEwan, Ashima Arts. * Maintainer : stegu *   Lastmod : 20110822 (ijm) *   License : Copyright (C) 2011 Ashima Arts. All rights reserved. *             Distributed under the MIT License. See LICENSE file. *             https://github.com/ashima/webgl-noise *             https://github.com/stegu/webgl-noise */vec3 mod289(vec3 x) {  return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 mod289(vec4 x) {  return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 permute(vec4 x) {     return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){  return 1.79284291400159 - 0.85373472095314 * r;}float snoise(vec3 v)  {   const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);  vec3 i  = floor(v + dot(v, C.yyy) );  vec3 x0 =   v - i + dot(i, C.xxx) ;  vec3 g = step(x0.yzx, x0.xyz);  vec3 l = 1.0 - g;  vec3 i1 = min( g.xyz, l.zxy );  vec3 i2 = max( g.xyz, l.zxy );  vec3 x1 = x0 - i1 + C.xxx;  vec3 x2 = x0 - i2 + C.yyy;  vec3 x3 = x0 - D.yyy;  i = mod289(i);   vec4 p = permute( permute( permute(              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));  float n_ = 0.142857142857;  vec3  ns = n_ * D.wyz - D.xzx;  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  vec4 x_ = floor(j * ns.z);  vec4 y_ = floor(j - 7.0 * x_ );  vec4 x = x_ *ns.x + ns.yyyy;  vec4 y = y_ *ns.x + ns.yyyy;  vec4 h = 1.0 - abs(x) - abs(y);  vec4 b0 = vec4( x.xy, y.xy );  vec4 b1 = vec4( x.zw, y.zw );  vec4 s0 = floor(b0)*2.0 + 1.0;  vec4 s1 = floor(b1)*2.0 + 1.0;  vec4 sh = -step(h, vec4(0.0));  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;  vec3 p0 = vec3(a0.xy,h.x);  vec3 p1 = vec3(a0.zw,h.y);  vec3 p2 = vec3(a1.xy,h.z);  vec3 p3 = vec3(a1.zw,h.w);  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));  p0 *= norm.x;  p1 *= norm.y;  p2 *= norm.z;  p3 *= norm.w;  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);  m = m * m;  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),                                 dot(p2,x2), dot(p3,x3) ) );  }/**  * @copyright 2016 Apple Inc. All rights reserved. */varying vec2 vUV;uniform float fw;uniform vec2 fj;uniform float et;uniform float dq;uniform float ee;uniform float kq;uniform vec2 qd;uniform vec2 jf;uniform float ww;uniform float qa;uniform float te; void main() {if ((vUV.x< 1.0-qd.x-jf.x)||(vUV.y<1.0-qd.y-jf.y)){return;}vec2 ge=vUV+jf;float gd=snoise(vec3(0.,0.,fw));float wa=snoise(vec3(0.,0.,kq*3.))*0.3+0.7;float qf=snoise(vec3(0.,0.,kq*3.))*0.1+0.9;vec2 dz=vec2(kq+gd*0.1*ee,(ge.x-0.5)/et/qf);vec3 yf=abs(vec3(snoise(vec3(dz,1.0)),snoise(vec3(dz,5.0)),snoise(vec3(dz,9.0))))*0.5+0.01;yf *=min(1.,smoothstep(ww,qa+ww,ge.x)*smoothstep(1.-ww,1.-ww-qa,ge.x))*wa;float da=abs(ge.y-0.5);vec3 kp=smoothstep(yf+(dq/fj.y),yf,vec3(da));kp*=smoothstep(0.25,0.0,yf)*0.7+0.3;kp*= min(1., smoothstep(0., te, ge.x)*smoothstep(1.,1.-te, ge.x));vec4 ca=vec4(1.0,0.176,0.333,.1)*kp.x;vec4 op=vec4(0.251,1.0,0.639,.1)*kp.y;vec4 sf=vec4(0.0,0.478,1.0,.1)*kp.z;gl_FragColor=1.0-(1.0-ca)*(1.0-op)*(1.0-sf);}"
},{}],574:[function(d,g,f){g.exports="/* * Description : Array and textureless GLSL 2D/3D/4D simplex  *            noise functions. *     Author : Ian McEwan, Ashima Arts. * Maintainer : stegu *   Lastmod : 20110822 (ijm) *   License : Copyright (C) 2011 Ashima Arts. All rights reserved. *             Distributed under the MIT License. See LICENSE file. *             https://github.com/ashima/webgl-noise *             https://github.com/stegu/webgl-noise */vec3 mod289(vec3 x) {  return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 mod289(vec4 x) {  return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 permute(vec4 x) {     return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){  return 1.79284291400159 - 0.85373472095314 * r;}float snoise(vec3 v)  {   const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);  vec3 i  = floor(v + dot(v, C.yyy) );  vec3 x0 =   v - i + dot(i, C.xxx) ;  vec3 g = step(x0.yzx, x0.xyz);  vec3 l = 1.0 - g;  vec3 i1 = min( g.xyz, l.zxy );  vec3 i2 = max( g.xyz, l.zxy );  vec3 x1 = x0 - i1 + C.xxx;  vec3 x2 = x0 - i2 + C.yyy;  vec3 x3 = x0 - D.yyy;  i = mod289(i);   vec4 p = permute( permute( permute(              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));  float n_ = 0.142857142857;  vec3  ns = n_ * D.wyz - D.xzx;  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  vec4 x_ = floor(j * ns.z);  vec4 y_ = floor(j - 7.0 * x_ );  vec4 x = x_ *ns.x + ns.yyyy;  vec4 y = y_ *ns.x + ns.yyyy;  vec4 h = 1.0 - abs(x) - abs(y);  vec4 b0 = vec4( x.xy, y.xy );  vec4 b1 = vec4( x.zw, y.zw );  vec4 s0 = floor(b0)*2.0 + 1.0;  vec4 s1 = floor(b1)*2.0 + 1.0;  vec4 sh = -step(h, vec4(0.0));  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;  vec3 p0 = vec3(a0.xy,h.x);  vec3 p1 = vec3(a0.zw,h.y);  vec3 p2 = vec3(a1.xy,h.z);  vec3 p3 = vec3(a1.zw,h.w);  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));  p0 *= norm.x;  p1 *= norm.y;  p2 *= norm.z;  p3 *= norm.w;  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);  m = m * m;  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),                                 dot(p2,x2), dot(p3,x3) ) );  }/** * @copyright 2016 Apple Inc. All rights reserved.*//*  time -> fw  resolution -> fj  speed -> ee  timeSpeed -> kq  scale -> et  thickness -> dq  envelopeStart -> ww  envelope2 -> te  offset -> jf  limit -> qd */varying vec2 vUV;uniform float fw;uniform vec2 fj;uniform float et;uniform float dq;uniform float ee;uniform float kq;uniform vec2 qd;uniform vec2 jf;uniform float ww;uniform float qa;uniform float te;void main() {float gd = snoise(vec3(0., 0., fw));float wa = snoise(vec3(0., 0., kq*3.))*0.3+0.7;float qf = snoise(vec3(0., 0., kq*3.))*0.1+0.9;vec2  dz = vec2(kq+gd*0.1*ee,(vUV.x-0.5)/et/qf);vec3 yf = abs(vec3(snoise(vec3(dz, 1.0)), snoise(vec3(dz, 5.0)), snoise(vec3(dz, 9.0))))*0.5;yf *= min(1., smoothstep(    ww,    qa+ww, vUV.x)            * smoothstep( 1.-ww, 1.-ww-qa, vUV.x))* wa;float p = abs(vUV.y-0.5);vec3 kp = smoothstep(yf,yf-(dq/fj.y),vec3(p));vec3 dr = vec3(255., 69., 61.)/255.;vec3 lr = vec3(255., 103., 92.)/255.;vec3 dg = vec3(50., 201., 69.)/255.;vec3 lg = vec3(164., 255., 196.)/255.;vec3 db = vec3(21., 124., 255.)/255.;vec3 lb = vec3(80., 227., 255.)/255.;vec3 rr   = mix(dr, lr, yf.x*6.);vec3 gg   = mix(dg, lg, yf.y*6.);vec3 bb   = mix(db, lb, yf.z*6.);vec4 xx       = vec4(rr, 1. )*( kp.x);vec4 yy       = vec4(gg, 1. )*( kp.y);vec4 zz       = vec4(bb, 1. )*( kp.z); gl_FragColor =  1.-(1.-xx)*(1.-yy)*(1.-zz);}"
},{}],575:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;var i=l("@marcom/ac-feature/cssPropertyAvailable");
k.exports=function j(d,a,b,c,f){if(i("opacity")){f=f||{};if(c){f.propsFrom=f.propsFrom||{};
f.propsFrom.opacity=a;return m.to(d,c,{opacity:b},f)}else{d.style.opacity=b;if(typeof f.onStart==="function"){f.onStart()
}if(typeof f.onComplete==="function"){f.onComplete()}}}else{d.style.visibility=(b)?"visible":"hidden";
if(typeof f.onStart==="function"){f.onStart()}if(typeof f.onComplete==="function"){f.onComplete()
}}}},{"@marcom/ac-eclipse":150,"@marcom/ac-feature/cssPropertyAvailable":222}],576:[function(k,j,m){var l=k("@marcom/ac-eclipse").Clip;
var h=k("@marcom/ac-feature/cssPropertyAvailable");j.exports=function i(b,a,c){c=c||{};
if(h("opacity")){if(a){return l.to(b,a,{opacity:1},c)}else{b.style.opacity=1;if(typeof c.onStart==="function"){c.onStart()
}if(typeof c.onComplete==="function"){c.onComplete()}}}else{b.style.visibility="visible";
if(typeof c.onStart==="function"){c.onStart()}if(typeof c.onComplete==="function"){c.onComplete()
}}}},{"@marcom/ac-eclipse":150,"@marcom/ac-feature/cssPropertyAvailable":222}],577:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var i=l("@marcom/ac-feature/cssPropertyAvailable");k.exports=function j(b,a,c){c=c||{};
if(i("opacity")){if(a){return m.to(b,a,{opacity:0},c)}else{b.style.opacity=0;if(typeof c.onStart==="function"){c.onStart()
}if(typeof c.onComplete==="function"){c.onComplete()}}}else{b.style.visibility="hidden";
if(typeof c.onStart==="function"){c.onStart()}if(typeof c.onComplete==="function"){c.onComplete()
}}}},{"@marcom/ac-eclipse":150,"@marcom/ac-feature/cssPropertyAvailable":222}],578:[function(m,l,o){var n=m("@marcom/ac-eclipse").Clip;
var k=m("@marcom/ac-dom-styles");var i=m("@marcom/ac-feature/cssPropertyAvailable");
l.exports=function j(c,f,g,b,d){d=d||{};var a;if(i("transition")){a={transform:{translateX:f+"px",translateY:g+"px"}}
}else{a={left:f+"px",top:g+"px"}}if(b){return n.to(c,b,a,d)}else{k.setStyle(c,a);
if(typeof d.onStart==="function"){d.onStart()}if(typeof d.onComplete==="function"){d.onComplete()
}}}},{"@marcom/ac-dom-styles":68,"@marcom/ac-eclipse":150,"@marcom/ac-feature/cssPropertyAvailable":222}],579:[function(l,k,m){var h=l("@marcom/ac-feature/cssPropertyAvailable");
var i=l("./move");k.exports=function j(b,d,a,c){return i(b,d,0,a,c)}},{"./move":578,"@marcom/ac-feature/cssPropertyAvailable":222}],580:[function(j,i,g){var k=j("@marcom/ac-eclipse").Clip;
i.exports=function h(y,d,u,w,a){a=a||{};var x=y===window;var b;var f;if(x){b=y.scrollX;
f=y.scrollY}else{b=y.scrollLeft;f=y.scrollTop}var s={x:b,y:f};var c={x:d,y:u};if(typeof a.onDraw==="function"){var t=a.onDraw
}var v=function(l){if(x){y.scrollTo(s.x,s.y)}else{y.scrollLeft=s.x;y.scrollTop=s.y
}if(t){t.call(this,l)}};a.onDraw=v;return k.to(s,w,c,a)}},{"@marcom/ac-eclipse":150}],581:[function(k,j,g){var h=k("./scroll");
j.exports=function i(b,m,a,c){var d=b===window;var f;if(d){f=b.scrollY}else{f=b.scrollTop
}return h(b,m,f,a,c)}},{"./scroll":580}],582:[function(f,i,g){var h=f("./ac-threejs-loader/ThreeJSLoader");
i.exports=new h()},{"./ac-threejs-loader/ThreeJSLoader":583}],583:[function(h,l,i){var m=h("@marcom/ac-cname").cname;
function j(a){this._boundPromiseLoad=this._promiseLoad.bind(this)}var k=j.prototype;
k.versionNumber=71;k.didCreateScriptTag=false;k.THREE_GLOBAL_VARIABLE_NAME="THREE";
k.BASE_PATH="/ac/three";k.FILE_NAME="three";k.FILE_EXTENSION="js";k.load=function(a){a=a||{};
if(typeof a.versionNumber==="number"){this.versionNumber=a.versionNumber}return new Promise(this._boundPromiseLoad)
};k.isLoaded=function(){return !!window[this.THREE_GLOBAL_VARIABLE_NAME]};k.getFilePath=function(){return m(this.BASE_PATH+"/"+this.versionNumber+"/"+this.FILE_NAME+"."+this.FILE_EXTENSION)
};k._promiseLoad=function(a,b){function c(){this._handleResolve(a);this.script.removeEventListener("load",d);
d=a=null}if(this.isLoaded()){this._handleResolve(a);return}var d=c.bind(this);if(!this.didCreateScriptTag){var f=document.createElement("script");
f.src=this.getFilePath();f.async=true;f.addEventListener("load",d);document.body.appendChild(f);
this.didCreateScriptTag=true;this.script=f}else{this.script.addEventListener("load",d)
}};k._handleResolve=function(a){a(window[this.THREE_GLOBAL_VARIABLE_NAME])};l.exports=j
},{"@marcom/ac-cname":17}],584:[function(f,i,g){var h={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
i.exports=f("./parseUserAgent")(h)},{"./parseUserAgent":587}],585:[function(d,g,f){g.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],586:[function(d,g,f){g.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(a){return(a.ua.indexOf("Edge")>-1||a.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(a){return(a.ua.indexOf("Safari")>-1&&a.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(a){return(a.ua.indexOf("IE")>-1||a.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var a=false;if(document.documentMode){a=parseInt(document.documentMode,10)
}return a}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(a){return(a.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(a){return(a.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(a){return(a.ua.indexOf("iPhone")>-1||a.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(a){return(a.platform.indexOf("Linux")>-1&&a.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],587:[function(r,s,p){var q=r("./defaults");var m=r("./dictionary");function n(a){return new RegExp(a+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function o(g,a){if(typeof g.parseVersion==="function"){return g.parseVersion(a)
}else{var d=g.version||g.userAgent;if(typeof d==="string"){d=[d]}var f=d.length;
var c;for(var b=0;b<f;b++){c=a.match(n(d[b]));if(c&&c.length>1){return c[1].replace(/_/g,".")
}}}}function k(a,d,g){var h=a.length;var f;var c;for(var i=0;i<h;i++){if(typeof a[i].test==="function"){if(a[i].test(g)===true){f=a[i].name
}}else{if(g.ua.indexOf(a[i].userAgent)>-1){f=a[i].name}}if(f){d[f]=true;c=o(a[i],g.ua);
if(typeof c==="string"){var b=c.split(".");d.version.name=c;if(b&&b.length>0){d.version.major=parseInt(b[0]||0);
d.version.minor=parseInt(b[1]||0);d.version.patch=parseInt(b[2]||0)}}else{if(f==="edge"){d.version.name="12.0.0";
d.version.major="12";d.version.minor="0";d.version.patch="0"}}if(typeof a[i].parseDocumentMode==="function"){d.version.documentMode=a[i].parseDocumentMode()
}return d}}return d}function l(a){var b={};b.browser=k(m.browser,q.browser,a);b.os=k(m.os,q.os,a);
return b}s.exports=l},{"./defaults":585,"./dictionary":586}],588:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],589:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
v("@marcom/ac-polyfills/Object/keys");v("@marcom/ac-polyfills/Object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=v("@marcom/ac-dom-events/utils/addEventListener");var q=v("@marcom/ac-feature/mediaQueriesAvailable");
var u="viewport-emitter";var o="::before";var t="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function n(a){m.call(this);this._initializeElement(a);if(q()){this._updateViewport=this._updateViewport.bind(this);
p(window,"resize",this._updateViewport);p(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(t);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var r=n.prototype=Object.create(m.prototype);
r.viewport=false;r.retina=false;r._initializeElement=function(b){var a;b=b||u;a=document.getElementById(b);
if(!a){a=document.createElement("div");a.id=b;a=document.body.appendChild(a)}this._el=a
};r._getElementContent=function(){var a;if("currentStyle" in this._el){a=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();a=window.getComputedStyle(this._el,o).content}if(a){a=a.replace(/["']/g,"")
}if(a){return a}return false};r._updateViewport=function(){var a=this.viewport;
var c;var b;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(a&&this.viewport!==a){b={from:a,to:this.viewport};this.trigger("change",b);
this.trigger("from:"+a,b);this.trigger("to:"+this.viewport,b)}};r._updateRetina=function(a){var b=this.retina;
this.retina=this._retinaQuery.matches;if(b!==this.retina){this.trigger("retinachange",{from:b,to:this.retina})
}};r._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};w.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":588,"@marcom/ac-event-emitter-micro":201,"@marcom/ac-feature/mediaQueriesAvailable":233,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create","@marcom/ac-polyfills/Object/keys":"@marcom/ac-polyfills/Object/keys"}],590:[function(i,h,f){var g=i("./ViewportEmitter");
h.exports=new g()},{"./ViewportEmitter":589}],591:[function(d,g,f){arguments[4][350][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":592,dup:350}],592:[function(d,g,f){arguments[4][351][0].apply(f,arguments)
},{dup:351}],593:[function(d,g,f){g.exports={BreakpointsDelegate:d("./ac-breakpoints-delegate/BreakpointsDelegate")}
},{"./ac-breakpoints-delegate/BreakpointsDelegate":594}],594:[function(C,F,y){var D=C("@marcom/ac-shared-instance").SharedInstance,B=C("@marcom/ac-object"),r=C("@marcom/ac-window-delegate").WindowDelegate,E=C("@marcom/ac-window-delegate").WindowDelegateCustomEvent,s=C("@marcom/ac-event-emitter").EventEmitter;
var v="ac-breakpoints-delegate:BreakpointsDelegate",G="2.1.1";var u="breakpoint",t="resize orientationchange";
var A={large:{"min-width":1069,"max-width":1441,content:980,oldie:true},xlarge:{"min-width":1442,content:980},medium:{"min-width":736,"max-width":1068,content:692},small:{"min-width":320,"max-width":735,content:288,"max-device-width":768}};
var z={minWidth:"min-width",maxWidth:"max-width",maxDeviceWidth:"max-device-width",content:"content",oldIE:"oldie"};
function w(a){this._customEvent=new E(u,this._onBreakpointListenerAdded.bind(this),this._onBreakpointListenerRemoved.bind(this));
this.setBreakpoints(A)}var x=w.prototype;x.initialize=function(){this._breakpoint=null;
this._lastBreakpoint=null;this._handleOldIE();this._breakpointOrder=this._setBreakpointOrder();
if(!this._isOldIE){this._handleResize()}};x.getCustomEvent=function(){return this._customEvent
};x.getBreakpoint=function(){if(!this._customEvent.active){this._handleResize()
}return this._breakpoint};x.setBreakpoints=function(a){this.breakpoints=B.clone(a);
this.initialize()};x._handleResize=function(){var b=r.clientWidth(),a;var c,d,f,g=this._breakpointOrder.length;
for(c=0;c<g;c++){d=this._breakpointOrder[c];f=this.breakpoints[d];if(f._breakPosition>b){break
}}if(c>0){c=c-1}a=this.breakpoints[this._breakpointOrder[c]];if(!this._breakpoint){this._breakpoint=a;
return}if(a.name===this._breakpoint.name){return}this._lastBreakpoint=this._breakpoint;
this._breakpoint=a;r.trigger(u,{incoming:this._breakpoint,outgoing:this._lastBreakpoint})
};x._setBreakpointOrder=function(){var a=0,d=[],f=[],b=z.minWidth,c;for(c in this.breakpoints){if(this.breakpoints.hasOwnProperty(c)){this.breakpoints[c].name=c;
d.push(this.breakpoints[c][b])}}d.sort(function(g,h){return g-h});d.forEach(function(g){var h;
for(h in this.breakpoints){if(this.breakpoints.hasOwnProperty(h)){if(this.breakpoints[h][b]===g){f.push(h)
}}}},this);f.forEach(function(g,h){this.breakpoints[g]._breakPosition=a;if(f[h+1]){a=this.breakpoints[f[h+1]][b]
}},this);return f};x._handleOldIE=function(){var c=document.documentElement,a=z.oldIE;
if(c.className.indexOf("no-"+a)>-1||c.className.indexOf(a)===-1){return}this._isOldIE=true;
this._replaceBreakpoints(function(d){return d[a]===true});var b;for(b in this.breakpoints){if(this.breakpoints.hasOwnProperty(b)){this._breakpoint=this.breakpoints[b];
return}}};x._replaceBreakpoints=function(a){var c,b={},d;for(c in this.breakpoints){if(this.breakpoints.hasOwnProperty(c)){d=this.breakpoints[c];
if(a(d)){b[c]=B.clone(this.breakpoints[c])}}}this.breakpoints=b};x._onBreakpointListenerAdded=function(){r.on(t,this._handleResize,this)
};x._onBreakpointListenerRemoved=function(){r.off(t,this._handleResize,this)};F.exports=D.share(v,G,w)
},{"@marcom/ac-event-emitter":591,"@marcom/ac-object":456,"@marcom/ac-shared-instance":595,"@marcom/ac-window-delegate":619}],595:[function(d,g,f){arguments[4][432][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":596,dup:432}],596:[function(d,g,f){arguments[4][433][0].apply(f,arguments)
},{dup:433}],597:[function(d,g,f){arguments[4][179][0].apply(f,arguments)},{"./shared/getEventType":606,"./utils/addEventListener":609,dup:179}],598:[function(d,g,f){arguments[4][180][0].apply(f,arguments)
},{"./shared/getEventType":606,"./utils/dispatchEvent":610,dup:180}],599:[function(d,g,f){arguments[4][182][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":600,"./shared/prefixHelper":601,"./shared/windowFallbackEventTypes":602,"./utils/eventTypeAvailable":603,dup:182}],600:[function(d,g,f){arguments[4][183][0].apply(f,arguments)
},{dup:183}],601:[function(d,g,f){arguments[4][62][0].apply(f,arguments)},{dup:62}],602:[function(d,g,f){arguments[4][185][0].apply(f,arguments)
},{dup:185}],603:[function(d,g,f){arguments[4][186][0].apply(f,arguments)},{dup:186}],604:[function(d,g,f){arguments[4][187][0].apply(f,arguments)
},{dup:187}],605:[function(d,g,f){arguments[4][188][0].apply(f,arguments)},{"./shared/getEventType":606,"./utils/removeEventListener":611,dup:188}],606:[function(d,g,f){arguments[4][189][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":599,dup:189}],607:[function(d,g,f){arguments[4][191][0].apply(f,arguments)
},{dup:191}],608:[function(d,g,f){arguments[4][192][0].apply(f,arguments)},{dup:192}],609:[function(d,g,f){arguments[4][193][0].apply(f,arguments)
},{dup:193}],610:[function(d,g,f){arguments[4][194][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":"@marcom/ac-polyfills/CustomEvent",dup:194}],611:[function(d,g,f){arguments[4][195][0].apply(f,arguments)
},{dup:195}],612:[function(d,g,f){arguments[4][350][0].apply(f,arguments)},{"./ac-event-emitter/EventEmitter":613,dup:350}],613:[function(d,g,f){arguments[4][351][0].apply(f,arguments)
},{dup:351}],614:[function(d,g,f){arguments[4][374][0].apply(f,arguments)},{"./ac-dom-emitter/DOMEmitter":615,dup:374}],615:[function(d,g,f){arguments[4][375][0].apply(f,arguments)
},{"./DOMEmitterEvent":616,"@marcom/ac-dom-events/addEventListener":597,"@marcom/ac-dom-events/dispatchEvent":598,"@marcom/ac-dom-events/removeEventListener":605,"@marcom/ac-dom-traversal/matchesSelector":75,"@marcom/ac-dom-traversal/querySelectorAll":79,"ac-event-emitter":612,dup:375}],616:[function(d,g,f){arguments[4][376][0].apply(f,arguments)
},{"@marcom/ac-dom-events/preventDefault":604,"@marcom/ac-dom-events/stopPropagation":607,"@marcom/ac-dom-events/target":608,dup:376}],617:[function(d,g,f){arguments[4][350][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":618,dup:350}],618:[function(d,g,f){arguments[4][351][0].apply(f,arguments)
},{dup:351}],619:[function(d,g,f){g.exports={WindowDelegate:d("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:d("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:d("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":622,"./ac-window-delegate/WindowDelegateCustomEvent":623,"./ac-window-delegate/WindowDelegateOptimizer":624}],620:[function(h,m,i){var k=h("@marcom/ac-event-emitter").EventEmitter;
var j=function(){this._emitter=new k();this._customEvents={}};var l=j.prototype;
l.on=function(c,a,b){this._activateCustomEvents(c);this._emitterOn.apply(this,arguments);
return this};l.once=function(c,a,b){this._emitterOnce.apply(this,arguments);return this
};l.off=function(c,a,b){this._emitterOff.apply(this,arguments);this._deactivateCustomEvents(c);
return this};l.has=function(c,a,b){return this._emitter.has.apply(this._emitter,arguments)
};l.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};l.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};l.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};l.add=function(a){this._customEvents[a.name]=a};l.canHandleCustomEvent=function(a){return this._customEvents.hasOwnProperty(a)
};l.isHandlingCustomEvent=function(a){if(this._customEvents[a]&&this._customEvents[a].active){return true
}return false};l._activateCustomEvents=function(b){var d=b.split(" "),c,a,f=d.length;
for(a=0;a<f;a++){c=d[a];if(this._customEvents[c]&&!this._customEvents[c].active){this._customEvents[c].initialize();
this._customEvents[c].active=true}}};l._deactivateCustomEvents=function(b){var a;
if(!b||b.length===0){for(a in this._customEvents){if(this._customEvents.hasOwnProperty(a)){this._deactivateCustomEvent(a)
}}return}var c=b.split(" "),d=c.length;for(a=0;a<d;a++){this._deactivateCustomEvent(c[a])
}};l._deactivateCustomEvent=function(a){if(!this.has(a)&&this._customEvents[a]&&this._customEvents[a].active){this._customEvents[a].deinitialize();
this._customEvents[a].active=false}};l._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)
};l._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)};
l._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};m.exports=j
},{"@marcom/ac-event-emitter":617}],621:[function(h,m,i){var j=h("@marcom/ac-event-emitter").EventEmitter;
var k;var l=function(a){j.call(this);this.optimizers=a;this._events={};this._properties={};
this._initialize()};k=l.prototype=new j(null);k.canOptimizeEvent=function(a){return this._events.hasOwnProperty(a)
};k.canOptimizeProperty=function(a){return this._properties.hasOwnProperty(a)};
k.isOptimizingEvent=function(a){if(this._events[a]&&this._events[a].active){return true
}return false};k.isOptimizingProperty=function(a){if(this._properties[a]&&this._properties[a].active){return true
}return false};k.add=function(a){this._setOptimizerEvents(a);this._setOptimizerProperties(a);
a.on("update",this._onUpdate,this);a.on("activate",this._onActivate,this);a.on("deactivate",this._onDeactivate,this)
};k.get=function(a){if(this.isOptimizingProperty(a)){return this._properties[a].value
}return null};k.set=function(a,b){if(!this._properties[a]){return false}this._properties[a].value=b;
return this};k.getOptimizerByEvent=function(a){if(this._events[a]){return this._events[a]
}return null};k._initialize=function(){var a,b;for(a in this.optimizers){if(this.optimizers.hasOwnProperty(a)){this.add(this.optimizers[a])
}}};k._onUpdate=function(a){this.set(a.prop,a.val)};k._onActivate=function(c){var b=c.propertyNames,a,d=b.length;
for(a=0;a<d;a++){this._properties[b[a]].active=true}};k._onDeactivate=function(c){var b=c.propertyNames,a,d=b.length;
for(a=0;a<d;a++){this._properties[b[a]].active=false}};k._setOptimizerEvents=function(c){var a,b=c.eventNames,d=b.length;
for(a=0;a<d;a++){this._setOptimizerEvent(b[a],c)}};k._setOptimizerEvent=function(a,b){if(this._events[a]){return
}this._events[a]=b};k._setOptimizerProperties=function(b){var a,c=b.propertyNames,d=c.length;
for(a=0;a<d;a++){this._setOptimizerProperty(c[a])}};k._setOptimizerProperty=function(a){if(this._properties.hasOwnProperty(a)){return
}this._properties[a]={};this._properties[a].active=false;this._properties[a].value=null
};m.exports=l},{"@marcom/ac-event-emitter":617}],622:[function(x,z,v){var t;var y=x("@marcom/ac-shared-instance").SharedInstance,q=x("@marcom/ac-dom-emitter").DOMEmitter,s=x("./OptimizerController"),w=x("./CustomEventController"),u=x("./queries/queries"),p=x("./optimizers/optimizers");
var r="ac-window-delegate:WindowDelegate",A="3.0.2";function o(){this._emitter=new q(window);
this._controllers={optimizer:new s(p),customEvent:new w()};var a;for(a in u){if(u.hasOwnProperty(a)){this[a]=this._getProperty.bind(this,a);
u[a]=u[a].bind(this)}}this._bindEvents()}t=o.prototype;t.on=function(d,a,c){var b=this._seperateCustomEvents(d);
this._optimizeEvents(b.standardEvents);this._customEventOn(b.customEvents,a,c);
this._emitterOn.apply(this,arguments);return this};t.once=function(d,a,c){var b=this._seperateCustomEvents(d);
this._optimizeEvents(b.standardEvents);this._customEventOnce(b.customEvents,a,c);
this._emitterOnce.apply(this,arguments);return this};t.off=function(g,a,f){var b=this._seperateCustomEvents(g),d=false;
if(!g){d=true}this._customEventOff(b.customEvents,a,f,d);this._emitterOff.apply(this,arguments);
if(d){try{var h;for(h in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(h)&&this._shouldDeoptimizeEvent(h,true)){this._deoptimizeEvent(h)
}}this._bindEvents()}catch(c){}}return this};t.has=function(c,a,b){return this._emitter.has.apply(this._emitter,arguments)
};t.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};t.emitterTrigger=function(){this._emitter.emitterTrigger.apply(this._emitter,arguments);
return this};t.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};t.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};t.addOptimizer=function(a){this._controllers.optimizer.add(a);return this
};t.addCustomEvent=function(a){this._controllers.customEvent.add(a);return this
};t._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};t._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};t._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};t._onEventUnbound=function(a){var b=a.data.evt;
if(this._shouldDeoptimizeEvent(b)){this._deoptimizeEvent(b)}};t._customEventOn=function(c,a,b){if(c.length===0){return
}this._controllers.customEvent.on(c.join(" "),a,b)};t._customEventOnce=function(c,a,b){if(c.length===0){return
}this._controllers.customEvent.once(c.join(" "),a,b)};t._customEventOff=function(d,a,c,b){if(!b&&d.length===0){return
}if(b&&d.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(d.join(" "),a,c)
};t._getProperty=function(a,c){var b=null;if(!c){b=this._getOptimizedValue(a)}if(b===null){b=u[a].call(this,c)
}return b};t._optimizeEvents=function(b){var c,a,d=b.length;for(a=0;a<d;a++){c=b[a];
if(this._shouldOptimizeEvent(c)){this._optimizeEvent(c)}}};t._shouldOptimizeEvent=function(a){if(this._controllers.optimizer.canOptimizeEvent(a)&&!this._controllers.optimizer.isOptimizingEvent(a)){return true
}return false};t._shouldDeoptimizeEvent=function(b,a){if(this._controllers.optimizer.isOptimizingEvent(b)&&(a||this._emitter._eventEmitter._events[b].length<=1)){return true
}return false};t._optimizeEvent=function(a){var b=this._controllers.optimizer.getOptimizerByEvent(a);
b.activate();this._emitterOn(a,b.callback,b)};t._deoptimizeEvent=function(a){var b=this._controllers.optimizer.getOptimizerByEvent(a);
b.deactivate();this._emitterOff(a,b.callback,b)};t._getOptimizedValue=function(a){return this._controllers.optimizer.get(a)
};t._seperateCustomEvents=function(b){var f={customEvents:[],standardEvents:[]};
if(typeof b==="string"){var a=b.split(" "),d,c,g=a.length;for(c=0;c<g;c++){d=a[c];
if(this._controllers.customEvent.canHandleCustomEvent(d)){f.customEvents.push(d)
}else{f.standardEvents.push(d)}}}return f};t._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};z.exports=y.share(r,A,o)},{"./CustomEventController":620,"./OptimizerController":621,"./optimizers/optimizers":627,"./queries/queries":636,"@marcom/ac-dom-emitter":614,"@marcom/ac-shared-instance":595}],623:[function(m,l,i){var j=m("@marcom/ac-event-emitter").EventEmitter;
function h(c,a,b){j.call(this);this.name=c;this.active=false;this._initializeFunc=a;
this._deinitializeFunc=b}var k=h.prototype=new j(null);k.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};k.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};l.exports=h},{"@marcom/ac-event-emitter":617}],624:[function(m,l,h){var j=m("@marcom/ac-event-emitter").EventEmitter;
function i(b,a){j.call(this);this.active=false;this.eventNames=b.eventNames;this.propertyNames=b.propertyNames;
this.options=b.options||{};this.callback=a}var k=i.prototype=new j(null);k.update=function(a,b){this.trigger("update",{prop:a,val:b})
};k.activate=function(){this.active=true;this.trigger("activate",this)};k.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};l.exports=i},{"@marcom/ac-event-emitter":617}],625:[function(m,l,i){var j=m("../../WindowDelegateOptimizer"),n=m("../../queries/queries");
var o={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var k=new j(o,function(a){var b,c=o.propertyNames,d=c.length;for(b=0;b<d;b++){this.update(c[b],n[c[b]](true))
}});l.exports=k},{"../../WindowDelegateOptimizer":624,"../../queries/queries":636}],626:[function(l,k,i){var j=l("../../WindowDelegateOptimizer"),m=l("../../queries/queries");
var n={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var o=new j(n,function(a){var b,c=n.propertyNames,d=c.length;for(b=0;b<d;b++){this.update(c[b],m[c[b]](true))
}});k.exports=o},{"../../WindowDelegateOptimizer":624,"../../queries/queries":636}],627:[function(j,i,g){var k=j("./events/resize"),h=j("./events/scroll");
i.exports=[k,h]},{"./events/resize":625,"./events/scroll":626}],628:[function(f,i,g){var h=function(a){return document.documentElement.clientHeight
};i.exports=h},{}],629:[function(f,i,g){var h=function(a){return document.documentElement.clientWidth
};i.exports=h},{}],630:[function(f,h,g){var i=function(a){return window.innerHeight||this.clientHeight(a)
};h.exports=i},{}],631:[function(f,i,g){var h=function(a){return window.innerWidth||this.clientWidth(a)
};i.exports=h},{}],632:[function(i,h,g){var f=function(a){return document.body.scrollWidth-this.innerWidth()
};h.exports=f},{}],633:[function(i,h,f){var g=function(a){return document.body.scrollHeight-this.innerHeight()
};h.exports=g},{}],634:[function(f,i,g){var h=function(c){var a=window.pageXOffset;
if(!a){var b=document.documentElement||document.body.parentNode||document.body;
a=b.scrollLeft}return a};i.exports=h},{}],635:[function(f,i,g){var h=function(c){var a=window.pageYOffset;
if(!a){var b=document.documentElement||document.body.parentNode||document.body;
a=b.scrollTop}return a};i.exports=h},{}],636:[function(p,r,n){var v=p("./methods/innerWidth"),o=p("./methods/innerHeight"),t=p("./methods/clientWidth"),m=p("./methods/clientHeight"),u=p("./methods/scrollX"),w=p("./methods/scrollY"),q=p("./methods/maxScrollX"),s=p("./methods/maxScrollY");
r.exports={innerWidth:v,innerHeight:o,clientWidth:t,clientHeight:m,scrollX:u,scrollY:w,maxScrollX:q,maxScrollY:s}
},{"./methods/clientHeight":628,"./methods/clientWidth":629,"./methods/innerHeight":630,"./methods/innerWidth":631,"./methods/maxScrollX":632,"./methods/maxScrollY":633,"./methods/scrollX":634,"./methods/scrollY":635}],637:[function(d,g,f){g.exports={Viewport:d("./ac-viewport/Viewport")}
},{"./ac-viewport/Viewport":638}],638:[function(r,t,p){var s=r("@marcom/ac-shared-instance").SharedInstance,l=r("@marcom/ac-window-delegate").WindowDelegate,n=r("@marcom/ac-breakpoints-delegate").BreakpointsDelegate;
var m="ac-viewport:Viewport",u="3.2.0";var o;function q(a){var c,b=l;for(c in b){if(b.hasOwnProperty(c)){this[c]=b[c]
}else{o[c]=b[c]}}this.addCustomEvent(n.getCustomEvent())}o=q.prototype;o.getBreakpoint=function(){return n.getBreakpoint()
};o.setBreakpoints=function(a){return n.setBreakpoints(a)};t.exports=s.share(m,u,q)
},{"@marcom/ac-breakpoints-delegate":593,"@marcom/ac-shared-instance":595,"@marcom/ac-window-delegate":619}],639:[function(o,m,i){var j=o("@marcom/ac-jetpack-lib/core/BaseComponent");
var l=o("@marcom/ac-dom-traversal/querySelectorAll");var n=function(){j.apply(this,arguments);
this.firstActivate=true};var k=n.prototype=Object.create(j.prototype);k.setupComponents=function(){var a=this.section.getAllComponentsOfType("GalleryComponent");
this.galleries={screen:a[0].galleryObject,captions:a[1].galleryObject};this.galleries.captions.on("update",function(b){this.galleries.screen.show(this.galleries.captions.getItemIndex(b.incoming[0]))
}.bind(this));this.galleries.screen.on("update",function(b){var c=this.galleries.screen.getItemIndex(b.outgoing[0]),d=this.galleries.screen.getItemIndex(b.incoming[0]);
this.galleries.captions.show(this.galleries.screen.getItemIndex(b.incoming[0]))
}.bind(this))};k.setupEvents=function(){this.setupComponents()};m.exports=n},{"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-jetpack-lib/core/BaseComponent":335}],640:[function(p,o,q){var n=p("@marcom/ac-dom-traversal/querySelectorAll"),j=p("@marcom/ac-jetpack-lib/core/BaseComponent"),l=p("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"),m=p("@marcom/ac-headjs");
var k=function(){j.apply(this,arguments);this.name="LoadingComponent";m.addTests({progressive:true});
m.htmlClass();this.imageLoader=new l({container:this.element});this.isLoaded=false
};k.prototype=Object.create(j.prototype);k.prototype.onAssetsDone=function(){this.section.trigger("onAssetsDone",this);
this.section._components.map(function(a){if(a.onAssetsLoaded){a.onAssetsLoaded(this)
}},this)};k.prototype.loadAssets=function(){if(!this.isLoaded){this.imageLoader.load();
this.isLoaded=true;this.element.classList.add("loading-complete");this.imageLoader.on("complete",this.onAssetsDone.bind(this))
}};o.exports=k},{"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-headjs":301,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-progressive-image-loader/ProgressiveImageLoader":480}],641:[function(J,N,w){J("@marcom/ac-polyfills/Object/create");
var y=J("@marcom/ac-jetpack-lib/core/BaseComponent");var C=J("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var D=y.prototype;var I=J("@marcom/ac-useragent");var O=J("@marcom/ac-eclipse").Clip;
var K=J("@marcom/ac-eclipse").Timeline;var L=J("@marcom/ac-classlist/add");var x=J("@marcom/ac-object/clone");
var M=J("@marcom/ac-dom-traversal/querySelector");var F=J("@marcom/ac-dom-traversal/querySelectorAll");
var v=J("@marcom/ac-threejs-loader");var A=J("@marcom/ac-scroll-motion-emitter").ElementScrollMotionEmitter;
var E=J("../webgl/WebGLLightingScene");var z="/105/media";var B="apple-tv/2016/14d9e1b8_9735_4875_9107_d24cf69f325e";
function G(f,h,d,g,c,b,a){this.name="WebGLLightingComponent_"+a;y.call(this,f,h,d,g,c,b,a);
this.section=f;this.componentElement=h;this._externalsScript=document.querySelector(".webgl-externals");
this._didStartThreeJSLoad=false;this._didStartWebGLExternalsLoad=false;this._threeJSLoaded=false;
this.rafWhenVisible=true;this.scrollMotionEmitter=new A(f.element,{smooth:true,overrideScroll:true,offsetTop:function(){return -window.innerHeight
}});this.scrollMotionEmitter.start();this.initializeWebGLContent()}G.IS_SUPPORTED=function(){return !I.browser.ie&&document.documentElement.classList.contains("webgl")
};var H=G.prototype=Object.create(y.prototype);G.prototype.constructor=G;H.initializeWebGLContent=function(){if(this._didStartThreeJSLoad){return
}var a={versionNumber:79};v.load(a).then(this._onThreeJSLoaded.bind(this));this._didStartThreeJSLoad=true
};H.onSectionWillAppear=function(){this._visible=true;if(this.lightingScene){this.lightingScene.enable()
}};H.onSectionWillDisappear=function(){this._visible=false;if(this.lightingScene){this.lightingScene.disable()
}};H.onScroll=function(a,b){if(this.scrollMotionEmitter){this.scrollMotionEmitter.handleScroll(b)
}};H.onRetinaChange=function(){if(this.lightingScene){this.lightingScene.onRetinaChange()
}};H.onResizeDebounced=function(b,c,a){if(this.lightingScene){this._setDimensions();
this.lightingScene.onResize(this._renderWidth,this._renderHeight)}};H.onRequestAnimationFrame=function(){if(this.lightingScene){this.render()
}};H.render=function(){if(this.lightingScene){this.lightingScene.render();if(!this._didRender){this._didRender=true
}}};H._onThreeJSLoaded=function(){this._threeJSLoaded=true;this._initializeScene()
};H._initializeScene=function(){this._setDimensions();this.lightingScene=new E({basePath:this._getBasePath(),scrollMotionEmitter:this.scrollMotionEmitter,width:this._renderWidth,height:this._renderHeight});
if(this._visible){this.onSectionWillAppear()}setTimeout(function(){window.requestAnimationFrame(function(){this.componentElement.appendChild(this.lightingScene.el);
this.scrollMotionEmitter.handleScroll();window.requestAnimationFrame(function(){this.section.element.classList.add("webgl-active")
}.bind(this))}.bind(this))}.bind(this,100))};H._getBasePath=function(){var b=this.componentElement.getAttribute("data-locale"),a=this.componentElement.getAttribute("data-name");
return z+"/"+b+"/"+B+"/"+a};H._setDimensions=function(){var a=this.section.element.getBoundingClientRect();
this._renderWidth=a.width;this._renderHeight=a.height};N.exports=G},{"../webgl/WebGLLightingScene":654,"@marcom/ac-classlist/add":5,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-eclipse":150,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341,"@marcom/ac-object/clone":457,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create","@marcom/ac-scroll-motion-emitter":498,"@marcom/ac-threejs-loader":582,"@marcom/ac-useragent":584}],642:[function(t,w,r){t("@marcom/ac-polyfills/Object/create");
var s=t("@marcom/ac-jetpack-lib/core/BaseComponent");var u=t("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var n=s.prototype;var o=t("@marcom/ac-classlist/add");var v=t("@marcom/ac-classlist/contains");
var q=t("@marcom/ac-dom-traversal/querySelector");var x=t("@marcom/ac-dom-traversal/querySelectorAll");
function y(c,a,h,d,g,b,f){this.name="FogComponent_"+f;s.call(this,c,a,h,d,g,b,f);
this.cssSelectorEngage="engage";this.rafWhenVisible=false}var p=y.prototype=Object.create(s.prototype);
y.prototype.constructor=y;p.onElementAppear=function(){if(!v(this.element,this.cssSelectorEngage)){o(this.element,this.cssSelectorEngage)
}};p.setupEvents=function(){n.setupEvents.call(this);this.onElementAppear=this.onElementAppear.bind(this);
this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:0,inViewThreshold:0});
this.trackedElement.on("engaged",this.onElementAppear)};w.exports=y},{"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/contains":11,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],643:[function(t,w,r){t("@marcom/ac-polyfills/Object/create");
var s=t("@marcom/ac-jetpack-lib/core/BaseComponent");var u=t("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var n=s.prototype;var o=t("@marcom/ac-classlist/add");var x=t("@marcom/ac-element-engagement").ElementEngagement;
var q=t("@marcom/ac-dom-traversal/querySelector");var y=t("@marcom/ac-dom-traversal/querySelectorAll");
function v(g,c,i,d,h,f,j){this.name="EngagementGridComponent_"+j;s.call(this,g,c,i,d,h,f,j);
var b={timeToEngage:0,inViewThreshold:0.2};this.gridTileEl=this.element.querySelectorAll(".grid-tile");
this.elementEngagement=new x();this.engageOptions=Object.assign(b,JSON.parse(this.element.getAttribute("data-engagement-grid-options")));
for(var l=0;l<this.gridTileEl.length;l++){var a=this.gridTileEl[l],k=this.elementEngagement.addElement(a,this.engageOptions);
this.trackedElementEngagement(k,a);this.elementEngagement.start(k)}this.rafWhenVisible=false
}var p=v.prototype=Object.create(s.prototype);v.prototype.constructor=v;p.trackedElementEngagement=function(b,a){b.on("engaged",function(){o(a,"active")
})};w.exports=v},{"@marcom/ac-classlist/add":5,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-element-engagement":199,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],644:[function(x,z,v){x("@marcom/ac-polyfills/Object/create");
var w=x("@marcom/ac-jetpack-lib/core/BaseComponent");var y=x("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var o=w.prototype;var r=x("@marcom/ac-eclipse").Clip;var s=x("@marcom/ac-classlist/add");
var u=x("@marcom/ac-dom-traversal/querySelector");var A=x("@marcom/ac-dom-traversal/querySelectorAll");
var p=x("../model/HeroSupportedModel");function q(c,a,h,d,g,b,f){this.name="HeroComponent_"+f;
w.call(this,c,a,h,d,g,b,f);this.logoEl=this.element.querySelector(".image-appletv-logo");
this.headlineEl=this.element.querySelector(".typography-hero-headline");this.overlayEl=this.element.querySelector(".overlay");
this._stepDelay=0.35;this._timelineDuration={logo:2,headline:2,overlay:2.5};this._timelineDelay=this._timelineDuration.logo/2;
this._initHeroTimeline();this.rafWhenVisible=false}var t=q.prototype=Object.create(w.prototype);
q.prototype.constructor=q;q.IS_SUPPORTED=function(){return document.documentElement.classList.contains(p.getClassName())
};t._initHeroTimeline=function(){var a={delay:0};new r(this.logoEl,this._timelineDuration.logo,{opacity:0.999},a).play();
a.delay=this._timelineDelay;new r(this.logoEl,this._timelineDuration.logo,{transform:{y:0}},a).play();
a.delay=this._timelineDelay+this._stepDelay;new r(this.headlineEl,this._timelineDuration.headline,{opacity:0.999,transform:{y:0}},a).play();
a.onComplete=function(){this.overlayEl.style.zIndex=-1}.bind(this);new r(this.overlayEl,this._timelineDuration.overlay,{opacity:0.001},a).play()
};z.exports=q},{"../model/HeroSupportedModel":649,"@marcom/ac-classlist/add":5,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-eclipse":150,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],645:[function(G,M,w){G("@marcom/ac-polyfills/Object/create");
var y=G("@marcom/ac-jetpack-lib/core/BaseComponent");var C=G("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var D=y.prototype;var N=G("@marcom/ac-eclipse").Clip;var I=G("@marcom/ac-eclipse").Timeline;
var B=G("@marcom/ac-siri-player").SiriPlayer;var z=G("@marcom/ac-feature");var H=G("@marcom/ac-gpu-reporter").GPUReporter;
var K=G("@marcom/ac-classlist/add");var x=G("@marcom/ac-object/clone");var L=G("@marcom/ac-dom-traversal/querySelector");
var E=G("@marcom/ac-dom-traversal/querySelectorAll");var A=new H();var v=A.getGPU();
var O=function(){var a={blacklist:["PowerVR SGX 554","IMGSGX554"]};return A.getGPUClass(a)===1
};function J(l,g,b,h,a,j,c){this.name="SiriCommandComponent_"+c;y.call(this,l,g,b,h,a,j,c);
this.siriWaveEl=L(".wave-container",g);this.siriCommandEl=E(".siri-command",g);
this.siriWaveClip=new N(this.siriWaveEl,0.5,{transform:{rotateY:"0deg"}});this.TRANSITION_IN_DURATION=1;
this.TRANSITION_OUT_DURATION=1;this.TRANSITION_IN_EASE="easeOutExpo";this.TRANSITION_OUT_EASE="easeOutExpo";
this.NORMAL_ENVELOPE=0.5;this.SILENT_ENVELOPE=0.95;this.PAUSE_ENVELOPE=0.5;this.NORMAL_ENVELOPE_2=0.05;
this.SILENT_ENVELOPE_2=0.3;this.PAUSE_ENVELOPE_2=0.3;this.NORMAL_SCALE=0.2;this.SILENT_SCALE=0.85;
this.PAUSE_SCALE=0.2;this.NORMAL_SPEED=1.5;this.SILENT_SPEED=0.5;this.PAUSE_SPEED=0;
this.siriTalkingClips={talkingStart:{duration:this.TRANSITION_IN_DURATION,ease:this.TRANSITION_IN_EASE,propsFrom:{et:this.SILENT_SCALE,ee:this.SILENT_SPEED,qa:this.SILENT_ENVELOPE,te:this.SILENT_ENVELOPE_2},propsTo:{et:this.NORMAL_SCALE,ee:this.NORMAL_SPEED,qa:this.NORMAL_ENVELOPE,te:this.NORMAL_ENVELOPE_2}},talkingEnd:{duration:this.TRANSITION_OUT_DURATION,ease:this.TRANSITION_OUT_EASE,propsFrom:{et:this.NORMAL_SCALE,ee:this.NORMAL_SPEED,qa:this.NORMAL_ENVELOPE,te:this.NORMAL_ENVELOPE_2},propsTo:{et:this.SILENT_SCALE,ee:this.SILENT_SPEED,qa:this.SILENT_ENVELOPE,te:this.SILENT_ENVELOPE_2}},talkingPaused:{duration:this.TRANSITION_OUT_DURATION,ease:this.TRANSITION_OUT_EASE,propsFrom:{et:this.SILENT_SCALE,ee:this.SILENT_SPEED,qa:this.SILENT_ENVELOPE,te:this.SILENT_ENVELOPE_2},propsTo:{et:this.PAUSE_SCALE,ee:this.PAUSE_SPEED,qa:this.PAUSE_ENVELOPE,te:this.PAUSE_ENVELOPE_2}}};
var d=[];for(var f=0;f<this.siriCommandEl.length;f++){d[f]=this.siriCommandEl[f].textContent.length
}var i=Math.max.apply(Math,d);var k=d.indexOf(i);K(this.siriCommandEl[k],"relative");
K(g,"enhanced");this.rafWhenVisible=false}var F=J.prototype=Object.create(y.prototype);
J.prototype.constructor=J;J.IS_SUPPORTED=function(){return !C.IS_IE&&!C.IS_EDGE&&!C.IS_ANDROID&&!O()
};F.siriWavePlayer=function(){this.siriPlayer=new B({alpha:true,transparent:true,white:true,sizes:{defaults:{width:932,height:210},medium:{width:745,height:170},small:{width:495,height:90}}});
this.siriPlayer.setUniforms(this.siriTalkingClips.talkingStart.propsFrom);this.siriWaveEl.appendChild(this.siriPlayer.el)
};F.getSiriWaveClip=function(a){var c=function(f,d){this.siriPlayer.setUniforms(f)
};var b=x(a.propsFrom);return new N(b,a.duration,x(a.propsTo),{ease:a.ease,propsEase:x(a.propsEase),propsFrom:x(a.propsFrom),onUpdate:c.bind(this,b)})
};F.timeline=function(){var g=0.8,i=5,h=5.5,b=g+(h*(this.siriCommandEl.length)),c,j;
this.myTimeline=new I({ease:"linear",onComplete:function(){}.bind(this)});this.myTimeline.addClip(this.siriWaveClip,0.4);
for(var d=0;d<this.siriCommandEl.length;d++){var l=this.siriCommandEl[d],k=h*d,f=i+k,a=g+k;
c=new N(l,1.5,{opacity:1},{propsFrom:{opacity:0}});j=new N(l,0.75,{opacity:0},{propsFrom:{opacity:1}});
this.siriStartTalkingClip=this.getSiriWaveClip(this.siriTalkingClips.talkingStart);
this.siriEndTalkingClip=this.getSiriWaveClip(this.siriTalkingClips.talkingEnd);
this.myTimeline.addClip(j,f);this.myTimeline.addClip(c,a);this.myTimeline.addClip(this.siriEndTalkingClip,f);
this.myTimeline.addClip(this.siriStartTalkingClip,a)}this.myTimeline.addClip(new N(this.siriCommandEl[0],1.5,{opacity:1},{propsFrom:{opacity:0}}),b);
this.myTimeline.addClip(this.getSiriWaveClip(this.siriTalkingClips.talkingPaused),b)
};F.onElementEnterView=function(){if(typeof this.siriPlayer=="undefined"){this.siriWavePlayer()
}if(typeof this.myTimeline=="undefined"){this.timeline()}};F.onElementAppear=function(){if(typeof this.siriPlayer=="undefined"){this.siriWavePlayer()
}this.siriPlayer.start();if(typeof this.myTimeline=="undefined"){this.timeline()
}this.myTimeline.play()};F.onElementDisappear=function(){this.myTimeline.pause();
this.siriPlayer.stop()};F.setupEvents=function(){D.setupEvents.call(this);this.onElementAppear=this.onElementAppear.bind(this);
this.onElementDisappear=this.onElementDisappear.bind(this);this.onElementEnterView=this.onElementEnterView.bind(this);
this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:0,inViewThreshold:0.2});
this.trackedElement.on("engaged",this.onElementAppear);this.trackedElement.on("exitview",this.onElementDisappear);
this.trackedElement.once("enterview",this.onElementEnterView)};M.exports=J},{"@marcom/ac-classlist/add":5,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-eclipse":150,"@marcom/ac-feature":217,"@marcom/ac-gpu-reporter":290,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341,"@marcom/ac-object/clone":457,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create","@marcom/ac-siri-player":571}],646:[function(z,B,w){z("@marcom/ac-polyfills/Object/create");
var y=z("@marcom/ac-jetpack-lib/core/BaseComponent");var A=z("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var q=y.prototype;var C=z("@marcom/ac-classlist");var s=z("@marcom/ac-dom-metrics/getViewportPosition");
var r=z("@marcom/ac-dom-metrics/isInViewport");var v=z("@marcom/ac-dom-traversal/querySelector");
var D=z("@marcom/ac-dom-traversal/querySelectorAll");var t=0;var E=null;function x(c,a,h,d,g,b,f){this.name="ThemeLocalNavComponent_"+(t++);
y.call(this,c,a,h,d,g,b,f);this._localNavEl=v("#ac-localnav");this._switchPos=this._localNavEl.clientHeight;
this._isDarkThemedLocalNav=C.contains(this._localNavEl,"ac-localnav-dark");this._cssSelectorLocalnavDark="ac-localnav-dark";
this.theme=this.element.getAttribute("data-localnav-theme");this._getElementDomMetrics();
this.onScroll()}var u=x.prototype=Object.create(y.prototype);x.prototype.constructor=x;
u._getElementDomMetrics=function(){this._sectionOffsetTop=s(this.element).top;this._sectionOffsetBottom=s(this.element).bottom;
this._sectionInSwitchRange=this._sectionOffsetTop<=this._switchPos&&this._sectionOffsetBottom>=this._switchPos
};u._isThemingNav=function(){return E===this.name};u._switchTheme=function(){if(this.theme==="dark"){this._darkNav()
}else{this._lightNav()}E=this.name};u._resetTheme=function(){if(this.theme==="dark"){this._lightNav()
}else{this._darkNav()}E=null};u._darkNav=function(){if(!C.contains(this._localNavEl,this._cssSelectorLocalnavDark)){C.add(this._localNavEl,this._cssSelectorLocalnavDark)
}};u._lightNav=function(){C.remove(this._localNavEl,this._cssSelectorLocalnavDark)
};u.onScroll=function(b,c,a){q.onScroll.call(this,b,c,a);this._getElementDomMetrics();
if(!E&&this._sectionInSwitchRange){this._switchTheme()}else{if(this._isThemingNav()&&!this._sectionInSwitchRange){this._resetTheme()
}}};u.onSectionWillDisappear=function(){if(this._isThemingNav()){this._resetTheme()
}};u.onResizeDebounced=function(b,c,a){q.onResizeDebounced.call(this,b,c,a);this._switchPos=this._localNavEl.clientHeight;
this._getElementDomMetrics();this.onScroll(b,c,a)};B.exports=x},{"@marcom/ac-classlist":12,"@marcom/ac-dom-metrics/getViewportPosition":28,"@marcom/ac-dom-metrics/isInViewport":29,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],647:[function(p,r,o){var l=p("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var q=p("@marcom/ac-gpu-reporter/GPUReporter");var s=p("@marcom/ac-useragent");
var m=p("@marcom/ac-feature/isTablet");var k=function(){l.call(this);this._profile=null;
this._reporter=new q();this._gpuClass=this._reporter.getGPUClass({whitelist:["Apple A8X GPU","Apple Software Renderer","AMD Radeon R9 M370X","AMD Radeon R9 M370X OpenGL Engine"]});
this._boundGetProfile=this.getProfile.bind(this)};var n=k.prototype=Object.create(l.prototype);
n.LOW=1;n.MEDIUM=2;n.HIGH=3;n.getGPU=function(){return this.GPU=this.GPU||this._reporter.getGPU()
};n.getProfile=function(){var a=this._getProfile();this._setProfile(a);return a
};n.isGraphics=function(a){return this._getProfile()===this[a]};n._getProfile=function(){var a=this._gpuClass;
var b=["Apple A8 GPU","Apple A9 GPU"];if(a===this._reporter.BLACKLISTED||a===this._reporter.NO_WEBGL){return this.LOW
}if(a===this._reporter.NOT_FOUND||a===this._reporter.NOT_LISTED){if(this._getMaxAnisotropy()<16||this._getIsIntegratedRetina()||this._isNonProIPad()){return this.LOW
}}if(b.indexOf(this.getGPU())>=0&&!m()){return this.LOW}return this.HIGH};n._getIsIntegratedRetina=function(){return s.browser.safari&&s.os.osx&&this._isRetina()&&window.screen.width<1800
};n._isNonProIPad=function(){return s.os.ios&&m()};n._setProfile=function(a){if(this._profile===a){return
}this._profile=a;this.trigger("change",{profile:a})};n._getMaxAnisotropy=function(){if(typeof this._maxAnisotropy==="number"){return this._maxAnisotropy
}var c=0;try{var b=document.createElement("canvas"),d=b.getContext("webgl")||b.getContext("experimental-webgl");
var a=(d.getExtension("EXT_texture_filter_anisotropic")||d.getExtension("MOZ_EXT_texture_filter_anisotropic")||d.getExtension("WEBKIT_EXT_texture_filter_anisotropic"));
if(a){c=d.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}}catch(f){}this._maxAnisotropy=c;
return this._maxAnisotropy};n._isRetina=function(){var a=window.devicePixelRatio;
if(!a||a<1.5){return false}return true};r.exports=new k()},{"@marcom/ac-event-emitter-micro":201,"@marcom/ac-feature/isTablet":230,"@marcom/ac-gpu-reporter/GPUReporter":291,"@marcom/ac-useragent":584}],648:[function(p,r,n){var l=p("./model/ProgressiveImageController");
var s=p("./pages/AppleTVPage");var m=p("@marcom/ac-jetpack-lib/model/ComponentMap");
var q=p("@marcom/ac-jetpack-lib/model/EnabledFeatures");var o=p("./shared/model/EnabledFeatures");
var k=(function(){return{initialize:function(){var a=this.initializeJetpack();clearTimeout(window.progressiveTimeout);
return this},initializeJetpack:function(){Object.assign(m,{LoadingComponent:p("./components/LoadingComponent"),CaptionGalleryComponent:p("./components/CaptionGalleryComponent"),GalleryComponent:p("@marcom/ac-jetpack-fuel/components/gallery/GalleryComponent"),MediaObjectComponent:p("@marcom/ac-jetpack-fuel/components/media-object/MediaObjectComponent"),ThemeLocalNavComponent:p("./components/themeLocalNavComponent"),HeroComponent:p("./components/heroComponent"),SiriCommandComponent:p("./components/siriCommandComponent"),WebGLLightingComponent:p("./components/WebGLLightingComponent"),EngagementGridComponent:p("./components/engagementGridComponent"),ContentRevealComponent:p("./components/contentRevealComponent")});
m.MediaObjectComponent.URI_PATTERN="/105/media/{{locale}}/apple-tv/2016/14d9e1b8_9735_4875_9107_d24cf69f325e/{{name}}/{{viewport}}";
q=q.extend(o);var a=new s();a._sections.map(function(b){b.page=a});return a}}}());
r.exports=k.initialize()},{"./components/CaptionGalleryComponent":639,"./components/LoadingComponent":640,"./components/WebGLLightingComponent":641,"./components/contentRevealComponent":642,"./components/engagementGridComponent":643,"./components/heroComponent":644,"./components/siriCommandComponent":645,"./components/themeLocalNavComponent":646,"./model/ProgressiveImageController":650,"./pages/AppleTVPage":651,"./shared/model/EnabledFeatures":652,"@marcom/ac-jetpack-fuel/components/gallery/GalleryComponent":303,"@marcom/ac-jetpack-fuel/components/media-object/MediaObjectComponent":304,"@marcom/ac-jetpack-lib/model/ComponentMap":339,"@marcom/ac-jetpack-lib/model/EnabledFeatures":341}],649:[function(g,j,h){var k=g("../controllers/GraphicsPerformanceController");
var i="hero-animated";j.exports={isSupported:function(){return k.isGraphics("HIGH")
},getClassName:function(){return i}}},{"../controllers/GraphicsPerformanceController":647}],650:[function(y,z,v){var p=y("@marcom/ac-progressive-image-loader/ProgressiveImageLoader");
var A=y("@marcom/ac-dom-traversal/querySelectorAll");var u=y("@marcom/ac-dom-traversal/querySelector");
var w=y("@marcom/ac-dom-traversal/nextSibling");var C=y("@marcom/ac-dom-traversal/previousSibling");
var x=y("@marcom/ac-jetpack-lib/core/BaseComponent");var B=y("@marcom/ac-dom-metrics");
var q="assets-loaded";var r="progressive-image-ready";function s(){this.loadTimeout=1000;
this.sectionToLoad()}var t=s.prototype;s.prototype.constructor=s;t.sectionToLoad=function(){var b=false;
var a=u(".active");this._createImageLoader(document.body)};t._createImageLoader=function(a){var b=new p({container:a,timeout:this.loadTimeout,includeContainer:true});
return b};t.handleSectionLoad=function(b){var a=document.body;var c=this;var d=this._createImageLoader(a);
d.on("image-load",function(f){console.log(f)});d.on("complete",function(){console.log("complete")
});d.load();a.visited=true};t._handleImageLoaded=function(a){a.classList.add(r)
};t._handleImagesLoaded=function(a){a.off("image-load",this._boundOnHandleImageLoaded);
a.destroy()};z.exports=s},{"@marcom/ac-dom-metrics":19,"@marcom/ac-dom-traversal/nextSibling":76,"@marcom/ac-dom-traversal/previousSibling":77,"@marcom/ac-dom-traversal/querySelector":78,"@marcom/ac-dom-traversal/querySelectorAll":79,"@marcom/ac-jetpack-lib/core/BaseComponent":335,"@marcom/ac-progressive-image-loader/ProgressiveImageLoader":480}],651:[function(q,p,j){q("@marcom/ac-polyfills/Object/create");
var l=q("@marcom/ac-jetpack-lib/core/BasePage"),n=q("@marcom/ac-dom-metrics/isInViewport"),m=l.prototype;
function k(){this.name="AppleTVPage";l.call(this);this.pageAssetsLoaded=false}var o=k.prototype=Object.create(l.prototype);
k.prototype.constructor=k;o.destroy=function(){m.destroy.call(this)};o.checkSectionsInView=function(){var c=this._sections.length;
for(var b=0;b<this._sections.length;b++){if(n(this._sections[b].element)){var d=this._sections[b],f=this._sections[b+1],a=this._sections[b-1];
this.checkSectionAndLoad(f);this.checkSectionAndLoad(a);this.checkSectionAndLoad(d)
}if(this._sections[b].isLoaded){c--}}if(c<=0){this.pageAssetsLoaded=true}};o.checkSectionAndLoad=function(a){if(!a){return
}var b=a.getComponentOfType("LoadingComponent");if(b!==null&&!b.isLoaded){b.loadAssets();
a.isLoaded=true}};o.setupEvents=function(){m.setupEvents.call(this)};o.teardownEvents=function(){m.teardownEvents.call(this)
};o.setupSections=function(){m.setupSections.call(this);this.checkSectionsInView()
};o._onPageDidAppear=function(a){m._onPageDidAppear.call(this,a)};o._onPageWillDisappear=function(a){m._onPageWillDisappear.call(this,a)
};o._onScroll=function(b){m._onScroll.call(this,b);if(this.pageAssetsLoaded){return
}var c=this._getScrollY();var a=this._getWindowHeight();this.checkSectionsInView()
};o._onResizeDebounced=function(a){m._onResizeDebounced.call(this,a)};o._onResizeImmediate=function(a){m._onResizeImmediate.call(this,a)
};o._onBreakpoint=function(b){m._onBreakpoint.call(this,b);var a=this._getCurrentBreakpoint();
var c=b.from;var d=this._getScrollY();var f=this._getWindowHeight()};o._onRetinaChange=function(a){m._onRetinaChange.call(this,a)
};o._onRequestAnimationFrame=function(){m._onRequestAnimationFrame.call(this)};
p.exports=k},{"@marcom/ac-dom-metrics/isInViewport":29,"@marcom/ac-jetpack-lib/core/BasePage":336,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],652:[function(d,g,f){g.exports={init:function(){var a=document.getElementsByTagName("html")[0];
this.IS_ANDROID=a.classList.contains("android");this.CSS_TRANSFORMS=a.classList.contains("css-transforms");
this.CSS_TRANSITIONS=a.classList.contains("css-transitions");this.WEBGL=a.classList.contains("webgl");
this.IS_HANDHELD=a.classList.contains("handheld");this.IS_IE=a.classList.contains("ie");
this.IS_EDGE=a.classList.contains("edge");this.IS_IOS=a.classList.contains("ios")
}}},{}],653:[function(w,x,u){var o=w("./vertexShader");var v=w("./fragmentShader");
var o;var v;var r=w("@marcom/ac-eclipse").Clip;var q=w("@marcom/ac-eclipse").Timeline;
var s=w("@marcom/ac-cname").cname;var p=w("@marcom/ac-object/clone");var n=w("@marcom/ac-viewport-emitter");
var y=function(a){this.wrapperEl=a.el;this.viewportWidth=a.width;this.viewportHeight=a.height;
this.basePath=a.basePath;this.scrollMotionEmitter=a.scrollMotionEmitter;this.perc=this.momentumPerc=0;
this._floorBaseWidth=1440;this._floorBaseHeight=1440;this._deviceBaseWidth=720;
this._deviceBaseHeight=720;this._lightTimelineDirection=1;this._lightPositions={y:1500,z:-1500};
this._deviceXOffsets={large:0,medium:0,small:15};this._deviceYOffsets={large:-80,medium:30,small:50};
this._lightMultilpiers={large:1800,medium:2000,small:10000};this._minLightZ=-500;
this.lights=[{color:5368007,x:-1000,z:-200},{color:11748245,x:0,z:-400},{color:6530283,x:1000,z:-200}];
this._deviceSizes={large:{width:1024,height:1024},medium:{width:512,height:512},small:{width:256,height:256}};
this.time=0;this.texLoaded=0;this._setViewport();this.init();this.resize();this.scrollMotionEmitter.on("draw",this.scroll.bind(this))
};var t=y.prototype;t.init=function(){var a=this;this.renderer=new THREE.WebGLRenderer({depth:false,sortObjects:false});
this.renderer.setSize(this.viewportWidth,this.viewportHeight);this.wrapperEl.appendChild(this.renderer.domElement);
this._updateDPR();this.scene=new THREE.Scene();this.camera=new THREE.OrthographicCamera(this.viewportWidth/-2,this.viewportWidth/2,this.viewportHeight/2,this.viewportHeight/-2,10,15000);
this.camera.position.y=1000;this.camera.lookAt(new THREE.Vector3(0,0,0));this.scene.add(this.camera);
this.loadTextures();this.container=new THREE.Object3D();this.container.scale.set(1.1,1.1,1.1);
this.container.rotation.x=-Math.PI/2;this.scene.add(this.container);this.deviceGeom=new THREE.PlaneBufferGeometry(this._floorBaseWidth,this._floorBaseHeight,1,1);
this.device2Geom=new THREE.PlaneBufferGeometry(this._deviceBaseWidth,this._deviceBaseHeight,1,1);
this.floorMat=new THREE.MeshPhongMaterial({color:5592405,map:this.diffuseTex,depthTest:false,depthWrite:false,shininess:35});
this.floorMesh=new THREE.Mesh(this.deviceGeom,this.floorMat);this.container.add(this.floorMesh);
this._updateFloorScale();this.deviceMat=new THREE.ShaderMaterial({uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.lights,{diffuse:{value:new THREE.Color(13421772)},emissive:{value:new THREE.Color(0)},specular:{value:new THREE.Color(2236962)},shininess:{value:35},opacity:{value:1},map:{value:null},alphaMap:{value:null},emissiveMap:{value:null},normalMap:{value:null},specularMap:{value:null},shadowMap:{value:null},normalScale:{value:new THREE.Vector2(-1,1)},ambiantLightColor:{value:new THREE.Color(16777215)},highlightMap:{value:null},highlightAlphaMap:{value:null},highlightOffset:{value:new THREE.Vector2(-0.12,0)},highlightOpacity:{value:0.9}}]),vertexShader:o,fragmentShader:v,transparent:true,depthTest:false,depthWrite:false,lights:true});
this.deviceMat.extensions.derivatives=true;this.deviceMat.uniforms.map.value=this.diffuse2Tex;
this.deviceMat.uniforms.alphaMap.value=this.devicemaskTex;this.deviceMat.uniforms.emissiveMap.value=this.glossTex;
this.deviceMat.uniforms.normalMap.value=this.normalTex;this.deviceMat.uniforms.specularMap.value=this.specularTex;
this.deviceMat.uniforms.highlightMap.value=this.highlightTex;this.deviceMat.uniforms.highlightAlphaMap.value=this.highlightMaskTex;
this.deviceMat.uniforms.shadowMap.value=this.shadowsTex;this.deviceMesh=new THREE.Mesh(this.device2Geom,this.deviceMat);
this.deviceMesh.visible=false;this._updateDeviceXOffset();this._updateDeviceYOffset();
this._updateDeviceScale();this.container.add(this.deviceMesh);this.ambiantLight=new THREE.AmbientLight(16777215);
this.scene.add(this.ambiantLight);this.lightsContainer=new THREE.Object3D();this.scene.add(this.lightsContainer);
for(var b=0;b<this.lights.length;b++){var c=new THREE.PointLight(a.lights[b].color,1,4000,2);
c.position.y=this._lightPositions.y;c.position.z=this._lightPositions.z;c.position.x=a.lights[b].x;
a.lightsContainer.add(c);a.lights[b].light=c}this.directionalLight=new THREE.DirectionalLight(13497579,1);
this.directionalLight.position.set(0,0.3,-2.2);this.scene.add(this.directionalLight);
this.lights[0].light.intensity=2;this.lightTimeline=this._createLightTimeline();
this.dirLightTimeline=this._createDirLightTimeline();this.lightTimeline.progress(0);
this.dirLightTimeline.progress(0)};t._createLightTimeline=function(){var k={loop:Infinity,yoyo:true,ease:"easeInOut",onUpdate:function(z){var A=z.progress();
if(A>h._lastProgress){this._lightTimelineDirection=1}else{this._lightTimelineDirection=-1
}h._lastProgress=A}.bind(this)};var h=new q();h._lastProgress=0;var g=this._createLightClip(this.lights[0].light,0.9,{intensity:1.5});
var c=this._createLightClip(this.lights[1].light,0.9,{intensity:1});var m=this._createLightClip(this.lights[2].light,0.9,{intensity:1});
var b=this._createLightClip(this.lights[0].light,0.9,{intensity:1});var l=this._createLightClip(this.lights[1].light,0.9,{intensity:1.5});
var f=this._createLightClip(this.lights[1].light,0.9,{intensity:1});var d=this._createLightClip(this.lights[2].light,0.9,{intensity:1.5});
var C=this._createLightClip(this.lights[2].light,0.9,{intensity:1});var i=this._createLightClip(this.lights[1].light,0.9,{intensity:1.5});
h.addClip(g);h.addClip(c,0);h.addClip(m,0);h.addClip(b,0.5);h.addClip(l,0.5);h.addClip(f,0.8);
h.addClip(d,0.8);h.addClip(C,2.5);h.addClip(i,2.5);var a={t:0};var B={t:1};var k={loop:Infinity,ease:"easeInOut",propsFrom:p(a),onUpdate:function(z,A){var F=A.progress();
if(F<A._lastProgress){this._lightTimelineDirection*=-1}var G=F;if(this._lightTimelineDirection===-1){G=1-F
}z.progress(G);A._lastProgress=F}.bind(this,h)};var j=new r(a,h.duration(),B,k);
j._lastProgress=null;return j};t._createDirLightTimeline=function(){var b=new q();
this.dirAngle=-Math.PI/2;var a=this._createObjClip(this,1,{dirAngle:-Math.PI/2-Math.PI/1.2},{ease:"easeInOut"});
b.addClip(a);return b};t._updateClipRegistry=function(c,b,d){var f=this._clipDictionary||[],a=this._clipMap||{},g=f.indexOf(c);
var h;if(g>-1){h=a[g]}else{h=[]}h.push(d);if(g===-1){f.push(c);a[f.indexOf(c)]=h
}this._clipDictionary=f;this._clipMap=a};t._getShouldRender=function(d,a){var b=this._lightTimelineDirection,g=d.progress();
if((g===0&&b===1)||(g===1&&b===-1)||d._activeClip){var c=this._clipDictionary.indexOf(a),h=this._clipMap[c];
var f,i=h.length;for(f=0;f<i;f++){if(h[f]!==d){h[f]._activeClip=false;h[f]._didRender=false
}}d._activeClip=true;return true}return false};t._createObjClip=function(l,b,i,g){g=g||{};
var k={val:0};var a={val:1};var d;if(g.propsFrom){d=p(g.propsFrom)}else{d={};var m;
for(m in i){if(i.hasOwnProperty(m)){d[m]=l[m]}}}var j=p(i);var h=p(k);var c=p(g,true);
c.propsFrom=k;c.onUpdate=function(I,J,L,H){var K,M,G;for(K in H){if(H.hasOwnProperty(K)){G=this.map(I.val,0,1,L[K],H[K]);
M=(G-J[K]);J[K]+=M}}}.bind(this,h,l,d,j);var f=new r(h,b,a,c);return f};t._createLightClip=function(l,b,i,g){g=g||{};
var k={val:0};var a={val:1};var d;if(g.propsFrom){d=p(g.propsFrom)}else{d={};var m;
for(m in i){if(i.hasOwnProperty(m)){d[m]=l[m]}}}var j=p(i);var h=p(k);var c=p(g,true);
c.propsFrom=k;c.onUpdate=function(J,K,N,I,L){if(!this._getShouldRender(L,K)){return
}var M,O,H;for(M in I){if(I.hasOwnProperty(M)){if(!L._didRender){if(!L._startPropsFrom){L._startPropsFrom={}
}L._startPropsFrom[M]=K[M]}H=this.map(J.val,0,1,L._startPropsFrom[M],I[M]);O=(H-K[M]);
K[M]+=O}}L._didRender=true}.bind(this,h,l,d,j);var f=new r(h,b,a,c);this._updateClipRegistry(l,i,f);
return f};t.getTexturePath=function(b,a){return s.formatUrl(this.basePath,b,"."+a)
};t.render=function(){if(this._texturesDidLoad&&!this._texturesLoading){this.deviceMesh.visible=true
}this.renderer.render(this.scene,this.camera);this.momentumPerc=this.perc;this.dirLightTimeline.progress(this.momentumPerc);
this.directionalLight.position.set(Math.cos(this.dirAngle)*2,0.3,Math.sin(this.dirAngle)*2);
this.deviceMat.uniforms.highlightOffset.value.x=(-0.12+this.momentumPerc*0.2)};
t.scroll=function(a){this.perc=a.progress;var b=this._lightPositions.z+(this.perc*this._lightMultilpiers[this._viewport]);
if(b>this._minLightZ){b=this._minLightZ}for(var c=0;c<this.lights.length;c++){this.lights[c].light.position.z=b+this.lights[c].z
}};t.resize=function(b,c){var a=this._setViewport();if(a){this.loadTextures()}if(b){this.viewportWidth=b
}if(c){this.viewportHeight=c}this._updateDeviceXOffset();this._updateDeviceYOffset();
this._updateDeviceScale();this._updateCamera();this._updateFloorScale();if(this.renderer){this.renderer.setSize(this.viewportWidth,this.viewportHeight)
}};t._updateCamera=function(){if(this.camera){this.camera.left=this.viewportWidth/-2;
this.camera.right=this.viewportWidth/2;this.camera.top=this.viewportHeight/2;this.camera.bottom=this.viewportHeight/-2;
this.camera.updateProjectionMatrix()}};t._updateDeviceXOffset=function(){this.deviceMesh.position.x=this._deviceXOffsets[this._viewport]
};t._updateDeviceYOffset=function(){var a=this._getDeviceDimensions();this.deviceMesh.position.y=(-(this.viewportHeight/2)+(a.height/2))+this._deviceYOffsets[this._viewport]
};t._updateFloorScale=function(){this.floorMesh.scale.set(this.viewportWidth/this._floorBaseWidth,this.viewportHeight/this._floorBaseHeight,1)
};t._updateDeviceScale=function(){var a=this._getDeviceDimensions();this.deviceMesh.scale.set(a.width/this._deviceBaseWidth,a.height/this._deviceBaseHeight,1)
};t._updateDPR=function(){if(this.renderer){var b=1,a=false;if(window.devicePixelRatio>=1.5){b=1.5;
a=true}this._retina=a;this.renderer.setPixelRatio(b)}};t._getTextureMap=function(){return{diffuseTex:{name:"diffuse",fileType:"jpg"},diffuse2Tex:{name:"diffuse2",fileType:"jpg"},normalTex:{name:"normalMap",fileType:"png"},specularTex:{name:"specularMap",fileType:"png"},highlightTex:{name:"highlight",fileType:"png"},highlightMaskTex:{name:"highlightMask",fileType:"png"},devicemaskTex:{name:"deviceMask",fileType:"png"},glossTex:{name:"glossMap",fileType:"png"},shadowsTex:{name:"shadows",fileType:"jpg"}}
};t._setNeedsUpdate=function(){if(this.deviceMat){this.deviceMat.uniforms.map.value=this.diffuse2Tex;
this.deviceMat.uniforms.alphaMap.value=this.devicemaskTex;this.deviceMat.uniforms.emissiveMap.value=this.glossTex;
this.deviceMat.uniforms.normalMap.value=this.normalTex;this.deviceMat.uniforms.specularMap.value=this.specularTex;
this.deviceMat.uniforms.highlightMap.value=this.highlightTex;this.deviceMat.uniforms.highlightAlphaMap.value=this.highlightMaskTex;
this.deviceMat.uniforms.shadowMap.value=this.shadowsTex}};t.loadTextures=function(){function a(k){d++;
if(d===c){this._setNeedsUpdate();this._texturesLoading=false;this._texturesDidLoad=true;
this.render();if(this.deviceMesh){this.deviceMesh.visible=true}}}if(this.deviceMesh){this.deviceMesh.visible=false
}this._texturesLoading=true;var j=this._getTextureMap(),i=this._viewport,h="";if(this._retina){h="_2x"
}var d=0,c=Object.keys(j).length;var b,f,g;for(b in j){if(j.hasOwnProperty(b)){f=j[b].name+"_"+i+h;
g=j[b].fileType;this[b]=new THREE.TextureLoader().load(this.getTexturePath(f,g),a.bind(this,f))
}}};t._getDeviceDimensions=function(){return this._deviceSizes[this._viewport]};
t._setViewport=function(){var a=n.viewport;if(a==="xlarge"){a="large"}if(this._viewport===a){return false
}this._viewport=a;return true};t._onRetinaChange=function(){this._updateDPR();this.loadTextures()
};t.lerp=function(b,a,c){return a+(c-a)*b};t.map=function(a,b,d,c,f){return this.lerp(this.norm(a,b,d),c,f)
};t.norm=function(a,b,c){return(a-b)/(c-b)};x.exports=y},{"./fragmentShader":655,"./vertexShader":656,"@marcom/ac-cname":17,"@marcom/ac-eclipse":150,"@marcom/ac-object/clone":457,"@marcom/ac-viewport-emitter":590}],654:[function(l,k,h){var m=l("./Device");
var i=function(a){this.options=a;THREE.ShaderChunk.lights_phong_fragment="BlinnPhongMaterial material;\n";
THREE.ShaderChunk.lights_phong_fragment+="material.diffuseColor = diffuseColor.rgb;\n";
THREE.ShaderChunk.lights_phong_fragment+="material.specularColor = specular;\n";
THREE.ShaderChunk.lights_phong_fragment+="material.specularShininess = shininess;\n";
THREE.ShaderChunk.lights_phong_fragment+="#ifdef USE_EMISSIVEMAP\n";THREE.ShaderChunk.lights_phong_fragment+="material.specularShininess = emissiveColor.r*80.0;\n";
THREE.ShaderChunk.lights_phong_fragment+="#endif\n";THREE.ShaderChunk.lights_phong_fragment+="material.specularStrength = specularStrength;\n";
this.el=document.createElement("div");this.device=new m({el:this.el,basePath:a.basePath,scrollMotionEmitter:a.scrollMotionEmitter,width:a.width,height:a.height})
};var j=i.prototype;j.onResize=function(a,b){this.device.resize(a,b)};j.onRetinaChange=function(){this.device._onRetinaChange()
};j.render=function(){this.device.render();if(!this.isEnabled()){this.enable()}};
j.isEnabled=function(){return this.device.lightTimeline.playing()};j.enable=function(){this.device.lightTimeline.play()
};j.disable=function(){this.device.lightTimeline.pause()};k.exports=i},{"./Device":653}],655:[function(d,g,f){g.exports="// File:src/Three.js\n/*! @author mrdoob / http://mrdoob.com/ */\n\n#define USE_MAP\n#define USE_EMISSIVEMAP\n#define USE_NORMALMAP\n#define USE_SPECULARMAP\n#define USE_ALPHAMAP\n#define PHONG\n#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n\nvarying vec2 vUv;\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform sampler2D map;\nuniform sampler2D alphaMap;\nuniform sampler2D emissiveMap;\nuniform vec3 ambientLightColor;\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nuniform sampler2D specularMap;\nuniform sampler2D shadowMap;\n\nuniform sampler2D highlightAlphaMap;\nuniform sampler2D highlightMap;\nuniform vec2 highlightOffset;\nuniform float highlightOpacity;\n\nfloat blendAdd(float base, float blend) {\n	return min(base+blend,1.0);\n}\n\nvec3 blendAdd(vec3 base, vec3 blend) {\n	return min(base+blend,vec3(1.0));\n}\n\nvec3 blendAdd(vec3 base, vec3 blend, float opacity) {\n	return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n\nvec3 packNormalToRGB( const in vec3 normal ) {\n  	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  	return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n\n\nbool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n	return any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n		if( decayExponent > 0.0 ) {\n			#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n				float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n				float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n				return distanceFalloff * maxDistanceCutoffFactor;\n			#else\n				return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n			#endif\n		}\n		return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n	\nstruct DirectionalLight {\n	vec3 direction;\n	vec3 color;\n	int shadow;\n	float shadowBias;\n	float shadowRadius;\n	vec2 shadowMapSize;\n};\nuniform DirectionalLight directionalLights[ 1 ];\nvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n	directLight.color = directionalLight.color;\n	directLight.direction = directionalLight.direction;\n	directLight.visible = true;\n}\n\nstruct PointLight {\n	vec3 position;\n	vec3 color;\n	float distance;\n	float decay;\n	int shadow;\n	float shadowBias;\n	float shadowRadius;\n	vec2 shadowMapSize;\n};\nuniform PointLight pointLights[ 3 ];\nvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n	vec3 lVector = pointLight.position - geometry.position;\n	directLight.direction = normalize( lVector );\n	float lightDistance = length( lVector );\n	if ( testLightInRange( lightDistance, pointLight.distance ) ) {\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = true;\n	} else {\n		directLight.color = vec3( 0.0 );\n		directLight.visible = false;\n	}\n}\n\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n	vec3 q0 = dFdx( eye_pos.xyz );\n	vec3 q1 = dFdy( eye_pos.xyz );\n	vec2 st0 = dFdx( vUv.st );\n	vec2 st1 = dFdy( vUv.st );\n	vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n	vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n	vec3 N = normalize( surf_norm );\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy = normalScale * mapN.xy;\n	mat3 tsn = mat3( S, T, N );\n	return normalize( tsn * mapN );\n}\n\nvoid main() {\n\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n\n	float specularStrength;\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n	\n	float flipNormal = 1.0;\n\n	vec3 normal = normalize( vNormal ) * flipNormal;\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n\n	BlinnPhongMaterial material;\n	material.diffuseColor = diffuseColor.rgb;\n	material.specularColor = specular;\n	material.specularShininess = emissiveColor.r*80.0;\n	material.specularStrength = specularStrength;\n	\n	GeometricContext geometry;\n	geometry.position = - vViewPosition;\n	geometry.normal = normal;\n	geometry.viewDir = normalize( vViewPosition );\n	IncidentLight directLight;\n\n	PointLight pointLight;\n	\n	pointLight = pointLights[ 0 ];\n	getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		\n	RE_Direct( directLight, geometry, material, reflectedLight );\n	\n	pointLight = pointLights[ 1 ];\n	getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		\n	RE_Direct( directLight, geometry, material, reflectedLight );\n	\n	pointLight = pointLights[ 2 ];\n	getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		\n	RE_Direct( directLight, geometry, material, reflectedLight );\n\n	DirectionalLight directionalLight;\n	directionalLight = directionalLights[ 0 ];\n	getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n	RE_Direct( directLight, geometry, material, reflectedLight );\n	#if defined( RE_IndirectDiffuse )\n		vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n		RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n	#endif\n\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n	#if defined( TONE_MAPPING )\n		gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n	#endif\n\n	gl_FragColor = linearToOutputTexel( gl_FragColor );\n\n	vec2 highlightUV = vUv + highlightOffset;\n	vec3 highlightColor = texture2D(highlightMap, highlightUV).xyz;\n	float highlightAlpha = texture2D(highlightAlphaMap, vUv).x*highlightOpacity;\n\n	gl_FragColor = vec4(blendAdd(gl_FragColor.xyz,highlightColor,highlightAlpha),gl_FragColor.a);\n\n	float ambientOcclusion = ( 1.0 - texture2D( shadowMap, vUv ).r );\n	vec4 shadowColor = vec4(0.0,0.0,0.0,1.0);\n	shadowColor *= ambientOcclusion;\n\n	gl_FragColor *= texture2D( alphaMap, vUv ).g;\n	gl_FragColor += shadowColor;\n}"
},{}],656:[function(d,g,f){g.exports="// File:src/Three.js\n/*! @author mrdoob / http://mrdoob.com/ */\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;\n\nvarying vec2 vUv;\n\nvoid main() {\n	vUv = uv;\n	\n	vec3 objectNormal = vec3( normal );\n\n	vec3 transformedNormal = normalMatrix * objectNormal;\n	vNormal = transformedNormal;\n\n	vec3 transformed = vec3( position );\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n\n	vViewPosition = -mvPosition.xyz;\n}\n"
},{}]},{},[648]);