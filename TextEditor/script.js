var DarkTheme = document.querySelector(':root');
var Tab = document.querySelector('textarea');

function SwitchTheme(){
    var DarkThemeOn = getComputedStyle(DarkTheme);
    if(DarkThemeOn.getPropertyValue('--bg-color') === '#C5B896'){
        DarkTheme.style.setProperty('--bg-color', '#363E59');
    }
    else{
        DarkTheme.style.setProperty('--bg-color', '#C5B896');
    }
}

function OpenTab(){
    var TabOpen = getComputedStyle(Tab);
    if(TabOpen.getPropertyValue('scale') === '0'){
        Tab.style.setProperty('scale', '1');
    }
    else{
        Tab.style.setProperty('scale', '0');
    }
}
