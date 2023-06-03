import React from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    const handleSidebarClick = (href) => {
        navigate('/Create');
    }
    return (
        <div className="p-4 shadow-md bg-[#fff] rounded-xl">
            <div className="grid grid-cols-3">
                <Link to='/'>
                    <div className="flex justify-center items-center  font-[500] md:text-[2vw]">nokoSocial</div>
                </Link>
                <div>
                    <div className="flex items-center">
                        <span className="absolute p-2"><img src="./img/loupe1.png" className="md:w-[1.5vw] md:h-[1.5vw]" /></span>
                        <input className="border text-[1vw] rounded-lg w-full py-2 pl-[3rem] bg-[#F0EEF6]" placeholder="Döredijileri, ylham we taslamalary gözläň" type="text" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div onClick={()=> handleSidebarClick()}  className="mr-[2rem] w-[10vw]">
                        <Button     color={'[#6F4DF6]'} title={'Dörediň'} color1={'[#fff]'} size={'[1vw]'} />
                    </div>
                    <img src="./img/Jollyýewa Hatyja Mämmetmyradowna.jpg" className=" md:w-[3vw] md:h-[3vw] rounded-full object-contain" />
                </div>
            </div>
        </div>
    )
}


export default Navbar