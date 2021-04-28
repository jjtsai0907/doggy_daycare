const RegisterView = ({dataLoaded, getDogData, nextScreen, setSelectedDog}) => {

    function selectDog(data) {
        
        console.log("selceted dog:");
        console.log(data);
        setSelectedDog(data);
        console.log("2: ");
        
    }
    console.log({getDogData});
    console.log({dataLoaded});  


    return (
        <div>

            <button onClick={ nextScreen }> Go to info</button>

            {dataLoaded && getDogData ? (
          
            getDogData.map((data, key) => {

            
                return (
                    <div onClick={() => {selectDog(data)}, nextScreen} key={key}>
                    
                    <img src = {(data.present) ? (data.img) : (data.img) } onClick={() => {selectDog(data)} } />
                    
                    

                    {data.present ? (<h3 >{data.name}</h3>) : ("not present!")}

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