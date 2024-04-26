import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarchandService } from '../../services/marchand.service';
import { Marchand } from '../../model/marchand.model';

@Component({
  selector: 'app-editmarchandform',
  templateUrl: './editmarchandform.component.html',
  styleUrl: './editmarchandform.component.css'
})
export class EditmarchandformComponent implements OnInit{

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
