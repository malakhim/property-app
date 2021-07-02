import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTenantComponent } from './components/add-tenant/add-tenant.component';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showAddTenant(): void {
    const dialogRef = this.dialog.open(AddTenantComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.warn(`Dialog result: ${result}`);
    });
  }

}
