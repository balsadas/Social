import React from "react";


function Button({title,color,color1,size,color2}) {
    return (
        <div>
            <div className={`rounded-3xl select-none cursor-pointer  shadow-lg p-3 text-${color1} font-[700] md:text-${size}  bg-${color || color2} flex justify-center`}>
                {title}
            </div>
        </div>
    )
}


export default Button;