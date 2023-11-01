var r = document.querySelector(':root');

function SwitchTheme(){
    var rs = getComputedStyle(r);
    if(rs.getPropertyValue('--bg-color') === '#C5B896'){
        r.style.setProperty('--bg-color', '#505B84');
    }
    else{
        r.style.setProperty('--bg-color', '#C5B896');
    }
}
   
