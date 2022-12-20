import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  routeId = null;
  recipes: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataBase: DatabaseService,
    private router: Router,
    private utility: UtilityService

  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];
   
    if(this.routeId){
      this.dataBase.getOneRecipe(this.routeId).subscribe(results => {this.recipes = results});
    }
  }

  update(form: any){
    this.dataBase.updateRecipe(form.value, this.routeId);
    this.router.navigate(['']);
    this.utility.toasting("Receita atualizada com sucesso!", "middle", 2000, "medium");
  }

}
