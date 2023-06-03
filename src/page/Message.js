import React from "react";

const post_2 = [
    {
        title: 'Orazow Wepa', img: './img/Orazow Wepa Ilmyradowiç.jpg', img2: './img/camera.png', title1: '15 sagat öň',
        title2: 'gowmy', title3: '11s'
    },
    {
        title: 'Mätiýew Didar', img: './img/Mätiýew Didar Serdarowiç.jpg', img2: './img/camera.png', title1: '16 sagat öň',
        title2: 'bla flkllk ', title3: '8s'
    },
    {
        title: 'Garlyýew Ylýas', img: './img/Garlyýew Ylýas Şatlykowiç.jpg', img2: './img/camera.png', title1: '17 sagat öň',
        title2: 'lr;feroifk ', title3: '1gün'
    },
    {
        title: 'Daňatarowa Aýnur', img: './img/Daňatarowa Aýnur.jpg', img2: './img/camera.png', title1: '18 sagat öň',
        title2: 'd;cl;pow ', title3: '2gün'
    },
    {
        title: 'Gapurow Merdan', img: './img/Gapurow Merdan Gapurowiç.jpg', img2: './img/camera.png', title1: '18 sagat öň',
        title2: ';we;ld', title3: '3gün'
    },
    {
        title: 'Süleýmangulyýew Aşyrmuhammet', img: './img/Süleýmangulyýew Aşyrmuhammet Amangulyýewiç.jpg', img2: './img/camera.png', title1: '19 sagat öň',
        title2: 'freiuh', title3: '4gün'
    },
    {
        title: 'Yslamowa Şahnoza', img: './img/Yslamowa Şahnoza Kamiljan gyzy.jpg', img2: './img/camera.png', title1: '20 sagat öň',
        title2: 'wewfkj', title3: '5gün'
    },
]

function Message() {
    return (
        <div className=" flex justify-center mx-8 mt-[1rem]">
            <ul className="w-[80vw]">
                {post_2.map((post, i) => (
                    <li key={i} className="shadow-lg rounded-xl p-2 bg-[#ffffff84] mt-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center ml-3">
                                <img src={post.img} className="rounded-full md:w-[3vw] md:h-[3vw] object-contain " />
                                <div className="ml-4">
                                    <p className="md:text-[1.2vw] font-[500]">{post.title}</p>
                                    <p className="md:text-[1vw] font-[500] text-gray-400">{post.title2}</p>
                                </div>
                            </div>
                            <img src={post.img2} className="md:w-[2.5vw] md:h-[2.5vw] object-cover mr-4" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Message;