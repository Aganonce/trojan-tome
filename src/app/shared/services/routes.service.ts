import { Injectable } from '@angular/core';

import { routing } from '../../app.routes';

@Injectable()
export class RoutesService {
  routedata = [
    {
      path: 'hello-world',
      title: 'Hello World!',
      date: '11 Aug 2017',
      description: 'Welcome to the Trojan Tome blog. Insert a quarter and let\'s begin',
      color: '#' + Math.floor(Math.random()*16777215).toString(16),
      image: '../../assets/images/galaga.jpg',
      tags: []
    },
    {
      path: 'info-topology',
      title: 'Topological evolution in informatics',
      date: '12 Aug 2017',
      description: 'Here I discuss the evolution of the topology of information, and how it affects the models designed to fit news spread.',
      color: '#' + Math.floor(Math.random()*16777215).toString(16),
      image: '../../assets/images/infoTopologySnippet.png',
      tags: []
    }
  ];

  constructor() { }

  getRoutes() {
    return this.routedata;
  }

  selectPath(pathName) {
    let index = 0;
    for (let x = 0; x < this.routedata.length; x++) {
      if ('/' + this.routedata[x].path == pathName) {
        index = x;
        break;
      }
    }
    return [this.routedata[index].title, this.routedata[index].date];
  }

}
