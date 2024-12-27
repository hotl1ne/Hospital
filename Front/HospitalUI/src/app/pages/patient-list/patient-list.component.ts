import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../../layouts/sidebar/sidebar.component";
import { HeaderComponent } from "../../layouts/header/header.component";
import { SearchBarComponent } from "../../layouts/search-bar/search-bar.component";
import { PaginationComponent } from "../../layouts/pagination/pagination.component";
import { IPatient } from '../../models/Patient/IPatientList.module';
import { LoaderComponent } from "../../layouts/loader/loader.component";
import { SortTableService } from '../../core/services/SortService/sort-table.service';




@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [RouterLink, SideBarComponent, HeaderComponent, SearchBarComponent, PaginationComponent, LoaderComponent],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements AfterViewInit, OnInit {

  constructor(private sort: SortTableService){}

  protected isLoading!: boolean;
  protected patients: IPatient[] = [];
  searchFilter: IPatient[] = [];
  totalPages! : number;
  rowsPerPage = 8;
  shownOnPage = 0; 
  totalInfo! : number;
  currentPage = 1; 

  ngOnInit(): void {
    this.isLoading = true;
    this.patients = [
      { id: "1", patient_Code: "PC001", patient_Name: "John Doe", age: "45", diseases: "Hypertension", patient_Room: "101" },
      { id: "2", patient_Code: "PC002", patient_Name: "Jane Smith", age: "50", diseases: "Diabetes", patient_Room: "102" },
      { id: "3", patient_Code: "PC003", patient_Name: "Michael Johnson", age: "60", diseases: "Arthritis", patient_Room: "103" },
      { id: "4", patient_Code: "PC004", patient_Name: "Emily Davis", age: "30", diseases: "Asthma", patient_Room: "104" },
      { id: "5", patient_Code: "PC005", patient_Name: "William Brown", age: "55", diseases: "Heart Disease", patient_Room: "105" },
      { id: "6", patient_Code: "PC006", patient_Name: "Olivia Taylor", age: "65", diseases: "Osteoporosis", patient_Room: "106" },
      { id: "7", patient_Code: "PC007", patient_Name: "James Wilson", age: "40", diseases: "Allergy", patient_Room: "107" },
      { id: "8", patient_Code: "PC008", patient_Name: "Sophia Martinez", age: "70", diseases: "Alzheimer", patient_Room: "108" },
      { id: "9", patient_Code: "PC009", patient_Name: "Benjamin Anderson", age: "47", diseases: "Migraine", patient_Room: "109" },
      { id: "10", patient_Code: "PC010", patient_Name: "Charlotte Thomas", age: "34", diseases: "Depression", patient_Room: "110" },
      { id: "11", patient_Code: "PC011", patient_Name: "Daniel Jackson", age: "56", diseases: "Arthritis", patient_Room: "111" },
      { id: "12", patient_Code: "PC012", patient_Name: "Amelia White", age: "61", diseases: "Osteoporosis", patient_Room: "112" },
      { id: "13", patient_Code: "PC013", patient_Name: "Henry Harris", age: "35", diseases: "Hypertension", patient_Room: "113" },
      { id: "14", patient_Code: "PC014", patient_Name: "Lily Martin", age: "39", diseases: "Asthma", patient_Room: "114" },
      { id: "15", patient_Code: "PC015", patient_Name: "Alexander Clark", age: "62", diseases: "Heart Disease", patient_Room: "115" },
      { id: "16", patient_Code: "PC016", patient_Name: "Isabella Lewis", age: "66", diseases: "Diabetes", patient_Room: "116" },
      { id: "17", patient_Code: "PC017", patient_Name: "Mason Lee", age: "33", diseases: "Anxiety", patient_Room: "117" },
      { id: "18", patient_Code: "PC018", patient_Name: "Mia Walker", age: "44", diseases: "Depression", patient_Room: "118" },
      { id: "19", patient_Code: "PC019", patient_Name: "Ethan Hall", age: "54", diseases: "Heart Disease", patient_Room: "119" },
      { id: "20", patient_Code: "PC020", patient_Name: "Harper Young", age: "49", diseases: "Migraine", patient_Room: "120" },
      { id: "21", patient_Code: "PC021", patient_Name: "Samuel King", age: "48", diseases: "Hypertension", patient_Room: "121" },
      { id: "22", patient_Code: "PC022", patient_Name: "Evelyn Scott", age: "53", diseases: "Arthritis", patient_Room: "122" },
      { id: "23", patient_Code: "PC023", patient_Name: "Matthew Green", age: "67", diseases: "Diabetes", patient_Room: "123" },
      { id: "24", patient_Code: "PC024", patient_Name: "Avery Adams", age: "57", diseases: "Allergy", patient_Room: "124" },
      { id: "25", patient_Code: "PC025", patient_Name: "Jackson Baker", age: "31", diseases: "Asthma", patient_Room: "125" },
      { id: "26", patient_Code: "PC026", patient_Name: "Ella Nelson", age: "41", diseases: "Anxiety", patient_Room: "126" },
      { id: "27", patient_Code: "PC027", patient_Name: "David Carter", age: "42", diseases: "Migraine", patient_Room: "127" },
      { id: "28", patient_Code: "PC028", patient_Name: "Abigail Mitchell", age: "52", diseases: "Heart Disease", patient_Room: "128" },
      { id: "29", patient_Code: "PC029", patient_Name: "Joseph Perez", age: "36", diseases: "Depression", patient_Room: "129" },
      { id: "30", patient_Code: "PC030", patient_Name: "Emily Roberts", age: "64", diseases: "Osteoporosis", patient_Room: "130" },
      { id: "31", patient_Code: "PC031", patient_Name: "Noah Reed", age: "38", diseases: "Hypertension", patient_Room: "131" },
      { id: "32", patient_Code: "PC032", patient_Name: "Aiden Sanchez", age: "51", diseases: "Diabetes", patient_Room: "132" },
      { id: "33", patient_Code: "PC033", patient_Name: "Grace Price", age: "63", diseases: "Arthritis", patient_Room: "133" },
      { id: "34", patient_Code: "PC034", patient_Name: "Lucas Turner", age: "46", diseases: "Allergy", patient_Room: "134" },
      { id: "35", patient_Code: "PC035", patient_Name: "Zoey Diaz", age: "37", diseases: "Anxiety", patient_Room: "135" },
      { id: "36", patient_Code: "PC036", patient_Name: "Jack Collins", age: "43", diseases: "Asthma", patient_Room: "136" },
      { id: "37", patient_Code: "PC037", patient_Name: "Lillian Stewart", age: "58", diseases: "Heart Disease", patient_Room: "137" },
      { id: "38", patient_Code: "PC038", patient_Name: "Joshua Morris", age: "68", diseases: "Diabetes", patient_Room: "138" },
      { id: "39", patient_Code: "PC039", patient_Name: "Aria Rogers", age: "59", diseases: "Depression", patient_Room: "139" },
      { id: "40", patient_Code: "PC040", patient_Name: "Henry Bell", age: "32", diseases: "Migraine", patient_Room: "140" },
      { id: "40", patient_Code: "PC040", patient_Name: "Henry Bell", age: "32", diseases: "Migraine", patient_Room: "140" }
    ];

    this.searchFilter = this.patients;
    this.totalPages = Math.ceil(this.patients.length / this.rowsPerPage);
    this.totalInfo = this.patients.length;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  sortTable(id: number) :void{
    this.sort.sortTbl(id);
  }
  
    get paginatedPatients(): IPatient[] {
        const startIndex = (this.currentPage - 1) * this.rowsPerPage;
        const endIndex = startIndex + this.rowsPerPage;
        if(endIndex>this.patients.length)
        {
            this.shownOnPage = this.patients.length - startIndex;
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
          this.searchFilter = this.patients.filter(item =>
            item.patient_Name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          this.searchFilter = this.patients;
        }
    
        this.currentPage = 1;
      }

}
