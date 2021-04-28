const WelcomeView = ({ nextScreen}) => {
    return (
        <div>
            This is Welcome View!

            <button onClick={ nextScreen}> Go to register</button>
        </div>
    ) 
}

export default WelcomeView;