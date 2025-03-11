function jourOpen(evt) {

	var pageplay = ['Sound_Assets/PageOneWhisper', 'Sound_Assets/PageTurnOne', 'Sound_Assets/PageTurnTwo', 'Sound_Assets/PageTurnThree'];
	var pageplayFile = pageplay[Math.floor(Math.random() * pageplay.length)];

	//Returns the parent elements visibility
	var resPage = document.getElementById('resch');
	var jourVis = document.getElementById('jourOverlay');

	var journalCheck = jourVis.checkVisibility ({
		visibilityProperty: true,
	})

	var researchCheck = resPage.checkVisibility ({
		visibilityProperty: true,
	});

	//Opening the Journal by pressing J
	if (evt.key == "j") {
		document.getElementById('jourOverlay').style.display = "inline";
		openJor.play();
		closeJor.mute(false);

		openJor.on("end", function() {
			openJor.mute(true);
		})

	}
	//Closing the Journal by pressing E
	else if (evt.key == "e") {
		document.getElementById('jourOverlay').style.display = "none";
		document.getElementById('ui').style.display = "inline";

		var mainSelect = document.querySelectorAll(".mainHide");
		for (var i = 0; i < mainSelect.length; i++) {
			mainSelect[i].style.display = "none";		
		}
		
		closeJor.play();
		openJor.mute(false);

		closeJor.on("end", function() {
			closeJor.mute(true);
		})

	}
	//Speaking Puppet by pressing S
	else if (evt.key == "s") {
		var squeakPlay = ['Sound_Assets/Normal_Squeak/Squeak_One', 'Sound_Assets/Normal_Squeak/Squeak_Two', 'Sound_Assets/Normal_Squeak/Squeak_Three', 'Sound_Assets/Normal_Squeak/Squeak_Four', 'Sound_Assets/Normal_Squeak/Squeak_Five'];
    	var squeakFile = squeakPlay[Math.floor(Math.random() * squeakPlay.length)];

		howlSqueak[squeakFile].play();

		howlSqueak[squeakFile].on('end', function() {
			tagReact();
		});
	}	
	//Switching Pages
	//Key presses only activate if the player is reviewing research
	else if (evt.keyCode == 39 && researchCheck == true) {
		document.getElementById('pageOne').style.display = "none";
		document.getElementById('pageTwo').style.display = "inline";
		howlpage[pageplayFile].play();
	} 
	else if (evt.keyCode == 37 && researchCheck == true) {
		document.getElementById('pageOne').style.display = "inline";
		document.getElementById('pageTwo').style.display = "none";
		howlpage[pageplayFile].play();
	}

}

//Setting Interactions

//Setting the FullScreen
function fullScreenOn() {
	var elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	  } else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	  }
};

function fullScreenOff() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	  } else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	  } else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	  }
};



//Highlighting the menu options

//Highlighting the Back Arrow
function spriteArrow() {
	document.getElementById('jourArrow').src = "Journal_Assets/arrowHigh.png";
	document.getElementById('jourArrow').style.width = "45px";
	ui.play();
}

function spriteBackAr() {
	document.getElementById('jourArrow').src = "Journal_Assets/arrow.png";
	document.getElementById('jourArrow').style.width = "35px";
}

//Highlighting Review Option
	function spriteReview() {
		document.getElementById('jourReview').src = "Journal_Assets/OptionReviewHigh.png";
		document.getElementById('jourReview').style.width = "350px";
		ui.play();
	}
	
	function spriteBackRev() {
		document.getElementById('jourReview').src = "Journal_Assets/OptionReview.png";
		document.getElementById('jourReview').style.width = "325px";
	}

//Highlighting Key Option
	function spriteKey() {
		document.getElementById('jourKey').src = "Journal_Assets/OptionKeyHigh.png";
		document.getElementById('jourKey').style.width = "225px";
		ui.play();
	}

	function spriteBackKey() {
		document.getElementById('jourKey').src = "Journal_Assets/OptionKey.png";
		document.getElementById('jourKey').style.width = "200px";
	}

	//Highlighting the key badge upgrades
	function spriteBadge() {
		document.getElementById('jourUpgrade').style.display = "inline";
	}

	function spriteBackBadge() {
		document.getElementById('jourUpgrade').style.display = "none";
	}

