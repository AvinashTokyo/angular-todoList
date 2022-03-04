//nodejs
//npm
//angular cli - npm install -g @angular/cli
//create app - ng new my-app
//cd my-app
//ng serve - to start
//ng serve --open -> to directly open to browser.

//install bootstrap in angular. using npm. ->
//package.json m bootstrap aa jayega.

//install jQuery -> npm install jQuery.

//-----
//in the package.json
// "bootstrap": "^5.1.3",
//     "jquery": "^3.6.0",

//------
//1. angular.json -> in build ->
//2. add bootstrap.min.css and
//3. add bootstrap.js.
//4. add jquery.

//"styles": [
//     "src/styles.css",
//     "./node_modules/bootstrap/dist/css/bootstrap.min.css"
//   ],
//   "scripts": [
//     "./node_modules/bootstrap/dist/js/bootstrap.js"
//   ]

//---------------
//start the ng serve -> again.

//-----
//for generating new componenet - 
// ng g c MyComponenet/todos or
// ng generate component MyComponent/todos3

//------------------
//------------------
//  *ngFor -> * is for structural directive.
//<ul *ngFor="let todo of todos">
/* <li>{{todo.sno}} - {{todo.title}} - {{todo.desc}}.</li> */
// </ul>

//The *ngFor directive is used to repeat a portion of HTML template once per each item from an iterable list (Collection). The ngFor is an Angular structural directive and is similar to ngRepeat in AngularJS. Some local variables like Index, First, Last, odd and even are exported by *ngFor directive.

//Event Emitter
//ngSubmit
//*ngFor
//ngIf
//ngModel
//Forms Module
//$event
//strike/nostrike ? todo.active
//ngClass
//angular pipes

//=============
// for angular project production.
//ng build --prod