import React from "react";
import ReactDOM from "react-dom";
import './DarkModeButton.css'

function DarkModeButton( { darkMode, setDarkMode } ){
    

    // React.useEffect(() => {
    //     flicker = document.getElementById('flicker');
    //     app = document.getElementById('App');
    // }, []);

    function changeDarkMode(){
        const flicker = document.getElementById('flicker');
        const app = document.getElementById('App');
        flicker.classList.toggle('dark-mode');
        app.classList.toggle('dark-mode');
        console.log(flicker);
        console.log(app);
        setDarkMode(!darkMode);
    }

    return(
        <div 
        className={'switch w-20 h-10 m-1 bg-gray-950 absolute top-0 right-0 rounded-[5em] flex flex-row duration-100 '}
        onClick={changeDarkMode}
        >
            <div id={'flicker'} className={'flicker w-8 h-8 m-1 bg-slate-100 rounded-[5em] '}>
            </div>
            <div className="moon w-6 h-6 m-2 bg-gray-950 rounded-[5em]"></div>

        </div>
    );
}

export { DarkModeButton };