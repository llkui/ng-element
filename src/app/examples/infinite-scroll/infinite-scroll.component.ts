import { Component } from '@angular/core';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    host: {
        '[class]': `'article'`
    },
    standalone: false
})

export class InfiniteScrollComponent { }
