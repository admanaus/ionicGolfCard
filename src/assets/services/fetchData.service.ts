import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@ Injectable()

export class DataService {

  constructor(private _http: Http){

  }

  getNearbyCoursesService(lat, long) { // lat and long are pulled from user's current geolocation
    let url: string = "http://golf-courses-api.herokuapp.com/courses/";
    let body: object = {
      "latitude": lat,
      "longitude": long,
      "radius": 50 // in kilometers
    };

    return this._http.post(url, body)

  }

  getWeatherService(zipcode){
    console.log(zipcode);
    let url: string = "http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +"&units=imperial&appid=cc8ef8e5c209d938ab3801daa42b5e31";
    console.log(url);
    return this._http.get(url);
  }

}
