import { Pipe, PipeTransform } from '@angular/core';
import { Player } from 'src/app/player/player.model';
/*
    Checks if a player has already been selected.
*/
@Pipe({ name: 'mutuallyExclusivePlayerSelect' })
export class MutuallyExclusivePlayerSelectPipe implements PipeTransform {
    transform(items: any, playerId: string): Array<any> {
        return items.filter((item: { id: string; }) => item.id != playerId)
    }
}