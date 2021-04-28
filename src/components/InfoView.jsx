const InfoView = ({dataLoaded, getDogData, selectedDog}) => {

    console.log({selectedDog});  


    return (
        <div>

            
          
                

          
              
                  
                  
                  
            <h3 >{selectedDog.name}</h3>

                  
              
                  
            
              

        </div>
        
      )
    

}



/*
const InfoView = ({dataLoaded, getDogData}) => {


    return (
        <div>

            

            {dataLoaded && getDogData ? (
          
            getDogData.map((data, key) => {

            
                return (
                    <div>
                    
                    <img src = {(data.present) ? (data.img) : (null) } />
                    <h3 >{data.name}</h3>

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


    ) 
}*/

/*
{selectedDog.present ? (<h3 >{selectedDog.name}</h3>) : null}

                  {selectedDog.present ? (<h3 >{selectedDog.sex}</h3>) : null}
<img src = {(selectedDog.present) ? (selectedDog.img) : (null) } />
*/

export default InfoView;