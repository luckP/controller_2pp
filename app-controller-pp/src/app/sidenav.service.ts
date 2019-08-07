import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public showFiller = false;
  constructor() { }

  public toggle(){
    this.showFiller = !this.showFiller;
  }
}
