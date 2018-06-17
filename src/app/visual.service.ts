import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class VisualService {
    private langs = {};
    private langDefault:number = 1;
    configUrl = 'visuals.json';

    constructor(private http: Http) { }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get(this.configUrl).pipe(  // path of your config.json file
                map(res => res.json()))
                .subscribe(
                    (data: any) => {
                        // console.log(JSON.stringify(data));
                        this.langs = JSON.stringify(data);
                        this.langDefault =  data.langDefault;
                        localStorage.setItem("visualsArray_", JSON.stringify(data));
                        resolve(true);
                    },
                    err => console.log(err)
                );
        });
    }

    public getLangs(){
        console.log("visual.getLangs()")
        return this.langs;
    }

    public getLangDefault(){
        return this.langDefault;
    }
}
