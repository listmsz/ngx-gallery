/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, TemplateRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gallery } from '../services/gallery.service';
import { IframeItem, ImageItem, VideoItem, YoutubeItem } from './templates/items.model';
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
        this.itemClick = new EventEmitter();
        this.thumbClick = new EventEmitter();
        this.playingChange = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.error = new EventEmitter();
        this._itemClick$ = Subscription.EMPTY;
        this._thumbClick$ = Subscription.EMPTY;
        this._itemChange$ = Subscription.EMPTY;
        this._indexChange$ = Subscription.EMPTY;
        this._playingChange$ = Subscription.EMPTY;
        this._playerListener$ = Subscription.EMPTY;
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
        { type: Component, args: [{
                    selector: 'gallery',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <gallery-core [state]=\"galleryRef.state | async\"\n                  [config]=\"galleryRef.config | async\"\n                  (action)=\"onAction($event)\"\n                  (itemClick)=\"onItemClick($event)\"\n                  (thumbClick)=\"onThumbClick($event)\"\n                  (error)=\"onError($event)\"></gallery-core>\n    <ng-content></ng-content>\n  ",
                    styles: ["::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:0}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}::ng-deep gallery-dots{margin:7px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1;-webkit-transform:scale(1.5)!important;transform:scale(1.5)!important}::ng-deep .g-dot-inner{background-color:#fff;opacity:.6;width:30%;height:30%;border-radius:50%;box-shadow:0 0 1px #000;transition:.2s}::ng-deep .g-dot,::ng-deep .g-dot-inner,::ng-deep gallery-dots{display:flex;justify-content:center;align-items:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{position:absolute;top:50%;width:30px;height:40px;cursor:pointer;z-index:999}::ng-deep .g-nav-next{right:.5em;-webkit-transform:translateY(-50%) perspective(1px);transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-prev{left:.5em;-webkit-transform:translateY(-50%) perspective(1px) scale(-1,-1);transform:translateY(-50%) perspective(1px) scale(-1,-1)}@media only screen and (max-width:480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep .g-items-container{height:100%}::ng-deep .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}::ng-deep gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}::ng-deep gallery-thumbs{display:block;z-index:1;overflow:unset}::ng-deep .g-thumbs-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex;overflow:unset}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;top:0;left:50%}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumb,::ng-deep gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;top:50%;left:0}::ng-deep gallery-core[thumbPosition=left] gallery-thumb,::ng-deep gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{position:relative;overflow:hidden;height:100%;background-color:#262626}::ng-deep .g-thumb-loading::before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:.8s linear infinite phAnimation;animation:.8s linear infinite phAnimation;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@-webkit-keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}::ng-deep gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}::ng-deep .g-counter{z-index:50;position:absolute;left:50%;-webkit-transform:translateX(-50%) perspective(1px);transform:translateX(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:#fff;background-color:rgba(0,0,0,.5)}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-item,::ng-deep gallery-thumb{position:relative;height:100%;width:100%;display:block;overflow:hidden}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item{z-index:10}::ng-deep gallery-item iframe,::ng-deep gallery-item video{position:absolute;width:100%;height:100%}::ng-deep gallery-thumb{opacity:.5;cursor:pointer;transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-thumb.g-active-thumb{opacity:1}::ng-deep .g-image-item{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100%;height:100%}::ng-deep .g-image-error-message,::ng-deep .g-loading,::ng-deep .g-template{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}::ng-deep gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}::ng-deep gallery-image{display:flex;justify-content:center;align-items:center;height:100%}::ng-deep gallery{position:relative;z-index:1;overflow:hidden;display:block;height:500px;background-color:#000}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{position:relative;overflow:hidden}::ng-deep .g-box,::ng-deep .g-slider,::ng-deep gallery-core{display:flex;height:100%;width:100%}::ng-deep gallery[fluid]{-webkit-transform:translateX(-50vw);transform:translateX(-50vw);width:100vw;left:50%}::ng-deep gallery[fluid][fluid=false]{-webkit-transform:none;transform:none;width:initial;left:initial}::ng-deep .g-no-transition{transition:unset!important}::ng-deep .g-box,::ng-deep gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}::ng-deep .g-btn-close svg,::ng-deep gallery-nav svg{width:100%;height:100%;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);transition:opacity .2s linear;opacity:.6}::ng-deep .g-btn-close svg:hover,::ng-deep gallery-nav svg:hover{opacity:1}@-webkit-keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}@keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}::ng-deep radial-progress{display:block;position:relative}::ng-deep radial-progress svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}::ng-deep radial-progress circle{-webkit-transform-origin:center;transform-origin:center;stroke:#fff}::ng-deep radial-progress .radial-progress-meter,::ng-deep radial-progress .radial-progress-value{fill:none}::ng-deep radial-progress .radial-progress-meter{opacity:.3}::ng-deep radial-progress .radial-progress-value{transition:.2s linear;stroke-linecap:round}::ng-deep radial-progress[mode=indeterminate] svg{-webkit-animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate;animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate}"]
                }] }
    ];
    /** @nocollapse */
    GalleryComponent.ctorParameters = function () { return [
        { type: Gallery }
    ]; };
    GalleryComponent.propDecorators = {
        id: [{ type: Input }],
        items: [{ type: Input }],
        nav: [{ type: Input }],
        dots: [{ type: Input }],
        loop: [{ type: Input }],
        thumb: [{ type: Input }],
        zoomOut: [{ type: Input }],
        counter: [{ type: Input }],
        dotsSize: [{ type: Input }],
        autoPlay: [{ type: Input }],
        gestures: [{ type: Input }],
        thumbWidth: [{ type: Input }],
        thumbHeight: [{ type: Input }],
        disableThumb: [{ type: Input }],
        panSensitivity: [{ type: Input }],
        playerInterval: [{ type: Input }],
        itemTemplate: [{ type: Input }],
        thumbTemplate: [{ type: Input }],
        thumbMode: [{ type: Input }],
        imageSize: [{ type: Input }],
        dotsPosition: [{ type: Input }],
        counterPosition: [{ type: Input }],
        slidingDirection: [{ type: Input }],
        loadingMode: [{ type: Input }],
        loadingStrategy: [{ type: Input }],
        thumbPosition: [{ type: Input }],
        destroyRef: [{ type: Input }],
        skipInitConfig: [{ type: Input }],
        itemClick: [{ type: Output }],
        thumbClick: [{ type: Output }],
        playingChange: [{ type: Output }],
        indexChange: [{ type: Output }],
        itemsChange: [{ type: Output }],
        error: [{ type: Output }]
    };
    return GalleryComponent;
}());
export { GalleryComponent };
if (false) {
    /** @type {?} */
    GalleryComponent.prototype.galleryRef;
    /** @type {?} */
    GalleryComponent.prototype.id;
    /** @type {?} */
    GalleryComponent.prototype.items;
    /** @type {?} */
    GalleryComponent.prototype.nav;
    /** @type {?} */
    GalleryComponent.prototype.dots;
    /** @type {?} */
    GalleryComponent.prototype.loop;
    /** @type {?} */
    GalleryComponent.prototype.thumb;
    /** @type {?} */
    GalleryComponent.prototype.zoomOut;
    /** @type {?} */
    GalleryComponent.prototype.counter;
    /** @type {?} */
    GalleryComponent.prototype.dotsSize;
    /** @type {?} */
    GalleryComponent.prototype.autoPlay;
    /** @type {?} */
    GalleryComponent.prototype.gestures;
    /** @type {?} */
    GalleryComponent.prototype.thumbWidth;
    /** @type {?} */
    GalleryComponent.prototype.thumbHeight;
    /** @type {?} */
    GalleryComponent.prototype.disableThumb;
    /** @type {?} */
    GalleryComponent.prototype.panSensitivity;
    /** @type {?} */
    GalleryComponent.prototype.playerInterval;
    /** @type {?} */
    GalleryComponent.prototype.itemTemplate;
    /** @type {?} */
    GalleryComponent.prototype.thumbTemplate;
    /** @type {?} */
    GalleryComponent.prototype.thumbMode;
    /** @type {?} */
    GalleryComponent.prototype.imageSize;
    /** @type {?} */
    GalleryComponent.prototype.dotsPosition;
    /** @type {?} */
    GalleryComponent.prototype.counterPosition;
    /** @type {?} */
    GalleryComponent.prototype.slidingDirection;
    /** @type {?} */
    GalleryComponent.prototype.loadingMode;
    /** @type {?} */
    GalleryComponent.prototype.loadingStrategy;
    /** @type {?} */
    GalleryComponent.prototype.thumbPosition;
    /**
     * Destroy gallery ref on component destroy event
     * @type {?}
     */
    GalleryComponent.prototype.destroyRef;
    /**
     * Skip initializing the config with components inputs (Lightbox mode)
     * @type {?}
     */
    GalleryComponent.prototype.skipInitConfig;
    /** @type {?} */
    GalleryComponent.prototype.itemClick;
    /** @type {?} */
    GalleryComponent.prototype.thumbClick;
    /** @type {?} */
    GalleryComponent.prototype.playingChange;
    /** @type {?} */
    GalleryComponent.prototype.indexChange;
    /** @type {?} */
    GalleryComponent.prototype.itemsChange;
    /** @type {?} */
    GalleryComponent.prototype.error;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._itemClick$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._thumbClick$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._itemChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._indexChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._playingChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._playerListener$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dhbGxlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBS04sV0FBVyxFQUNYLFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RjtJQWtFRSwwQkFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQS9DNUIsUUFBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxTQUFJLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFDLFNBQUksR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUMsVUFBSyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM1QyxZQUFPLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9DLFlBQU8sR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEQsYUFBUSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqRCxhQUFRLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMs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Ozs7OztJQUMzRCx3Q0FBNEQ7Ozs7O0lBQzVELHdDQUE0RDs7Ozs7SUFDNUQseUNBQTZEOzs7OztJQUM3RCwyQ0FBK0Q7Ozs7O0lBQy9ELDRDQUFnRTs7Ozs7SUFFcEQsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uTGlrZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBHYWxsZXJ5UmVmIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FsbGVyeS1yZWYnO1xuaW1wb3J0IHsgR2FsbGVyeUVycm9yLCBHYWxsZXJ5SXRlbSwgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgSWZyYW1lSXRlbSwgSW1hZ2VJdGVtLCBWaWRlb0l0ZW0sIFlvdXR1YmVJdGVtIH0gZnJvbSAnLi90ZW1wbGF0ZXMvaXRlbXMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZ2FsbGVyeS5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGdhbGxlcnktY29yZSBbc3RhdGVdPVwiZ2FsbGVyeVJlZi5zdGF0ZSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZ2FsbGVyeVJlZi5jb25maWcgfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICAoYWN0aW9uKT1cIm9uQWN0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICh0aHVtYkNsaWNrKT1cIm9uVGh1bWJDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJvbkVycm9yKCRldmVudClcIj48L2dhbGxlcnktY29yZT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIGdhbGxlcnlSZWY6IEdhbGxlcnlSZWY7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1zOiBHYWxsZXJ5SXRlbSBbXTtcbiAgQElucHV0KCkgbmF2OiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcubmF2O1xuICBASW5wdXQoKSBkb3RzOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZG90cztcbiAgQElucHV0KCkgbG9vcDogYm9vbGVhbiA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmxvb3A7XG4gIEBJbnB1dCgpIHRodW1iOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcudGh1bWI7XG4gIEBJbnB1dCgpIHpvb21PdXQ6IG51bWJlciA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnpvb21PdXQ7XG4gIEBJbnB1dCgpIGNvdW50ZXI6IGJvb2xlYW4gPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5jb3VudGVyO1xuICBASW5wdXQoKSBkb3RzU2l6ZTogbnVtYmVyID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZG90c1NpemU7XG4gIEBJbnB1dCgpIGF1dG9QbGF5OiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuYXV0b1BsYXk7XG4gIEBJbnB1dCgpIGdlc3R1cmVzOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZ2VzdHVyZXM7XG4gIEBJbnB1dCgpIHRodW1iV2lkdGg6IG51bWJlciA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnRodW1iV2lkdGg7XG4gIEBJbnB1dCgpIHRodW1iSGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy50aHVtYkhlaWdodDtcbiAgQElucHV0KCkgZGlzYWJsZVRodW1iOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZGlzYWJsZVRodW1iO1xuICBASW5wdXQoKSBwYW5TZW5zaXRpdml0eTogbnVtYmVyID0gdGhpcy5fZ2FsbGVyeS5jb25maWcucGFuU2Vuc2l0aXZpdHk7XG4gIEBJbnB1dCgpIHBsYXllckludGVydmFsOiBudW1iZXIgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5wbGF5ZXJJbnRlcnZhbDtcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuaXRlbVRlbXBsYXRlO1xuICBASW5wdXQoKSB0aHVtYlRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gdGhpcy5fZ2FsbGVyeS5jb25maWcudGh1bWJUZW1wbGF0ZTtcbiAgQElucHV0KCkgdGh1bWJNb2RlOiAnc3RyaWN0JyB8ICdmcmVlJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnRodW1iTW9kZTtcbiAgQElucHV0KCkgaW1hZ2VTaXplOiAnY292ZXInIHwgJ2NvbnRhaW4nID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuaW1hZ2VTaXplO1xuICBASW5wdXQoKSBkb3RzUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5kb3RzUG9zaXRpb247XG4gIEBJbnB1dCgpIGNvdW50ZXJQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmNvdW50ZXJQb3NpdGlvbjtcbiAgQElucHV0KCkgc2xpZGluZ0RpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb247XG4gIEBJbnB1dCgpIGxvYWRpbmdNb2RlOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnID0gdGhpcy5fZ2FsbGVyeS5jb25maWcubG9hZGluZ01vZGU7XG4gIEBJbnB1dCgpIGxvYWRpbmdTdHJhdGVneTogJ3ByZWxvYWQnIHwgJ2xhenknIHwgJ2RlZmF1bHQnID0gdGhpcy5fZ2FsbGVyeS5jb25maWcubG9hZGluZ1N0cmF0ZWd5O1xuICBASW5wdXQoKSB0aHVtYlBvc2l0aW9uOiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnRodW1iUG9zaXRpb247XG5cbiAgLy8gSW5wdXRzIHVzZWQgYnkgdGhlIGxpZ2h0Ym94XG5cbiAgLyoqIERlc3Ryb3kgZ2FsbGVyeSByZWYgb24gY29tcG9uZW50IGRlc3Ryb3kgZXZlbnQgKi9cbiAgQElucHV0KCkgZGVzdHJveVJlZiA9IHRydWU7XG5cbiAgLyoqIFNraXAgaW5pdGlhbGl6aW5nIHRoZSBjb25maWcgd2l0aCBjb21wb25lbnRzIGlucHV0cyAoTGlnaHRib3ggbW9kZSkgKi9cbiAgQElucHV0KCkgc2tpcEluaXRDb25maWcgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSB0aHVtYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBwbGF5aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxHYWxsZXJ5U3RhdGU+KCk7XG4gIEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeVN0YXRlPigpO1xuICBAT3V0cHV0KCkgaXRlbXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEdhbGxlcnlTdGF0ZT4oKTtcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxHYWxsZXJ5RXJyb3I+KCk7XG5cbiAgcHJpdmF0ZSBfaXRlbUNsaWNrJDogU3Vic2NyaXB0aW9uTGlrZSA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfdGh1bWJDbGljayQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2l0ZW1DaGFuZ2UkOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pbmRleENoYW5nZSQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3BsYXlpbmdDaGFuZ2UkOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9wbGF5ZXJMaXN0ZW5lciQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2FsbGVyeTogR2FsbGVyeSkge1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdjogdGhpcy5uYXYsXG4gICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICBsb29wOiB0aGlzLmxvb3AsXG4gICAgICB0aHVtYjogdGhpcy50aHVtYixcbiAgICAgIHpvb21PdXQ6IHRoaXMuem9vbU91dCxcbiAgICAgIGNvdW50ZXI6IHRoaXMuY291bnRlcixcbiAgICAgIGF1dG9QbGF5OiB0aGlzLmF1dG9QbGF5LFxuICAgICAgZ2VzdHVyZXM6IHRoaXMuZ2VzdHVyZXMsXG4gICAgICBkb3RzU2l6ZTogdGhpcy5kb3RzU2l6ZSxcbiAgICAgIGltYWdlU2l6ZTogdGhpcy5pbWFnZVNpemUsXG4gICAgICB0aHVtYk1vZGU6IHRoaXMudGh1bWJNb2RlLFxuICAgICAgdGh1bWJXaWR0aDogdGhpcy50aHVtYldpZHRoLFxuICAgICAgdGh1bWJIZWlnaHQ6IHRoaXMudGh1bWJIZWlnaHQsXG4gICAgICBsb2FkaW5nTW9kZTogdGhpcy5sb2FkaW5nTW9kZSxcbiAgICAgIGRpc2FibGVUaHVtYjogdGhpcy5kaXNhYmxlVGh1bWIsXG4gICAgICBkb3RzUG9zaXRpb246IHRoaXMuZG90c1Bvc2l0aW9uLFxuICAgICAgaXRlbVRlbXBsYXRlOiB0aGlzLml0ZW1UZW1wbGF0ZSxcbiAgICAgIHRodW1iVGVtcGxhdGU6IHRoaXMudGh1bWJUZW1wbGF0ZSxcbiAgICAgIHRodW1iUG9zaXRpb246IHRoaXMudGh1bWJQb3NpdGlvbixcbiAgICAgIHBhblNlbnNpdGl2aXR5OiB0aGlzLnBhblNlbnNpdGl2aXR5LFxuICAgICAgcGxheWVySW50ZXJ2YWw6IHRoaXMucGxheWVySW50ZXJ2YWwsXG4gICAgICBjb3VudGVyUG9zaXRpb246IHRoaXMuY291bnRlclBvc2l0aW9uLFxuICAgICAgbG9hZGluZ1N0cmF0ZWd5OiB0aGlzLmxvYWRpbmdTdHJhdGVneSxcbiAgICAgIHNsaWRpbmdEaXJlY3Rpb246IHRoaXMuc2xpZGluZ0RpcmVjdGlvblxuICAgIH07XG4gIH1cblxuICBvbkFjdGlvbihpOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICB0aGlzLmdhbGxlcnlSZWYubmV4dCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICB0aGlzLmdhbGxlcnlSZWYucHJldigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZ2FsbGVyeVJlZi5zZXQoPG51bWJlcj5pKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuZ2FsbGVyeVJlZikge1xuICAgICAgdGhpcy5nYWxsZXJ5UmVmLnNldENvbmZpZyh0aGlzLmdldENvbmZpZygpKTtcblxuICAgICAgaWYgKGNoYW5nZXMuaXRlbXMgJiYgY2hhbmdlcy5pdGVtcy5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMuaXRlbXMucHJldmlvdXNWYWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWQodGhpcy5pdGVtcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gR2V0IGdhbGxlcnkgaW5zdGFuY2UgYnkgaWRcbiAgICBpZiAodGhpcy5za2lwSW5pdENvbmZpZykge1xuICAgICAgdGhpcy5nYWxsZXJ5UmVmID0gdGhpcy5fZ2FsbGVyeS5yZWYodGhpcy5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FsbGVyeVJlZiA9IHRoaXMuX2dhbGxlcnkucmVmKHRoaXMuaWQsIHRoaXMuZ2V0Q29uZmlnKCkpO1xuICAgIH1cblxuICAgIC8vIExvYWQgZ2FsbGVyeSBpdGVtc1xuICAgIHRoaXMubG9hZCh0aGlzLml0ZW1zKTtcblxuICAgIC8vIEFjdGl2YXRlIHBsYXllciBsaXN0ZW5lclxuICAgIHRoaXMuX3BsYXllckxpc3RlbmVyJCA9IHRoaXMuZ2FsbGVyeVJlZi5hY3RpdmF0ZVBsYXllcigpLnN1YnNjcmliZSgpO1xuXG4gICAgLy8gU3Vic2NyaWJlcyB0byBldmVudHMgb24gZGVtYW5kXG4gICAgaWYgKHRoaXMuaW5kZXhDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5faW5kZXhDaGFuZ2UkID0gdGhpcy5nYWxsZXJ5UmVmLmluZGV4Q2hhbmdlZC5zdWJzY3JpYmUoKHN0YXRlOiBHYWxsZXJ5U3RhdGUpID0+IHRoaXMuaW5kZXhDaGFuZ2UuZW1pdChzdGF0ZSkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pdGVtc0NoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9pdGVtQ2hhbmdlJCA9IHRoaXMuZ2FsbGVyeVJlZi5pdGVtc0NoYW5nZWQuc3Vic2NyaWJlKChzdGF0ZTogR2FsbGVyeVN0YXRlKSA9PiB0aGlzLml0ZW1zQ2hhbmdlLmVtaXQoc3RhdGUpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxheWluZ0NoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9wbGF5aW5nQ2hhbmdlJCA9IHRoaXMuZ2FsbGVyeVJlZi5wbGF5aW5nQ2hhbmdlZC5zdWJzY3JpYmUoKHN0YXRlOiBHYWxsZXJ5U3RhdGUpID0+IHRoaXMucGxheWluZ0NoYW5nZS5lbWl0KHN0YXRlKSk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgcGxheWluZyBpZiBhdXRvLXBsYXkgaXMgc2V0IHRvIHRydWVcbiAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5faXRlbUNsaWNrJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3RodW1iQ2xpY2skLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5faXRlbUNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9pbmRleENoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9wbGF5aW5nQ2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3BsYXllckxpc3RlbmVyJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmRlc3Ryb3lSZWYpIHtcbiAgICAgIHRoaXMuZ2FsbGVyeVJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgb25JdGVtQ2xpY2soaTogbnVtYmVyKSB7XG4gICAgdGhpcy5pdGVtQ2xpY2suZW1pdChpKTtcbiAgICB0aGlzLmdhbGxlcnlSZWYuaXRlbUNsaWNrLm5leHQoaSk7XG4gIH1cblxuICBvblRodW1iQ2xpY2soaTogbnVtYmVyKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLnNldChpKTtcbiAgICB0aGlzLnRodW1iQ2xpY2suZW1pdChpKTtcbiAgICB0aGlzLmdhbGxlcnlSZWYudGh1bWJDbGljay5uZXh0KGkpO1xuICB9XG5cbiAgb25FcnJvcihlcnI6IEdhbGxlcnlFcnJvcikge1xuICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICAgIHRoaXMuZ2FsbGVyeVJlZi5lcnJvci5uZXh0KGVycik7XG4gIH1cblxuICBsb2FkKGl0ZW1zOiBHYWxsZXJ5SXRlbVtdKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLmxvYWQoaXRlbXMpO1xuICB9XG5cbiAgYWRkKGl0ZW06IEdhbGxlcnlJdGVtLCBhY3RpdmU/OiBib29sZWFuKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLmFkZChpdGVtLCBhY3RpdmUpO1xuICB9XG5cbiAgYWRkSW1hZ2UoZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XG4gICAgdGhpcy5hZGQobmV3IEltYWdlSXRlbShkYXRhKSwgYWN0aXZlKTtcbiAgfVxuXG4gIGFkZFZpZGVvKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkKG5ldyBWaWRlb0l0ZW0oZGF0YSksIGFjdGl2ZSk7XG4gIH1cblxuICBhZGRJZnJhbWUoZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XG4gICAgdGhpcy5hZGQobmV3IElmcmFtZUl0ZW0oZGF0YSksIGFjdGl2ZSk7XG4gIH1cblxuICBhZGRZb3V0dWJlKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkKG5ldyBZb3V0dWJlSXRlbShkYXRhKSwgYWN0aXZlKTtcbiAgfVxuXG4gIHJlbW92ZShpOiBudW1iZXIpIHtcbiAgICB0aGlzLmdhbGxlcnlSZWYucmVtb3ZlKGkpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLmdhbGxlcnlSZWYubmV4dCgpO1xuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLmdhbGxlcnlSZWYucHJldigpO1xuICB9XG5cbiAgc2V0KGk6IG51bWJlcikge1xuICAgIHRoaXMuZ2FsbGVyeVJlZi5zZXQoaSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmdhbGxlcnlSZWYucmVzZXQoKTtcbiAgfVxuXG4gIHBsYXkoaW50ZXJ2YWw/OiBudW1iZXIpIHtcbiAgICB0aGlzLmdhbGxlcnlSZWYucGxheShpbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuZ2FsbGVyeVJlZi5zdG9wKCk7XG4gIH1cbn1cbiJdfQ==