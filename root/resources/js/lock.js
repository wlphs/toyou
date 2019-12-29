(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"lock_atlas_", frames: [[215,918,7,18],[323,767,111,103],[0,0,423,765],[192,767,129,149],[192,918,21,19],[323,872,62,61],[0,767,190,187]]}
];


// symbols:



(lib.adfgsdfg = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.adsga = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fshsdfgh = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fshsfd = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ggad = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_000 = function() {
	this.spriteSheet = ss["lock_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fshsfd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(0,0,21,19), null);


(lib.shadow_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.adfgsdfg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_0, new cjs.Rectangle(0,0,7,18), null);


(lib.mmm_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fshsdfgh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mmm_shadow, new cjs.Rectangle(0,0,129,149), null);


(lib.mmm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.adsga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mmm, new cjs.Rectangle(0,0,111,103), null);


(lib.lovk_222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ggad();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lovk_222, new cjs.Rectangle(0,0,62,61), null);


(lib.logo_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_000();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_22, new cjs.Rectangle(0,0,190,187), null);


(lib.lock_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtJMnIAA5NIaTAAIAAZNgAlMkoIDVGCIDKgGIAomAg");
	mask.setTransform(32.3,22.5);

	// 걸이
	this.instance = new lib.lovk_222();
	this.instance.parent = this;
	this.instance.setTransform(31,30.5,1,1,0,0,0,31,30.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lock_, new cjs.Rectangle(0,0,138,110), null);


(lib.lock_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lovk_222();
	this.instance.parent = this;
	this.instance.setTransform(31,30.5,1,1,0,0,0,31,30.5);

	this.instance_1 = new lib.mmm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,58.5,1,1,0,0,0,55.5,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lock_1, new cjs.Rectangle(0,0,138,110), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// 걸이 그림자1
	this.instance = new lib.shadow_0();
	this.instance.parent = this;
	this.instance.setTransform(193.7,115.8,1,1,0,0,0,3.5,9);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:9.1,scaleX:1,scaleY:1,skewX:0.7,skewY:7.1,y:128.3},7,cjs.Ease.get(-1)).to({regY:9.2,scaleX:1.01,scaleY:1,skewX:3.2,skewY:11.3,x:194,y:149.5},4).to({regX:3.6,scaleX:1.01,scaleY:1,skewX:14.3,skewY:22.8,x:192.4,y:160.9},2).to({scaleX:1.01,skewX:19.8,skewY:28.8,x:189.8,y:166.4},1).to({regX:3.7,scaleX:1.02,scaleY:1.01,skewX:30.5,skewY:39.4,x:187.7,y:170.4},1,cjs.Ease.get(1)).to({regY:9.1,scaleX:1.02,scaleY:1,skewX:39,skewY:42.9,x:185.1,y:174.1},1).to({regX:3.6,regY:9.2,scaleX:1.02,scaleY:1,skewX:55.8,skewY:51,x:174.3,y:183.1},3).to({regX:3.8,regY:9.1,scaleX:1.02,skewX:66.2,skewY:69.8,x:168,y:186.9},2).to({regX:3.6,scaleX:1.03,scaleY:1,skewX:81.7,skewY:72.2,x:159.3,y:188.7},3).to({scaleX:1.04,skewX:85.7,skewY:86.7,x:154.6,y:190.1},2).to({regX:3.7,scaleX:1.06,scaleY:1,skewX:91.8,skewY:108.4,x:149.9,y:189.9},3).to({regY:9,scaleX:1.04,scaleY:0.97,skewX:95,skewY:86.5,x:146.6,y:190.2},5).wait(1).to({regX:3.5,scaleY:0.97,skewX:94.9,skewY:86.4,y:190},0).wait(1).to({skewX:94.7,skewY:86.2,x:146.8},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:94.2,skewY:85.9,x:147.1},0).wait(1).to({scaleY:0.98,skewX:93.4,skewY:85.4,x:147.7},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:92.4,skewY:84.7,x:148.4,y:190.2},0).wait(1).to({scaleX:1.04,scaleY:0.98,skewX:91,skewY:83.7,x:149.4,y:190.3},0).wait(1).to({regX:3.8,scaleX:1.03,scaleY:0.99,skewX:89.2,skewY:82.5,x:150.7,y:190.7},0).wait(1).to({regX:3.5,scaleX:1.03,scaleY:1,skewX:86.8,skewY:80.9,x:152.2,y:190.2},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:83.9,skewY:78.9,x:154.4,y:189.9},0).wait(1).to({regX:3.8,scaleX:1.03,scaleY:1.01,skewX:80.2,skewY:76.5,x:157,y:190},0).wait(1).to({regX:3.5,scaleX:1.03,scaleY:1.02,skewX:75.8,skewY:73.5,x:159.8,y:189},0).wait(1).to({scaleX:1.03,scaleY:1.04,skewX:71,skewY:70.3,x:163.1,y:188.3},0).wait(1).to({regX:3.7,scaleX:1.02,scaleY:1.05,skewX:66,skewY:66.9,x:166.7,y:187.8},0).wait(1).to({regX:3.5,scaleX:1.02,scaleY:1.06,skewX:61.3,skewY:63.8,x:169.6,y:186.2},0).wait(1).to({scaleX:1.02,scaleY:1.07,skewX:57.2,skewY:61,x:172.1,y:184.8},0).wait(1).to({regX:3.8,regY:9.1,scaleX:1.02,scaleY:1.08,skewX:53.7,skewY:58.7,x:174.4,y:184},0).wait(1).to({regX:3.5,regY:9,scaleX:1.01,scaleY:1.09,skewX:50.7,skewY:56.7,x:176,y:182.3},0).wait(1).to({scaleX:1.01,scaleY:1.09,skewX:48.4,skewY:55,x:177.5,y:181.1},0).wait(1).to({scaleX:1.01,scaleY:1.1,skewX:46.4,skewY:53.7,x:178.6,y:180.1},0).wait(1).to({regX:3.8,scaleY:1.1,skewX:44.9,skewY:52.6,x:179.7,y:179.7},0).wait(1).to({regX:3.5,scaleX:1.01,scaleY:1.11,skewX:43.6,skewY:51.7,x:180.4,y:178.7},0).wait(1).to({scaleY:1.11,skewX:42.6,skewY:51.1,x:181.1,y:178.2},0).wait(1).to({scaleX:1.01,scaleY:1.11,skewX:41.9,skewY:50.5,x:181.5,y:177.8},0).wait(1).to({regX:3.8,scaleY:1.11,skewX:41.4,skewY:50.2,x:182.1,y:177.6},0).wait(1).to({regX:3.5,scaleX:1.01,scaleY:1.12,skewX:41,skewY:49.9,x:181.9,y:176.9},0).wait(1).to({scaleY:1.12,skewX:40.8,skewY:49.8,y:176.7},0).wait(1).to({regX:3.6,regY:9.1,scaleX:1.01,scaleY:1.12,skewX:40.7,x:182.1,y:176.8},0).to({regX:3.7,scaleX:1.01,scaleY:1.1,skewX:48.1,skewY:54.4,x:177.9,y:181.2},13,cjs.Ease.get(-1)).to({regX:3.8,scaleX:1.02,scaleY:1.07,skewX:57.9,skewY:60.7,x:172.9,y:184.4},6).to({regY:9,scaleX:1.02,scaleY:1.05,skewX:67.8,skewY:66.9,x:165.7,y:187.9},6).wait(1).to({regX:3.5,scaleY:1.05,x:165.6,y:187.5},0).wait(2).to({scaleY:1.05,skewX:67.7,x:165.7},0).wait(1).to({scaleY:1.05,skewX:67.6,x:165.8},0).wait(1).to({scaleY:1.04,skewX:67.4,x:165.9,y:187.4},0).wait(1).to({scaleY:1.04,skewX:67.1,x:166.2,y:187.3},0).wait(1).to({scaleY:1.03,skewX:66.8,x:166.4,y:187.2},0).wait(1).to({scaleY:1.03,skewX:66.4,x:166.8,y:187},0).wait(1).to({scaleY:1.02,skewX:65.8,x:167.2,y:186.9},0).wait(1).to({scaleY:1.01,skewX:65.2,x:167.7,y:186.6},0).wait(1).to({scaleY:1,skewX:64.6,x:168.3,y:186.4},0).wait(1).to({scaleY:1,skewX:63.9,x:168.9,y:186.2},0).wait(1).to({scaleY:0.99,skewX:63.4,x:169.3,y:186},0).wait(1).to({scaleY:0.98,skewX:63,x:169.7,y:185.8},0).wait(1).to({scaleY:0.98,skewX:62.6,x:170,y:185.7},0).wait(1).to({scaleY:0.98,skewX:62.3,x:170.2,y:185.6},0).wait(1).to({scaleY:0.97,skewX:62.1,x:170.4},0).wait(1).to({scaleY:0.97,skewX:62,x:170.5,y:185.5},0).wait(1).to({scaleY:0.97,skewX:61.8,x:170.6},0).wait(1).to({scaleY:0.97,x:170.7,y:185.4},0).wait(1).to({scaleY:0.97,skewX:61.7,x:170.8},0).wait(1).to({scaleY:0.97},0).wait(1).to({regX:3.9,x:170.9,y:185.7},0).wait(1));

	// 자물쇠걸이
	this.instance_1 = new lib.lock_();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.5,123.4,1,1,0,0,0,15.3,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:24.7,x:164.5,y:161.2},14,cjs.Ease.get(-1)).to({regX:15.5,regY:18.4,scaleX:0.91,rotation:0,skewX:89.9,skewY:95.8,x:144,y:165.2},20,cjs.Ease.get(1)).wait(1).to({regX:31,regY:30.5,skewY:95.7,x:130.5,y:179.2},0).wait(1).to({scaleX:0.91,skewX:89.7,skewY:95.5,x:130.6,y:179.3},0).wait(1).to({skewX:89.3,skewY:95.1,x:130.8,y:179.4},0).wait(1).to({scaleX:0.91,skewX:88.7,skewY:94.4,x:131.3,y:179.5},0).wait(1).to({scaleX:0.91,skewX:87.9,skewY:93.5,x:131.8,y:179.7},0).wait(1).to({scaleX:0.91,skewX:86.8,skewY:92.3,x:132.6,y:179.9},0).wait(1).to({scaleX:0.92,skewX:85.4,skewY:90.7,x:133.6,y:180.2},0).wait(1).to({scaleX:0.92,skewX:83.6,skewY:88.7,x:134.9,y:180.5},0).wait(1).to({scaleX:0.93,skewX:81.3,skewY:86.1,x:136.5,y:180.9},0).wait(1).to({scaleX:0.93,skewX:78.5,skewY:83,x:138.6,y:181.3},0).wait(1).to({scaleX:0.94,skewX:75.2,skewY:79.3,x:141,y:181.8},0).wait(1).to({scaleX:0.95,skewX:71.5,skewY:75.1,x:143.8,y:182.3},0).wait(1).to({scaleX:0.96,skewX:67.7,skewY:70.9,x:146.7,y:182.6},0).wait(1).to({scaleX:0.96,skewX:64.1,skewY:66.9,x:149.5,y:182.8},0).wait(1).to({scaleX:0.97,skewX:61,skewY:63.3,x:152,y:182.9},0).wait(1).to({scaleX:0.98,skewX:58.3,skewY:60.3,x:154.2,y:183},0).wait(1).to({scaleX:0.98,skewX:56.1,skewY:57.8,x:155.9},0).wait(1).to({scaleX:0.99,skewX:54.3,skewY:55.8,x:157.4,y:182.9},0).wait(1).to({scaleX:0.99,skewX:52.8,skewY:54.1,x:158.6},0).wait(1).to({scaleX:0.99,skewX:51.6,skewY:52.8,x:159.5,y:182.8},0).wait(1).to({scaleX:1,skewX:50.6,skewY:51.7,x:160.3},0).wait(1).to({scaleX:1,skewX:49.9,skewY:50.9,x:160.9},0).wait(1).to({scaleX:1,skewX:49.3,skewY:50.3,x:161.4,y:182.7},0).wait(1).to({scaleX:1,skewX:48.9,skewY:49.8,x:161.7},0).wait(1).to({scaleX:1,skewX:48.7,skewY:49.5,x:161.9},0).wait(1).to({skewX:48.5,skewY:49.3,x:162},0).wait(1).to({regX:15.3,regY:18.6,x:161,y:163},0).to({regX:15.5,regY:18.4,scaleX:0.93,scaleY:0.98,skewX:72,skewY:77.6,x:154.7,y:166.4},25,cjs.Ease.get(-1)).wait(1).to({regX:31,regY:30.5,x:146.5,y:184.1},0).wait(1).to({skewX:71.9,skewY:77.5,x:146.6,y:184.2},0).wait(1).to({skewX:71.7,skewY:77.3},0).wait(1).to({skewX:71.4,skewY:77,x:146.7},0).wait(1).to({skewX:70.9,skewY:76.5,x:146.8,y:184.3},0).wait(1).to({skewX:70.3,skewY:75.9,x:147,y:184.4},0).wait(1).to({skewX:69.5,skewY:75.1,x:147.3,y:184.5},0).wait(1).to({skewX:68.5,skewY:74.1,x:147.6,y:184.6},0).wait(1).to({skewX:67.2,skewY:72.8,x:148,y:184.8},0).wait(1).to({skewX:65.7,skewY:71.3,x:148.5,y:184.9},0).wait(1).to({skewX:64.1,skewY:69.7,x:149,y:185.1},0).wait(1).to({skewX:62.6,skewY:68.2,x:149.5,y:185.2},0).wait(1).to({skewX:61.3,skewY:66.9,x:150,y:185.4},0).wait(1).to({skewX:60.2,skewY:65.8,x:150.3,y:185.5},0).wait(1).to({skewX:59.3,skewY:64.9,x:150.6},0).wait(1).to({skewX:58.7,skewY:64.3,x:150.8,y:185.6},0).wait(1).to({skewX:58.2,skewY:63.7,x:151},0).wait(1).to({skewX:57.8,skewY:63.3,x:151.2,y:185.7},0).wait(1).to({skewX:57.5,skewY:63},0).wait(1).to({skewX:57.3,skewY:62.8,x:151.3},0).wait(1).to({skewX:57.1,skewY:62.7,x:151.4},0).wait(1).to({skewX:57,skewY:62.6},0).wait(1).to({regX:15.6,regY:18.4,x:154.7,y:166.5},0).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+VZJMAAAgyRMA8rAAAMAAAAyRgAsHhaIDpDWQC+CUDvhdQC3hrAfivIAAqHIjTAAIAAJUQgyDXjMhGIj9jkg");
	mask.setTransform(180.2,165.2);

	// 자물통
	this.instance_2 = new lib.lock_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(169.5,123.4,1,1,0,0,0,15.3,18.6);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:24.7,x:164.5,y:161.2},14,cjs.Ease.get(-1)).to({regX:15.5,regY:18.4,scaleX:0.91,rotation:0,skewX:89.9,skewY:95.8,x:144,y:165.2},20,cjs.Ease.get(1)).wait(1).to({regX:69,regY:55,skewY:95.7,x:102.5,y:213.6},0).wait(1).to({scaleX:0.91,skewX:89.7,skewY:95.5,x:102.8,y:213.7},0).wait(1).to({skewX:89.3,skewY:95.1,x:103.3,y:214},0).wait(1).to({scaleX:0.91,skewX:88.7,skewY:94.4,x:104.1,y:214.5},0).wait(1).to({scaleX:0.91,skewX:87.9,skewY:93.5,x:105.2,y:215.1},0).wait(1).to({scaleX:0.91,skewX:86.8,skewY:92.3,x:106.8,y:215.9},0).wait(1).to({scaleX:0.92,skewX:85.4,skewY:90.7,x:108.7,y:216.9},0).wait(1).to({scaleX:0.92,skewX:83.6,skewY:88.7,x:111.4,y:218.2},0).wait(1).to({scaleX:0.93,skewX:81.3,skewY:86.1,x:114.7,y:219.7},0).wait(1).to({scaleX:0.93,skewX:78.5,skewY:83,x:118.9,y:221.4},0).wait(1).to({scaleX:0.94,skewX:75.2,skewY:79.3,x:124,y:223.1},0).wait(1).to({scaleX:0.95,skewX:71.5,skewY:75.1,x:129.8,y:224.8},0).wait(1).to({scaleX:0.96,skewX:67.7,skewY:70.9,x:135.9,y:226.2},0).wait(1).to({scaleX:0.96,skewX:64.1,skewY:66.9,x:141.9,y:227.2},0).wait(1).to({scaleX:0.97,skewX:61,skewY:63.3,x:147.2,y:227.8},0).wait(1).to({scaleX:0.98,skewX:58.3,skewY:60.3,x:151.7,y:228.1},0).wait(1).to({scaleX:0.98,skewX:56.1,skewY:57.8,x:155.5,y:228.3},0).wait(1).to({scaleX:0.99,skewX:54.3,skewY:55.8,x:158.6},0).wait(1).to({scaleX:0.99,skewX:52.8,skewY:54.1,x:161.1,y:228.2},0).wait(1).to({scaleX:0.99,skewX:51.6,skewY:52.8,x:163.2,y:228.1},0).wait(1).to({scaleX:1,skewX:50.6,skewY:51.7,x:164.8,y:228},0).wait(1).to({scaleX:1,skewX:49.9,skewY:50.9,x:166.1,y:227.9},0).wait(1).to({scaleX:1,skewX:49.3,skewY:50.3,x:167.1},0).wait(1).to({scaleX:1,skewX:48.9,skewY:49.8,x:167.7,y:227.8},0).wait(1).to({scaleX:1,skewX:48.7,skewY:49.5,x:168.2},0).wait(1).to({skewX:48.5,skewY:49.3,x:168.4},0).wait(1).to({regX:15.3,regY:18.6,x:161,y:163},0).to({regX:15.5,regY:18.4,scaleX:0.93,scaleY:0.98,skewX:72,skewY:77.6,x:154.7,y:166.4},25,cjs.Ease.get(-1)).wait(1).to({regX:69,regY:55,x:131.3,y:226.2},0).wait(1).to({skewX:71.9,skewY:77.5,x:131.4,y:226.3},0).wait(1).to({skewX:71.7,skewY:77.3,x:131.6,y:226.4},0).wait(1).to({skewX:71.4,skewY:77,x:131.9},0).wait(1).to({skewX:70.9,skewY:76.5,x:132.4,y:226.6},0).wait(1).to({skewX:70.3,skewY:75.9,x:133,y:226.9},0).wait(1).to({skewX:69.5,skewY:75.1,x:133.9,y:227.2},0).wait(1).to({skewX:68.5,skewY:74.1,x:135,y:227.5},0).wait(1).to({skewX:67.2,skewY:72.8,x:136.4,y:228},0).wait(1).to({skewX:65.7,skewY:71.3,x:138,y:228.4},0).wait(1).to({skewX:64.1,skewY:69.7,x:139.8,y:228.9},0).wait(1).to({skewX:62.6,skewY:68.2,x:141.4,y:229.2},0).wait(1).to({skewX:61.3,skewY:66.9,x:142.9,y:229.6},0).wait(1).to({skewX:60.2,skewY:65.8,x:144,y:229.8},0).wait(1).to({skewX:59.3,skewY:64.9,x:145,y:229.9},0).wait(1).to({skewX:58.7,skewY:64.3,x:145.8,y:230},0).wait(1).to({skewX:58.2,skewY:63.7,x:146.3,y:230.1},0).wait(1).to({skewX:57.8,skewY:63.3,x:146.8,y:230.2},0).wait(1).to({skewX:57.5,skewY:63,x:147.1},0).wait(1).to({skewX:57.3,skewY:62.8,x:147.3},0).wait(1).to({skewX:57.1,skewY:62.7,x:147.5,y:230.3},0).wait(1).to({skewX:57,skewY:62.6,x:147.6},0).wait(1).to({regX:15.6,regY:18.4,x:154.7,y:166.5},0).wait(1));

	// 걸이 그림자2
	this.instance_3 = new lib.shadow_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(176.7,159.3,1,1,0,0,0,10.5,9.5);
	this.instance_3.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:10.6,scaleY:1.02,skewX:11.5,skewY:7,x:172.8,y:165.8},6,cjs.Ease.get(-1)).to({regX:10.7,regY:9.6,scaleX:1,scaleY:1.06,skewX:37.1,skewY:22.8,x:162.6,y:176.2},4).to({regX:10.6,regY:9.5,scaleX:1,scaleY:1.1,skewX:62.8,skewY:38.7,x:144.1,y:178.3,alpha:0.398},4).to({regY:9.4,scaleX:1.13,scaleY:1.1,skewX:115.8,skewY:79.4,x:130.1,y:169.6,alpha:0.5},20,cjs.Ease.get(1)).wait(1).to({regX:10.5,regY:9.5,skewX:115.7,skewY:79.3,x:129.9,y:169.5},0).wait(1).to({skewX:115.6,skewY:79.2,x:130,alpha:0.499},0).wait(1).to({skewX:115.3,skewY:78.9,alpha:0.498},0).wait(1).to({scaleX:1.14,skewX:114.9,skewY:78.4,x:130.1,y:169.6,alpha:0.497},0).wait(1).to({skewX:114.3,skewY:77.9,x:130.2,y:169.7,alpha:0.495},0).wait(1).to({skewX:113.5,skewY:77.1,x:130.4,y:169.9,alpha:0.492},0).wait(1).to({scaleX:1.14,skewX:112.5,skewY:76,x:130.7,y:170,alpha:0.489},0).wait(1).to({scaleX:1.14,skewX:111.2,skewY:74.7,x:131,y:170.3,alpha:0.484},0).wait(1).to({scaleX:1.14,skewX:109.6,skewY:73,x:131.4,y:170.6,alpha:0.479},0).wait(1).to({scaleX:1.14,scaleY:1.1,skewX:107.6,skewY:70.9,x:131.9,y:171.1,alpha:0.472},0).wait(1).to({scaleX:1.14,scaleY:1.1,skewX:105.3,skewY:68.5,x:132.4,y:171.5,alpha:0.464},0).wait(1).to({scaleX:1.14,scaleY:1.1,skewX:102.7,skewY:65.8,x:133,y:172,alpha:0.455},0).wait(1).to({scaleX:1.14,skewX:100,skewY:63,x:133.6,y:172.6,alpha:0.446},0).wait(1).to({scaleX:1.14,skewX:97.4,skewY:60.3,x:134.3,y:173.1,alpha:0.437},0).wait(1).to({scaleX:1.15,scaleY:1.1,skewX:95.2,skewY:58,x:134.8,y:173.5,alpha:0.429},0).wait(1).to({scaleX:1.15,scaleY:1.1,skewX:93.3,skewY:56,x:135.2,y:173.9,alpha:0.423},0).wait(1).to({scaleX:1.15,scaleY:1.1,skewX:91.7,skewY:54.4,x:135.6,y:174.2,alpha:0.417},0).wait(1).to({scaleY:1.1,skewX:90.4,skewY:53,x:135.9,y:174.5,alpha:0.413},0).wait(1).to({scaleX:1.15,scaleY:1.1,skewX:89.3,skewY:51.9,x:136.2,y:174.7,alpha:0.409},0).wait(1).to({scaleX:1.15,scaleY:1.1,skewX:88.5,skewY:51.1,x:136.4,y:174.9,alpha:0.406},0).wait(1).to({skewX:87.8,skewY:50.4,x:136.5,y:175,alpha:0.404},0).wait(1).to({scaleY:1.1,skewX:87.3,skewY:49.8,x:136.7,y:175.1,alpha:0.402},0).wait(1).to({scaleY:1.1,skewX:86.9,skewY:49.4,alpha:0.401},0).wait(1).to({scaleX:1.15,skewX:86.6,skewY:49.1,x:136.8,y:175.2,alpha:0.4},0).wait(1).to({scaleY:1.1,skewX:86.4,skewY:48.9,x:136.9,y:175.3,alpha:0.399},0).wait(1).to({scaleY:1.1,skewX:86.3,skewY:48.8},0).wait(1).to({regX:10.7,regY:9.6,scaleY:1.1,x:137,y:175.4,alpha:0.398},0).to({scaleX:1.18,scaleY:1.31,skewY:46.9,x:140.5,y:177.9,alpha:0.5},25,cjs.Ease.get(-1)).wait(1).to({regX:10.5,regY:9.5,y:177.6},0).wait(1).to({scaleX:1.18,scaleY:1.31,skewY:47},0).wait(1).to({scaleX:1.18,scaleY:1.31,skewY:47.1,x:140.6},0).wait(1).to({scaleX:1.18,scaleY:1.3,skewY:47.2,x:140.7},0).wait(1).to({scaleX:1.17,scaleY:1.3,skewY:47.5,x:140.8},0).wait(1).to({scaleX:1.17,scaleY:1.29,skewY:47.8,x:141},0).wait(1).to({scaleX:1.16,scaleY:1.28,skewY:48.2,x:141.2},0).wait(1).to({scaleX:1.16,scaleY:1.26,skewY:48.8,x:141.5},0).wait(1).to({scaleX:1.15,scaleY:1.24,skewY:49.5,x:141.8},0).wait(1).to({scaleX:1.13,scaleY:1.22,skewY:50.3,x:142.2,y:177.5},0).wait(1).to({scaleX:1.12,scaleY:1.2,skewY:51.1,x:142.7},0).wait(1).to({scaleX:1.11,scaleY:1.18,skewY:51.9,x:143.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,skewY:52.6,x:143.5,y:177.4},0).wait(1).to({scaleX:1.09,scaleY:1.14,skewY:53.2,x:143.7},0).wait(1).to({scaleX:1.09,scaleY:1.13,skewY:53.7,x:144},0).wait(1).to({scaleX:1.08,scaleY:1.12,skewY:54,x:144.2},0).wait(1).to({scaleX:1.08,scaleY:1.11,skewY:54.3,x:144.3},0).wait(1).to({scaleX:1.08,scaleY:1.11,skewY:54.5,x:144.4},0).wait(1).to({scaleX:1.07,scaleY:1.1,skewY:54.7,x:144.5},0).wait(1).to({scaleX:1.07,scaleY:1.1,skewY:54.8,x:144.6},0).wait(1).to({scaleX:1.07,scaleY:1.1},0).wait(1).to({scaleX:1.07,scaleY:1.1,skewY:54.9},0).wait(1).to({regX:10.7,scaleY:1.1,x:144.7,y:177.6},0).wait(1));

	// 로고
	this.instance_4 = new lib.logo_22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(95.2,93.3,1,1,0,0,0,95,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));

	// 자물통그림자
	this.instance_5 = new lib.mmm_shadow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(169.5,123.4,1,1,0,0,0,31.3,20.6);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:27,x:164.7,y:166.6},14,cjs.Ease.get(-1)).to({regX:31.4,regY:20.4,scaleX:1.25,scaleY:1.15,rotation:0,skewX:102,skewY:82.1,x:138.3,y:173.1},20,cjs.Ease.get(1)).wait(1).to({regX:64.5,regY:74.5,scaleX:1.25,skewX:101.9,skewY:82,x:83.4,y:201.1},0).wait(1).to({skewX:101.6,skewY:81.7,x:83.6,y:201.4},0).wait(1).to({scaleX:1.25,scaleY:1.15,skewX:101.1,skewY:81.1,x:84,y:201.9},0).wait(1).to({scaleX:1.24,skewX:100.3,skewY:80.4,x:84.6,y:202.6},0).wait(1).to({scaleX:1.24,skewX:99.3,skewY:79.2,x:85.5,y:203.6},0).wait(1).to({scaleX:1.24,skewX:97.8,skewY:77.7,x:86.7,y:204.9},0).wait(1).to({scaleX:1.23,scaleY:1.15,skewX:95.9,skewY:75.8,x:88.2,y:206.6},0).wait(1).to({scaleX:1.22,skewX:93.5,skewY:73.2,x:90.3,y:208.7},0).wait(1).to({scaleX:1.21,scaleY:1.15,skewX:90.4,skewY:70.1,x:93,y:211.3},0).wait(1).to({scaleX:1.2,skewX:86.7,skewY:66.2,x:96.6,y:214.3},0).wait(1).to({scaleX:1.19,scaleY:1.15,skewX:82.3,skewY:61.6,x:100.8,y:217.7},0).wait(1).to({scaleX:1.17,scaleY:1.15,skewX:77.3,skewY:56.5,x:105.8,y:221.2},0).wait(1).to({scaleX:1.16,scaleY:1.15,skewX:72.3,skewY:51.2,x:111.2,y:224.5},0).wait(1).to({scaleX:1.14,scaleY:1.15,skewX:67.5,skewY:46.3,x:116.5,y:227.3},0).wait(1).to({scaleX:1.13,scaleY:1.16,skewX:63.3,skewY:41.9,x:121.2,y:229.5},0).wait(1).to({scaleX:1.12,scaleY:1.16,skewX:59.7,skewY:38.2,x:125.3,y:231.2},0).wait(1).to({scaleX:1.11,skewX:56.7,skewY:35.1,x:128.8,y:232.5},0).wait(1).to({scaleX:1.1,scaleY:1.16,skewX:54.3,skewY:32.6,x:131.7,y:233.4},0).wait(1).to({scaleX:1.1,skewX:52.3,skewY:30.5,x:134,y:234.1},0).wait(1).to({scaleX:1.09,skewX:50.7,skewY:28.8,x:135.9,y:234.6},0).wait(1).to({scaleX:1.09,scaleY:1.16,skewX:49.4,skewY:27.5,x:137.4,y:235},0).wait(1).to({scaleX:1.08,skewX:48.4,skewY:26.5,x:138.6,y:235.3},0).wait(1).to({scaleX:1.08,skewX:47.7,skewY:25.7,x:139.5,y:235.5},0).wait(1).to({scaleX:1.08,skewX:47.2,skewY:25.2,x:140.1,y:235.7},0).wait(1).to({scaleX:1.08,skewX:46.8,skewY:24.8,x:140.6,y:235.8},0).wait(1).to({skewX:46.6,skewY:24.6,x:140.8,y:235.9},0).wait(1).to({regX:31.4,regY:20.6,skewX:46.5,skewY:24.5,x:153.9,y:177.9},0).to({regX:31.6,regY:20.4,scaleX:1.22,scaleY:1.24,skewX:82.3,skewY:59,x:150.2,y:174.1},25,cjs.Ease.get(-1)).wait(1).to({regX:64.5,regY:74.5,skewX:82.2,x:104.3,y:217.6},0).wait(1).to({scaleX:1.22,scaleY:1.24,skewX:82.1,skewY:58.9,x:104.5,y:217.7},0).wait(1).to({scaleX:1.21,scaleY:1.24,skewX:81.8,skewY:58.7,x:104.7,y:217.9},0).wait(1).to({scaleX:1.21,scaleY:1.23,skewX:81.4,skewY:58.5,x:105.1,y:218.2},0).wait(1).to({scaleX:1.21,scaleY:1.22,skewX:80.8,skewY:58.1,x:105.7,y:218.6},0).wait(1).to({scaleX:1.2,scaleY:1.21,skewX:80,skewY:57.6,x:106.5,y:219.2},0).wait(1).to({scaleX:1.19,scaleY:1.2,skewX:78.9,skewY:57,x:107.6,y:219.9},0).wait(1).to({scaleX:1.18,scaleY:1.19,skewX:77.5,skewY:56.2,x:109,y:220.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,skewX:75.7,skewY:55.1,x:110.9,y:221.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,skewX:73.6,skewY:53.9,x:113.1,y:223.1},0).wait(1).to({scaleX:1.12,scaleY:1.11,skewX:71.4,skewY:52.6,x:115.4,y:224.2},0).wait(1).to({scaleX:1.1,scaleY:1.09,skewX:69.4,skewY:51.3,x:117.6,y:225.1},0).wait(1).to({scaleX:1.09,scaleY:1.07,skewX:67.6,skewY:50.3,x:119.5,y:225.9},0).wait(1).to({scaleX:1.07,scaleY:1.05,skewX:66.1,skewY:49.4,x:121,y:226.4},0).wait(1).to({scaleX:1.06,scaleY:1.04,skewX:65,skewY:48.7,x:122.2,y:226.7},0).wait(1).to({scaleX:1.06,scaleY:1.03,skewX:64.1,skewY:48.2,x:123.2,y:227},0).wait(1).to({scaleX:1.05,scaleY:1.02,skewX:63.3,skewY:47.8,x:124,y:227.2},0).wait(1).to({scaleX:1.04,scaleY:1.01,skewX:62.8,skewY:47.4,x:124.6,y:227.3},0).wait(1).to({scaleX:1.04,scaleY:1.01,skewX:62.4,skewY:47.2,x:125,y:227.4},0).wait(1).to({scaleX:1.04,scaleY:1,skewX:62.1,skewY:47,x:125.3,y:227.6},0).wait(1).to({scaleX:1.04,scaleY:1,skewX:61.9,skewY:46.9,x:125.5,y:227.5},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:61.8,skewY:46.8,x:125.6,y:227.6},0).wait(1).to({regX:31.4,regY:20.6,x:150,y:177.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-0.2,292,252);


// stage content:
(lib.lock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// 로고
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(239.8,501.8,1,1,0,0,0,95,93.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:132.2,regY:162.6,x:277,y:570.5,alpha:0.003},0).wait(1).to({y:569.2,alpha:0.012},0).wait(1).to({y:566.8,alpha:0.029},0).wait(1).to({y:563,alpha:0.056},0).wait(1).to({y:557.4,alpha:0.096},0).wait(1).to({y:549.3,alpha:0.154},0).wait(1).to({y:538,alpha:0.235},0).wait(1).to({y:522.9,alpha:0.342},0).wait(1).to({y:505,alpha:0.471},0).wait(1).to({y:487,alpha:0.599},0).wait(1).to({y:471.8,alpha:0.707},0).wait(1).to({y:460,alpha:0.792},0).wait(1).to({y:451.1,alpha:0.855},0).wait(1).to({y:444.5,alpha:0.902},0).wait(1).to({y:439.6,alpha:0.937},0).wait(1).to({y:436.1,alpha:0.963},0).wait(1).to({y:433.6,alpha:0.98},0).wait(1).to({y:432,alpha:0.992},0).wait(1).to({y:431.1,alpha:0.998},0).wait(1).to({regX:95,regY:93.5,x:239.8,y:361.8,alpha:1},0).wait(1));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,382.5,423,765);
// library properties:
lib.properties = {
	width: 482,
	height: 765,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/resources/images/intro/lock_atlas_.png?1577628908426", id:"lock_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;