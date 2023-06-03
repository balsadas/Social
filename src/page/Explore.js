import React from "react";

const post_1 = [
    { img: './img/big_portfolio_item_1.png' },
    { img: './img/big_portfolio_item_2.png' },
    { img: './img/big_portfolio_item_3.png' },
    { img: './img/big_portfolio_item_4.png' },
    { img: './img/big_portfolio_item_4.png' },
    { img: './img/big_portfolio_item_5.png' },
    { img: './img/big_portfolio_item_6.png' },
    { img: './img/big_portfolio_item_1.png' },
    { img: './img/big_portfolio_item_2.png' },
    { img: './img/big_portfolio_item_3.png' },
    { img: './img/big_portfolio_item_4.png' },
    { img: './img/big_portfolio_item_5.png' },
    { img: './img/big_portfolio_item_6.png' },
    { img: './img/big_portfolio_item_1.png' },
    { img: './img/big_portfolio_item_2.png' },
    { img: './img/big_portfolio_item_3.png' },
    { img: './img/big_portfolio_item_3.png' },
    { img: './img/big_portfolio_item_4.png' }
]

function Explore() {
    return (
        <div className="w-full ml-5 mt-[2rem] pr-6">
            <ul className="grid grid-cols-4 ">
            <img src='./img/big_portfolio_item_4.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_1.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_2.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_3.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_4.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_5.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_6.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_3.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_5.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_6.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_1.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>
            <img src='./img/big_portfolio_item_2.png ' className="p-1 md:h-[15vw] w-full object-cover rounded-xl"/>    
            </ul>
        </div>
    )
}

export default Explore;