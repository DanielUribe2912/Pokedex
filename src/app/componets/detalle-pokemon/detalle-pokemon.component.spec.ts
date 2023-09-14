import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePokemonComponent } from './detalle-pokemon.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { Component } from '@angular/core';

describe('DetallePokemonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallePokemonComponent],
      providers: [HomeComponent],
    }).compileComponents();
  })
})

it('se debe crear el componente', () => {
  const fixture = TestBed.createComponent(DetallePokemonComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();

})