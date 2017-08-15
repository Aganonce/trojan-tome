import { Component } from '@angular/core';

import { RoutesService } from '../shared/services/routes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  routedata: any;

  constructor(private routeService: RoutesService) {
    this.routedata = routeService.getRoutes();
  }

}
