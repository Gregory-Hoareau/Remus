import { Component, OnInit, Input } from '@angular/core';
import { DiceRoll } from 'src/app/models/dice-roll.model';
import { DiceHistoryService } from 'src/app/providers/diceHistory/dice-history.service';

@Component({
  selector: 'app-roll-history',
  templateUrl: './roll-history.component.html',
  styleUrls: ['./roll-history.component.scss'],
})
export class RollHistoryComponent implements OnInit {

  @Input()
  roll: DiceRoll;

  roll_name: string;

  constructor(public historyService:DiceHistoryService) {
    this.roll={result:0,modificator:0,dices:null}
  }

  ngOnInit() {
    this.roll_name = this.historyService.selectedDiceString(this.roll);
  }

}
