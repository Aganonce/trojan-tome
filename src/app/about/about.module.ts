import { NgModule } from '@angular/core';

import { AboutComponent }   from './about.component';
import { routing } from './about.routes';

@NgModule({
  imports: [routing],
  declarations: [AboutComponent]
})
export class AboutModule {}