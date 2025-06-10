import { Routes } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { LinkedSignalsComponent } from './components/linked-signals/linked-signals.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

export const routes:Routes = [
    {
        path: 'signals',
        component: SignalsComponent,
        children: [
            {
                path: 'lsignals',
                component: LinkedSignalsComponent
            }
        ]
    },
    {
        path: 'tdf',
        component: TemplateDrivenFormComponent
    },
    {
        path: 'rf',
        component: ReactiveFormsComponent
    }
];