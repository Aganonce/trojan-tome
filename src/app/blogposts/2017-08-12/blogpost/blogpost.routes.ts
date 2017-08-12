import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogpostComponent } from './blogpost.component';

const routes: Routes = [
  { path: '', component: BlogpostComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);