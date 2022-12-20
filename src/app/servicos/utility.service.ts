import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private load: LoadingController,
    private toast: ToastController
  ) { }


  async loading(message: string, duration: number){
    const load = this.load.create({
      mode: 'ios',
      message, 
      duration
    });

    (await load).present();

  }

  async toasting(message: string, position: "top" | "middle" | "bottom", duration: number, color: string){
    const toastei = this.toast.create({
      message,
      position,
      duration,
      color
    });

    (await toastei).present();
    
    setTimeout(this.refresh, 2000);
  }

    refresh(){
      location.reload();
     }

}
