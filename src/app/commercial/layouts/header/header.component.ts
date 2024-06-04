import { DemandeService } from './../../services/demande.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Images } from 'src/assets/data/images';
import { Demandedto } from '../../model/demandedto.model';
import { TokenService } from 'src/app/public/auth/token.service';
import { AuthService } from 'src/app/public/auth/auth.service';
import { User } from 'src/app/admin/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  demandLength !: number;


  // ngOnInit(): void {
  //   this.getAllDemandesNotVerified();
  // }
  
//every 5 seconds
  ngOnInit(): void {
    this.getAllDemandesNotVerified();
    this.pollDemandes(); // Start polling for updates

    // Récupérer l'ID de l'utilisateur authentifié lors de l'initialisation du composant
    this.Id = this.authService.getAuthenticatedUserId();
    console.log("ID de l'utilisateur authentifié:", this.Id);
    if (this.Id !== 0) { // Vérifier si l'ID de l'utilisateur est valide
      this.retrieveUserById(); // Appel à la méthode pour récupérer les données de l'utilisateur
    } else {
      console.error('ID d\'utilisateur invalide:', this.Id);
    }
  }
  pollDemandes() {
    setInterval(() => {
      this.getAllDemandesNotVerified();
    }, 5000); // Poll every 5 seconds (adjust as needed)
  }


  public userOne: string = Images.users.userOne;
  Id!: number; // ID de l'utilisateur
  user: User | null = null; // Utilisateur authentifié

  isOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private element: ElementRef, 
    private renderer: Renderer2,
    private demandeService : DemandeService,
    private tokenService:TokenService,
  ) {}

  onClickProfile = () => {
    this.isOpen = !this.isOpen; // Toggle the isOpen state
    const profileDropdownList = this.element.nativeElement.querySelector('.profile-dropdown-list');
    this.renderer.setAttribute(profileDropdownList, 'aria-expanded', this.isOpen.toString());
  };

  retrieveUserById(): void {
    // Appel au service pour récupérer les données de l'utilisateur en utilisant son ID
    this.authService.getUserById(this.Id).subscribe({
      next: (data: User) => {
        //console.log('Données de l\'utilisateur:', data);
        this.user = data;
      },
      error: (error) => console.error('Erreur lors de la récupération de l\'utilisateur:', error),
    });
  }

   /////////////////////////////////////////get demandes  (notification)
  unverifiedDemandes: Demandedto[] = [];


  getAllDemandesNotVerified() {
    this.demandeService.getAllDemandesNotVerified().subscribe(
      (data) => {
        this.unverifiedDemandes = data;
        this.demandLength = this.unverifiedDemandes.length;
      },
      (error) => {
        console.error('Error fetching unverified demandes:', error);
      }
    );
  }

  get demandelenght(){
    return this.unverifiedDemandes.length;
  }

  // Method to handle logout
  onLogout(): void {
    this.tokenService.logOut();
  }
}
