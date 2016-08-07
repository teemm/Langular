System.register(['angular2/platform/browser', './app.component', './media-item.service', 'angular2/core', './provide', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, media_item_service_1, core_1, provide_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (provide_1_1) {
                provide_1 = provide_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                media_item_service_1.MediaItemService,
                http_1.HTTP_PROVIDERS,
                core_1.provide(provide_1.LOOKUP_LISTS, { useValue: provide_1.lookupLists })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map