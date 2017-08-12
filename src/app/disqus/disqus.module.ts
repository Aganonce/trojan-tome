import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { DisqusComponent } from './disqus.component';

/** Initialize Disqus with shortname */
export const SHORTNAME = new InjectionToken<string>('shortname');

@NgModule({
    declarations: [DisqusComponent],
    exports: [DisqusComponent]
})
export class DisqusModule { }

