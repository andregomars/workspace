import { AbstractControl } from '@angular/forms';

export function passwordMatch(control: AbstractControl): {[key: string]: boolean} {
    const pwd = control.get('pwd');
    const confirmPwd = control.get('confirmPwd');

    if (!pwd || !confirmPwd) {
        return null;
    }

    if (pwd.value === confirmPwd.value) {
        return null;
    }

    return { mismatch: true };
}
