import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/service.index';
import { FormControl, Validators } from '@angular/forms';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public keywords: string;
  public totalItems: number;
  public results: any[];
  public articles: any[];
  searchResult: SearchResult;
  constructor(public _searchService: SearchService) {}

  ngOnInit() {
    this.articles = this.cualquier();
  }

  onSubmit() {
    this._searchService.runSearchQuery(this.searchQuery()).subscribe(
      response => {
        if (response) {
          this.results = response.searchResults;
          this.totalItems = response.count;
          console.log('Result -> ' + JSON.stringify(this.results));
        }
      },
      error => {
        console.error('Error search');
      }
    );
  }

  onClick() {
    this.articles = this.results;
  }

  private searchQuery(): any {
    const query = {
      dateSpec: {
        endDate: null,
        startDate: null
      },
      keyword: this.keywords,
      queryFilters: [],
      resultSpec: {
        fields: [
          'VTKey',
          'Title',
          'Body',
          'PublishedDT',
          'MediaID',
          'Permalink',
          'EditorId',
          'SourceId'
        ]
      }
    };
    return query;
  }

  private cualquier(): any[] {
    const query = [
      {
        'searchFields': {
          'PublishedDT': '2018-05-08 22:47:19.000',
          'VTKey': 'XXXX',
          'Permalink': 'http://www.youtube.com/watch?v=ZMliZzpARyY',
          'MediaID': '111',
          'SourceId': '323',
          'Title': '...',
          'Body': '...'
        }
      },
      {
        'searchFields': {
          'PublishedDT': '2018-05-08 22:47:19.000',
          'VTKey': 'ZZZZ',
          'Permalink': 'http://www.youtube.com/watch?v=ZMliZzpARyY',
          'MediaID': '1111',
          'SourceId': '323',
          'Title': '...',
          'Body': '....'
        }
      }];
    return query;
  }
}
