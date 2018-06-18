import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {
    visuals = {};
    langDefault = 'gr';
    configUrl = 'visuals.json';

    constructor(private http: Http) { }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get(this.configUrl).pipe(  // path of your config.json file
                map(res => res.json()))
                .subscribe(
                    (data: any) => {
                        // console.log(JSON.stringify(data));
                        this.visuals = data;
                        localStorage.setItem('lang', this.langDefault);
                        localStorage.setItem('visuals_gr', JSON.stringify(data.gr));
                        localStorage.setItem('visuals_en', JSON.stringify(data.en));
                        resolve(this.visuals);
                    },
                    err => console.log(err)
                );
        });
    }
}
