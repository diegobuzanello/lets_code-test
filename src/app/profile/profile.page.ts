import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  profile: any;
  constructor() {}

  ngOnInit() {
    this.profile = JSON.parse(history.state.queryParams.user);

    console.log(this.profile);
  }
}
