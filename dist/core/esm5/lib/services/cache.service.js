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
var /**
 * @abstract
 */
RequestCache = /** @class */ (function () {
    function RequestCache() {
    }
    return RequestCache;
}());
/**
 * @abstract
 */
export { RequestCache };
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
var maxAge = 30000;
// maximum cache age (ms)
var RequestCacheWithMap = /** @class */ (function () {
    function RequestCacheWithMap() {
        this.cache = new Map();
    }
    /**
     * @param {?} req
     * @return {?}
     */
    RequestCacheWithMap.prototype.get = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var url = req.urlWithParams;
        /** @type {?} */
        var cached = this.cache.get(url);
        if (!cached) {
            return undefined;
        }
        return cached.response;
    };
    /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    RequestCacheWithMap.prototype.put = /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    function (req, response) {
        var _this = this;
        /** @type {?} */
        var url = req.urlWithParams;
        /** @type {?} */
        var entry = { url: url, response: response, lastRead: Date.now() };
        this.cache.set(url, entry);
        // remove expired cache entries
        /** @type {?} */
        var expired = Date.now() - maxAge;
        this.cache.forEach(function (entry) {
            if (entry.lastRead < expired) {
                _this.cache.delete(entry.url);
            }
        });
    };
    RequestCacheWithMap.decorators = [
        { type: Injectable }
    ];
    return RequestCacheWithMap;
}());
export { RequestCacheWithMap };
if (false) {
    /** @type {?} */
    RequestCacheWithMap.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHM0MsdUNBSUM7OztJQUhDLGdDQUFZOztJQUNaLHFDQUE0Qjs7SUFDNUIscUNBQWlCOzs7OztBQUduQjs7OztJQUFBO0lBSUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7Ozs7O0lBSEMsZ0RBQW1FOzs7Ozs7O0lBRW5FLDBEQUF1RTs7O0lBR25FLE1BQU0sR0FBRyxLQUFLOztBQUVwQjtJQUFBO1FBRUUsVUFBSyxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0lBMEIvQyxDQUFDOzs7OztJQXhCQyxpQ0FBRzs7OztJQUFILFVBQUksR0FBcUI7O1lBQ2pCLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYTs7WUFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRUQsaUNBQUc7Ozs7O0lBQUgsVUFBSSxHQUFxQixFQUFFLFFBQTJCO1FBQXRELGlCQWFDOztZQVpPLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYTs7WUFFdkIsS0FBSyxHQUFHLEVBQUMsR0FBRyxLQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7OztZQUdyQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU07UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFVO1lBQzVCLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBM0JGLFVBQVU7O0lBNEJYLDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlksbUJBQW1COzs7SUFDOUIsb0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q2FjaGVFbnRyeSB7XG4gIHVybDogc3RyaW5nO1xuICByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT47XG4gIGxhc3RSZWFkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXF1ZXN0Q2FjaGUge1xuICBhYnN0cmFjdCBnZXQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlc3BvbnNlPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgYWJzdHJhY3QgcHV0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KTogdm9pZDtcbn1cblxuY29uc3QgbWF4QWdlID0gMzAwMDA7IC8vIG1heGltdW0gY2FjaGUgYWdlIChtcylcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RDYWNoZVdpdGhNYXAgaW1wbGVtZW50cyBSZXF1ZXN0Q2FjaGUge1xuICBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBSZXF1ZXN0Q2FjaGVFbnRyeT4oKTtcblxuICBnZXQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlc3BvbnNlPGFueT4gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHVybCA9IHJlcS51cmxXaXRoUGFyYW1zO1xuICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMuY2FjaGUuZ2V0KHVybCk7XG5cbiAgICBpZiAoIWNhY2hlZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZC5yZXNwb25zZTtcbiAgfVxuXG4gIHB1dChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55Pik6IHZvaWQge1xuICAgIGNvbnN0IHVybCA9IHJlcS51cmxXaXRoUGFyYW1zO1xuXG4gICAgY29uc3QgZW50cnkgPSB7dXJsLCByZXNwb25zZSwgbGFzdFJlYWQ6IERhdGUubm93KCl9O1xuICAgIHRoaXMuY2FjaGUuc2V0KHVybCwgZW50cnkpO1xuXG4gICAgLy8gcmVtb3ZlIGV4cGlyZWQgY2FjaGUgZW50cmllc1xuICAgIGNvbnN0IGV4cGlyZWQgPSBEYXRlLm5vdygpIC0gbWF4QWdlO1xuICAgIHRoaXMuY2FjaGUuZm9yRWFjaCgoZW50cnk6IGFueSkgPT4ge1xuICAgICAgaWYgKGVudHJ5Lmxhc3RSZWFkIDwgZXhwaXJlZCkge1xuICAgICAgICB0aGlzLmNhY2hlLmRlbGV0ZShlbnRyeS51cmwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=