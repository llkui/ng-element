import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-skeleton-animated',
    template: `
    <nel-skeleton [nelRows]="5" nelAnimated></nel-skeleton>
  `,
    standalone: false
})

export class NelDemoSkeletonAnimatedComponent { }
