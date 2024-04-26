import { DemandeService } from './../../services/demande.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Images } from 'src/assets/data/images';
import { Demandedto } from '../../model/demandedto.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  demandLength !: number;

  ngOnInit(): void {
    this.getAllDemandesNotVerified();
  }

  public userOne: string = Images.users.userOne;
  
  isOpen: boolean = false;

  constructor(
    private element: ElementRef, private renderer: Renderer2,
    private demandeService : DemandeService,
  ) {}

  onClickProfile = () => {
    const profileDropdownList = this.element.nativeElement.querySelector(
      '.profile-dropdown-list'
    );
    this.renderer.setAttribute(profileDropdownList, 'aria-expanded', 'true');
  };


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
}
