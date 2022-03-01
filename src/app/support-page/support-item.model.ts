export class SupportItemModel{
    name: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    link: string;

    constructor(name: string, description1: string, description2: string, description3: string, description4: string, description5: string, link: string){
        this.name = name;
        this.description1 = description1;
        this.description2 = description2;
        this.description3 = description3;
        this.description4 = description4;
        this.description5 = description5;
        this.link = link;
    }
}