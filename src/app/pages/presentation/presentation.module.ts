import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { PresentationComponent } from './presentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PresentationComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule
  ]
})
export class PresentationModule { }
