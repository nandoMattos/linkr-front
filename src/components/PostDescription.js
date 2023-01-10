import { useState } from "react"
import { Link } from "react-router-dom"

export function PostDescription({currentDescription}) {


    return(
        <p>
          {currentDescription && currentDescription.split(" ").map((e) => 
            !e.includes("#") ?
            e + " " : 
            <Link to={`/hashtags/${e.replace("#","")}`}>
              {e + " "}
            </Link>
          )}
        </p>
    )
}