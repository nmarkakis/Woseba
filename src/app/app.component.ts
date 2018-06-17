import { Component, Input } from '@angular/core';
import { VisualService } from './visual.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends VisualService {
  visuals = {};
  lang = "";
  @Input() change: any;

  constructor(http: Http) {
    super(http);
  }  

  ngOnInit() {
    
  }

  ngOnChange() {
    // this.getLang();
    console.log(this.lang);
  }

  // getLang(){
  //   this.lang = localStorage.getItem("lang");
  //   console.log("this.lang" + this.lang);
  // }

  changeLang(lang){
    console.log("lang =  "+lang);
    localStorage.setItem("lang",lang);
    this.load();
    this.visuals = this.getLangs();
    console.log("aaaaa"+this.visuals);
  } 

}
