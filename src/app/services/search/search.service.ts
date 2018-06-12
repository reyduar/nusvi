import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { API_URL } from '../../config/config';
import { SearchQuery } from '../../models/search-query.model';


@Injectable()
export class SearchService {
  q: string;
  path: string;
  constructor(
    public _http: Http
  ) {

  }

  private header() {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return new RequestOptions({ headers: headers });
}

runSearchQuery( query: SearchQuery ) {
    this.q = JSON.stringify(query);
    this.path = API_URL + '/';
    return this._http.post(this.path, this.q, this.header())
    .map((response: Response) => response.json());
  }
}
