import React from "react";
import './loadingSpinner.css'

function LoadingSpinner(){
    return(
        <div className="w-full h-screen bg-slate-900 flex items-center justify-center bg-dark-blue">
            <div className="w-40 h-40 border-[10px] border-sky-300 border-t-sky-100  rounded-[50%] bg-transparent spinner">
                
            </div>
        </div>
    );
}

export { LoadingSpinner }