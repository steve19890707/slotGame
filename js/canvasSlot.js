(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"canvasSlot_atlas_", frames: [[0,0,1200,907],[1202,0,100,100],[1304,204,100,87],[1304,293,100,87],[0,909,641,481],[643,909,641,481],[1202,102,100,100],[1202,204,100,100],[1202,306,100,100],[1202,408,100,100],[1202,510,100,100],[1202,612,100,100],[1202,714,100,100],[1286,816,100,100],[1304,0,100,100],[1304,102,100,100]]}
];


// symbols:



(lib.background = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gameArea = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.gameAreaFrame = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.symbol1 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.symbol2 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.symbol3 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.symbol4 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.symbol5 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.symbol6 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.symbol7 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.symbol8 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.symbol9 = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.wild_symbol = function() {
	this.initialize(ss["canvasSlot_atlas_"]);
	this.gotoAndStop(15);
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


(lib.Xup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-25,-21.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-21.6,50,43.5);


(lib.Xdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-25,-21.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-21.7,50,43.5);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol9();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol8();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol7();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol5();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol5();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-68.6,1,1,30.9907);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.6,-68.6,137.2,137.2);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wild_symbol();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.fakeSymbolList = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.symbol9();
	this.instance.parent = this;
	this.instance.setTransform(-50,1380);

	this.instance_1 = new lib.symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,1270);

	this.instance_2 = new lib.symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,1160);

	this.instance_3 = new lib.symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,1050);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,940);

	this.instance_5 = new lib.symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,830);

	this.instance_6 = new lib.symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,720);

	this.instance_7 = new lib.symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,610);

	this.instance_8 = new lib.symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,500);

	this.instance_9 = new lib.symbol9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-890.6);

	this.instance_10 = new lib.symbol8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-50,-1000.6);

	this.instance_11 = new lib.symbol7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-50,-1110.6);

	this.instance_12 = new lib.symbol6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-50,-1220.6);

	this.instance_13 = new lib.symbol5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-50,-1330.6);

	this.instance_14 = new lib.symbol4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-50,-1440.6);

	this.instance_15 = new lib.symbol3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-50,-1550.6);

	this.instance_16 = new lib.symbol2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-50,-1660.6);

	this.instance_17 = new lib.symbol1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-50,-1770.6);

	this.instance_18 = new lib.symbol9();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-50,390);

	this.instance_19 = new lib.symbol8();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-50,280);

	this.instance_20 = new lib.symbol7();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-50,170);

	this.instance_21 = new lib.symbol6();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-50,60);

	this.instance_22 = new lib.symbol5();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-50,-50);

	this.instance_23 = new lib.symbol4();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-50,-160);

	this.instance_24 = new lib.symbol3();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-50,-270);

	this.instance_25 = new lib.symbol2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-50,-380);

	this.instance_26 = new lib.symbol1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-50,-490);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-1770.6,100,3250.6);


