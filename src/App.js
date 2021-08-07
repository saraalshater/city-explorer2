import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import Weather from './components/Weather';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: ' ',
      lon: ' ',
      lat: ' ',
      showMap: false,
      errorMsg: '404 error',
      displayError: ' ',
      city: '',
      weatherStrings: [],
      weatherError: false,
      weatherText: "",
      weather: [],
      movies: [],
      showCard: true
    };
  }




  getTheCity = async (event) => {
    event.preventDefault();


    let cityName = event.target.city.value;


    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.a18c8cb52ca73ae8d6046e9f06b14aae&q=${cityName}&format=json`;

    let weatherURL = `http://localhost:3002/weather?lat=${this.state.lat}&lon=${this.state.lon}&cityname=${cityName}`

    let movieUrl = `http://localhost:3002/movies?cityname=${cityName}`;

    try {

      // sending request to the API, added await to prevent JS from skipping it
      let cityResult = await axios.get(url);

      // console.log(cityResult.data[0].display_name); 
      // ^ accessing the data that we need from the API, data[0] is the number of the index that we choosed from the array


      this.setState({
        displayName: cityResult.data[0].display_name,
        lon: cityResult.data[0].lon,
        lat: cityResult.data[0].lat,
        showMap: true


      });

      let weatherResult = await axios.get(weatherURL);

      this.setState({
        weather: weatherResult.data.data,
        showCard: true
      })

      let movieResult = await axios.get(movieUrl);
      this.setState({
        movies: movieResult.data,
        
      })

    }
    catch {

      this.setState({
        // showMap: false,
        displayError: true

      });

    }



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
        <h1>City Explorer</h1>
        <Form onSubmit={this.getTheCity}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Explore a City :)</Form.Label>
            <Form.Control type="text" placeholder="Enter a city name" name="city" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>





        {this.state.showMap &&
          < img src={`https://maps.locationiq.com/v3/staticmap?key=pk.a18c8cb52ca73ae8d6046e9f06b14aae&center=${this.state.lat},${this.state.lon}`} alt='map' />}


        <p>
          {this.state.displayName}
        </p>

        <p>
          {this.state.lat}
        </p>

        <p>
          {this.state.lon}
        </p>

        {/* <Weather showCard={this.state.showCard} weather={this.state.weather} ></Weather> */}


        {this.state.showCard &&
          this.state.weather.map(item => {
            return (
              `date :${item.date} and description: ${item.description}`
            )
          })}




        {this.state.showCard &&
          this.state.movies.map(item => {
            return (
              `title :${item.title},
     overview:${item.overview} ,
    average_votes:${item.average_votes},
    total_votes:${item.total_votes},
    image_url: ${item.image_url},
    popularity: ${item.popularity},
    released_on:${item.released_on}
    `
            )
          })}
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