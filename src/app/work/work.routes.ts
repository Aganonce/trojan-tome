import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work.component';

const routes: Routes = [
  { path: '', component: WorkComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);