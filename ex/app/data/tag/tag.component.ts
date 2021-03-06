import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTagComponent implements OnInit {
  
  private code: string[] = code
  private tags: string[] = ['123', '234234', '0011']
  private page: any = {
    previous: { name: 'Radio 单选框', link: '/form/radio' },
    next: { name: 'Input 输入框', link: '/form/input' },
  }
  
  handle(): void {
    this.tags.pop()
  }
  
  ngOnInit(): void {
  }
}
