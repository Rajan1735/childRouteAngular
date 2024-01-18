import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
    {
        'path':'home', 'title':'Home', pathMatch: 'full', component:HomeComponent
    },
    {
        'path':'about', 'title':'About', component:AboutComponent
    },
    {
        'path':'about',children:[
            {
                'path':'company', 'title':'About | Company',component:CompanyComponent
            }
        ]
    },
    {
        'path':'contact', 'title':'Contact', component:ContactComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];
