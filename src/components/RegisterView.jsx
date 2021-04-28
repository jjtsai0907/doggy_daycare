const RegisterView = ({dataLoaded, getDogData, nextScreen}) => {

    function selectedDog(data) {
        
        console.log("clicked");
    }
    console.log({getDogData});
    console.log({dataLoaded});  


    return (
        <div>
            {dataLoaded && getDogData ? (
          
            getDogData.map((data, key) => {

            
                return (
                    <div  onClick={() => { selectedDog(data) }} key={key}>
                    
                    <img src = {(data.present) ? (data.img) : (null) } />
                    

                    {data.present ? (<h3 >{data.name}</h3>) : null}

                    {data.present ? (<h3 >{data.sex}</h3>) : null}
                  
                  
                  
                

            </div>
          )
        })
      ) : (
        <div>
          <p>Loading our guests, please wait... :)</p>
        </div>
      )}
    </div>



        /*<div>
            This is Register View! {getDogData}
            <button onClick={ nextScreen }> Go to info</button>
            <p> {getDogData} </p>
        </div>*/
    ) 
}

export default RegisterView;