import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IUser } from 'src/app/models/user.interface';
 
 


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input()
  users:IUser[];

  displayedColumns: string[] = ['select', 'id', 'avatar', 'name', 'role', 'email', 'deviceid', 'icon'];
  dataSource = new MatTableDataSource(this.users);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(public dialog: MatDialog ) {}


  //  openMembersAddDialog(): void {
  //   const dialogRef = this.dialog.open(MembersAddComponent, {
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //    });
  //   }
  
  
  openMembersEditDialog(): void {
    const dialogRef = this.dialog.open(MembersEditComponent, {
      height: '90%',
      width: '45%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     });
  }



  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
