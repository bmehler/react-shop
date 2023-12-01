import React from 'react';


const InfoAlert = () => {

    return (
        <div className="alert alert-secondary mb-5" role="alert">
            <p className="fw-bold mb-1">Dies ist ein Demo Online Shop entwickelt mit React (JSX) und Vanilla JS.</p>
            <p className="fw-bold mb-1">Es werden <span className="fw-bold text-decoration-underline">keine Daten gespeichert</span> und eine <span className="fw-bold text-decoration-underline">Bestellung ist nicht möglich</span>!</p>
            <p className="fw-bold mb-1"><span className="fw-bold text-decoration-underline">No data were saved</span> and <span className="fw-bold text-decoration-underline">an order is not possible!</span>!</p>
        </div>
    )
}

export default InfoAlert