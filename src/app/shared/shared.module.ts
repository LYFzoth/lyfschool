import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { FieldsetModule } from 'primeng/fieldset';
const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule,
    ToastModule,
    RouterModule,
    CardModule,
    TimelineModule,
    FieldsetModule
];

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules]
})
export class SharedModule {}
