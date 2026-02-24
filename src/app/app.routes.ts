import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Detalis } from './detalis/detalis';

export const routes: Routes = [
    {path: '', component: Home},
    {path:'about',component: About},
    {path: 'detalis/:id',component:Detalis}
];
