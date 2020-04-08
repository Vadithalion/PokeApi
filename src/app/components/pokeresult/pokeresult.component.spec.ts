import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeresultComponent } from './pokeresult.component';

describe('PokeresultComponent', () => {
  let component: PokeresultComponent;
  let fixture: ComponentFixture<PokeresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
