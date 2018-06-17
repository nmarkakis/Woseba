import { Component, Input } from '@angular/core';
import { VisualService } from './visual.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends VisualService {
  title = {};
  visuals = {};
  lang = "GR";
  @Input() change: any;

  constructor(http: Http) {
    super(http);
  }  

  ngOnInit() {
    console.log('Default Lang: ' + this.lang);
    this.getVisuals();
  }

  ngOnChange() {
    // this.getLang();
    console.log('Lang: ' + this.lang);
    // this.getVisuals();
  }

  // getLang(){
  //   this.lang = localStorage.getItem("lang");
  //   console.log("this.lang" + this.lang);
  // }

  changeLang(lang){
    console.log("lang =  "+lang);
    localStorage.setItem("lang",lang);
    this.visuals = this.load();
    localStorage.setItem("visuals", JSON.stringify(this.visuals));
    // this.visuals = this.getLangs();
    console.log("aaaaa"+JSON.stringify(this.visuals));
    // this.getVisuals();
  } 

  getVisuals() {
    // this.title = localStorage.getItem("ID");
    this.title = JSON.parse(localStorage.getItem('ID'));
    console.log('this.title'+this.title);
  }

}
