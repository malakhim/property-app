import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.scss']
})
export class AddTenantComponent implements OnInit {

  addTenantForm = this.fb.group({
    startDate: [''],
    endDate: [''],
    amount: [''],
    periodicity: ['']
  });

  periodicityTypes = [
    {
      id: 1,
      name: "Weekly"
    },
    {
      id: 2,
      name: "Fortnightly"
    },
    {
      id: 3,
      name: "Monthly"
    }
  ];

  startDate = new FormControl('');
  endDate = new FormControl('');
  amount = new FormControl('');

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.addTenantForm.value);
  }

}
