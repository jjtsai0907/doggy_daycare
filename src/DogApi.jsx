

const DogApi = async (apiUrl, setLoaded, setGetDogData) => {
  
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    let unparsedDogData = JSON.stringify(data);
    console.log("getting data 2 ");
    
    setGetDogData(JSON.parse(unparsedDogData));
    console.log({setGetDogData});
    setLoaded();
    
  }
  
  export default DogApi;