import React from "react"
const Card = ({photo}) => {
    const imgUrl = "/Image/member/"+photo;
    return (
        <div className="card">
            <img className="card_item"src={imgUrl}/>
        </div>
    )
};

export default Card;
