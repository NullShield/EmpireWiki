import { Planet } from "../dto/responses/planets";

export class PlanetsResponse {
    count: string;
    next: string;
    previous: string;
    result: Planet[]

    constructor(){
        this.count = "0";
        this.next = "0";
        this.previous = "0";
        this.result = [new Planet()];
    }
}