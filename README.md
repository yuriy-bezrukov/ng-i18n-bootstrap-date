# NgBootstrapDatapicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

TASK



Реализовать одностраничное приложение резервирования билетов в кинотеатр. Время начала сеансов 10.00, время последнего сеанса 20.00. Шаг каждые - 2 часа. Таким образом в течение дня может быть 6 сеансов.
Интерфейс должен отображать доступные даты для бронирования, сеансы для выбранной даты, свободные и забронированные места. При выборе даты и сеанса меньше текущего времени и даты, должны отображаться архивные данные без возможности их изменения.
Для хранения дат использовать LocalStorage, и при перезагрузке страницы считывать данные из LocalStorage.
Реализовать на Angular 8/HTML5/Bootstrap 4/SCSS. Для работы с датами приветствуется использование Moment.js.
 

Требования:
 

Использовать принцип умных и глупых компонентов при построении архитектуры
В вёрстке использовать Bootstrap 4 и SCSS
Форматирование дат в UI - 2 Апреля, 2019
