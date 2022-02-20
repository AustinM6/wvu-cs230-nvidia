import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-support-card',
    templateUrl: 'support.card.component.html',
    styleUrls: ['support.card.component.css']
})
export class SupportCardComponent{
    @Input() name: string;
    @Input() description: string;
    @Input() link: string;

    constructor(){
        this.name = "missing name";
        this.description = "Missing description";
        this.link = "missing link";
    }
}