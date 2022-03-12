import { useParams } from "react-router";
import "./CourseDetails.css";
import Loader from "../Loader/Loader";
import Buttons from '../Button/Button';

const CourseDetails = ({isUserLoggedIn, isLoading}) => {

   

    const {id,name} = useParams(); // React generates key value pair(id,name) as defined in "/products/:id/:name"

    if(isLoading){

        return <Loader component = {"courseDetails"} /> // goes to Loader.js and matches the component field in DIV CLASSNAME

    }


    if(isUserLoggedIn){

    return(
       
        <div className = "content"> 
            <div className = "image">
                <img src = "https://via.placeholder.com/520x460" alt = ""/>
            </div>

            <div className = "details">
                <h2>
                    {name} - {id}
                </h2>
            </div>
            
            <div>            
                <p>
                Federer has played in an era
                 where he dominated men's tennis together 
                 with Rafael Nadal and Novak Djokovic, who have been collectively referred to as the Big Three 
                 and are considered by some to be 
                 the three greatest tennis players of all time.
                 A Wimbledon junior champion in 1998, Federer won his first Grand Slam singles title at Wimbledon in 2003 at age 21. 
                 In 2004, he won three of the 
                 four major singles titles and the ATP Finals,[d] a feat he repeated in 2006 and 2007. From 2005 to 2010, 
                 Federer made 18 out of 19 major singles finals. During this span, he won five consecutive titles at both Wimbledon and the US Open. 
                 He completed the career Grand Slam 
                 at the 2009 French Open after three previous runners-up 
                 to Nadal, his main rival until 2010. At age 27, he surpassed Pete Sampras's then-record of 14 Grand Slam men's singles titles at Wimbledon in 2009.
                </p>
            </div>
        
        </div>
    )
}

else{

    return(
        
    <div className = "content" style={{textAlign:"center"}}>
        Please Login to see the Course Details
        {/* <Buttons className="register" value = "Register" >  </Buttons> */}
    </div>

    )

}


}


export default CourseDetails;