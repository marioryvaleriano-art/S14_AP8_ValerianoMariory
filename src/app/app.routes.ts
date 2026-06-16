import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];