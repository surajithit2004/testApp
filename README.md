# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

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

--------------

## How to build and run the project:
How to build and run the project:
Bootstrap and jQuery has to be added in the project.
In order to do that, please run in npm command prompt the following:
>> npm install bootstrap jquery
This should be run from the root folder of the project.

To run the project, please execute the following command:
>> npm start

## Correctness:
The application is production ready. 
Only thing which is missing is in Password validation, it should not contain first name or last name.
That is missing because, if the first name or last name are predicted and pre-populated, the it makes sense. But in this case customer can change anything, also customer may put the password first before even entering the first name or last name.

## Libraries and frameworks:
I have used Bootstrap to style this app and make it responsive. Also used the built-in Angular modules for Routing and validation. 


## Validation:
I have not used EmailValidator of Angular, instead I have used pattern to force my custom validation, as it gives lots of flexibility and power, also email validator only validates till '@' and some string, it does not enforce to put the . and domain suffixes.

Also, for Passsword validation, lower and uppercase characters should be there along with a number.

## Running:
To run the application, please browse to 
http://localhost:4200/register


