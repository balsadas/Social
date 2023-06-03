import React, { useState } from "react"
import Button from "./Button";
import Explore from "../page/Explore";
import { useNavigate } from "react-router-dom";

const Cat = [
    {id:1, title: 'Baş sahypa', img: './img/home1.png', img1: './img/home.png', href:'/home' },
    {id:2, title: 'Gözläň', img: './img/compass1.png', img1: './img/compass.png', href:'/explore'},
    {id:3, title: 'Duýduryşlar', img: './img/notification1.png', img1: './img/notification.png' ,href:'/notification'},
    {id:4, title: 'Habar', img: './img/email1.png', img1: './img/email.png', href:'/message' },
    {id:5, title: 'Bellikler', img: './img/bookmark1.png', img1: './img/bookmark.png', href:'/bookmark' },
    {id:7, title: 'Tema', img: './img/theme1.png', img1: './img/theme.png' },
    {id:8, title: 'Sazlamalar', img: "./img/gear1.png", img1: './img/gear.png' }
]

function Paper1() {
    const [click, setClick] = useState(false)
    const navigate = useNavigate();

    const handleSidebarClick = (href) => {
        navigate(href);
    }
    return (
        <div>
            <div className="flex p-3 shadow-xl mt-[2rem] w-full items-center bg-[#fff] rounded-xl">
                <img src="./img/big_portfolio_item_1.png" className=" md:w-[3vw] md:h-[3vw] rounded-full object-cover" />
                <div className="ml-6 text-[#551A8B] font-[600] md:text-[1.1vw]">
                    <p>Jollyýewa Hatyja</p>
                    <p>@hatyja</p>
                </div>
            </div>
            <div>
                <ul className="shawdow-lg rounded-lg mt-[2rem] bg-[#fff] cursor-pointer">
                    {Cat.map((cat, i) => (
                        <div className="flex " onClick={() => handleSidebarClick(cat.href)} key={cat.id}>
                            {click === i ? <div className="w-[4px] bg-[#6F4DF6] "></div> : <div></div>}
                            <li  className={click === i  ? "flex items-center p-6 m-0 cursor-pointer  w-[100%] select-none bg-[#F0EEF6]" : "flex items-center w-full p-6 cursor-pointer select-none"} onClick={() => setClick(i)}>
                                <img className="md:w-[2vw] md:h-[2vw]" src={i === click ? cat.img1 : cat.img} />
                                <p className="ml-[2rem] md:text-[1.1vw] font-[500]">{cat.title}</p>
                            </li>
                        </div>
                    ))}
                </ul>
                <div className="mt-[1.5rem] mb-[1rem]">
                    <Button color={'[#6F4DF6]'} title={'Dörediň'} color1={'[#fff]'} size={'[#1.2vw]'} />
                </div>
            </div>
        </div>
    )
}


export default Paper1;