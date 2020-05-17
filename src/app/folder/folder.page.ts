import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  data: any;

  constructor(private activatedRoute: ActivatedRoute) { 
    
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 39, 80, 61, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
              borderColor: '#4bc0c0',
              
              background: "transparent"
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 46, 27, 90,55, 59, 30, 81, 66, 55, 70,65, 49, 80, 81, 56, 55, 40,65, 54, 80, 81, 56, 55, 40],
              borderColor: '#014042',
              
              background: "transparent"
          }
      ]
  }
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
