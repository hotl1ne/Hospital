import { Component } from '@angular/core';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { HeaderComponent } from "../header/header.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { IAppointment } from '../../Interfaces/Appointment/IApointment.module';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-appoitment',
  standalone: true,
  imports: [SideMenuComponent, HeaderComponent, PaginationComponent, SearchBarComponent],
  templateUrl: './appoitment.component.html',
  styleUrl: './appoitment.component.css'
})
export class AppoitmentComponent {
    [x: string]: any;

    public appointments: IAppointment[] = [
        {id: "1", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "2", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "3", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "4", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "5", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "6", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "7", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "8", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "9", patient_Name: "Sara Crouse1", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "10", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "11", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "12", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "13", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "14", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "15", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "16", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "17", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "18", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "19", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "20", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "21", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "22", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "23", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "24", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "25", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "26", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "27", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "28", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "29", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "30", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "31", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "32", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "33", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "34", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "35", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "36", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "37", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "38", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "39", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "40", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "41", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "42", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "43", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "44", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "45", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "46", patient_Name: "Sara Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "47", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "48", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "49", patient_Name: "Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "50", patient_Name: "Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "51", patient_Name: "Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "52", patient_Name: "Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "53", patient_Name: "Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "54", patient_Name: "Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
        {id: "55", patient_Name: "Last", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    ];

    searchFilter = this.appointments;

    totalPages = Math.ceil(this.appointments.length/8);
    rowsPerPage = 8;
    shownOnPage = 0; 
    totalInfo = this.appointments.length;
    currentPage = 1; 
  
    get paginatedAppointments(): IAppointment[] {
        const startIndex = (this.currentPage - 1) * this.rowsPerPage;
        const endIndex = startIndex + this.rowsPerPage;
        if(endIndex>this.appointments.length)
        {
            this.shownOnPage = this.appointments.length - startIndex;
        }
        else{
            this.shownOnPage = endIndex - startIndex;
        }
        return this.searchFilter.slice(startIndex, endIndex);
      }

    onPageChange(newPage: number) {
      this.currentPage = newPage;
    }

    handleSearch(searchTerm: string) {
        if (searchTerm) {
          this.searchFilter = this.appointments.filter(item =>
            item.patient_Name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          this.searchFilter = this.appointments;
        }
    
        this.currentPage = 1;
      }

  sortTable(n: number): void {
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
