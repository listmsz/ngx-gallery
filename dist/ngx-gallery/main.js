(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/core/fesm5/ngx-gallery-core.js":
/*!*********************************************!*\
  !*** ./dist/core/fesm5/ngx-gallery-core.js ***!
  \*********************************************/
/*! exports provided: Gallery, GalleryRef, GalleryComponent, ImageItem, VideoItem, IframeItem, YoutubeItem, GalleryIframeComponent, GalleryImageComponent, GalleryVideoComponent, GALLERY_CONFIG, GalleryAction, ImageSize, LoadingStrategy, ThumbnailsPosition, ImageLoaderMode, DotsPosition, CounterPosition, ThumbnailsMode, SlidingDirection, GalleryItemType, GalleryModule, ɵf, ɵh, ɵe, ɵk, ɵd, ɵg, ɵj, ɵi, ɵl, ɵm, ɵn, ɵc, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRef", function() { return GalleryRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItem", function() { return ImageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItem", function() { return VideoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeItem", function() { return IframeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeItem", function() { return YoutubeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryIframeComponent", function() { return GalleryIframeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImageComponent", function() { return GalleryImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryVideoComponent", function() { return GalleryVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALLERY_CONFIG", function() { return GALLERY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryAction", function() { return GalleryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSize", function() { return ImageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingStrategy", function() { return LoadingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsPosition", function() { return ThumbnailsPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderMode", function() { return ImageLoaderMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsPosition", function() { return DotsPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterPosition", function() { return CounterPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsMode", function() { return ThumbnailsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingDirection", function() { return SlidingDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryItemType", function() { return GalleryItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GalleryCoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GalleryCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GalleryDotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return GalleryItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GalleryNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GallerySliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return GalleryThumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return GalleryThumbsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return RadialProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return LazyImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return TapClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CachingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RequestCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RequestCacheWithMap; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./dist/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GalleryAction = {
    INITIALIZED: 'initialized',
    ITEMS_CHANGED: 'itemsChanged',
    INDEX_CHANGED: 'indexChanged',
    PLAY: 'play',
    STOP: 'stop',
};
/** @enum {string} */
var ImageSize = {
    Cover: 'cover',
    Contain: 'contain',
};
/** @enum {string} */
var LoadingStrategy = {
    Preload: 'preload',
    Lazy: 'lazy',
    Default: 'default',
};
/** @enum {string} */
var ThumbnailsPosition = {
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
};
/** @enum {string} */
var ImageLoaderMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
/** @enum {string} */
var DotsPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
/** @enum {string} */
var CounterPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
/** @enum {string} */
var ThumbnailsMode = {
    Free: 'free',
    Strict: 'strict',
};
/** @enum {string} */
var SlidingDirection = {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
};
/** @enum {string} */
var GalleryItemType = {
    Image: 'image',
    Video: 'video',
    Youtube: 'youtube',
    Iframe: 'iframe',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initial state
 * @type {?}
 */
var defaultState = {
    action: GalleryAction.INITIALIZED,
    isPlaying: false,
    hasNext: false,
    hasPrev: false,
    currIndex: 0,
    items: []
};
/** @type {?} */
var defaultConfig = {
    nav: true,
    loop: true,
    zoomOut: 0,
    dots: false,
    thumb: true,
    dotsSize: 30,
    counter: true,
    gestures: true,
    autoPlay: false,
    thumbWidth: 120,
    thumbHeight: 90,
    panSensitivity: 25,
    disableThumb: false,
    playerInterval: 3000,
    imageSize: ImageSize.Contain,
    thumbMode: ThumbnailsMode.Strict,
    dotsPosition: DotsPosition.Bottom,
    counterPosition: CounterPosition.Top,
    thumbPosition: ThumbnailsPosition.Bottom,
    loadingMode: ImageLoaderMode.Determinate,
    loadingStrategy: LoadingStrategy.Default,
    slidingDirection: SlidingDirection.Horizontal,
    navIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"512px\" height=\"512px\" enable-background=\"new 0 0 240.823 240.823\" version=\"1.1\" viewBox=\"0 0 240.823 240.823\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z\" fill=\"#fff\"/></svg>",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageItem = /** @class */ (function () {
    function ImageItem(data) {
        this.data = data;
        this.type = GalleryItemType.Image;
    }
    return ImageItem;
}());
var VideoItem = /** @class */ (function () {
    function VideoItem(data) {
        this.data = data;
        this.type = GalleryItemType.Video;
    }
    return VideoItem;
}());
var IframeItem = /** @class */ (function () {
    function IframeItem(data) {
        this.data = data;
        this.type = GalleryItemType.Iframe;
    }
    return IframeItem;
}());
var YoutubeItem = /** @class */ (function () {
    function YoutubeItem(data) {
        this.data = {
            src: "//youtube.com/embed/" + data.src + "?wmode=transparent",
            thumb: data.thumb ? data.thumb : "//img.youtube.com/vi/" + data.src + "/default.jpg"
        };
        this.type = GalleryItemType.Youtube;
    }
    return YoutubeItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var filterActions = function (actions) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (state) { return actions.indexOf(state.action) > -1; });
};
var GalleryRef = /** @class */ (function () {
    function GalleryRef(config, deleteInstance) {
        this.deleteInstance = deleteInstance;
        /**
         * Stream that emits on item click
         */
        this.itemClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Stream that emits on thumbnail click
         */
        this.thumbClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Stream that emits on an error occurs
         */
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](defaultState);
        this._config = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](config);
        this.state = this._state.asObservable();
        this.config = this._config.asObservable();
    }
    Object.defineProperty(GalleryRef.prototype, "initialized", {
        /** Stream that emits when gallery is initialized/reset */
        get: /**
         * Stream that emits when gallery is initialized/reset
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "itemsChanged", {
        /** Stream that emits when items is changed (items loaded, item added, item removed) */
        get: /**
         * Stream that emits when items is changed (items loaded, item added, item removed)
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "indexChanged", {
        /** Stream that emits when current item is changed */
        get: /**
         * Stream that emits when current item is changed
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playingChanged", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playerActions", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @private
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activate player actions listener
     */
    /**
     * Activate player actions listener
     * @return {?}
     */
    GalleryRef.prototype.activatePlayer = /**
     * Activate player actions listener
     * @return {?}
     */
    function () {
        var _this = this;
        return this.playerActions.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (e) {
            return e.isPlaying ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(_this._config.value.playerInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.next(); })) : rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
        }));
    };
    /**
     * Set gallery state
     * @param state
     */
    /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryRef.prototype.setState = /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._state.value, state));
    };
    /**
     * Set gallery config
     * @param config
     */
    /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    GalleryRef.prototype.setConfig = /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config.next(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._config.value, config));
    };
    /** Add gallery item
     * @param item - Gallery item object
     * @param active - Set the new item as current slide
     */
    /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    GalleryRef.prototype.add = /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    function (item, active) {
        /** @type {?} */
        var items = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this._state.value.items, [item]);
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this._state.value.currIndex
        });
    };
    /**
     * Add image item
     * @param data
     * @param active
     */
    /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addImage = /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new ImageItem(data), active);
    };
    /**
     * Add video item
     * @param data
     * @param active
     */
    /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addVideo = /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new VideoItem(data), active);
    };
    /**
     * Add iframe item
     * @param data
     * @param active
     */
    /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addIframe = /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new IframeItem(data), active);
    };
    /**
     * Add youtube item
     * @param data
     * @param active
     */
    /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addYoutube = /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new YoutubeItem(data), active);
    };
    /** Remove gallery item
     * @param i - Item index
     */
    /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    GalleryRef.prototype.remove = /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var items = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this._state.value.items.slice(0, i), this._state.value.items.slice(i + 1, this._state.value.items.length));
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    };
    /**
     * Load items and reset the state
     * @param items - Gallery images data
     */
    /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    GalleryRef.prototype.load = /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    function (items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items: items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    };
    /**
     * Set active item
     * @param i - Active Index
     */
    /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    GalleryRef.prototype.set = /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    function (i) {
        if (i !== this._state.value.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this._state.value.items.length - 1,
                hasPrev: i > 0
            });
        }
    };
    /**
     * Next item
     */
    /**
     * Next item
     * @return {?}
     */
    GalleryRef.prototype.next = /**
     * Next item
     * @return {?}
     */
    function () {
        if (this._state.value.hasNext) {
            this.set(this._state.value.currIndex + 1);
        }
        else if (this._config.value.loop) {
            this.set(0);
        }
    };
    /**
     * Prev item
     */
    /**
     * Prev item
     * @return {?}
     */
    GalleryRef.prototype.prev = /**
     * Prev item
     * @return {?}
     */
    function () {
        if (this._state.value.hasPrev) {
            this.set(this._state.value.currIndex - 1);
        }
        else if (this._config.value.loop) {
            this.set(this._state.value.items.length - 1);
        }
    };
    /**
     * Start gallery player
     * @param interval
     */
    /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    GalleryRef.prototype.play = /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        if (interval) {
            this.setConfig({ playerInterval: interval });
        }
        this.setState({ action: GalleryAction.PLAY, isPlaying: true });
    };
    /**
     * Stop gallery player
     */
    /**
     * Stop gallery player
     * @return {?}
     */
    GalleryRef.prototype.stop = /**
     * Stop gallery player
     * @return {?}
     */
    function () {
        this.setState({ action: GalleryAction.STOP, isPlaying: false });
    };
    /**
     * Reset gallery to initial state
     */
    /**
     * Reset gallery to initial state
     * @return {?}
     */
    GalleryRef.prototype.reset = /**
     * Reset gallery to initial state
     * @return {?}
     */
    function () {
        this.setState(defaultState);
    };
    /**
     * Destroy gallery
     */
    /**
     * Destroy gallery
     * @return {?}
     */
    GalleryRef.prototype.destroy = /**
     * Destroy gallery
     * @return {?}
     */
    function () {
        this._state.complete();
        this._config.complete();
        this.itemClick.complete();
        this.thumbClick.complete();
        this.deleteInstance();
    };
    return GalleryRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GALLERY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('galleryConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Gallery = /** @class */ (function () {
    function Gallery(config) {
        /**
         * Store gallery instances
         */
        this._instances = new Map();
        this.config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or create gallery by ID
     * @param id
     * @param config
     */
    /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    Gallery.prototype.ref = /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    function (id, config) {
        if (id === void 0) { id = 'root'; }
        if (this._instances.has(id)) {
            /** @type {?} */
            var galleryRef = this._instances.get(id);
            if (config) {
                galleryRef.setConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.config, config));
            }
            return galleryRef;
        }
        else {
            return this._instances.set(id, new GalleryRef(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.config, config), this.deleteInstance(id))).get(id);
        }
    };
    /**
     * Destroy all gallery instances
     */
    /**
     * Destroy all gallery instances
     * @return {?}
     */
    Gallery.prototype.destroyAll = /**
     * Destroy all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.destroy(); });
    };
    /**
     * Reset all gallery instances
     */
    /**
     * Reset all gallery instances
     * @return {?}
     */
    Gallery.prototype.resetAll = /**
     * Reset all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.reset(); });
    };
    /**
     * A destroyer function for each gallery instance
     */
    /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    Gallery.prototype.deleteInstance = /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return function () {
            if (_this._instances.has(id)) {
                _this._instances.delete(id);
            }
        };
    };
    Gallery.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Gallery.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [GALLERY_CONFIG,] }] }
    ]; };
    /** @nocollapse */ Gallery.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"])({ factory: function Gallery_Factory() { return new Gallery(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"])(GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
    return Gallery;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(_gallery) {
        this._gallery = _gallery;
        this.nav = this._gallery.config.nav;
        this.dots = this._gallery.config.dots;
        this.loop = this._gallery.config.loop;
        this.thumb = this._gallery.config.thumb;
        this.zoomOut = this._gallery.config.zoomOut;
        this.counter = this._gallery.config.counter;
        this.dotsSize = this._gallery.config.dotsSize;
        this.autoPlay = this._gallery.config.autoPlay;
        this.gestures = this._gallery.config.gestures;
        this.thumbWidth = this._gallery.config.thumbWidth;
        this.thumbHeight = this._gallery.config.thumbHeight;
        this.disableThumb = this._gallery.config.disableThumb;
        this.panSensitivity = this._gallery.config.panSensitivity;
        this.playerInterval = this._gallery.config.playerInterval;
        this.itemTemplate = this._gallery.config.itemTemplate;
        this.thumbTemplate = this._gallery.config.thumbTemplate;
        this.thumbMode = this._gallery.config.thumbMode;
        this.imageSize = this._gallery.config.imageSize;
        this.dotsPosition = this._gallery.config.dotsPosition;
        this.counterPosition = this._gallery.config.counterPosition;
        this.slidingDirection = this._gallery.config.slidingDirection;
        this.loadingMode = this._gallery.config.loadingMode;
        this.loadingStrategy = this._gallery.config.loadingStrategy;
        this.thumbPosition = this._gallery.config.thumbPosition;
        // Inputs used by the lightbox
        /**
         * Destroy gallery ref on component destroy event
         */
        this.destroyRef = true;
        /**
         * Skip initializing the config with components inputs (Lightbox mode)
         */
        this.skipInitConfig = false;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.playingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this._itemClick$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._thumbClick$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._itemChange$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._indexChange$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._playingChange$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._playerListener$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
    }
    /**
     * @private
     * @return {?}
     */
    GalleryComponent.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            nav: this.nav,
            dots: this.dots,
            loop: this.loop,
            thumb: this.thumb,
            zoomOut: this.zoomOut,
            counter: this.counter,
            autoPlay: this.autoPlay,
            gestures: this.gestures,
            dotsSize: this.dotsSize,
            imageSize: this.imageSize,
            thumbMode: this.thumbMode,
            thumbWidth: this.thumbWidth,
            thumbHeight: this.thumbHeight,
            loadingMode: this.loadingMode,
            disableThumb: this.disableThumb,
            dotsPosition: this.dotsPosition,
            itemTemplate: this.itemTemplate,
            thumbTemplate: this.thumbTemplate,
            thumbPosition: this.thumbPosition,
            panSensitivity: this.panSensitivity,
            playerInterval: this.playerInterval,
            counterPosition: this.counterPosition,
            loadingStrategy: this.loadingStrategy,
            slidingDirection: this.slidingDirection
        };
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.onAction = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        switch (i) {
            case 'next':
                this.galleryRef.next();
                break;
            case 'prev':
                this.galleryRef.prev();
                break;
            default:
                this.galleryRef.set((/** @type {?} */ (i)));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GalleryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.galleryRef) {
            this.galleryRef.setConfig(this.getConfig());
            if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
                this.load(this.items);
            }
        }
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get gallery instance by id
        if (this.skipInitConfig) {
            this.galleryRef = this._gallery.ref(this.id);
        }
        else {
            this.galleryRef = this._gallery.ref(this.id, this.getConfig());
        }
        // Load gallery items
        this.load(this.items);
        // Activate player listener
        this._playerListener$ = this.galleryRef.activatePlayer().subscribe();
        // Subscribes to events on demand
        if (this.indexChange.observers.length) {
            this._indexChange$ = this.galleryRef.indexChanged.subscribe(function (state) { return _this.indexChange.emit(state); });
        }
        if (this.itemsChange.observers.length) {
            this._itemChange$ = this.galleryRef.itemsChanged.subscribe(function (state) { return _this.itemsChange.emit(state); });
        }
        if (this.playingChange.observers.length) {
            this._playingChange$ = this.galleryRef.playingChanged.subscribe(function (state) { return _this.playingChange.emit(state); });
        }
        // Start playing if auto-play is set to true
        if (this.autoPlay) {
            this.play();
        }
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._itemClick$.unsubscribe();
        this._thumbClick$.unsubscribe();
        this._itemChange$.unsubscribe();
        this._indexChange$.unsubscribe();
        this._playingChange$.unsubscribe();
        this._playerListener$.unsubscribe();
        if (this.destroyRef) {
            this.galleryRef.destroy();
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.onItemClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.itemClick.emit(i);
        this.galleryRef.itemClick.next(i);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.onThumbClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.galleryRef.set(i);
        this.thumbClick.emit(i);
        this.galleryRef.thumbClick.next(i);
    };
    /**
     * @param {?} err
     * @return {?}
     */
    GalleryComponent.prototype.onError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.error.emit(err);
        this.galleryRef.error.next(err);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    GalleryComponent.prototype.load = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.galleryRef.load(items);
    };
    /**
     * @param {?} item
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.add = /**
     * @param {?} item
     * @param {?=} active
     * @return {?}
     */
    function (item, active) {
        this.galleryRef.add(item, active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addImage = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new ImageItem(data), active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addVideo = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new VideoItem(data), active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addIframe = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new IframeItem(data), active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addYoutube = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new YoutubeItem(data), active);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.remove = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.galleryRef.remove(i);
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.galleryRef.next();
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        this.galleryRef.prev();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.set = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.galleryRef.set(i);
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.galleryRef.reset();
    };
    /**
     * @param {?=} interval
     * @return {?}
     */
    GalleryComponent.prototype.play = /**
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        this.galleryRef.play(interval);
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.galleryRef.stop();
    };
    GalleryComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <gallery-core [state]=\"galleryRef.state | async\"\n                  [config]=\"galleryRef.config | async\"\n                  (action)=\"onAction($event)\"\n                  (itemClick)=\"onItemClick($event)\"\n                  (thumbClick)=\"onThumbClick($event)\"\n                  (error)=\"onError($event)\"></gallery-core>\n    <ng-content></ng-content>\n  ",
                    styles: ["::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:0}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}::ng-deep gallery-dots{margin:7px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1;-webkit-transform:scale(1.5)!important;transform:scale(1.5)!important}::ng-deep .g-dot-inner{background-color:#fff;opacity:.6;width:30%;height:30%;border-radius:50%;box-shadow:0 0 1px #000;transition:.2s}::ng-deep .g-dot,::ng-deep .g-dot-inner,::ng-deep gallery-dots{display:flex;justify-content:center;align-items:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{position:absolute;top:50%;width:30px;height:40px;cursor:pointer;z-index:999}::ng-deep .g-nav-next{right:.5em;-webkit-transform:translateY(-50%) perspective(1px);transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-prev{left:.5em;-webkit-transform:translateY(-50%) perspective(1px) scale(-1,-1);transform:translateY(-50%) perspective(1px) scale(-1,-1)}@media only screen and (max-width:480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep .g-items-container{height:100%}::ng-deep .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}::ng-deep gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}::ng-deep gallery-thumbs{display:block;z-index:1;overflow:unset}::ng-deep .g-thumbs-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex;overflow:unset}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;top:0;left:50%}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumb,::ng-deep gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;top:50%;left:0}::ng-deep gallery-core[thumbPosition=left] gallery-thumb,::ng-deep gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{position:relative;overflow:hidden;height:100%;background-color:#262626}::ng-deep .g-thumb-loading::before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:.8s linear infinite phAnimation;animation:.8s linear infinite phAnimation;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@-webkit-keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}::ng-deep gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}::ng-deep .g-counter{z-index:50;position:absolute;left:50%;-webkit-transform:translateX(-50%) perspective(1px);transform:translateX(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:#fff;background-color:rgba(0,0,0,.5)}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-item,::ng-deep gallery-thumb{position:relative;height:100%;width:100%;display:block;overflow:hidden}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item{z-index:10}::ng-deep gallery-item iframe,::ng-deep gallery-item video{position:absolute;width:100%;height:100%}::ng-deep gallery-thumb{opacity:.5;cursor:pointer;transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-thumb.g-active-thumb{opacity:1}::ng-deep .g-image-item{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100%;height:100%}::ng-deep .g-image-error-message,::ng-deep .g-loading,::ng-deep .g-template{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}::ng-deep gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}::ng-deep gallery-image{display:flex;justify-content:center;align-items:center;height:100%}::ng-deep gallery{position:relative;z-index:1;overflow:hidden;display:block;height:500px;background-color:#000}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{position:relative;overflow:hidden}::ng-deep .g-box,::ng-deep .g-slider,::ng-deep gallery-core{display:flex;height:100%;width:100%}::ng-deep gallery[fluid]{-webkit-transform:translateX(-50vw);transform:translateX(-50vw);width:100vw;left:50%}::ng-deep gallery[fluid][fluid=false]{-webkit-transform:none;transform:none;width:initial;left:initial}::ng-deep .g-no-transition{transition:unset!important}::ng-deep .g-box,::ng-deep gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}::ng-deep .g-btn-close svg,::ng-deep gallery-nav svg{width:100%;height:100%;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);transition:opacity .2s linear;opacity:.6}::ng-deep .g-btn-close svg:hover,::ng-deep gallery-nav svg:hover{opacity:1}@-webkit-keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}@keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}::ng-deep radial-progress{display:block;position:relative}::ng-deep radial-progress svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}::ng-deep radial-progress circle{-webkit-transform-origin:center;transform-origin:center;stroke:#fff}::ng-deep radial-progress .radial-progress-meter,::ng-deep radial-progress .radial-progress-value{fill:none}::ng-deep radial-progress .radial-progress-meter{opacity:.3}::ng-deep radial-progress .radial-progress-value{transition:.2s linear;stroke-linecap:round}::ng-deep radial-progress[mode=indeterminate] svg{-webkit-animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate;animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate}"]
                }] }
    ];
    /** @nocollapse */
    GalleryComponent.ctorParameters = function () { return [
        { type: Gallery }
    ]; };
    GalleryComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        nav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        dots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        zoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        counter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        dotsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        gestures: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        disableThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        panSensitivity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        playerInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        imageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        dotsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        counterPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        slidingDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        destroyRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        skipInitConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        playingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        indexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        itemsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GalleryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryIframeComponent = /** @class */ (function () {
    function GalleryIframeComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    Object.defineProperty(GalleryIframeComponent.prototype, "pauseVideo", {
        set: /**
         * @param {?} shouldPause
         * @return {?}
         */
        function (shouldPause) {
            /** @type {?} */
            var iframe = this.iframe.nativeElement;
            if (shouldPause) {
                /** @type {?} */
                var src = iframe.src;
                iframe.src = src;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryIframeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
    };
    GalleryIframeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-iframe',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <iframe #iframe\n            frameborder=\"0\"\n            allowfullscreen\n            [src]=\"iframeSrc\">\n    </iframe>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryIframeComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    GalleryIframeComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        pauseVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"], args: ['pause',] }],
        iframe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['iframe',] }]
    };
    return GalleryIframeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        /**
         * Stream that emits the state
         */
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('loading');
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
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-image',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                            ])
                        ])
                    ],
                    template: "\n    <ng-container [lazyImage]=\"src\"\n                  [mode]=\"mode\"\n                  (progress)=\"onProgress($event)\"\n                  (loaded)=\"onLoaded($event)\"\n                  (error)=\"onError($event)\"\n                  [ngSwitch]=\"state | async\">\n\n      <div *ngSwitchCase=\"'success'\"\n           @fadeIn\n           class=\"g-image-item\"\n           [style.backgroundImage]=\"imageUrl\">\n      </div>\n\n      <div *ngSwitchCase=\"'failed'\"\n           class=\"g-image-error-message\">\n        <div *ngIf=\"errorTemplate; else defaultError\"\n             [innerHTML]=\"errorTemplate\"></div>\n        <ng-template #defaultError>\n          <ng-container *ngIf=\"isThumbnail; else isLarge\">\n            <h4>\u26A0</h4>\n          </ng-container>\n          <ng-template #isLarge>\n            <h2>\u26A0</h2>\n            <p>Unable to load the image!</p>\n          </ng-template>\n        </ng-template>\n      </div>\n\n      <ng-container *ngSwitchCase=\"'loading'\">\n        <div *ngIf=\"loaderTemplate; else defaultLoader\"\n             class=\"g-loading\"\n             [innerHTML]=\"loaderTemplate\">\n        </div>\n        <ng-template #defaultLoader>\n\n          <div *ngIf=\"isThumbnail; else progressLoader\" class=\"g-thumb-loading\"></div>\n\n          <ng-template #progressLoader>\n            <radial-progress [value]=\"progress\" [mode]=\"mode\"></radial-progress>\n          </ng-template>\n\n          </ng-template>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryImageComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    GalleryImageComponent.propDecorators = {
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        isThumbnail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        imageLoadSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-image-loaded',] }],
        imageLoadFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-image-error',] }]
    };
    return GalleryImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryVideoComponent = /** @class */ (function () {
    function GalleryVideoComponent() {
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryVideoComponent.prototype, "pauseVideo", {
        set: /**
         * @param {?} shouldPause
         * @return {?}
         */
        function (shouldPause) {
            /** @type {?} */
            var video = this.video.nativeElement;
            if (shouldPause && !video.paused) {
                video.pause();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryVideoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.src instanceof Array) {
            // If video has multiple sources
            this.videoSources = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.src);
        }
        else {
            this.videoSources = [{ url: this.src }];
        }
    };
    GalleryVideoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-video',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <video #video controls poster=\"{{poster}}\" (error)=\"error.emit($event)\">\n      <source *ngFor=\"let src of videoSources\" src=\"{{src?.url}}\" type=\"{{src?.type}}\"/>\n    </video>\n  "
                }] }
    ];
    GalleryVideoComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        poster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        pauseVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"], args: ['pause',] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['video',] }]
    };
    return GalleryVideoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryNavComponent = /** @class */ (function () {
    function GalleryNavComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    GalleryNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
    };
    GalleryNavComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-nav',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <i *ngIf=\"config.loop || state.hasPrev\"\n       class=\"g-nav-prev\"\n       aria-label=\"Previous\"\n       (tapClick)=\"action.emit('prev')\"\n       [innerHtml]=\"navIcon\"></i>\n\n    <i *ngIf=\"config.loop || state.hasNext\"\n       class=\"g-nav-next\"\n       aria-label=\"Next\"\n       (tapClick)=\"action.emit('next')\"\n       [innerHtml]=\"navIcon\"></i>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryNavComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    GalleryNavComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GalleryNavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryCoreComponent = /** @class */ (function () {
    function GalleryCoreComponent() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryCoreComponent.prototype, "thumbPosition", {
        /** Set thumbnails position */
        get: /**
         * Set thumbnails position
         * @return {?}
         */
        function () {
            return this.config.thumbPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "slidingDirection", {
        /** Set sliding direction */
        get: /**
         * Set sliding direction
         * @return {?}
         */
        function () {
            return this.config.slidingDirection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "disableThumb", {
        /** Disable thumbnails clicks */
        get: /**
         * Disable thumbnails clicks
         * @return {?}
         */
        function () {
            return this.config.disableThumb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "imageSize", {
        /** Set gallery image size */
        get: /**
         * Set gallery image size
         * @return {?}
         */
        function () {
            return this.config.imageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "dotsPosition", {
        /** Set gallery dots position */
        get: /**
         * Set gallery dots position
         * @return {?}
         */
        function () {
            return this.config.dotsPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "counterPosition", {
        /** Set gallery counter position */
        get: /**
         * Set gallery counter position
         * @return {?}
         */
        function () {
            return this.config.counterPosition;
        },
        enumerable: true,
        configurable: true
    });
    GalleryCoreComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-core',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <gallery-thumbs *ngIf=\"config.thumb\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\"\n                    (thumbClick)=\"thumbClick.emit($event)\">\n    </gallery-thumbs>\n    <div class=\"g-box\">\n      <gallery-slider [state]=\"state\"\n                      [config]=\"config\"\n                      (action)=\"action.emit($event)\"\n                      (itemClick)=\"itemClick.emit($event)\"\n                      (error)=\"error.emit($event)\">\n\n        <gallery-nav *ngIf=\"config.nav && state.items.length > 1\"\n                     [state]=\"state\"\n                     [config]=\"config\"\n                     (action)=\"action.emit($event)\">\n        </gallery-nav>\n\n      </gallery-slider>\n\n      <gallery-dots *ngIf=\"config.dots\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\">\n      </gallery-dots>\n\n      <gallery-counter *ngIf=\"config.counter\"\n                       [state]=\"state\">\n      </gallery-counter>\n    </div>\n  "
                }] }
    ];
    GalleryCoreComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.thumbPosition',] }],
        slidingDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.slidingDirection',] }],
        disableThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.disableThumb',] }],
        imageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.imageSize',] }],
        dotsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.dotsPosition',] }],
        counterPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.counterPosition',] }]
    };
    return GalleryCoreComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryDotsComponent = /** @class */ (function () {
    function GalleryDotsComponent() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    GalleryDotsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-dots',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"g-dot\"\n         *ngFor=\"let item of state.items; let i = index\"\n         [class.g-dot-active]=\"i === state.currIndex\"\n         [style.width.px]=\"config?.dotsSize\"\n         [style.height.px]=\"config?.dotsSize\"\n         (tapClick)=\"action.emit(i)\">\n      <div class=\"g-dot-inner\"></div>\n    </div>\n  "
                }] }
    ];
    GalleryDotsComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GalleryDotsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryThumbsComponent = /** @class */ (function () {
    function GalleryThumbsComponent(_el, _zone) {
        var _this = this;
        this._el = _el;
        this._zone = _zone;
        /**
         * Sliding worker
         */
        this._slidingWorker$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({ value: 0, active: false });
        /**
         * Current slider position in free sliding mode
         */
        this._freeModeCurrentOffset = 0;
        /**
         * Stream that emits when the active item should change
         */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when thumb is clicked
         */
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return ({
            style: _this.getSliderStyles(state),
            active: state.active
        }); }));
    }
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
        this._freeModeCurrentOffset = 0;
    };
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.gestures && !this.config.disableThumb && typeof Hammer !== 'undefined') {
            /** @type {?} */
            var direction = void 0;
            switch (this.config.thumbPosition) {
                case ThumbnailsPosition.Right:
                case ThumbnailsPosition.Left:
                    direction = Hammer.DIRECTION_VERTICAL;
                    break;
                case ThumbnailsPosition.Top:
                case ThumbnailsPosition.Bottom:
                    direction = Hammer.DIRECTION_HORIZONTAL;
                    break;
            }
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction: direction });
            this._zone.runOutsideAngular(function () {
                // Move the slider
                switch (_this.config.thumbMode) {
                    case ThumbnailsMode.Strict:
                        _this._hammer.on('pan', function (e) { return _this.strictMode(e); });
                        break;
                    case ThumbnailsMode.Free:
                        _this._hammer.on('pan', function (e) { return _this.freeMode(e); });
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
    };
    /**
     * Sliding strict mode
     */
    /**
     * Sliding strict mode
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.strictMode = /**
     * Sliding strict mode
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: e.deltaY, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.verticalPan(e);
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: e.deltaX, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.horizontalPan(e);
                }
        }
    };
    /**
     * Sliding free mode
     */
    /**
     * Sliding free mode
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.freeMode = /**
     * Sliding free mode
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaY, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaY, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbHeight;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaY, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbHeight;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaY;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaX, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaX, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbWidth;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaX, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbWidth;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaX;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
        }
    };
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     */
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    GalleryThumbsComponent.prototype.minFreeScrollExceeded = /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (delta, width, height) {
        return -(this._freeModeCurrentOffset + delta - width / 2) > (this.state.items.length - this.state.currIndex) * height;
    };
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     */
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    GalleryThumbsComponent.prototype.maxFreeScrollExceeded = /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (delta, width, height) {
        return this._freeModeCurrentOffset + delta > (this.state.currIndex * width) + (height / 2);
    };
    /**
     * Convert sliding state to styles
     */
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryThumbsComponent.prototype.getSliderStyles = /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var value;
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.width = '100%';
                this.height = this.config.thumbHeight + 'px';
                value = -(this.state.currIndex * this.config.thumbWidth) - (this.config.thumbWidth / 2 - state.value);
                return {
                    transform: "translate3d(" + value + "px, 0, 0)",
                    width: this.state.items.length * this.config.thumbWidth + 'px',
                    height: '100%'
                };
            case ThumbnailsPosition.Left:
            case ThumbnailsPosition.Right:
                this.width = this.config.thumbWidth + 'px';
                this.height = '100%';
                value = -(this.state.currIndex * this.config.thumbHeight) - (this.config.thumbHeight / 2 - state.value);
                return {
                    transform: "translate3d(0, " + value + "px, 0)",
                    width: '100%',
                    height: this.state.items.length * this.config.thumbHeight + 'px'
                };
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.verticalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.horizontalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    GalleryThumbsComponent.prototype.next = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('next');
    };
    /**
     * @private
     * @return {?}
     */
    GalleryThumbsComponent.prototype.prev = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('prev');
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryThumbsComponent.prototype.updateSlider = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var newState = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    };
    GalleryThumbsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-thumbs',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-thumbs-container\">\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-thumb *ngFor=\"let item of state.items;let i = index\"\n                       [type]=\"item.type\"\n                       [config]=\"config\"\n                       [data]=\"item.data\"\n                       [currIndex]=\"state.currIndex\"\n                       [index]=\"i\"\n                       [tapClickDisabled]=\"config.disableThumb\"\n                       (tapClick)=\"thumbClick.emit(i)\"\n                       (error)=\"error.emit({itemIndex: i, error: $event})\"></gallery-thumb>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryThumbsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] }
    ]; };
    GalleryThumbsComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['style.height',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['style.width',] }]
    };
    return GalleryThumbsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GallerySliderComponent = /** @class */ (function () {
    function GallerySliderComponent(_el, _zone, platform) {
        var _this = this;
        this._el = _el;
        this._zone = _zone;
        this.platform = platform;
        /**
         * Sliding worker
         */
        this._slidingWorker$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({ value: 0, active: false });
        /**
         * Stream that emits when the active item should change
         */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when item is clicked
         */
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return ({
            style: _this.getSliderStyles(state),
            active: state.active
        }); }));
    }
    Object.defineProperty(GallerySliderComponent.prototype, "zoom", {
        /** Item zoom */
        get: /**
         * Item zoom
         * @return {?}
         */
        function () {
            return { transform: "perspective(50px) translate3d(0, 0, " + -this.config.zoomOut + "px)" };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
    };
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.gestures && typeof Hammer !== 'undefined') {
            /** @type {?} */
            var direction = this.config.slidingDirection === SlidingDirection.Horizontal
                ? Hammer.DIRECTION_HORIZONTAL
                : Hammer.DIRECTION_VERTICAL;
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction: direction });
            this._zone.runOutsideAngular(function () {
                // Move the slider
                _this._hammer.on('pan', function (e) {
                    switch (_this.config.slidingDirection) {
                        case SlidingDirection.Horizontal:
                            console.log({ e: e });
                            _this.updateSlider({ value: e.deltaX, active: true });
                            if (e.isFinal) {
                                _this.updateSlider({ value: 0, active: false });
                                _this.horizontalPan(e);
                            }
                            break;
                        case SlidingDirection.Vertical:
                            _this.updateSlider({ value: e.deltaY, active: true });
                            if (e.isFinal) {
                                _this.updateSlider({ value: 0, active: false });
                                _this.verticalPan(e);
                            }
                    }
                });
            });
        }
        // Rearrange slider on window resize
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platform)) {
            this._resizeSub$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.updateSlider(_this._slidingWorker$.value); })).subscribe();
        }
        setTimeout(function () { return _this.updateSlider({ value: 0, active: false }); });
    };
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
        if (this._resizeSub$) {
            this._resizeSub$.unsubscribe();
        }
        this._slidingWorker$.complete();
    };
    /**
     * Convert sliding state to styles
     */
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    GallerySliderComponent.prototype.getSliderStyles = /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        switch (this.config.slidingDirection) {
            case SlidingDirection.Horizontal:
                return {
                    transform: "translate3d(" + (-(this.state.currIndex * this._el.nativeElement.offsetWidth) + state.value) + "px, 0, 0)",
                    width: "calc(100% * " + this.state.items.length + ")",
                    height: '100%'
                };
            case SlidingDirection.Vertical:
                return {
                    transform: "translate3d(0, " + (-(this.state.currIndex * this._el.nativeElement.offsetHeight) + state.value) + "px, 0)",
                    width: '100%',
                    height: "calc(100% * " + this.state.items.length + ")",
                };
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GallerySliderComponent.prototype.verticalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GallerySliderComponent.prototype.horizontalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log({
            e: e,
            items: this.state.items,
            el: this._el,
            offsetWidth: this._el.nativeElement.offsetWidth
        });
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            debugger;
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    GallerySliderComponent.prototype.next = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('next');
    };
    /**
     * @private
     * @return {?}
     */
    GallerySliderComponent.prototype.prev = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('prev');
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    GallerySliderComponent.prototype.updateSlider = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var newState = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    };
    GallerySliderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-slider',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-items-container\"\n         [ngStyle]=\"zoom\">\n\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-item *ngFor=\"let item of state.items; let i = index\"\n                      [type]=\"item.type\"\n                      [config]=\"config\"\n                      [data]=\"item.data\"\n                      [currIndex]=\"state.currIndex\"\n                      [index]=\"i\"\n                      (tapClick)=\"itemClick.emit(i)\"\n                      (error)=\"error.emit({itemIndex: i, error: $event})\">\n        </gallery-item>\n\n      </div>\n    </div>\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    GallerySliderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"],] }] }
    ]; };
    GallerySliderComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GallerySliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryCounterComponent = /** @class */ (function () {
    function GalleryCounterComponent() {
    }
    GalleryCounterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-counter',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"g-counter\">{{(state.currIndex + 1) + '/' + state.items.length}}</div>\n  "
                }] }
    ];
    GalleryCounterComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return GalleryCounterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent() {
        this.Types = GalleryItemType;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryItemComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryItemComponent.prototype, "load", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.config.loadingStrategy) {
                case LoadingStrategy.Preload:
                    return true;
                case LoadingStrategy.Lazy:
                    return this.currIndex === this.index;
                default:
                    return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    GalleryItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-item',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <ng-container *ngIf=\"load\" [ngSwitch]=\"type\">\n\n      <ng-container *ngSwitchCase=\"Types.Image\">\n\n        <gallery-image [src]=\"data.src\"\n                       [mode]=\"config.loadingMode\"\n                       [loadingIcon]=\"config.loadingIcon\"\n                       [loadingError]=\"config.loadingError\"\n                       (error)=\"error.emit($event)\"></gallery-image>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n      <gallery-video *ngSwitchCase=\"Types.Video\"\n                     [src]=\"data.src\"\n                     [poster]=\"data.poster\"\n                     [pause]=\"currIndex !== index\"\n                     (error)=\"error.emit($event)\"></gallery-video>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Youtube\"\n                      [src]=\"data.src\"\n                      [pause]=\"currIndex !== index\"></gallery-iframe>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Iframe\"\n                      [src]=\"data.src\"></gallery-iframe>\n\n      <ng-container *ngSwitchDefault>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n    </ng-container>\n  "
                }] }
    ];
    GalleryItemComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        currIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-active-item',] }]
    };
    return GalleryItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryThumbComponent = /** @class */ (function () {
    function GalleryThumbComponent() {
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryThumbComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    GalleryThumbComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-thumb',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <gallery-image [src]=\"data.thumb\" \n                   mode=\"indeterminate\"\n                   [isThumbnail]=\"true\" \n                   [loadingIcon]=\"config.thumbLoadingIcon\"\n                   [loadingError]=\"config.thumbLoadingError \"\n                   (error)=\"error.emit($event)\"></gallery-image>\n\n    <div *ngIf=\"config.thumbTemplate\" class=\"g-template g-thumb-template\">\n      <ng-container\n        *ngTemplateOutlet=\"config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }\">\n      </ng-container>\n    </div>\n  "
                }] }
    ];
    GalleryThumbComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        currIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-active-thumb',] }]
    };
    return GalleryThumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'radial-progress',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[attr.mode]': 'mode',
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter'
                    },
                    template: "\n    <svg class=\"radial-progress\"\n         [style.width.px]=\"diameter\"\n         [style.height.px]=\"diameter\"\n         [attr.viewBox]=\"viewBox\"\n         preserveAspectRatio=\"xMidYMid meet\"\n         focusable=\"false\">\n\n      <circle class=\"radial-progress-meter\"\n              cx=\"50%\"\n              cy=\"50%\"\n              [attr.r]=\"circleRadius\"\n              [style.stroke-width.%]=\"circleStrokeWidth\"/>\n\n      <circle class=\"radial-progress-value\"\n              cx=\"50%\"\n              cy=\"50%\"\n              [attr.r]=\"circleRadius\"\n              [style.stroke-dashoffset.px]=\"strokeDashOffset\"\n              [style.stroke-dasharray.px]=\"strokeCircumference\"\n              [style.stroke-width.%]=\"circleStrokeWidth\"/>\n    </svg>\n  "
                }] }
    ];
    RadialProgressComponent.propDecorators = {
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return RadialProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyImage = /** @class */ (function () {
    function LazyImage(http, document) {
        var _this = this;
        this.http = http;
        this.document = document;
        this._imageLoader$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._loaderSub$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this.progress = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this._loaderSub$ = this._imageLoader$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (imageSrc) { return _this.mode === 'determinate' ? _this.progressiveLoader(imageSrc) : _this.nativeLoader(imageSrc); })).subscribe();
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
        var downloadImage = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('GET', url, {
            reportProgress: true,
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'CACHE_GALLERY_IMAGE': 'true' })
        });
        return this.http.request(downloadImage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
                _this.progress.emit({ loaded: event.loaded, total: event.total });
            }
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                _this.loaded.emit(URL.createObjectURL(event.body));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.error.emit(err);
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
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
        var loadSuccess = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(img, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loaded.emit(url); }));
        // Image load failed
        /** @type {?} */
        var loadError = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(img, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.error.emit(new Error("[lazyImage]: The image " + url + " did not load")); }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(loadSuccess, loadError);
    };
    LazyImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"], args: [{
                    selector: '[lazyImage]'
                },] }
    ];
    /** @nocollapse */
    LazyImage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    LazyImage.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"], args: ['lazyImage',] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return LazyImage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This directive uses tap event if HammerJS is loaded, otherwise it falls back to normal click event
 */
