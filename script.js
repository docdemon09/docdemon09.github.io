document.getElementById('revealButton').onclick = function() {
    document.getElementById('popup').style.display = 'flex';
}

document.getElementById('closeButton').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}