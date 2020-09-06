import { Component, OnInit } from '@angular/core';
import { leaders } from '../shared/Leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leader : leaders[];

  constructor(private leaderservice : LeaderService) { }

  ngOnInit(): void {
    this.leader=this.leaderservice.getLeaders();
  }

}