var TapClick = /** @class */ (function () {
    function TapClick(_el) {
        this._el = _el;
        this.clickListener = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this.tapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.activateClickEvent();
    };
    /**
     * @return {?}
     */
    TapClick.prototype.activateClickEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof Hammer !== 'undefined') {
            // Use Hammer.js tap event
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.on('tap', function () {
                if (!_this.tapClickDisabled) {
                    _this.tapClick.emit(null);
                }
            });
        }
        else {
            // Use normal click event
            this.clickListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._el.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () { return !_this.tapClickDisabled; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.tapClick.emit(null); })).subscribe();
        }
    };
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
        this.clickListener.unsubscribe();
    };
    TapClick.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"], args: [{
                    selector: '[tapClick]'
                },] }
    ];
    /** @nocollapse */
    TapClick.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] }
    ]; };
    TapClick.propDecorators = {
        tapClickDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        tapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return TapClick;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
RequestCache = /** @class */ (function () {
    function RequestCache() {
    }
    return RequestCache;
}());
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    return RequestCacheWithMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * If request is cachable (e.g., package search) and
 * response is in cache return the cached response as observable.
 *
 * If not in cache or not cachable,
 * pass request through to next()
 */
var CachingInterceptor = /** @class */ (function () {
    function CachingInterceptor(cache) {
        this.cache = cache;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    CachingInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (req.headers.has('CACHE_GALLERY_IMAGE') && isCachable(req)) {
            /** @type {?} */
            var cachedResponse = this.cache.get(req);
            // cache-then-refresh
            if (req.headers.get('x-refresh')) {
                /** @type {?} */
                var results$ = sendRequest(req, next, this.cache);
                return cachedResponse
                    ? results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(cachedResponse))
                    : results$;
            }
            // cache-or-fetch
            return cachedResponse
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(cachedResponse)
                : sendRequest(req, next, this.cache);
        }
        return next.handle(req);
    };
    CachingInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    /** @nocollapse */
    CachingInterceptor.ctorParameters = function () { return [
        { type: RequestCache }
    ]; };
    return CachingInterceptor;
}());
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
    var request = req.clone({ headers: req.headers.delete('CACHE_GALLERY_IMAGE') });
    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
        // There may be other events besides the response.
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
            cache.put(req, event); // Update the cache.
        }
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GalleryModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    GalleryModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                    ],
                    providers: [
                        { provide: RequestCache, useClass: RequestCacheWithMap },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: CachingInterceptor, multi: true }
                    ],
                    declarations: [
                        GalleryComponent,
                        GalleryNavComponent,
                        GalleryDotsComponent,
                        GalleryCoreComponent,
                        GallerySliderComponent,
                        GalleryCounterComponent,
                        GalleryThumbsComponent,
                        GalleryThumbComponent,
                        GalleryItemComponent,
                        GalleryImageComponent,
                        GalleryVideoComponent,
                        GalleryIframeComponent,
                        RadialProgressComponent,
                        LazyImage,
                        TapClick
                    ],
                    exports: [
                        GalleryComponent,
                        LazyImage,
                        TapClick,
                    ]
                },] }
    ];
    return GalleryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-gallery-core.js.map

