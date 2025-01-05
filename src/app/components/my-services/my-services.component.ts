import { Component } from '@angular/core';
import { SkillsCardComponent } from '../skills-card/skills-card.component';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [SkillsCardComponent],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
})
export class MyServicesComponent {
  skills = [
    {
      iconClass: 'fa-brands fa-golang',
      title: 'Go',
      description:
        'Experiência em desenvolvimento de aplicações de back-end com Go',
    },
    {
      iconClass: 'fa-brands fa-angular',
      title: 'Angular / Ionic',
      description:
        'Experiência em desenvolvimento de aplicações web e híbridas com Angular e Ionic',
    },
    {
      iconClass: 'fa-brands fa-git-alt',
      title: 'Git e GitHub',
      description:
        'Experiência em controle de versão com Git e hospedagem de repositórios com GitHub',
    },
    {
      iconClass: 'fa-solid fa-code',
      title: 'Delphi',
      description: 'Experiência em desenvolvimento de software com Delphi',
    },
    {
      iconClass: 'fa-solid fa-database',
      title: 'Oracle / MySQL',
      description:
        'Experiência em gerenciamento de banco de dados Oracle e MySQL',
    },
    {
      iconClass: 'fa-brands fa-html5',
      title: 'HTML e CSS',
      description: 'Experiência em HTML e CSS para desenvolvimento front-end',
    },
    {
      iconClass: 'fa-brands fa-js',
      title: 'JavaScript',
      description: 'Experiência em JavaScript para desenvolvimento web',
    },
    {
      iconClass: 'fa-brands fa-react',
      title: 'React Native / React',
      description:
        'Experiência em desenvolvimento de aplicações móveis e interfaces com React Native e React',
    },
    {
      iconClass: 'fa-brands fa-node-js',
      title: 'Node.js',
      description: 'Conhecimento em desenvolvimento de back-end com Node.js',
    },
    {
      iconClass: 'fa-brands fa-php',
      title: 'PHP',
      description: 'Conhecimento em desenvolvimento de back-end com PHP',
    },
    {
      iconClass: 'fa-brands fa-laravel',
      title: 'Laravel',
      description:
        'Conhecimento em desenvolvimento de aplicações web e APIs com Laravel',
    },
    {
      iconClass: 'fa-brands fa-docker',
      title: 'Docker',
      description: 'Conhecimento em containerização de aplicações com Docker',
    },
  ];
}
