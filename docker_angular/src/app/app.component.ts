import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  isOn: boolean = false;
  clicked: boolean = false;

  audioOn: string = 'assets/switch-on.mp3';
  audioOff: string = 'assets/switch-off.mp3';

  mouseDown() {
    this.clicked = true;
  }

  mouseUp() {
    this.clicked = false;
    this.isOn = !this.isOn;
    this.playAudio();
  }

  playAudio() {
    const audio = new Audio(this.isOn ? this.audioOn : this.audioOff);
    audio.play();
  }
}
