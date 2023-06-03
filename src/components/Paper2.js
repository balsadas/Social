import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";


const post_1 = [
    {
        title: 'Hekaýaňyz', img: './img/big_portfolio_item_1.png', img2: './img/Jollyýewa Hatyja Mämmetmyradowna.jpg'
    },
    {
        title: 'Aynur Daňatarowa', img: './img/big_portfolio_item_3.png', img2: './img/Daňatarowa Aýnur.jpg'
    },
    {
        title: 'Gapurow Merdan', img: './img/big_portfolio_item_5.png', img2: './img/Gapurow Merdan Gapurowiç.jpg'
    },
    {
        title: 'Wepa Ozarow', img: './img/big_portfolio_item_1.png', img2: './img/Orazow Wepa Ilmyradowiç.jpg'
    },
    {
        title: 'Garlyýew Ylýas', img: './img/big_portfolio_item_2.png', img2: './img/Garlyýew Ylýas Şatlykowiç.jpg'
    },
    {
        title: 'Didar Mätiýew ', img: './img/big_portfolio_item_4.png', img2: './img/Mätiýew Didar Serdarowiç.jpg'
    }
]

const post_2 = [
    {
        title: 'Aýnur Daňatarowa', img2: './img/big_portfolio_item_3.png', img: './img/Daňatarowa Aýnur.jpg', title1: '15 minut öň',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'Jemi teswir 277 '
    },
    {
        title: 'Ylýas Garlyýew', img2: './img/big_portfolio_item_5.png', img: './img/Garlyýew Ylýas Şatlykowiç.jpg', title1: '20 minut öň',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'Jemi teswir 277'
    },
    {
        title: 'Didar Mätiýew', img2: './img/big_portfolio_item_6.png', img: './img/Mätiýew Didar Serdarowiç.jpg', title1: '2 sagat öň ',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'Jemi teswir 277 '
    },
    {
        title: 'Wepa Orazow', img2: './img/big_portfolio_item_1.png', img: './img/Orazow Wepa Ilmyradowiç.jpg', title1: '3 sagat öň',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'Jemi teswir 277'
    },
]




function Paper2() {
    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)
    const [count, setCount] = useState(56)

    const dot = () => {
        setClick1(!click1)
        setCount(count + 1)
    }

    return (
        <div className="mx-6 mt-[2rem] mb-[2rem]">
            <div>
                <ul className="flex">
                    {post_1.map((post, i) => (
                        <li key={i} className="mx-2 grid-cols-6 grid select-none cursor-pointer " >
                            <div className="md:w-[8vw] md:h-[13vw] rounded-2xl mr-[2rem] bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${post.img})` }}>



                                <div className="absalute mx-8  border-[#6F4DF6] rounded-full flex items-center justify-center mt-3 md:w-[3.2vw]  border-x-4 border-y-4  md:h-[3.2vw]">
                                    <img src={post.img2} className="rounded-full md:w-[3vw]  md:h-[2.8vw] object-cobtain" />
                                </div>

                                <div className="flex items-end justify-center mt-[4rem]  text-[1.vw] text-center text-[#fff] font-[500]">
                                    <p>{post.title}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center shadow-lg bg-[#fff] rounded-2xl mt-[1.5rem] py-2 px-4 select-none">
                    <img src="./img/big_portfolio_item_5.png" className="rounded-full md:w-[3vw]  md:h-[2.8vw] object-cover" />
                    <input type="text" placeholder="What's your mind, Diana?" className="md:w-full border-none p-3 rounded-lg mx-6 md:text-[1.1vw]" />
                    <div className="md:w-[10vw] "><Button color={'[#6F4DF6]'} title={'Post'} color1={'[#fff]'} size={'[1vw]'} /></div>
                </div>
                <div>
                    <ul>
                        {post_2.map((post, i) => (
                            <li key={i} className="p-4 mt-[1rem] bg-[#fff] shadow-xl rounded-xl select-none">
                                <Link to='Into'>
                                    <div className="flex justify-between items-center ">
                                        <div className="flex items-center">
                                            <img src={post.img} className="rounded-full md:w-[3vw]  md:h-[2.8vw] object-contain" />
                                            <div className="ml-3">
                                                <p className="text-[1.3vw] font-[500]">{post.title}</p>
                                                <p className="md:text-[.7vw]">{post.title1}</p>
                                            </div>
                                        </div>
                                        <img src='./img/more.png' className="rounded-full md:w-[1.2vw]  md:h-[1vw] object-cover" />
                                    </div>
                                    <img src={post.img2} className="object-cover md:w-[100%] rounded-xl md:h-[35vw] mt-[1rem]" />
                                    <div className=" mt-2 flex justify-between items-center">
                                        <div className="flex ml-2">
                                            <img src='./img/chat.png' className="md:w-[1.5vw] cursor-pointer mr-2 md:h-[1.5vw] " />
                                            <img src={click1 ? './img/heart.png' : './img/heart (1).png'} onClick={() => dot()} className="md:w-[1.5vw] mr-2 md:h-[1.5vw] cursor-pointer " />
                                            <img src='./img/share.png' className="md:w-[1.5vw] mr-2 md:h-[1.5vw] cursor-pointer" />
                                        </div>
                                        <img src={click ? './img/bookmark.png' : './img/bookmark-white.png'} onClick={() => setClick(!click)} className="mr-2 md:w-[1.5vw] cursor-pointer md:h-[1.5vw] " />
                                    </div>
                                    <div className="mt-4 ml-1">
                                        <div className="flex ">
                                            <div className="border-x-3  border-y-3 rounded-full md:w-[2.7vw] md:h-[2.7vw] flex justify-center items-center ">
                                                <img src="./img/big_portfolio_item_5.png" className="md:w-[2.5vw] md:h-[2.5vw] rounded-full object-cover" />
                                            </div>
                                            <div className="border border-x-3 ml-[-1.5rem] border-[#fff] border-y-3 rounded-full md:w-[2.7vw] md:h-[2.7vw] flex justify-center items-center ">
                                                <img src="./img/big_portfolio_item_6.png" className="md:w-[2.5vw] md:h-[2.5vw] rounded-full object-cover" />
                                            </div>
                                            <div className="border-x-3 ml-[-1.5rem] border border-y-3 rounded-full md:w-[2.7vw] md:h-[2.7vw] flex justify-center items-center ">
                                                <img src="./img/big_portfolio_item_3.png" className="md:w-[2.5vw] md:h-[2.5vw] rounded-full object-cover" />
                                            </div>
                                            <div className="ml-[.5rem] md:text-[1.1vw] flex items-center">halady <span className="font-[500] text-[black] px-1">Orazow Wepa</span> we<span className="font-[500] text-[black] px-1">{count} başgalar</span></div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="md:text-[1.2vw]">
                                                {post.title2}
                                            </div>
                                            <div className="md:text-[1vw]">
                                                {post.title3}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Paper2;