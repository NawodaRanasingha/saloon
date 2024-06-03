import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { adminData } from './side-data';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{


  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData: any;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

  }



 
  ngOnInit(): void {
    this.navData = adminData;
   
  }


 
  logout(): void {
    // this.http.post('http://localhost:5000/api/logout', {},
    //   { withCredentials: true }
    // ).subscribe(() => this.authenticated = false)
  }
}
