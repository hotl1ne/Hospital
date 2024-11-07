import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true,
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const cleaned = value.replace(/\D+/g, '');

    const countryCode = cleaned.slice(0, 3);      
    const operatorCode = cleaned.slice(3, 6);     
    const part1 = cleaned.slice(6, 9);            
    const part2 = cleaned.slice(9, 12);           

    return `+${countryCode} ${operatorCode} ${part1} ${part2}`;
  }
}
