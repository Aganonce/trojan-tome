import { NgModule } from '@angular/core';

import { DisqusModule } from '../../../disqus';

import { BlogpostComponent }   from './blogpost.component';
import { routing } from './blogpost.routes';

@NgModule({
  imports: [routing, DisqusModule],
  declarations: [BlogpostComponent]
})
export class BlogpostModule {}