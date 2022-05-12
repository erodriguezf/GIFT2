
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Searchmodule,Datum} from '../Interfaces/gits.interface';


@Injectable({
  providedIn: 'root'
})
export class GitfsService {
  private _historial: string[]=[];
  private Api:string="tIwemihnLkYkybAuCZhp11n1WRUxaFuK";
  private Url!:string;
  public resultados:Datum[]=[];
  private serviciourl:string="https://api.giphy.com/v1/gifs";

  constructor(private http:HttpClient) { 
    if(localStorage.getItem('value :')){
      this._historial=JSON.parse(localStorage.getItem('value :')!);
    }

    if(localStorage.getItem('resultados')){
      this.resultados=JSON.parse(localStorage.getItem('resultados')!);
    }
  }


  public get_historial(){
    return [...this._historial]
  }
  
  public async buscar_Gitfs(value:string){
    value = value.trim().toLowerCase();
    if(!this._historial.includes(value)){
      //si no está en la lista se incluye
      this._historial.unshift(value);
      this._historial=this._historial.splice(0,10);
      localStorage.setItem('value :',JSON.stringify(this._historial));
      //deja 10 elementos en el array
    }
    const params = new HttpParams()
    .set('api_key',this.Api)
    .set('limit','10')
    .set('q',value);

    console.log(params.toString());
    console.log(`${this.serviciourl}/search`,{params});
    this.Url=`https://api.giphy.com/v1/gifs/search?api_key=tIwemihnLkYkybAuCZhp11n1WRUxaFuK&q=${value}&limit=10`;
    this.http.get<Searchmodule>(this.Url).subscribe((data)=>{
      console.log(data.data);
      this.resultados=data.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    })

  }
}
