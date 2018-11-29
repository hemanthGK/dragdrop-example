import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  artists = [
    'hemanth I - kumar',
    'hemanth II - kumar',
    'hemanth III - kumar',
    'hemanth IV - kumar',
    'hemanth V - kumar'
  ];

  alteArtists = [
    'kumar 1 - hemanth',
    'kumar 2 - hemanth',
    'kumar 3 - hemanth',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,event.container.data, 
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.artists, event.previousIndex, event.currentIndex);
    }
  }
}
