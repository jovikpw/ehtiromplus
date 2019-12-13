import React from 'react'

export default function Banner({ children, title, sahifa, subtitle, h6, products }) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <h4>{sahifa}</h4>
            <h4>{products}</h4>
            <div></div>
            <p>{subtitle}</p>
            <h4>{h6}</h4>
            {children}
        </div>
    )
}
