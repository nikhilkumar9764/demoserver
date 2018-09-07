import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 styles: [`
 h1
  {
   color:yellow;
  }`]
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'My server has some content'}];
  onServerAdded(serverData: { serverName: string, serverContents: string}) {
  this.serverElements.push({
    type: 'server' ,
    name: serverData.serverName,
    content: serverData.serverContents
  });
}
onBluePrintAdded(blueprintData: { serverName: string, serverContents: string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContents
  });
}
}

