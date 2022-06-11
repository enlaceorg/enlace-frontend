import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaEditarComponent } from './tema-editar.component';

describe('TemaEditarComponent', () => {
  let component: TemaEditarComponent;
  let fixture: ComponentFixture<TemaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
