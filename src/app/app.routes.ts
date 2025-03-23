import { Routes } from '@angular/router';
import { ListaReproduccionComponent } from './components/lista-component/lista-reproduccion.component';
import { AddListaReproduccionComponent } from './components/add-lista-component/add-lista-reproduccion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'lists', component: ListaReproduccionComponent },
  { path: 'add', component: AddListaReproduccionComponent },
];