/***/ }),

/***/ "./dist/gallerize/fesm5/ngx-gallery-gallerize.js":
/*!*******************************************************!*\
  !*** ./dist/gallerize/fesm5/ngx-gallery-gallerize.js ***!
  \*******************************************************/
/*! exports provided: GallerizeDirective, GallerizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerizeDirective", function() { return GallerizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerizeModule", function() { return GallerizeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-gallery/core */ "./dist/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./dist/lightbox/fesm5/ngx-gallery-lightbox.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GallerizeDirective = /** @class */ (function () {
    function GallerizeDirective(_zone, _el, _gallery, _lightbox, _renderer, platform, _document, _galleryCmp) {
        this._zone = _zone;
        this._el = _el;
        this._gallery = _gallery;
        this._lightbox = _lightbox;
        this._renderer = _renderer;
        this._document = _document;
        this._galleryCmp = _galleryCmp;
        /**
         * Default gallery id
         */
        this._galleryId = 'lightbox';
        /**
         * The selector used to query images elements
         */
        this.selector = 'img';
        // Set gallerize mode
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platform)) {
            this._mode = _galleryCmp ? "gallery" /* Gallery */ : "detector" /* Detector */;
        }
    }
    /**
     * @return {?}
     */
    GallerizeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            _this._galleryId = _this.gallerize || _this._galleryId;
            /** @type {?} */
            var ref = _this._gallery.ref(_this._galleryId);
            switch (_this._mode) {
                case "detector" /* Detector */:
                    _this.detectorMode(ref);
                    break;
                case "gallery" /* Gallery */:
                    _this.galleryMode(ref);
            }
        });
    };
    /**
     * @return {?}
     */
    GallerizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        switch (this._mode) {
            case "detector" /* Detector */:
                this._detector$.complete();
                this._observer$.disconnect();
                break;
            case "gallery" /* Gallery */:
                this._itemClick$.unsubscribe();
                this._itemChange$.unsubscribe();
        }
    };
    /** Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox */
    /**
     * Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    GallerizeDirective.prototype.galleryMode = /**
     * Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    function (galleryRef) {
        var _this = this;
        // Clone its items to the new gallery instance
        this._itemClick$ = this._galleryCmp.galleryRef.itemClick.subscribe(function (i) { return _this._lightbox.open(i, _this._galleryId); });
        this._itemChange$ = this._galleryCmp.galleryRef.itemsChanged.subscribe(function (state) { return galleryRef.load(state.items); });
    };
    /** Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox */
    /**
     * Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    GallerizeDirective.prototype.detectorMode = /**
     * Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    function (galleryRef) {
        var _this = this;
        this._detector$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Query image elements
        this._detector$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            /**
             * get all img elements from content
             * @type {?}
             */
            var imageElements = _this._el.nativeElement.querySelectorAll(_this.selector);
            if (imageElements && imageElements.length) {
                /** @type {?} */
                var images_1 = [];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(imageElements).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (el, i) {
                    // Add click event to the image
                    _this._renderer.setStyle(el, 'cursor', 'pointer');
                    _this._renderer.setProperty(el, 'onclick', function () {
                        return _this._zone.run(function () { return _this._lightbox.open(i, _this._galleryId); });
                    });
                    if (el instanceof HTMLImageElement) {
                        // If element is type of img use the src property
                        return {
                            src: el.getAttribute('imageSrc') || el.src,
                            thumb: el.getAttribute('thumbSrc') || el.src
                        };
                    }
                    else {
                        // Otherwise, use element background-image url
                        /** @type {?} */
                        var elStyle = el.currentStyle || _this._document.defaultView.getComputedStyle(el, null);
                        /** @type {?} */
                        var background = elStyle.backgroundImage.slice(4, -1).replace(/"/g, '');
                        return {
                            src: el.getAttribute('imageSrc') || background,
                            thumb: el.getAttribute('thumbSrc') || background
                        };
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return images_1.push(new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["ImageItem"](data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return galleryRef.load(images_1); }));
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
        })).subscribe();
        // Observe content changes
        this._observer$ = new MutationObserver(function () { return _this._detector$.next(); });
        this._observer$.observe(this._el.nativeElement, { childList: true, subtree: true });
    };
    GallerizeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[gallerize]'
                },] }
    ];
    /** @nocollapse */
    GallerizeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"] },
        { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    GallerizeDirective.propDecorators = {
        gallerize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return GallerizeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GallerizeModule = /** @class */ (function () {
    function GallerizeModule() {
    }
    GallerizeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [
                        _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"],
                        _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxModule"]
                    ],
                    declarations: [GallerizeDirective],
                    exports: [GallerizeDirective]
                },] }
    ];
    return GallerizeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-gallery-gallerize.js.map

