import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://www.dicaspetz.com.br/wp-content/uploads/2019/04/quantos-anos-vive-um-gato.jpg',
      description: 'Gato'
    },
    {
      url: 'https://saude.abril.com.br/wp-content/uploads/2018/12/cachorro-livro.png',
      description: 'Cachorro'
    },
    {
      url: 'https://s3.amazonaws.com/media.wikiaves.com.br/images/221/122761_f41b46dfaa37205e41c1a190ceb2ebf8.jpg',
      description: 'Papagaio'
    }
  ];
}
