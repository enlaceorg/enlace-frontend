import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemApagarComponent } from './postagem-apagar.component';

describe('PostagemApagarComponent', () => {
  let component: PostagemApagarComponent;
  let fixture: ComponentFixture<PostagemApagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemApagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
