/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, Inject, NgZone, ElementRef, EventEmitter, ChangeDetectionStrategy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
import { SlidingDirection } from '../models/constants';
export class GallerySliderComponent {
    /**
     * @param {?} _el
     * @param {?} _zone
     * @param {?} platform
     */
    constructor(_el, _zone, platform) {
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
        this.sliderState$ = this._slidingWorker$.pipe(map((state) => ({
            style: this.getSliderStyles(state),
            active: state.active
        })));
    }
    /**
     * Item zoom
     * @return {?}
     */
    get zoom() {
        return { transform: `perspective(50px) translate3d(0, 0, ${-this.config.zoomOut}px)` };
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.gestures && typeof Hammer !== 'undefined') {
            console.log('*********CONFIG***************');
            console.log({ config: this.config });
            /** @type {?} */
            const direction = this.config.slidingDirection === SlidingDirection.Horizontal
                ? Hammer.DIRECTION_HORIZONTAL
                : Hammer.DIRECTION_VERTICAL;
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction });
            console.log('hammer', { hammer: this._hammer });
            this._zone.runOutsideAngular(() => {
                // Move the slider
                this._hammer.on('pan', (e) => {
                    switch (this.config.slidingDirection) {
                        case SlidingDirection.Horizontal:
                            console.log('zone outside hammer on pan', { e });
                            this.updateSlider({ value: e.deltaX, active: true });
                            if (e.isFinal) {
                                this.updateSlider({ value: 0, active: false });
                                this.horizontalPan(e);
                            }
                            break;
                        case SlidingDirection.Vertical:
                            this.updateSlider({ value: e.deltaY, active: true });
                            if (e.isFinal) {
                                this.updateSlider({ value: 0, active: false });
                                this.verticalPan(e);
                            }
                    }
                });
            });
        }
        // Rearrange slider on window resize
        if (isPlatformBrowser(this.platform)) {
            this._resizeSub$ = fromEvent(window, 'resize').pipe(debounceTime(200), tap(() => this.updateSlider(this._slidingWorker$.value))).subscribe();
        }
        setTimeout(() => this.updateSlider({ value: 0, active: false }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.destroy();
        }
        if (this._resizeSub$) {
            this._resizeSub$.unsubscribe();
        }
        this._slidingWorker$.complete();
    }
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    getSliderStyles(state) {
        switch (this.config.slidingDirection) {
            case SlidingDirection.Horizontal:
                return {
                    transform: `translate3d(${-(this.state.currIndex * this._el.nativeElement.offsetWidth) + state.value}px, 0, 0)`,
                    width: `calc(100% * ${this.state.items.length})`,
                    height: '100%'
                };
            case SlidingDirection.Vertical:
                return {
                    transform: `translate3d(0, ${-(this.state.currIndex * this._el.nativeElement.offsetHeight) + state.value}px, 0)`,
                    width: '100%',
                    height: `calc(100% * ${this.state.items.length})`,
                };
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    verticalPan(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    horizontalPan(e) {
        console.log({
            e,
            items: this.state.items,
            el: this._el,
            offsetWidth: this._el.nativeElement.offsetWidth,
            classList: this._el.nativeElement.classList
        });
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
    }
    /**
     * @private
     * @return {?}
     */
    next() {
        this.action.emit('next');
    }
    /**
     * @private
     * @return {?}
     */
    prev() {
        this.action.emit('prev');
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    updateSlider(state) {
        /** @type {?} */
        const newState = Object.assign({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    }
}
GallerySliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-slider',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div *ngIf="sliderState$ | async; let sliderState"
         class="g-items-container"
         [ngStyle]="zoom">

      <div class="g-slider"
           [class.g-no-transition]="sliderState.active"
           [ngStyle]="sliderState.style">

        <gallery-item *ngFor="let item of state.items; let i = index"
                      [type]="item.type"
                      [config]="config"
                      [data]="item.data"
                      [currIndex]="state.currIndex"
                      [index]="i"
                      (tapClick)="itemClick.emit(i)"
                      (error)="error.emit({itemIndex: i, error: $event})">
        </gallery-item>

      </div>
    </div>
    <ng-content></ng-content>
  `
            }] }
];
/** @nocollapse */
GallerySliderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
GallerySliderComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }],
    action: [{ type: Output }],
    itemClick: [{ type: Output }],
    error: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sTUFBTSxFQUNOLFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUErQnZELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQWtDakMsWUFBb0IsR0FBZSxFQUFVLEtBQWEsRUFBK0IsUUFBZ0I7UUFBckYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBK0IsYUFBUSxHQUFSLFFBQVEsQ0FBUTs7OztRQS9CeEYsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBYyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7Ozs7UUFrQnJGLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7OztRQUc3QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQzs7OztRQUd2QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFRakQsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFB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Qix3Q0FBdUQ7Ozs7O0lBR3ZELDJDQUFpRDs7Ozs7SUFHakQsdUNBQW1EOzs7OztJQU92QyxxQ0FBdUI7Ozs7O0lBQUUsdUNBQXFCOzs7OztJQUFFLDBDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBOZ1pvbmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdhbGxlcnlTdGF0ZSwgR2FsbGVyeUVycm9yIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgU2xpZGluZ0RpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2xpZGVyU3RhdGUsIFdvcmtlclN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL3NsaWRlci5tb2RlbCc7XG5cbmRlY2xhcmUgY29uc3QgSGFtbWVyOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LXNsaWRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJzbGlkZXJTdGF0ZSQgfCBhc3luYzsgbGV0IHNsaWRlclN0YXRlXCJcbiAgICAgICAgIGNsYXNzPVwiZy1pdGVtcy1jb250YWluZXJcIlxuICAgICAgICAgW25nU3R5bGVdPVwiem9vbVwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZy1zbGlkZXJcIlxuICAgICAgICAgICBbY2xhc3MuZy1uby10cmFuc2l0aW9uXT1cInNsaWRlclN0YXRlLmFjdGl2ZVwiXG4gICAgICAgICAgIFtuZ1N0eWxlXT1cInNsaWRlclN0YXRlLnN0eWxlXCI+XG5cbiAgICAgICAgPGdhbGxlcnktaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGF0ZS5pdGVtczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaXRlbS50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiaXRlbS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY3VyckluZGV4XT1cInN0YXRlLmN1cnJJbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICh0YXBDbGljayk9XCJpdGVtQ2xpY2suZW1pdChpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoe2l0ZW1JbmRleDogaSwgZXJyb3I6ICRldmVudH0pXCI+XG4gICAgICAgIDwvZ2FsbGVyeS1pdGVtPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeVNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIC8qKiBTbGlkaW5nIHdvcmtlciAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9zbGlkaW5nV29ya2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8V29ya2VyU3RhdGU+KHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pO1xuXG4gIC8qKiBIYW1tZXJKUyBpbnN0YW5jZSAqL1xuICBwcml2YXRlIF9oYW1tZXI6IGFueTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiB0aGUgdmlldyBpcyByZS1zaXplZCAqL1xuICBwcml2YXRlIF9yZXNpemVTdWIkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHNsaWRpbmcgc3RhdGUgKi9cbiAgc2xpZGVyU3RhdGUkOiBPYnNlcnZhYmxlPFNsaWRlclN0YXRlPjtcblxuICAvKiogR2FsbGVyeSBzdGF0ZSAqL1xuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xuXG4gIC8qKiBHYWxsZXJ5IGNvbmZpZyAqL1xuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIGFjdGl2ZSBpdGVtIHNob3VsZCBjaGFuZ2UgKi9cbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGl0ZW0gaXMgY2xpY2tlZCAqL1xuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gYW4gZXJyb3Igb2NjdXJzICovXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeUVycm9yPigpO1xuXG4gIC8qKiBJdGVtIHpvb20gKi9cbiAgZ2V0IHpvb20oKSB7XG4gICAgcmV0dXJuIHt0cmFuc2Zvcm06IGBwZXJzcGVjdGl2ZSg1MHB4KSB0cmFuc2xhdGUzZCgwLCAwLCAkey10aGlzLmNvbmZpZy56b29tT3V0fXB4KWB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogT2JqZWN0KSB7XG4gICAgLy8gQWN0aXZhdGUgc2xpZGluZyB3b3JrZXJcbiAgICB0aGlzLnNsaWRlclN0YXRlJCA9IHRoaXMuX3NsaWRpbmdXb3JrZXIkLnBpcGUobWFwKChzdGF0ZTogV29ya2VyU3RhdGUpID0+ICh7XG4gICAgICBzdHlsZTogdGhpcy5nZXRTbGlkZXJTdHlsZXMoc3RhdGUpLFxuICAgICAgYWN0aXZlOiBzdGF0ZS5hY3RpdmVcbiAgICB9KSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLy8gUmVmcmVzaCB0aGUgc2xpZGVyXG4gICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZ2VzdHVyZXMgJiYgdHlwZW9mIEhhbW1lciAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKkNPTkZJRyoqKioqKioqKioqKioqKicpXG4gICAgICBjb25zb2xlLmxvZyh7Y29uZmlnOiB0aGlzLmNvbmZpZ30pXG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb24gPT09IFNsaWRpbmdEaXJlY3Rpb24uSG9yaXpvbnRhbFxuICAgICAgICA/IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTFxuICAgICAgICA6IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUw7XG5cbiAgICAgIC8vIEFjdGl2YXRlIGdlc3R1cmVzXG4gICAgICB0aGlzLl9oYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5faGFtbWVyLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb259KTtcblxuICAgICAgY29uc29sZS5sb2coJ2hhbW1lcicsIHtoYW1tZXI6IHRoaXMuX2hhbW1lcn0pXG5cbiAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAvLyBNb3ZlIHRoZSBzbGlkZXJcbiAgICAgICAgdGhpcy5faGFtbWVyLm9uKCdwYW4nLCAoZSkgPT4ge1xuXG4gICAgICAgICAgc3dpdGNoICh0aGlzLmNvbmZpZy5zbGlkaW5nRGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFNsaWRpbmdEaXJlY3Rpb24uSG9yaXpvbnRhbDpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3pvbmUgb3V0c2lkZSBoYW1tZXIgb24gcGFuJyx7IGUgfSlcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiBlLmRlbHRhWCwgYWN0aXZlOiB0cnVlfSk7XG4gICAgICAgICAgICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxQYW4oZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNsaWRpbmdEaXJlY3Rpb24uVmVydGljYWw6XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogZS5kZWx0YVksIGFjdGl2ZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFBhbihlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZWFycmFuZ2Ugc2xpZGVyIG9uIHdpbmRvdyByZXNpemVcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YiQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLnVwZGF0ZVNsaWRlcih0aGlzLl9zbGlkaW5nV29ya2VyJC52YWx1ZSkpXG4gICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2hhbW1lcikge1xuICAgICAgdGhpcy5faGFtbWVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YiQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVN1YiQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fc2xpZGluZ1dvcmtlciQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHNsaWRpbmcgc3RhdGUgdG8gc3R5bGVzXG4gICAqL1xuICBwcml2YXRlIGdldFNsaWRlclN0eWxlcyhzdGF0ZTogV29ya2VyU3RhdGUpOiBhbnkge1xuICAgIHN3aXRjaCAodGhpcy5jb25maWcuc2xpZGluZ0RpcmVjdGlvbikge1xuICAgICAgY2FzZSBTbGlkaW5nRGlyZWN0aW9uLkhvcml6b250YWw6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHstKHRoaXMuc3RhdGUuY3VyckluZGV4ICogdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkgKyBzdGF0ZS52YWx1ZX1weCwgMCwgMClgLFxuICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICogJHt0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aH0pYCxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuICAgICAgY2FzZSBTbGlkaW5nRGlyZWN0aW9uLlZlcnRpY2FsOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDAsICR7LSh0aGlzLnN0YXRlLmN1cnJJbmRleCAqIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArIHN0YXRlLnZhbHVlfXB4LCAwKWAsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgKiAke3RoaXMuc3RhdGUuaXRlbXMubGVuZ3RofSlgLFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmVydGljYWxQYW4oZSkge1xuICAgIGlmICghKGUuZGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9VUCAmJiBlLm9mZnNldERpcmVjdGlvbiAmIEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLnZlbG9jaXR5WSA+IDAuMykge1xuICAgICAgdGhpcy5wcmV2KCk7XG4gICAgfSBlbHNlIGlmIChlLnZlbG9jaXR5WSA8IC0wLjMpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS5kZWx0YVkgLyAyIDw9IC10aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZIC8gMiA+PSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KHRoaXMuc3RhdGUuY3VyckluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhvcml6b250YWxQYW4oZSkge1xuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIGUsXG4gICAgICBpdGVtczogdGhpcy5zdGF0ZS5pdGVtcyxcbiAgICAgIGVsOiB0aGlzLl9lbCxcbiAgICAgIG9mZnNldFdpZHRoOiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgY2xhc3NMaXN0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFxuICAgIH0pXG4gICAgaWYgKGUudmVsb2NpdHlYID4gMC4zKSB7XG4gICAgICB0aGlzLnByZXYoKTtcbiAgICB9IGVsc2UgaWYgKGUudmVsb2NpdHlYIDwgLTAuMykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLmRlbHRhWCAvIDIgPD0gLXRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWCAvIDIgPj0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KHRoaXMuc3RhdGUuY3VyckluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgdGhpcy5hY3Rpb24uZW1pdCgnbmV4dCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2KCkge1xuICAgIHRoaXMuYWN0aW9uLmVtaXQoJ3ByZXYnKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2xpZGVyKHN0YXRlOiBXb3JrZXJTdGF0ZSkge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBXb3JrZXJTdGF0ZSA9IHsuLi50aGlzLl9zbGlkaW5nV29ya2VyJC52YWx1ZSwgLi4uc3RhdGV9O1xuICAgIHRoaXMuX3NsaWRpbmdXb3JrZXIkLm5leHQobmV3U3RhdGUpO1xuICB9XG59XG4iXX0=