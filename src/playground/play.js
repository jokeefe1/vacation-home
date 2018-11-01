
import fetch from 'node-fetch'

let getData = () => {
    // const API_KEY = 'AIzaSyAMuEYHsKrf7SpOOzGmFRkHWe_ZBbqTp14'
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.2814021,-81.6634887&radius=3000&type=restaurant&key=AIzaSyAMuEYHsKrf7SpOOzGmFRkHWe_ZBbqTp14'
    fetch(url)
        .then( resp => resp.json())
        .then( data => {
           
            let restaurants = data.results
            console.log(restaurants)
            
            const array = [
                { name: 'zen asian grill', placeId: 'ChIJH3QZyX563YgRz5rwIfZokvI' },
                { name: "Pa'l Campo Chicken", placeId: 'ChIJNQXYiH9w3YgRAERGkyokrpc' },
                { name: 'Mannino’s Pizza', placeId: 'ChIJDSjN7Y5w3YgRquYCQVd4PaY' },
                { name: 'San Jose’s Original Mexican', placeId: 'ChIJPTCygNOI54gRscXr6-k2V3w' },
                { name: 'The Proper Pie Company', placeId: 'ChIJNUVHYI5w3YgRUB2XohCuqbE' },
                { name: 'Ovation Bistro & Bar', placeId: 'ChIJV_WcBY9w3YgRZ7Ti3RfTSps' },
                { name: 'Bahama Breeze', placeId: 'ChIJDZjiks-G3YgRtwzWoLyQMts' },
                { name: 'Rainforest Cafe', placeId: 'ChIJva4JdYl_3YgRONSoO7NXO_0' }
            ]

            
        })
        .catch( err => console.error('Did not fetch data. ', err.message))
}

getData()



// var request = require("request");

// var options = {
//     method: 'GET',
//     url: 'https://maps.googleapis.com/maps/api/geocode/json',
//     qs: {
//         address: '102 Birchwood Dr, Davenport, FL 33897, USA',
//         key: 'AIzaSyAMuEYHsKrf7SpOOzGmFRkHWe_ZBbqTp14' // Need to get API Key From Google
//     },
// };

// request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//     console.log(body);
// });