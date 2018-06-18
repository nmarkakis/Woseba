import { Component, Input } from '@angular/core';
import { ConfigService } from './config.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ConfigService]
})
export class AppComponent {
  Name = {};
  Type = {};
  Scientific = {};
  visuals = {};
  lang = "gr";

  constructor(protected http: Http, protected configService: ConfigService) {
  }

  ngOnInit() {
    console.log('Default Lang: ' + this.lang);
    this.getInitVisuals();
  }

  changeLang(lang) {
    console.log("lang =  " + lang);
    localStorage.setItem("lang", lang);

    if (lang == 'gr') {
      this.visuals = JSON.parse(localStorage.getItem('visuals_gr'));
      console.log('gr' + this.visuals);
      this.getVisuals();
    } else if (lang == 'en') {
      this.visuals = JSON.parse(localStorage.getItem('visuals_en'));
      console.log('en' + this.visuals);
      this.getVisuals();
    }

  }

  getVisuals() {
    // this.title = localStorage.getItem("ID");
    // this.visuals = JSON.parse(localStorage.getItem('visuals_gr'));
    this.Name = this.visuals['Name'];
    this.Type = this.visuals['Type'];
    this.Scientific = this.visuals['Scientific Name'];
    // this.title = JSON.parse(localStorage.getItem('ID'));
    // console.log('this.name'+this.Name);
  }

  getInitVisuals() {
    this.visuals = JSON.parse(localStorage.getItem('visuals_gr'));
    this.Name = this.visuals['Name'];
    this.Type = this.visuals['Type'];
    this.Scientific = this.visuals['Scientific Name'];
  }

}
