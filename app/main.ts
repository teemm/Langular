import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MediaItemService} from './media-item.service'
import {provide} from 'angular2/core';

var lookuplists = {
    mediums: ['Movides', 'Series']
}
bootstrap(AppComponent,[
    MediaItemService,
    provide('LOOKUP_LISTS', {useValue:lookuplists})
    ]);