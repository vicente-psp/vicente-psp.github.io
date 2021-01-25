import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private _mobileQueryListener: () => void;
  public mobileQuery: MediaQueryList;
  public fillerNav = Array.from({length: 10}, (_, i) => `Item ${i + 1}`);
  public isMenuOpen = false;
  public menuIcon = 'menu';

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public snavClick(snav: any): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.menuIcon = 'menu';
    } else {
      this.menuIcon = 'menu_open';
    }
    snav.toggle();
  }

}
