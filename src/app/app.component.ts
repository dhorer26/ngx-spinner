import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngxspinner';
  constructor(private spinner: NgxSpinnerService) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    // this.spinner.hide(); hide at required place
  }
}
