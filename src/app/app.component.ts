import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  pageTitle="gokul learns angular";
  imgUrl='https://upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png';

  imgUrl2='https://miro.medium.com/max/1155/1*C1kgFbqTyVuckvJ3Z1lgeQ.png';


  count=0;
  name!: string;
  userName!: string;
  private _customerName!: string;

  get customerName(): string{
    return this. _customerName;
  }
  set customerName(value:string){
    this._customerName=value;
    if(value=='gokul'){
      alert('hello gokul');
    }
  }

  
  incrementCount(){
    this.count +=1;

  }

  greetgokul(updatedValue: string) {
    this.userName = updatedValue;
    if (updatedValue == 'gokul') {
      alert('Welcome gokul');
    }
  }


}
