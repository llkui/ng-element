import { Component } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    host: {
        class: 'article'
    },
    standalone: false
})

export class ButtonComponent { }
