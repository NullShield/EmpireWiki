import { Route } from "@angular/router";
import { WikiComponent } from "./wiki/wiki.component";
import { HomeComponent } from "./home/home.component";

export const WEBSITE_ROUTE: Route[] = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'wiki', component: WikiComponent},
    {path: 'home', component: HomeComponent}
];