/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        /**
         * Stream that emits the state
         */
        this._state = new BehaviorSubject('loading');
        this.state = this._state.asObservable();
        /**
         * Progress value
         */
        this.progress = 0;
        /**
         * Image loader mode
         */
        this.mode = 'determinate';
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadFailed", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.loadError;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    };
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._state.complete();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    GalleryImageComponent.prototype.onProgress = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var loaded = _a.loaded, total = _a.total;
        this.progress = loaded * 100 / total;
    };
    /**
     * @param {?} blobUrl
     * @return {?}
     */
    GalleryImageComponent.prototype.onLoaded = /**
     * @param {?} blobUrl
     * @return {?}
     */
    function (blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle("url(" + blobUrl + ")");
        this._state.next('success');
    };
    /**
     * @param {?} err
     * @return {?}
     */
    GalleryImageComponent.prototype.onError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    };
    GalleryImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-image',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('fadeIn', [
                            transition(':enter', [
                                style({ opacity: 0 }),
                                animate('300ms ease-in', style({ opacity: 1 }))
                            ])
                        ])
                    ],
                    template: "\n    <ng-container [lazyImage]=\"src\"\n                  [mode]=\"mode\"\n                  (progress)=\"onProgress($event)\"\n                  (loaded)=\"onLoaded($event)\"\n                  (error)=\"onError($event)\"\n                  [ngSwitch]=\"state | async\">\n\n      <div *ngSwitchCase=\"'success'\"\n           @fadeIn\n           class=\"g-image-item\"\n           [style.backgroundImage]=\"imageUrl\">\n      </div>\n\n      <div *ngSwitchCase=\"'failed'\"\n           class=\"g-image-error-message\">\n        <div *ngIf=\"errorTemplate; else defaultError\"\n             [innerHTML]=\"errorTemplate\"></div>\n        <ng-template #defaultError>\n          <ng-container *ngIf=\"isThumbnail; else isLarge\">\n            <h4>\u26A0</h4>\n          </ng-container>\n          <ng-template #isLarge>\n            <h2>\u26A0</h2>\n            <p>Unable to load the image!</p>\n          </ng-template>\n        </ng-template>\n      </div>\n\n      <ng-container *ngSwitchCase=\"'loading'\">\n        <div *ngIf=\"loaderTemplate; else defaultLoader\"\n             class=\"g-loading\"\n             [innerHTML]=\"loaderTemplate\">\n        </div>\n        <ng-template #defaultLoader>\n\n          <div *ngIf=\"isThumbnail; else progressLoader\" class=\"g-thumb-loading\"></div>\n\n          <ng-template #progressLoader>\n            <radial-progress [value]=\"progress\" [mode]=\"mode\"></radial-progress>\n          </ng-template>\n\n          </ng-template>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryImageComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    GalleryImageComponent.propDecorators = {
        mode: [{ type: Input }],
        isThumbnail: [{ type: Input }],
        src: [{ type: Input }],
        loadingIcon: [{ type: Input }],
        loadingError: [{ type: Input }],
        error: [{ type: Output }],
        imageLoadSuccess: [{ type: HostBinding, args: ['class.g-image-loaded',] }],
        imageLoadFailed: [{ type: HostBinding, args: ['class.g-image-error',] }]
    };
    return GalleryImageComponent;
}());
export { GalleryImageComponent };
if (false) {
    /**
     * Stream that emits the state
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype._state;
    /** @type {?} */
    GalleryImageComponent.prototype.state;
    /**
     * Progress value
     * @type {?}
     */
    GalleryImageComponent.prototype.progress;
    /**
     * Image loader mode
     * @type {?}
     */
    GalleryImageComponent.prototype.mode;
    /**
     * Is thumbnail
     * @type {?}
     */
    GalleryImageComponent.prototype.isThumbnail;
    /**
     * Image source URL
     * @type {?}
     */
    GalleryImageComponent.prototype.src;
    /**
     * Loaded image URL
     * @type {?}
     */
    GalleryImageComponent.prototype.imageUrl;
    /**
     * Custom loader template
     * @type {?}
     */
    GalleryImageComponent.prototype.loadingIcon;
    /**
     * Custom loader safe template
     * @type {?}
     */
    GalleryImageComponent.prototype.loaderTemplate;
    /**
     * Custom error template
     * @type {?}
     */
    GalleryImageComponent.prototype.loadingError;
    /**
     * Custom error safe template
     * @type {?}
     */
    GalleryImageComponent.prototype.errorTemplate;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryImageComponent.prototype.error;
    /**
     * loading error
     * @type {?}
     */
    GalleryImageComponent.prototype.loadError;
    /**
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QztJQXNHRSwrQkFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYzs7OztRQXhDM0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQUNsRixVQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztRQUc1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBR0osU0FBSSxHQUFvQyxhQUFhLENBQUM7Ozs7UUFxQnJELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBYTVDLENBQUM7SUFURCxzQkFBeUMsbURBQWdCOzs7O1FBQXpEO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUF3QyxrREFBZTs7OztRQUF2RDtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7SUFLRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsRUFBa0Q7WUFBakQsa0JBQU0sRUFBRSxnQkFBSztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLE9BQWU7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLFNBQU8sT0FBTyxNQUFHLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxHQUFVO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQW5JRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFFBQVEsRUFBRTs0QkFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO2dDQUNuQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDOzZCQUM5QyxDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFLHUvQ0E2Q1Q7aUJBQ0Y7Ozs7Z0JBN0RRLFlBQVk7Ozt1QkF5RWxCLEtBQUs7OEJBR0wsS0FBSztzQkFHTCxLQUFLOzhCQUtMLEtBQUs7K0JBS0wsS0FBSzt3QkFLTCxNQUFNO21DQUlOLFdBQVcsU0FBQyxzQkFBc0I7a0NBSWxDLFdBQVcsU0FBQyxxQkFBcUI7O0lBbUNwQyw0QkFBQztDQUFBLEFBcklELElBcUlDO1NBMUVZLHFCQUFxQjs7Ozs7OztJQUdoQyx1Q0FBMkY7O0lBQzNGLHNDQUE0Qzs7Ozs7SUFHNUMseUNBQWE7Ozs7O0lBR2IscUNBQStEOzs7OztJQUcvRCw0Q0FBOEI7Ozs7O0lBRzlCLG9DQUFxQjs7Ozs7SUFFckIseUNBQW9COzs7OztJQUdwQiw0Q0FBNkI7Ozs7O0lBRTdCLCtDQUF5Qjs7Ozs7SUFHekIsNkNBQThCOzs7OztJQUU5Qiw4Q0FBd0I7Ozs7O0lBR3hCLHNDQUE0Qzs7Ozs7SUFFNUMsMENBQWlCOzs7OztJQVVMLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1pbWFnZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZUluJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMH0pLFxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluJywgc3R5bGUoe29wYWNpdHk6IDF9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIFtsYXp5SW1hZ2VdPVwic3JjXCJcbiAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgKHByb2dyZXNzKT1cIm9uUHJvZ3Jlc3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobG9hZGVkKT1cIm9uTG9hZGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGVycm9yKT1cIm9uRXJyb3IoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbbmdTd2l0Y2hdPVwic3RhdGUgfCBhc3luY1wiPlxuXG4gICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIlxuICAgICAgICAgICBAZmFkZUluXG4gICAgICAgICAgIGNsYXNzPVwiZy1pbWFnZS1pdGVtXCJcbiAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRJbWFnZV09XCJpbWFnZVVybFwiPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidmYWlsZWQnXCJcbiAgICAgICAgICAgY2xhc3M9XCJnLWltYWdlLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImVycm9yVGVtcGxhdGU7IGVsc2UgZGVmYXVsdEVycm9yXCJcbiAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImVycm9yVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RXJyb3I+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGh1bWJuYWlsOyBlbHNlIGlzTGFyZ2VcIj5cbiAgICAgICAgICAgIDxoND7imqA8L2g0PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaXNMYXJnZT5cbiAgICAgICAgICAgIDxoMj7imqA8L2gyPlxuICAgICAgICAgICAgPHA+VW5hYmxlIHRvIGxvYWQgdGhlIGltYWdlITwvcD5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidsb2FkaW5nJ1wiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGVyVGVtcGxhdGU7IGVsc2UgZGVmYXVsdExvYWRlclwiXG4gICAgICAgICAgICAgY2xhc3M9XCJnLWxvYWRpbmdcIlxuICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwibG9hZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdExvYWRlcj5cblxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc1RodW1ibmFpbDsgZWxzZSBwcm9ncmVzc0xvYWRlclwiIGNsYXNzPVwiZy10aHVtYi1sb2FkaW5nXCI+PC9kaXY+XG5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3Byb2dyZXNzTG9hZGVyPlxuICAgICAgICAgICAgPHJhZGlhbC1wcm9ncmVzcyBbdmFsdWVdPVwicHJvZ3Jlc3NcIiBbbW9kZV09XCJtb2RlXCI+PC9yYWRpYWwtcHJvZ3Jlc3M+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgdGhlIHN0YXRlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnbG9hZGluZycgfCAnc3VjY2VzcycgfCAnZmFpbGVkJz4oJ2xvYWRpbmcnKTtcbiAgcmVhZG9ubHkgc3RhdGUgPSB0aGlzLl9zdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAvKiogUHJvZ3Jlc3MgdmFsdWUgKi9cbiAgcHJvZ3Jlc3MgPSAwO1xuXG4gIC8qKiBJbWFnZSBsb2FkZXIgbW9kZSAqL1xuICBASW5wdXQoKSBtb2RlOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnID0gJ2RldGVybWluYXRlJztcblxuICAvKiogSXMgdGh1bWJuYWlsICovXG4gIEBJbnB1dCgpIGlzVGh1bWJuYWlsOiBib29sZWFuO1xuXG4gIC8qKiBJbWFnZSBzb3VyY2UgVVJMICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAvKiogTG9hZGVkIGltYWdlIFVSTCAqL1xuICBpbWFnZVVybDogU2FmZVN0eWxlO1xuXG4gIC8qKiBDdXN0b20gbG9hZGVyIHRlbXBsYXRlICovXG4gIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gbG9hZGVyIHNhZmUgdGVtcGxhdGUgKi9cbiAgbG9hZGVyVGVtcGxhdGU6IFNhZmVIdG1sO1xuXG4gIC8qKiBDdXN0b20gZXJyb3IgdGVtcGxhdGUgKi9cbiAgQElucHV0KCkgbG9hZGluZ0Vycm9yOiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gZXJyb3Igc2FmZSB0ZW1wbGF0ZSAqL1xuICBlcnJvclRlbXBsYXRlOiBTYWZlSHRtbDtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcbiAgLyoqIGxvYWRpbmcgZXJyb3IgKi9cbiAgbG9hZEVycm9yOiBFcnJvcjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmctaW1hZ2UtbG9hZGVkJykgZ2V0IGltYWdlTG9hZFN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbWFnZVVybDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1pbWFnZS1lcnJvcicpIGdldCBpbWFnZUxvYWRGYWlsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5sb2FkRXJyb3I7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZ0ljb24pIHtcbiAgICAgIHRoaXMubG9hZGVyVGVtcGxhdGUgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5sb2FkaW5nSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRpbmdFcnJvcikge1xuICAgICAgdGhpcy5lcnJvclRlbXBsYXRlID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMubG9hZGluZ0Vycm9yKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25Qcm9ncmVzcyh7bG9hZGVkLCB0b3RhbH06IHsgbG9hZGVkOiBudW1iZXIsIHRvdGFsOiBudW1iZXIgfSkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBsb2FkZWQgKiAxMDAgLyB0b3RhbDtcbiAgfVxuXG4gIG9uTG9hZGVkKGJsb2JVcmw6IHN0cmluZykge1xuICAgIHRoaXMuaW1hZ2VVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJHtibG9iVXJsfSlgKTtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KCdzdWNjZXNzJyk7XG4gIH1cblxuICBvbkVycm9yKGVycjogRXJyb3IpIHtcbiAgICB0aGlzLmxvYWRFcnJvciA9IGVycjtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KCdmYWlsZWQnKTtcbiAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgfVxuXG59XG4iXX0=