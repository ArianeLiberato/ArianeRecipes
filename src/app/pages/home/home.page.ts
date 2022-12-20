import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Recipes } from 'src/app/model/recipes.model';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  RecipesList: Recipes[] = [];

  constructor(
    private dataBase: DatabaseService,
    private alertCtrl: AlertController,
    private utility: UtilityService
  ) {}

    ngOnInit() {
      this.utility.loading("Carregando...", 2000);
      this.dataBase.getRecipe().subscribe(results => this.RecipesList = results);
    }

    async alert(){
      const alert = this.alertCtrl.create({
        mode:'ios',
        header: 'Cadastro de Receita',
        inputs:[
          {
            name: 'foto',
            type: 'text',
            placeholder: 'Foto da receita'
          },
          {
            name: 'nome',
            type: 'text',
            placeholder: 'Nome da receita'
          },
          {
            name:'ingredientes',
            type: 'text',
            placeholder: 'Ingredientes'
          },
          {
            name:'mdp',
            type: 'text',
            placeholder: 'Modo de preparo'
          }
        ],

        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              this.utility.toasting('Cancelado', "middle", 2000 ,"secondary" );
            }
          },
          {
            text: 'Cadastrar',
            handler: (form) => {
              let rec = {
                foto: form.foto,
                nome: form.nome,
                ingredientes: form.ingredientes, 
                mdp: form.mdp
               
              }
              try{
                this.dataBase.postRecipes(rec);
              }catch(err){
                console.log(err)
              }finally{
                this.utility.toasting("Receita cadastrada!", "top", 2000, "success");    
              } 
            }
          }
        ]
      });

      (await alert).present();

    }

    delete(id: number){

      try{
        this.dataBase.deleteRecipe(id);  
      }catch(err){
        console.log(err);
      }finally{
        this.utility.toasting("Receita excluída!", "bottom", 2000, "danger"); 
      }  
    } 

}
