import { ContentChildren, Directive, Input, QueryList, AfterContentInit } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { NelColDirective } from './col.directive';

export type RowType = 'flex' | undefined;
export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

@Directive({
    selector: '[nel-row]',
    host: {
        '[class.el-row]': `true`,
        '[class.el-row--flex]': `nelType == 'flex'`,
        '[class.is-justify-end]': `nelJustify == 'end'`,
        '[class.is-justify-center]': `nelJustify == 'center'`,
        '[class.is-justify-space-around]': `nelJustify == 'space-around'`,
        '[class.is-justify-space-between]': `nelJustify == 'space-between'`,
        '[style]': 'gutterStyle()'
    },
    standalone: false
})

export class NelRowDirective implements AfterContentInit {
  @Input() nelGutter = 0;
  @Input() nelType: RowType = undefined;
  @Input() nelJustify: RowJustify = 'start';
  @ContentChildren(NelColDirective, { descendants: false }) colList!: QueryList<NelColDirective>;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngAfterContentInit(): void {
    if (this.nelGutter > 0) {
      this.colList.forEach((item: NelColDirective) => {
        item.parentGutter = this.nelGutter;
      });
    }
  }

  gutterStyle(): SafeStyle {
    let styleStr = '';
    if (this.nelGutter) {
      styleStr += `margin-left: -${this.nelGutter / 2}px;`;
      styleStr += `margin-right: -${this.nelGutter / 2}px;`;
    }
    return this.sanitizer.bypassSecurityTrustStyle(styleStr);
  }
}
