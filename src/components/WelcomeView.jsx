import './welcomeView.css';

const WelcomeView = ({ nextScreen}) => {
    return (
        <div>
            <h1>Welcome to Doggy Daycare</h1>

            <button onClick={ nextScreen}> Go to register</button>
        </div>
    ) 
}

export default WelcomeView;