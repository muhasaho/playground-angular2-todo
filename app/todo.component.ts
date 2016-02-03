/**
 * Created by theadore on 2/2/16.
 */
import {Component} from "angular2/core";
import {NgFor} from 'angular2/common';

@Component({
    selector: "todo",
    template: `
    <input #newTextBox /><button (click)="onAdd(newTextBox)">add</button>
        <ul *ngFor="#item of items">
            <li>{{item}}<span class="remove" (click)="onRemove(item)"> x</span></li>
        </ul>
    `,
    styles: [`
    .remove{
        cursor: pointer;
    }
    `]
})
export class TodoComponent {
    public items = ['meh', 'yolo'];
    public newItem ="";

    onAdd(newTextBox){
        this.items.push(newTextBox.value);
        newTextBox.value = "";
    };

    onRemove(item){
        this.items.splice(this.items.indexOf(item), 1);
        console.log(item);
    };
}

