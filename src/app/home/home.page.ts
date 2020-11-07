import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { ApiService } from "src/services/api/api.service";
import { UsersService } from "src/services/users/users.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  users: any;
  constructor(private api: UsersService, private router: Router) {}

  ngOnInit() {
    this.api.get().then((data: any) => {
      console.log(data);
      this.users = data.results;
    });
  }

  goToProfile(user) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        user: JSON.stringify(user),
      },
    };

    this.router.navigate(["./home/profile"], { state: navigationExtras });
  }
}
