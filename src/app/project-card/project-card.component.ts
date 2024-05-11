import { Component, OnInit } from '@angular/core';
import { TechCardComponent } from '../tech-card/tech-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TechCardComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  proyectos: any;
  
  ngOnInit(): void {
    this.proyectos = [
      {
        "imagen": 'assets/img/deconatus-proyecto.png',
        "nombre": 'De Conatus Editorial',
        "subtitulo": 'Desarrollo y mantenimiento de web',
        "texto": "Mi misión en la editorial De Conatus fue clara: necesitaban una web rápida y que les trajese tráfico orgánico a la editorial. Y así fue, conseguimos que la web mejorase 30 puntos en Lighthouse (Google PageSpeed), y el tráfico mejorase un 25%. Además de encargarme personalmente del manejo de la web cuando se anunció que ganaron el premio Nobel, teniendo un total de 15 mil personas de manera concurrente.",
        "tecnologias": ["PHP (7/8)", "WordPress", "JavaScript", "HTML & CSS", "SQL"]
      },
      {
        "imagen": '/assets/img/rhome-proyecto.jpeg',
        "nombre": 'Rhome',
        "subtitulo": 'Desarrollo web',
        "texto": 'El músico Rhome me encargó realizar una web sencilla en la que pudiese mostrar noticias y demás acontecimientos relacionados con su carrera.',
        "tecnologias": ["PHP (8)", "WordPress", "JavaScript", "HTML & CSS", "SQL"]
      },
      {
        "imagen": '/assets/img/portfolio-proyecto.jpg',
        "nombre": 'Portfolio',
        "subtitulo": 'Desarrollo web',
        "texto": 'Quería crear un portfolio simple, pero potente al mismo tiempo, donde pueda mostrar mi nivel de manejo de tecnologías como Angular sobre TypeScript, así como la experiencia que tengo en el sector.',
        "tecnologias": ["Angular", "TypeScript", "JavaScript", "HTML & CSS", "Vercel"]
      },
      {
        "imagen": '/assets/img/battume-proyecto.jpeg',
        "nombre": 'Battume',
        "subtitulo": 'Desarrollo web',
        "texto": 'Queríamos conseguir una web que nos consiguiese clientes, y fuese sencilla, pero a la vez, que tuviese un toque de estilo. Esto nos permitió conseguir +10 clientes satisfechos, brindándoles soluciones digitales que ayudaron a sus negocios y permitieron potenciar su digitalización.',
        "tecnologias": ["PHP (7/8)", "WordPress", "TypeScript", "JavaScript", "HTML & CSS", "SQL"]
      },
      {
        "imagen": '/assets/img/cryptopy-proyecto.png',
        "nombre": 'CryptoPY',
        "subtitulo": 'Scripting',
        "texto": 'CryptoPY fue un proyecto que realicé en 2020, consistiendo en un script que compara el precio de 5 criptomonedas, para así enviar una alerta en caso de que suban o bajen a una cantidad determinada que especifique el usuario. Esta alerta sería a través de un mail.',
        "tecnologias": ["Python"]
      }
    ]
  }
}
