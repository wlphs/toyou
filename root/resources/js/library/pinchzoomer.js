/*!
 * VERSION: 2.0
 * DATE: 08-30-2016
 * 
 * PinchZoomer
 *
 * @license Copyright (c) 2016, Ron Feliciano. All rights reserved.
 * This work is subject to the terms at http://codecanyon.net/licenses
 * 
 * @author: Ron Feliciano
 * contact me through http://codecanyon.net/user/ronfeliciano/?ref=ronfeliciano
 **/
 
 
(function(window, $)
{
	var ua = navigator.userAgent;
	
	function Utils()
	{
		
	}
	
    Utils.browser = (function()
	{
		var ua= navigator.userAgent, 
			tem, 
			M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
		
		if(/trident/i.test(M[1]))
		{
			tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
			return {name:"IE", version:(tem[1] || '') };
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
		
		if((tem= ua.match(/version\/([\.\d]+)/i))!= null) 
		{
			M[2]= tem[1];
		}
		
		if(M.length > 2)
		{
			return {name:M[0], version:M[2] };
		}
		else
		{
			return {name:M[0], version:M[1] };
		}
		
	})();
    
	Utils.getRealValue = function (str)
	{
		val = str;
		if(str !== undefined)
		{
			if(!isNaN(Number(str)))
			{
				val = Number(str);
			}
			else if(str.toLowerCase !== undefined && (str.toLowerCase() == "true" || str.toLowerCase() == "false"))
			{
				val = (str.toLowerCase() == "true");
			}
			else
			{
				var temp = $.trim(str);
				
				if(temp.length >= 2 && temp.charAt(0) == "'"  && temp.charAt(temp.length - 1) == "'")
				{
					temp = temp.substr(1, temp.length - 2);
					val = temp;
				}	
			}
		}
						
		return val;
	}
	
	Utils.hyphenToCamelCase = function(value)
	{
		return value.replace(/-([a-z])/gi, function(s, g) { return g.toUpperCase(); } );
	}
	
	Utils.preventDefault = function (e)
	{
		 if (e.preventDefault) 
		 { 
			e.preventDefault(); 
		 } 
		 else 
		 { 
			 e.returnValue = false; 
		 }
	}
	
	Utils.preventGestureDefault = function(e)
	{
		if(e !== undefined && e.gesture != undefined)
		{
			e.gesture.preventDefault();
		}
	}
	
	Utils.objectSplit = function(myStr, splitChar)
	{
		var arr = [],
			openBraceCtr = 0,
			closeBraceCtr = 0,
			openAngleCtr = 0,
			closeAngleCtr = 0;
		
		var splitStr = "";
		for(var i = 0; i < myStr.length; i++)
		{
			var myChar = myStr.charAt(i);
			
			if(myChar == '{')
			{
				openBraceCtr++;
			}
			else if(myChar == '}')
			{
				closeBraceCtr++;
			}
			else if(myChar == '[')
			{
				openAngleCtr++;
			}
			else if(myChar == ']')
			{
				closeAngleCtr++;
			}
			
			if(openBraceCtr == closeBraceCtr && openAngleCtr == closeAngleCtr)
			{
				if(myChar != splitChar)
				{
					splitStr += myChar;
				}
				else
				{
					var tempStr = splitStr;
					arr.push(tempStr);
					splitStr = "";
				}
			}	
			else
			{
				splitStr += myChar;
			}
		}
		
		if(splitStr != "")
		{ 
			arr.push(splitStr);
		}
		
		return arr;
	}
	
	Utils.stringToObject = function(str)
	{
		str = $.trim(str);
		
		var strLen = str.length,
			val = "",
			i = 0,
			j = 0,
			k = 0;
		
		if(strLen > 1)
		{
			if(str.charAt(0) == "[" && str.charAt(strLen - 1) == "]")
			{
				
				str = str.substr(1, str.length - 2);
				
				var arr = [],
					objStrs = Utils.objectSplit(str, ',');
					
				for(i = 0; i < objStrs.length; i++)
				{
					var objStr = $.trim(objStrs[i]);
					arr.push(Utils.stringToObject(objStr));
				}	
				
				val = arr;
			}
			else if(str.charAt(0) == "{" && str.charAt(strLen - 1) == "}")
			{
				str = str.substr(1, str.length - 2);
				
				
				var obj = {},
					objPairs = Utils.objectSplit(str, ';');
					
				for(i = 0; i < objPairs.length; i++)
				{
					var attr = objPairs[i].split(":"),
						prop = null,
						value = "";
						
					prop = Utils.hyphenToCamelCase($.trim(attr[0]));
						
					if(attr.length == 2)
					{
						value = Utils.stringToObject(attr[1]);
					}
					else if(attr.length > 2)
					{
						attr.splice(0, 1);
						value = Utils.stringToObject(attr.join(":"));
					}
					
					if(prop != "")
					{
						obj[prop] = value;	
					}
				}	
				
				val = obj;
			}
			else
			{
				val = Utils.getRealValue(str);
				
			}
		}
		else
		{
			val = Utils.getRealValue(str);
			
		}
		
		return val;
	}
	
	Utils.extendFrom = function (parent, child) 
	{
		child.prototype = (Object.create) ? Object.create(parent.prototype) : Utils.createObject(parent.prototype) ;
		return child.prototype;
	}
	
	Utils.createObject = function(proto) 
	{
		function o() { }
		o.prototype = proto;
		
		return new o();
	}
	
	Utils.isTouchDevice = function() 
	{
		return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
	}
	
	window.Utils = Utils;
	
}(window, jQuery));


(function(window, $)
{
	
	var FullscreenElem = function(){};
	
	FullscreenElem.TOGGLE = "toggle";
	FullscreenElem._vars = { fullscreenDiv:$("<div style='position:fixed; left:0px; top:0px; right:0px; bottom:0px; overflow:auto; z-index:99999'></div>"),
							 switchDiv:$("<div></div>"),
						     fullscreenDivCss:"fullscreenDiv",
							 isFullscreen:false,
							 bodyOverflow:$("body").css("overflow"),
							 bodyScrollLeft:0,
							 bodyScrollTop:0 };
		
	FullscreenElem._elem = null;
	
	
	
    FullscreenElem.isFullscreen = function(elem)
    {
        return $(elem).is(FullscreenElem._elem);
    }
    
	FullscreenElem.toggleFullscreen = function(elem)
	{
		FullscreenElem.fullscreen(!FullscreenElem._vars.isFullscreen, elem);
	}
	
	FullscreenElem.fullscreen = function(enter, elem)
	{
        var f = FullscreenElem,
            fv = f._vars;
        
		if(jQuery.type(enter) === "boolean")
        {
			var oldElem = f._elem,
				curElem = $(elem),
				b = $("body"),
				w = $(window),
				isFullscreen = fv.isFullscreen,
				fullscreenDiv = fv.fullscreenDiv;
				
			
			if(enter && isFullscreen && !oldElem.is(curElem))
			{
				oldElem.removeClass(fv.fullscreenDivCss);
				fv.switchDiv.after(oldElem);
				fv.switchDiv.detach();
				
				curElem.after(fv.switchDiv);
				curElem.addClass(fv.fullscreenDivCss);
				fullscreenDiv.append(curElem);
				
				f._elem = curElem;
				fv.isFullscreen = true;
				$(FullscreenElem).triggerHandler({ type:FullscreenElem.TOGGLE, target:FullscreenElem });
			}
			else if(enter != isFullscreen)
			{
				if(enter)
				{
					if(oldElem == null && curElem.length > 0)
					{
						//ok	
						b.append(fullscreenDiv);
						fv.bodyOverflow = b.css("overflow");
						fv.bodyScrollLeft = w.scrollLeft();
                        fv.bodyScrollTop = w.scrollTop();

                        //w.scrollLeft(0);
                        //w.scrollTop(0);
                        b.css("overflow", "hidden");
                        
                       	curElem.after(fv.switchDiv);
                        curElem.addClass(fv.fullscreenDivCss);
                        fullscreenDiv.append(curElem);
						
						f._elem = curElem;
						fv.isFullscreen = true;
						$(FullscreenElem).triggerHandler({ type:FullscreenElem.TOGGLE, target:FullscreenElem });
					}
					else
					{
						
						//cancel	
						console.log("There is already an element in fullscreen or elem parameter is invalid.");
					}
				}
				else
				{
					if(oldElem != null && oldElem.is(curElem))
					{
						//ok
						curElem.removeClass(fv.fullscreenDivCss);
                        fv.switchDiv.after(curElem);
                        fv.switchDiv.detach();
                        fv.fullscreenDiv.detach();

						b.css("overflow", fv.bodyOverflow);
						
                        w.scrollLeft(fv.bodyScrollLeft);
						w.scrollTop(fv.bodyScrollTop);
                        
						//reset elem to null
						f._elem = null;
						fv.isFullscreen = false;
						$(FullscreenElem).triggerHandler({ type:FullscreenElem.TOGGLE, target:FullscreenElem });
					}
					else
					{
						//cancel	
						console.log("Cancel Exit because there is no active element in fullscreen or elem parameter is invalid");
					}
				}
			}
			/*
			else
			{
				console.log("Fullscreen state is not changed.");  
			}
			*/
        }

        return fv.isFullscreen;
	}
	
	window.FullscreenElem = FullscreenElem;
	
}(window, jQuery));


(function(window, $)
{
    "use strict";
	var BaseElem = function()
		{
			
			var o = this,
				jO = $(o);
				
			o._vars = {};
			
			o.vars = function(vars)
			{
				if(vars !== undefined)
				{
					//o._vars = $.extend(o._vars, vars);
					$.extend(o._vars, vars);
				}	
				
				return o._vars;
			}
			
			o.on = function()
			{
				jO.on.apply(jO, arguments);
			}
			
			o.one = function()
			{
				jO.one.apply(jO, arguments);
			}
			
			o.off = function()
			{
				jO.off.apply(jO, arguments);
			}
			
			o.data = function()
			{
				return jO.data.apply(jO, arguments);
			}
			
		},
		p = BaseElem.prototype;
		
	window.BaseElem = BaseElem;

}(window, jQuery));


 
(function(window, $)
{
	var ToggleElem = function(elemParam, varsParam)
	{
		parent.call(this);
		
		var o = this,
			_elem = null,
			_vars = o._vars,
			_super = {};
		
		_super.vars = o.vars;
		
		o.vars = function(varsParam, forceUpdate)
		{
			if(varsParam !== undefined)
			{
				_super.vars.call(o, varsParam);
				
				//if(forceUpdate)
				//{
					o.update();
				//}
			}
			
			return _vars;
		}
		
		o.elem = function(elemParam)
		{
			if(elemParam !== undefined)
			{
				if(_elem != null)
				{
					_elem.data("elemof", null);
				}
				
				_elem = null;
				_elem = $(elemParam);
				_elem.data("elemof", o);
				$(o).triggerHandler({ type:ToggleElem.ELEM_CHANGE, target:o });
				o.update();
			}
			
			return _elem;
		}
		
		o.toggle = function()
		{
			_vars.isEnabled = !_vars.isEnabled;
			o.update();
		}
		
		o.enabled = function(value, forceUpdate)
		{
			if(value != undefined)
			{
				if(value != _vars.isEnabled || forceUpdate)
				{
					_vars.isEnabled = value;
					o.update();	
				}
			}
            
			return _vars.isEnabled;
		}
		
		o.update = function()
		{
			if(_elem != null)
			{
				var cssObj = (_vars.isEnabled) ? _vars.onCss : _vars.offCss;
				TweenLite.set(_elem, cssObj);
				$(o).triggerHandler({ type:ToggleElem.UPDATE, target:o });
			}
		}
		
		
		o.vars($.extend({ isEnabled:true, onCss:{ autoAlpha:1, force3D:true }, offCss:{ autoAlpha:0.5, force3D:true } }, varsParam));
		
		o.elem(elemParam);
	},
	parent = BaseElem,
	p = Utils.extendFrom(parent, ToggleElem);
	
	p.constructor = ToggleElem;
	
	ToggleElem.NAMESPACE = ".toggleelem";
	ToggleElem.UPDATE = "update" + ToggleElem.NAMESPACE;
	ToggleElem.ELEM_CHANGE = "elemchange" + ToggleElem.NAMESPACE;
	window.ToggleElem = ToggleElem;
	
}(window, jQuery));


 
(function (window, $)
{
    "use strict";
	var AdaptiveImageLoader = function(elemsParam, varsParam)
	{
		parent.call(this);
		
		var o = this,
            jO = $(o),
            _queue = [],
			defaultVars = { loadDefaultOnFail:false, renameRule:"folder", adaptive:false, maxConnections:6 },
			_vars = o._vars,
            _scale = 1,
            _pauseLoad = true;
			
        o.append = function(elemsParam)
        {
            if(elemsParam !== undefined)
			{
				addToQueue(elemsParam, true);
			}
        }
        
        o.prepend = function(elemsParam)
        {
             if(elemsParam !== undefined)
			{
				addToQueue(elemsParam, false);
			}
        }
        
        o.empty = function()
        {
            _queue = [];
           // _queue = null;
            _pauseLoad = true;
        }
        
        o.load = function()
        {
            _pauseLoad = false;
			var queueLen = _queue.length;
			for(var i = 0; i < _vars.maxConnections; i++)
			{
				if(i < queueLen)
				{
					var image = _queue[i];
					if(!image.data("loading"))
					{
						image.data("loading", true);
						
						image.off("load", onImageLoad).off("error", onImageError).one("load", onImageLoad).one("error", onImageError).attr("src", image.data("url"));
						
						
					}
				}
				else
				{
					i = _vars.maxConnections;	
				}
			}
            
            if(queueLen == 0)
            {
                update();
            }
            
        }
        
        o.pause = function()
        {
            
        }
        
		o.vars($.extend({}, defaultVars, varsParam));
		o.append(elemsParam);
        
        function onImageLoad(e)
		{
			var index = queueIndexOf(e.target);
			
			if(index != -1)
			{	
				
				var image = _queue[index],
					originalElem = image.data("original"),
					retain = image.data("img");
				
				if(!retain)
				{
					var url = image.data("url");
						
                    originalElem[0].style.backgroundImage =  "url(" + url + ")";
					image.remove();
				}
				else
				{
                    image.removeData("url");
					image.removeData("loading");
					image.removeData("original");
					image.removeData("img");
					image.removeData("alturl");
					image = null;	
				}
				
				_queue.splice(index, 1);
				update();
				
				if(!_pauseLoad)
				{
					o.load();
				}
			}
		}
		
		function onImageError(e)
		{
			var index = queueIndexOf(e.target);
			
			if(index != -1)
			{	
				var image = _queue[index],
					altUrl = image.data("alturl"),
					imageUrl = image.data("url");
				
				if(_vars.loadDefaultOnFail && altUrl != "" && altUrl != imageUrl)
				{
					image.off("load", onImageLoad).off("error", onImageError).one("load", onImageLoad).one("error", onRetryImageError).attr("src", altUrl);
				}
				
				else
				{
					var retain = image.data("img");
					
					if(!retain)
					{
						image.remove();
					}
					else
					{
						image.removeData("url");
						image.removeData("loading");
						image.removeData("original");
						image.removeData("img");
						image.removeData("alturl");
						image = null;	
					}
					
					_queue.splice(index, 1);
					update();
				
					if(!_pauseLoad)
					{
						o.load();
					}
				}
			}
		}
		
		function onRetryImageError(e)
		{
			var index = queueIndexOf(e.target);
			
			if(index != -1)
			{	
				var image = _queue[index],
					retain = image.data("img");
				
				image.removeData("url");
				image.removeData("loading");
				image.removeData("original");
				image.removeData("img");
				image.removeData("alturl");
				
				if(!retain)
				{
					image.remove();
				}
				else
				{
					image = null;	
				}
					
				_queue.splice(index, 1);
				update();
				
				if(!_pauseLoad)
				{
					o.load();
				}
			}
		}
		
        function queueIndexOf(target)
		{
			var index = -1,
				target = $(target),
				queueLen = _queue.length;
			
			for(var i = 0; i < queueLen; i++)
			{
				var image = _queue[i];
				
				if(target.get(0) == image.get(0))
				{
					index = i;
					i = queueLen;
				}
			}
			
			return index;
		}
        
        function addToQueue(elemsParam, append)
        {
            
			AdaptiveImageLoader.allowCustomBreakpoints = false;
			
			AdaptiveImageLoader.setBreakpointIndex();
            
            elemsParam = $(elemsParam);
            var rootImg = getImage(elemsParam);
            
            if(rootImg != null)
            {
                if(append)
                {
                    _queue.push(rootImg);
                }
                else
                {
                    _queue.unshift(rootImg);   
                }
            }
            
            var elems = elemsParam.find("*[data-src]"),
                len = elems.length;
            
            for(var i = 0; i < len; i++)
            {
                var elemImg = getImage(elems.eq(i));
                
                if(elemImg != null)
                {
                     if(append)
                    {
                        _queue.push(elemImg);
                    }
                    else
                    {
                        _queue.unshift(elemImg);   
                    }  
                }
            }
        }
        
        function update()
		{
			 jO.triggerHandler({ type:AdaptiveImageLoader.PROGRESS, target:o });

			if(_queue != null && _queue.length == 0)
			{
				 jO.triggerHandler({ type:AdaptiveImageLoader.LOAD_COMPLETE, target:o });
			}	
		}
        
        function getImage(elem)
        {
            var img = null;
            if((elem.data("src") != null && elem.data("src") != ""))
            {
                var isImg = elem.is('img'),
                    hasBg = elem.css("background-img") != "none",
                    isAdaptive = ($.type(elem.data("adaptive")) === "boolean") ? elem.data("adaptive") : _vars.adaptive,
                    url = "",
                    altUrl = "";
                
                
                var dataSrc = Utils.stringToObject(elem.data("src")),
                    invalid = false;

                
                if($.isArray(dataSrc))
                {
                    if(dataSrc.length > 0)
                    {
                        var breakpointIndex = 0;
                        if(AdaptiveImageLoader.breakpointIndex >= 0 && AdaptiveImageLoader.breakpointIndex < dataSrc.length)
                        {
                            breakpointIndex = AdaptiveImageLoader.breakpointIndex;
                        }

                        url = dataSrc[breakpointIndex];

                        if(breakpointIndex != 0)
                        {
                            altUrl = dataSrc[0];
                        }

                        if(jQuery.type(url) != "string")
                        {
                            
                            invalid = true;
                        }
                    }
                    else
                    {
                        
                        invalid = true;
                    }
                }
                
                else if(isAdaptive)
                {
                    if(_vars.renameRule == "name")
                    {
                        var fileNameArr = dataSrc.split(".");
                        fileExt = fileNameArr.pop(),
                        baseName = fileNameArr.join(".");

                        url = baseName + "_" + AdaptiveImageLoader.breakpoints[AdaptiveImageLoader.breakpointIndex].name + "." + fileExt;
                    }
                    else
                    {
                        var dir = dataSrc.substring(0, dataSrc.lastIndexOf("/")),
                            fileName = dataSrc.substring(dataSrc.lastIndexOf("/") + 1, dataSrc.length)
                            url = (dir != "") ? dir + "/" + AdaptiveImageLoader.breakpoints[AdaptiveImageLoader.breakpointIndex].name  + "/" + fileName : AdaptiveImageLoader.breakpoints[AdaptiveImageLoader.breakpointIndex].name  + "/" + fileName;

                    }

                    altUrl = dataSrc;
                }
                else
                {
                    url = elem.data("src");
                }

                if(!invalid)
                {
                    elem.removeAttr("data-src");
                    elem.removeData("src");
               
                    if(isImg)
                    {
                        img = elem;
                        img.removeAttr("src");
                    }
                    else
                    {
                        img = $("<img/>");
                    }

                    img.data("url", url);
                    img.data("loading", false);
                    img.data("original", elem);
                    img.data("img", isImg);
                    img.data("alturl", altUrl);
                }
            }
            
            return img;
        }
        
	},
	parent = BaseElem,
	p = Utils.extendFrom(parent, AdaptiveImageLoader);
	
	p.constructor = AdaptiveImageLoader;
	
	AdaptiveImageLoader.NAMESPACE = ".AdaptiveImageLoader";
	AdaptiveImageLoader.LOAD_COMPLETE = "loadcomplete" + AdaptiveImageLoader.NAMESPACE;

	AdaptiveImageLoader.PROGRESS = "progress" + AdaptiveImageLoader.NAMESPACE;
	
	AdaptiveImageLoader.breakpoints = [{name:"small", breakpoint:480},
									   {name:"medium", breakpoint:960},
									   {name:"large", breakpoint:1280}];
    
	AdaptiveImageLoader.allowCustomBreakpoints = true;
	AdaptiveImageLoader.breakpointIndex = -1;
	
	AdaptiveImageLoader.sortBreakpoints = function()
	{
		AdaptiveImageLoader.breakpoints.sort(function(a,b) { return parseFloat(a.breakpoint) - parseFloat(b.breakpoint) } );
	}
	
	AdaptiveImageLoader.setCustomBreakpoints = function(breakpoints)
	{
		if(AdaptiveImageLoader.allowCustomBreakpoints)
		{
			
			if($.isArray(breakpoints) && breakpoints.length > 0)
			{
				
				var valid = true,
					len = breakpoints.length;
					
				for(var i = 0; i < len; i++)
				{
					var breakpoint = breakpoints[i];
					if(breakpoint.name == null || breakpoint.breakpoint == null || typeof breakpoint.name !== "string" || isNaN(breakpoint.breakpoint))
					{
						valid = false;
						i = len;
					}
				}
				
				if(valid)
				{
					AdaptiveImageLoader.breakpoints = null;
					AdaptiveImageLoader.breakpoints = breakpoints;
					
					AdaptiveImageLoader.sortBreakpoints(); 
					
				}
			}
		}
	}
	
	AdaptiveImageLoader.setBreakpointIndex = function()
	{
		
		if(AdaptiveImageLoader.breakpointIndex < 0)
		{ 
			if(window.screen != null)
			{
				var screenSize = Math.max(screen.width, screen.height);
				AdaptiveImageLoader.breakpointIndex = 0;
				for(var i = AdaptiveImageLoader.breakpoints.length - 1; i >= 0; i--)
				{
					var breakpoint = AdaptiveImageLoader.breakpoints[i];
					if(screenSize >= breakpoint.breakpoint)
					{
						AdaptiveImageLoader.breakpointIndex = i;
						i = -1;		
					}
				}
			}
			else
			{
				
				AdaptiveImageLoader.breakpointIndex = 0;
			}
		}
	}
    
    
	window.AdaptiveImageLoader = AdaptiveImageLoader;
	
}(window, jQuery));


 
(function(window, $)
{
    "use strict";
    var Marker = function(elemParam, varsParam)
	{
		parent.call(this, elemParam, varsParam);
		
		var o = this,
            jO = $(o),
			_elem = null,
			_vars = o._vars,
			_super = {},
			showCss = { autoAlpha:1 },
			hideCss = { autoAlpha:0.0 },
            //showCss = { autoAlpha:1, display:"block" },
			//hideCss = { autoAlpha:0.0, display:"none" },
            _zoom = 1,
            oldZoomVisible = false,
			zoomVisible = true;
			
		_super.vars = o.vars;
		
		o.vars = function(varsParam, forceUpdate)
		{
			if(varsParam !== undefined)
			{
				_super.vars.call(o, varsParam);
				
				if(forceUpdate)
				{
					o.update();
				}
			}
			
			return _vars;
		}
		
		o.elem = function(elemParam)
		{
			if(elemParam !== undefined)
			{
				if(_elem != null)
				{
					_elem.data("elemof", null);
				}
				
				_elem = null;
				_elem = $(elemParam);
				_elem.data("elemof", o);
				jO.triggerHandler({ type:Marker.ELEM_CHANGE, target:o });
				o.update();
			}
			
			return _elem;
		}
		
		o.update = function()
		{
			zoomVisible = (_zoom >= _vars.minZoom && _zoom <= _vars.maxZoom);
			var cssObj = (zoomVisible) ? showCss : hideCss;
			cssObj.x = _vars.x;
            cssObj.y = _vars.y;
            cssObj.transformOrigin = _vars.transformOrigin;
            cssObj.force3D = true;
            cssObj.backfaceVisibility = "hidden";
			
            if(!_vars.preserveScale)
			{
				cssObj.scale = 1;
			}
			
           TweenLite.set(_elem, cssObj);
			jO.triggerHandler({ type:Marker.UPDATE, target:o });
		}
		
		o.zoom = function(curZoom, baseZoom, duration)
		{
			
            if(curZoom !== undefined)
            {
				duration = duration || 0;
            	baseZoom = baseZoom || 1;
			
            	_zoom = _vars.useRealZoom ? (curZoom * baseZoom) : curZoom;
				
				if(_vars.preserveScale)
				{
            		TweenLite.to(_elem, duration, {scale:1 / (curZoom * baseZoom)});
				}
            	setZoomVisibility();
            }
            
            return _zoom;
		}
		
		o.vars($.extend({ x:0, y:0, transformOrigin:"50% 50%", minZoom:0, maxZoom:999, preserveScale:true, useRealZoom:false }, varsParam));
		o.elem(elemParam);
        setZoomVisibility(true);
        
        function setZoomVisibility(forceUpdate)
        {
            zoomVisible = (_zoom >= _vars.minZoom && _zoom <= _vars.maxZoom);
            setVisibility(forceUpdate);
        }
        
        function setVisibility(forceUpdate)
        {
            forceUpdate = forceUpdate || false;
            if(oldZoomVisible != zoomVisible || forceUpdate)
            {
                var cssObj = zoomVisible ? showCss : hideCss;
            	TweenLite.set(_elem, cssObj);
				
				oldZoomVisible = zoomVisible;
                jO.triggerHandler({ type:Marker.UPDATE, target:o });
            }
        }
        
	},
	parent = BaseElem,
	p = Utils.extendFrom(parent, Marker);
	
	p.constructor = Marker;
	
	Marker.NAMESPACE = ".marker";
	Marker.UPDATE = "update" + Marker.NAMESPACE;
	Marker.ELEM_CHANGE = "elemchange" + Marker.NAMESPACE;
	window.Marker = Marker;
	
}(window, jQuery));


 
(function(window, $)
{
    "use strict";
	var ElemZoomer = function(elemHolderParam, elemParam, markersParam, varsParam)
	{
		parent.call(this);
		
		var o = this,
			jO = $(o),
			_vars = o._vars,
			_super = {},
			_elemHolder = null,
			_elem = null,
			_markers = [],
			inputHandler = null,
			multiPointer = (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 1),
			transformOrigin = "0px 0px",
			oldX = 0,
			oldY = 0,
			curX = 0,
			curY = 0,
			overDragX = 0,
			overDragY = 0,
			curZoom = 1,
			endZoom = 1,
			baseZoom = 1,
			ratioX = 0,
			ratioY = 0,
			centerX = 0,
			centerY = 0,
			startClientX = 0,
			startClientY = 0,
			curClientX = 0,
			curClientY = 0,
			oldWidth = 0,
			oldHeight = 0,
			curWidth = 0,
			curHeight = 0,
			elemWidth = 0,
			elemHeight = 0,
			oldElemWidth = 0,
			oldElemHeight = 0,
			elemLeft = 0,
			elemTop = 0,
			elemPosX = 0,
			elemPosY = 0,
			originalElemPosX = 0,
			originalElemPosY = 0,
			holderWidth = 0,
			holderHeight = 0,
            oldHolderWidth = 0,
            oldHolderHeight = 0,
			NO_GESTURE = 0,
			DRAG_GESTURE = 1,
			PINCH_GESTURE = 2,
			prevGesture = NO_GESTURE,
			curTouchAction = "",
			panTouchAction = "pan-x pan-y",
			curAxis = null,
			zoomComplete = true,
            resizeTweenObj = {};
			
		_super.vars = o.vars;
		
        
        
        o.elemHolder = function(newElemHolder)
        {
            if(newElemHolder !== undefined)
            {
                if(_elemHolder == null || _elemHolder[0] != $(newElemHolder)[0])
				{
                 
                    _elemHolder = $(newElemHolder).eq(0);
					if(_vars.crop)
					{
						TweenLite.set(_elemHolder, {overflow:"hidden"});
					}
                    
                    if(_elem != null)
                    {
                        _elemHolder.append(_elem);
						o.resetElem();
                    }
                    
                    jO.triggerHandler({ type:ElemZoomer.ELEM_HOLDER_CHANGE, target:o });
                }
            }
            
            return _elemHolder;
        }
        
		o.elem = function(newElem, removeOld)
		{
			if(newElem !== undefined)
			{
				if(_elemHolder != null && (_elem == null || _elem[0] != $(newElem)[0]))
				{
					if(_elem != null)
					{
                        if(inputHandler != null)
                        {
                            inputHandler.destroy();	
                            inputHandler = null;
                        }
                        
						_elem.off("mousewheel", onMouseWheel);
						if(removeOld)
						{
                        	_elem.remove();
						}
						else
						{
							_elem.detach();
						}
					}
					
					_elem = $(newElem).eq(0);
					//if(!_elemHolder.contains(_elem))
					//{
                    	_elemHolder.append(_elem);
					//}
					o.resetElem();
					setDefaultTouchAction();
					
					inputHandler = new Hammer.Manager(_elem[0], {touchAction:multiPointer ? panTouchAction : "compute"}),
					inputHandler.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
					
					inputHandler.on("hammer.input", onInput);
					inputHandler.on("doubletap", onDoubleTap);
					
					_elem.on("mousewheel", onMouseWheel);
					
					jO.triggerHandler({ type:ElemZoomer.ELEM_CHANGE, target:o });
				}
			}
			
			return _elem;
		}
		
		o.markers = function(newMarkers)
		{
            if(_elem != null && newMarkers != undefined)
			{
                o.removeMarkers();
                o.addMarkers(newMarkers);
			}
			
			return _markers;
		}
        
        o.addMarkers = function(newMarkers)
		{
            if(_elem != null && newMarkers != undefined)
			{
                var newMarkersLen = newMarkers.length;
                for(var i = newMarkersLen - 1; i >= 0; i--)
                {
                    var newMarker = newMarkers[i];
                    
                    if(!_elem.is("img"))
                    {
                       _elem.append(newMarker.elem());
                       _markers.push(newMarker);
                    }
                }
			}
		}
        
        o.removeMarkers = function()
        {
            var markersLen = _markers.length;
            for(var i = markersLen - 1; i >= 0; i--)
            {
                var marker = _markers[i];
                //marker.elem().detach();
                marker = null;
            }   
            
            _markers = [];
        }
        
		o.vars = function(varsParam)
		{
			if(varsParam !== undefined)
			{
				_super.vars.call(o, varsParam);
                
                
                setResizeCheck();
				updateElemPos();
				setDefaultTouchAction();
			}
			
			return _vars;
		}
        
        function setResizeCheck()
        {
            o.resetElem();
            if(_vars.resizeDuration != -1)
            {
                TweenLite.to(resizeTweenObj, _vars.resizeDuration, { onComplete:setResizeCheck } );
            }
            else
            {
                TweenLite.killTweensOf(resizeTweenObj);
            }
        }
        
		
		o.zoom = function(value, duration)
		{
			if(value !== undefined)
			{
				var tempZoom = value;
				
				if(tempZoom < 1)
				{
					tempZoom = 1;	
				}
				else if(tempZoom > _vars.maxZoom)
				{
					tempZoom = _vars.maxZoom;
				}	
				
				if(_vars.allowZoom)
				{
					if(zoomComplete)
					{
						updateElemPos();
					}
					
					oldX = curX;
					oldY = curY; 
					
					centerX = (elemWidth * baseZoom * _vars.zoomPointX) - curX;
					centerY = (elemHeight * baseZoom * _vars.zoomPointY) - curY;
					
					oldWidth = curWidth;
					oldHeight = curHeight;
					
					setZoomPosition(tempZoom);
					adjustPosition();
					zoomComplete = false;
					handleZoom(duration);
					
					endZoom = curZoom;
				}
			}
			
			return curZoom;
		}
		
		o.zoomIn = function(duration)
		{
			o.zoom(curZoom + _vars.zoomStep, duration);
		}
		
		o.zoomOut = function(duration)
		{
			o.zoom(curZoom - _vars.zoomStep, duration);
		}
		
		o.x = function(value, duration)
		{
			if(value !== undefined)
			{
				curX = value;
				adjustPosition(true);
				handleDrag(duration);
			}
			
			return curX;
		}
		
		o.y = function(value, duration)
		{
			if(value !== undefined)
			{
				curY = value;
				adjustPosition(true);
				handleDrag(duration);
			}
			
			return curY;
		}
		
		o.moveLeft = function(duration)
		{
			o.x(curX - vars.dragStep, duration);
		}
		
		o.moveRight = function(duration)
		{
			o.x(curX + vars.dragStep, duration);
		}
		
		o.moveUp = function(duration)
		{
			o.y(curY - vars.dragStep, duration);
		}
		
		o.moveDown = function(duration)
		{
			o.y(curY + vars.dragStep, duration);
		}
		
		
		var ctr = 0;
		o.resetElem = function(forceReset)
		{
            forceReset = (forceReset === true);
            
			if(_elem != null)
            {
				
				var bgImg = _elemHolder.find("*[data-elem='bg']").eq(0);
				
				if(bgImg.length > 0)
				{
					if(bgImg.is("img"))
					{
						elemWidth = bgImg[0].naturalWidth;
						elemHeight = bgImg[0].naturalHeight;
					}
					else
					{
						elemWidth = bgImg.width();
						elemHeight = bgImg.height();	
					}
					
					TweenLite.set(_elem, { width:elemWidth, height:elemHeight });
				}
				else
				{
					elemWidth = _elem.width();
               		elemHeight = _elem.height();
				}
				
				holderWidth = _elemHolder.width() + _vars.adjustWidth;
                holderHeight = _elemHolder.height() + _vars.adjustHeight;
                
				
				if(forceReset || holderWidth != oldHolderWidth || holderHeight != oldHolderHeight ||
                   elemWidth != oldElemWidth || elemHeight != oldElemHeight)
                {
					
					curX = 0;
                    curY = 0;
                    oldX = 0;
                    oldY = 0;
                    curZoom = 1;
                    endZoom = 1;
                    
					if(elemWidth > 0 && elemHeight > 0)
                    {
                        var widthRatio = holderWidth / elemWidth,
                            heightRatio = holderHeight / elemHeight,
							isFullscreen = o.fullscreen != undefined && o.fullscreen(),
							tempScaleMode = (_vars.fullscreenScaleMode != null && isFullscreen) ? _vars.fullscreenScaleMode : _vars.scaleMode,
							tempAdjustHolderSize = isFullscreen ? false : _vars.adjustHolderSize;

                        if(tempScaleMode == "widthOnly")
                        {
                            baseZoom = widthRatio;
                        }
                        else if(tempScaleMode == "heightOnly")
                        {
                            baseZoom = heightRatio;
                        }
                        else if(tempScaleMode == "proportionalInside")
                        {
							var elemRatio = elemHeight / elemWidth,
                                 parentRatio = holderHeight / holderWidth;

                            if (elemRatio > parentRatio) 
                            {
                                baseZoom = heightRatio;
                            }
                            else
                            {
                                baseZoom = widthRatio;
                            }
                        }
                        else if(tempScaleMode == "proportionalOutside")
                        {
                             var elemRatio = elemHeight / elemWidth,
                                 parentRatio = holderHeight / holderWidth;

                            if (elemRatio > parentRatio) 
                            {
                                baseZoom = widthRatio;
                            }
                            else
                            {
                                baseZoom = heightRatio;
                            }
                        }
						else
						{
							baseZoom = 1;	
						}

                        curWidth = elemWidth * baseZoom;
                        curHeight = elemHeight * baseZoom;
						
						if(tempAdjustHolderSize)
						{
							if(tempScaleMode == "widthOnly")
							{
								holderHeight = curHeight;
								TweenLite.set(_elemHolder, { height:curHeight });
							}
							else if(tempScaleMode == "heightOnly")
							{
								holderWidth = curWidth;
								TweenLite.set(_elemHolder, { width:curWidth });
							}
							else if(tempScaleMode == "none")
							{
								holderWidth = curWidth;
								holderHeight = curHeight;
								
								TweenLite.set(_elemHolder, { width:curWidth, height:curHeight });
							}
						}
						
                        oldWidth = curWidth;
                        oldHeight = curHeight;

                        if(curWidth < holderWidth)
                        {
                            elemLeft = 	(holderWidth - curWidth) * 0.5;
                        }
                        else
                        {
                            elemLeft = 	(holderWidth - curWidth) * _vars.initX;	
                        }

                        if(curHeight < holderHeight)
                        {
                            elemTop = (holderHeight - curHeight) * 0.5;
                        }
                        else
                        {
                            elemTop = (holderHeight - curHeight) * _vars.initY;	
                        }

						TweenLite.set(_elem, {left:elemLeft, top:elemTop, right:"auto", bottom:"auto", x:curX, y:curY, scale:baseZoom * curZoom, transformOrigin:transformOrigin, position:"absolute" });

                        if(curWidth > holderWidth || curHeight > holderHeight)
                        {
                            setTouchAction("none");
                        }
                        else
                        {
                            setTouchAction(panTouchAction);
                        }

                        updateElemPos();
                        originalElemPosX = elemPosX;
                        originalElemPosY = elemPosY;

                        handleMarkerZoom(0);
                    }
                }
                
                oldHolderWidth = holderWidth;
                oldHolderHeight = holderHeight;
                oldElemWidth = elemWidth;
                oldElemHeight = elemHeight;
            }
		}
		
		o.vars($.extend({}, ElemZoomer.defaultVars, varsParam));
        o.elemHolder(elemHolderParam);
		o.elem(elemParam);
        o.markers(markersParam);
        o.zoom(1, 0);
        $(window).resize(o.resetElem);
        
		function setTouchAction(value)
		{
			if(multiPointer && value != curTouchAction)
			{
				curTouchAction = value;
				if(_elem != null)
				{
					TweenLite.set(_elem, { touchAction:curTouchAction });
				}
			}
		}
		
		function setDefaultTouchAction()
		{
			if(multiPointer)
			{
				if(_vars.handleOverDragX && _vars.handleOverDragY)
				{
					panTouchAction = "none";
				}
				else if(_vars.handleOverDragX)
				{
					panTouchAction = "pan-y";	
				}
				else if(_vars.handleOverDragY)
				{
					panTouchAction = "pan-x";	
				}	
			}
		}
		
		function output(text)
		{
			$("#outputText").prepend(text + "<br>");	
		}
		
		function onDoubleTap(e)
		{
			if(zoomComplete)
			{
				var tempZoom = endZoom;
				
				if(tempZoom >= _vars.doubleTapZoom)
				{
					tempZoom = 1;
				}
				else
				{
					tempZoom  = _vars.doubleTapZoom;
				}
				
				if(_vars.allowZoom)
				{
					if(tempZoom >= 1 && tempZoom <= _vars.maxZoom)
					{
						if(zoomComplete)
						{
							updateElemPos();
						}
						
						oldX = curX;
						oldY = curY; 
					
						
						var center = e.center;
						
						centerX = center.x - elemPosX - curX;
						centerY = center.y - elemPosY - curY;
						
						oldWidth = curWidth;
						oldHeight = curHeight;
						
						setZoomPosition(tempZoom);
						adjustPosition();
						zoomComplete = false;
						handleZoom();
						
						endZoom = curZoom;
					}
				}
			}
			e.srcEvent.preventDefault();
		}
		
		function onMouseWheel(e, delta, deltaX, deltaY)
		{
			if(prevGesture == NO_GESTURE)
			{
				if(zoomComplete)
				{
					updateElemPos();
				}
				
				var tempZoom = endZoom,
					preventScroll = false;
				
				if(delta > 0)
				{
					tempZoom += _vars.zoomStep;
				}
				else
				{
					tempZoom -= _vars.zoomStep;
				}
				
				if(_vars.allowZoom && _vars.allowMouseWheelZoom)
				{
					if(tempZoom >= 1 && tempZoom <= _vars.maxZoom)
					{
						oldX = curX;
						oldY = curY; 
						
						centerX = e.clientX - elemPosX - curX;
						centerY = e.clientY - elemPosY - curY;
						
						oldWidth = curWidth;
						oldHeight = curHeight;
						
						setZoomPosition(tempZoom);
						adjustPosition();
						zoomComplete = false;
						handleZoom();
						
						endZoom = curZoom;
						preventScroll = true;
					}
				}
			}
			
			if(preventScroll || !_vars.allowMouseWheelScroll || !zoomComplete)
			{
				if (e.preventDefault) 
				{ 
					e.preventDefault(); 
				} 
				else 
				{ 
					e.returnValue = false; 
				}
			}
			
		}
		
		function onInput(e)
		{
			if(e.pointers.length == 1)
			{
				if(prevGesture != DRAG_GESTURE)
				{
					endZoom = curZoom;
					oldWidth = curWidth;
					oldHeight = curHeight;
					oldX = curX;
					oldY = curY;
					overDragX = 0;
					overDragY = 0;
					curAxis = null;
					
					startClientX = e.pointers[0].clientX >> 0;
					startClientY = e.pointers[0].clientY >> 0;
					
					if(e.pointerType == "mouse" || curWidth > holderWidth || curHeight > holderHeight)
					{
						e.srcEvent.preventDefault();
					}
				}
				else
				{
					curClientX = e.pointers[0].clientX >> 0;
					curClientY = e.pointers[0].clientY >> 0;
					
					var deltaX = curClientX - startClientX,
						deltaY = curClientY - startClientY,
						asbDeltaX = Math.abs(deltaX),

						asbDeltaY = Math.abs(deltaY);
						
					if(curAxis == "x")
					{
						deltaY = 0;	
						asbDeltaY = 0;
					}
					else if(curAxis == "y")
					{
						deltaX = 0;	
						asbDeltaX = 0;	
					}
						
					curX = oldX + deltaX;
					curY = oldY + deltaY;
					
					adjustPosition(true);
					handleDrag(0);
					
					if(endZoom > 1 || curWidth > holderWidth || curHeight > holderHeight || _vars.handleOverDragX == _vars.handleOverDragY)
					{
						e.srcEvent.preventDefault();
					}
					else if(_vars.handleOverDragX != _vars.handleOverDragY)
					{
						if(asbDeltaX > asbDeltaY)
						{
							if(curAxis == null)
							{
								curAxis = "x";	
							}
							
							if(_vars.handleOverDragX)
							{
								e.srcEvent.preventDefault();
							}
						}
						else if(asbDeltaY > asbDeltaX)
						{
							if(curAxis == null)
							{
								curAxis = "y";	
							}
							if(_vars.handleOverDragY)
							{
								e.srcEvent.preventDefault();
							}
						}
					}
				}
				
				
				if(e.isFirst)
				{
					jO.triggerHandler({ type:ElemZoomer.GESTURE_START, target:o });
				}
				else if(e.isFinal)
				{
					oldX = curX;
					oldY = curY;
					prevGesture = NO_GESTURE;
					jO.triggerHandler({ type:ElemZoomer.GESTURE_END, target:o });
				}
				else
				{
					prevGesture = DRAG_GESTURE;
				}
			}
			else if (e.pointers.length > 1)
			{
				if(_vars.allowZoom)
				{
					if(prevGesture != PINCH_GESTURE)
					{
						updateElemPos();
						
						
						var center = e.center;
						
						centerX = center.x - elemPosX - oldX;
						centerY = center.y - elemPosY - oldY;
						oldWidth = curWidth;
						oldHeight = curHeight;
						oldX = curX;
						oldY = curY;
					}
					else
					{
						setZoomPosition(endZoom * e.scale)
						adjustPosition();
						handleZoom();
					}
					prevGesture = PINCH_GESTURE;
					
					e.srcEvent.preventDefault();
				}
			}
			
			if(endZoom > 1 || curWidth > holderWidth || curHeight > holderHeight)
			{
				setTouchAction("none");
			}
			else
			{
				setTouchAction(panTouchAction);
			}
		}
		
		function setZoomPosition(value)
		{
			curZoom = value;
			
						
			if(curZoom < 1)
			{
				curZoom = 1;	
			}
			else if(curZoom > _vars.maxZoom)
			{
				curZoom = _vars.maxZoom;	
			}
			
			curWidth = elemWidth * baseZoom * curZoom;
			curHeight = elemHeight * baseZoom * curZoom;
			ratioX = centerX / oldWidth;
			ratioY = centerY / oldHeight; 
			
			curX = oldX - ((curWidth - oldWidth) * ratioX);
			curY = oldY - ((curHeight - oldHeight) * ratioY);	
		}
		
		function adjustPosition(fromDrag)
		{
			var tempCurX = curX,
				tempCurY = curY;
				
			if(curWidth <= holderWidth)
			{
				curX = ((holderWidth - curWidth) * 0.5) - elemLeft;
			}
			else if(curX > -elemLeft)
			{
				curX = -elemLeft;
			}
			else if(curX + curWidth < holderWidth - elemLeft)
			{
				curX = holderWidth - curWidth - elemLeft;
			}
			
			if(curHeight <= holderHeight)
			{
				curY = ((holderHeight - curHeight) * 0.5) - elemTop;
			}
			else if(curY > -elemTop)
			{
				curY = -elemTop;
			}
			else if(curY + curHeight < holderHeight - elemTop)
			{
				curY = holderHeight - curHeight - elemTop;
			}
			
			if(fromDrag)
			{
				if(_vars.handleOverDragX && curX != tempCurX)
				{
					overDragX = curX - tempCurX;
					jO.triggerHandler({ type:ElemZoomer.OVER_DRAG_X, 
											    x:overDragX, 
												target:o });
				}
				
				if(_vars.handleOverDragY && curY != tempCurY )
				{
					overDragY = curY - tempCurY;
					
					jO.triggerHandler({ type:ElemZoomer.OVER_DRAG_Y, 
										   		y:overDragY, 
												target:o });
				}
			}
		}
		
		function onZoomComplete()
		{
			zoomComplete = true;	
		}
		
		function handleZoom(duration)
		{
			duration = !isNaN(duration) ? duration : _vars.animDuration;
			
            var zoom = curZoom * baseZoom,
				zoomObj = { scale:zoom, x:curX, y:curY, force3D:_vars.force3D, backfaceVisibility:"hidden" , onComplete:onZoomComplete };
			//TweenLite.to(_elem, duration, { scale:zoom, transformOrigin:transformOrigin, x:curX, y:curY, force3D:_vars.force3D, backfaceVisibility:"hidden", onComplete:onZoomComplete });
			
			
			
			TweenLite.to(_elem, duration, zoomObj);
			//TweenLite.to(_elem, duration, { scale:zoom, x:curX, y:curY, onComplete:onZoomComplete });
			
			handleMarkerZoom(duration);
			//var markerZoom = 1 / zoom;
			//TweenLite.to("#markerTest .marker", duration, {scale:markerZoom});
            
            jO.triggerHandler({ type:ElemZoomer.ZOOM, 
								  		x:curX,
										y:curY, 
								  		zoom:curZoom, 
								  		target:o });	
		}
        
        function handleMarkerZoom(duration)
        {
            if(_markers.length > 0)
			{
				duration = !isNaN(duration) ? duration : _vars.animDuration;
                
                for(var i = 0; i < _markers.length; i++)
                {
                    var marker = _markers[i];
                    marker.zoom(curZoom, baseZoom, duration); 
                }
			}
        }
		
		function handleDrag(duration)
		{
			duration = !isNaN(duration) ? duration : _vars.animDuration;
			
			TweenLite.to(_elem, duration, { transformOrigin:transformOrigin, x:curX, y:curY, force3D:_vars.force3D, backfaceVisibility:"hidden"});	
			//TweenLite.to(_elem, duration, { transformOrigin:transformOrigin, x:curX, y:curY });	
			
			jO.triggerHandler({ type:ElemZoomer.DRAG, 
								  		x:curX,
										y:curY, 
								  		target:o });				
		}
		
		function updateElemPos()
		{
			if(_elem != null)
			{
				var clientRect = _elem[0].getBoundingClientRect();
				elemPosX = clientRect.left - curX;
				elemPosY = clientRect.top - curY;
			}
		}
	},
	parent = BaseElem,
	p = Utils.extendFrom(parent, ElemZoomer);
	
	p.constructor = ElemZoomer;
	
	ElemZoomer.defaultVars = { animDuration:0.25, crop:true, maxZoom:10, scaleMode:"widthOnly", adjustHolderSize:true, ease:Power4.easeOut, allowZoom:true, allowMouseWheelZoom:true, allowMouseWheelScroll:false, doubleTapZoom:2, dragStep:10, zoomStep:0.5, initX:0.5, initY:0.0, zoomPointX:0.5, zoomPointY:0.5, adjustWidth:0, adjustHeight:0, preloaderUrl:null, resizeDuration:-1, handleOverDragX:true, handleOverDragY:false, force3D:false };
	
	ElemZoomer.NAMESPACE = ".elemzoomer"
	ElemZoomer.ELEM_HOLDER_CHANGE = "elemholderchange" + ElemZoomer.NAMESPACE;
	ElemZoomer.ELEM_CHANGE = "elemchange" + ElemZoomer.NAMESPACE;
	ElemZoomer.OVER_DRAG_X = "overdragx" + ElemZoomer.NAMESPACE;
	ElemZoomer.OVER_DRAG_Y = "overdragy" + ElemZoomer.NAMESPACE;
	ElemZoomer.DRAG = "drag" + ElemZoomer.NAMESPACE;
	ElemZoomer.ZOOM = "zoom" + ElemZoomer.NAMESPACE;
	ElemZoomer.GESTURE_START = "gesturestart" + ElemZoomer.NAMESPACE;
	ElemZoomer.GESTURE_END = "gestureend" + ElemZoomer.NAMESPACE;
	window.ElemZoomer = ElemZoomer;
	
}(window, jQuery));
 
(function(window, $)
{
    "use strict";
	var PinchZoomer = function(elemParam, varsParam, parseControlsParam)
	{
		
		var pzObj = PinchZoomer.parseElem(elemParam, null, varsParam, parseControlsParam);
		
		parent.call(this, $(elemParam).parent(), pzObj.elem, pzObj.markers, pzObj.vars);
		
		var o = this,
			jO = $(o),
			_vars = o._vars,
			_elem = null,
			_super = {},
			_controls = {},
			_showMarkers = true,
            preloaderDiv = $("<div style='position:absolute; left:0px; top:0px; right:0px; bottom:0px; background-position:center center; background-repeat:no-repeat'></div>"), 
			realScaleMode = _vars.scaleMode,
            realAdjustHolderSize = _vars.adjustHolderSize,
            body = $("body"),
            imageLoader = null,
            hasLoadSetup = false;
		
       _super.elem = o.elem;
		
		o.controls = function(controlsParam)
		{
			if(controlsParam !== undefined)
			{
                _controls.controlHolder = controlsParam.controlHolder;
				for(var i = 0; i < PinchZoomer.BUTTON_CONTROL_NAMES.length; i++)
				{
					var controlName = PinchZoomer.BUTTON_CONTROL_NAMES[i];
					if(controlsParam[controlName])
					{
						if(_controls[controlName])
						{
							_controls[controlName].elem().off("click" + PinchZoomer.NAMESPACE, o[controlName]);
							_controls[controlName] = null;
						}
						_controls[controlName] = controlsParam[controlName];
						
						var controlElem = _controls[controlName].elem();
						controlElem.off("click" + PinchZoomer.NAMESPACE, o[controlName]).on("click" + PinchZoomer.NAMESPACE, o[controlName]);
					}
				}
				
				onZoom(true);
				//onMarkersToggle();
			}
			
			return _controls;
		}
		
        
		o.fullscreen = function(value)
		{
            var elemHolder = o.elemHolder();
            
            if($.type(value) === "boolean")
            {
                FullscreenElem.fullscreen(value, o.elemHolder());
                onFullscreenToggle();
				o.resetElem(true);
			 	jO.triggerHandler({ type:PinchZoomer.FULLSCREEN_TOGGLE, target:o });
            }
            
            return elemHolder != null && FullscreenElem.isFullscreen(elemHolder);
		}
		
		o.fullscreenToggle = function()
		{
            o.fullscreen(!o.fullscreen());
		}
		
        o.load = function()
        {
           if(imageLoader != null)
           {
			   TweenLite.delayedCall(0.1, imageLoader.load);   
           }
        }
		
		o.elem = function(elem, removeOld, parseControls, overwriteVars)
		{
			var elemParent = o.elemHolder(),
				obj = PinchZoomer.parseElem(elem, elemParent, overwriteVars ? o.vars() : PinchZoomer.defaultVars, parseControls);
				
			_elem = _super.elem(obj.elem, removeOld);
			o.vars(obj.vars);
			o.markers(obj.markers);
			o.resetElem(true);
			
			if(parseControls)
			{
				o.controls(obj.controls);
			}
			
			return _elem;
		}
		
		o.id = function()
		{
			return _vars.id;
		}
		
		o.controls(pzObj.controls);
		o.on(PinchZoomer.ZOOM, onZoom);
		o.on(PinchZoomer.ELEM_CHANGE, onElemChange);
        o.on(PinchZoomer.ELEM_HOLDER_CHANGE, onElemHolderChange);
        
		onElemChange();
		onElemHolderChange();
		onFullscreenToggle();
		onZoom(true);
		/****** Private Functions ******/
        
        function onElemChange()
        {
            hasLoadSetup = false;
            setupLoader(); 
            
            if(_vars.preload)
            {
                o.load();
            }
        }
        
        function onElemHolderChange()
        {
            var hasControlHolder = (_controls.controlHolder != null && _controls.controlHolder.length == 1),

                elemHolder = o.elemHolder();
            
            if(hasControlHolder)
            {
                elemHolder.append(_controls.controlHolder);
            }
            
            for(var i = 0; i < PinchZoomer.BUTTON_CONTROL_NAMES.length; i++)
			{
				var controlName = PinchZoomer.BUTTON_CONTROL_NAMES[i],
					controlElem = _controls[controlName];
				
                if(hasControlHolder)
                {
                    if(controlElem.elem().parent()[0] != _controls.controlHolder[0])
                    {
                       elemHolder.append(controlElem);
                    }
                }
			}
        }
        
        function setupLoader()
        {
            if(!hasLoadSetup)
            {
                var elem = o.elem();
                if(window.AdaptiveImageLoader !== undefined)
                {

                    var elem = o.elem(),
                        elemHolder = o.elemHolder();

                    TweenLite.set(elem, { alpha:0 });
                    if(_vars.preloaderUrl != null && _vars.preloaderUrl != "")
                    {
                        preloaderDiv[0].style.backgroundImage =  "url(" + _vars.preloaderUrl + ")";
                    }

                    elemHolder.append(preloaderDiv);
                    if(imageLoader != null)
                    {
                        imageLoader.off(AdaptiveImageLoader.LOAD_COMPLETE, onImagesLoaded);
                        imageLoader.empty();
                    }
                    
                    imageLoader = null;
					imageLoader = new AdaptiveImageLoader(elem, _vars.imageLoaderOptions);					
					
                    imageLoader.one(AdaptiveImageLoader.LOAD_COMPLETE, onImagesLoaded);
                }
                
                hasLoadSetup = true;
            }
        }
        
        function onImagesLoaded()
        {
			preloaderDiv.detach();  
            o.resetElem();
            TweenLite.to(o.elem(), _vars.animDuration, {alpha:1});
			jO.triggerHandler({ type:PinchZoomer.LOAD_COMPLETE, target:o });
        }
        
		function onZoom(forceUpdate)
		{
			forceUpdate = $.type(forceUpdate) === "boolean" ? forceUpdate : false;
			var zoom = o.zoom();
			
			if(_controls.zoomIn)
			{
				var enableZoomIn = false;
				if(zoom < _vars.maxZoom)
				{
					enableZoomIn = true;
				}
				
				_controls.zoomIn.enabled(enableZoomIn, forceUpdate);
			}
			
			if(_controls.zoomOut)
			{
				var enableZoomOut = false;
				if(zoom > 1)
				{
					enableZoomOut = true;
				}
				
				_controls.zoomOut.enabled(enableZoomOut, forceUpdate);
			}
		}
        
        function onScreenFullToggle()
        {
           jO.triggerHandler({ type:PinchZoomer.FULLSCREEN_TOGGLE, target:o });
        }
        
        function onFullscreenToggle()
        {
            if(_controls.fullscreenToggle)
            {
                var fs = o.fullscreen();
                _controls.fullscreenToggle.enabled(FullscreenElem.isFullscreen(o.elemHolder()), true);
            }   
        }
		
		function onMarkersToggle()
		{
			if(_controls.markerToggle)
			{
				_controls.markerToggle.enabled(_showMarkers);
			}
		}
		
	},
	parent = ElemZoomer,
	p = Utils.extendFrom(parent, PinchZoomer);
	
	p.constructor = PinchZoomer;
	
	for (var prop in parent) 
	{
    	PinchZoomer[prop] = ElemZoomer[prop];
	}
	
	PinchZoomer.defaultVars = $.extend({}, ElemZoomer.defaultVars, { appendControls:true, appendControlHolder:true, fullscreenDivCss:"fullscreenDiv", fullscreenScaleMode:"proportionalInside", preloaderUrl:"https://0.s3.envato.com/files/203121821/assets/preloader.gif", preload:true });
	
	PinchZoomer.BUTTON_CONTROL_NAMES = ["zoomIn", "zoomOut", "fullscreenToggle"];
	PinchZoomer.DEFAULT_TRANSFORM_ORIGIN = "50% 50%"
	PinchZoomer.FULLSCREEN_TOGGLE = "fullscreenToggle" + PinchZoomer.NAMESPACE;
	PinchZoomer.LOAD_COMPLETE = "loadcomplete" + PinchZoomer.NAMESPACE;
	
	PinchZoomer.objs = [];
	PinchZoomer._lastId = 1;
	PinchZoomer.transformPresets = [];
	PinchZoomer._transformPresetLastId = 1;
     
    PinchZoomer.getTransformOrigin = function(idOrIndex)
	{
		var transformOrigin = PinchZoomer.DEFAULT_TRANSFORM_ORIGIN;
		
		if(!isNaN(idOrIndex))
		{
			if(idOrIndex >= 0 && idOrIndex < PinchZoomer.transformPresets.length)
			{
				transformOrigin = PinchZoomer.transformPresets[idOrIndex].transformOrigin;	
			}
		}
		else
		{
			for(var i = 0; i < PinchZoomer.transformPresets.length; i++)
			{
				var transformPreset = PinchZoomer.transformPresets[i];
				
				if(idOrIndex == transformPreset.id)
				{
					transformOrigin = transformPreset.transformOrigin;	
					i = PinchZoomer.transformPresets.length;
				}
			}
		}
		
		return transformOrigin;
	}
	
	PinchZoomer.parseElem = function(elem, elemParent, vars, parseControls)
	{
		elem = $(elem).eq(0);
		elemParent = (elemParent != undefined) ? $(elemParent) : elem.parent();
		
		var obj = {},
			elemVars = {},
			markers = [],
			controls = {},
			i;
			
		if(elem.length == 1 && elemParent.length == 1)
		{
			parseControls = ($.type(parseControls) === "boolean") ? parseControls : true;
			var markerElems = elem.find("*[data-elem='marker']"),
				pzId = elem.attr("id") || "pz" + PinchZoomer._lastId;
				
			PinchZoomer._lastId++;
			
			elemVars = $.extend({id:pzId}, PinchZoomer.defaultVars, vars, Utils.stringToObject("{" + elem.data("options") + "}"));
			
			if(window.Marker !== undefined)
			{
				var markersLen = markerElems.length;
				for(i = 0; i < markersLen; i++)
				{
					var markerElem = markerElems.eq(i),
						markerVars = Utils.stringToObject("{" + markerElem.data("options") + "}");
					
					if(markerVars.transformOrigin != null && isNaN(markerVars.transformOrigin.charAt(0)))
					{
						markerVars.transformOrigin = PinchZoomer.getTransformOrigin(markerVars.transformOrigin);
					}
					
					var marker = new Marker(markerElem, markerVars);
					markers.push(marker);
				}
				
			}
			
			if(parseControls && window.ToggleElem  !== undefined)
			{
				controls.controlHolder = elemParent.find("*[data-elem='controlHolder']").eq(0);
				
				if(elemVars.appendControlHolder && controls.controlHolder.length == 0)
				{
					controls.controlHolder = $("<div class='controlHolder' data-elem='controlHolder'></div>");
					elemParent.append(controls.controlHolder);
				}
			
				for(i = 0; i < PinchZoomer.BUTTON_CONTROL_NAMES.length; i++)
				{
					var controlName = PinchZoomer.BUTTON_CONTROL_NAMES[i],
						controlElem = elemParent.find("*[data-elem='" + controlName + "']"),
						defaultVars = { onCss:{ className:controlName + " on" }, offCss:{ className:controlName + " off" } },
						controlVars = {};
						
				   	if(controlElem.length == 0)
					{
						if(elemVars.appendControls)
						{
							controlElem = $("<div class='" + controlName + "'></div>");
							controls[controlName] = new ToggleElem(controlElem, defaultVars);
							
							if(controls.controlHolder.length == 0)
							{
								controlVars = defaultVars;
								elemParent.append(controlElem);
							}
							else
							{
								controls.controlHolder.append(controlElem);
							}
						}
					}
					else
					{
						controlElem = controlElem.eq(0);
						controlVars = Utils.stringToObject("{" + controlElem.data("options") + "}");
						controls[controlName] = new ToggleElem(controlElem, controlVars);
					}
				}
			}
			
			obj.elem = elem;
			obj.vars = elemVars;
			obj.markers = markers;
			obj.controls = controls;
		}
		
		return obj;
	}
	
	PinchZoomer.get = function(idOrIndex)
	{
		var len = PinchZoomer.objs.length,
			pzObj = null;
			
		if(!isNaN(idOrIndex))
		{
			if(idOrIndex >= 0 && idOrIndex < len)
			{
				pzObj = PinchZoomer.objs[idOrIndex];
			}
		}
		else
		{
			for(var i = 0; i < len; i++)
			{
				var pz = PinchZoomer.objs[i];
				if(pz.id() == idOrIndex)
				{
					pzObj = pz;	
					i = len;
				}
			}
		}
		
		return pzObj;
	}
	
	PinchZoomer.remove = function(idOrIndex)
	{
		var index = -1,
			len = PinchZoomer.objs.length;
			
		if(!isNaN(idOrIndex))
		{
			index = idOrIndex;
		}
		else
		{
			for(var i = 0; i < len; i++)
			{
				if(PinchZoomer.objs[i].id() == idOrIndex)
				{
					index = i;
					i = len;
				}
			}
		}
		
		if(index >= 0 && index < len)
		{
			var pz = PinchZoomer.objs[index],
				elem = pz.elem(),
				elemHolder = pz.elemHolder();
			
			if(pz.fullscreen())
			{
				pz.fullscreen(false);	
			}
			
			if(elem != null)
			{
				elem.remove();
				elemHolder.remove();
			}
			
			elem = null;
			PinchZoomer.objs[index] = null;
			PinchZoomer.objs.splice(index, 1);
		}
		/*
		else
		{
			console.log("NOTHING REMOVED");
		}
		*/
	}
	
	PinchZoomer.init = function(elemsParam)
	{
		var i = 0, 
			j = 0,
			transformPresetElems = $("*[data-elem='transformPreset']"),
            imageLoaderOptions = {};
			
        if(window.AdaptiveImageLoader !== undefined)
        {

            var imageLoaderElem = $("*[data-elem='imageloader']");
            if(imageLoaderElem.length != 0)
            {
                imageLoaderOptions = Utils.stringToObject("{" + imageLoaderElem.eq(0).data("options") + "}");
            }

            var breakpointElem = $("*[data-elem='breakpoints']");
            if(breakpointElem.length != 0)
            {
                AdaptiveImageLoader.setCustomBreakpoints(Utils.stringToObject("[" + breakpointElem.eq(0).data("value") +"]"));
            }

            imageLoaderElem.remove();
            breakpointElem.remove();
        }
			
		for(i = 0; i < transformPresetElems.length; i++)
		{
			var transformPresetElem = transformPresetElems.eq(i),
				transformPreset = $.extend({id:"transformPreset" + PinchZoomer._transformPresetLastId, transformOrigin:PinchZoomer.DEFAULT_TRANSFORM_ORIGIN}, Utils.stringToObject("{" + transformPresetElem.data("options") + "}"));
				
			PinchZoomer.transformPresets.push(transformPreset);
			PinchZoomer._transformPresetLastId++;
			
			transformPresetElem.removeAttr("data-elem");
			transformPresetElem.removeAttr("data-options");
		}
		
		var elems = $(elemsParam || "*[data-elem='pinchzoomer']"),
			elemsLen = elems.length;
			
		for(i = 0; i < elemsLen; i++)
		{
			var elem = elems.eq(i);
			
            var pz = new PinchZoomer(elem);
			PinchZoomer.objs.push(pz);
		}
	}
	
	window.PinchZoomer = PinchZoomer;
	
}(window, jQuery));

(function ($) 
{
	$.fn.pinchzoomer = function(_vars) 
	{
		PinchZoomer.init(this, _vars);
		
		return this;
	};
	
}(jQuery));

(function($)
{
	$(onReady);
	
	function onReady()
	{
		PinchZoomer.init();
	}
	
}(jQuery));