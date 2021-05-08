import React from 'react'
import {useState, useEffect} from "react"

function About(props) {
    //create state to hold about data
    const [about, setAbout] = useState(null);

    //create function to make api call
    const getAboutData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "about")
        //turn response into javascrip object
        const data = await response.json()
        //set the about state to the data
        setAbout(data);
    }
    //use useEffect to make initial call for data so it only happens once on load
    useEffect(() => getAboutData(), [])

    //define a function that will return the JSX needed once we have the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )

    //if data has arrived return result of loaded
    return about ? loaded() : <h1>Loading...</h1>

  }
  
  export default About;