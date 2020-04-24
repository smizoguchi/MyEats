import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import restaurants from "../../restaurants.json";
import { Post } from "./post";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  public restList: { name: string }[] = restaurants;

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com/todos/1";

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) {}

  value: number = 0;
  hval: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

  getPosts() {
    console.log("Getting post");
    this.posts = this.http.get(this.ROOT_URL + "/posts?userId=1");
  }

  sendPosts() {
    //send some data to the server
    //data to be sent over

    const data: Post = {
      id: 1,
      userId: 101,
      title: "haha",
      body: "hello",
      cost: "some data"
    };

    this.newPost = this.http.post(this.ROOT_URL + "/posts", data);
    console.log("sending post");
  }
}
