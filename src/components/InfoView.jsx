import './infoView.css';


const InfoView = ({ dataLoaded, getDogData, selectedDog }) => {

    console.log({ selectedDog });
    let ifAtHome = "";
    if (selectedDog.present){
        ifAtHome = "at home"
    } else {
        ifAtHome = "not at home"
    }



    return (
        <div className="infoV">

            <img src={selectedDog.img} alt="dog image" />

            <div >
                <h1 className="infoV h1">
                    Hello! I'm {selectedDog.name} and {ifAtHome} right now!
                </h1>
            </div>

            <div  className="infoV grid">
                
                <h2 >Sex: {selectedDog.sex}</h2>
                <h2 >Breed: {selectedDog.breed}</h2>
                
                <h2 >Chip Number: {selectedDog.chipNumber}</h2>
                <h2 >My owner: {selectedDog.owner.name} {selectedDog.owner.lastName}</h2>
                
                <h2 >Phone Number: {selectedDog.owner.phoneNumber}</h2>
            </div>

            
                
            
        </div>

    )


}




export default InfoView;