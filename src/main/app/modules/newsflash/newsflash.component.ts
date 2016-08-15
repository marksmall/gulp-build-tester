import {Component, OnInit} from '@angular/core'

import {ConfigService} from '../config/config.service'

@Component({
  selector: 'newsflash',
  templateUrl: 'modules/newsflash/newsflash.template.html',
})
export class NewsflashComponent implements OnInit {
  newsflash: string[] = []

  constructor(private configService: ConfigService) { }

  getNewsflash() {
    this.configService.getConfig().subscribe(
      (config: Map<string,any>) => {
        this.newsflash = config.get('newsflash')
      },
      (err: any) => {
        // don't bother updating the newsflash if there is an error
      }
    )
  }

  hasNewsflash(): boolean {
    return this.newsflash && this.newsflash.length > 0
  }

  ngOnInit() {
    this.getNewsflash()
  }
}
