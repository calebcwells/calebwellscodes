import { Component, OnInit, OnDestroy } from '@angular/core';

import { primarySkills, secondarySkills } from './skill.model';

@Component({
    selector: 'cwcodes-skills',
    templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
    public primarySkills = primarySkills;
    public secondarySkills = secondarySkills;

    ngOnInit(): void {}
}
