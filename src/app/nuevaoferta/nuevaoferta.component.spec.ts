import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaofertaComponent } from './nuevaoferta.component';

describe('NuevaofertaComponent', () => {
  let component: NuevaofertaComponent;
  let fixture: ComponentFixture<NuevaofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
