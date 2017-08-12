import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DisqusModule } from 'ngx-disqus';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DisqusModule.forRoot('trojan-tome'),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
