import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private api: ApiService) {}

  async get() {
    return this.api.get("/?page=1&results=10").then((users: any) => {
      console.log(users);
      return users;
    });
  }
}
