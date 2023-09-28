import { WebsiteComponent } from './components/website/website.component';
import { Route } from "@angular/router";

export const APP_ROUTE: Route[] = [
    {
        path: '', component: WebsiteComponent, 
        loadChildren: () => import('./components/components.route').then(m => m.WEBSITE_ROUTE)
    }
];
