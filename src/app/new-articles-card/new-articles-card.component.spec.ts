import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArticlesCardComponent } from './new-articles-card.component';

describe('NewArticlesCardComponent', () => {
  let component: NewArticlesCardComponent;
  let fixture: ComponentFixture<NewArticlesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArticlesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArticlesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
