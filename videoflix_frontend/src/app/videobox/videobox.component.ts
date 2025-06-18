import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-videobox',
  imports: [],
  templateUrl: './videobox.component.html',
  styleUrl: './videobox.component.scss'
})
export class VideoboxComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = 'Video thumbnail';
  @Input() videoSrc: string = '';
  @Input() id!: number;

  @Output() videoSelected = new EventEmitter<number>();

  onClick() {
    this.videoSelected.emit(this.id);
  }
}
