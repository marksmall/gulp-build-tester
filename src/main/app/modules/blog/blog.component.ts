// import Angular 2
import {Component, OnInit} from "@angular/core";

import {BlogService} from "./blog.service";
import {Blog} from "./blog";

@Component({
	selector: "blog",
	templateUrl: "modules/blog/blog.template.html",
	providers: [BlogService]
})
export class BlogsTabComponent implements OnInit {

  private BlogService: BlogService;

  blogs: Blog[];
  newsActive: string;
  eventsActive: string;

  private emptyBlog: Blog = {
    id: 0,
    title: "",
    permalink: "",
    content: "",
    excerpt: "",
    date: null,
    author: ""
  };

  constructor(BlogService: BlogService) {
    this.BlogService = BlogService;
  }

  /**
   * Get posts for a specific type e.g. 'news', 'events' etc.
   *
   * @param id Identifier of post type.
   */
  getBlogs(id: string) {
    this.BlogService.getPosts(id).subscribe(
      (blogs: Blog[]) => { this.setBlogs(id, blogs); },
      (err: any) => { this.setBlogs(id, [this.emptyBlog]); }
    );
  }

  /**
   * Set the relevant instance array for posts and other variables used to display
   * the correct list of posts.
   */
  setBlogs(id: string, data: Blog[]) {
    this.blogs = data;

    if (id === "news") {
      this.newsActive = "active";
      this.eventsActive = null;
    } else if (id === "events") {
      this.eventsActive = "active";
      this.newsActive = null;
    }
  }

  ngOnInit() {
    this.getBlogs("news");
  }
}
