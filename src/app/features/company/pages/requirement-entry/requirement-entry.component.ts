import { Component } from '@angular/core';

@Component({
  selector: 'app-requirement-entry',
  standalone: true,
  imports: [],
  templateUrl: './requirement-entry.component.html',
  styleUrl: './requirement-entry.component.css'
})
export default class RequirementEntryComponent {
  
reqs = [
  { id:1, nameThai: 'สวัสดี', nameEng: 'seewadee', juristicID: '1234567890123'},
  { id:2, nameThai: 'สวัสดี', nameEng: 'seewadee', juristicID: '1234567890123'}
]
}
