import React from "react";
import "./Whiskey.css"

export const Whiskey = ({ whiskey }) => (
    <section className="whiskey">
        <h3 className="whiskey__name">IF YOU LIKE: {whiskey.title}</h3>
        {console.log("whiskey", whiskey)}
        <img className="whiskey__image" src={whiskey.list_img_url} />
        {
                    whiskey.comparables.map(comparable => {
                    return (
                    <>
                        <h3 className="whiskey__name">YOU MIGHT ALSO LIKE: {comparable.title}</h3>
                        <img className="whiskey__image" src={comparable.list_img_url} />
                    </>
                    )
                    })
                }
    </section>
)