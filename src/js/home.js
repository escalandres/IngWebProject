function darkMode(){
    const darkModeInput = document.getElementById('darkModeInput');
    const darkModeLabel = document.getElementById('darkModeLabel');
    const darkModeSpan = document.getElementById('darkModeSpan');
    if(darkModeInput.checked===true){
        darkModeSpan.classList.add("dark-theme-span");
        darkModeSpan.classList.remove("light-them-span");
        darkModeLabel.classList.add("dark-theme-toggle");
        darkModeLabel.classList.remove("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'var(--body-bg-dark)'); //--body-bg-dark
        document.documentElement.style.setProperty('--section-color', 'var(--white)'); //--white
        document.documentElement.style.setProperty('--section-background-off', 'var(--body-bg-dark)'); //--body-bg-dark
        document.documentElement.style.setProperty('--section-background-white', 'var(--dt-darkest)'); //--dt-darkest
        
    }
    else{
        darkModeSpan.classList.remove("dark-theme-span");
        darkModeSpan.classList.add("light-them-span");
        darkModeLabel.classList.remove("dark-theme-toggle");
        darkModeLabel.classList.add("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'var(--bluish-purple)');
        document.documentElement.style.setProperty('--section-color', 'var(--not-quite-dark)'); //--not-quite-dark
        document.documentElement.style.setProperty('--section-background-off', 'var(--off-white)'); //--body-bg
        document.documentElement.style.setProperty('--section-background-white', 'var(--white)'); //--white
    }
    
}