import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.getAllusers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Failed to load users', error);
      }
    );
  }

  editUser(user: any): void {
    // Implement edit user functionality
    console.log('Edit user:', user);
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.loadUsers(); // Reload users after deletion
      },
      (error) => {
        console.error('Failed to delete user', error);
      }
    );
  }
  

  getAllusers(): void {
    this.userService.showAllusers().subscribe(
      (data) => {
      this.users = data;
      console.log(this.users)
    });
  }
}
