import { Component } from '@angular/core';

@Component({
  selector: 'spadio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Sistema escola';
  
  showprogress:boolean = false;

  constructor() { }

  ngOnInit(): void {
   this.showprogress = false;
  }
  

  showProgress() {
    this.showprogress = false;
  }
 

  ngOnDestroy(): void {
    this.showprogress = false;
  }

}
