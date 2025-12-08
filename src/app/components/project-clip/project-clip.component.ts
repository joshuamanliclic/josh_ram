import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-clip',
  templateUrl: './project-clip.component.html',
  styleUrls: ['./project-clip.component.css']
})
export class ProjectClipComponent {
  @Input() projectUrl!: string;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getSafeYoutubeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}