//Highlighting Credit Option
	function spriteCredit() {
		document.getElementById('jourCredit').src = "Journal_Assets/OptionCreditHigh.png";
		document.getElementById('jourCredit').style.width = "175px";
		ui.play();
	}

	function spriteBackCredit() {
		document.getElementById('jourCredit').src = "Journal_Assets/OptionCredit.png";
		document.getElementById('jourCredit').style.width = "150px";
	}

	//Highlighting Window Option
	function spriteWindow() {
		document.getElementById('jourWindow').src = "Journal_Assets/OptionWindowHigh.png";
		document.getElementById('jourWindow').style.width = "375px";
		ui.play();
	}

	function spriteBackWin() {
		document.getElementById('jourWindow').src = "Journal_Assets/OptionWindow.png";
		document.getElementById('jourWindow').style.width = "350px";
	}

	//Highlighting Audio Option
	function spriteAudio() {
		document.getElementById('jourAudio').src = "Journal_Assets/OptionAudioHigh.png";
		document.getElementById('jourAudio').style.width = "350px";
		ui.play();
	}

	function spriteBackAud() {
		document.getElementById('jourAudio').src = "Journal_Assets/OptionAudio.png";
		document.getElementById('jourAudio').style.width = "325px";
	}

	//Highlighting Visual Option
	function spriteVisual() {
		document.getElementById('jourVisual').src = "Journal_Assets/OptionVisualHigh.png";
		document.getElementById('jourVisual').style.width = "350px";
		ui.play();
	}

	function spriteBackVis() {
		document.getElementById('jourVisual').src = "Journal_Assets/OptionVisual.png";
		document.getElementById('jourVisual').style.width = "325px";
	}

	//Highlighting Settings
	//Highlighting Window Settings
	function fullOn() {
		document.getElementById('jourFullOn').src = 'Journal_Assets/OnHigh.png';
		document.getElementById('jourFullOn').style.width = '60px';
		ui.play();
	}

	function fullOnOut() {
		document.getElementById('jourFullOn').src = 'Journal_Assets/On.png';
		document.getElementById('jourFullOn').style.width = '50px';
	}

	function fullOff() {
		document.getElementById('jourFullOff').src = 'Journal_Assets/OffHigh.png';
		document.getElementById('jourFullOff').style.width = '85px';
		ui.play();
	}

	function fullOffOut() {
		document.getElementById('jourFullOff').src = 'Journal_Assets/Off.png';
		document.getElementById('jourFullOff').style.width = '75px';
	}

	function FPSOn() {
		document.getElementById('jourFPSOn').src= 'Journal_Assets/OnHigh.png';
		document.getElementById('jourFPSOn').style.width = '60px';
		ui.play();
	}

	function FPSOnOut() {
		document.getElementById('jourFPSOn').src= 'Journal_Assets/On.png';
		document.getElementById('jourFPSOn').style.width = '50px';
	}

	function FPSOff() {
		document.getElementById('jourFPSOff').src= 'Journal_Assets/OffHigh.png';
		document.getElementById('jourFPSOff').style.width = '85px';
		ui.play();
	}

	function FPSOffOut() {
		document.getElementById('jourFPSOff').src= 'Journal_Assets/Off.png';
		document.getElementById('jourFPSOff').style.width = '75px';
	}

	//Highlighting Visual Settings
	function curOn() {
		document.getElementById('jourCurOn').src = 'Journal_Assets/OnHigh.png';
		document.getElementById('jourCurOn').style.width = '60px';
		ui.play();
	}

	function curOnOut() {
		document.getElementById('jourCurOn').src = 'Journal_Assets/On.png';
		document.getElementById('jourCurOn').style.width = '50px';
	}

	function curOff() {
		document.getElementById('jourCurOff').src = 'Journal_Assets/OffHigh.png';
		document.getElementById('jourCurOff').style.width = '85px';
		ui.play();
	}

	function curOffOut() {
		document.getElementById('jourCurOff').src = 'Journal_Assets/Off.png';
		document.getElementById('jourCurOff').style.width = '75px';
	}

	function highOn() {
		document.getElementById('jourHighOn').src = 'Journal_Assets/OnHigh.png';
		document.getElementById('jourHighOn').style.width = '60px';
		ui.play();
	}

	function highOnOut() {
		document.getElementById('jourHighOn').src = 'Journal_Assets/On.png';
		document.getElementById('jourHighOn').style.width = '50px';
	}

	function highOff() {
		document.getElementById('jourHighOff').src = 'Journal_Assets/OffHigh.png';
		document.getElementById('jourHighOff').style.width = '85px';
		ui.play();
	}

	function highOffOut() {
		document.getElementById('jourHighOff').src = 'Journal_Assets/Off.png';
		document.getElementById('jourHighOff').style.width = '75px';
	}

	function largeHover() {
		document.getElementById('jourLarge').src= 'Journal_Assets/LargeHigh.png';
		document.getElementById('jourLarge').style.width = '115px';
		ui.play();
	}

	function largeOut() {
		document.getElementById('jourLarge').src= 'Journal_Assets/Large.png';
		document.getElementById('jourLarge').style.width = '105px';
	}

	function mediumHover() {
		document.getElementById('jourMedium').src= 'Journal_Assets/MediumHigh.png';
		document.getElementById('jourMedium').style.width = '145px';
		ui.play();
	}

	function mediumOut() {
		document.getElementById('jourMedium').src= 'Journal_Assets/Medium.png';
		document.getElementById('jourMedium').style.width = '135px';
	}

	function smallHover() {
		document.getElementById('jourSmall').src= 'Journal_Assets/SmallHigh.png';
		document.getElementById('jourSmall').style.width = '95px';
		ui.play();
	}

	function smallOut() {
		document.getElementById('jourSmall').src= 'Journal_Assets/Small.png';
		document.getElementById('jourSmall').style.width = '85px';
	}

	//Loading journal objects

	//Journal Back Arrow 
	function moveArrow() {
		document.getElementById('ui').style.display = "inline";
		var mainSelect = document.querySelectorAll(".mainHide");
		for (var i = 0; i < mainSelect.length; i++) {
			mainSelect[i].style.display = "none";		
		}

		var pageplay = ['Sound_Assets/PageOneWhisper', 'Sound_Assets/PageTurnOne', 'Sound_Assets/PageTurnTwo', 'Sound_Assets/PageTurnThree'];
		var pageplayFile = pageplay[Math.floor(Math.random() * pageplay.length)];
		howlpage[pageplayFile].play();
	}
	
	//Journal Research
	function moveRev() {
		document.getElementById('ui').style.display = "none";
		document.getElementById('resch').style.display = "inline";

		var pageplay = ['Sound_Assets/PageOneWhisper', 'Sound_Assets/PageTurnOne', 'Sound_Assets/PageTurnTwo', 'Sound_Assets/PageTurnThree'];
		var pageplayFile = pageplay[Math.floor(Math.random() * pageplay.length)];
		howlpage[pageplayFile].play();
	}

	//Rot Key Upgrades
	function moveKey() {
		document.getElementById('ui').style.display = "none";
		document.getElementById('upgr').style.display = "inline";
		document.getElementById('ar').style.display = "inline";

		var pageplay = ['Sound_Assets/PageOneWhisper', 'Sound_Assets/PageTurnOne', 'Sound_Assets/PageTurnTwo', 'Sound_Assets/PageTurnThree'];
		var pageplayFile = pageplay[Math.floor(Math.random() * pageplay.length)];
		howlpage[pageplayFile].play();
	}

	//Journal Settings
	function moveWindow() {
		document.getElementById('ui').style.display = "none";
		document.getElementById('win').style.display = "inline";
		document.getElementById('ar').style.display = "inline";

		var pageplay = ['Sound_Assets/PageOneWhisper', 'Sound_Assets/PageTurnOne', 'Sound_Assets/PageTurnTwo', 'Sound_Assets/PageTurnThree'];
		var pageplayFile = pageplay[Math.floor(Math.random() * pageplay.length)];
		howlpage[pageplayFile].play();
	}

	function moveAudio() {
		document.getElementById('ui').style.display = "none";
		document.getElementById('aud').style.display = "inline";
		document.getElementById('ar').style.display = "inline";

		var pageplay = ['Sound_Assets/PageOneWhisper', 'Sound_Assets/PageTurnOne', 'Sound_Assets/PageTurnTwo', 'Sound_Assets/PageTurnThree'];
		var pageplayFile = pageplay[Math.floor(Math.random() * pageplay.length)];
		howlpage[pageplayFile].play();
	}

	function moveVisual() {
		document.getElementById('ui').style.display = "none";
		document.getElementById('vis').style.display = "inline";
		document.getElementById('ar').style.display = "inline";

		var pageplay = ['Sound_Assets/PageOneWhisper', 'Sound_Assets/PageTurnOne', 'Sound_Assets/PageTurnTwo', 'Sound_Assets/PageTurnThree'];
		var pageplayFile = pageplay[Math.floor(Math.random() * pageplay.length)];
		howlpage[pageplayFile].play();
	}

	function largeAct() {
		var captionList = document.querySelectorAll('.cap');

		for (let i = 0; i < captionList.length; i++) {
            captionList[i].style.fontSize = '42px';
        };
	}

	function mediumAct() {
		var captionList = document.querySelectorAll('.cap');

		for (let i = 0; i < captionList.length; i++) {
            captionList[i].style.fontSize = '32px';
        };
	}

	function smallAct() {
		var captionList = document.querySelectorAll('.cap');

		for (let i = 0; i < captionList.length; i++) {
            captionList[i].style.fontSize = '25px';
        };
	}