import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Projects } from 'src/app/interfaces/project-list';

@Component({
  selector: 'app-project-clip',
  templateUrl: './project-clip.component.html',
  styleUrls: ['./project-clip.component.css']
})
export class ProjectClipComponent {
  @Input() project!: Projects;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getSafeYoutubeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  getSafeWebsiteUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  isVideo(): boolean {
    return this.project.type == "video";
  }
}
