import {Component} from 'angular2/core';
import {TodoComponent} from './todo.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Todo App</h1>
    <todo></todo>
    `,
    directives: [TodoComponent]
})
export class AppComponent { }
