import React from "react"
const Card = ({photo,onClick}) => {
    const imgUrl = "/Image/member/"+photo;
    return (
        <div onClick={onClick}className="card">
            <img className="card_item"src={imgUrl} name={photo}/>
        </div>
    )
    }
export default Card;
