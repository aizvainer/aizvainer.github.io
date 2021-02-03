function myFunction() {
    var x = document.getElementById('mainnav');
    if (x.className == 'mainnav') {
        x.className += ' displaynav';
    }
    else {
        x.className = 'mainnav';
    }
}