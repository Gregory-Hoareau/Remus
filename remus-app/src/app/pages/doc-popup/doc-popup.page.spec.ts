import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import {DocPopupPage} from './doc-popup.page';
import { ReactiveFormsModule } from '@angular/forms';
import {File} from '@ionic-native/file/ngx';

describe('DocPopupPage', () => {
  let component: DocPopupPage;
  let fixture: ComponentFixture<DocPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocPopupPage ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
      ],
      providers: [
        NavParams,
        File
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DocPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
