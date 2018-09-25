import {Component, OnInit} from '@angular/core';
import {SearchService} from '../service/search.service';
import {User} from '../model/user';

@Component({
    selector: 'app-search-dialog',
    templateUrl: './search-dialog.component.html',
    styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {

    results: User[];

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
    }

    search(searchTerm: string) {
        this.searchService.searchTerm(searchTerm).subscribe(results => {
            console.log(this.results = results);
        });
    }

}
