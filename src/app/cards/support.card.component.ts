import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-support-card',
    templateUrl: 'support.card.component.html',
    styleUrls: ['support.card.component.css']
})
export class SupportCardComponent{
    @Input() name: string;
    @Input() description1: string;
    @Input() description2: string;
    @Input() description3: string;
    @Input() description4: string;
    @Input() description5: string;
    @Input() link: string;

    constructor(){
        this.name = "missing name";
        this.description1 = "Missing description";
        this.description2 = "Missing description";
        this.description3 = "Missing description";
        this.description4 = "Missing description";
        this.description5 = "Missing description";
        this.link = "missing link";
    }
}