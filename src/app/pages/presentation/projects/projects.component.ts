import { Component, Input } from '@angular/core';
import { Project } from '../projects.dto';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() project !: Project;
}
