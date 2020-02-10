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
            console.log('WRONG DIRECTION', e.direction, e.offsetDirection);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUNaLHVCQUF1QixFQUN2QixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZEO0lBNkRFLGdDQUFvQixHQUFlLEVBQVUsS0FBYSxFQUErQixRQUFnQjtRQUF6RyxpQkFNQztRQU5tQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUErQixhQUFRLEdBQVIsUUFBUSxDQUFROzs7O1FBL0J4RixvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFjLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7OztRQWtCckYsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBRzdDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR3ZDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQVFqRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFB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RSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsaXhCQXNCVDtpQkFDRjs7OztnQkF4Q0MsVUFBVTtnQkFEVixNQUFNO2dCQTRFNkYsTUFBTSx1QkFBNUMsTUFBTSxTQUFDLFdBQVc7Ozt3QkFuQjlFLEtBQUs7eUJBR0wsS0FBSzt5QkFHTCxNQUFNOzRCQUdOLE1BQU07d0JBR04sTUFBTTs7SUErSlQsNkJBQUM7Q0FBQSxBQXJORCxJQXFOQztTQTFMWSxzQkFBc0I7Ozs7Ozs7SUFHakMsaURBQStGOzs7Ozs7SUFHL0YseUNBQXFCOzs7Ozs7SUFHckIsNkNBQWtDOzs7OztJQUdsQyw4Q0FBc0M7Ozs7O0lBR3RDLHVDQUE2Qjs7Ozs7SUFHN0Isd0NBQStCOzs7OztJQUcvQix3Q0FBdUQ7Ozs7O0lBR3ZELDJDQUFpRDs7Ozs7SUFHakQsdUNBQW1EOzs7OztJQU92QyxxQ0FBdUI7Ozs7O0lBQUUsdUNBQXFCOzs7OztJQUFFLDBDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBOZ1pvbmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdhbGxlcnlTdGF0ZSwgR2FsbGVyeUVycm9yIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgU2xpZGluZ0RpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2xpZGVyU3RhdGUsIFdvcmtlclN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL3NsaWRlci5tb2RlbCc7XG5cbmRlY2xhcmUgY29uc3QgSGFtbWVyOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LXNsaWRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJzbGlkZXJTdGF0ZSQgfCBhc3luYzsgbGV0IHNsaWRlclN0YXRlXCJcbiAgICAgICAgIGNsYXNzPVwiZy1pdGVtcy1jb250YWluZXJcIlxuICAgICAgICAgW25nU3R5bGVdPVwiem9vbVwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZy1zbGlkZXJcIlxuICAgICAgICAgICBbY2xhc3MuZy1uby10cmFuc2l0aW9uXT1cInNsaWRlclN0YXRlLmFjdGl2ZVwiXG4gICAgICAgICAgIFtuZ1N0eWxlXT1cInNsaWRlclN0YXRlLnN0eWxlXCI+XG5cbiAgICAgICAgPGdhbGxlcnktaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGF0ZS5pdGVtczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaXRlbS50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiaXRlbS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY3VyckluZGV4XT1cInN0YXRlLmN1cnJJbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICh0YXBDbGljayk9XCJpdGVtQ2xpY2suZW1pdChpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoe2l0ZW1JbmRleDogaSwgZXJyb3I6ICRldmVudH0pXCI+XG4gICAgICAgIDwvZ2FsbGVyeS1pdGVtPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeVNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIC8qKiBTbGlkaW5nIHdvcmtlciAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9zbGlkaW5nV29ya2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8V29ya2VyU3RhdGU+KHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pO1xuXG4gIC8qKiBIYW1tZXJKUyBpbnN0YW5jZSAqL1xuICBwcml2YXRlIF9oYW1tZXI6IGFueTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiB0aGUgdmlldyBpcyByZS1zaXplZCAqL1xuICBwcml2YXRlIF9yZXNpemVTdWIkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHNsaWRpbmcgc3RhdGUgKi9cbiAgc2xpZGVyU3RhdGUkOiBPYnNlcnZhYmxlPFNsaWRlclN0YXRlPjtcblxuICAvKiogR2FsbGVyeSBzdGF0ZSAqL1xuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xuXG4gIC8qKiBHYWxsZXJ5IGNvbmZpZyAqL1xuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIGFjdGl2ZSBpdGVtIHNob3VsZCBjaGFuZ2UgKi9cbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGl0ZW0gaXMgY2xpY2tlZCAqL1xuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gYW4gZXJyb3Igb2NjdXJzICovXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeUVycm9yPigpO1xuXG4gIC8qKiBJdGVtIHpvb20gKi9cbiAgZ2V0IHpvb20oKSB7XG4gICAgcmV0dXJuIHt0cmFuc2Zvcm06IGBwZXJzcGVjdGl2ZSg1MHB4KSB0cmFuc2xhdGUzZCgwLCAwLCAkey10aGlzLmNvbmZpZy56b29tT3V0fXB4KWB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogT2JqZWN0KSB7XG4gICAgLy8gQWN0aXZhdGUgc2xpZGluZyB3b3JrZXJcbiAgICB0aGlzLnNsaWRlclN0YXRlJCA9IHRoaXMuX3NsaWRpbmdXb3JrZXIkLnBpcGUobWFwKChzdGF0ZTogV29ya2VyU3RhdGUpID0+ICh7XG4gICAgICBzdHlsZTogdGhpcy5nZXRTbGlkZXJTdHlsZXMoc3RhdGUpLFxuICAgICAgYWN0aXZlOiBzdGF0ZS5hY3RpdmVcbiAgICB9KSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLy8gUmVmcmVzaCB0aGUgc2xpZGVyXG4gICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZ2VzdHVyZXMgJiYgdHlwZW9mIEhhbW1lciAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKkNPTkZJRyoqKioqKioqKioqKioqKicpXG4gICAgICBjb25zb2xlLmxvZyh7Y29uZmlnOiB0aGlzLmNvbmZpZ30pXG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb24gPT09IFNsaWRpbmdEaXJlY3Rpb24uSG9yaXpvbnRhbFxuICAgICAgICA/IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTFxuICAgICAgICA6IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUw7XG5cbiAgICAgIC8vIEFjdGl2YXRlIGdlc3R1cmVzXG4gICAgICB0aGlzLl9oYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5faGFtbWVyLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb259KTtcblxuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIC8vIE1vdmUgdGhlIHNsaWRlclxuICAgICAgICB0aGlzLl9oYW1tZXIub24oJ3BhbicsIChlKSA9PiB7XG5cbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgU2xpZGluZ0RpcmVjdGlvbi5Ib3Jpem9udGFsOlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnem9uZSBvdXRzaWRlIGhhbW1lciBvbiBwYW4nLHsgZSB9KVxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IGUuZGVsdGFYLCBhY3RpdmU6IHRydWV9KTtcbiAgICAgICAgICAgICAgaWYgKGUuaXNGaW5hbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFBhbihlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2xpZGluZ0RpcmVjdGlvbi5WZXJ0aWNhbDpcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiBlLmRlbHRhWSwgYWN0aXZlOiB0cnVlfSk7XG4gICAgICAgICAgICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsUGFuKGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlYXJyYW5nZSBzbGlkZXIgb24gd2luZG93IHJlc2l6ZVxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgdGhpcy5fcmVzaXplU3ViJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgICAgdGFwKCgpID0+IHRoaXMudXBkYXRlU2xpZGVyKHRoaXMuX3NsaWRpbmdXb3JrZXIkLnZhbHVlKSlcbiAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5faGFtbWVyKSB7XG4gICAgICB0aGlzLl9oYW1tZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzaXplU3ViJCkge1xuICAgICAgdGhpcy5fcmVzaXplU3ViJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl9zbGlkaW5nV29ya2VyJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc2xpZGluZyBzdGF0ZSB0byBzdHlsZXNcbiAgICovXG4gIHByaXZhdGUgZ2V0U2xpZGVyU3R5bGVzKHN0YXRlOiBXb3JrZXJTdGF0ZSk6IGFueSB7XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy5zbGlkaW5nRGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIFNsaWRpbmdEaXJlY3Rpb24uSG9yaXpvbnRhbDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgkey0odGhpcy5zdGF0ZS5jdXJySW5kZXggKiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSArIHN0YXRlLnZhbHVlfXB4LCAwLCAwKWAsXG4gICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKiAke3RoaXMuc3RhdGUuaXRlbXMubGVuZ3RofSlgLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG4gICAgICBjYXNlIFNsaWRpbmdEaXJlY3Rpb24uVmVydGljYWw6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoMCwgJHstKHRoaXMuc3RhdGUuY3VyckluZGV4ICogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpICsgc3RhdGUudmFsdWV9cHgsIDApYCxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAqICR7dGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGh9KWAsXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2ZXJ0aWNhbFBhbihlKSB7XG4gICAgaWYgKCEoZS5kaXJlY3Rpb24gJiBIYW1tZXIuRElSRUNUSU9OX1VQICYmIGUub2Zmc2V0RGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUudmVsb2NpdHlZID4gMC4zKSB7XG4gICAgICB0aGlzLnByZXYoKTtcbiAgICB9IGVsc2UgaWYgKGUudmVsb2NpdHlZIDwgLTAuMykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLmRlbHRhWSAvIDIgPD0gLXRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLyB0aGlzLmNvbmZpZy5wYW5TZW5zaXRpdml0eSkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgLyAyID49IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLyB0aGlzLmNvbmZpZy5wYW5TZW5zaXRpdml0eSkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmVtaXQodGhpcy5zdGF0ZS5jdXJySW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaG9yaXpvbnRhbFBhbihlKSB7XG4gICAgY29uc29sZS5sb2coe1xuICAgICAgZSxcbiAgICAgIGl0ZW1zOiB0aGlzLnN0YXRlLml0ZW1zLFxuICAgICAgZWw6IHRoaXMuX2VsLFxuICAgICAgZGlyZWN0aW9uOiBlLmRpcmVjdGlvbixcbiAgICAgIG9mZnNldERpcmVjdGlvbjogZS5vZmZzZXREaXJlY3Rpb24sXG4gICAgICB2ZWxvY2l0eVg6IGUudmVsb2NpdHlYLFxuICAgICAgdmVsb2NpdHlZOiBlLnZlbG9jaXR5WSxcbiAgICB9KVxuICAgIGlmICghKGUuZGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMICYmIGUub2Zmc2V0RGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMKSkge1xuICAgICAgY29uc29sZS5sb2coJ1dST05HIERJUkVDVElPTicsIGUuZGlyZWN0aW9uLCBlLm9mZnNldERpcmVjdGlvbilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUudmVsb2NpdHlYID4gMC4zKSB7XG4gICAgICB0aGlzLnByZXYoKTtcbiAgICB9IGVsc2UgaWYgKGUudmVsb2NpdHlYIDwgLTAuMykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLmRlbHRhWCAvIDIgPD0gLXRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWCAvIDIgPj0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KHRoaXMuc3RhdGUuY3VyckluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgdGhpcy5hY3Rpb24uZW1pdCgnbmV4dCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2KCkge1xuICAgIHRoaXMuYWN0aW9uLmVtaXQoJ3ByZXYnKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2xpZGVyKHN0YXRlOiBXb3JrZXJTdGF0ZSkge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBXb3JrZXJTdGF0ZSA9IHsuLi50aGlzLl9zbGlkaW5nV29ya2VyJC52YWx1ZSwgLi4uc3RhdGV9O1xuICAgIHRoaXMuX3NsaWRpbmdXb3JrZXIkLm5leHQobmV3U3RhdGUpO1xuICB9XG59XG4iXX0=