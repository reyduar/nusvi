import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
   ) {
    // Esto permite actualizar el titulo y los metatags
    this.getDataRoute()
      .subscribe( data => {

        console.log( data );

        this.label = data.titulo;
        // title es una propiedad de angular que permite modificar u obtener su valor
        this.title.setTitle( this.label );

        // con el meta podemos modificar nuestros metatags del html
        /*
          <head>
          <meta charset="UTF-8">
          <meta name="description" content="Free Web tutorials">
          <meta name="keywords" content="HTML,CSS,XML,JavaScript">
          <meta name="author" content="John Doe">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
         */
        let metaTag: MetaDefinition[] = [{
          name: 'description',
          content: this.label
        }, {
          name: 'author',
          content: 'ariel duarte'
        }];

        this.meta.addTags(metaTag);

      });
  }

  // Gracias a ActivationEnd sabemos en que pagina estamos de acuerdo a la info que le pasa el router
  getDataRoute() {
    // el router events tiene la informacion de la paginas que navegamos
    return this.router.events
        // el filter nos permite recorrer solo que queremos que son los activationEnd
        .filter( evento => evento instanceof ActivationEnd  )
        // el snapshot que tiene firstchild null seria el que tiene los datos que necestimos
        .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
        // con el map extraemos la info que necesitamos
        .map( (evento: ActivationEnd) => evento.snapshot.data );

  }


  ngOnInit() {
  }

}
