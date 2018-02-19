import { Component, OnInit } from '@angular/core';
import { TemperaturaService } from '../servicio/temperatura.service';
import { forEach } from '@angular/router/src/utils/collection';
import { initServicesIfNeeded } from '@angular/core/src/view/services';
import { Observable } from 'rxjs/Observable';
import { IfObservable } from 'rxjs/observable/IfObservable';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable"
import { City } from '../modelo/city';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'tw-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
  
})
export class TemperaturaComponent implements OnInit {

  selectedcity: City;
  subscription: Subscription;

  temperature =[];
  historico =[];
  cities = [
    {id:0,nombre:"Santiago", codigo:"CL",description: []},
    {id:1,nombre:"Buenos Aires", codigo:"AR",description: []},
    {id:2,nombre:"Lima", codigo:"PE",description: []},
    {id:3,nombre:"Sao Paulo", codigo:"BR",description: []}
  ];
  id:any;


  
  constructor(public temperaturaService: TemperaturaService) { }

  ngOnInit() {

    this.getTemperaturas();
    this.temperature = this.historico;
    localStorage.setItem('todo',JSON.stringify( this.historico));

    let timer = TimerObservable.create(500,180000);

    this.subscription = timer.subscribe(() => {
      this.temperature = this.getTemperaturas();
      localStorage.setItem('todo',JSON.stringify( this.historico));
    });

    
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }



  OnSelect(city: City) {
    this.selectedcity = city;
  }


  getTemperaturas():any{
    var aux = [];
    for (let i = 0; i < this.cities.length; i++) {
      this.temperaturaService.getTemperatura(this.cities[i].nombre,this.cities[i].codigo).subscribe(
        result =>{
          this.historico.push(result);
          
          aux.push(result);
          var id = result.name;
          localStorage[id] =JSON.stringify(result);        
        
        },error =>{ console.log(<any>error);}
      )
    }
    return aux;
  }
}