/***/ }),

/***/ "./dist/lightbox/fesm5/ngx-gallery-lightbox.js":
/*!*****************************************************!*\
  !*** ./dist/lightbox/fesm5/ngx-gallery-lightbox.js ***!
  \*****************************************************/
/*! exports provided: LIGHTBOX_CONFIG, LightboxComponent, Lightbox, LightboxModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHTBOX_CONFIG", function() { return LIGHTBOX_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxComponent", function() { return LightboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lightbox", function() { return Lightbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxModule", function() { return LightboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return lightboxAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return LightboxDirective; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./dist/lightbox/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/core */ "./dist/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LIGHTBOX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('lightboxConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var lightboxAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('lightbox', [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'none', opacity: 1 }))),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(_document, _focusTrapFactory, _elementRef, sanitizer) {
        this._document = _document;
        this._focusTrapFactory = _focusTrapFactory;
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        /**
         * State of the lightbox animation.
         */
        this.state = 'enter';
        this._savePreviouslyFocusedElement();
    }
    /** Callback, invoked whenever an animation on the host completes. */
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    LightboxComponent.prototype.onAnimationDone = /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else {
            this.overlayRef.dispose();
            this._restoreFocus();
        }
    };
    /** Moves the focus inside the focus trap. */
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._trapFocus = /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    function () {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the lightbox would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._focusTrap.focusInitialElementWhenReady();
    };
    /** Saves a reference to the element that was focused before the lightbox was opened. */
    /**
     * Saves a reference to the element that was focused before the lightbox was opened.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._savePreviouslyFocusedElement = /**
     * Saves a reference to the element that was focused before the lightbox was opened.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this._document.activeElement));
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the lightbox immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(function () { return _this._elementRef.nativeElement.focus(); });
            }
        }
    };
    /** Restores focus to the element that was focused before the lightbox opened. */
    /**
     * Restores focus to the element that was focused before the lightbox opened.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._restoreFocus = /**
     * Restores focus to the element that was focused before the lightbox opened.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    LightboxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'lightbox',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    animations: [lightboxAnimation],
                    template: "\n    <gallery [id]=\"id\" [destroyRef]=\"false\" [skipInitConfig]=\"true\">\n      <i class=\"g-btn-close\" aria-label=\"Close\" (click)=\"overlayRef.detach()\"\n         [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(closeIcon)\"></i>\n    </gallery>\n  ",
                    host: {
                        'tabindex': '-1',
                        'aria-modal': 'true',
                        '[attr.id]': '"lightbox-" + id',
                        '[attr.role]': 'role',
                        '[attr.aria-labelledby]': 'ariaLabel ? null : ariaLabelledBy',
                        '[attr.aria-label]': 'ariaLabel',
                        '[attr.aria-describedby]': 'ariaDescribedBy || null',
                        '[@lightbox]': 'state',
                        '(@lightbox.done)': 'onAnimationDone($event)',
                    },
                    styles: ["::ng-deep lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}::ng-deep lightbox:focus{outline:0}::ng-deep lightbox gallery{overflow:hidden;margin:0;display:block;width:100%;height:100%}::ng-deep .g-backdrop{background-color:rgba(0,0,0,.32)}::ng-deep .fullscreen{width:100%}::ng-deep .fullscreen ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}::ng-deep .g-overlay{margin:auto}@media only screen and (max-width:480px){::ng-deep .g-overlay{width:100%}::ng-deep .g-overlay ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}}::ng-deep .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width:480px){::ng-deep .g-btn-close{right:.7em;top:.7em}}"]
                }] }
    ];
    /** @nocollapse */
    LightboxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] }
    ]; };
    return LightboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultConfig = {
    backdropClass: 'g-backdrop',
    panelClass: 'g-overlay',
    hasBackdrop: true,
    keyboardShortcuts: true,
    role: 'lightbox',
    closeIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"512px\" height=\"512px\" enable-background=\"new 0 0 47.971 47.971\" version=\"1.1\" viewBox=\"0 0 47.971 47.971\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\" fill=\"#fff\"/>\n</svg>\n"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Lightbox = /** @class */ (function () {
    function Lightbox(config, _gallery, _overlay) {
        this._gallery = _gallery;
        this._overlay = _overlay;
        /**
         * Stream that emits when lightbox is opened
         */
        this.opened = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Stream that emits when lightbox is closed
         */
        this.closed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Set Lightbox Config
     * @param config - LightboxConfig
     */
    /**
     * Set Lightbox Config
     * @param {?} config - LightboxConfig
     * @return {?}
     */
    Lightbox.prototype.setConfig = /**
     * Set Lightbox Config
     * @param {?} config - LightboxConfig
     * @return {?}
     */
    function (config) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this._config, config);
    };
    /**
     * Open Lightbox Overlay
     * @param i - Current Index
     * @param id - Gallery ID
     * @param config - Lightbox Config
     */
    /**
     * Open Lightbox Overlay
     * @param {?=} i - Current Index
     * @param {?=} id - Gallery ID
     * @param {?=} config - Lightbox Config
     * @return {?}
     */
    Lightbox.prototype.open = /**
     * Open Lightbox Overlay
     * @param {?=} i - Current Index
     * @param {?=} id - Gallery ID
     * @param {?=} config - Lightbox Config
     * @return {?}
     */
    function (i, id, config) {
        var _this = this;
        if (i === void 0) { i = 0; }
        if (id === void 0) { id = 'lightbox'; }
        /** @type {?} */
        var _config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this._config, config) : this._config;
        /** @type {?} */
        var overlayConfig = {
            backdropClass: _config.backdropClass,
            panelClass: _config.panelClass,
            hasBackdrop: _config.hasBackdrop,
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this._overlay.scrollStrategies.block(),
            disposeOnNavigation: true
        };
        /** @type {?} */
        var galleryRef = this._gallery.ref(id);
        galleryRef.set(i);
        this._overlayRef = this._overlay.create(overlayConfig);
        // overlay opened event
        this._overlayRef.attachments().subscribe(function () { return _this.opened.next(id); });
        // overlay closed event
        this._overlayRef.detachments().subscribe(function () { return _this.closed.next(id); });
        // Attach gallery to the overlay
        /** @type {?} */
        var galleryPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](LightboxComponent);
        /** @type {?} */
        var lightboxRef = this._overlayRef.attach(galleryPortal);
        lightboxRef.instance.id = id;
        lightboxRef.instance.overlayRef = this._overlayRef;
        lightboxRef.instance.closeIcon = this._config.closeIcon;
        lightboxRef.instance.role = this._config.role;
        lightboxRef.instance.ariaLabel = this._config.ariaLabel;
        lightboxRef.instance.ariaLabelledBy = this._config.ariaLabelledBy;
        lightboxRef.instance.ariaDescribedBy = this._config.ariaDescribedBy;
        if (_config.hasBackdrop) {
            this._overlayRef.backdropClick().subscribe(function () { return _this.close(); });
        }
        // Add keyboard shortcuts
        if (_config.keyboardShortcuts) {
            this._overlayRef.keydownEvents().subscribe(function (event) {
                switch (event.keyCode) {
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
                        galleryRef.prev();
                        break;
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
                        galleryRef.next();
                        break;
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]:
                        _this.close();
                }
            });
        }
    };
    /**
     * Close Lightbox Overlay
     */
    /**
     * Close Lightbox Overlay
     * @return {?}
     */
    Lightbox.prototype.close = /**
     * Close Lightbox Overlay
     * @return {?}
     */
    function () {
        if (this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
    };
    Lightbox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    /** @nocollapse */
    Lightbox.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [LIGHTBOX_CONFIG,] }] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__["Gallery"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"] }
    ]; };
    return Lightbox;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LightboxDirective = /** @class */ (function () {
    function LightboxDirective(_lightbox, _el, _renderer) {
        this._lightbox = _lightbox;
        this._el = _el;
        this._renderer = _renderer;
        this.clickEvent = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        this.index = 0;
        this.id = 'root';
    }
    /**
     * @return {?}
     */
    LightboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._el.nativeElement, 'cursor', 'pointer');
        this.clickEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this._el.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this._lightbox.open(_this.index, _this.id); })).subscribe();
    };
    /**
     * @return {?}
     */
    LightboxDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clickEvent.unsubscribe();
    };
    LightboxDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[lightbox]'
                },] }
    ];
    /** @nocollapse */
    LightboxDirective.ctorParameters = function () { return [
        { type: Lightbox },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] }
    ]; };
    LightboxDirective.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['lightbox',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['gallery',] }]
    };
    return LightboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LightboxModule = /** @class */ (function () {
    function LightboxModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LightboxModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: LightboxModule,
            providers: [
                {
                    provide: LIGHTBOX_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    LightboxModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                        _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"],
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"]
                    ],
                    declarations: [
                        LightboxComponent,
                        LightboxDirective
                    ],
                    exports: [
                        LightboxDirective
                    ],
                    providers: [
                        Lightbox
                    ],
                    entryComponents: [
                        LightboxComponent
                    ]
                },] }
    ];
    return LightboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-gallery-lightbox.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lazy_lazy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy/lazy.component */ "./src/app/lazy/lazy.component.ts");





