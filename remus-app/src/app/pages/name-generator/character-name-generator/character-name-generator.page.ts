import { Component, OnInit } from '@angular/core';
import { NameGeneratorService } from 'src/app/providers/name-generator/name-generator.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-character-name-generator',
  templateUrl: './character-name-generator.page.html',
  styleUrls: ['./character-name-generator.page.scss'],
})
export class CharacterNameGeneratorPage implements OnInit {

  data = 'elf';
  generatedNames = [];
  all_data = [{
    name: 'Elfe',
    value: 'elf'
  }, {
    name: 'Humain',
    value: 'human'
  }, {
    name: 'Nain',
    value: 'dwarf'
  }, {
    name: '"Asiatique"',
    value: 'asian'
  }]

  constructor(private nameGenerator: NameGeneratorService,
              private modalController: ModalController) {}

  ngOnInit() {
  }

  print(data) {
    console.log(data);
  }

  generate() {
    this.nameGenerator.setData(this.data);
    this.generatedNames = this.nameGenerator.generate(10, 4, 9);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
