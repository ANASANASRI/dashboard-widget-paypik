import { MarchandService } from './../../services/marchand.service';
import { Component ,OnInit,ViewChild, ElementRef } from '@angular/core';
import { formatDate } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { pageTransition } from 'src/app/shared/utils/animations';
import { ActivatedRoute } from '@angular/router';
import { Marchand } from '../../model/marchand.model';
Chart.register(...registerables);

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrl: './more.component.css',
  animations: [pageTransition]
})
export class MoreComponent implements OnInit{
  eventDate: any = formatDate(new Date(), 'MMM dd, yyyy', 'en');
  marchanId!: string;

  constructor(
    private route: ActivatedRoute,
    private marchandService: MarchandService

  ) { }

  ngOnInit(): void {
    this.fetchMarchands();
    this.route.params.subscribe(params => {
      this.marchanId = params['marchanId'];
      // Now you have the marchanId value, you can use it as needed
    });

  }

  ////////////Scroll to section //////////////

  @ViewChild('detailedDescription') detailedDescription!: ElementRef;

  scrollToSection() {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ///////////////////  Services  //////////////////////////
  get getmarchandId() {
    return this.marchanId;
  }

  marchands: Marchand[] = [];
  marchand: Marchand | undefined;

  fetchMarchands() {
    this.marchandService.getMarchands().subscribe(
      (data: Marchand[]) => {
        this.marchands = data;
        
        const Id = this.marchanId; 

        this.marchand = this.marchands.find(marchand => marchand.marchandId === Number(Id));
        if (!this.marchand) {
          console.error('Marchand not found with id:', Id);
        }
      },
      (error) => {
        console.error('Error fetching marchands:', error);
      }
    );
  }


  
}
