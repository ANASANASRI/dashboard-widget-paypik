import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError, timer } from "rxjs";
import { NOTYF } from "../../shared/utils/notyf.token";
import { Notyf } from "notyf";
import { IError } from "../../shared/interfaces/error.interface";

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(@Inject(NOTYF) private notyf: Notyf) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.notyf.dismissAll();

    return next.handle(request).pipe(
      retry({
        count: 3, 
        delay: (errors: HttpErrorResponse, retryCount) =>
          this.shouldRetry(errors, retryCount)
      }),
      catchError((errors: HttpErrorResponse) => {
        let errorMessage = "Le serveur n'est pas prêt à traiter votre demande.";

        if (errors.status !== 0) {
          errorMessage = errors.error?.title || errorMessage;
        }

        if (errors.status >= 400 && errors.status <= 415) {
          const errorDetails = this.handleFormErrors(errors.error);
          this.notyf.error({
            message: errorMessage,
            duration: 0
          });
          return throwError(() => errorDetails);
        }

        this.notyf.error({
          message: errorMessage,
          duration: 0
        });

        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private shouldRetry(errors: HttpErrorResponse, retryCount: number) {
    if (errors.status === 400) return throwError(() => errors);

    return timer(retryCount * 1000);
  }

  private handleFormErrors(errors: any): Record<string, string[]> {
    let errorMessages: Record<string, string[]> = {};
  
    // Check if errors is an object and has the general key
    if (errors && typeof errors === 'object') {
      if (Array.isArray(errors.general)) {
        errorMessages['general'] = errors.general;
      } else {
        // Handle other possible formats if needed
        console.error("Format d'erreur inattendu dans handleFormErrors:", errors);
      }
    } else {
      console.error("Format d'erreur inattendu:", errors);
    }
  
    return errorMessages;
  }
  
}
