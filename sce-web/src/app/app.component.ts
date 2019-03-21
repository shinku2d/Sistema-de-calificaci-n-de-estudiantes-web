import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sce-web';
  showedList: any[];
  lista: { "nombre": string; "profesor": string; "año": number; "Semestre": string; }[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.lista = this.dataService.getCoursesList();
  }
  

  searchCourses(term: string){
    if (!term) {
      this.showedList = [];
    } else { 
      term=term.toLowerCase();
      this.showedList = [];
      this.lista.forEach(  (item) => { 
        if (item.nombre.toLowerCase().includes(term)) {
          this.showedList.push(item);
        }
      });
    }
  }
}
