import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Certificates } from 'src/app/interfaces/certifications';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  @Input() certifications!: Certificates[];

  constructor(
      private sanitizer: DomSanitizer
  ) { }

  getSafeCertUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + '#toolbar=0&navpanes=0');
  }

  open(pdfUrl: string){
    window.open(pdfUrl + '#toolbar=0&navpanes=0', '_blank');
  }
}
