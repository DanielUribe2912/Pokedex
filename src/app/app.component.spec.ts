import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetallePokemonComponent } from './componets/detalle-pokemon/detalle-pokemon.component';
import { FotoPokemonComponent } from './componets/foto-pokemon/foto-pokemon.component';
import { AppModule } from './app.module';




describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppModule],
      providers: [HomeComponent],
    }).compileComponents();
  })

})

it('se debe crear el componente', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
})


