import React from "react";
import { useState } from 'react';

const statInfo = [
    {
        title: '127',
        imageUrl: process.env.PUBLIC_URL + "https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif",
        subtitle: "Students enrolled"
    },

    {
        title: '12',
        imageUrl: process.env.PUBLIC_URL + "https://media.giphy.com/media/9tA6H1madRvUc/giphy.gif",
        subtitle: "Nationalities"
    },

    {
        title: '20+',
        imageUrl: process.env.PUBLIC_URL + "https://media.giphy.com/media/l0HlwKpPGceLgQC9W/giphy.gif",
        subtitle: "Instructors"
    },

    {
        title: '6',
        imageUrl: process.env.PUBLIC_URL + "https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif", 
        subtitle: "Courses offered"
    },

    {
        title: "Location",
        imageUrl: process.env.PUBLIC_URL + "/hack_location.jpeg",  
        subtitle: "SRH Heidelberg Campus"
    },

    {
        title: "Team size",
        imageUrl: process.env.PUBLIC_URL + "/hack_team2.jpg",  
        subtitle: "Max 3 per team"
    },

    {
        title: "Rewards",
        imageUrl: process.env.PUBLIC_URL + "/hack_certi.jpeg",  
        subtitle: "Certificate & Cash prizes"
    },

    {
        title: "Fees",
        imageUrl: process.env.PUBLIC_URL + "/hackEuro.jpeg",  
        subtitle: "100% sponsored"
    },


]

export default statInfo;