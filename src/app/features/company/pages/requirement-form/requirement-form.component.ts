import { CommonModule, JsonPipe, Location } from '@angular/common';
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

function isTHMobile(mobileNo: string): boolean {
  return /^(06|08|09)/.test(mobileNo);
}

const thMobile = (c: AbstractControl): ValidationErrors | null => {
  return isTHMobile(c.getRawValue()) ? null : { thMobile: true };
};

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
  constructor() {}
  // requirementService
  reqService = inject(RequirementService);
  onSubmit(): void {
  
  }
}
