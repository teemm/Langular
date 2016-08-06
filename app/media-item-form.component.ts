import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form;
    ngOnInit(){
        this.form = new ControlGroup({
            'medium' : new Control('Movies'),
            'name' : new Control('',Validators.compose([
                Validators.required,
                Validators.pattern('[\\ww\\-\\ss\\/]+')
            ])),
            'category' : new Control(''),
            'year' : new Control('', this.yearValidator)
        });
    }
    yearValidator(control){
        if (control.value.trim().length === 0)return null;
        var year = parseInt(control.value);
        var minYear = "1900"
        var maxYear = "3000"
        if (year >= minYear && year <= maxYear)return null;
        return {'year': {'min':minYear, 'max':maxYear}};
    }
    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}