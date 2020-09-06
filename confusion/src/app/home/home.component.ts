import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

import { leaders } from '../shared/Leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  lead: leaders;

  constructor(private dishservice: DishService,
    private leaderservice: LeaderService,
    private promotionservice: PromotionService) { }

  ngOnInit(): void {

    this.dish = this.dishservice.getFeaturedDish();
    this.lead=this.leaderservice.getLeaders()[3];
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
