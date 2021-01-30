import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  current = '';

  ngOnInit(): void {
  }

  selectCurrent(selectedItem: string) {
    this.router.navigate([selectedItem], { relativeTo: this.route });
    this.current = selectedItem;
  }

}
