import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaApagarComponent } from './tema-apagar.component';

describe('TemaApagarComponent', () => {
  let component: TemaApagarComponent;
  let fixture: ComponentFixture<TemaApagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaApagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
