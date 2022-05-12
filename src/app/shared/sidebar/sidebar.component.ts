import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Searchmodule,Datum} from 'src/app/gitfs/Interfaces/gits.interface';
import { GitfsService } from 'src/app/gitfs/services/gitfs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
//get -> se usa para obtener informacion
  get historial(){
    return this.gif.get_historial();
  }
  constructor(private gif:GitfsService,private http:HttpClient) {
  
   }

  ngOnInit(): void {
  }

  public buscar(termino:string){
    this.gif.buscar_Gitfs(termino);
  }

 

}
