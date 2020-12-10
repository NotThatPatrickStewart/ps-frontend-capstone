import React from "react";
import "./Whiskey.css"

export const Whiskey = ({ whiskey }) => (
    <section className="whiskey">
        <h3 className="whiskey__name">WHISKEY: {whiskey.comparables.title}</h3>
        {console.table(whiskey.comparables)}
        {/* <div className="whiskey__image">{whiskey.img_url}</div> */}
    </section>
)