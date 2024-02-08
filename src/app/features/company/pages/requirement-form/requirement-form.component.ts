import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
  FormGroup,
} from '@angular/forms';
import { RequirementService } from '../../services/requirement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requirement-form',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './requirement-form.component.html',
  styleUrl: './requirement-form.component.css',
})
export default class RequirementFormComponent {
  // formBuilder
  fb = inject(NonNullableFormBuilder);

  nameThai = this.fb.control<string>('')

  nameEng = this.fb.control<string>('')

  juristicID= this.fb.control<string>('')


  fg = this.fb.group({
    nameThai : this.nameThai,
    nameEng : this.nameEng,
    juristicID : this.juristicID
  })


  constructor() {}


  // requirementService
  reqService = inject(RequirementService);

  onSubmit(): void {
  this.reqService
  .add(this.fg.getRawValue())
  .subscribe(v => console.log);
  }

  
}
