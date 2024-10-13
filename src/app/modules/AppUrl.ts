import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'AppUrl',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule,MatButtonModule],
  templateUrl: './AppUrl.html',
  styleUrl: './AppUrl.css'
})
export class AppUrl implements OnInit {
    @Input() appurl : {name: string, url: string, image:string} = {name:"",url:"", image:""};
    ngOnInit(): void {
        
    }
}
