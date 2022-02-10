import React from 'react'

const CardItem = ({ data }) => {
    const cardImg = "/Image/member/" + data.m_photo;
    console.log(data)
    return (
        <div className='member_item'>
            <div className='member_img'>
                <img className="img_wrap" src={cardImg}></img>
            </div>
            <div className='member_data'>
                <ul>
                    <li>
                        <h2>{data.m_name}&nbsp;{data.m_position} </h2>
                    </li>
                    <li>
                        {data.m_group}
                    </li>
                    <li>
                       
                    </li>

                    <li>
                        {data.m_division}
                    </li>
                    <li>
                        {data.m_univ}
                    </li>
                    <li>
                        {data.m_partdivision}
                    </li>

                    <li>
                        {data.m_finalmajor}
                    </li>
                </ul>

            </div>
        </div>
    )
}


export default CardItem