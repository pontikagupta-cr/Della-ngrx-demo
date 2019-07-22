import { Component, OnInit, ViewChild, Inject, Input, EventEmitter, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IUser } from 'src/app/models/user.interface';
 
 


   

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  @Input()
   users:IUser[];
    
   @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  displayedColumns: string[] = ['select', 'id', 'avatar', 'name', 'role', 'email', 'deviceid', 'icon'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  
  constructor()  {}
  
   
async ngOnInit(){
  this.dataSource.data=this.users;
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}
 

 ngOnChanges(): void {
   
 }
 

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  navigateToUser(id: number) {
       this.userSelected.emit(id);
       }

}






















// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { IUser } from '../../models/user.interface';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {
//   @Input()
//   users: IUser[];
//   @Output()
//   userSelected: EventEmitter<number> = new EventEmitter();

//   constructor() {}

//   ngOnInit() {}

//   navigateToUser(id: number) {
//     this.userSelected.emit(id);
//   }
// }
