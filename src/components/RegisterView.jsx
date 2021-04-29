import { useHistory } from "react-router-dom";
import './registerView.css';


const RegisterView = ({ dataLoaded, getDogData, setSelectedDog }) => {

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

  console.log({ getDogData });
  console.log({ dataLoaded });
  //className="registerV three-columns"



  return (
    <div >

      
      <div >
        {dataLoaded && getDogData ? (

          getDogData.map((data, key) => {


            let dogImageClass = "registerV dogIamge";
            if (!data.present) {
              dogImageClass += " notPresent";
            }

            let dogSex = "";
            if (data.sex === "female") {
              dogSex = "her";
            } else {
              dogSex = "him";
            }

            
            return (

              <div className="registerV card-container" onClick={() => { selectDog(data)}, handleClick} key={key}>

                <img className={dogImageClass} src={(data.img)} onClick={() => { selectDog(data) }} />


                <div>

                  {data.present ? (<h1 onClick={() => { selectDog(data) }}>Woof-woof! {data.name} is right here :D</h1>) :  (<h1 onClick={() => { selectDog(data) }} className="notHome h1"> Our {data.name} is currently not at home!</h1>)}
                  

                  <h2 onClick={() => { selectDog(data) }} className="registerV h2"> One click away to know more about {dogSex}...</h2>

                </div>



              </div>

            )
            
          })

        ) : (
          <div>
            <p>Loading our guests, please wait... :)</p>
          </div>


        )}


      </div>
    </div>

  );

}

export default RegisterView;