import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/app.state';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements AfterViewInit {

  constructor(private store: Store<AppState>) { }

  playerColumns: string[] = ["name", "setsWon", "matchesWon"]
  @ViewChild(MatSort) matSort: MatSort = new MatSort()
  dataSource = new MatTableDataSource()

  // See https://material.angular.io/components/sort/overview AND
  // https://stackoverflow.com/a/53015635 for explanation.
  // In short, we need to do it this way to enable auto sorting on angular tables.
  ngAfterViewInit() {
    setTimeout(() => {
      this.matSort.sort(({ id: 'setsWon', start: 'desc' }) as MatSortable);
      this.dataSource.sort = this.matSort
    }, 100);
    this.store.select(store => store.game.players).pipe(untilDestroyed(this)).subscribe(players => {
      setTimeout(() => {
        this.dataSource.data = players
      }, 100);
    })
  }

}
