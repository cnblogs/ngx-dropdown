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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropdownNotClosableZoneDirective = /** @class */ (function () {
    function DropdownNotClosableZoneDirective(elementRef) {
        this.elementRef = elementRef;
    }
    DropdownNotClosableZoneDirective.prototype.contains = function (element) {
        if (this.dropdownNotClosabledZone === false) {
            return false;
        }
        var thisElement = this.elementRef.nativeElement;
        return thisElement.contains(element);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownNotClosableZoneDirective.prototype, "dropdownNotClosabledZone", void 0);
    DropdownNotClosableZoneDirective = __decorate([
        core_1.Directive({
            selector: '[appDropdownNotClosableZone]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DropdownNotClosableZoneDirective);
    return DropdownNotClosableZoneDirective;
}());
exports.DropdownNotClosableZoneDirective = DropdownNotClosableZoneDirective;
//# sourceMappingURL=DropdownNotClosableZone.js.map