import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { playerActions } from '../store'

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  //Initialize the store in the constructor
  constructor(private store: Store<AppState>) { }

  name: string = ""

  ngOnInit(): void {
  }

  postPlayer() {
    this.store.dispatch(playerActions.postPlayer({ name: this.name }))
  }

}
