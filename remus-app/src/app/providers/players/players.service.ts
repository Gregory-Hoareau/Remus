import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Player } from 'src/app/models/player.models';
import { text } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playersList: Player[]
  isHost: boolean;

  constructor(private alertCtrl: AlertController) {
    this.playersList = []
  }


  kickAlert(player: Player) {
    this.alertCtrl.create({
      header: 'Voulez vraiment renvoyé ce joueur ?',
      message: 'Vous êtes sur le point de renvoyé "' + player.name + '". Êtes vous sûre de votre décission',
      inputs: [
        {
          type:'text',
          name:'reason',
          value:'Le Mj fait ce qu\'il veut et vous l\'avez énervée'
        }
      ],
      buttons: [{
        text: 'Renvoyer',
        handler: data => {
          player.conn.send({kick: data.reason});
          const id = this.playersList.indexOf(player);
          console.log(id)
          this.playersList.splice(id, 1);
          console.log(this.playersList);
        }
      }, {
        text: 'Annuler'
      }]
    }).then(alert => alert.present());
    
  }

  

}