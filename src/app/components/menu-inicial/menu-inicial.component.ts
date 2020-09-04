import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFichar(){
    this.router.navigateByUrl('/fichar');
  }

  goToComisiones(){
    this.router.navigateByUrl('/comisiones');
  }

}
