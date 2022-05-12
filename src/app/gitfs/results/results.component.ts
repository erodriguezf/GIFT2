import { Component, OnInit } from '@angular/core';
import { GitfsService } from '../services/gitfs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  
  get resultados(){
    return this.gitf.resultados;
  }

  constructor(private gitf:GitfsService) { }

  ngOnInit(): void {
  }

}
