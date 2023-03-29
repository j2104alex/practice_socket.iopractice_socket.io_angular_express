import { Injectable } from '@angular/core';
import { SocketsService } from './sockets.service';

@Injectable({
  providedIn: 'root'
})
export class NombreService {

  constructor(private socket: SocketsService) {
    this.socket.io.on('kevin@gmail.com',(texto)=>{
      console.log(texto)
    })
  }

  emitir() {
    let texto = "Hola Jess"
    let texto2 = "Como estas?"
    //Primer paso
    this.socket.io.emit('jess@gmail.com', texto,texto2)
  }
}
