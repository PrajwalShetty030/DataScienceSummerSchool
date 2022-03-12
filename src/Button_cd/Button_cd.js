import Loader from '../Loader/Loader';
import './Button_cd.css'

const Button_cd = ({value,
    displayTrue,
    displayFalse,
     handleChange,
      isLoading}) => {

        if(isLoading){
            return(
                <div>
                    <button className = "login">
                            <Loader component = {"Login"} />
                    </button>
                </div>
            )
        }
        else{

            return(
                <div >
                    <button className= "login" onClick = {handleChange}>
                        {value? displayTrue: displayFalse}
                    </button>
        
                </div>
            )

        }

   
}

export default Button_cd;