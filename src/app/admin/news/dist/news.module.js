"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var add_news_component_1 = require("./add-news/add-news.component");
var news_routing_module_1 = require("./news-routing.module");
var news_component_1 = require("./news/news.component");
var show_news_component_1 = require("./show-news/show-news.component");
var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        core_1.NgModule({
            declarations: [
                add_news_component_1.AddNewsComponent,
                show_news_component_1.ShowNewsComponent,
                news_component_1.NewsComponent
            ],
            imports: [
                common_1.CommonModule,
                news_routing_module_1.NewsRoutingModule,
            ]
        })
    ], NewsModule);
    return NewsModule;
}());
exports.NewsModule = NewsModule;
