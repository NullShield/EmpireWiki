import { MainComponent } from './components/main/main.component';
import { Route } from "@angular/router";

export const APP_ROUTE: Route[] = [
    {
        path: '', component: MainComponent, 
        loadChildren: () => import('./components/components.route').then(m => m.MAIN_ROUTE)
    }
];
