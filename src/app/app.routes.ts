import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '\work',
    component: WorkComponent
  },
  {
    path: '',
    component: BlogComponent
  },
  {
    path: '\about',
    component: AboutComponent
  },
  {
    path: '\hello-world',
    loadChildren: './blogposts/2017-08-11/blogpost/blogpost.module#BlogpostModule'
  },
  {
    path: '\info-topology',
    loadChildren: './blogposts/2017-08-12/blogpost/blogpost.module#BlogpostModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);