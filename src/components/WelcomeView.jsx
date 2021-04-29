import { useHistory } from "react-router-dom";
import './welcomeView.css';




const WelcomeView = () => {


    const history = useHistory();
  
    function handleClick() {

      history.push("/register");
    }
 





    return (
        <div>
            <h1>Welcome to Doggy Daycare</h1>

            <button onClick={handleClick}> Go to register</button>
        </div>
    ) 
}

export default WelcomeView;