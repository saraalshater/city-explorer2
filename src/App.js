import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map';
import Weather from './components/Weather';
import Movies from './components/Movies';

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      lon: '',
      lat: '',
      errorMsg: '',
      displayErr: false,
      showMap: false,
      showCard: false,
      weather: [],
      movies: [],
    }
  }





  getLocationData = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;


    const URL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${city}&format=json`;

    const urlServer = `http://localhost:3002/weather?lat=${this.state.lat}&lon=${this.state.lon}&city=${city}`

    const urlMovies = `http://localhost:3002/movies?city=${city}`;

    try {

      // sending request to the API, added await to prevent JS from skipping it
      let locationResult = await axios.get(URL);

      // console.log(cityResult.data[0].display_name); 
      // ^ accessing the data that we need from the API, data[0] is the number of the index that we choosed from the array


      this.setState({
        displayName: locationResult.data[0].display_name,
        lon: locationResult.data[0].lon,
        lat: locationResult.data[0].lat,
        showMap: true,
        displayErr: false,
      });



      let weatherResult = await axios.get(urlServer);

      this.setState({
        weather: weatherResult.data,
        showCard: true
      });

      let moviesResult = await axios.get(urlMovies)
      this.setState({
        movies: moviesResult.data.data
      });

    }
    catch (error) {
      this.setState({
        showMap: false,
        displayErr: true,
        showCard: false,
        errorMsg: 'ERROR',

      });

    }


    let weatherData = await axios.get(URL);
    this.setState({
      weatherInfoArr: weatherData.data
    });


  }

  // ------------------
  // handleWeather = async () =>{

  //   // http://localhost:3001/weather?lat= &lon= &searchQuery=amman
  //   let URL= `http://localhost:3001/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.cityName}`;

  //   let weatherData= await axios.get(URL);

  //   let arrayOfStrings = weatherData.data.map((element) => {
  //     return `The Date is : ${element.date} and the description is : ${element.description}`;
  //   });

  //   try{
  //     this.setState({
  //       weather: weatherData.data,
  //       weatherStrings: arrayOfStrings,
  //     });
  //   }

  //   catch (err) {
  //     console.log(err);
  //         this.setState({
  //           weatherError: true,
  //           weatherText: "There is an Error",
  //         });
  //   }

  //   };

  // ================






  render() {
    return (
      <>
      <section className="backgroundColor">
        {/* <Header/> */}

        <Form onSubmit={this.getLocationData} className="text-center formSet">
          <Form.Label className='seachLabel'><h4>Explore A city :)</h4></Form.Label>
          
          <input className="inputButton" type='text' placeholder='Enter City' name='city' />
          <button className=" text-white btn-lg buttonSearch" type='submit'>Explore!</button>
        </Form>

        <Map
          displayName={this.state.displayName}
          lon={this.state.lon}
          lat={this.state.lat}
          showMap={this.state.showMap}
          displayErr={this.state.displayErr}
          errorMsg={this.state.errorMsg}
          showCard={this.state.showCard}

        />
        <Weather showCard={this.state.showCard} weather={this.state.weather} ></Weather>
        {/* <Movies showCard={this.state.showCard} movies={this.state.movies} ></Movies> */}
        {/* <Footer/> */}
        </section>
      </>



    )
  }

}




export default App;


// =============================================================================================================
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       displayName: ' ',
//       lon: ' ',
//       lat: ' ',
//       showMap: false,
//       errorMsg: '404 error',
//       displayError: false,
//       showCard: false,
//       // city:'',
//       weather: [],
//       // weatherError: false,
//       // weatherText: "",

//     };
//   }




//   getTheCity = async (event) => {
//     event.preventDefault();
//     let cityName = event.target.city.value;
//     let url = `https://eu1.locationiq.com/v1/search.php?key=pk.a18c8cb52ca73ae8d6046e9f06b14aae&q=${cityName}&format=json`;

//     let urlWeather = `http://localhost:3000/weather?lat=${this.state.lat}&lon=${this.state.lon}&cityname=${cityName}`;

//     try {

//       let cityResult = await axios.get(url);


//       this.setState({
//         displayName: cityResult.data[0].display_name,
//         lon: cityResult.data[0].lon,
//         lat: cityResult.data[0].lat,
//         showMap: true,
//         showCard: true,
//       });



//       let weatherResult = await axios.get(urlWeather);

//       this.setState({
//         weather: weatherResult.data
//       });




//     }
//     catch {

//       this.setState({
//         showMap: false,
//         displayError: true,
//         showCard: true

//       });

//     }



//   }

//   // ------------------lab07=====================================
//   // handleWeather = async () => {

//     //   // http://localhost:3001/weather?lat= &lon= &searchQuery=amman
//     //   let URL= `http://localhost:3001/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.cityName}`;

//     //   let weatherData= await axios.get(URL);

//     // let arrayOfStrings = weatherData.data.map((element) => {
//     //   return `The Date is : ${element.date} and the description is : ${element.description}`;
//     // });

//     //   try{
//     //     this.setState({
//     //       weather: weatherData.data,
//     //       weatherStrings: arrayOfStrings,
//     //     });
//     //   }

//     //   catch (err) {
//     //     console.log(err);
//     //         this.setState({
//     //           weatherError: true,
//     //           weatherText: "error",
//     //         });
//     //   }

//   // };






//   // ================================================================
//   render() {
//     return (
//       <>
//         <h1>City Explorer</h1>
//         <Form onSubmit={this.getTheCity}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Explore a City :)</Form.Label>
//             <Form.Control type="text" placeholder="Enter a city name" name="city" />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Explore!
//           </Button>
//         </Form>


//         {this.state.displayName}


//         {this.state.showMap &&
//           < img src={`https://maps.locationiq.com/v3/staticmap?key=pk.a18c8cb52ca73ae8d6046e9f06b14aae&center=${this.state.lat},${this.state.lon}`} alt='map' />}


//         <p>
//           {this.state.displayName}
//         </p>

//         <p >
//           lat : {this.state.lat}
//         </p>

//         <p>
//           Lon : {this.state.lon}
//         </p>

//         {/* <Weather showCard={this.state.showCard} weather={this.state.weather} ></Weather> */}


//         {this.state.showCard &&
//         this.state.weather.map(item =>{
//           return (
//             `date :${item.date} and description: ${item.description}`
//           )
//         })}

//       </>



//     )
//   }

// }




// export default App;