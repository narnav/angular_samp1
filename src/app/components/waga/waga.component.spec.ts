import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagaComponent } from './waga.component';

describe('WagaComponent', () => {
  let component: WagaComponent;
  let fixture: ComponentFixture<WagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
