import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomusermeService {

  urlEndPoint: string = 'https://randomuser.me/api/';

  constructor(private httpClient: HttpClient) { }

  getListadoPersonasRandom(nro_personas:number=50): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}?results=${nro_personas}`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }
  

}
