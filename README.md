# CartApp

Simple e-commerce platform in Angular 5 which includes list of products and a cart.

Page divides into two sections - cart and products. If there is no products added to cart, cart section is hidden.

This shop consist of 8 products mocked in a json file. Each product have picture and name. Above the list of products is placed the sorting list (by price and by name). Products rearrange, depending on chosen sorting option.

Clicking “Add to cart” makes the cart roll out with the list of added products. Each product in the cart can be removed and its quantity can be changed by adding or reducing items. The amount of all added products is displayed in the cart. The products stay there after refreshing the page.

Services: 
- Product Data Service: Request mocked API for all products.
- Shopping Cart Service: Subscribe the Cart Observables for added and removed items using RxJS.
- Storage Service: LocalStorage used in the Shopping Cart.

Technologies used: `Angular 5, @angular/router, @angular/material, @angular/forms, @angular/http, Typescript, Rxjs, ZoneJs, Webpack, Sass, Bootstrap.` 

You can visualized the app [here](https://manueldelpozo.github.io/cart-app/dist/)

or 

Install locally

Run `yarn`

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
