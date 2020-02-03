/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
import { LoadingStrategy, GalleryItemType } from '../models/constants';
export class GalleryItemComponent {
    constructor() {
        this.Types = GalleryItemType;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.index === this.currIndex;
    }
    /**
     * @return {?}
     */
    get load() {
        switch (this.config.loadingStrategy) {
            case LoadingStrategy.Preload:
                return true;
            case LoadingStrategy.Lazy:
                return this.currIndex === this.index;
            default:
                return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
        }
    }
}
GalleryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="load" [ngSwitch]="type">

      <ng-container *ngSwitchCase="Types.Image">

        <gallery-image [src]="data.src"
                       [mode]="config.loadingMode"
                       [loadingIcon]="config.loadingIcon"
                       [loadingError]="config.loadingError"
                       (error)="error.emit($event)"></gallery-image>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

      <gallery-video *ngSwitchCase="Types.Video"
                     [src]="data.src"
                     [poster]="data.poster"
                     [pause]="currIndex !== index"
                     (error)="error.emit($event)"></gallery-video>

      <gallery-iframe *ngSwitchCase="Types.Youtube"
                      [src]="data.src"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Iframe"
                      [src]="data.src"></gallery-iframe>

      <ng-container *ngSwitchDefault>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

    </ng-container>
  `
            }] }
];
GalleryItemComponent.propDecorators = {
    config: [{ type: Input }],
    index: [{ type: Input }],
    currIndex: [{ type: Input }],
    type: [{ type: Input }],
    data: [{ type: Input }],
    error: [{ type: Output }],
    isActive: [{ type: HostBinding, args: ['class.g-active-item',] }]
};
if (false) {
    /** @type {?} */
    GalleryItemComponent.prototype.Types;
    /**
     * Gallery config
     * @type {?}
     */
    GalleryItemComponent.prototype.config;
    /**
     * Item's index in the gallery
     * @type {?}
     */
    GalleryItemComponent.prototype.index;
    /**
     * Gallery current index
     * @type {?}
     */
    GalleryItemComponent.prototype.currIndex;
    /**
     * Item's type 'image', 'video', 'youtube', 'iframe'
     * @type {?}
     */
    GalleryItemComponent.prototype.type;
    /**
     * Item's data, this object contains the data required to display the content (e.g. src path)
     * @type {?}
     */
    GalleryItemComponent.prototype.data;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryItemComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWtEdkUsTUFBTSxPQUFPLG9CQUFvQjtJQWhEakM7UUFrRFcsVUFBSyxHQUFHLGVBQWUsQ0FBQzs7OztRQWtCdkIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFpQjlDLENBQUM7Ozs7SUFmQyxJQUF3QyxRQUFRO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ25DLEtBQUssZUFBZSxDQUFDLE9BQU87Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxlQUFlLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkM7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xIO0lBQ0gsQ0FBQzs7O1lBbkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDVDthQUNGOzs7cUJBTUUsS0FBSztvQkFHTCxLQUFLO3dCQUdMLEtBQUs7bUJBR0wsS0FBSzttQkFHTCxLQUFLO29CQUdMLE1BQU07dUJBRU4sV0FBVyxTQUFDLHFCQUFxQjs7OztJQXBCbEMscUNBQWlDOzs7OztJQUdqQyxzQ0FBK0I7Ozs7O0lBRy9CLHFDQUF1Qjs7Ozs7SUFHdkIseUNBQTJCOzs7OztJQUczQixvQ0FBc0I7Ozs7O0lBR3RCLG9DQUFtQjs7Ozs7SUFHbkIscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5LCBHYWxsZXJ5SXRlbVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1pdGVtJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRcIiBbbmdTd2l0Y2hdPVwidHlwZVwiPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5JbWFnZVwiPlxuXG4gICAgICAgIDxnYWxsZXJ5LWltYWdlIFtzcmNdPVwiZGF0YS5zcmNcIlxuICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJjb25maWcubG9hZGluZ01vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0ljb25dPVwiY29uZmlnLmxvYWRpbmdJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2xvYWRpbmdFcnJvcl09XCJjb25maWcubG9hZGluZ0Vycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoJGV2ZW50KVwiPjwvZ2FsbGVyeS1pbWFnZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZy10ZW1wbGF0ZSBnLWl0ZW0tdGVtcGxhdGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLml0ZW1UZW1wbGF0ZTtcbiAgICAgICAgICBjb250ZXh0OiB7IGluZGV4OiB0aGlzLmluZGV4LCBjdXJySW5kZXg6IHRoaXMuY3VyckluZGV4LCB0eXBlOiB0aGlzLnR5cGUsIGRhdGE6IHRoaXMuZGF0YSB9XCI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPGdhbGxlcnktdmlkZW8gKm5nU3dpdGNoQ2FzZT1cIlR5cGVzLlZpZGVvXCJcbiAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZGF0YS5zcmNcIlxuICAgICAgICAgICAgICAgICAgICAgW3Bvc3Rlcl09XCJkYXRhLnBvc3RlclwiXG4gICAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY3VyckluZGV4ICE9PSBpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPVwiZXJyb3IuZW1pdCgkZXZlbnQpXCI+PC9nYWxsZXJ5LXZpZGVvPlxuXG4gICAgICA8Z2FsbGVyeS1pZnJhbWUgKm5nU3dpdGNoQ2FzZT1cIlR5cGVzLllvdXR1YmVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZGF0YS5zcmNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtwYXVzZV09XCJjdXJySW5kZXggIT09IGluZGV4XCI+PC9nYWxsZXJ5LWlmcmFtZT5cblxuICAgICAgPGdhbGxlcnktaWZyYW1lICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5JZnJhbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZGF0YS5zcmNcIj48L2dhbGxlcnktaWZyYW1lPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImctdGVtcGxhdGUgZy1pdGVtLXRlbXBsYXRlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy5pdGVtVGVtcGxhdGU7XG4gICAgICAgICAgY29udGV4dDogeyBpbmRleDogdGhpcy5pbmRleCwgY3VyckluZGV4OiB0aGlzLmN1cnJJbmRleCwgdHlwZTogdGhpcy50eXBlLCBkYXRhOiB0aGlzLmRhdGEgfVwiPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5SXRlbUNvbXBvbmVudCB7XG5cbiAgcmVhZG9ubHkgVHlwZXMgPSBHYWxsZXJ5SXRlbVR5cGU7XG5cbiAgLyoqIEdhbGxlcnkgY29uZmlnICovXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcblxuICAvKiogSXRlbSdzIGluZGV4IGluIHRoZSBnYWxsZXJ5ICovXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEdhbGxlcnkgY3VycmVudCBpbmRleCAqL1xuICBASW5wdXQoKSBjdXJySW5kZXg6IG51bWJlcjtcblxuICAvKiogSXRlbSdzIHR5cGUgJ2ltYWdlJywgJ3ZpZGVvJywgJ3lvdXR1YmUnLCAnaWZyYW1lJyAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqIEl0ZW0ncyBkYXRhLCB0aGlzIG9iamVjdCBjb250YWlucyB0aGUgZGF0YSByZXF1aXJlZCB0byBkaXNwbGF5IHRoZSBjb250ZW50IChlLmcuIHNyYyBwYXRoKSAqL1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gYW4gZXJyb3Igb2NjdXJzICovXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nLWFjdGl2ZS1pdGVtJykgZ2V0IGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4ID09PSB0aGlzLmN1cnJJbmRleDtcbiAgfVxuXG4gIGdldCBsb2FkKCkge1xuICAgIHN3aXRjaCAodGhpcy5jb25maWcubG9hZGluZ1N0cmF0ZWd5KSB7XG4gICAgICBjYXNlIExvYWRpbmdTdHJhdGVneS5QcmVsb2FkOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgTG9hZGluZ1N0cmF0ZWd5Lkxhenk6XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJJbmRleCA9PT0gdGhpcy5pbmRleDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJJbmRleCA9PT0gdGhpcy5pbmRleCB8fCB0aGlzLmN1cnJJbmRleCA9PT0gdGhpcy5pbmRleCAtIDEgfHwgdGhpcy5jdXJySW5kZXggPT09IHRoaXMuaW5kZXggKyAxO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=