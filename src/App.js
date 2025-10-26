import { useState } from "react";

import ProgressBar from "./ProgressBar"

export default function App() {
    const [progress, setProgress] = useState(0);

    function handleIncrease(){
        if (progress<100){
            setProgress(progress+10)
        }
        
    }
    function handleDecrease(){
        if (progress>0){
            setProgress(progress-10)
        }
    }

    return (
        <div>
            <div><ProgressBar progress={progress} />
            <button
                onClick={handleIncrease}
                style={{
                    backgroundColor:"blue",
                    color:"white",
                    padding:"10px",
                    borderRadius:"10px",
                    
                }}
            >Increase Progress</button></div>
            
            <div><button
            onClick={handleDecrease}
            style={{
                backgroundColor:"blue",
                color:"white",
                padding:"10px",
                borderRadius:"10px",
                marginTop:"10px",
                
            }}
        >Decrease Progress</button></div>
        
        </div>
    );
}