(lib.gameAreaFrame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gameAreaFrame();
	this.instance.parent = this;
	this.instance.setTransform(-1376,-241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1376,-241,641,481);


(lib.gameArea_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gameArea();
	this.instance.parent = this;
	this.instance.setTransform(-321,-241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321,-241,641,481);


(lib.betButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-600,-454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-454,1200,907);


(lib.symbolAllE4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{symbolPlay1:0,symbolPlay2:2,symbolPlay3:4,symbolPlay4:6,symbolPlay5:8,symbolPlay6:10,symbolPlay7:12,symbolPlay8:14,symbolPlay9:16,symbolPlay10:18,rewardAction1:20,rewardAction2:30,rewardAction3:40,rewardAction4:50,rewardAction5:60,rewardAction6:70,rewardAction7:80,rewardAction8:90,rewardAction9:100,rewardAction10:110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllE3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllE2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllD4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllD3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllD2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllD1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllC4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllC3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllC2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllC1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllB4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllB3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllB2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllB1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllA4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllA3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllA2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.symbolAllA1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"symbolPlay1":0,"symbolPlay2":2,"symbolPlay3":4,"symbolPlay4":6,"symbolPlay5":8,"symbolPlay6":10,"symbolPlay7":12,"symbolPlay8":14,"symbolPlay9":16,"symbolPlay10":18,"rewardAction1":20,"rewardAction2":30,"rewardAction3":40,"rewardAction4":50,"rewardAction5":60,"rewardAction6":70,"rewardAction7":80,"rewardAction8":90,"rewardAction9":100,"rewardAction10":110});

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}
	this.frame_11 = function() {
		this.stop()
	}
	this.frame_13 = function() {
		this.stop()
	}
	this.frame_15 = function() {
		this.stop()
	}
	this.frame_17 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.gotoAndPlay("rewardAction1")
	}
	this.frame_39 = function() {
		this.gotoAndPlay("rewardAction2")
	}
	this.frame_49 = function() {
		this.gotoAndPlay("rewardAction3")
	}
	this.frame_59 = function() {
		this.gotoAndPlay("rewardAction4")
	}
	this.frame_69 = function() {
		this.gotoAndPlay("rewardAction5")
	}
	this.frame_79 = function() {
		this.gotoAndPlay("rewardAction6")
	}
	this.frame_89 = function() {
		this.gotoAndPlay("rewardAction7")
	}
	this.frame_99 = function() {
		this.gotoAndPlay("rewardAction8")
	}
	this.frame_109 = function() {
		this.gotoAndPlay("rewardAction9")
	}
	this.frame_119 = function() {
		this.gotoAndPlay("rewardAction10")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2).call(this.frame_15).wait(2).call(this.frame_17).wait(2).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10).call(this.frame_109).wait(10).call(this.frame_119).wait(1));

	// All
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50,-50);

	this.instance_7 = new lib.symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,-50);

	this.instance_8 = new lib.symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50,-50);

	this.instance_9 = new lib.wild_symbol();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50,-50);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,27.7428);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween20("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,24.2435);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween21("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween22("synched",0);
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween24("synched",0);
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(18).to({_off:false,x:0.5},0).to({scaleX:0.76,scaleY:0.72},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({_off:true,rotation:27.7428},4).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},4).to({_off:true,rotation:0},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:0.6},3).to({scaleX:1},3).to({startPosition:0},3).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({_off:true,rotation:24.2435},3).to({_off:false,rotation:0},3).to({startPosition:0},3).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},3).to({_off:true,rotation:0},3).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({rotation:18.4828},3).to({rotation:-14.2194},3).to({rotation:0},3).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({rotation:25.1906},3).to({rotation:-9.7889},3).to({rotation:0},3).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100).to({_off:false},0).to({scaleX:0.64,scaleY:0.64},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(110).to({_off:false},0).to({scaleX:0.6,scaleY:0.6},3).to({scaleX:1,scaleY:1},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.5,141.2,141.1);


(lib.TweenE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_group
	this.SymbolE4 = new lib.symbolAllE4();
	this.SymbolE4.name = "SymbolE4";
	this.SymbolE4.parent = this;
	this.SymbolE4.setTransform(0,165);

	this.SymbolE3 = new lib.symbolAllE3();
	this.SymbolE3.name = "SymbolE3";
	this.SymbolE3.parent = this;
	this.SymbolE3.setTransform(0,55);

	this.SymbolE2 = new lib.symbolAllE2();
	this.SymbolE2.name = "SymbolE2";
	this.SymbolE2.parent = this;
	this.SymbolE2.setTransform(0,-54.95);

	this.SymbolE1 = new lib.symbolAllE1();
	this.SymbolE1.name = "SymbolE1";
	this.SymbolE1.parent = this;
	this.SymbolE1.setTransform(0,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SymbolE1},{t:this.SymbolE2},{t:this.SymbolE3},{t:this.SymbolE4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-215,100,430);


(lib.TweenD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_group
	this.SymbolD4 = new lib.symbolAllD4();
	this.SymbolD4.name = "SymbolD4";
	this.SymbolD4.parent = this;
	this.SymbolD4.setTransform(0,165);

	this.SymbolD3 = new lib.symbolAllD3();
	this.SymbolD3.name = "SymbolD3";
	this.SymbolD3.parent = this;
	this.SymbolD3.setTransform(0,55);

	this.SymbolD2 = new lib.symbolAllD2();
	this.SymbolD2.name = "SymbolD2";
	this.SymbolD2.parent = this;
	this.SymbolD2.setTransform(0,-54.95);

	this.SymbolD1 = new lib.symbolAllD1();
	this.SymbolD1.name = "SymbolD1";
	this.SymbolD1.parent = this;
	this.SymbolD1.setTransform(0,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SymbolD1},{t:this.SymbolD2},{t:this.SymbolD3},{t:this.SymbolD4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-215,100,430);


(lib.TweenC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_group
	this.SymbolC4 = new lib.symbolAllC4();
	this.SymbolC4.name = "SymbolC4";
	this.SymbolC4.parent = this;
	this.SymbolC4.setTransform(0,165);

	this.SymbolC3 = new lib.symbolAllC3();
	this.SymbolC3.name = "SymbolC3";
	this.SymbolC3.parent = this;
	this.SymbolC3.setTransform(0,55);

	this.SymbolC2 = new lib.symbolAllC2();
	this.SymbolC2.name = "SymbolC2";
	this.SymbolC2.parent = this;
	this.SymbolC2.setTransform(0,-54.95);

	this.SymbolC1 = new lib.symbolAllC1();
	this.SymbolC1.name = "SymbolC1";
	this.SymbolC1.parent = this;
	this.SymbolC1.setTransform(0,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SymbolC1},{t:this.SymbolC2},{t:this.SymbolC3},{t:this.SymbolC4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-215,100,430);


(lib.TweenB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_group
	this.SymbolB4 = new lib.symbolAllB4();
	this.SymbolB4.name = "SymbolB4";
	this.SymbolB4.parent = this;
	this.SymbolB4.setTransform(0,165);

	this.SymbolB3 = new lib.symbolAllB3();
	this.SymbolB3.name = "SymbolB3";
	this.SymbolB3.parent = this;
	this.SymbolB3.setTransform(0,55);

	this.SymbolB2 = new lib.symbolAllB2();
	this.SymbolB2.name = "SymbolB2";
	this.SymbolB2.parent = this;
	this.SymbolB2.setTransform(0,-54.95);

	this.SymbolB1 = new lib.symbolAllB1();
	this.SymbolB1.name = "SymbolB1";
	this.SymbolB1.parent = this;
	this.SymbolB1.setTransform(0,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SymbolB1},{t:this.SymbolB2},{t:this.SymbolB3},{t:this.SymbolB4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-215,100,430);


(lib.TweenA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_group
	this.SymbolA4 = new lib.symbolAllA4();
	this.SymbolA4.name = "SymbolA4";
	this.SymbolA4.parent = this;
	this.SymbolA4.setTransform(0,165);

	this.SymbolA3 = new lib.symbolAllA3();
	this.SymbolA3.name = "SymbolA3";
	this.SymbolA3.parent = this;
	this.SymbolA3.setTransform(0,55);

	this.SymbolA2 = new lib.symbolAllA2();
	this.SymbolA2.name = "SymbolA2";
	this.SymbolA2.parent = this;
	this.SymbolA2.setTransform(0,-54.95);

	this.SymbolA1 = new lib.symbolAllA1();
	this.SymbolA1.name = "SymbolA1";
	this.SymbolA1.parent = this;
	this.SymbolA1.setTransform(0,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SymbolA1},{t:this.SymbolA2},{t:this.SymbolA3},{t:this.SymbolA4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-215,100,430);


(lib.listE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{slotGo:0});

	// timeline functions:
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(2));

	// Layer_cover (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgJXAjKMAAAhGTISvAAMAAABGTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(31).to({graphics:null,x:0,y:0}).wait(1));

	// fakeSymbol
	this.instance = new lib.fakeSymbolList("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1705);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1735},4).to({y:-1275},5).to({y:1265},4).to({y:-1275},4).to({y:1265},4).to({y:1565.6},4).to({y:1995.6},5).to({_off:true},1).wait(1));

	// symbol
	this.tweenE = new lib.TweenE();
	this.tweenE.name = "tweenE";
	this.tweenE.parent = this;

	var maskedShapeInstanceList = [this.tweenE];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.tweenE).to({y:-30},4).to({y:430},5).to({_off:true},1).wait(15).to({_off:false,y:-430},0).to({y:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-225,100,450);


(lib.listD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"slotGo":0});

	// timeline functions:
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(2));

	// Layer_cover (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgJXAjKMAAAhGTISvAAMAAABGTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(31).to({graphics:null,x:0,y:0}).wait(1));

	// fakeSymbol
	this.instance = new lib.fakeSymbolList("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1705);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1735},4).to({y:-1275},5).to({y:1265},4).to({y:-1275},4).to({y:1265},4).to({y:1565.6},4).to({y:1995.6},5).to({_off:true},1).wait(1));

	// symbol
	this.tweenD = new lib.TweenD();
	this.tweenD.name = "tweenD";
	this.tweenD.parent = this;

	var maskedShapeInstanceList = [this.tweenD];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.tweenD).to({y:-30},4).to({y:430},5).to({_off:true},1).wait(15).to({_off:false,y:-430},0).to({y:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-225,100,450);


(lib.listC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"slotGo":0});

	// timeline functions:
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(2));

	// Layer_cover (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgJXAjKMAAAhGTISvAAMAAABGTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(31).to({graphics:null,x:0,y:0}).wait(1));

	// fakeSymbol
	this.instance = new lib.fakeSymbolList("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1705);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1735},4).to({y:-1275},5).to({y:1265},4).to({y:-1275},4).to({y:1265},4).to({y:1565.6},4).to({y:1995.6},5).to({_off:true},1).wait(1));

	// symbol
	this.tweenC = new lib.TweenC();
	this.tweenC.name = "tweenC";
	this.tweenC.parent = this;

	var maskedShapeInstanceList = [this.tweenC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.tweenC).to({y:-30},4).to({y:430},5).to({_off:true},1).wait(15).to({_off:false,y:-430},0).to({y:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-225,100,450);


(lib.listB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"slotGo":0});

	// timeline functions:
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(2));

	// Layer_cover (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgJXAjKMAAAhGTISvAAMAAABGTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(31).to({graphics:null,x:0,y:0}).wait(1));

	// fakeSymbol
	this.instance = new lib.fakeSymbolList("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1705);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1735},4).to({y:-1275},5).to({y:1265},4).to({y:-1275},4).to({y:1265},4).to({y:1565.6},4).to({y:1995.6},5).to({_off:true},1).wait(1));

	// symbol
	this.tweenB = new lib.TweenB();
	this.tweenB.name = "tweenB";
	this.tweenB.parent = this;

	var maskedShapeInstanceList = [this.tweenB];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.tweenB).to({y:-30},4).to({y:430},5).to({_off:true},1).wait(15).to({_off:false,y:-430},0).to({y:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-225,100,450);


(lib.listA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"slotGo":0});

	// timeline functions:
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(2));

	// Layer_cover (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgJXAjKMAAAhGTISvAAMAAABGTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(31).to({graphics:null,x:0,y:0}).wait(1));

	// fakeSymbol
	this.instance = new lib.fakeSymbolList("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1705);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1735},4).to({y:-1275},5).to({y:1265},4).to({y:-1275},4).to({y:1265},4).to({y:1565.6},4).to({y:1995.6},5).to({_off:true},1).wait(1));

	// symbol
	this.tweenA = new lib.TweenA();
	this.tweenA.name = "tweenA";
	this.tweenA.parent = this;

	var maskedShapeInstanceList = [this.tweenA];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.tweenA).to({y:-30},4).to({y:430},5).to({_off:true},1).wait(15).to({_off:false,y:-430},0).to({y:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-225,100,450);


(lib.Scene_1_desktop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// desktop
	this.Xdown = new lib.Xdown();
	this.Xdown.name = "Xdown";
	this.Xdown.parent = this;
	this.Xdown.setTransform(734,523.45,1,1,0,0,0,-1,5);
	new cjs.ButtonHelper(this.Xdown, 0, 1, 1);

	this.Xup = new lib.Xup();
	this.Xup.name = "Xup";
	this.Xup.parent = this;
	this.Xup.setTransform(735,403.05);
	new cjs.ButtonHelper(this.Xup, 0, 1, 1);

	this.betX = new cjs.Text("Bet x 10", "24px 'Microsoft JhengHei'", "#FFFFFF");
	this.betX.name = "betX";
	this.betX.lineHeight = 34;
	this.betX.lineWidth = 126;
	this.betX.parent = this;
	this.betX.setTransform(672,448.7);

	this.amoutText = new cjs.Text("amout: 0", "24px 'Microsoft JhengHei'", "#FFFFFF");
	this.amoutText.name = "amoutText";
	this.amoutText.lineHeight = 34;
	this.amoutText.lineWidth = 296;
	this.amoutText.parent = this;
	this.amoutText.setTransform(24.5,532);

	this.scoreText = new cjs.Text("score: 0", "24px 'Microsoft JhengHei'", "#FFFFFF");
	this.scoreText.name = "scoreText";
	this.scoreText.lineHeight = 34;
	this.scoreText.lineWidth = 296;
	this.scoreText.parent = this;
	this.scoreText.setTransform(324.5,532);

	this.betButton = new lib.betButton();
	this.betButton.name = "betButton";
	this.betButton.parent = this;
	this.betButton.setTransform(734.5,300);
	new cjs.ButtonHelper(this.betButton, 0, 1, 1);

	this.instance = new lib.gameAreaFrame_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1398,267.1,1,1,0,0,0,-0.5,-0.5);

	this.ListE = new lib.listE();
	this.ListE.name = "ListE";
	this.ListE.parent = this;
	this.ListE.setTransform(580.6,252.1,1,1,0,0,0,0,-15);

	this.ListD = new lib.listD();
	this.ListD.name = "ListD";
	this.ListD.parent = this;
	this.ListD.setTransform(461.8,252.1,1,1,0,0,0,0,-15);

	this.ListC = new lib.listC();
	this.ListC.name = "ListC";
	this.ListC.parent = this;
	this.ListC.setTransform(343,252.1,1,1,0,0,0,0,-15);

	this.ListB = new lib.listB();
	this.ListB.name = "ListB";
	this.ListB.parent = this;
	this.ListB.setTransform(224.2,252.1,1,1,0,0,0,0,-15);

	this.ListA = new lib.listA();
	this.ListA.name = "ListA";
	this.ListA.parent = this;
	this.ListA.setTransform(105.4,267.1);

	this.instance_1 = new lib.gameArea_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343,267.1,1,1,0,0,0,-0.5,-0.5);

	this.instance_2 = new lib.background_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,300,0.6947,0.6947,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.ListA},{t:this.ListB},{t:this.ListC},{t:this.ListD},{t:this.ListE},{t:this.instance},{t:this.betButton},{t:this.scoreText},{t:this.amoutText},{t:this.betX},{t:this.Xup},{t:this.Xdown}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_desktop, null, null);


