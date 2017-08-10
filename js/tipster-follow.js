/* tooltipster-follower v0.1.5 */!function(a,b){"function"==typeof define&&define.amd?define(["tooltipster"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("tooltipster")):b(jQuery)}(this,function(a){var b="laa.follower";return a.tooltipster._plugin({name:b,instance:{__defaults:function(){return{anchor:"top-left",maxWidth:null,minWidth:0,offset:[15,-15]}},__init:function(a){var b=this;return b.__displayed,b.__helper,b.__initialROS=a.option("repositionOnScroll"),b.__instance=a,b.__latestMouseEvent,b.__namespace="tooltipster-follower-"+Math.round(1e6*Math.random()),b.__openingTouchEnded,b.__pointerPosition,b.__previousState="closed",b.__size,b.__options,b.__initialROS||b.__instance.option("repositionOnScroll",!0),b.__optionsFormat(),b.__instance._on("destroy."+b.__namespace,function(){b.__destroy()}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)}),b.__instance._on("start."+b.__namespace,function(a){b.__instance._$origin.on("mousemove."+b.__namespace,function(a){b.__latestMouseEvent=a})}),b.__instance._one("startend."+b.__namespace+" startcancel."+b.__namespace,function(a){b.__instance._$origin.off("mousemove."+b.__namespace),"startcancel"==a.type&&(b.__latestMouseEvent=null)}),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b},__close:function(){return"object"==typeof this.__instance.content()&&null!==this.__instance.content()&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null,a(a.tooltipster._env.window.document).off("."+this.__namespace),this.__latestMouseEvent=null,this},__create:function(){var b=this,c=a('<div class="tooltipster-base tooltipster-follower"><div class="tooltipster-box"><div class="tooltipster-content"></div></div></div>'),d=a(a.tooltipster._env.window.document);b.__options.minWidth&&c.css("min-width",b.__options.minWidth+"px"),b.__options.maxWidth&&c.css("max-width",b.__options.maxWidth+"px"),b.__instance._$tooltip=c,b.__displayed=!1,b.__openingTouchEnded=!1,d.on("mousemove."+b.__namespace,function(a){b.__openingTouchEnded&&b.__displayed||b.__follow(a)});var e=b.__instance.option("triggerClose");return e.tap&&d.on("touchend."+b.__namespace+" touchcancel."+b.__namespace,function(a){b.__openingTouchEnded=!0}),b.__instance._trigger("created"),b},__destroy:function(){return this.__instance._off("."+this.__namespace),this.__initialROS||this.__instance.option("repositionOnScroll",!1),this},__follow:function(b){if(b?this.__latestMouseEvent=b:this.__latestMouseEvent&&(b=this.__latestMouseEvent),b){this.__displayed=!0;var c={},d=this.__options.anchor,e=a.merge([],this.__options.offset);switch(this.__helper.geo.window.scroll={left:a.tooltipster._env.window.scrollX||a.tooltipster._env.window.document.documentElement.scrollLeft,top:a.tooltipster._env.window.scrollY||a.tooltipster._env.window.document.documentElement.scrollTop},d){case"top-left":case"left-center":case"bottom-left":c.left=b.pageX+e[0];break;case"top-center":case"bottom-center":c.left=b.pageX+e[0]-this.__size.width/2;break;case"top-right":case"right-center":case"bottom-right":c.left=b.pageX+e[0]-this.__size.width;break;default:console.log("Wrong anchor value")}switch(d){case"top-left":case"top-center":case"top-right":c.top=b.pageY-e[1];break;case"left-center":case"right-center":c.top=b.pageY-e[1]-this.__size.height/2;break;case"bottom-left":case"bottom-center":case"bottom-right":c.top=b.pageY-e[1]-this.__size.height}if("left-center"==d||"right-center"==d){if("right-center"==d)c.left<this.__helper.geo.window.scroll.left&&(b.pageX-e[0]+this.__size.width<=this.__helper.geo.window.scroll.left+this.__helper.geo.window.size.width?(d="left-center",e[0]=-e[0],c.left=b.pageX+e[0]):(d="top-right",e[1]=e[0],c={left:0,top:b.pageY-e[1]}));else if(c.left+this.__size.width>this.__helper.geo.window.scroll.left+this.__helper.geo.window.size.width){var f=b.pageX-e[0]-this.__size.width;f>=0?(d="right-center",e[0]=-e[0],c.left=f):(d="top-left",e[1]=-e[0],c={left:b.pageX+e[0],top:b.pageY-e[1]})}c.top+this.__size.height>this.__helper.geo.window.scroll.top+this.__helper.geo.window.size.height&&(c.top=this.__helper.geo.window.scroll.top+this.__helper.geo.window.size.height-this.__size.height),c.top<this.__helper.geo.window.scroll.top&&(c.top=this.__helper.geo.window.scroll.top),c.top+this.__size.height>this.__helper.geo.document.size.height&&(c.top=this.__helper.geo.document.size.height-this.__size.height),c.top<0&&(c.top=0)}if("left-center"!=d&&"right-center"!=d){c.left+this.__size.width>this.__helper.geo.window.scroll.left+this.__helper.geo.window.size.width&&(c.left=this.__helper.geo.window.scroll.left+this.__helper.geo.window.size.width-this.__size.width),c.left<0&&(c.left=0);var g=b.pageY-this.__helper.geo.window.scroll.top;if(0==d.indexOf("bottom"))c.top<this.__helper.geo.window.scroll.top&&(c.top<0||g<this.__helper.geo.window.size.height-g&&b.pageY+e[1]+this.__size.height<=this.__helper.geo.document.size.height)&&(c.top=b.pageY+e[1]);else{var h=c.top+this.__size.height;if(h>this.__helper.geo.window.scroll.top+this.__helper.geo.window.size.height&&(g>this.__helper.geo.window.size.height-g||g-e[1]+this.__size.height<=this.__helper.geo.document.size.height)){var i=b.pageY+e[1]-this.__size.height;i>=0&&(c.top=i)}}}this.__helper.geo.origin.fixedLineage&&(c.left-=this.__helper.geo.window.scroll.left,c.top-=this.__helper.geo.window.scroll.top);var j={coord:c};this.__instance._trigger({edit:function(a){j=a},event:b,helper:this.__helper,position:a.extend(!0,{},j),type:"follow"}),this.__instance._$tooltip.css({left:j.coord.left,top:j.coord.top}).show()}else this.__instance._$tooltip.hide();return this},__optionsFormat:function(){return this.__options=this.__instance._optionsExtract(b,this.__defaults()),this},__reposition:function(b,c){var d=this,e=d.__instance._$tooltip.clone(),f=a.tooltipster._getRuler(e),g=d.__instance.option("animation");g&&e.removeClass("tooltipster-"+g);var h=f.free().measure(),i={size:h.size};c.geo.origin.fixedLineage?d.__instance._$tooltip.css("position","fixed"):d.__instance._$tooltip.css("position",""),d.__instance._trigger({edit:function(a){i=a},event:b,helper:c,position:a.extend(!0,{},i),tooltipClone:e[0],type:"position"}),f.destroy(),d.__helper=c,d.__size=i.size,d.__instance._$tooltip.css({height:i.size.height,width:i.size.width});var j=a.tooltipster._env.IE&&"click"===b.type?b:null;return d.__follow(j),d.__instance._$tooltip.appendTo(d.__instance.option("parent")),d.__instance._trigger({type:"repositioned",event:b,position:{coord:{left:0,top:0},size:i.size}}),this}}}),a});
