import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  visual = "";
  lang = "";
  @Input() change: any;

  constructor() {}  

  ngOnInit() {
    
  }

  ngOnChange() {
    // this.getLang();
    console.log(this.lang);
  }

  getLang(){
    this.lang = localStorage.getItem("lang");
    console.log("this.lang" + this.lang);
  }

  changeLang(lang){
    console.log("lang =  "+lang);
    localStorage.setItem("lang",lang);
  } 

}
