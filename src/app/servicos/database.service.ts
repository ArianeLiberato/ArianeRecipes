import { Injectable } from '@angular/core';
import { Recipes } from '../model/recipes.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  readonly API = "http://localhost:3000/recipes/";

  constructor( private http: HttpClient ) { }

  getRecipe(){
    return this.http.get<Recipes[]>(this.API);
  }

  getOneRecipe(id: number){
    return this.http.get<Recipes>(this.API + id);
  }

  postRecipes(data: any){
    return this.http.post(this.API, JSON.stringify(data), this.HttpOptions).subscribe()
  }

  deleteRecipe(id: number){
    return this.http.delete(this.API + id).subscribe();
  }

  updateRecipe(rec: Recipes, id: any){
    return this.http.put(this.API + id, JSON.stringify(rec), this.HttpOptions).subscribe();
  }

}