// stage content:
(lib.canvasSlot = function(mode,startPosition,loop) {
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
	this.frame_0 = function() {
		this.ListA = this.desktop.ListA;
		this.ListB = this.desktop.ListB;
		this.ListC = this.desktop.ListC;
		this.ListD = this.desktop.ListD;
		this.ListE = this.desktop.ListE;
		this.betButton = this.desktop.betButton;
		this.scoreText = this.desktop.scoreText;
		this.amoutText = this.desktop.amoutText;
		this.betX = this.desktop.betX;
		this.Xup = this.desktop.Xup;
		this.Xdown = this.desktop.Xdown;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// desktop_obj_
	this.desktop = new lib.Scene_1_desktop();
	this.desktop.name = "desktop";
	this.desktop.parent = this;
	this.desktop.setTransform(690.6,-1296.8,1,1,0,0,0,690.6,-1296.8);
	this.desktop.depth = 0;
	this.desktop.isAttachedToCamera = 0
	this.desktop.isAttachedToMask = 0
	this.desktop.layerDepth = 0
	this.desktop.layerIndex = 0
	this.desktop.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.desktop).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(383.2,-2908.5,433.59999999999997,3523.6);
// library properties:
lib.properties = {
	id: 'FE379AE3DBA048D9AD7DE56DE9063BB4',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/canvasSlot_atlas_.png?1555556715177", id:"canvasSlot_atlas_"}
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
an.compositions['FE379AE3DBA048D9AD7DE56DE9063BB4'] = {
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