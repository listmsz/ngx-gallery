/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
export class GalleryImageComponent {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
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
    /**
     * @return {?}
     */
    get imageLoadSuccess() {
        return !!this.imageUrl;
    }
    /**
     * @return {?}
     */
    get imageLoadFailed() {
        return !!this.loadError;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._state.complete();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onProgress({ loaded, total }) {
        this.progress = loaded * 100 / total;
    }
    /**
     * @param {?} blobUrl
     * @return {?}
     */
    onLoaded(blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle(`url(${blobUrl})`);
        this._state.next('success');
    }
    /**
     * @param {?} err
     * @return {?}
     */
    onError(err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    }
}
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
                template: `
    <ng-container [lazyImage]="src"
                  [mode]="mode"
                  (progress)="onProgress($event)"
                  (loaded)="onLoaded($event)"
                  (error)="onError($event)"
                  [ngSwitch]="state | async">

      <div *ngSwitchCase="'success'"
           @fadeIn
           class="g-image-item"
           [style.backgroundImage]="imageUrl">
      </div>

      <div *ngSwitchCase="'failed'"
           class="g-image-error-message">
        <div *ngIf="errorTemplate; else defaultError"
             [innerHTML]="errorTemplate"></div>
        <ng-template #defaultError>
          <ng-container *ngIf="isThumbnail; else isLarge">
            <h4>⚠</h4>
          </ng-container>
          <ng-template #isLarge>
            <h2>⚠</h2>
            <p>Unable to load the image!</p>
          </ng-template>
        </ng-template>
      </div>

      <ng-container *ngSwitchCase="'loading'">
        <div *ngIf="loaderTemplate; else defaultLoader"
             class="g-loading"
             [innerHTML]="loaderTemplate">
        </div>
        <ng-template #defaultLoader>

          <div *ngIf="isThumbnail; else progressLoader" class="g-thumb-loading"></div>

          <ng-template #progressLoader>
            <radial-progress [value]="progress" [mode]="mode"></radial-progress>
          </ng-template>

          </ng-template>
      </ng-container>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
GalleryImageComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQTZEdkMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQTJDaEMsWUFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYzs7OztRQXhDM0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQUNsRixVQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztRQUc1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBR0osU0FBSSxHQUFvQyxhQUFhLENBQUM7Ozs7UUFxQnJELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBYTVDLENBQUM7Ozs7SUFURCxJQUF5QyxnQkFBZ0I7UUFDdkQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBd0MsZUFBZTtRQUNyRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakY7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQW9DO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBZTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBbklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUNoQixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ25CLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7eUJBQzlDLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZDVDthQUNGOzs7O1lBN0RRLFlBQVk7OzttQkF5RWxCLEtBQUs7MEJBR0wsS0FBSztrQkFHTCxLQUFLOzBCQUtMLEtBQUs7MkJBS0wsS0FBSztvQkFLTCxNQUFNOytCQUlOLFdBQVcsU0FBQyxzQkFBc0I7OEJBSWxDLFdBQVcsU0FBQyxxQkFBcUI7Ozs7Ozs7O0lBcENsQyx1Q0FBMkY7O0lBQzNGLHNDQUE0Qzs7Ozs7SUFHNUMseUNBQWE7Ozs7O0lBR2IscUNBQStEOzs7OztJQUcvRCw0Q0FBOEI7Ozs7O0lBRzlCLG9DQUFxQjs7Ozs7SUFFckIseUNBQW9COzs7OztJQUdwQiw0Q0FBNkI7Ozs7O0lBRTdCLCtDQUF5Qjs7Ozs7SUFHekIsNkNBQThCOzs7OztJQUU5Qiw4Q0FBd0I7Ozs7O0lBR3hCLHNDQUE0Qzs7Ozs7SUFFNUMsMENBQWlCOzs7OztJQVVMLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1pbWFnZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZUluJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMH0pLFxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluJywgc3R5bGUoe29wYWNpdHk6IDF9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIFtsYXp5SW1hZ2VdPVwic3JjXCJcbiAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgKHByb2dyZXNzKT1cIm9uUHJvZ3Jlc3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobG9hZGVkKT1cIm9uTG9hZGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGVycm9yKT1cIm9uRXJyb3IoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbbmdTd2l0Y2hdPVwic3RhdGUgfCBhc3luY1wiPlxuXG4gICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIlxuICAgICAgICAgICBAZmFkZUluXG4gICAgICAgICAgIGNsYXNzPVwiZy1pbWFnZS1pdGVtXCJcbiAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRJbWFnZV09XCJpbWFnZVVybFwiPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidmYWlsZWQnXCJcbiAgICAgICAgICAgY2xhc3M9XCJnLWltYWdlLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImVycm9yVGVtcGxhdGU7IGVsc2UgZGVmYXVsdEVycm9yXCJcbiAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImVycm9yVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RXJyb3I+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGh1bWJuYWlsOyBlbHNlIGlzTGFyZ2VcIj5cbiAgICAgICAgICAgIDxoND7imqA8L2g0PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaXNMYXJnZT5cbiAgICAgICAgICAgIDxoMj7imqA8L2gyPlxuICAgICAgICAgICAgPHA+VW5hYmxlIHRvIGxvYWQgdGhlIGltYWdlITwvcD5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidsb2FkaW5nJ1wiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGVyVGVtcGxhdGU7IGVsc2UgZGVmYXVsdExvYWRlclwiXG4gICAgICAgICAgICAgY2xhc3M9XCJnLWxvYWRpbmdcIlxuICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwibG9hZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdExvYWRlcj5cblxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc1RodW1ibmFpbDsgZWxzZSBwcm9ncmVzc0xvYWRlclwiIGNsYXNzPVwiZy10aHVtYi1sb2FkaW5nXCI+PC9kaXY+XG5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3Byb2dyZXNzTG9hZGVyPlxuICAgICAgICAgICAgPHJhZGlhbC1wcm9ncmVzcyBbdmFsdWVdPVwicHJvZ3Jlc3NcIiBbbW9kZV09XCJtb2RlXCI+PC9yYWRpYWwtcHJvZ3Jlc3M+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgdGhlIHN0YXRlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnbG9hZGluZycgfCAnc3VjY2VzcycgfCAnZmFpbGVkJz4oJ2xvYWRpbmcnKTtcbiAgcmVhZG9ubHkgc3RhdGUgPSB0aGlzLl9zdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAvKiogUHJvZ3Jlc3MgdmFsdWUgKi9cbiAgcHJvZ3Jlc3MgPSAwO1xuXG4gIC8qKiBJbWFnZSBsb2FkZXIgbW9kZSAqL1xuICBASW5wdXQoKSBtb2RlOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnID0gJ2RldGVybWluYXRlJztcblxuICAvKiogSXMgdGh1bWJuYWlsICovXG4gIEBJbnB1dCgpIGlzVGh1bWJuYWlsOiBib29sZWFuO1xuXG4gIC8qKiBJbWFnZSBzb3VyY2UgVVJMICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAvKiogTG9hZGVkIGltYWdlIFVSTCAqL1xuICBpbWFnZVVybDogU2FmZVN0eWxlO1xuXG4gIC8qKiBDdXN0b20gbG9hZGVyIHRlbXBsYXRlICovXG4gIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gbG9hZGVyIHNhZmUgdGVtcGxhdGUgKi9cbiAgbG9hZGVyVGVtcGxhdGU6IFNhZmVIdG1sO1xuXG4gIC8qKiBDdXN0b20gZXJyb3IgdGVtcGxhdGUgKi9cbiAgQElucHV0KCkgbG9hZGluZ0Vycm9yOiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gZXJyb3Igc2FmZSB0ZW1wbGF0ZSAqL1xuICBlcnJvclRlbXBsYXRlOiBTYWZlSHRtbDtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcbiAgLyoqIGxvYWRpbmcgZXJyb3IgKi9cbiAgbG9hZEVycm9yOiBFcnJvcjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmctaW1hZ2UtbG9hZGVkJykgZ2V0IGltYWdlTG9hZFN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbWFnZVVybDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1pbWFnZS1lcnJvcicpIGdldCBpbWFnZUxvYWRGYWlsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5sb2FkRXJyb3I7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZ0ljb24pIHtcbiAgICAgIHRoaXMubG9hZGVyVGVtcGxhdGUgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5sb2FkaW5nSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRpbmdFcnJvcikge1xuICAgICAgdGhpcy5lcnJvclRlbXBsYXRlID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMubG9hZGluZ0Vycm9yKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25Qcm9ncmVzcyh7bG9hZGVkLCB0b3RhbH06IHsgbG9hZGVkOiBudW1iZXIsIHRvdGFsOiBudW1iZXIgfSkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBsb2FkZWQgKiAxMDAgLyB0b3RhbDtcbiAgfVxuXG4gIG9uTG9hZGVkKGJsb2JVcmw6IHN0cmluZykge1xuICAgIHRoaXMuaW1hZ2VVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJHtibG9iVXJsfSlgKTtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KCdzdWNjZXNzJyk7XG4gIH1cblxuICBvbkVycm9yKGVycjogRXJyb3IpIHtcbiAgICB0aGlzLmxvYWRFcnJvciA9IGVycjtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KCdmYWlsZWQnKTtcbiAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgfVxuXG59XG4iXX0=