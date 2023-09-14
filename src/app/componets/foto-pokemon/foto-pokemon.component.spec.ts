import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPokemonComponent } from './foto-pokemon.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

describe('FotoPokemonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FotoPokemonComponent],
      providers: [HomeComponent],
    }).compileComponents();
  })
})

it('se debe crear el componente', () => {
  const fixture = TestBed.createComponent(FotoPokemonComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();

})