export const markFromGroupTouched = (formGroup: any) => {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
        control.markAsTouched()

        if (control.controls) {
            markFromGroupTouched(control)
        }
    })
}
