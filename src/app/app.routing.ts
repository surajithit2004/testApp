import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'register' }
];

export const appRoutingModule = RouterModule.forRoot(routes);