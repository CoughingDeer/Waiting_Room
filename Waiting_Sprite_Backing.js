// JAVASCRIPT FILE ONLY
//Used for Sprite interactions and events mainly!

function tagInteract() {
    document.getElementById('tag').src = 'Tag_Hover.gif';
    pageUp.play();
};

function tagOut() {
    document.getElementById('tag').src = 'Tag_Idle.png';
    pageDown.play();
};

function tagSpeak() {

    var captionList = document.querySelectorAll('.cap');

    var tagFrontLine = ['Sarc_1', 'Sarc_2', 'Agr_3', 'Agr_4'];
    var tagFile = tagFrontLine[Math.floor(Math.random() * tagFrontLine.length)];

	howlFrontLine[tagFile].play();

    switch (tagFile) {
        case 'Sarc_1':
            document.getElementById('cap10').style.display = 'inline';
            break;
        case 'Sarc_2':
            document.getElementById('cap11').style.display = 'inline';
            break;
        case 'Agr_3':
            document.getElementById('cap8').style.display = 'inline';
            break;
        case 'Agr_4':
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

    var tagOffend = ['Offend_1', 'Offend_2'];
    var offendFile = tagOffend[Math.floor(Math.random() * tagOffend.length)];

    switch (offendFile) {
        case 'Offend_1':
            document.getElementById('cap4').style.display = 'inline';
            break;
        case 'Offend_2':
            document.getElementById('cap5').style.display = 'inline';
            break;
    };

    howlOffend[offendFile].on('end', function() {
        for (let i = 0; i < captionList.length; i++) {
            captionList[i].style.display = 'none';
        };
    });

    var tagSqueak = ['Tag_Squeak_One', 'Tag_Squeak_Two', 'Tag_Squeak_Three', 'Tag_Squeak_Four', 'Tag_Squeak_Five'];
    var tagSqueakFile = tagSqueak[Math.floor(Math.random() * tagSqueak.length)];

    if (squeakCount <= 10) {
        howlOffend[offendFile].play();
        squeakCount++;
    } else {
        howlTagSqueak[tagSqueakFile].play();
    };
};
