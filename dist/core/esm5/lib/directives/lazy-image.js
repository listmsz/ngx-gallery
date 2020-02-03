/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Subject, Subscription, zip, fromEvent, EMPTY } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
var LazyImage = /** @class */ (function () {
    function LazyImage(http, document) {
        var _this = this;
        this.http = http;
        this.document = document;
        this._imageLoader$ = new Subject();
        this._loaderSub$ = Subscription.EMPTY;
        this.progress = new EventEmitter();
        this.loaded = new EventEmitter();
        this.error = new EventEmitter();
        this._loaderSub$ = this._imageLoader$.pipe(switchMap(function (imageSrc) { return _this.mode === 'determinate' ? _this.progressiveLoader(imageSrc) : _this.nativeLoader(imageSrc); })).subscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    LazyImage.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    };
    /**
     * @return {?}
     */
    LazyImage.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    };
    /**
     * @param {?} imagePath
     * @return {?}
     */
    LazyImage.prototype.loadImage = /**
     * @param {?} imagePath
     * @return {?}
     */
    function (imagePath) {
        this._imageLoader$.next(imagePath);
    };
    /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param url
     */
    /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param {?} url
     * @return {?}
     */
    LazyImage.prototype.progressiveLoader = /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var downloadImage = new HttpRequest('GET', url, {
            reportProgress: true,
            responseType: 'blob',
            headers: new HttpHeaders({ 'CACHE_GALLERY_IMAGE': 'true' })
        });
        return this.http.request(downloadImage).pipe(tap(function (event) {
            if (event.type === HttpEventType.DownloadProgress) {
                _this.progress.emit({ loaded: event.loaded, total: event.total });
            }
            if (event.type === HttpEventType.Response) {
                _this.loaded.emit(URL.createObjectURL(event.body));
            }
        }), catchError(function (err) {
            _this.error.emit(err);
            return EMPTY;
        }));
    };
    /**
     * Native image loader, does not emit progress
     * @param url
     */
    /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    LazyImage.prototype.nativeLoader = /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        /** @type {?} */
        var loadSuccess = fromEvent(img, 'load').pipe(tap(function () { return _this.loaded.emit(url); }));
        // Image load failed
        /** @type {?} */
        var loadError = fromEvent(img, 'error').pipe(tap(function () { return _this.error.emit(new Error("[lazyImage]: The image " + url + " did not load")); }));
        return zip(loadSuccess, loadError);
    };
    LazyImage.decorators = [
        { type: Directive, args: [{
                    selector: '[lazyImage]'
                },] }
    ];
    /** @nocollapse */
    LazyImage.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    LazyImage.propDecorators = {
        src: [{ type: Input, args: ['lazyImage',] }],
        mode: [{ type: Input }],
        progress: [{ type: Output }],
        loaded: [{ type: Output }],
        error: [{ type: Output }]
    };
    return LazyImage;
}());
export { LazyImage };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype._imageLoader$;
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype._loaderSub$;
    /** @type {?} */
    LazyImage.prototype.src;
    /** @type {?} */
    LazyImage.prototype.mode;
    /** @type {?} */
    LazyImage.prototype.progress;
    /** @type {?} */
    LazyImage.prototype.loaded;
    /** @type {?} */
    LazyImage.prototype.error;
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype.http;
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFjLFlBQVksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFnQkUsbUJBQ1UsSUFBZ0IsRUFDRSxRQUFhO1FBRnpDLGlCQU9DO1FBTlMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNFLGFBQVEsR0FBUixRQUFRLENBQUs7UUFiakMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQU0vQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXFDLENBQUM7UUFDakUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFNMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFJLENB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QyxDQUNwRjtRQUNELE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkF0RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFQUSxVQUFVO2dEQXVCZCxNQUFNLFNBQUMsUUFBUTs7O3NCQVZqQixLQUFLLFNBQUMsV0FBVzt1QkFFakIsS0FBSzsyQkFFTCxNQUFNO3lCQUNOLE1BQU07d0JBQ04sTUFBTTs7SUEwRVQsZ0JBQUM7Q0FBQSxBQXhGRCxJQXdGQztTQXJGWSxTQUFTOzs7Ozs7SUFFcEIsa0NBQThDOzs7OztJQUM5QyxnQ0FBeUM7O0lBRXpDLHdCQUFnQzs7SUFFaEMseUJBQStDOztJQUUvQyw2QkFBMkU7O0lBQzNFLDJCQUE4Qzs7SUFDOUMsMEJBQTRDOzs7OztJQUcxQyx5QkFBd0I7Ozs7O0lBQ3hCLDZCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVxdWVzdCwgSHR0cEV2ZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgemlwLCBmcm9tRXZlbnQsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xhenlJbWFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIExhenlJbWFnZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9pbWFnZUxvYWRlciQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX2xvYWRlclN1YiQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgQElucHV0KCdsYXp5SW1hZ2UnKSBzcmM6IHN0cmluZztcblxuICBASW5wdXQoKSBtb2RlOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnO1xuXG4gIEBPdXRwdXQoKSBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8eyBsb2FkZWQ6IG51bWJlciwgdG90YWw6IG51bWJlciB9PigpO1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICB0aGlzLl9sb2FkZXJTdWIkID0gdGhpcy5faW1hZ2VMb2FkZXIkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGltYWdlU3JjOiBzdHJpbmcpID0+IHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJyA/IHRoaXMucHJvZ3Jlc3NpdmVMb2FkZXIoaW1hZ2VTcmMpIDogdGhpcy5uYXRpdmVMb2FkZXIoaW1hZ2VTcmMpKVxuICAgICkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddICYmIGNoYW5nZXNbJ3NyYyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ3NyYyddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5zcmMpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2xvYWRlclN1YiQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9pbWFnZUxvYWRlciQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShpbWFnZVBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlTG9hZGVyJC5uZXh0KGltYWdlUGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBpbWFnZSB1c2luZyBIdHRwQ2xpZW50LCBUaGlzIHJlcXVpcmVzIFhIUiBhY2Nlc3MgdG8gdGhlIFVSTFxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBwcm9ncmVzc2l2ZUxvYWRlcih1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZG93bmxvYWRJbWFnZSA9IG5ldyBIdHRwUmVxdWVzdCgnR0VUJywgdXJsLCB7XG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NBQ0hFX0dBTExFUllfSU1BR0UnOiAndHJ1ZScgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoZG93bmxvYWRJbWFnZSkucGlwZShcbiAgICAgIHRhcCgoZXZlbnQ6IEh0dHBFdmVudDxzdHJpbmc+KSA9PiB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuRG93bmxvYWRQcm9ncmVzcykge1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuZW1pdCh7IGxvYWRlZDogZXZlbnQubG9hZGVkLCB0b3RhbDogZXZlbnQudG90YWwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5SZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQoVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5ib2R5KSk7XG4gICAgICAgIH1cblxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTmF0aXZlIGltYWdlIGxvYWRlciwgZG9lcyBub3QgZW1pdCBwcm9ncmVzc1xuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBuYXRpdmVMb2FkZXIodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgLy8gU3RvcCBwcmV2aW91c2x5IGxvYWRpbmdcbiAgICBpbWcuc3JjID0gdXJsO1xuICAgIC8vIEltYWdlIGxvYWQgc3VjY2Vzc1xuICAgIGNvbnN0IGxvYWRTdWNjZXNzID0gZnJvbUV2ZW50KGltZywgJ2xvYWQnKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGVkLmVtaXQodXJsKSlcbiAgICApO1xuICAgIC8vIEltYWdlIGxvYWQgZmFpbGVkXG4gICAgY29uc3QgbG9hZEVycm9yID0gZnJvbUV2ZW50KGltZywgJ2Vycm9yJykucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmVycm9yLmVtaXQobmV3IEVycm9yKGBbbGF6eUltYWdlXTogVGhlIGltYWdlICR7dXJsfSBkaWQgbm90IGxvYWRgKSkpXG4gICAgKTtcbiAgICByZXR1cm4gemlwKGxvYWRTdWNjZXNzLCBsb2FkRXJyb3IpO1xuICB9XG5cbn1cbiJdfQ==