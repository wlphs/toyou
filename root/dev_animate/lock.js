(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"lock_atlas_", frames: [[0,0,423,765],[0,767,189,187],[191,767,103,100],[296,767,65,59]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img0 = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img2 = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img3 = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.lock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 열쇠자물쇠
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(298,362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 열쇠
	this.instance_1 = new lib.img2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(334,359);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 마크
	this.instance_2 = new lib.img0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(145,268);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,382.5,423,765);
// library properties:
lib.properties = {
	width: 482,
	height: 765,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lock_atlas_.png?1577492298532", id:"lock_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;