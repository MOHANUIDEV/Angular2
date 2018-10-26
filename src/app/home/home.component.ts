import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import{paper} from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public user:any = [];
  
    paper: FormGroup;
  userdata(data){
    //this.userform = user;
            // console.log(userform.value);
             this.user=data.value;
             console.log(this.user);
  }
  regdata(){
    console.log(this.paper.value);
  }
  
  constructor() { }

  ngOnInit() {
    this.paper=new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
    
  }

}
