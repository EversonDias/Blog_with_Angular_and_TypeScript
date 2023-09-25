import { Component } from '@angular/core';
import {data} from '../../../data/db_exemple';
import { article } from '../../../types/Articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  listArticles:article[] = data;
  
  constructor() {
    console.log(this.listArticles);

  }
  
}
