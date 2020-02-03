/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var RadialProgressComponent = /** @class */ (function () {
    function RadialProgressComponent() {
        this.mode = 'determinate';
        this.value = 0;
        this.diameter = 60;
        this.strokeWidth = 3;
    }
    Object.defineProperty(RadialProgressComponent.prototype, "circleRadius", {
        /** The radius of the spinner, adjusted for stroke width. */
        get: /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */
        function () {
            return (this.diameter - this.strokeWidth) / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "viewBox", {
        /** The view box of the spinner's svg element. */
        get: /**
         * The view box of the spinner's svg element.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var viewBox = this.circleRadius * 2 + this.strokeWidth;
            return "0 0 " + viewBox + " " + viewBox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "strokeCircumference", {
        /** The stroke circumference of the svg circle. */
        get: /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */
        function () {
            return 2 * Math.PI * this.circleRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "strokeDashOffset", {
        /** The dash offset of the svg circle. */
        get: /**
         * The dash offset of the svg circle.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this.strokeCircumference * (100 - this.value) / 100;
            }
            // In fallback mode set the circle to 60% and rotate it with CSS.
            if (this.mode === 'indeterminate') {
                return this.strokeCircumference * 0.4;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "circleStrokeWidth", {
        /** Stroke width of the circle in percent. */
        get: /**
         * Stroke width of the circle in percent.
         * @return {?}
         */
        function () {
            return this.strokeWidth / this.diameter * 100;
        },
        enumerable: true,
        configurable: true
    });
    RadialProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radial-progress',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[attr.mode]': 'mode',
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter'
                    },
                    template: "\n    <svg class=\"radial-progress\"\n         [style.width.px]=\"diameter\"\n         [style.height.px]=\"diameter\"\n         [attr.viewBox]=\"viewBox\"\n         preserveAspectRatio=\"xMidYMid meet\"\n         focusable=\"false\">\n\n      <circle class=\"radial-progress-meter\"\n              cx=\"50%\"\n              cy=\"50%\"\n              [attr.r]=\"circleRadius\"\n              [style.stroke-width.%]=\"circleStrokeWidth\"/>\n\n      <circle class=\"radial-progress-value\"\n              cx=\"50%\"\n              cy=\"50%\"\n              [attr.r]=\"circleRadius\"\n              [style.stroke-dashoffset.px]=\"strokeDashOffset\"\n              [style.stroke-dasharray.px]=\"strokeCircumference\"\n              [style.stroke-width.%]=\"circleStrokeWidth\"/>\n    </svg>\n  "
                }] }
    ];
    RadialProgressComponent.propDecorators = {
        mode: [{ type: Input }],
        value: [{ type: Input }],
        diameter: [{ type: Input }],
        strokeWidth: [{ type: Input }]
    };
    return RadialProgressComponent;
}());
export { RadialProgressComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGVzL3JhZGlhbC1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFO0lBQUE7UUFrQ1csU0FBSSxHQUFvQyxhQUFhLENBQUM7UUFDdEQsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLENBQUMsQ0FBQztJQXFDM0IsQ0FBQztJQWxDQyxzQkFBSSxpREFBWTtRQURoQiw0REFBNEQ7Ozs7O1FBQzVEO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDRDQUFPO1FBRFgsaURBQWlEOzs7OztRQUNqRDs7Z0JBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ3hELE9BQU8sU0FBTyxPQUFPLFNBQUksT0FBUyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksd0RBQW1CO1FBRHZCLGtEQUFrRDs7Ozs7UUFDbEQ7WUFDRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxxREFBZ0I7UUFEcEIseUNBQXlDOzs7OztRQUN6QztZQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDNUQ7WUFFRCxpRUFBaUU7WUFDakUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsRUFBRTtnQkFDakMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO2FBQ3ZDO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNEQUFpQjtRQURyQiw2Q0FBNkM7Ozs7O1FBQzdDO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2hELENBQUM7OztPQUFBOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0osYUFBYSxFQUFFLE1BQU07d0JBQ3JCLGtCQUFrQixFQUFFLFVBQVU7d0JBQzlCLG1CQUFtQixFQUFFLFVBQVU7cUJBQ2hDO29CQUNELFFBQVEsRUFBRSx1eEJBc0JUO2lCQUNGOzs7dUJBR0UsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFxQ1IsOEJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQTFDWSx1QkFBdUI7OztJQUVsQyx1Q0FBK0Q7O0lBQy9ELHdDQUFtQjs7SUFDbkIsMkNBQXVCOztJQUN2Qiw4Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYWRpYWwtcHJvZ3Jlc3MnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5tb2RlXSc6ICdtb2RlJyxcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdkaWFtZXRlcicsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2RpYW1ldGVyJ1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgY2xhc3M9XCJyYWRpYWwtcHJvZ3Jlc3NcIlxuICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImRpYW1ldGVyXCJcbiAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZGlhbWV0ZXJcIlxuICAgICAgICAgW2F0dHIudmlld0JveF09XCJ2aWV3Qm94XCJcbiAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCI+XG5cbiAgICAgIDxjaXJjbGUgY2xhc3M9XCJyYWRpYWwtcHJvZ3Jlc3MtbWV0ZXJcIlxuICAgICAgICAgICAgICBjeD1cIjUwJVwiXG4gICAgICAgICAgICAgIGN5PVwiNTAlXCJcbiAgICAgICAgICAgICAgW2F0dHIucl09XCJjaXJjbGVSYWRpdXNcIlxuICAgICAgICAgICAgICBbc3R5bGUuc3Ryb2tlLXdpZHRoLiVdPVwiY2lyY2xlU3Ryb2tlV2lkdGhcIi8+XG5cbiAgICAgIDxjaXJjbGUgY2xhc3M9XCJyYWRpYWwtcHJvZ3Jlc3MtdmFsdWVcIlxuICAgICAgICAgICAgICBjeD1cIjUwJVwiXG4gICAgICAgICAgICAgIGN5PVwiNTAlXCJcbiAgICAgICAgICAgICAgW2F0dHIucl09XCJjaXJjbGVSYWRpdXNcIlxuICAgICAgICAgICAgICBbc3R5bGUuc3Ryb2tlLWRhc2hvZmZzZXQucHhdPVwic3Ryb2tlRGFzaE9mZnNldFwiXG4gICAgICAgICAgICAgIFtzdHlsZS5zdHJva2UtZGFzaGFycmF5LnB4XT1cInN0cm9rZUNpcmN1bWZlcmVuY2VcIlxuICAgICAgICAgICAgICBbc3R5bGUuc3Ryb2tlLXdpZHRoLiVdPVwiY2lyY2xlU3Ryb2tlV2lkdGhcIi8+XG4gICAgPC9zdmc+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaWFsUHJvZ3Jlc3NDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG1vZGU6ICdkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZScgPSAnZGV0ZXJtaW5hdGUnO1xuICBASW5wdXQoKSB2YWx1ZSA9IDA7XG4gIEBJbnB1dCgpIGRpYW1ldGVyID0gNjA7XG4gIEBJbnB1dCgpIHN0cm9rZVdpZHRoID0gMztcblxuICAvKiogVGhlIHJhZGl1cyBvZiB0aGUgc3Bpbm5lciwgYWRqdXN0ZWQgZm9yIHN0cm9rZSB3aWR0aC4gKi9cbiAgZ2V0IGNpcmNsZVJhZGl1cygpIHtcbiAgICByZXR1cm4gKHRoaXMuZGlhbWV0ZXIgLSB0aGlzLnN0cm9rZVdpZHRoKSAvIDI7XG4gIH1cblxuICAvKiogVGhlIHZpZXcgYm94IG9mIHRoZSBzcGlubmVyJ3Mgc3ZnIGVsZW1lbnQuICovXG4gIGdldCB2aWV3Qm94KCkge1xuICAgIGNvbnN0IHZpZXdCb3ggPSB0aGlzLmNpcmNsZVJhZGl1cyAqIDIgKyB0aGlzLnN0cm9rZVdpZHRoO1xuICAgIHJldHVybiBgMCAwICR7dmlld0JveH0gJHt2aWV3Qm94fWA7XG4gIH1cblxuICAvKiogVGhlIHN0cm9rZSBjaXJjdW1mZXJlbmNlIG9mIHRoZSBzdmcgY2lyY2xlLiAqL1xuICBnZXQgc3Ryb2tlQ2lyY3VtZmVyZW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAyICogTWF0aC5QSSAqIHRoaXMuY2lyY2xlUmFkaXVzO1xuICB9XG5cbiAgLyoqIFRoZSBkYXNoIG9mZnNldCBvZiB0aGUgc3ZnIGNpcmNsZS4gKi9cbiAgZ2V0IHN0cm9rZURhc2hPZmZzZXQoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMuc3Ryb2tlQ2lyY3VtZmVyZW5jZSAqICgxMDAgLSB0aGlzLnZhbHVlKSAvIDEwMDtcbiAgICB9XG5cbiAgICAvLyBJbiBmYWxsYmFjayBtb2RlIHNldCB0aGUgY2lyY2xlIHRvIDYwJSBhbmQgcm90YXRlIGl0IHdpdGggQ1NTLlxuICAgIGlmICh0aGlzLm1vZGUgPT09ICdpbmRldGVybWluYXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMuc3Ryb2tlQ2lyY3VtZmVyZW5jZSAqIDAuNDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTdHJva2Ugd2lkdGggb2YgdGhlIGNpcmNsZSBpbiBwZXJjZW50LiAqL1xuICBnZXQgY2lyY2xlU3Ryb2tlV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Ryb2tlV2lkdGggLyB0aGlzLmRpYW1ldGVyICogMTAwO1xuICB9XG5cbn1cbiJdfQ==