import { useHistory } from "react-router-dom";
import './registerView.css';


const RegisterView = ({dataLoaded, getDogData, setSelectedDog}) => {

  const history = useHistory();
  
  function handleClick() {

    history.push("/info");
  }
 

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

            <button onClick={ handleClick }> Go to info</button>

            {dataLoaded && getDogData ? (
          
            getDogData.map((data, key) => {

            
                return (
                    <div onClick={() => {selectDog(data)}, handleClick} key={key}>
                    
                    <img className= "dogIamge" src = {(data.present) ? (data.img) : (data.img) } onClick={() => {selectDog(data)} } />
                    
                    

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
  
);

}

export default RegisterView;