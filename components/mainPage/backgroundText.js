
import React from 'react'


const BackgroundText = () => {
    return (<>
        <div >Путівник</div>
        <style jsx>{`
            .flowers-way {
                font-family: 'Archivo Black', sans-serif;
                font-size: 128px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.18;
                letter-spacing: 5.98px;
                color: #040f2a;
            }
            
            .text-style-sss {
                color: #1831aa;
            }
            .background-text {
                position: absolute;
                left: -150px;
                object-fit: contain;
                opacity: 0.08;
                font-family: 'Archivo Black', sans-serif;
                font-size: 184px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.88;
                letter-spacing: 8.6px;
                color: #296fdc;

                //background-color: rgba(0,0, 255, 0.1);
            }
        `}</style>
    </>)
}


export default Pathfinder