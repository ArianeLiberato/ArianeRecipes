import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/servicos/database.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  idRoute = null;
  oneRecipe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataBase: DatabaseService
  ) { }

  ngOnInit() {
    this.idRoute = this.activatedRoute.snapshot.params['id'];

    if(this.idRoute){
      this.dataBase.getOneRecipe(this.idRoute).subscribe(results => this.oneRecipe = results);
    }
  }

}
