import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  api = "https://randomuser.me/api/";

  constructor(private httpClient: HttpClient) {}

  get(url) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
      const params = new HttpParams();

      this.httpClient
        .get(this.api + url, { headers, params })
        .pipe()
        .subscribe(
          (data) => {
            console.log(data);
            resolve(data);
          },
          (err: Error | Response) => {
            console.log(err);
            reject(err);
          }
        );
    });
  }
}
