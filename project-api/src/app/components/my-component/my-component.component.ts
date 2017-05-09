import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../../services/my-service.service';
import { MyClass } from '../../classes/my-class';

@Component({
  selector: 'app-my-component',
  template: `
  <h1>Type: {{mode}}</h1>
  <h3>My Data:</h3>
  <ul>
    <li *ngFor="let myc of mydata">{{myc.name}}</li>
  </ul>
  <br/>
  <br/>
  <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
  `,
  providers: [ MyServiceService ],
  styles: []
})
export class MyComponentComponent implements OnInit {
  mode = 'Observable';
  mydata: MyClass[];
  errorMessage: string;

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    this.getMyClass();
  }

  getMyClass(){
    this.myService.getClass()
      .subscribe(
        response => this.mydata = response,
        error => this.errorMessage = <any>error
      );
  }

}
