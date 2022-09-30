import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { FormGroup } from '@angular/forms';

import { ApiService } from '../services/api.service';
import { Api } from '../models/api';



@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = '';
  api = {} as Api;
  textInput: {}; 

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    
    this.apiService.getHello().pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.mensagem;
      }
    });

    this.getDateTime()

  }

  getDateTime(): any {
    
    this.apiService.getDateTime().subscribe(res => {
      
      //condição IF reduzida
      if(res) return this.api = res;
      return '';

    });

  }

  showMessage(frm: FormGroup): any {
    
    this.apiService.showMessage(this.api).subscribe(res => {          
      
      //condição ternária
      this.textInput = res ? res['words'] : '';   
      frm.reset();
      
    })

  }

}
