/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, Inject, NgZone, ElementRef, EventEmitter, ChangeDetectionStrategy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
import { SlidingDirection } from '../models/constants';
var GallerySliderComponent = /** @class */ (function () {
    function GallerySliderComponent(_el, _zone, platform) {
        var _this = this;
        this._el = _el;
        this._zone = _zone;
        this.platform = platform;
        /**
         * Sliding worker
         */
        this._slidingWorker$ = new BehaviorSubject({ value: 0, active: false });
        /**
         * Stream that emits when the active item should change
         */
        this.action = new EventEmitter();
        /**
         * Stream that emits when item is clicked
         */
        this.itemClick = new EventEmitter();
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(map(function (state) { return ({
            style: _this.getSliderStyles(state),
            active: state.active
        }); }));
    }
    Object.defineProperty(GallerySliderComponent.prototype, "zoom", {
        /** Item zoom */
        get: /**
         * Item zoom
         * @return {?}
         */
        function () {
            return { transform: "perspective(50px) translate3d(0, 0, " + -this.config.zoomOut + "px)" };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
    };
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.gestures && typeof Hammer !== 'undefined') {
            console.log('*********CONFIG***************');
            console.log({ config: this.config });
            /** @type {?} */
            var direction = this.config.slidingDirection === SlidingDirection.Horizontal
                ? Hammer.DIRECTION_HORIZONTAL
                : Hammer.DIRECTION_VERTICAL;
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction: direction });
            this._zone.runOutsideAngular(function () {
                // Move the slider
                _this._hammer.on('pan', function (e) {
                    switch (_this.config.slidingDirection) {
                        case SlidingDirection.Horizontal:
                            console.log('zone outside hammer on pan', { e: e });
                            _this.updateSlider({ value: e.deltaX, active: true });
                            if (e.isFinal) {
                                _this.updateSlider({ value: 0, active: false });
                                _this.horizontalPan(e);
                            }
                            break;
                        case SlidingDirection.Vertical:
                            _this.updateSlider({ value: e.deltaY, active: true });
                            if (e.isFinal) {
                                _this.updateSlider({ value: 0, active: false });
                                _this.verticalPan(e);
                            }
                    }
                });
            });
        }
        // Rearrange slider on window resize
        if (isPlatformBrowser(this.platform)) {
            this._resizeSub$ = fromEvent(window, 'resize').pipe(debounceTime(200), tap(function () { return _this.updateSlider(_this._slidingWorker$.value); })).subscribe();
        }
        setTimeout(function () { return _this.updateSlider({ value: 0, active: false }); });
    };
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
        if (this._resizeSub$) {
            this._resizeSub$.unsubscribe();
        }
        this._slidingWorker$.complete();
    };
    /**
     * Convert sliding state to styles
     */
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    GallerySliderComponent.prototype.getSliderStyles = /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        switch (this.config.slidingDirection) {
            case SlidingDirection.Horizontal:
                return {
                    transform: "translate3d(" + (-(this.state.currIndex * this._el.nativeElement.offsetWidth) + state.value) + "px, 0, 0)",
                    width: "calc(100% * " + this.state.items.length + ")",
                    height: '100%'
                };
            case SlidingDirection.Vertical:
                return {
                    transform: "translate3d(0, " + (-(this.state.currIndex * this._el.nativeElement.offsetHeight) + state.value) + "px, 0)",
                    width: '100%',
                    height: "calc(100% * " + this.state.items.length + ")",
                };
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GallerySliderComponent.prototype.verticalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GallerySliderComponent.prototype.horizontalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log({
            e: e,
            items: this.state.items,
            el: this._el,
            direction: e.direction,
            offsetDirection: e.offsetDirection,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
        });
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            debugger;
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    GallerySliderComponent.prototype.next = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('next');
    };
    /**
     * @private
     * @return {?}
     */
    GallerySliderComponent.prototype.prev = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('prev');
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    GallerySliderComponent.prototype.updateSlider = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var newState = tslib_1.__assign({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    };
    GallerySliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-slider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-items-container\"\n         [ngStyle]=\"zoom\">\n\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-item *ngFor=\"let item of state.items; let i = index\"\n                      [type]=\"item.type\"\n                      [config]=\"config\"\n                      [data]=\"item.data\"\n                      [currIndex]=\"state.currIndex\"\n                      [index]=\"i\"\n                      (tapClick)=\"itemClick.emit(i)\"\n                      (error)=\"error.emit({itemIndex: i, error: $event})\">\n        </gallery-item>\n\n      </div>\n    </div>\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    GallerySliderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    GallerySliderComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }],
        itemClick: [{ type: Output }],
        error: [{ type: Output }]
    };
    return GallerySliderComponent;
}());
export { GallerySliderComponent };
if (false) {
    /**
     * Sliding worker
     * @type {?}
     * @private
     */
    GallerySliderComponent.prototype._slidingWorker$;
    /**
     * HammerJS instance
     * @type {?}
     * @private
     */
    GallerySliderComponent.prototype._hammer;
    /**
     * Stream that emits when the view is re-sized
     * @type {?}
     * @private
     */
    GallerySliderComponent.prototype._resizeSub$;
    /**
     * Stream that emits sliding state
     * @type {?}
     */
    GallerySliderComponent.prototype.sliderState$;
    /**
     * Gallery state
     * @type {?}
     */
    GallerySliderComponent.prototype.state;
    /**
     * Gallery config
     * @type {?}
     */
    GallerySliderComponent.prototype.config;
    /**
     * Stream that emits when the active item should change
     * @type {?}
     */
    GallerySliderComponent.prototype.action;
    /**
     * Stream that emits when item is clicked
     * @type {?}
     */
    GallerySliderComponent.prototype.itemClick;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GallerySliderComponent.prototype.error;
    /**
     * @type {?}
     * @private
     */
    GallerySliderComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    GallerySliderComponent.prototype._zone;
    /**
     * @type {?}
     * @private
     */
    GallerySliderComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUNaLHVCQUF1QixFQUN2QixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZEO0lBNkRFLGdDQUFvQixHQUFlLEVBQVUsS0FBYSxFQUErQixRQUFnQjtRQUF6RyxpQkFNQztRQU5tQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUErQixhQUFRLEdBQVIsUUFBUSxDQUFROzs7O1FBL0J4RixvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFjLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7OztRQWtCckYsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBRzdDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR3ZDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQVFqRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFB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RFYsTUFBTTtnQkE0RTZGLE1BQU0sdUJBQTVDLE1BQU0sU0FBQyxXQUFXOzs7d0JBbkI5RSxLQUFLO3lCQUdMLEtBQUs7eUJBR0wsTUFBTTs0QkFHTixNQUFNO3dCQUdOLE1BQU07O0lBK0pULDZCQUFDO0NBQUEsQUFyTkQsSUFxTkM7U0ExTFksc0JBQXNCOzs7Ozs7O0lBR2pDLGlEQUErRjs7Ozs7O0lBRy9GLHlDQUFxQjs7Ozs7O0lBR3JCLDZDQUFrQzs7Ozs7SUFHbEMsOENBQXNDOzs7OztJQUd0Qyx1Q0FBNkI7Ozs7O0lBRzdCLHdDQUErQjs7Ozs7SUFHL0Isd0NBQXVEOzs7OztJQUd2RCwyQ0FBaUQ7Ozs7O0lBR2pELHVDQUFtRDs7Ozs7SUFPdkMscUNBQXVCOzs7OztJQUFFLHVDQUFxQjs7Ozs7SUFBRSwwQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEluamVjdCxcbiAgTmdab25lLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUsIEdhbGxlcnlFcnJvciB9IGZyb20gJy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7IFNsaWRpbmdEaXJlY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFNsaWRlclN0YXRlLCBXb3JrZXJTdGF0ZSB9IGZyb20gJy4uL21vZGVscy9zbGlkZXIubW9kZWwnO1xuXG5kZWNsYXJlIGNvbnN0IEhhbW1lcjogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1zbGlkZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwic2xpZGVyU3RhdGUkIHwgYXN5bmM7IGxldCBzbGlkZXJTdGF0ZVwiXG4gICAgICAgICBjbGFzcz1cImctaXRlbXMtY29udGFpbmVyXCJcbiAgICAgICAgIFtuZ1N0eWxlXT1cInpvb21cIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImctc2xpZGVyXCJcbiAgICAgICAgICAgW2NsYXNzLmctbm8tdHJhbnNpdGlvbl09XCJzbGlkZXJTdGF0ZS5hY3RpdmVcIlxuICAgICAgICAgICBbbmdTdHlsZV09XCJzbGlkZXJTdGF0ZS5zdHlsZVwiPlxuXG4gICAgICAgIDxnYWxsZXJ5LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3RhdGUuaXRlbXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cIml0ZW0udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIml0ZW0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2N1cnJJbmRleF09XCJzdGF0ZS5jdXJySW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAodGFwQ2xpY2spPVwiaXRlbUNsaWNrLmVtaXQoaSlcIlxuICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KHtpdGVtSW5kZXg6IGksIGVycm9yOiAkZXZlbnR9KVwiPlxuICAgICAgICA8L2dhbGxlcnktaXRlbT5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKiogU2xpZGluZyB3b3JrZXIgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc2xpZGluZ1dvcmtlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdvcmtlclN0YXRlPih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcblxuICAvKiogSGFtbWVySlMgaW5zdGFuY2UgKi9cbiAgcHJpdmF0ZSBfaGFtbWVyOiBhbnk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIHZpZXcgaXMgcmUtc2l6ZWQgKi9cbiAgcHJpdmF0ZSBfcmVzaXplU3ViJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBzbGlkaW5nIHN0YXRlICovXG4gIHNsaWRlclN0YXRlJDogT2JzZXJ2YWJsZTxTbGlkZXJTdGF0ZT47XG5cbiAgLyoqIEdhbGxlcnkgc3RhdGUgKi9cbiAgQElucHV0KCkgc3RhdGU6IEdhbGxlcnlTdGF0ZTtcblxuICAvKiogR2FsbGVyeSBjb25maWcgKi9cbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBhY3RpdmUgaXRlbSBzaG91bGQgY2hhbmdlICovXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBpdGVtIGlzIGNsaWNrZWQgKi9cbiAgQE91dHB1dCgpIGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGFuIGVycm9yIG9jY3VycyAqL1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEdhbGxlcnlFcnJvcj4oKTtcblxuICAvKiogSXRlbSB6b29tICovXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB7dHJhbnNmb3JtOiBgcGVyc3BlY3RpdmUoNTBweCkgdHJhbnNsYXRlM2QoMCwgMCwgJHstdGhpcy5jb25maWcuem9vbU91dH1weClgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF96b25lOiBOZ1pvbmUsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IE9iamVjdCkge1xuICAgIC8vIEFjdGl2YXRlIHNsaWRpbmcgd29ya2VyXG4gICAgdGhpcy5zbGlkZXJTdGF0ZSQgPSB0aGlzLl9zbGlkaW5nV29ya2VyJC5waXBlKG1hcCgoc3RhdGU6IFdvcmtlclN0YXRlKSA9PiAoe1xuICAgICAgc3R5bGU6IHRoaXMuZ2V0U2xpZGVyU3R5bGVzKHN0YXRlKSxcbiAgICAgIGFjdGl2ZTogc3RhdGUuYWN0aXZlXG4gICAgfSkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIC8vIFJlZnJlc2ggdGhlIHNsaWRlclxuICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmdlc3R1cmVzICYmIHR5cGVvZiBIYW1tZXIgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKipDT05GSUcqKioqKioqKioqKioqKionKVxuICAgICAgY29uc29sZS5sb2coe2NvbmZpZzogdGhpcy5jb25maWd9KVxuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmNvbmZpZy5zbGlkaW5nRGlyZWN0aW9uID09PSBTbGlkaW5nRGlyZWN0aW9uLkhvcml6b250YWxcbiAgICAgICAgPyBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUxcbiAgICAgICAgOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMO1xuXG4gICAgICAvLyBBY3RpdmF0ZSBnZXN0dXJlc1xuICAgICAgdGhpcy5faGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuX2hhbW1lci5nZXQoJ3BhbicpLnNldCh7ZGlyZWN0aW9ufSk7XG5cbiAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAvLyBNb3ZlIHRoZSBzbGlkZXJcbiAgICAgICAgdGhpcy5faGFtbWVyLm9uKCdwYW4nLCAoZSkgPT4ge1xuXG4gICAgICAgICAgc3dpdGNoICh0aGlzLmNvbmZpZy5zbGlkaW5nRGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFNsaWRpbmdEaXJlY3Rpb24uSG9yaXpvbnRhbDpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3pvbmUgb3V0c2lkZSBoYW1tZXIgb24gcGFuJyx7IGUgfSlcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiBlLmRlbHRhWCwgYWN0aXZlOiB0cnVlfSk7XG4gICAgICAgICAgICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxQYW4oZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNsaWRpbmdEaXJlY3Rpb24uVmVydGljYWw6XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogZS5kZWx0YVksIGFjdGl2ZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFBhbihlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZWFycmFuZ2Ugc2xpZGVyIG9uIHdpbmRvdyByZXNpemVcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YiQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLnVwZGF0ZVNsaWRlcih0aGlzLl9zbGlkaW5nV29ya2VyJC52YWx1ZSkpXG4gICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2hhbW1lcikge1xuICAgICAgdGhpcy5faGFtbWVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YiQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YiQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fc2xpZGluZ1dvcmtlciQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHNsaWRpbmcgc3RhdGUgdG8gc3R5bGVzXG4gICAqL1xuICBwcml2YXRlIGdldFNsaWRlclN0eWxlcyhzdGF0ZTogV29ya2VyU3RhdGUpOiBhbnkge1xuICAgIHN3aXRjaCAodGhpcy5jb25maWcuc2xpZGluZ0RpcmVjdGlvbikge1xuICAgICAgY2FzZSBTbGlkaW5nRGlyZWN0aW9uLkhvcml6b250YWw6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHstKHRoaXMuc3RhdGUuY3VyckluZGV4ICogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkgKyBzdGF0ZS52YWx1ZX1weCwgMCwgMClgLFxuICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICogJHt0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aH0pYCxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuICAgICAgY2FzZSBTbGlkaW5nRGlyZWN0aW9uLlZlcnRpY2FsOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDAsICR7LSh0aGlzLnN0YXRlLmN1cnJJbmRleCAqIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArIHN0YXRlLnZhbHVlfXB4LCAwKWAsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgKiAke3RoaXMuc3RhdGUuaXRlbXMubGVuZ3RofSlgLFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmVydGljYWxQYW4oZSkge1xuICAgIGlmICghKGUuZGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9VUCAmJiBlLm9mZnNldERpcmVjdGlvbiAmIEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLnZlbG9jaXR5WSA+IDAuMykge1xuICAgICAgdGhpcy5wcmV2KCk7XG4gICAgfSBlbHNlIGlmIChlLnZlbG9jaXR5WSA8IC0wLjMpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS5kZWx0YVkgLyAyIDw9IC10aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZIC8gMiA+PSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KHRoaXMuc3RhdGUuY3VyckluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhvcml6b250YWxQYW4oZSkge1xuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIGUsXG4gICAgICBpdGVtczogdGhpcy5zdGF0ZS5pdGVtcyxcbiAgICAgIGVsOiB0aGlzLl9lbCxcbiAgICAgIGRpcmVjdGlvbjogZS5kaXJlY3Rpb24sXG4gICAgICBvZmZzZXREaXJlY3Rpb246IGUub2Zmc2V0RGlyZWN0aW9uLFxuICAgICAgdmVsb2NpdHlYOiBlLnZlbG9jaXR5WCxcbiAgICAgIHZlbG9jaXR5WTogZS52ZWxvY2l0eVksXG4gICAgfSlcbiAgICBpZiAoIShlLmRpcmVjdGlvbiAmIEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTCAmJiBlLm9mZnNldERpcmVjdGlvbiAmIEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTCkpIHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS52ZWxvY2l0eVggPiAwLjMpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH0gZWxzZSBpZiAoZS52ZWxvY2l0eVggPCAtMC4zKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUuZGVsdGFYIC8gMiA8PSAtdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFYIC8gMiA+PSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICogdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLyB0aGlzLmNvbmZpZy5wYW5TZW5zaXRpdml0eSkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmVtaXQodGhpcy5zdGF0ZS5jdXJySW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICB0aGlzLmFjdGlvbi5lbWl0KCduZXh0Jyk7XG4gIH1cblxuICBwcml2YXRlIHByZXYoKSB7XG4gICAgdGhpcy5hY3Rpb24uZW1pdCgncHJldicpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTbGlkZXIoc3RhdGU6IFdvcmtlclN0YXRlKSB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFdvcmtlclN0YXRlID0gey4uLnRoaXMuX3NsaWRpbmdXb3JrZXIkLnZhbHVlLCAuLi5zdGF0ZX07XG4gICAgdGhpcy5fc2xpZGluZ1dvcmtlciQubmV4dChuZXdTdGF0ZSk7XG4gIH1cbn1cbiJdfQ==