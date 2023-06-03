import React from "react";

const post_2 = [
    {
        title: 'Orazow Wepa', img: './img/Orazow Wepa Ilmyradowiç.jpg', img2: './img/big_portfolio_item_4.png', title1: '15 minut öň ',
        title2: 'Yzarlap başlady', title3: '11s'
    },
    {
        title: 'Mätiýew Didar', img: './img/Mätiýew Didar Serdarowiç.jpg', img2: './img/big_portfolio_item_6.png', title1: '15 minut öň',
        title2: 'suraty halady', title3: '8s'
    },
    {
        title: 'Garlyýew Ylýas', img2: './img/big_portfolio_item_6.png', img: './img/Garlyýew Ylýas Şatlykowiç.jpg', title1: '15 minut öň',
        title2: 'yzarlap başlady ', title3: '1gün'
    },
    {
        title: 'Daňatarowa Aýnur', img2: './img/big_portfolio_item_1.png', img: './img/Daňatarowa Aýnur.jpg', title1: '15 minut öň',
        title2: 'surat halady', title3: '2gün'
    },
    {
        title: 'Gapurow Merdan', img2: './img/big_portfolio_item_1.png', img: './img/Gapurow Merdan Gapurowiç.jpg', title1: '15 minut öň',
        title2: 'surat halady', title3: '3gün'
    },
    {
        title: 'Süleýmangulyýew Aşyrmuhammet', img: './img/Süleýmangulyýew Aşyrmuhammet Amangulyýewiç.jpg', img2: './img/big_portfolio_item_4.png', title1: '15 minut öň',
        title2: 'surat halady', title3: '4gün'
    },
    {
        title: 'Yslamowa Şahnoza', img: './img/Yslamowa Şahnoza Kamiljan gyzy.jpg', img2: './img/big_portfolio_item_6.png', title1: '15 minut öň',
        title2: 'surat halady', title3: '5gün'
    },
]

function Notifications() {
    return (
        <div className=" flex justify-center mx-8 mt-[1rem]">
            <ul className="w-[80vw]">
                {post_2.map((post, i) => (
                    <li key={i}  className="shadow-lg rounded-xl p-2 bg-[#ffffff84] mt-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center ml-3">
                                <img src={post.img} className="rounded-full md:w-[3vw] md:h-[3vw] object-contain " />
                                <div  className="ml-4">
                                    <p className="md:text-[1.2vw] font-[500]">{post.title}</p>
                                    <p className="md:text-[1vw] font-[500] text-gray-400">{post.title2}</p>
                                    <p className="md:text-[.8vw] font-[500] text-gray-500">{post.title3}</p>
                                </div>
                            </div>
                            <img src={post.img2} className="md:w-[4vw] md:h-[4vw] object-cover mr-4" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Notifications;