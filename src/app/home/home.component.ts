import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public router: Router){

  }

  email = "";
  password= "";


  

  visible:boolean=true;

  changetype:boolean=true;


  view(){
    
    this.visible =! this.visible;
    this.changetype=! this.changetype ;

  }

  // login(){
  //   if (this.email == '') 
  //   {
  //     alert("please enter your Email ID");
  //     return ;
      
  //   }
  

  //   this.router.navigateByUrl('/about-us')
  // }

}
