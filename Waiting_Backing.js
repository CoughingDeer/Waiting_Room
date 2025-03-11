//General Room Script

//Reveals the room
function roomStart() {
    
    document.getElementById('screenStart').style.display = 'none';
    document.getElementById('cap3').style.display = 'none';

    window.addEventListener("keydown", jourOpen, true);

    click.play();
}