const Loader = ({component })=>{
    return(
        <div className = {`loader ${component==="courseDetails" ?
         "loader_Products" : "loader_Login"}`}>

        </div>
    )
}

export default Loader;