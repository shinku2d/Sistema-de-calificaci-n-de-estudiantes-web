import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  lista: { "nombre": string; "curso": string; "año": number; "nota": string; }[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.lista = this.dataService.getStudentList();
  }

}
