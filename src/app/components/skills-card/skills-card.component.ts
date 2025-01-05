import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.scss',
})
export class SkillsCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) iconClass!: string;
  @Input({ required: true }) description!: string;
}
