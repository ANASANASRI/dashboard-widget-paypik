import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/admin/model/user.model';
import { UserService } from 'src/app/admin/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  totalUsers: number = 0;
  totalActiveUsers: number = 0;
  totalDeletedUsers: number = 0;
  totalInactiveUsers: number = 0;

  constructor(private userService: UserService) {} // Assuming you have a UserService

  ngOnInit() {
    // Fetch user data when the component initializes
    this.userService.getUsers().subscribe((users: User[]) => {
      this.totalUsers = users.length;
      this.totalActiveUsers = this.getTotalActiveUsers(users);
      this.totalDeletedUsers = this.getTotalDeletedUsers(users);
      this.totalInactiveUsers = this.getTotalInactiveUsers(users);
    });
  }

  // Method to calculate total active users
  getTotalActiveUsers(users: User[]): number {
    return users.filter(user => user.status === 'Active').length;
  }

  // Method to calculate total deleted users
  getTotalDeletedUsers(users: User[]): number {
    return users.filter(user => user.status === 'Deleted').length;
  }

  // Method to calculate total inactive users
  getTotalInactiveUsers(users: User[]): number {
    return users.filter(user => user.status === 'Inactive').length;
  }
}
