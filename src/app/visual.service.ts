import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class VisualService {
    private langs = [];
    private langDefault:number = 1;

    constructor(private _http: Http) { }

    public load() {
        return new Promise((resolve, reject) => {
            this._http.get('visuals.json').pipe(  // path of your config.json file
                map(res => res.json()))
                .subscribe(
                    (data: any) => {
                        this.langs = data.langs;
                        this.langDefault =  data.langDefault;
                        resolve(true);
                    },
                    err => console.log(err)
                );
        });
    }

    public getLangs(){
        return this.langs;
    }

    public getLangDefault(){
        return this.langDefault;
    }
}
