import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names: string = "Please type in your name";
  email: string="Please type in your email";
  product: string = "";
  amount:number = 0;
  message:string = "Type in a comment if necessary";

  onSubmit(){
    console.log(this.names + ", thank you for your order being:",this.amount, this.product + ", the details of your order have been sent to:",this.email + ".thank you for your comment, being:" , this.message)
  }
}
