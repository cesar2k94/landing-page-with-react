import React from 'react';

const Card = ({image1}) => {
    return (
            <div className="card">
                <img className="card-img-top" src={image1} alt="Card image cap " />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer text-center">
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>       
    );
}

export default Card;