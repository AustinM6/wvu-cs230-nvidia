import { Component } from "@angular/core";
import { SupportItemModel } from "./support-item.model";
import { support_list } from "./support_list";

@Component({
    selector: 'fm-support',
    templateUrl: 'support-layout.component.html',
    styleUrls: ['support-layout.component.css']
})
export class SupportLayoutComponent{
    supports: SupportItemModel[] =[];

    constructor(){
        for (var support of support_list) {
            console.log(support);
            this.supports.push(support);
        }
    }
}