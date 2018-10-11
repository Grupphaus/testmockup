import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-examen-tabla',
  styleUrls: ['./examen-tabla.component.css'],
  template: `
  <table class="table">
    <caption>Inscriptos</caption>
    <thead>
      <tr>
        <th *ngFor="let col of columns">
          {{col}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users | async">
        <td class="text-muted" *ngFor="let col of columns">
          {{user[col]}}
        </td>
      </tr>
    </tbody>
  </table>`
})

export class ExamenTablaComponent implements OnInit {

  constructor(private atService: DataService) { }

  users: Observable<any[]>;
  columns: string[];

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.users = this.atService.getUsers();
  }

}
