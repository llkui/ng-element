import { Component } from '@angular/core';

@Component({
    selector: 'nel-header',
    templateUrl: './header.component.html',
    host: {
        '[class.el-header]': 'true'
    },
    standalone: false
})

export class NelHeaderComponent { }
