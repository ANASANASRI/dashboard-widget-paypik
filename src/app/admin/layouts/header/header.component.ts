
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Images } from 'src/assets/data/images';
import { Marchand } from '../../model/marchand.model';
import { MarchandService } from '../../services/marchand.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public userOne: string = Images.users.userOne;
  
  isOpen: boolean = false;

  justCreatedMarchands: Marchand[] = [];
  justCreatedMarchand: number = 0;

  constructor(
    private marchandService: MarchandService,
    private element: ElementRef, 
    private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getJustCreatedMarchands();
  }

  onClickProfile = () => {
    const profileDropdownList = this.element.nativeElement.querySelector('.profile-dropdown-list');
    this.renderer.setAttribute(profileDropdownList, 'aria-expanded', 'true');
  };


  getJustCreatedMarchands() {
    this.marchandService.getMarchands().subscribe(
      (data) => {
        this.justCreatedMarchands = data.filter(marchand => marchand.marchandStatus === 'JustCreated');
        this.justCreatedMarchand = this.justCreatedMarchands.length;
      },
      (error) => {
        console.error('Error fetching unverified demandes:', error);
      }
    );
  }
}
