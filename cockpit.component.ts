import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() servercreated = new EventEmitter < { serverName: string, serverContents: string} >();
@Output() blueprintcreated = new EventEmitter < {serverName: string, serverContents: string} >();
newservername = '';
newservercontent = '';
  constructor() { }

  ngOnInit() {

  }
onAddServer()
{
  this.servercreated.emit({serverName: this.newservername, serverContents: this.newservercontent});
}
onAddBluePrint()
{
  this.blueprintcreated.emit({serverName: this.newservername, serverContents: this.newservercontent});
}
}
