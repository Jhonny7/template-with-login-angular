import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    
    
    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}