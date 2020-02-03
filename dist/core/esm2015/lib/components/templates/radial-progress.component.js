/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class RadialProgressComponent {
    constructor() {
        this.mode = 'determinate';
        this.value = 0;
        this.diameter = 60;
        this.strokeWidth = 3;
    }
    /**
     * The radius of the spinner, adjusted for stroke width.
     * @return {?}
     */
    get circleRadius() {
        return (this.diameter - this.strokeWidth) / 2;
    }
    /**
     * The view box of the spinner's svg element.
     * @return {?}
     */
    get viewBox() {
        /** @type {?} */
        const viewBox = this.circleRadius * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
    }
    /**
     * The stroke circumference of the svg circle.
     * @return {?}
     */
    get strokeCircumference() {
        return 2 * Math.PI * this.circleRadius;
    }
    /**
     * The dash offset of the svg circle.
     * @return {?}
     */
    get strokeDashOffset() {
        if (this.mode === 'determinate') {
            return this.strokeCircumference * (100 - this.value) / 100;
        }
        // In fallback mode set the circle to 60% and rotate it with CSS.
        if (this.mode === 'indeterminate') {
            return this.strokeCircumference * 0.4;
        }
        return null;
    }
    /**
     * Stroke width of the circle in percent.
     * @return {?}
     */
    get circleStrokeWidth() {
        return this.strokeWidth / this.diameter * 100;
    }
}
RadialProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'radial-progress',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[attr.mode]': 'mode',
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter'
                },
                template: `
    <svg class="radial-progress"
         [style.width.px]="diameter"
         [style.height.px]="diameter"
         [attr.viewBox]="viewBox"
         preserveAspectRatio="xMidYMid meet"
         focusable="false">

      <circle class="radial-progress-meter"
              cx="50%"
              cy="50%"
              [attr.r]="circleRadius"
              [style.stroke-width.%]="circleStrokeWidth"/>

      <circle class="radial-progress-value"
              cx="50%"
              cy="50%"
              [attr.r]="circleRadius"
              [style.stroke-dashoffset.px]="strokeDashOffset"
              [style.stroke-dasharray.px]="strokeCircumference"
              [style.stroke-width.%]="circleStrokeWidth"/>
    </svg>
  `
            }] }
];
RadialProgressComponent.propDecorators = {
    mode: [{ type: Input }],
    value: [{ type: Input }],
    diameter: [{ type: Input }],
    strokeWidth: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadialProgressComponent.prototype.mode;
    /** @type {?} */
    RadialProgressComponent.prototype.value;
    /** @type {?} */
    RadialProgressComponent.prototype.diameter;
    /** @type {?} */
    RadialProgressComponent.prototype.strokeWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGVzL3JhZGlhbC1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBa0MxRSxNQUFNLE9BQU8sdUJBQXVCO0lBaENwQztRQWtDVyxTQUFJLEdBQW9DLGFBQWEsQ0FBQztRQUN0RCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBcUMzQixDQUFDOzs7OztJQWxDQyxJQUFJLFlBQVk7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBR0QsSUFBSSxPQUFPOztjQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztRQUN4RCxPQUFPLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBR0QsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBR0QsSUFBSSxnQkFBZ0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzVEO1FBRUQsaUVBQWlFO1FBQ2pFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUdELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNoRCxDQUFDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osYUFBYSxFQUFFLE1BQU07b0JBQ3JCLGtCQUFrQixFQUFFLFVBQVU7b0JBQzlCLG1CQUFtQixFQUFFLFVBQVU7aUJBQ2hDO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDthQUNGOzs7bUJBR0UsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUhOLHVDQUErRDs7SUFDL0Qsd0NBQW1COztJQUNuQiwyQ0FBdUI7O0lBQ3ZCLDhDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhZGlhbC1wcm9ncmVzcycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLm1vZGVdJzogJ21vZGUnLFxuICAgICdbc3R5bGUud2lkdGgucHhdJzogJ2RpYW1ldGVyJyxcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnZGlhbWV0ZXInXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBjbGFzcz1cInJhZGlhbC1wcm9ncmVzc1wiXG4gICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiZGlhbWV0ZXJcIlxuICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJkaWFtZXRlclwiXG4gICAgICAgICBbYXR0ci52aWV3Qm94XT1cInZpZXdCb3hcIlxuICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIj5cblxuICAgICAgPGNpcmNsZSBjbGFzcz1cInJhZGlhbC1wcm9ncmVzcy1tZXRlclwiXG4gICAgICAgICAgICAgIGN4PVwiNTAlXCJcbiAgICAgICAgICAgICAgY3k9XCI1MCVcIlxuICAgICAgICAgICAgICBbYXR0ci5yXT1cImNpcmNsZVJhZGl1c1wiXG4gICAgICAgICAgICAgIFtzdHlsZS5zdHJva2Utd2lkdGguJV09XCJjaXJjbGVTdHJva2VXaWR0aFwiLz5cblxuICAgICAgPGNpcmNsZSBjbGFzcz1cInJhZGlhbC1wcm9ncmVzcy12YWx1ZVwiXG4gICAgICAgICAgICAgIGN4PVwiNTAlXCJcbiAgICAgICAgICAgICAgY3k9XCI1MCVcIlxuICAgICAgICAgICAgICBbYXR0ci5yXT1cImNpcmNsZVJhZGl1c1wiXG4gICAgICAgICAgICAgIFtzdHlsZS5zdHJva2UtZGFzaG9mZnNldC5weF09XCJzdHJva2VEYXNoT2Zmc2V0XCJcbiAgICAgICAgICAgICAgW3N0eWxlLnN0cm9rZS1kYXNoYXJyYXkucHhdPVwic3Ryb2tlQ2lyY3VtZmVyZW5jZVwiXG4gICAgICAgICAgICAgIFtzdHlsZS5zdHJva2Utd2lkdGguJV09XCJjaXJjbGVTdHJva2VXaWR0aFwiLz5cbiAgICA8L3N2Zz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpYWxQcm9ncmVzc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbW9kZTogJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJyA9ICdkZXRlcm1pbmF0ZSc7XG4gIEBJbnB1dCgpIHZhbHVlID0gMDtcbiAgQElucHV0KCkgZGlhbWV0ZXIgPSA2MDtcbiAgQElucHV0KCkgc3Ryb2tlV2lkdGggPSAzO1xuXG4gIC8qKiBUaGUgcmFkaXVzIG9mIHRoZSBzcGlubmVyLCBhZGp1c3RlZCBmb3Igc3Ryb2tlIHdpZHRoLiAqL1xuICBnZXQgY2lyY2xlUmFkaXVzKCkge1xuICAgIHJldHVybiAodGhpcy5kaWFtZXRlciAtIHRoaXMuc3Ryb2tlV2lkdGgpIC8gMjtcbiAgfVxuXG4gIC8qKiBUaGUgdmlldyBib3ggb2YgdGhlIHNwaW5uZXIncyBzdmcgZWxlbWVudC4gKi9cbiAgZ2V0IHZpZXdCb3goKSB7XG4gICAgY29uc3Qgdmlld0JveCA9IHRoaXMuY2lyY2xlUmFkaXVzICogMiArIHRoaXMuc3Ryb2tlV2lkdGg7XG4gICAgcmV0dXJuIGAwIDAgJHt2aWV3Qm94fSAke3ZpZXdCb3h9YDtcbiAgfVxuXG4gIC8qKiBUaGUgc3Ryb2tlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIHN2ZyBjaXJjbGUuICovXG4gIGdldCBzdHJva2VDaXJjdW1mZXJlbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDIgKiBNYXRoLlBJICogdGhpcy5jaXJjbGVSYWRpdXM7XG4gIH1cblxuICAvKiogVGhlIGRhc2ggb2Zmc2V0IG9mIHRoZSBzdmcgY2lyY2xlLiAqL1xuICBnZXQgc3Ryb2tlRGFzaE9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlICogKDEwMCAtIHRoaXMudmFsdWUpIC8gMTAwO1xuICAgIH1cblxuICAgIC8vIEluIGZhbGxiYWNrIG1vZGUgc2V0IHRoZSBjaXJjbGUgdG8gNjAlIGFuZCByb3RhdGUgaXQgd2l0aCBDU1MuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlICogMC40O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFN0cm9rZSB3aWR0aCBvZiB0aGUgY2lyY2xlIGluIHBlcmNlbnQuICovXG4gIGdldCBjaXJjbGVTdHJva2VXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJva2VXaWR0aCAvIHRoaXMuZGlhbWV0ZXIgKiAxMDA7XG4gIH1cblxufVxuIl19