# TrojanTome

## Adding blog posts

To add a post, go to the `blogposts` file and duplicate on of the timestamped files, updating the file name to match the date you wish to post. Make the changes necessary to the `blog.component.html` and `blog.component.css` files in the `blog` file within the new timestamped `blogposts` file. 
Then go to the `app.routes.ts` file and update the `routes` variable to include a new `path` (which can be anything you want, as long as it pertains to the subject of the new post) and the `loadChildren`, which must lead to the `blogpost.module#BlogpostModule` of the newly timestamped `blogposts` file. 
Once that is done, go to the `route.service.ts` file and update the `routedata`. The `path` must match the `path` given in the `app.route.ts` file. Then give the new addition a title, date, description, image (for the blog post listings on the home page), and any necessary tags.
After this is complete, TrojanTome will be able to successfully host the new blog post, lazy-loading it when it is selected.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
