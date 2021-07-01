import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private readonly url = 'https://youtube.googleapis.com/youtube/v3/search?key=<YOUR-API-KEY>';

  constructor(private httpModule: HttpClient) {
  }
  

  loadCourses = () => {
    const query = [
      this.url,
      `&part=id,snippet&channelId=UCU1vWi1KyXDiXQmWxBr0gFg`,
      `&maxResults=50`
    ].join('');
    return this.httpModule.get(query)
      .pipe(
        
        map((item: any) => item.items.reverse()),
        map((item: any) => {
          console.log(query);
          return item.map(i => {
            const myRegexp = /^(COVER).(\S+)/gm;
            const match = myRegexp.exec(i.snippet.description) || [];
            //i.cover = match.reverse().shift();
            return i;
          });
        }),
      );
  };
}
