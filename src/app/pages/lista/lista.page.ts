import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  listadoRecipes: any = [];

  constructor(private recipesService:RecipesService,
    private navController: NavController
    ) {
      this.getListadoRecipes();
     }

  ngOnInit() {

   console.log(this.getListadoRecipes)
  }

  getListadoRecipes(): void {
    this.recipesService.getListadoRecipes()
      .then(data => {
      this.listadoRecipes = data;
      console.log(this.listadoRecipes);
  });

  }

  getDetalle(recipes:any): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        recipes : JSON.stringify(recipes)
      }      
    };
    this.navController.navigateForward(['detalle/'],navigationExtras);
  }

  
}
