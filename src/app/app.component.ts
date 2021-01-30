import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reversejob';
  showFiller = false;
  opensidenav = false;

  ngOnInit(): void {
    this.onResize();
  }

  onResize(event?): void {
    let width;

    if (event !== undefined) {
      width = event.target.innerWidth;
    }
    else {
      width = document.body.clientWidth;
    }

    if (width >= 960) {
      this.opensidenav = true;
    }
    else {
      this.opensidenav = false;
    }
  }

}
