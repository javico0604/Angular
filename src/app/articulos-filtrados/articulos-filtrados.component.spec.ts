import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosFiltradosComponent } from './articulos-filtrados.component';

describe('ArticulosFiltradosComponent', () => {
  let component: ArticulosFiltradosComponent;
  let fixture: ComponentFixture<ArticulosFiltradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosFiltradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosFiltradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
