import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

    transform(value: string, search: string): string {
        const regex = new RegExp(search, 'gi')
        return value.replace(regex, match => `<b>${match}</b>`)
    }

}
