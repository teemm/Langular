import {Pipe} from 'angular2/core';

@Pipe({
    name: 'categoryList'
})

export class categortListPipe{
    transform(mediaItems){
        var categories = [];
        mediaItems.forEach(mediaItems => {
            if(categories.indexOf(mediaItems.category) <= -1){
                categories.push(mediaItems.category);
            }
        });
        return categories.join(', ');
    }
}