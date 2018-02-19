import { Component, OnInit, Input } from '@angular/core';
import { City } from '../modelo/city';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  id: string;
  micity = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    var todo = JSON.parse(localStorage.getItem('todo'));
    if (todo != null) {
      for (var i = 0; i < todo.length; i++) {
        if (this.id == todo[i].name) {
          this.micity.push(todo[i]);
        }
      }
    }
  }
}
