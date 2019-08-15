(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HormoneFree_canva_atlas_", frames: [[0,0,427,720],[429,0,427,720],[0,722,427,720],[429,722,427,720]]}
];


// symbols:



(lib.Broccoli01 = function() {
	this.initialize(ss["HormoneFree_canva_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.GreenCabbage01 = function() {
	this.initialize(ss["HormoneFree_canva_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.RedCabbage01 = function() {
	this.initialize(ss["HormoneFree_canva_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.RedCabbage02 = function() {
	this.initialize(ss["HormoneFree_canva_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GreenCabbage01();
	this.instance.parent = this;
	this.instance.setTransform(427,0);

	this.instance_1 = new lib.RedCabbage02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(853,0);

	this.instance_2 = new lib.RedCabbage01();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Broccoli01();
	this.instance_3.parent = this;

	this.instance_4 = new lib.RedCabbage02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(853,0);

	this.instance_5 = new lib.RedCabbage01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(853,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:0}},{t:this.instance_1,p:{x:853}},{t:this.instance,p:{x:427}}]}).to({state:[{t:this.instance_3,p:{x:0}},{t:this.instance_2,p:{x:427}},{t:this.instance,p:{x:853}}]},2).to({state:[{t:this.instance_3,p:{x:427}},{t:this.instance_2,p:{x:853}},{t:this.instance,p:{x:0}}]},2).to({state:[{t:this.instance_3,p:{x:853}},{t:this.instance,p:{x:427}},{t:this.instance_1,p:{x:0}}]},2).to({state:[{t:this.instance,p:{x:853}},{t:this.instance_1,p:{x:427}},{t:this.instance_2,p:{x:0}}]},2).to({state:[{t:this.instance_4},{t:this.instance_2,p:{x:427}},{t:this.instance_1,p:{x:0}}]},2).to({state:[{t:this.instance_5},{t:this.instance_1,p:{x:427}},{t:this.instance_2,p:{x:0}}]},2).to({state:[{t:this.instance_4},{t:this.instance_2,p:{x:427}},{t:this.instance_1,p:{x:0}}]},2).to({state:[{t:this.instance,p:{x:853}},{t:this.instance_1,p:{x:427}},{t:this.instance_2,p:{x:0}}]},2).to({state:[{t:this.instance_3,p:{x:853}},{t:this.instance,p:{x:427}},{t:this.instance_1,p:{x:0}}]},2).to({state:[{t:this.instance_3,p:{x:0}},{t:this.instance_2,p:{x:427}},{t:this.instance,p:{x:853}}]},2).to({state:[{t:this.instance_2,p:{x:0}},{t:this.instance_1,p:{x:853}},{t:this.instance,p:{x:427}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.HormoneFree_canva = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_22 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(640,360,1,1,0,0,0,640,360);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,640,360);
// library properties:
lib.properties = {
	id: 'C5F26F9A5AFFA34CBD32354A173BD690',
	width: 1280,
	height: 720,
	fps: 4,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HormoneFree_canva_atlas_.png", id:"HormoneFree_canva_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C5F26F9A5AFFA34CBD32354A173BD690'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;