var Root = document.querySelector(':root');
var Tab = document.querySelector('textarea');
var Font = document.querySelector('input');

function SwitchTheme(){
    var DarkThemeOn = getComputedStyle(Root);
    if(DarkThemeOn.getPropertyValue('--bg-color') === '#C5B896'){
        Root.style.setProperty('--bg-color', '#363E59');
    }
    else{
        Root.style.setProperty('--bg-color', '#C5B896');
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

function ChangeFontSize(){
    var FontChange = getPropertyValue(Font);
    var FontSize = getComputedStyle(Root);
    FontSize.style.setProperty('--font-size', 'Font');
    function test(){
        alert(FontChange);
    }
}
