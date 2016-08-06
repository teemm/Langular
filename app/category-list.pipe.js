System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var categortListPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            categortListPipe = (function () {
                function categortListPipe() {
                }
                categortListPipe.prototype.transform = function (mediaItems) {
                    var categories = [];
                    mediaItems.forEach(function (mediaItems) {
                        if (categories.indexOf(mediaItems.category) <= -1) {
                            categories.push(mediaItems.category);
                        }
                    });
                    return categories.join(', ');
                };
                categortListPipe = __decorate([
                    core_1.Pipe({
                        name: 'categoryList'
                    }), 
                    __metadata('design:paramtypes', [])
                ], categortListPipe);
                return categortListPipe;
            }());
            exports_1("categortListPipe", categortListPipe);
        }
    }
});
//# sourceMappingURL=category-list.pipe.js.map