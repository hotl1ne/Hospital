import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortTableService {

  constructor() { }

  public sortTbl(n: number): void {
    const table = document.getElementById("myTable") as HTMLTableElement | null;
    if (!table) {
        console.error("Table element not found.");
        return;
    }

    let rows: HTMLCollectionOf<HTMLTableRowElement>, switching: boolean, i: number, x: HTMLElement, y: HTMLElement, shouldSwitch: boolean = false, dir: string, switchcount = 0;
    switching = true;
    dir = "asc";

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n] as HTMLElement;
            y = rows[i + 1].getElementsByTagName("TD")[n] as HTMLElement;

            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode!.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
  }
}
