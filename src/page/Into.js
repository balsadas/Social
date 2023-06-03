import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Paper3 from "../components/Paper3";

const post_2 = [
    {
        title: 'Lane Rose', img: './img/big_portfolio_item_3.png', img2: './img/big_portfolio_item_4.png', title1: 'Dubai, 15 MINUTES AGO',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'View all 277 comments'
    },
    {
        title: 'Benjamin Dwayen', img: './img/big_portfolio_item_5.png', img2: './img/big_portfolio_item_6.png', title1: 'Miami, 2 HOURS AGO',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'View all 277 comments'
    },
    {
        title: 'Erik Daniel', img: './img/big_portfolio_item_6.png', img2: './img/big_portfolio_item_7.png', title1: 'Miami, 2 HOURS AGO',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'View all 277 comments'
    },
    {
        title: 'Lana Rose', img: './img/big_portfolio_item_1.png', img2: './img/big_portfolio_item_2.png', title1: 'Miami, 2 HOURS AGO',
        title2: 'Lana Rose Lorem ipsum dolor sit quisquam eius. #liststyle', title3: 'View all 277 comments'
    },
]


function Into() {
    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)
    const [count, setCount] = useState(56)

    const dot = () => {
        setClick1(!click1)
        setCount(count + 1)
    }
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-[80%] p-8 bg-[#fff] m-4 rounded-xl">
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center">
                            <img src='./img/big_portfolio_item_5.png' className="rounded-full md:w-[3vw]  md:h-[2.8vw] object-cover" />
                            <div className="ml-3">
                                <p className="text-[1.3vw] font-[500]">Lana Rose</p>
                                <p className="md:text-[.7vw]">Dubai, 15 MINUTES AGO</p>
                            </div>
                        </div>
                        <img src='./img/more.png' className="rounded-full md:w-[1.2vw]  md:h-[1vw] object-cover" />
                    </div>

                    <img className="md:w-full md:h-[35vw] rounded-lg object-cover mt-4" src="./img/big_portfolio_item_3.png" />
                    <div className=" mt-2 flex justify-between items-center">
                        <div className="flex ml-2">
                            <img src='./img/chat.png' className="md:w-[1.5vw] cursor-pointer mr-2 md:h-[1.5vw] " />
                            <img src={click1 ? './img/heart.png' : './img/heart (1).png'} onClick={() => dot()} className="md:w-[1.5vw] mr-2 md:h-[1.5vw] cursor-pointer " />
                            <img src='./img/share.png' className="md:w-[1.5vw] mr-2 md:h-[1.5vw] cursor-pointer" />
                        </div>
                        <img src={click ? './img/bookmark.png' : './img/bookmark-white.png'} onClick={() => setClick(!click)} className="mr-2 md:w-[1.5vw] cursor-pointer md:h-[1.5vw] " />
                    </div>
                    <p className="md:text-[1.3vw] mt-4  font-bold mx-2">Post</p>
                    <p className="p-2 text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                        has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley
                        of
                        type
                        and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but
                        also
                        the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                        the
                        1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions
                        of
                        Lorem
                        Ipsum
                    </p>
                    <div>
                        <div className="font-bold md:text-[1.4vw] p-3">
                            Comment
                        </div>
                        <ul>
                            {post_2.map((com, i) => (
                                <li key={i} className='m-4'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center' >
                                            <img src={com.img} className='md:w-[2.5vw] md:h-[2.5vw] object-cover rounded-full' />
                                            <div className='md:ml-2 font-bold md:text-[1.4vw]'>{com.title}</div>
                                        </div>
                                        <div className='md:text-[.8vw]'>{com.title1}</div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='w-[91%] py-4 md:text-[1vw]'>
                                            <p>{com.title2}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end '>
                                        <img src='./img/reply.png' className='md:w-[1.2vw] w-[4vw] md:h-[1.2vw] h-[4vw]' />
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </div>
                    <div>
                    <ul className="flex">
                    {post_2.map((cat,i)=>(
                        <li key={i} className="bg-[#ffffffac] group hover:bg-[#6F4DF6] cursor-pointer select-none mx-3 my-2 shadow-lg duration-300 ease-in-out  rounded-lg p-2 md:hover:scale-110">
                        <img src={cat.img} className="lg:w-[20vw]   h-[60vw] w-full md:h-[15vw] object-cover rounded-lg" />
                        <p className=" p-2 md:text-[1.5vw] font-[500] group-hover:text-[#fff] text-[5vw]">{cat.title}</p>
                        <div className=" flex items-center py-3 px-1">
                        <img src="./img/ham.png" className="md:w-[1.5vw] md:h-[1.5vw] group-hover:hidden  w-[5vw] h-[5vw] object-cover" />
                        <img src="./img/hamburger.png" className="md:w-[1.5vw] md:h-[1.5vw] group-hover:block hidden  w-[5vw] h-[5vw] object-cover" />
                            <p className="md:text-[1.3vw] text-[4vw] group-hover:text-[#fff] ml-2 text-gray-500">see more</p>
                        </div>
                    </li>
                    ))}
                    </ul>
                    </div>
                </div>
                <div className="w-[20%] mr-[6rem]">
                    <Paper3 />
                </div>
            </div>
        </div>
    )
}

export default Into;