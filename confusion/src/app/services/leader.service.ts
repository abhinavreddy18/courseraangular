import { Injectable } from '@angular/core';
import { leaders } from '../shared/Leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): leaders[] {
    return LEADERS;
  }
}
