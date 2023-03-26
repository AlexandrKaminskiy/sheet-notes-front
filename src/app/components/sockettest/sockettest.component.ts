import {Component} from '@angular/core';
import {SocketService} from "../../services/socket.service";

@Component({
  selector: 'app-sockettest',
  templateUrl: './sockettest.component.html'
})
export class SockettestComponent {

  constructor(private socketService: SocketService) {
    this.socketService.listenToServer('allNotes').subscribe((change) => {
      console.log(change);
    })
  }
  submit() {
    this.socketService.emitToServer('allNotes', {})
  }
}
