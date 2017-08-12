import { NgModule } from '@angular/core';

import { DisqusModule } from 'ngx-disqus';

import { BlogpostComponent }   from './blogpost.component';
import { routing } from './blogpost.routes';

@NgModule({
  imports: [routing, DisqusModule.forRoot('trojan-tome')],
  declarations: [BlogpostComponent]
})
export class BlogpostModule {}