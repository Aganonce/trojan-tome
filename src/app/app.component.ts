import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';

import { RoutesService } from './shared/services/routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [RoutesService]
})
export class AppComponent {
  menuVisible: Boolean = false;
  menuTransition: String = 'menu-box swing-out-top-bck';
  testClasses: String = 'material-icon hamburger';
  active: Observable<{}>;

  constructor() { }

  menuClick() {
    if (this.menuVisible) {
      this.active = this.asyncDeactivate().share();
      this.menuVisible = false;
    } else {
      this.active = this.syncActivate().share();
      this.menuTransition = 'menu-box swing-in-top-fwd';
      this.menuVisible = true;
      
    }
  }

  asyncDeactivate() {
    this.menuTransition = 'menu-box swing-out-top-bck';
    return Observable.of({
      visible: false
    });
  }

  syncActivate() {
    return Observable.of({
      visible: true
    });
  }

}
