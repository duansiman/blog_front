"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var menu_service_1 = require('./../service/menu.service');
var HeaderComponent = (function () {
    function HeaderComponent(menuService) {
        this.menuService = menuService;
    }
    HeaderComponent.prototype.getMenus = function () {
        var _this = this;
        //this.menus = this.menuService.getMenus();
        this.menuService.getMenusByHttp().then(function (menus) { return _this.menus = menus; });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.getMenus();
        console.log(this.menus);
    };
    HeaderComponent.prototype.selectMenu = function (menu) {
        this.selectedMenu = menu;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'blog-header',
            templateUrl: 'template/header.component.html',
            styleUrls: ['css/header.component.css']
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map