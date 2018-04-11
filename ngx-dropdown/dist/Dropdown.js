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
var DropdownNotClosableZone_1 = require("./DropdownNotClosableZone");
var DropdownDirective = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function DropdownDirective(elementRef) {
        this.elementRef = elementRef;
        // -------------------------------------------------------------------------
        // Inputs / Outputs
        // -------------------------------------------------------------------------
        this.toggleClick = true;
        this.activateOnFocus = false;
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    DropdownDirective.prototype.open = function () {
        var element = this.elementRef.nativeElement;
        element.classList.add('open');
        this.onOpen.emit(undefined);
    };
    DropdownDirective.prototype.close = function () {
        var element = this.elementRef.nativeElement;
        element.classList.remove('open');
        this.onClose.emit(undefined);
    };
    DropdownDirective.prototype.isOpened = function () {
        var element = this.elementRef.nativeElement;
        return element.classList.contains('open');
    };
    DropdownDirective.prototype.isInClosableZone = function (element) {
        if (!this.notClosableZone) {
            return false;
        }
        return this.notClosableZone.contains(element);
    };
    __decorate([
        core_1.Input('dropdownToggle'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "toggleClick", void 0);
    __decorate([
        core_1.Input('dropdownFocusActivate'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "activateOnFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onOpen", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onClose", void 0);
    __decorate([
        core_1.ContentChild(DropdownNotClosableZone_1.DropdownNotClosableZoneDirective),
        __metadata("design:type", DropdownNotClosableZone_1.DropdownNotClosableZoneDirective)
    ], DropdownDirective.prototype, "notClosableZone", void 0);
    DropdownDirective = __decorate([
        core_1.Directive({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DropdownDirective);
    return DropdownDirective;
}());
exports.DropdownDirective = DropdownDirective;
//# sourceMappingURL=Dropdown.js.map