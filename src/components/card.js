import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="items">
                <div className="left-items">
                    <img src={props.img} alt="not existed" />
                </div>
                <div className="right-items">
                    <div className="heading-top">
                        <h5>{props.name}</h5>
                    </div>
                    <div className="content-down">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
            <div className="lower-width"></div>
        </>
    )
}

export default Card;
