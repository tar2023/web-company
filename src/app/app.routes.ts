import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: 'company/requirement', component : RequirementEntryComponent}

    {
        path: 'company/requirement',
        loadComponent:() => 
import('./features/company/pages/requirement-entry/requirement-entry.component')
    }
];
