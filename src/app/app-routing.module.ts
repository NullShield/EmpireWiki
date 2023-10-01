import { MainComponent } from './core/main/main.component';
import { Route } from "@angular/router";

export const APP_ROUTE: Route[] = [
    {
        path: '', component: MainComponent, 
        loadChildren: () => import('./core/components.route').then(m => m.MAIN_ROUTE)
    }
];
