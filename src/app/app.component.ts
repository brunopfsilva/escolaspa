import { Component } from '@angular/core';

@Component({
  selector: 'spadio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Sistema escola';
  
  showProgress = false;

  constructor() { }

  ngOnInit(): void {

    this.showProgress = true;
  }

  ngOnDestroy(): void {
    this.showProgress = false;
  }

}
