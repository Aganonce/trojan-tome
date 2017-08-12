import { Component } from '@angular/core';

import { RoutesService } from '../shared/services/routes.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  routedata: any;

  constructor(private routeService: RoutesService) {
    this.routedata = routeService.getRoutes();
  }

}
