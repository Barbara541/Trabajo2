import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  recipes:any = null;


  constructor( private activatedRoute: ActivatedRoute) {  
      this.getDetalle();
    }

  ngOnInit() {
    console.log(this.recipes)
    
  
  }

  getDetalle(): void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.recipes = JSON.parse(params['recipes']);
    });
  }

}
