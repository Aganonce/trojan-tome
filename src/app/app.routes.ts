import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ArchiveComponent } from './archive/archive.component';

// Route Configuration
export const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'home' 
  },
  {
    path: 'archive',
    component: ArchiveComponent
  },
  {
    path: 'work',
    loadChildren: './work/work.module#WorkModule'
  },
  {
    path: 'home',
    component: BlogComponent
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'hello-world',
    loadChildren: './blogposts/2017-08-11/blogpost/blogpost.module#BlogpostModule'
  },
  {
    path: 'info-topology',
    loadChildren: './blogposts/2017-08-12/blogpost/blogpost.module#BlogpostModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);