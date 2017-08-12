import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RoutesService } from '../../../shared/services/routes.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent {
  title: String = '';
  date: String = '';
  identifier: String = '';

  constructor(private _router: Router, private routeService: RoutesService) {
    let thisurl = this._router.url;
    this.identifier = thisurl + '/';
    [this.title, this.date] = this.routeService.selectPath(thisurl);
  }
}
