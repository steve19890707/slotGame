window.onload = function(){
	init()
}

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
// symbol
var symbolChangeTime,gapTime
var A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4
var totalScore,userAmount
var resultReword
var Xnumber = 10
var isRun = false
var totalLine1B,totalLine1C,totalLine1D,totalLine1E,totalLine2B,totalLine2C,totalLine2D,totalLine2E,totalLine3B,totalLine3C,totalLine3D,totalLine3E,totalLine4B,totalLine4C,totalLine4D,totalLine4E

// 音訊
var btnSong = new Audio("media/putBtn.mp3")
var rewardSong = new Audio("media/reward.mp3")


function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("FE379AE3DBA048D9AD7DE56DE9063BB4");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.canvasSlot();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();
    // 功能操作區域
	// ------------------------------------------------------------------------------------------------------------------------------
	// 列表A
	var ListA = exportRoot.desktop.ListA
	var symbolA1 = exportRoot.desktop.ListA.tweenA.SymbolA1
	var symbolA2 = exportRoot.desktop.ListA.tweenA.SymbolA2
	var symbolA3 = exportRoot.desktop.ListA.tweenA.SymbolA3
	var symbolA4 = exportRoot.desktop.ListA.tweenA.SymbolA4
	// 列表B
	var ListB = exportRoot.desktop.ListB
	var symbolB1 = exportRoot.desktop.ListB.tweenB.SymbolB1
	var symbolB2 = exportRoot.desktop.ListB.tweenB.SymbolB2
	var symbolB3 = exportRoot.desktop.ListB.tweenB.SymbolB3
	var symbolB4 = exportRoot.desktop.ListB.tweenB.SymbolB4
	// 列表C
	var ListC = exportRoot.desktop.ListC
	var symbolC1 = exportRoot.desktop.ListC.tweenC.SymbolC1
	var symbolC2 = exportRoot.desktop.ListC.tweenC.SymbolC2
	var symbolC3 = exportRoot.desktop.ListC.tweenC.SymbolC3
	var symbolC4 = exportRoot.desktop.ListC.tweenC.SymbolC4
	// 列表D
	var ListD = exportRoot.desktop.ListD
	var symbolD1 = exportRoot.desktop.ListD.tweenD.SymbolD1
	var symbolD2 = exportRoot.desktop.ListD.tweenD.SymbolD2
	var symbolD3 = exportRoot.desktop.ListD.tweenD.SymbolD3
	var symbolD4 = exportRoot.desktop.ListD.tweenD.SymbolD4
	// 列表E
	var ListE = exportRoot.desktop.ListE
	var symbolE1 = exportRoot.desktop.ListE.tweenE.SymbolE1
	var symbolE2 = exportRoot.desktop.ListE.tweenE.SymbolE2
	var symbolE3 = exportRoot.desktop.ListE.tweenE.SymbolE3
	var symbolE4 = exportRoot.desktop.ListE.tweenE.SymbolE4

	// 下注分數相關操作
	// ------------------------------------------------------------------------------------------------------------------------------
	// 下注按鈕
	var betBtn = exportRoot.desktop.betButton
	// 分數
	var betScore = exportRoot.desktop.scoreText
	// 加倍按鈕
	var betxUP = exportRoot.desktop.Xup
	var betxDown = exportRoot.desktop.Xdown
	// 下注倍數
	var betxNumber = exportRoot.desktop.betX
	betxUP.addEventListener('click',function(){
		if(Xnumber < 600 && !isRun) {
			Xnumber += 10
			betxNumber.text = 'Bet x '+ Xnumber
		}
	})
	betxDown.addEventListener('click',function(){
		if(Xnumber > 10 && !isRun) {
			Xnumber -= 10
			betxNumber.text = 'Bet x '+ Xnumber
		}
	})
	// 餘額
	userAmount = 10000 // 取得餘額
	var totalAmount = exportRoot.desktop.amoutText
	totalAmount.text = 'amout: '+userAmount
	// symbol動畫
	function symbolAction(obj,play){
		waitTime = 2000
		setTimeout(function(){
			obj.gotoAndPlay(play)
		},waitTime)
	}
	// 下注
	// ------------------------------------------------------------------------------------------------------------------------------
	betBtn.addEventListener('click',function(){
		rewardSong = new Audio("media/reward.mp3")
		if(!isRun && userAmount >= Xnumber) {
			btnSong.play()
			// 變換時間
			betBtn.alpha = 0.5
			symbolChangeTime = 350
			gapTime = 150
			waitTime = 2000
			// 基礎還原循環
			isRun = true
			totalScore = 0
			resultReword = 0
			betScore.text = "score: "+ totalScore
			symbolA1.stop(),symbolA2.stop(),symbolA3.stop(),symbolA4.stop(),symbolB1.stop(),symbolB2.stop(),symbolB3.stop(),symbolB4.stop()
			symbolC1.stop(),symbolC2.stop(),symbolC3.stop(),symbolC4.stop(),symbolD1.stop(),symbolD2.stop(),symbolD3.stop(),symbolD4.stop()
			symbolE1.stop(),symbolE2.stop(),symbolE3.stop(),symbolE4.stop()
			totalLine1B = 0,totalLine1C = 0,totalLine1D = 0,totalLine1E = 0,totalLine2B = 0,totalLine2C = 0,totalLine2D = 0,totalLine2E = 0
			totalLine3B = 0,totalLine3C = 0,totalLine3D = 0,totalLine3E = 0,totalLine4B = 0,totalLine4C = 0,totalLine4D = 0,totalLine4E = 0
			// 扣下注分數
			userAmount -= Xnumber
			totalAmount.text = 'amout: '+userAmount
			// 隨機symbol
			A1 = Math.floor(Math.random() * 10) + 1,A2 = Math.floor(Math.random() * 10) + 1,A3 = Math.floor(Math.random() * 10) + 1,A4 = Math.floor(Math.random() * 10) + 1
			B1 = Math.floor(Math.random() * 10) + 1,B2 = Math.floor(Math.random() * 10) + 1,B3 = Math.floor(Math.random() * 10) + 1,B4 = Math.floor(Math.random() * 10) + 1
			C1 = Math.floor(Math.random() * 10) + 1,C2 = Math.floor(Math.random() * 10) + 1,C3 = Math.floor(Math.random() * 10) + 1,C4 = Math.floor(Math.random() * 10) + 1
			D1 = Math.floor(Math.random() * 10) + 1,D2 = Math.floor(Math.random() * 10) + 1,D3 = Math.floor(Math.random() * 10) + 1,D4 = Math.floor(Math.random() * 10) + 1
			E1 = Math.floor(Math.random() * 10) + 1,E2 = Math.floor(Math.random() * 10) + 1,E3 = Math.floor(Math.random() * 10) + 1,E4 = Math.floor(Math.random() * 10) + 1
			// 分數計算(得分條件)
			let total = [A1,A2,A3,A4]
			let reward1,reward2,reward3,reward4
			let action1,action2,action3,action4
			let totalreward = [reward1,reward2,reward3,reward4]
			let totalAction = [action1,action2,action3,action4]
			let animatePlay = ['rewardAction1','rewardAction2','rewardAction3','rewardAction4','rewardAction5','rewardAction6','rewardAction7','rewardAction8','rewardAction9','rewardAction10']
			for(let i = 0 ;i < total.length; i++){
				switch (total[i]) {
					case 1: 
					totalreward[i] = 15
					totalAction[i] = animatePlay[0]
					break
					case 2:
					totalreward[i] = 7
					totalAction[i] = animatePlay[1]
					break
					case 3:
					totalreward[i] = 6
					totalAction[i] = animatePlay[2]
					break
					case 4:
					totalreward[i] = 6
					totalAction[i] = animatePlay[3]
					break
					case 5:
					totalreward[i] = 8
					totalAction[i] = animatePlay[4]
					break
					case 6:
					totalreward[i] = 5
					totalAction[i] = animatePlay[5]
					break
					case 7:
					totalreward[i] = 5
					totalAction[i] = animatePlay[6]
					break
					case 8:
					totalreward[i] = 5
					totalAction[i] = animatePlay[7]
					break
					case 9:
					totalreward[i] = 5
					totalAction[i] = animatePlay[8]
					break
					case 10:
					totalreward[i] = 10
					totalAction[i] = animatePlay[9]
					break
				}
			}
			// 進行轉動樣式
			// 第一列
			ListA.gotoAndPlay('slotGo')
			setTimeout(function(){	
				symbolA1.gotoAndPlay('symbolPlay'+A1)
				symbolA2.gotoAndPlay('symbolPlay'+A2)
				symbolA3.gotoAndPlay('symbolPlay'+A3)
				symbolA4.gotoAndPlay('symbolPlay'+A4)
			},symbolChangeTime)
			// 第二列
			setTimeout(function(){
				setTimeout(function(){
					symbolB1.gotoAndPlay('symbolPlay'+B1)
					symbolB2.gotoAndPlay('symbolPlay'+B2)
					symbolB3.gotoAndPlay('symbolPlay'+B3)
					symbolB4.gotoAndPlay('symbolPlay'+B4)
				},symbolChangeTime)
			ListB.gotoAndPlay('slotGo')
			},gapTime)
			// 第三列
			setTimeout(function(){
				setTimeout(function(){
					symbolC1.gotoAndPlay('symbolPlay'+C1)
					symbolC2.gotoAndPlay('symbolPlay'+C2)
					symbolC3.gotoAndPlay('symbolPlay'+C3)
					symbolC4.gotoAndPlay('symbolPlay'+C4)
				},symbolChangeTime)
				ListC.gotoAndPlay('slotGo')
			},gapTime*2)
			// 第四列
			setTimeout(function(){
				setTimeout(function(){
					symbolD1.gotoAndPlay('symbolPlay'+D1)
					symbolD2.gotoAndPlay('symbolPlay'+D2)
					symbolD3.gotoAndPlay('symbolPlay'+D3)
					symbolD4.gotoAndPlay('symbolPlay'+D4)
				},symbolChangeTime)
				ListD.gotoAndPlay('slotGo')
			},gapTime*3)
			// 第五列
			setTimeout(function(){
				setTimeout(function(){
					symbolE1.gotoAndPlay('symbolPlay'+E1)
					symbolE2.gotoAndPlay('symbolPlay'+E2)
					symbolE3.gotoAndPlay('symbolPlay'+E3)
					symbolE4.gotoAndPlay('symbolPlay'+E4)
				},symbolChangeTime)
				ListE.gotoAndPlay('slotGo')
			},gapTime*4)
			// 第一組連線
			if(A1 == B1 || A1 == B2 || A1 == B3 || A1 == B4){
				// 下一層連線
				if(A1 == C1 || A1 == C2 || A1 == C3 || A1 == C4){
					symbolAction(symbolA1,totalAction[0])
					if(A1 == B1){symbolAction(symbolB1,totalAction[0]),totalLine1B += 1}
					if(A1 == B2){symbolAction(symbolB2,totalAction[0]),totalLine1B += 1}
					if(A1 == B3){symbolAction(symbolB3,totalAction[0]),totalLine1B += 1}
					if(A1 == B4){symbolAction(symbolB4,totalAction[0]),totalLine1B += 1}
					if(A1 == C1){symbolAction(symbolC1,totalAction[0]),totalLine1C += 1}
					if(A1 == C2){symbolAction(symbolC2,totalAction[0]),totalLine1C += 1}
					if(A1 == C3){symbolAction(symbolC3,totalAction[0]),totalLine1C += 1}
					if(A1 == C4){symbolAction(symbolC4,totalAction[0]),totalLine1C += 1}
					// 下一層連線
					if(A1 == D1 || A1 == D2 || A1 == D3 || A1 == D4){
						if(A1 == D1){symbolAction(symbolD1,totalAction[0]),totalLine1D += 1}
						if(A1 == D2){symbolAction(symbolD2,totalAction[0]),totalLine1D += 1}
						if(A1 == D3){symbolAction(symbolD3,totalAction[0]),totalLine1D += 1}
						if(A1 == D4){symbolAction(symbolD4,totalAction[0]),totalLine1D += 1}
						// 下一層連線
						if(A1 == E1 || A1 == E2 || A1 == E3 || A1 == E4){
							if(A1 == E1){symbolAction(symbolE1,totalAction[0]),totalLine1E += 1}
							if(A1 == E2){symbolAction(symbolE2,totalAction[0]),totalLine1E += 1}
							if(A1 == E3){symbolAction(symbolE3,totalAction[0]),totalLine1E += 1}
							if(A1 == E4){symbolAction(symbolE4,totalAction[0]),totalLine1E += 1}
						}
					}
					let link3 = totalLine1B*totalLine1C*totalLine1D*totalLine1E
					if(totalLine1E == 0){totalLine1E +=1 ,link3=0}
					let link2 = totalLine1B*totalLine1C*totalLine1D*totalLine1E
					if(totalLine1D == 0){totalLine1D +=1 ,link2=0}
					let link1 = totalLine1B*totalLine1C*totalLine1D*totalLine1E
					resultReword += totalreward[0]*link1+totalreward[0]*link2+totalreward[0]*link3
				}
			}
			// 第二組連線
			if(A2 == B1 || A2 == B2 || A2 == B3 || A2 == B4){
				// 下一層連線
				if(A2 == C1 ||A2  == C2 ||A2  == C3 ||A2  == C4){
					symbolAction(symbolA2,totalAction[1])
					if(A2 == B1){totalLine2B += 1
						if(A1 !== A2){symbolAction(symbolB1,totalAction[1])}}
					if(A2 == B2){totalLine2B += 1
						if(A1 !== A2){symbolAction(symbolB2,totalAction[1])}}
					if(A2 == B3){totalLine2B += 1
						if(A1 !== A2){symbolAction(symbolB3,totalAction[1])}}
					if(A2 == B4){totalLine2B += 1
						if(A1 !== A2){symbolAction(symbolB4,totalAction[1])}}
					if(A2 == C1){totalLine2C += 1
						if(A1 !== A2){symbolAction(symbolC1,totalAction[1])}}
					if(A2 == C2){totalLine2C += 1
						if(A1 !== A2){symbolAction(symbolC2,totalAction[1])}}
					if(A2 == C3){totalLine2C += 1
						if(A1 !== A2){symbolAction(symbolC3,totalAction[1])}}
					if(A2 == C4){totalLine2C += 1
						if(A1 !== A2){symbolAction(symbolC4,totalAction[1])}}
					// 下一層連線
					if(A2 == D1 || A2 == D2 || A2 == D3 || A2 == D4){
						if(A2 == D1){totalLine2D += 1
							if(A1 !== A2){symbolAction(symbolD1,totalAction[1])}}
						if(A2 == D2){totalLine2D += 1
							if(A1 !== A2){symbolAction(symbolD2,totalAction[1])}}
						if(A2 == D3){totalLine2D += 1
							if(A1 !== A2){symbolAction(symbolD3,totalAction[1])}}
						if(A2 == D4){totalLine2D += 1
							if(A1 !== A2){symbolAction(symbolD4,totalAction[1])}}
						// 下一層連線
						if(A2 == E1 || A2 == E2 || A2 == E3 || A2 == E4){
							if(A2 == E1){totalLine2E += 1
								if(A1 !== A2){symbolAction(symbolE1,totalAction[1])}}
							if(A2 == E2){totalLine2E += 1
								if(A1 !== A2){symbolAction(symbolE2,totalAction[1])}}
							if(A2 == E3){totalLine2E += 1
								if(A1 !== A2){symbolAction(symbolE3,totalAction[1])}}
							if(A2 == E4){totalLine2E += 1
								if(A1 !== A2){symbolAction(symbolE4,totalAction[1])}}
						}
					}
					let link3 = totalLine2B*totalLine2C*totalLine2D*totalLine2E
					if(totalLine2E == 0){totalLine2E +=1 ,link3=0}
					let link2 = totalLine2B*totalLine2C*totalLine2D*totalLine2E
					if(totalLine2D == 0){totalLine2D +=1 ,link2=0}
					let link1 = totalLine2B*totalLine2C*totalLine2D*totalLine2E
					resultReword += totalreward[1]*link1+totalreward[1]*link2+totalreward[1]*link3
				}
			}
			// 第三組連線
			if(A3 == B1 || A3 == B2 || A3 == B3 || A3 == B4){
				// 下一層連線
				if(A3 == C1 || A3 == C2 || A3 == C3 || A3 == C4){
					symbolAction(symbolA3,totalAction[2])
					if(A3 == B1){totalLine3B += 1
						if(A1 !== A3){symbolAction(symbolB1,totalAction[2])}}
					if(A3 == B2){totalLine3B += 1
						if(A1 !== A3){symbolAction(symbolB2,totalAction[2])}}
					if(A3 == B3){totalLine3B += 1
						if(A1 !== A3){symbolAction(symbolB3,totalAction[2])}}
					if(A3 == B4){totalLine3B += 1
						if(A1 !== A3){symbolAction(symbolB4,totalAction[2])}}
					if(A3 == C1){totalLine3C += 1
						if(A1 !== A3){symbolAction(symbolC1,totalAction[2])}}
					if(A3 == C2){totalLine3C += 1
						if(A1 !== A3){symbolAction(symbolC2,totalAction[2])}}
					if(A3 == C3){totalLine3C += 1
						if(A1 !== A3){symbolAction(symbolC3,totalAction[2])}}
					if(A3 == C4){totalLine3C += 1
						if(A1 !== A3){symbolAction(symbolC4,totalAction[2])}}
					// 下一層連線
					if(A3 == D1 || A3 == D2 || A3 == D3 || A3 == D4){
						if(A3 == D1){totalLine3D += 1
							if(A1 !== A3){symbolAction(symbolD1,totalAction[2])}}
						if(A3 == D2){totalLine3D += 1
							if(A1 !== A3){symbolAction(symbolD2,totalAction[2])}}
						if(A3 == D3){totalLine3D += 1
							if(A1 !== A3){symbolAction(symbolD3,totalAction[2])}}
						if(A3 == D4){totalLine3D += 1
							if(A1 !== A3){symbolAction(symbolD4,totalAction[2])}}
						// 下一層連線
						if(A3 == E1 || A3 == E2 || A3 == E3 || A3 == E4){
							if(A3 == E1){totalLine3E += 1
								if(A1 !== A3){symbolAction(symbolE1,totalAction[2])}}
							if(A3 == E2){totalLine3E += 1
								if(A1 !== A3){symbolAction(symbolE2,totalAction[2])}}
							if(A3 == E3){totalLine3E += 1
								if(A1 !== A3){symbolAction(symbolE3,totalAction[2])}}
							if(A3 == E4){totalLine3E += 1
								if(A1 !== A3){symbolAction(symbolE4,totalAction[2])}}
						}
					}
					let link3 = totalLine3B*totalLine3C*totalLine3D*totalLine3E
					if(totalLine3E == 0){totalLine3E +=1 ,link3=0}
					let link2 = totalLine3B*totalLine3C*totalLine3D*totalLine3E
					if(totalLine3D == 0){totalLine3D +=1 ,link2=0}
					let link1 = totalLine3B*totalLine3C*totalLine3D*totalLine3E
					resultReword += totalreward[2]*link1+totalreward[2]*link2+totalreward[2]*link3
				}
			}
			// 第四組連線
			if(A4 == B1 || A4 == B2 || A4 == B3 || A4 == B4){
				// 下一層連線
				if(A4 == C1 || A4 == C2 || A4 == C3 || A4 == C4){
					symbolAction(symbolA4,totalAction[3])
					if(A4 == B1){totalLine4B += 1
						if(A1 !== A4){symbolAction(symbolB1,totalAction[3])}}
					if(A4 == B2){totalLine4B += 1
						if(A1 !== A4){symbolAction(symbolB2,totalAction[3])}}
					if(A4 == B3){totalLine4B += 1
						if(A1 !== A4){symbolAction(symbolB3,totalAction[3])}}
					if(A4 == B4){totalLine4B += 1
						if(A1 !== A4){symbolAction(symbolB4,totalAction[3])}}
					if(A4 == C1){totalLine4C += 1
						if(A1 !== A4){symbolAction(symbolC1,totalAction[3])}}
					if(A4 == C2){totalLine4C += 1
						if(A1 !== A4){symbolAction(symbolC2,totalAction[3])}}
					if(A4 == C3){totalLine4C += 1
						if(A1 !== A4){symbolAction(symbolC3,totalAction[3])}}
					if(A4 == C4){totalLine4C += 1
						if(A1 !== A4){symbolAction(symbolC4,totalAction[3])}}
					// 下一層連線
					if(A4 == D1 || A4 == D2 || A4 == D3 || A4 == D4){
						if(A4 == D1){totalLine4D += 1
							if(A1 !== A4){symbolAction(symbolD1,totalAction[3])}}
						if(A4 == D2){totalLine4D += 1
							if(A1 !== A4){symbolAction(symbolD2,totalAction[3])}}
						if(A4 == D3){totalLine4D += 1
							if(A1 !== A4){symbolAction(symbolD3,totalAction[3])}}
						if(A4 == D4){totalLine4D += 1
							if(A1 !== A4){symbolAction(symbolD4,totalAction[3])}}
						// 下一層連線
						if(A4 == E1 || A4 == E2 || A4 == E3 || A4 == E4){
							if(A4 == E1){totalLine4E += 1
								if(A1 !== A4){symbolAction(symbolE1,totalAction[3])}}
							if(A4 == E2){totalLine4E += 1
								if(A1 !== A4){symbolAction(symbolE2,totalAction[3])}}
							if(A4 == E3){totalLine4E += 1
								if(A1 !== A4){symbolAction(symbolE3,totalAction[3])}}
							if(A4 == E4){totalLine4E += 1
								if(A1 !== A4){symbolAction(symbolE4,totalAction[3])}}
						}
					}
					let link3 = totalLine4B*totalLine4C*totalLine4D*totalLine4E
					if(totalLine4E == 0){totalLine4E +=1 ,link3=0}
					let link2 = totalLine4B*totalLine4C*totalLine4D*totalLine4E
					if(totalLine4D == 0){totalLine4D +=1 ,link2=0}
					let link1 = totalLine4B*totalLine4C*totalLine4D*totalLine4E
					resultReword += totalreward[3]*link1+totalreward[3]*link2+totalreward[3]*link3
				}
			}
			// 獎金計算
			setTimeout(function(){
				if(resultReword == 0){
					isRun = false
					betBtn.alpha = 1
					return
				}else{
					let addNum = setInterval(function(){
						totalScore += 1 * Xnumber
						betScore.text = "score: "+ totalScore
						if(totalScore == resultReword* Xnumber){
							userAmount += resultReword * Xnumber/10
							totalAmount.text = 'amout: '+ userAmount
							rewardSong.play()
							isRun = false
							betBtn.alpha = 1
							clearInterval(addNum)
						}
					},10)
				}
			},waitTime)
		}
	})

    // ------------------------------------------------------------------------------------------------------------------------------
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage)
		stage.addEventListener("tick", handleTick)
		function getProjectionMatrix(container, totalDepth) {
			var focalLength = 528.25;
			var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
			var scale = (totalDepth + focalLength)/focalLength;
			var scaleMat = new createjs.Matrix2D;
			scaleMat.a = 1/scale;
			scaleMat.d = 1/scale;
			var projMat = new createjs.Matrix2D;
			projMat.tx = -projectionCenter.x;
			projMat.ty = -projectionCenter.y;
			projMat = projMat.prependMatrix(scaleMat);
			projMat.tx += projectionCenter.x;
			projMat.ty += projectionCenter.y;
			return projMat;
		}
		function handleTick(event) {
			var cameraInstance = exportRoot.___camera___instance;
			if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
			{
				cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
				cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
				if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
				cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
			}
			applyLayerZDepth(exportRoot);
		}
		function applyLayerZDepth(parent)
		{
			var cameraInstance = parent.___camera___instance;
			var focalLength = 528.25;
			var projectionCenter = { 'x' : 0, 'y' : 0};
			if(parent === exportRoot)
			{
				var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
				projectionCenter.x = stageCenter.x;
				projectionCenter.y = stageCenter.y;
			}
			for(child in parent.children)
			{
				var layerObj = parent.children[child];
				if(layerObj == cameraInstance)
					continue;
				applyLayerZDepth(layerObj, cameraInstance);
				if(layerObj.layerDepth === undefined)
					continue;
				if(layerObj.currentFrame != layerObj.parent.currentFrame)
				{
					layerObj.gotoAndPlay(layerObj.parent.currentFrame);
				}
				var matToApply = new createjs.Matrix2D;
				var cameraMat = new createjs.Matrix2D;
				var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
				var cameraDepth = 0;
				if(cameraInstance && !layerObj.isAttachedToCamera)
				{
					var mat = cameraInstance.getMatrix();
					mat.tx -= projectionCenter.x;
					mat.ty -= projectionCenter.y;
					cameraMat = mat.invert();
					cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
					cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
					if(cameraInstance.depth)
						cameraDepth = cameraInstance.depth;
				}
				if(layerObj.depth)
				{
					totalDepth = layerObj.depth;
				}
				//Offset by camera depth
				totalDepth -= cameraDepth;
				if(totalDepth < -focalLength)
				{
					matToApply.a = 0;
					matToApply.d = 0;
				}
				else
				{
					if(layerObj.layerDepth)
					{
						var sizeLockedMat = getProjectionMatrix(parent, layerObj.layerDepth);
						if(sizeLockedMat)
						{
							sizeLockedMat.invert();
							matToApply.prependMatrix(sizeLockedMat);
						}
					}
					matToApply.prependMatrix(cameraMat);
					var projMat = getProjectionMatrix(parent, totalDepth);
					if(projMat)
					{
						matToApply.prependMatrix(projMat);
					}
				}
				layerObj.transformMatrix = matToApply;
			}
		}
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}