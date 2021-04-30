import { useHistory } from "react-router-dom";
import './welcomeView.css';




const WelcomeView = () => {


    const history = useHistory();
  
    function handleClick() {

      history.push("/register");
    }
 





    return (
        <div>
            <h1 className="welcomeV h1" onClick={handleClick}>Click to check out our residents!</h1>
            
            
        </div>
    ) 
}

export default WelcomeView;