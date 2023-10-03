import { HomeComponent } from './../components/home/home.component';
import { WikiComponent } from './../components/wiki/wiki.component';
import { Route } from "@angular/router";

export const MAIN_ROUTE: Route[] = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'wiki', component: WikiComponent},
    {path: 'home', component: HomeComponent}
];