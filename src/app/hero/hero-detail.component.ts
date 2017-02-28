import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../model/hero";
import {HeroDetailService} from "./hero-detail.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDetailService]
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroDetailService: HeroDetailService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  @Input() hero: Hero;

  ngOnInit(): void {
    // get hero when `id` param changes
    this.route.params.subscribe(p => this.getHero(p && p['id']));
  }

  private getHero(id: string): void {
    // when no id or id===0, create new hero
    if (!id) {
      this.hero = new Hero();
      return;
    }

    this.heroDetailService.getHero(id).then(hero => {
      if (hero) {
        this.hero = hero;
      } else {
        this.gotoList(); // id not found; navigate to list
      }
    });
  }

  save(): void {
    this.heroDetailService.saveHero(this.hero).then(() => this.gotoList());
  }

  cancel() {
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