var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'lazy',
        component: _lazy_lazy_component__WEBPACK_IMPORTED_MODULE_4__["LazyComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>@ngx-gallery</span>\n    <a mat-button routerLink=\"/\">Home</a>\n    <a mat-button routerLink=\"/lazy\">Lazy</a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/core */ "./dist/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./dist/lightbox/fesm5/ngx-gallery-lightbox.js");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "./dist/gallerize/fesm5/ngx-gallery-gallerize.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lazy_lazy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lazy/lazy.component */ "./src/app/lazy/lazy.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _lazy_lazy_component__WEBPACK_IMPORTED_MODULE_11__["LazyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"],
                _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__["LightboxModule"],
                _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_9__["GallerizeModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "./dist/core/fesm5/ngx-gallery-core.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.show = false;
        this.imageData = [
            {
                srcUrl: 'assets/img1.jpg',
                previewUrl: 'assets/img1.jpg'
            },
            {
                srcUrl: 'assets/img2.jpg',
                previewUrl: 'assets/img2.jpg',
            },
            {
                srcUrl: 'assets/img3.jpg',
                previewUrl: 'assets/img3.jpg',
            },
            {
                srcUrl: 'assets/img4.jpg',
                previewUrl: 'assets/img4.jpg',
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items = this.imageData.map(function (item) {
            return new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]({ src: item.srcUrl, thumb: item.previewUrl });
        });
    };
    HomeComponent.prototype.onError = function (e) {
        console.log('Test error', e);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: "\n    <div class=\"basic-container\">\n      <h2>Basic Example</h2>\n\n      <gallery *ngIf=\"show\" #gallery id=\"basic-test\" fluid\n               loadingStrategy=\"lazy\" [items]=\"items\" thumbPosition=\"top\" thumbMode=\"free\" (error)=\"onError($event)\">\n      </gallery>\n\n      <button mat-button (click)=\"show = !show\">Toggle</button>\n      <!--<button mat-button (click)=\"gallery.play()\">Play</button>-->\n      <!--<button mat-button (click)=\"gallery.stop()\">Stop</button>-->\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lazy/lazy.component.html":
/*!******************************************!*\
  !*** ./src/app/lazy/lazy.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lightbox-example\">\n  <h2>Lightbox Example</h2>\n  <button mat-raised-button (click)=\"openLightbox()\">Open Lightbox</button>\n</div>\n\n<div class=\"gallerize-example\">\n  <h2>Gallerize Example</h2>\n  <p class=\"container\" gallerize>\n    <img *ngFor=\"let img of items\"\n      [src]=\"img?.data?.thumb\"\n      [attr.imageSrc]=\"img?.data?.src\"\n      [attr.thumbSrc]=\"img?.data?.thumb\">\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/lazy/lazy.component.scss":
/*!******************************************!*\
  !*** ./src/app/lazy/lazy.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvbGF6eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lazy/lazy.component.ts":
/*!****************************************!*\
  !*** ./src/app/lazy/lazy.component.ts ***!
  \****************************************/
/*! exports provided: LazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "./dist/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./dist/lightbox/fesm5/ngx-gallery-lightbox.js");




var LazyComponent = /** @class */ (function () {
    function LazyComponent(gallery, lightbox) {
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.imageData = [
            {
                srcUrl: 'assets/img1.jpg',
                previewUrl: 'assets/img1.jpg'
            },
            {
                srcUrl: 'assets/img2.jpg',
                previewUrl: 'assets/img2.jpg',
            },
            {
                srcUrl: 'assets/img3.jpg',
                previewUrl: 'assets/img3.jpg',
            },
            {
                srcUrl: 'assets/img4.jpg',
                previewUrl: 'assets/img4.jpg',
            }
        ];
    }
    LazyComponent.prototype.ngOnInit = function () {
        this.items = this.imageData.map(function (item) {
            return new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]({ src: item.srcUrl, thumb: item.previewUrl });
        });
        // This is for Lightbox example
        this.gallery.ref('lightbox', { imageSize: 'cover', loadingStrategy: 'lazy', thumbPosition: 'top' }).load(this.items);
    };
    LazyComponent.prototype.openLightbox = function () {
        this.lightbox.open(0, 'lightbox');
    };
    LazyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lazy',
            template: __webpack_require__(/*! ./lazy.component.html */ "./src/app/lazy/lazy.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./lazy.component.scss */ "./src/app/lazy/lazy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__["Lightbox"]])
    ], LazyComponent);
    return LazyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/q/projects/ngx-gallery/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map