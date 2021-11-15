import { Routes } from '@angular/router';
import { ListaComponent } from './componets/lista/lista.component';

export const rotas : Routes = [

    // OUTROS
    { path: 'app-lista',component:ListaComponent},
    { path: '', redirectTo : 'app-lista', pathMatch: 'full',  },
];