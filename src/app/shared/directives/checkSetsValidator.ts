import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Here we are validating each set, making sure the sets are valid before updating the store. This validator is on the top level of form, getting called 
// when any input is being changed. Inputs are named 'playerOne0', 'playerOne1' etc. 
@Directive({
    selector: '[appCheckSets]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CheckSetsValidatorDirective, multi: true }]
})
export class CheckSetsValidatorDirective implements Validator {
    @Input('appCheckSets') sets: Array<Array<number>> = [];
    isError: boolean = true
    playerOneSets: number = 0
    playerTwoSets: number = 0

    validate(control: AbstractControl): ValidationErrors | null {

        this.playerOneSets = 0
        this.playerTwoSets = 0
        let matchOver: boolean = false

        for (let i = 0; i < this.sets.length; i++) {

            const playerOneControl = control.get("playerOne" + i)
            const playerTwoControl = control.get("playerTwo" + i)

            // If any player has won three set, the match is over. matchOver is updated at the end of the for loop, so that the current input won't be disabled.
            if (matchOver) {
                playerOneControl?.disable({ emitEvent: false, onlySelf: true })
                playerOneControl?.setValue(0, { emitEvent: false, onlySelf: true })
                playerOneControl?.setErrors(null)

                playerTwoControl?.disable({ emitEvent: false, onlySelf: true })
                playerTwoControl?.setValue(0, { emitEvent: false, onlySelf: true })
                playerTwoControl?.setErrors(null)
            } 
            // If match is not over, enable controls. This handles the situation when somebody skips the input sets (for example, enters the fourth set without enterting third
            // and then enter third set afterwards. This will reset the fourth set.)
            else {
                playerOneControl?.enable({ emitEvent: false, onlySelf: true })
                playerTwoControl?.enable({ emitEvent: false, onlySelf: true })

            }

            const playerOneScore = playerOneControl?.getRawValue()
            const playerTwoscore = playerTwoControl?.getRawValue()

            // If neither player has reached 11 points, both inputs are invalid
            if (playerOneScore < 11 && playerTwoscore < 11) {
                playerOneControl?.setErrors({ error: "INVALID INPUT" })
                playerOneControl?.markAsTouched()

                playerTwoControl?.setErrors({ error: "INVALID INPUT" })
                playerTwoControl?.markAsTouched()
            }
            // If both players have 10 or more points and the difference between the points is < 2, both inputs are invalid
            else if (playerOneScore > 9 && playerTwoscore > 9 && Math.abs(playerOneScore - playerTwoscore) < 2) {
                playerOneControl?.setErrors({ error: "INVALID INPUT" })
                playerOneControl?.markAsTouched()

                playerTwoControl?.setErrors({ error: "INVALID INPUT" })
                playerTwoControl?.markAsTouched()
            }
            // If one player has more than 11 points and other player hase less than 10, both inputs are invalid
            else if ((playerOneScore > 11 && playerTwoscore < 10) || (playerTwoscore > 11 && playerOneScore < 10)) {
                playerOneControl?.setErrors({ error: "INVALID INPUT" })
                playerOneControl?.markAsTouched()

                playerTwoControl?.setErrors({ error: "INVALID INPUT" })
                playerTwoControl?.markAsTouched()
            }
            // If all conditions are met, the set is valid, so set both inputs to valid
            else {
                playerOneControl?.setErrors(null)
                playerTwoControl?.setErrors(null)

                // Keep track of sets so if player reaches victory before the fifth set, the unused inputs are disabled (in the next iteration, the current 
                // input needs to stay enabled)
                if (playerOneScore > playerTwoscore) this.playerOneSets++
                else if (playerTwoscore > playerOneScore) this.playerTwoSets++

            }

            if (this.playerOneSets > 2 || this.playerTwoSets > 2) {
                matchOver = true
            }


        }
        return null
    }
}