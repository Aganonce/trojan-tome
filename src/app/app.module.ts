import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DisqusModule } from './disqus';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DisqusModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
