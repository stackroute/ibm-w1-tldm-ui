import {Component, OnInit} from '@angular/core';
import {SearchService} from '../service/search.service';
import {User} from '../model/user';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-search-dialog',
    templateUrl: './search-dialog.component.html',
    styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {

    value = '';

    resultSet$: Observable<User[]>;
    searchTerms = new Subject<string>();

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        // this.searchService.establishConnectionForSearch();

        this.resultSet$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.searchService.searchUsers(term))
        );
    }

    search(searchTerm: string): void {
        this.searchTerms.next(searchTerm);
    }
}
