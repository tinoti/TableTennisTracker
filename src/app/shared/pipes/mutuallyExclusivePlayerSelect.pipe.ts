import { Pipe, PipeTransform } from '@angular/core';
/*
    Checks if a player has already been selected.
*/
@Pipe({ name: 'mutuallyExclusivePlayerSelect' })
export class MutuallyExclusivePlayerSelectPipe implements PipeTransform {
    transform(items: Array<any>, playerId: string): Array<any> {
        return items.filter(item => item.id != playerId)
    }
}