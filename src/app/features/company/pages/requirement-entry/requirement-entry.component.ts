import { CommonModule } from '@angular/common';
import { RequirementService } from '../../services/requirement.service';
import { Requirement } from './../../models/requirement';
import { Component, inject } from '@angular/core';
import { JuristicIDFormatPipe } from "../../../../shared/pipes/juristic-id-format.pipe";

@Component({
    selector: 'app-requirement-entry',
    standalone: true,
    templateUrl: './requirement-entry.component.html',
    styleUrl: './requirement-entry.component.css',
    imports: [CommonModule, JuristicIDFormatPipe]
})
export default class RequirementEntryComponent {
  reqService = inject(RequirementService);

  
  // * master data
reqs:Requirement[]=[];

  // * filter data
  filtered = this.reqs;

constructor(){
  this.reqService.list().subscribe((data) => {
    this.reqs = data;
    this.filtered = this.reqs;
  });

}
onSubmit(){
  this.reqService.list().subscribe((data) => {
    alert(JSON.stringify(this.reqs))
  });
}

}
