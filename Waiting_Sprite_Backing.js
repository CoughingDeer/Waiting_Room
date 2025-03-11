// JAVASCRIPT FILE ONLY
//Used for Sprite interactions and events mainly!

function tagInteract() {
    document.getElementById('tag').src = 'Sprite_Assets/Tag_Hover.gif';
    pageUp.play();
};

function tagOut() {
    document.getElementById('tag').src = 'Sprite_Assets/Tag_Idle.png';
    pageDown.play();
};

function tagSpeak() {

    var captionList = document.querySelectorAll('.cap');

    var tagFrontLine = ['Voice_Lines/Sarc_1', 'Voice_Lines/Sarc_2', 'Voice_Lines/Agr_3', 'Voice_Lines/Agr_4'];
    var tagFile = tagFrontLine[Math.floor(Math.random() * tagFrontLine.length)];

	howlFrontLine[tagFile].play();

    switch (tagFile) {
        case 'Voice_Lines/Sarc_1':
            document.getElementById('cap10').style.display = 'inline';
            break;
        case 'Voice_Lines/Sarc_2':
            document.getElementById('cap11').style.display = 'inline';
            break;
        case 'Voice_Lines/Agr_3':
            document.getElementById('cap8').style.display = 'inline';
            break;
        case 'Voice_Lines/Agr_4':
            document.getElementById('cap9').style.display = 'inline';
            break;
    };

    howlFrontLine[tagFile].on('end', function() {
        for (let i = 0; i < captionList.length; i++) {
            captionList[i].style.display = 'none';
        };
    });
};

//When Tag reacts to outside player actions
function tagReact() {
    var captionList = document.querySelectorAll('.cap');
    var squeakCount = 0;

    var tagOffend = ['Voice_Lines/Offend_1', 'Voice_Lines/Offend_2'];
    var offendFile = tagOffend[Math.floor(Math.random() * tagOffend.length)];

    switch (offendFile) {
        case 'Voice_Lines/Offend_1':
            document.getElementById('cap4').style.display = 'inline';
            break;
        case 'Voice_Lines/Offend_2':
            document.getElementById('cap5').style.display = 'inline';
            break;
    };

    howlOffend[offendFile].on('end', function() {
        for (let i = 0; i < captionList.length; i++) {
            captionList[i].style.display = 'none';
        };
    });

    var tagSqueak = ['Voice_Lines/Tag_Squeak_One', 'Voice_Lines/Tag_Squeak_Two', 'Voice_Lines/Tag_Squeak_Three', 'Voice_Lines/Tag_Squeak_Four', 'Voice_Lines/Tag_Squeak_Five'];
    var tagSqueakFile = tagSqueak[Math.floor(Math.random() * tagSqueak.length)];

    if (squeakCount <= 10) {
        howlOffend[offendFile].play();
        squeakCount++;
    } else {
        howlTagSqueak[tagSqueakFile].play();
    };
};