System.register(['angular2/core', 'angular2/common', './media-item.service', './providers', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, media_item_service_1, providers_1, router_1;
    var MediaItemFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MediaItemFormComponent = (function () {
                function MediaItemFormComponent(formBuilder, mediaItemService, lookupLists, router) {
                    this.formBuilder = formBuilder;
                    this.mediaItemService = mediaItemService;
                    this.lookupLists = lookupLists;
                    this.router = router;
                }
                MediaItemFormComponent.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        'medium': new common_1.Control('Movies'),
                        'name': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            common_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        'category': new common_1.Control(''),
                        'year': new common_1.Control('', this.yearValidator)
                    });
                };
                MediaItemFormComponent.prototype.yearValidator = function (control) {
                    if (control.value.trim().length === 0)
                        return null;
                    var year = parseInt(control.value);
                    var minYear = 1800;
                    var maxYear = 2500;
                    if (year >= minYear && year <= maxYear)
                        return null;
                    return { 'year': { 'min': minYear, 'max': maxYear } };
                };
                MediaItemFormComponent.prototype.onSubmit = function (mediaItem) {
                    var _this = this;
                    this.mediaItemService.add(mediaItem)
                        .subscribe(function () {
                        _this.router.navigate(['../List', { medium: mediaItem.medium }]);
                    });
                };
                MediaItemFormComponent = __decorate([
                    core_1.Component({
                        selector: 'media-item-form',
                        templateUrl: 'app/media-item-form.component.html',
                        styleUrls: ['app/media-item-form.component.css']
                    }),
                    __param(2, core_1.Inject(providers_1.LOOKUP_LISTS)), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, media_item_service_1.MediaItemService, Object, router_1.Router])
                ], MediaItemFormComponent);
                return MediaItemFormComponent;
            }());
            exports_1("MediaItemFormComponent", MediaItemFormComponent);
        }
    }
});
//# sourceMappingURL=media-item-form.component.js.map