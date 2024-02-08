import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: 'company/requirement', component : RequirementEntryComponent}

    {
        path: 'company',
        loadChildren:() => 
import('./features/company/company.routes')
    },

];
