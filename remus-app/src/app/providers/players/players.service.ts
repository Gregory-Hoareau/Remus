import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Player } from 'src/app/models/player.models';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Conversation } from 'src/app/models/conversation.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  // tslint:disable-next-line:ban-types
  myName: String;
  playersList: Player[];
  conversations: Map<Player, Conversation>;

  isHost: boolean;

  constructor(private alertCtrl: AlertController) {
    this.playersList = [];
    this.conversations = new Map<Player, Conversation>();
  }

  resetPlayer(){
    this.playersList.forEach(() => {
      this.playersList.pop();
    });
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
          player.conn.close()
          const id = this.playersList.indexOf(player);
          console.log(id)
          this.playersList.splice(id, 1);
          this.playersList.forEach(p => {
            p.conn.send({removed: player.name});
          });
          console.log(this.playersList);
        }
      }, {
        text: 'Annuler'
      }]
    }).then(alert => alert.present());
    
  }

  getPlayerByName(name: string): Player {
    let player: Player;
    this.playersList.forEach(p => {
      if(p.name === name)
        player=p;
    });
    return player;
  }

  getPlayerById(id: string): Player {
    let player: Player;
    this.playersList.forEach(p => {
      console.log(p.conn.peer)
      if(p.conn.peer == id){
        player=p;
      }
    });
    return player;
  }

  getConns() {
    var conns: any[] = [];
    this.playersList.forEach(player => {
      conns.push(player.conn);
    });
    return conns;
  }
  
  me() {
    return {name: this.myName, conn: undefined} as Player;
  }

  getConv(player:Player) {
    return this.conversations.get(player)
  }
}
