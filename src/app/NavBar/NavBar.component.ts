import { Router } from '@angular/router';
import { AuthService } from './../Core/service/Auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit   {
isScroll:boolean=false
isLoggedIn:boolean=false
typeOfProduct:string=''
  constructor(private _authService:AuthService, private _router:Router) {

 console.log( _authService.userData.getValue());

    _authService.userData.subscribe({
      next:(re)=>{
         if ( _authService.userData.getValue()) {
          this.isLoggedIn=true


    } else {
       this.isLoggedIn=false
       _router.navigate(['/LogIn'])

    }
  }})


  console.log(this.isLoggedIn);

   }

  ngOnInit() {

     document.addEventListener('scroll',()=>{


this.isScroll=true

}

     )


  }
logOut(){
localStorage.removeItem("userToken")
// this._authService.userData.next('')
console.log(this._authService.userData);
this._router.navigate(['/LogIn']);
this.isLoggedIn=false




}


}
