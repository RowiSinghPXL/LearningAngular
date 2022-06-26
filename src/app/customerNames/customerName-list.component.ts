import { Component } from "@angular/core";

@Component({
    selector: 'pm-customerNames',
    templateUrl: './customerName-list.component.html'
})

export class CustomerNameComponent{
    names: string[] = ['Rowi', 'Jasmine', 'Alexandra']
}