import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GitfsService } from '../services/gitfs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private gitfs:GitfsService) { }

  ngOnInit(): void {
  }

   @ViewChild('txttext') txtbuscar!:ElementRef<HTMLInputElement>;
   //busca referencias de tipo hml
   //<> indica que tipo de elemento es
   //  @ViewChild('txttext'), () va el nombre de variable de referencia
  public buscar(){
    const value= this.txtbuscar.nativeElement.value;

    if(value.trim().length == 0){
         return;
         //trim() para remover espacios en blanco
    }

    console.log(value);
    this.gitfs.buscar_Gitfs(value);
    this.txtbuscar.nativeElement.value= ' ';
  }

}
