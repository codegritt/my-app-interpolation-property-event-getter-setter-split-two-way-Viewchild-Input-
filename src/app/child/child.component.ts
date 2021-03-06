import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  private _loggedIn!: boolean;
  message!: string;

  get loggedIn():boolean{
    return this._loggedIn;
  }
  @Input()
  set loggedIn(value: boolean){
    this._loggedIn=value;
    if(value === true){
      this.message='welcome back gokul';
    }else {
      this.message='please log in';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
