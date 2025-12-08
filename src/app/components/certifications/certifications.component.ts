import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
})
export class CertificationsComponent implements OnInit {
  public rowData = [
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  public colDefs = [
      { field: "make" , headerName: 'Make'},
      { field: "model", headerName: 'model' },
      { field: "price", headerName: 'price' },
      { field: "electric", headerName: 'electric' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
