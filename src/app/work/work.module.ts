import { NgModule } from '@angular/core';

import { WorkComponent }   from './work.component';
import { routing } from './work.routes';

@NgModule({
  imports: [routing],
  declarations: [WorkComponent]
})
export class WorkModule {}