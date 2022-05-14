import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private store: Store<any>) {}
  number!: number;
  users$ = this.store.select('users');

  ngOnInit(): void {
    this.users$.subscribe((res) => {
      this.number = res.length;
    });
  }
}
