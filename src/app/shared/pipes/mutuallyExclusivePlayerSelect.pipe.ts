import { Pipe, PipeTransform } from '@angular/core';
/*
    Checks if a player has already been selected. Input is id of the other selected player, so that the player that is already selected is not on the list 
    for the second select.
*/
@Pipe({ name: 'mutuallyExclusivePlayerSelect' })
export class MutuallyExclusivePlayerSelectPipe implements PipeTransform {
    transform(items: any, playerId: string): Array<any> {
        return items.filter((item: { id: string; }) => item.id != playerId)
    }
}