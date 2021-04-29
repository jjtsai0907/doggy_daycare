import { useHistory } from "react-router-dom";


const InfoView = ({dataLoaded, getDogData, selectedDog}) => {

    console.log({selectedDog}); 


    return (
        <div>

            <img src={selectedDog.img} alt="dog image"/>   
                  
                  
            <h3 >{selectedDog.name}</h3>
            <h3 >{selectedDog.sex}</h3>
            <h3 >{selectedDog.breed}</h3>
            <h3 >{selectedDog.age}</h3>

        </div>
        
      )
    

}




export default InfoView;