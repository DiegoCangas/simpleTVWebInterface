import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Apps from "../../assets/appList.json";
import { CommonModule, NgFor } from '@angular/common';
import { AppUrl } from "./modules/AppUrl";
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, AppUrl, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'webFrontEnd';
  actualID = -1;
  elementsPerRow = 5;
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == "ArrowRight") this.setHover(this.actualID+1); //flecha derecha
    else if(event.key == "ArrowLeft") this.setHover(this.actualID-1); //flecha inquierda
    else if(event.key == "ArrowUp") this.setHover(this.actualID-this.elementsPerRow); //arriba
    else if(event.key == "ArrowDown") { //abajo
      this.setHover(this.actualID+this.elementsPerRow); 
      event.preventDefault(); } //Evita que la pagina se desplace hacia abajo
    else if(event.key == "Enter") (document.getElementById(this.actualID.toString())?.firstChild as HTMLElement).click();
    }

  public Applist:{name: string, url: string,image:string}[] = Apps;
  @ViewChild('myDiv') myDiv: ElementRef | null = null;
  public route = "";
  ngAfterViewInit (){
  }
  setHover (id : number) {
    let btn = Array.from(document.getElementsByClassName("botones"));

    if (id < 0  || id >= btn.length) return; //Si el id esta fuera de la lista de botones no hace nada
    
    this.actualID = id;
    btn.forEach(e => {
      if (e.getAttribute("id") == id.toString()) (e.firstChild! as HTMLElement).classList.add("hover");
      else (e.firstChild! as HTMLElement).classList.remove("hover");
    });
  }
  
}
