import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: [ './feed.component.scss' ]
})
export class FeedComponent implements OnInit {
	constructor() {}

	@Input() author: any
	@Input() message: any
	@Input() totalLikes: number
	@Input() totalDislikes: number
	@Output() liked = new EventEmitter<number>()
	@Output() disliked = new EventEmitter<number>()

	ngOnInit() {}

	gotLiked() {
		this.liked.emit(this.totalLikes++)
	}

	gotDisliked() {
		this.liked.emit(this.totalDislikes++)
	}
}
