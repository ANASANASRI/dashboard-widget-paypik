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
// Propriétés
marchandId: string = '';
  marchands: Marchand[] = [];
  marchand: any;
  modificationReussie: boolean = false; // Ajout de la variable pour contrôler l'affichage de l'alerte

  constructor(
    private route: ActivatedRoute,
    private marchandService: MarchandService
  ) { }

  ngOnInit(): void {
    this.fetchMarchands();
    this.route.params.subscribe(params => {
      this.marchandId = params['marchanId'];
    });
  }

  fetchMarchands(): void {
    // Récupération de la liste des marchands depuis le service
    this.marchandService.getMarchands().subscribe(
      (data: Marchand[]) => {
        // Stockage des marchands récupérés
        this.marchands = data;
        // Conversion de l'ID en nombre entier
        const id: number = parseInt(this.marchandId, 10);
        // Recherche du marchand correspondant à l'ID
        this.marchand = this.marchands.find(marchand => marchand.marchandId === id);
        // Vérification si le marchand a été trouvé
        console.log('Marchand id', id);
        console.log('Marchand ', this.marchand);
        this.previewImageUrl=this.marchand.marchandLogoUrl;
        if (!this.marchand) {
          console.error('Marchand not found with id:', id);
        }
      },
      (error) => {
        console.error('Error fetching marchands:', error);
      }
    );
  }

  submitForm(): void {
    // Vérification si le marchand est défini
    if (this.marchand) {
      // Appel du service pour mettre à jour le marchand
      this.marchandService.editMarchand(this.marchand).subscribe(
        (updatedMarchand: Marchand) => {
          console.log('Marchand updated successfully:', updatedMarchand);
          // Affichez un message de succès
          this.modificationReussie = true;
          // Réinitialisez la variable après un certain délai
          setTimeout(() => {
            this.modificationReussie = false;
          }, 3000); // Délai en millisecondes (ici, 3 secondes)
        },
        (error) => {
          console.error('Error updating marchand:', error);
          // Affichez un message d'erreur à l'utilisateur
        }
      );
    }
  }



  //////////////////photo
  uploadOption: boolean = true;
  imageUrl: string = '';




  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Do something with the selected file
  }

  previewImageUrl!: string ;

  loadFile(event: any) {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.previewImageUrl = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  updatePreviewImageUrl(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.previewImageUrl = inputElement.value;
    }
  }



}
