import { DimReductionComponent } from './pages/dim-reduction/dim-reduction.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ImportDatasetComponent} from '@pages/import-dataset/import-dataset.component';
import { NettoyerDatasetComponent } from './pages/nettoyer-dataset/nettoyer-dataset.component';
import { SupprimerNullesComponent } from './pages/nettoyer-dataset/supprimer-nulles/supprimer-nulles.component';
import { SupprimerDoublesComponent } from './pages/nettoyer-dataset/supprimer-doubles/supprimer-doubles.component';
import { SupprimerInfiniesComponent } from './pages/nettoyer-dataset/supprimer-infinies/supprimer-infinies.component';
import {BalancingComponent} from "@pages/balancing/balancing.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'import-dataset',
                component: ImportDatasetComponent
            },
            {
                path: 'Supprimer-les-doubles',
                component: SupprimerDoublesComponent
            },
            {
                path: 'Supprimer-les-nulles',
                component: SupprimerNullesComponent
            },
            {
                path: 'Supprimer-les-infinies',
                component: SupprimerInfiniesComponent
            },
            {
              path: 'balancing',
              component: BalancingComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'Reduce-dimension',
                component: DimReductionComponent
            },
            {path: '**', redirectTo: 'import-dataset'}
        ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
