import React, { useState } from "react";
import Button from "./Button";


const post_1 = [
    { title: 'Başlangyç' },
    { title: 'General' },
    { title: 'Talap(7)' }
]

const post_2 = [
    { title: 'Orazow Hoşgeldi', title1: 'Diňe oýandym bruh', img: './img/Orazow Hoşgeldi Gaýgysyzowiç.jpg' },
    { title: 'Hudaýgulyýew Hudaýguly', title1: 'Gowmy ýagdaýlaň?', img: './img/Hudaýgulyýew Hudaýguly Nurmyradowiç.jpg' },
    { title: 'Nazarow Atabaý', title1: 'Bu bolmaýar!', img: './img/Nazarow Atabaý Annageldyýewiç.jpg' },
    { title: 'Süleýmangulyýew Aşyrmuhammet', title1: 'Gowy menem', img: './img/Süleýmangulyýew Aşyrmuhammet Amangulyýewiç.jpg' },
    { title: 'Şirmyradow Döwletgeldi', title1: 'Okuw haçan gutarýar?', img: './img/Şirmyradow Döwletgeldi.jpg' },
    { title: 'Nurmyradow Abdylsamat', title1: 'Ertir näme paralar bar?', img: './img/Nurmyradow Abdylsamat.jpg' },
]
const post_3 = [
    { title: 'Nurmyradow Abdylsamat', title1: '8 özara dost', img: './img/Nurmyradow Abdylsamat.jpg' },
    { title: 'Şirmyradow Döwletgeldi', title1: '9 özara dost', img: './img/Şirmyradow Döwletgeldi.jpg' },
    { title: 'Nazarow Atabaý', title1: '7 özara dost', img: './img/Nazarow Atabaý Annageldyýewiç.jpg' },
    { title: 'Hudaýgulyýew Hudaýguly', title1: '2 özara dost', img: './img/Hudaýgulyýew Hudaýguly Nurmyradowiç.jpg' },
]

function Paper3() {
    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)
    return (
        <div >
            <div className="mt-[2rem]  shadow-xl rounded-xl bg-[#fff] p-3">

                <div className="flex justify-between">
                    <p className="font-[500] md:text-[1.2vw]">Habar</p>
                    <img src="./img/edit.png" className="md:w-[1.5vw] md:h-[1.5vw]" />
                </div>
                <div className="flex items-center mt-[1rem]">
                    <span className="absolute p-2"><img src="./img/loupe1.png" className="md:w-[1vw] md:h-[1vw]" /></span>
                    <input className="border text-[.8vw] rounded-lg w-full py-2 pl-[2rem] bg-[#F0EEF6]" placeholder="habar gözle" type="text" />
                </div>
                <div >
                    <ul className="flex w-[90%]">
                        {post_1.map((post, i) => (
                            <li key={i} onClick={() => setClick1(i)} className={click1 === i ? "flex mx-3 md:text-[1vw] font-[500] mt-4 cursor-pointer  text-[#6F4DF6]  select-none" : "flex mx-3 cursor-pointer select-none md:text-[1vw] font-[500] mt-4  "}>
                                <div>

                                    {post.title}
                                    {click1 === i ? <div className="h-[4px] rounded-lg bg-[#6F4DF6] "></div> : <div></div>}
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                </div>
                <div>
                    <ul>
                        {post_2.map((post, i) => (
                            <li key={i} className="p-2 mt-3 flex items-center">
                                <img src={post.img} className="md:w-[2.5vw] md:h-[2.5vw] object-contain rounded-full " />
                                <div className="ml-2">
                                    <p className="md:text-[1vw] font-[500]">  {post.title}</p>
                                    <p className="md:text-[.7vw]">{post.title1}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div>
                <h2 className="md:text-[1.3vw] font-bold mt-4 text-[#9E98B3]">Talap</h2>
                <ul >
                    {post_3.map((post, i) => (
                        <div key={i}> 
                            {click ? <div></div> :
                                <li  className="shadow-xl rounded-xl p-4 mt-[1.5rem]  bg-[#fff]">
                                    <div className="flex items-center">
                                        <img className="md:w-[2.5vw] md:h-[2.5vw] object-contain rounded-full " src={post.img} />
                                        <div className="ml-3">
                                            <p className="md:text-[1.2vw] font-[500] text-[#241E38]">{post.title}</p>
                                            <p className=" md:text-[.8vw] font-[500]  text-[#9E98B3]">{post.title1}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:w-[95%] mt-5">
                                        <div className="md:w-[40%] "> <Button color={"[#6F4DF6]"} title={'Kabul et'} color1={'[#fff]'} size={'[1vw]'} /></div>
                                        <div onClick={() => setClick(!click)} className="md:w-[40%] "><Button color2={'[#F0F0F0]'} title={'Aýyr'} color1={'[black]'} size={'[1vw]'} /></div>
                                    </div>
                                </li>}
                        </div>
                    ))}
                </ul>
            </div>

        </div>
    )
}


export default Paper3;