import { Routes } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { LinkedSignalsComponent } from './components/linked-signals/linked-signals.component';

export const routes:Routes = [
    {
        path: 'signals',
        component: SignalsComponent,
        children: [
            {
                path: 'linked-signals',
                component: LinkedSignalsComponent
            }
        ]
    }
];