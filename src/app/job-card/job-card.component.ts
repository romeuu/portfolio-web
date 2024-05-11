import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TechCardComponent } from '../tech-card/tech-card.component';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, TechCardComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent implements OnInit {
  experiencia: any;
  
  ngOnInit(): void {
    this.experiencia = [
      {
        "fecha": "2020-2023",
        "titulo": 'Desarrollador web - Tecalis Software',
        "subtitulo": 'Anteriormente: Desarrollador web junior',
        "texto": "Con experiencia notable en el sector de las telecomunicaciones en España, me centré en la creación y mantenimiento de componentes y flujos críticos, como la firma electrónica, para las principales compañías del sector. Mi enfoque estaba centrado en la optimización de la eficiencia, seguridad y usabilidad de mi código, llegando así a crear componentes nuevos, pero fiables. Además, conseguí aportar mis conocimientos y habilidades para impulsar el lanzamiento de soluciones digitales propietarias.",
        "tecnologias": ["PHP (Laravel & Symfony)", "Angular", "TypeScript", "JavaScript", "HTML & CSS", "Ionic", "SQL"]
      },
      {
        "fecha": "2023-2024",
        "titulo": 'Desarrollador web - Battume Creative',
        "texto": 'Como desarrollador web, he tenido la oportunidad de liderar la creación y mantenimiento de páginas web para una variedad clientes en diversos sectores. Durante este tiempo, con buenas prácticas SEO, he conseguido un 50% de aumento en tráfico orgánico, además de una mejora significativa en el rendimiento. Cada proyecto, era una oportunidad nueva para impulsar la digitalización de estas empresas.',
        "tecnologias": ["PHP (Laravel)", "Angular", "WordPress", "HTML & CSS", "TypeScript", "SQL"]
      }
    ]
  }
}
