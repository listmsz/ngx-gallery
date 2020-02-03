/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Subject, Subscription, zip, fromEvent, EMPTY } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
export class LazyImage {
    /**
     * @param {?} http
     * @param {?} document
     */
    constructor(http, document) {
        this.http = http;
        this.document = document;
        this._imageLoader$ = new Subject();
        this._loaderSub$ = Subscription.EMPTY;
        this.progress = new EventEmitter();
        this.loaded = new EventEmitter();
        this.error = new EventEmitter();
        this._loaderSub$ = this._imageLoader$.pipe(switchMap((imageSrc) => this.mode === 'determinate' ? this.progressiveLoader(imageSrc) : this.nativeLoader(imageSrc))).subscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    }
    /**
     * @param {?} imagePath
     * @return {?}
     */
    loadImage(imagePath) {
        this._imageLoader$.next(imagePath);
    }
    /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param {?} url
     * @return {?}
     */
    progressiveLoader(url) {
        /** @type {?} */
        const downloadImage = new HttpRequest('GET', url, {
            reportProgress: true,
            responseType: 'blob',
            headers: new HttpHeaders({ 'CACHE_GALLERY_IMAGE': 'true' })
        });
        return this.http.request(downloadImage).pipe(tap((event) => {
            if (event.type === HttpEventType.DownloadProgress) {
                this.progress.emit({ loaded: event.loaded, total: event.total });
            }
            if (event.type === HttpEventType.Response) {
                this.loaded.emit(URL.createObjectURL(event.body));
            }
        }), catchError((err) => {
            this.error.emit(err);
            return EMPTY;
        }));
    }
    /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    nativeLoader(url) {
        /** @type {?} */
        const img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        /** @type {?} */
        const loadSuccess = fromEvent(img, 'load').pipe(tap(() => this.loaded.emit(url)));
        // Image load failed
        /** @type {?} */
        const loadError = fromEvent(img, 'error').pipe(tap(() => this.error.emit(new Error(`[lazyImage]: The image ${url} did not load`))));
        return zip(loadSuccess, loadError);
    }
}
LazyImage.decorators = [
    { type: Directive, args: [{
                selector: '[lazyImage]'
            },] }
];
/** @nocollapse */
LazyImage.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
LazyImage.propDecorators = {
    src: [{ type: Input, args: ['lazyImage',] }],
    mode: [{ type: Input }],
    progress: [{ type: Output }],
    loaded: [{ type: Output }],
    error: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFjLFlBQVksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLM0MsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBYXBCLFlBQ1UsSUFBZ0IsRUFDRSxRQUFhO1FBRC9CLFNBQUksR0FBSixJQUFJLENBQVk7UUFDRSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBYmpDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFNL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFxQyxDQUFDO1FBQ2pFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBTTFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUMs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QVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBUFEsVUFBVTs0Q0F1QmQsTUFBTSxTQUFDLFFBQVE7OztrQkFWakIsS0FBSyxTQUFDLFdBQVc7bUJBRWpCLEtBQUs7dUJBRUwsTUFBTTtxQkFDTixNQUFNO29CQUNOLE1BQU07Ozs7Ozs7SUFUUCxrQ0FBOEM7Ozs7O0lBQzlDLGdDQUF5Qzs7SUFFekMsd0JBQWdDOztJQUVoQyx5QkFBK0M7O0lBRS9DLDZCQUEyRTs7SUFDM0UsMkJBQThDOztJQUM5QywwQkFBNEM7Ozs7O0lBRzFDLHlCQUF3Qjs7Ozs7SUFDeEIsNkJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB6aXAsIGZyb21FdmVudCwgRU1QVFkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGF6eUltYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGF6eUltYWdlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2ltYWdlTG9hZGVyJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfbG9hZGVyU3ViJCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBASW5wdXQoJ2xhenlJbWFnZScpIHNyYzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG1vZGU6ICdkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZSc7XG5cbiAgQE91dHB1dCgpIHByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjx7IGxvYWRlZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyIH0+KCk7XG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuX2xvYWRlclN1YiQgPSB0aGlzLl9pbWFnZUxvYWRlciQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoaW1hZ2VTcmM6IHN0cmluZykgPT4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gdGhpcy5wcm9ncmVzc2l2ZUxvYWRlcihpbWFnZVNyYykgOiB0aGlzLm5hdGl2ZUxvYWRlcihpbWFnZVNyYykpXG4gICAgKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snc3JjJ10gJiYgY2hhbmdlc1snc3JjJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snc3JjJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLnNyYyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbG9hZGVyU3ViJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2ltYWdlTG9hZGVyJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbG9hZEltYWdlKGltYWdlUGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5faW1hZ2VMb2FkZXIkLm5leHQoaW1hZ2VQYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGltYWdlIHVzaW5nIEh0dHBDbGllbnQsIFRoaXMgcmVxdWlyZXMgWEhSIGFjY2VzcyB0byB0aGUgVVJMXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIHByb2dyZXNzaXZlTG9hZGVyKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkb3dubG9hZEltYWdlID0gbmV3IEh0dHBSZXF1ZXN0KCdHRVQnLCB1cmwsIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ0FDSEVfR0FMTEVSWV9JTUFHRSc6ICd0cnVlJyB9KVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChkb3dubG9hZEltYWdlKS5waXBlKFxuICAgICAgdGFwKChldmVudDogSHR0cEV2ZW50PHN0cmluZz4pID0+IHtcblxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5Eb3dubG9hZFByb2dyZXNzKSB7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzcy5lbWl0KHsgbG9hZGVkOiBldmVudC5sb2FkZWQsIHRvdGFsOiBldmVudC50b3RhbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlKSB7XG4gICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LmJvZHkpKTtcbiAgICAgICAgfVxuXG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XG4gICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXRpdmUgaW1hZ2UgbG9hZGVyLCBkb2VzIG5vdCBlbWl0IHByb2dyZXNzXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIG5hdGl2ZUxvYWRlcih1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyBTdG9wIHByZXZpb3VzbHkgbG9hZGluZ1xuICAgIGltZy5zcmMgPSB1cmw7XG4gICAgLy8gSW1hZ2UgbG9hZCBzdWNjZXNzXG4gICAgY29uc3QgbG9hZFN1Y2Nlc3MgPSBmcm9tRXZlbnQoaW1nLCAnbG9hZCcpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkZWQuZW1pdCh1cmwpKVxuICAgICk7XG4gICAgLy8gSW1hZ2UgbG9hZCBmYWlsZWRcbiAgICBjb25zdCBsb2FkRXJyb3IgPSBmcm9tRXZlbnQoaW1nLCAnZXJyb3InKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMuZXJyb3IuZW1pdChuZXcgRXJyb3IoYFtsYXp5SW1hZ2VdOiBUaGUgaW1hZ2UgJHt1cmx9IGRpZCBub3QgbG9hZGApKSlcbiAgICApO1xuICAgIHJldHVybiB6aXAobG9hZFN1Y2Nlc3MsIGxvYWRFcnJvcik7XG4gIH1cblxufVxuIl19