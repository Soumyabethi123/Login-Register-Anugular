import { Component , OnInit } from '@angula/core';

@Component({

   selector: 'app-user-login',
   templateurl: './login.html',
   styleUrls: ['./login.css']

})

export class UserLoginComponent implements OnInit{

    signupUsers: any[] = [];

    signupObj:any[] = {

        userName:'',
        email:'',
        password:''
    }

    loginObj:any[]={

        userName:'',
        password:''
    }
    constructor(){

    }
}

