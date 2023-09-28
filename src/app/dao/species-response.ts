import { Species } from "../dto/responses/species";

export class SpeciesRespose {
    count: string;
    next: string;
    previous: string;
    result: Species[]

    constructor(){
        this.count = "0";
        this.next = "0";
        this.previous = "0";
        this.result = [new Species()];
    }
}