import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {article} from '../../../types/Articles';
import { data } from '../../../data/db_exemple';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string | null = '0'
  article: article[] = data;

  constructor(private route:ActivatedRoute) {
    this.route.paramMap.subscribe(id => this.id =id.get("id"))
  }

  ngOnInit(): void {
    this.article = this.article.filter((article) => article.id === this.id);
  }

}
