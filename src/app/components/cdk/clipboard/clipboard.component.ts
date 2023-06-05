import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent {
  textInput = 'text to copy';

  constructor(private clipboard: Clipboard) {}

  onClick(): void {
    this.clipboard.copy('Hello, Clipboard')
  }

  onTextCopy($event: boolean) {
    console.log($event);
  }
}
