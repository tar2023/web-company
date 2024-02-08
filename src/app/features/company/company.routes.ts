import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: 'company/requirement', component : RequirementEntryComponent}

    {
        path: 'requirements',
        loadComponent:() => 
import('./pages/requirement-entry/requirement-entry.component')
    },
    {
        path: 'form',
        loadComponent:() => 
import('./pages/requirement-form/requirement-form.component')
    }
];
export default routes;
