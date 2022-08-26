import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[appSetScoring]',
    providers: [{ provide: NG_VALIDATORS, useExisting: SetScoringValidatorDirective, multi: true }]
})
export class SetScoringValidatorDirective implements Validator {
    @Input('appSetScoring') setScore: any;

    validate(control: AbstractControl): ValidationErrors | null {
        // If one player has 11 points and the other has less than 10, that player is the winner and the input is valid
        if (control.value === 11 && this.setScore < 10 || this.setScore === 11 && control.value < 10) {
            return null
        }
        return { error: "ayy" }
    }
}



/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}