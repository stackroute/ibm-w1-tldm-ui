import {Component, OnInit} from '@angular/core';
import {SearchService} from '../service/search.service';

@Component({
    selector: 'app-search-dialog',
    templateUrl: './search-dialog.component.html',
    styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {

    value = '';

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        this.searchService.establishConnectionForSearch();
    }

    search() {
    }

}
