/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function RequestCacheEntry() { }
if (false) {
    /** @type {?} */
    RequestCacheEntry.prototype.url;
    /** @type {?} */
    RequestCacheEntry.prototype.response;
    /** @type {?} */
    RequestCacheEntry.prototype.lastRead;
}
/**
 * @abstract
 */
export class RequestCache {
}
if (false) {
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    RequestCache.prototype.get = function (req) { };
    /**
     * @abstract
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    RequestCache.prototype.put = function (req, response) { };
}
/** @type {?} */
const maxAge = 30000;
// maximum cache age (ms)
export class RequestCacheWithMap {
    constructor() {
        this.cache = new Map();
    }
    /**
     * @param {?} req
     * @return {?}
     */
    get(req) {
        /** @type {?} */
        const url = req.urlWithParams;
        /** @type {?} */
        const cached = this.cache.get(url);
        if (!cached) {
            return undefined;
        }
        return cached.response;
    }
    /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    put(req, response) {
        /** @type {?} */
        const url = req.urlWithParams;
        /** @type {?} */
        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);
        // remove expired cache entries
        /** @type {?} */
        const expired = Date.now() - maxAge;
        this.cache.forEach((entry) => {
            if (entry.lastRead < expired) {
                this.cache.delete(entry.url);
            }
        });
    }
}
RequestCacheWithMap.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    RequestCacheWithMap.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHM0MsdUNBSUM7OztJQUhDLGdDQUFZOztJQUNaLHFDQUE0Qjs7SUFDNUIscUNBQWlCOzs7OztBQUduQixNQUFNLE9BQWdCLFlBQVk7Q0FJakM7Ozs7Ozs7SUFIQyxnREFBbUU7Ozs7Ozs7SUFFbkUsMERBQXVFOzs7TUFHbkUsTUFBTSxHQUFHLEtBQUs7O0FBR3BCLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFRSxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7SUEwQi9DLENBQUM7Ozs7O0lBeEJDLEdBQUcsQ0FBQyxHQUFxQjs7Y0FDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhOztjQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRWxDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBcUIsRUFBRSxRQUEyQjs7Y0FDOUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhOztjQUV2QixLQUFLLEdBQUcsRUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Y0FHckIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDaEMsSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzQkYsVUFBVTs7OztJQUVULG9DQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENhY2hlRW50cnkge1xuICB1cmw6IHN0cmluZztcbiAgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+O1xuICBsYXN0UmVhZDogbnVtYmVyO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVxdWVzdENhY2hlIHtcbiAgYWJzdHJhY3QgZ2V0KHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IEh0dHBSZXNwb25zZTxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIGFic3RyYWN0IHB1dChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55Pik6IHZvaWQ7XG59XG5cbmNvbnN0IG1heEFnZSA9IDMwMDAwOyAvLyBtYXhpbXVtIGNhY2hlIGFnZSAobXMpXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0Q2FjaGVXaXRoTWFwIGltcGxlbWVudHMgUmVxdWVzdENhY2hlIHtcbiAgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgUmVxdWVzdENhY2hlRW50cnk+KCk7XG5cbiAgZ2V0KHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IEh0dHBSZXNwb25zZTxhbnk+IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB1cmwgPSByZXEudXJsV2l0aFBhcmFtcztcbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLmNhY2hlLmdldCh1cmwpO1xuXG4gICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWQucmVzcG9uc2U7XG4gIH1cblxuICBwdXQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSByZXEudXJsV2l0aFBhcmFtcztcblxuICAgIGNvbnN0IGVudHJ5ID0ge3VybCwgcmVzcG9uc2UsIGxhc3RSZWFkOiBEYXRlLm5vdygpfTtcbiAgICB0aGlzLmNhY2hlLnNldCh1cmwsIGVudHJ5KTtcblxuICAgIC8vIHJlbW92ZSBleHBpcmVkIGNhY2hlIGVudHJpZXNcbiAgICBjb25zdCBleHBpcmVkID0gRGF0ZS5ub3coKSAtIG1heEFnZTtcbiAgICB0aGlzLmNhY2hlLmZvckVhY2goKGVudHJ5OiBhbnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5sYXN0UmVhZCA8IGV4cGlyZWQpIHtcbiAgICAgICAgdGhpcy5jYWNoZS5kZWxldGUoZW50cnkudXJsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19