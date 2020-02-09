/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { RequestCache } from './cache.service';
/**
 * If request is cachable (e.g., package search) and
 * response is in cache return the cached response as observable.
 *
 * If not in cache or not cachable,
 * pass request through to next()
 */
export class CachingInterceptor {
    /**
     * @param {?} cache
     */
    constructor(cache) {
        this.cache = cache;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (req.headers.has('CACHE_GALLERY_IMAGE') && isCachable(req)) {
            /** @type {?} */
            const cachedResponse = this.cache.get(req);
            // cache-then-refresh
            if (req.headers.get('x-refresh')) {
                /** @type {?} */
                const results$ = sendRequest(req, next, this.cache);
                return cachedResponse
                    ? results$.pipe(startWith(cachedResponse))
                    : results$;
            }
            // cache-or-fetch
            return cachedResponse
                ? of(cachedResponse)
                : sendRequest(req, next, this.cache);
        }
        return next.handle(req);
    }
}
CachingInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CachingInterceptor.ctorParameters = () => [
    { type: RequestCache }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CachingInterceptor.prototype.cache;
}
/**
 * Is this request cachable?
 * @param {?} req
 * @return {?}
 */
function isCachable(req) {
    // Only GET requests are cachable
    return req.method === 'GET';
}
/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 * @param {?} req
 * @param {?} next
 * @param {?} cache
 * @return {?}
 */
function sendRequest(req, next, cache) {
    /** @type {?} */
    const request = req.clone({ headers: req.headers.delete('CACHE_GALLERY_IMAGE') });
    return next.handle(request).pipe(tap(event => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
            cache.put(req, event); // Update the cache.
        }
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jYWNoZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXVDLFlBQVksRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7OztBQVcvQyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTs7a0JBRXZELGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFFMUMscUJBQXFCO1lBQ3JCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7O3NCQUMxQixRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbkQsT0FBTyxjQUFjO29CQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDZDtZQUNELGlCQUFpQjtZQUNqQixPQUFPLGNBQWM7Z0JBQ25CLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQXZCRixVQUFVOzs7O1lBVkYsWUFBWTs7Ozs7OztJQVlQLG1DQUEyQjs7Ozs7OztBQXlCekMsU0FBUyxVQUFVLENBQUMsR0FBcUI7SUFDdkMsaUNBQWlDO0lBQ2pDLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUM7QUFDOUIsQ0FBQzs7Ozs7Ozs7O0FBTUQsU0FBUyxXQUFXLENBQUMsR0FBcUIsRUFBRSxJQUFpQixFQUFFLEtBQW1COztVQUMxRSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLENBQUM7SUFDL0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1Ysa0RBQWtEO1FBQ2xELElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtZQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtTQUM1QztJQUNILENBQUMsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlcXVlc3RDYWNoZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XG5cbi8qKlxuICogSWYgcmVxdWVzdCBpcyBjYWNoYWJsZSAoZS5nLiwgcGFja2FnZSBzZWFyY2gpIGFuZFxuICogcmVzcG9uc2UgaXMgaW4gY2FjaGUgcmV0dXJuIHRoZSBjYWNoZWQgcmVzcG9uc2UgYXMgb2JzZXJ2YWJsZS5cbiAqXG4gKiBJZiBub3QgaW4gY2FjaGUgb3Igbm90IGNhY2hhYmxlLFxuICogcGFzcyByZXF1ZXN0IHRocm91Z2ggdG8gbmV4dCgpXG4gKi9cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhY2hpbmdJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FjaGU6IFJlcXVlc3RDYWNoZSkge1xuICB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICBpZiAocmVxLmhlYWRlcnMuaGFzKCdDQUNIRV9HQUxMRVJZX0lNQUdFJykgJiYgaXNDYWNoYWJsZShyZXEpKSB7XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJlc3BvbnNlID0gdGhpcy5jYWNoZS5nZXQocmVxKTtcblxuICAgICAgLy8gY2FjaGUtdGhlbi1yZWZyZXNoXG4gICAgICBpZiAocmVxLmhlYWRlcnMuZ2V0KCd4LXJlZnJlc2gnKSkge1xuICAgICAgICBjb25zdCByZXN1bHRzJCA9IHNlbmRSZXF1ZXN0KHJlcSwgbmV4dCwgdGhpcy5jYWNoZSk7XG4gICAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZVxuICAgICAgICAgID8gcmVzdWx0cyQucGlwZShzdGFydFdpdGgoY2FjaGVkUmVzcG9uc2UpKVxuICAgICAgICAgIDogcmVzdWx0cyQ7XG4gICAgICB9XG4gICAgICAvLyBjYWNoZS1vci1mZXRjaFxuICAgICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlXG4gICAgICAgID8gb2YoY2FjaGVkUmVzcG9uc2UpXG4gICAgICAgIDogc2VuZFJlcXVlc3QocmVxLCBuZXh0LCB0aGlzLmNhY2hlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cblxuLyoqIElzIHRoaXMgcmVxdWVzdCBjYWNoYWJsZT8gKi9cbmZ1bmN0aW9uIGlzQ2FjaGFibGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSB7XG4gIC8vIE9ubHkgR0VUIHJlcXVlc3RzIGFyZSBjYWNoYWJsZVxuICByZXR1cm4gcmVxLm1ldGhvZCA9PT0gJ0dFVCc7XG59XG5cbi8qKlxuICogR2V0IHNlcnZlciByZXNwb25zZSBvYnNlcnZhYmxlIGJ5IHNlbmRpbmcgcmVxdWVzdCB0byBgbmV4dCgpYC5cbiAqIFdpbGwgYWRkIHRoZSByZXNwb25zZSB0byB0aGUgY2FjaGUgb24gdGhlIHdheSBvdXQuXG4gKi9cbmZ1bmN0aW9uIHNlbmRSZXF1ZXN0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIsIGNhY2hlOiBSZXF1ZXN0Q2FjaGUpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSByZXEuY2xvbmUoe2hlYWRlcnM6IHJlcS5oZWFkZXJzLmRlbGV0ZSgnQ0FDSEVfR0FMTEVSWV9JTUFHRScpfSk7XG4gIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgIHRhcChldmVudCA9PiB7XG4gICAgICAvLyBUaGVyZSBtYXkgYmUgb3RoZXIgZXZlbnRzIGJlc2lkZXMgdGhlIHJlc3BvbnNlLlxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgIGNhY2hlLnB1dChyZXEsIGV2ZW50KTsgLy8gVXBkYXRlIHRoZSBjYWNoZS5cbiAgICAgIH1cbiAgICB9KVxuICApO1xufVxuIl19