import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    template: `
   <h4 class="bg-primary text-light">
        You have selected {{name}}
        <p>Show more details of contact person</p>
</h4>
    `
})

export class ShowComponent implements OnInit {
    constructor(private route:ActivatedRoute) { }
    name:string|undefined

    ngOnInit() {
        this.name=this.route.snapshot.params['selected']
     }
}