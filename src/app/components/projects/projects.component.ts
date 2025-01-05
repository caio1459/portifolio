import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})

//category: 'Projetos Pessoais', 'Projetos Faculdade', 'Projetos para Treino'
export class ProjectsComponent {
  private projects = [
    {
      link: 'https://github.com/caio1459/Projeto_Google_Glass',
      image: 'assets/images/google-glass.png',
      alt: 'Projeto Google Glass',
      category: 'Projetos para Treino',
    },
    {
      link: 'https://github.com/caio1459/projeto_momentos',
      image: 'assets/images/momentos.png',
      alt: 'Projeto Momentos',
      category: 'Projetos para Treino',
    },
    {
      link: 'https://github.com/caio1459/landing-page',
      image: 'assets/images/landing-page.png',
      alt: 'landing-page',
      category: 'Projetos para Treino',
    },
    {
      link: 'https://github.com/caio1459/Site_BK',
      image: 'assets/images/site-bk.png',
      alt: 'Site BK',
      category: 'Projetos Faculdade',
    },
    {
      link: 'https://github.com/caio1459/vitrine-esqueleto',
      image: 'assets/images/vitrine-esqueleto.png',
      alt: 'Vitrine Esqueleto',
      category: 'Projetos Faculdade',
    },
    {
      link: 'https://github.com/caio1459/portifolio',
      image: 'assets/images/site_portifolio.png',
      alt: 'Site Portifolio',
      category: 'Projetos Pessoais',
    },
    {
      link: 'https://github.com/caio1459/clone-spotify',
      image: 'assets/images/clone-spotify.png',
      alt: 'Clone Spotify',
      category: 'Projetos Pessoais',
    },
    {
      link: 'https://github.com/caio1459/devbook',
      image: 'assets/images/devbook.png',
      alt: 'Devbook',
      category: 'Projetos Pessoais',
    },
  ];

  private selectedCategory = 'Todos';

  get filterProjects() {
    if (this.selectedCategory === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(
      (project) => project.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
