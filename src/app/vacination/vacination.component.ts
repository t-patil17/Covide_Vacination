import { Component } from '@angular/core';

@Component({
  selector: 'app-vacination',
  templateUrl: './vacination.component.html',
  styleUrls: ['./vacination.component.scss']
})
export class VacinationComponent {

  name ="";

  selectitm ="" ;

  member :any =[];
  member1: any=[] ;
  memberdetail: any=[] ;


  constructor(){
    // this.member = JSON.parse(localStorage.getItem('member_data')  || '')
    // this.member1 = JSON.parse(localStorage.getItem('Dos1')  || '')
    // this.memberdetail = JSON.parse(localStorage.getItem('Dos2')  || '')


    console.log('this.member');
  }


  memberadd(){

    let object = {
      name :this.name,
      selectitm: this.selectitm
    }


    this.member.push(object);
    // localStorage.setItem('member_data', JSON.stringify (this.member));

    console.log("hello");

    this.clear();
    
  }

  clear(){
    this.name ="";
    this.selectitm="";
  }
 
  Remove(index:any){
    this.member.splice(index, 1)
    // localStorage.setItem('member_data', JSON.stringify (this.member));

  }


  // second column 

  dose1(i:any){
    this.member1.push(this.member[i]);
   this.member.splice(i)
    // localStorage.setItem('Dos1', JSON.stringify (this.member1));


   this.clear();

  }


  dose2(i: any){
    this.memberdetail.push(this.member1[i])

    this.member1.splice(i)
    // localStorage.setItem('Dos2', JSON.stringify (this.memberdetail));


    this.clear();
  }



  undo(i:any){
    this.member.push(this.member1[i])
    this.member1.splice(i)

    this.clear();

  }

  undo2(i:any){
    
    this.member1.push(this.memberdetail[i])
    this.memberdetail.splice(i);

    this.clear();

  }

}


