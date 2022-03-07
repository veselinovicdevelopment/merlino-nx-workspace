import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'merlino-mike-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  // Object that will be passed to Web Component
  childData = {
    text: 'Angular'
  }

  // Json parser
  JSON = JSON;

  // Custom event listener
  @HostListener('window:btn-clicked', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMessage(event: any) {
    window.alert(event.detail?.message);
  }
}
