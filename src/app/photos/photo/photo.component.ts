import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo', //prefixo é boa prática
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    @Input()  description = '';
    @Input() url = '';
}