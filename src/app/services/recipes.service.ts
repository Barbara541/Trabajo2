import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
     
 urlEndPoint: string = 'https://api.sampleapis.com/recipes/recipes';
 EndPoint: string = 'https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&APPID=8193a03092edda0547c77edb5a23d42f';
  constructor(private httpClient: HttpClient) { }

  getListadoRecipes(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }
  getclima(): Promise<any> 
  {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.EndPoint}`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }
  getmoneda(country1: string)
  {
      let urlmoneda = 'https://api.exchangerate.host/latest?base=' + country1;
      return this.httpClient.get(urlmoneda);
  }
}
