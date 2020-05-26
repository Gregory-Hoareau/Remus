import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, IonRouterOutlet } from '@ionic/angular';

import { SessionHomePage } from './sessionHome.page';
import { ActivatedRoute, Router, RouterModule, Params } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterSheetPageModule } from '../character-sheet/character-sheet.module';
import { routes } from 'src/app/app-routing.module';

describe('SessionHomePage', () => {
  let component: SessionHomePage;
  let fixture: ComponentFixture<SessionHomePage>;

  const fakeActivatedRoute = {
    queryParams: {
      subscribe: (fn: (value: Params) => void) => fn({
        extras: {
          state: {},
        }
      }),
    }
  } as ActivatedRoute;

  const fakeRoute = {
    getCurrentNavigation() {
      return {
        extras: {
          state: {},
        }
      }
    }
  } as Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionHomePage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, useValue: fakeRoute },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
