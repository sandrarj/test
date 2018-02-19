import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TemperaturaService {
  
//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
  apiUrl = "http://api.openweathermap.org/data/2.5/weather?";
  //q=London,uk&appid=6006f0eb543c49af48d6eb956ea95b96"
   //"api.openweathermap.org/data/2.5/weather?q=London,UK"
  constructor(public http: HttpClient) { }

  getTemperatura(city,codigo): Observable<any> {
    var cityurl = this.apiUrl +"q=" +city + ","+codigo+"&appid=20481998f251b19136a9f3e7c3b4c277";
    console.log(cityurl);
   return this.http.get(cityurl);
 }

}
