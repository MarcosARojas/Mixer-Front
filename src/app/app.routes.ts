import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductsComponent },
    { path: 'informacion', component: InfoComponent },
    { path: 'usuario', component: UserComponent },
    { path: 'carrito', component: CartComponent },
    { path: '**', redirectTo: '/home' }
];
