import React from "react"
const TestCard = ({photo}) => {
    const imgUrl = "/Image/gallery/"+photo;
    return (
        <div>
            <img className="card_media"src={imgUrl}/>
        </div>
    )
};

export default TestCard;
