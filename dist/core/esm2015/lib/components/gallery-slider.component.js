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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sTUFBTSxFQUNOLFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUErQnZELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQWtDakMsWUFBb0IsR0FBZSxFQUFVLEtBQWEsRUFBK0IsUUFBZ0I7UUFBckYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBK0IsYUFBUSxHQUFSLFFBQVEsQ0FBUTs7OztRQS9CeEYsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBYyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7Ozs7UUFrQnJGLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7OztRQUc3QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQzs7OztRQUd2QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFRakQsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFB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O3FCQUdMLE1BQU07d0JBR04sTUFBTTtvQkFHTixNQUFNOzs7Ozs7OztJQXhCUCxpREFBK0Y7Ozs7OztJQUcvRix5Q0FBcUI7Ozs7OztJQUdyQiw2Q0FBa0M7Ozs7O0lBR2xDLDhDQUFzQzs7Ozs7SUFHdEMsdUNBQTZCOzs7OztJQUc3Qix3Q0FBK0I7Ozs7O0lBRy9CLHdDQUF1RDs7Ozs7SUFHdkQsMkNBQWlEOzs7OztJQUdqRCx1Q0FBbUQ7Ozs7O0lBT3ZDLHFDQUF1Qjs7Ozs7SUFBRSx1Q0FBcUI7Ozs7O0lBQUUsMENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbmplY3QsXG4gIE5nWm9uZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2FsbGVyeVN0YXRlLCBHYWxsZXJ5RXJyb3IgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBTbGlkaW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTbGlkZXJTdGF0ZSwgV29ya2VyU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvc2xpZGVyLm1vZGVsJztcblxuZGVjbGFyZSBjb25zdCBIYW1tZXI6IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktc2xpZGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cInNsaWRlclN0YXRlJCB8IGFzeW5jOyBsZXQgc2xpZGVyU3RhdGVcIlxuICAgICAgICAgY2xhc3M9XCJnLWl0ZW1zLWNvbnRhaW5lclwiXG4gICAgICAgICBbbmdTdHlsZV09XCJ6b29tXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnLXNsaWRlclwiXG4gICAgICAgICAgIFtjbGFzcy5nLW5vLXRyYW5zaXRpb25dPVwic2xpZGVyU3RhdGUuYWN0aXZlXCJcbiAgICAgICAgICAgW25nU3R5bGVdPVwic2xpZGVyU3RhdGUuc3R5bGVcIj5cblxuICAgICAgICA8Z2FsbGVyeS1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN0YXRlLml0ZW1zOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJpdGVtLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJpdGVtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjdXJySW5kZXhdPVwic3RhdGUuY3VyckluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHRhcENsaWNrKT1cIml0ZW1DbGljay5lbWl0KGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPVwiZXJyb3IuZW1pdCh7aXRlbUluZGV4OiBpLCBlcnJvcjogJGV2ZW50fSlcIj5cbiAgICAgICAgPC9nYWxsZXJ5LWl0ZW0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5U2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLyoqIFNsaWRpbmcgd29ya2VyICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3NsaWRpbmdXb3JrZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxXb3JrZXJTdGF0ZT4oe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG5cbiAgLyoqIEhhbW1lckpTIGluc3RhbmNlICovXG4gIHByaXZhdGUgX2hhbW1lcjogYW55O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSB2aWV3IGlzIHJlLXNpemVkICovXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YiQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgc2xpZGluZyBzdGF0ZSAqL1xuICBzbGlkZXJTdGF0ZSQ6IE9ic2VydmFibGU8U2xpZGVyU3RhdGU+O1xuXG4gIC8qKiBHYWxsZXJ5IHN0YXRlICovXG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XG5cbiAgLyoqIEdhbGxlcnkgY29uZmlnICovXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiB0aGUgYWN0aXZlIGl0ZW0gc2hvdWxkIGNoYW5nZSAqL1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gaXRlbSBpcyBjbGlja2VkICovXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxHYWxsZXJ5RXJyb3I+KCk7XG5cbiAgLyoqIEl0ZW0gem9vbSAqL1xuICBnZXQgem9vbSgpIHtcbiAgICByZXR1cm4ge3RyYW5zZm9ybTogYHBlcnNwZWN0aXZlKDUwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsICR7LXRoaXMuY29uZmlnLnpvb21PdXR9cHgpYH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfem9uZTogTmdab25lLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtOiBPYmplY3QpIHtcbiAgICAvLyBBY3RpdmF0ZSBzbGlkaW5nIHdvcmtlclxuICAgIHRoaXMuc2xpZGVyU3RhdGUkID0gdGhpcy5fc2xpZGluZ1dvcmtlciQucGlwZShtYXAoKHN0YXRlOiBXb3JrZXJTdGF0ZSkgPT4gKHtcbiAgICAgIHN0eWxlOiB0aGlzLmdldFNsaWRlclN0eWxlcyhzdGF0ZSksXG4gICAgICBhY3RpdmU6IHN0YXRlLmFjdGl2ZVxuICAgIH0pKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICAvLyBSZWZyZXNoIHRoZSBzbGlkZXJcbiAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5nZXN0dXJlcyAmJiB0eXBlb2YgSGFtbWVyICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICBjb25zb2xlLmxvZygnKioqKioqKioqQ09ORklHKioqKioqKioqKioqKioqJylcbiAgICAgIGNvbnNvbGUubG9nKHtjb25maWc6IHRoaXMuY29uZmlnfSlcblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb25maWcuc2xpZGluZ0RpcmVjdGlvbiA9PT0gU2xpZGluZ0RpcmVjdGlvbi5Ib3Jpem9udGFsXG4gICAgICAgID8gSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMXG4gICAgICAgIDogSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTDtcblxuICAgICAgLy8gQWN0aXZhdGUgZ2VzdHVyZXNcbiAgICAgIHRoaXMuX2hhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLl9oYW1tZXIuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbn0pO1xuXG4gICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgLy8gTW92ZSB0aGUgc2xpZGVyXG4gICAgICAgIHRoaXMuX2hhbW1lci5vbigncGFuJywgKGUpID0+IHtcblxuICAgICAgICAgIHN3aXRjaCAodGhpcy5jb25maWcuc2xpZGluZ0RpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBTbGlkaW5nRGlyZWN0aW9uLkhvcml6b250YWw6XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd6b25lIG91dHNpZGUgaGFtbWVyIG9uIHBhbicseyBlIH0pXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogZS5kZWx0YVgsIGFjdGl2ZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsUGFuKGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTbGlkaW5nRGlyZWN0aW9uLlZlcnRpY2FsOlxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IGUuZGVsdGFZLCBhY3RpdmU6IHRydWV9KTtcbiAgICAgICAgICAgICAgaWYgKGUuaXNGaW5hbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxQYW4oZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVhcnJhbmdlIHNsaWRlciBvbiB3aW5kb3cgcmVzaXplXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICB0aGlzLl9yZXNpemVTdWIkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy51cGRhdGVTbGlkZXIodGhpcy5fc2xpZGluZ1dvcmtlciQudmFsdWUpKVxuICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogMCwgYWN0aXZlOiBmYWxzZX0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9oYW1tZXIpIHtcbiAgICAgIHRoaXMuX2hhbW1lci5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNpemVTdWIkKSB7XG4gICAgICB0aGlzLl9yZXNpemVTdWIkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX3NsaWRpbmdXb3JrZXIkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBzbGlkaW5nIHN0YXRlIHRvIHN0eWxlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRTbGlkZXJTdHlsZXMoc3RhdGU6IFdvcmtlclN0YXRlKTogYW55IHtcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgU2xpZGluZ0RpcmVjdGlvbi5Ib3Jpem9udGFsOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7LSh0aGlzLnN0YXRlLmN1cnJJbmRleCAqIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpICsgc3RhdGUudmFsdWV9cHgsIDAsIDApYCxcbiAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAqICR7dGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGh9KWAsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgU2xpZGluZ0RpcmVjdGlvbi5WZXJ0aWNhbDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAkey0odGhpcy5zdGF0ZS5jdXJySW5kZXggKiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCkgKyBzdGF0ZS52YWx1ZX1weCwgMClgLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDAlICogJHt0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aH0pYCxcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHZlcnRpY2FsUGFuKGUpIHtcbiAgICBpZiAoIShlLmRpcmVjdGlvbiAmIEhhbW1lci5ESVJFQ1RJT05fVVAgJiYgZS5vZmZzZXREaXJlY3Rpb24gJiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS52ZWxvY2l0eVkgPiAwLjMpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH0gZWxzZSBpZiAoZS52ZWxvY2l0eVkgPCAtMC4zKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUuZGVsdGFZIC8gMiA8PSAtdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWSAvIDIgPj0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdCh0aGlzLnN0YXRlLmN1cnJJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBob3Jpem9udGFsUGFuKGUpIHtcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICBlLFxuICAgICAgaXRlbXM6IHRoaXMuc3RhdGUuaXRlbXMsXG4gICAgICBlbDogdGhpcy5fZWwsXG4gICAgICBkaXJlY3Rpb246IGUuZGlyZWN0aW9uLFxuICAgICAgb2Zmc2V0RGlyZWN0aW9uOiBlLm9mZnNldERpcmVjdGlvbixcbiAgICAgIHZlbG9jaXR5WDogZS52ZWxvY2l0eVgsXG4gICAgICB2ZWxvY2l0eVk6IGUudmVsb2NpdHlZLFxuICAgIH0pXG4gICAgaWYgKCEoZS5kaXJlY3Rpb24gJiBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUwgJiYgZS5vZmZzZXREaXJlY3Rpb24gJiBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUwpKSB7XG4gICAgICBjb25zb2xlLmxvZygnV1JPTkcgRElSRUNUSU9OJywgZS5kaXJlY3Rpb24sIGUub2Zmc2V0RGlyZWN0aW9uKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS52ZWxvY2l0eVggPiAwLjMpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH0gZWxzZSBpZiAoZS52ZWxvY2l0eVggPCAtMC4zKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUuZGVsdGFYIC8gMiA8PSAtdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFYIC8gMiA+PSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICogdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLyB0aGlzLmNvbmZpZy5wYW5TZW5zaXRpdml0eSkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmVtaXQodGhpcy5zdGF0ZS5jdXJySW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICB0aGlzLmFjdGlvbi5lbWl0KCduZXh0Jyk7XG4gIH1cblxuICBwcml2YXRlIHByZXYoKSB7XG4gICAgdGhpcy5hY3Rpb24uZW1pdCgncHJldicpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTbGlkZXIoc3RhdGU6IFdvcmtlclN0YXRlKSB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFdvcmtlclN0YXRlID0gey4uLnRoaXMuX3NsaWRpbmdXb3JrZXIkLnZhbHVlLCAuLi5zdGF0ZX07XG4gICAgdGhpcy5fc2xpZGluZ1dvcmtlciQubmV4dChuZXdTdGF0ZSk7XG4gIH1cbn1cbiJdfQ==