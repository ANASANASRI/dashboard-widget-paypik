import { User } from './../../../../model/user.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Marchand } from '../../../../model/marchand.model';
import { MarchandService } from '../../../../services/marchand.service';
import { UserService } from 'src/app/admin/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Role } from 'src/app/admin/model/role.model';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @ViewChild('statusInput') statusInputRef!: ElementRef;
  id!: number;
  thisUser!: User;
  userId!: number;

  marchands: Marchand[] = [];
  users: User[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  rejectOpen: boolean = false;
  marchandId!: number;
  selectedOption1: string = '';
  editModalOpen: boolean = false;

  editFormData: User = {
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email:'',
    profilLogoUrl:'',
    roles: [],
    status: ''
  };
  
  roles: Role[] = [
    { id: 2, name: 'ROLE_MARCHAND' },
    { id: 3, name: 'ROLE_ADMIN' },
    { id: 4, name: 'ROLE_COMMERCIAL' },
  ];
  selectedUser: any;

  constructor(
    private route: ActivatedRoute,
    private marchandService: MarchandService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.fetchMarchands();
    this.fetchUsers();
  }

  fetchMarchands() {
    this.marchandService.getMarchands().subscribe(
      (data: Marchand[]) => {
        this.marchands = data;
      },
      (error) => {
        console.error('Error fetching marchands:', error);
      }
    );
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  get filteredUsers() {
    let filteredData = this.users.filter(user => {
      const searchTerm = this.searchTerm ? this.searchTerm.toLowerCase() : '';
      const username = user.username ? user.username.toLowerCase() : '';
      return username.includes(searchTerm);
    });

    if (this.selectedOption1 !== '') {
      filteredData = filteredData.filter(user =>
        user.status === this.selectedOption1
      );
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return filteredData.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.itemsPerPage = this.selectedItemsPerPage();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.itemsPerPage = this.selectedItemsPerPage();
    }
  }

  onItemsPerPageChange(selectedValue: number) {
    this.itemsPerPage = selectedValue;
    this.currentPage = 1;
  }

  selectedItemsPerPage() {
    const selectElement = document.getElementById('states') as HTMLSelectElement;
    const selectedValue = selectElement ? selectElement.value : '';
    return selectedValue ? parseInt(selectedValue, 10) : this.itemsPerPage;
  }

  handleChange1(event: any) {
    this.selectedOption1 = event.target.value;
  }

  deleteMarchand(marchandId: number) {
    // Logique de suppression du marchand
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedOption1 = '';
    if (this.statusInputRef) {
      (this.statusInputRef.nativeElement as HTMLSelectElement).value = '';
    }
  }

  get user() {
    return this.thisUser || {};
  }

  toggleEdit(user: User) {
    this.editModalOpen = !this.editModalOpen;
    if (this.editModalOpen) {
      this.editFormData = {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilLogoUrl: user.profilLogoUrl,
        password: '', // Réinitialiser le mot de passe si nécessaire
        status: user.status,
        roles: user.roles ? [...user.roles] : [] // Copier les rôles pour éviter les références partagées
      };
    }
  }

  onSubmit(form: NgForm) {
    this.userService.updateUser(this.editFormData).subscribe(() => {
      this.fetchUsers();
      this.editModalOpen = false;
    });
  }

  isRoleChecked(role: Role): boolean {
    return this.editFormData.roles?.some(r => r.id === role.id) || false;
  }

  onRoleChange(event: any, role: Role) {
    if (!this.editFormData.roles) {
      this.editFormData.roles = [];
    }
    if (event.target.checked) {
      this.editFormData.roles.push(role);
    } else {
      this.editFormData.roles = this.editFormData.roles.filter(r => r.id !== role.id);
    }
  }

  swipeMarchand(userId: number) {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.status = user.status === 'Active' ? 'Inactive' : 'Active';
      this.userService.updateUser(user).subscribe(
        () => {
          console.log('User status updated successfully.');
        },
        (error) => {
          console.error('Error updating user status:', error);
        }
      );
    }
  }

  // Gestion du modèle de confirmation de suppression
  openModal(id: number): void {
    this.userId = id;
    this.rejectOpen = true;
  }

  toggleReject(): void {
    this.rejectOpen = !this.rejectOpen;
    if (!this.rejectOpen) {
      this.userId != null;
    }
  }

  confirmDelete(): void {
    if (this.userId !== null) {
      this.userService.deleteUser(this.userId)
        .pipe(
          catchError(error => {
            console.error('Delete failed', error);
            return of(null); // Gérer l'erreur de manière appropriée
          })
        )
        .subscribe(response => {
          console.log('User deleted successfully');
          this.toggleReject();
          this.fetchUsers(); // Mise à jour de la liste des utilisateurs après suppression
        });
    }
  }

  /*add User*/
  addModalOpen: boolean = false;
  addFormData: any = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roles: [],
    profilLogoUrl:'', // Initialisez le tableau de rôles sélectionnés
  };

  toggleAddModal() {
    this.addModalOpen = !this.addModalOpen;
  }

  generatePassword(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log("password",password)
    return password;
  }

  onAddSubmit(form: NgForm) {

    const selectedRoleNames = this.selectedRoles.map(role => role.name);
    this.addFormData.roles = selectedRoleNames;
    
    console.log(this.addFormData.roles ,   "==========" ,this.selectedRoles,   "==========" ,this.selectedRoles.at.name)

    if (form.valid) {
      this.addFormData.password = this.generatePassword(); // Générer et assigner un mot de passe
      // Envoyer les informations de l'utilisateur au service UserService pour créer un nouvel utilisateur
      this.userService.addUser(this.addFormData).subscribe(
        () => {
          console.log('Nouvel utilisateur ajouté avec succès');
          this.fetchUsers();
          this.addFormData = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            roles: [], 
            profilLogoUrl:'',// Réinitialisez le tableau de rôles sélectionnés
            // Réinitialisez d'autres champs si nécessaire
          };
          this.toggleAddModal();
          this.fetchUsers(); // Mettez à jour la liste des utilisateurs après l'ajout
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
          // Gérez l'erreur de manière appropriée
        }
      );
    }
  }

  // Component Modification
  selectedRoles: Role[] = [];

toggleRoleSelection(role: Role) {
    const index = this.selectedRoles.findIndex(r => r.id === role.id);
    if (index === -1) {
        this.selectedRoles.push(role);
    } else {
        this.selectedRoles.splice(index, 1);
    }
}

isRoleSelected(role: Role): boolean {
    return this.selectedRoles.some(r => r.id === role.id);
}


  

  //
  hasAllRoles(userId: number): boolean {
    const user = this.users.find(u => u.id === userId);
    if (!user || !user.roles) return false;

    const roleNames = user.roles.map((role: any) => role.name);
      return  roleNames.includes('ROLE_ADMIN') &&
              roleNames.includes('ROLE_MARCHAND') &&
              roleNames.includes('ROLE_COMMERCIAL');
    }


}
