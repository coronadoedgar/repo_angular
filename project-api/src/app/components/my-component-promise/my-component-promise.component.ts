import { Component, OnInit } from '@angular/core';

import { MyServicePromiseService } from '../../services/my-service-promise.service';
import { MyClass } from '../../classes/my-class';

@Component({
  selector: 'app-my-component-promise',
  template: `
  <h1>Type: {{mode}}</h1>
  <h3>My Data:</h3>
  <ul>
    <li *ngFor="let myc of mydatapromise">{{myc.name}}</li>
  </ul>
  <br/>
  <br/>
  <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
  `,
  providers: [ MyServicePromiseService ],
  styles: []
})
export class MyComponentPromiseComponent implements OnInit {
  mode = 'Promise';
  mydatapromise: MyClass[];
  errorMessage: string;

  constructor(private myServicePromise: MyServicePromiseService) {}

  ngOnInit() {
    this.getMyClass();
  }

  getMyClass(){
    this.myServicePromise.getClass()
      //.then(mycl => console.log(this))
      .then(
        response => this.mydatapromise = response,
        error => this.errorMessage = <any>error
      );
  }

}
