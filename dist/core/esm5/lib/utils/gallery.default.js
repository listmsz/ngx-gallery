/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ImageSize, GalleryAction, ThumbnailsMode, LoadingStrategy, SlidingDirection, ThumbnailsPosition, ImageLoaderMode, DotsPosition, CounterPosition } from '../models/constants';
/**
 * Initial state
 * @type {?}
 */
export var defaultState = {
    action: GalleryAction.INITIALIZED,
    isPlaying: false,
    hasNext: false,
    hasPrev: false,
    currIndex: 0,
    items: []
};
/** @type {?} */
export var defaultConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kZWZhdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ2FsbGVyeS5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGFBQWEsRUFDYixjQUFjLEVBQ2QsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLFlBQVksRUFDWixlQUFlLEVBQ2hCLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBSzdCLE1BQU0sS0FBTyxZQUFZLEdBQWlCO0lBQ3hDLE1BQU0sRUFBRSxhQUFhLENBQUMsV0FBVztJQUNqQyxTQUFTLEVBQUUsS0FBSztJQUNoQixPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsU0FBUyxFQUFFLENBQUM7SUFDWixLQUFLLEVBQUUsRUFBRTtDQUNWOztBQUVELE1BQU0sS0FBTyxhQUFhLEdBQWtCO0lBQzFDLEdBQUcsRUFBRSxJQUFJO0lBQ1QsSUFBSSxFQUFFLElBQUk7SUFDVixPQUFPLEVBQUUsQ0FBQztJQUNWLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLElBQUk7SUFDWCxRQUFRLEVBQUUsRUFBRTtJQUNaLE9BQU8sRUFBRSxJQUFJO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsS0FBSztJQUNmLFVBQVUsRUFBRSxHQUFHO0lBQ2YsV0FBVyxFQUFFLEVBQUU7SUFDZixjQUFjLEVBQUUsRUFBRTtJQUNsQixZQUFZLEVBQUUsS0FBSztJQUNuQixjQUFjLEVBQUUsSUFBSTtJQUNwQixTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU87SUFDNUIsU0FBUyxFQUFFLGNBQWMsQ0FBQyxNQUFNO0lBQ2hDLFlBQVksRUFBRSxZQUFZLENBQUMsTUFBTTtJQUNqQyxlQUFlLEVBQUUsZUFBZSxDQUFDLEdBQUc7SUFDcEMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLE1BQU07SUFDeEMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxXQUFXO0lBQ3hDLGVBQWUsRUFBRSxlQUFlLENBQUMsT0FBTztJQUN4QyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO0lBQzdDLE9BQU8sRUFBRSwyZkFBcWU7Q0FDL2UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZVNpemUsXG4gIEdhbGxlcnlBY3Rpb24sXG4gIFRodW1ibmFpbHNNb2RlLFxuICBMb2FkaW5nU3RyYXRlZ3ksXG4gIFNsaWRpbmdEaXJlY3Rpb24sXG4gIFRodW1ibmFpbHNQb3NpdGlvbixcbiAgSW1hZ2VMb2FkZXJNb2RlLFxuICBEb3RzUG9zaXRpb24sXG4gIENvdW50ZXJQb3NpdGlvblxufSBmcm9tICcuLi9tb2RlbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEdhbGxlcnlTdGF0ZSB9IGZyb20gJy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcblxuLyoqIEluaXRpYWwgc3RhdGUgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGU6IEdhbGxlcnlTdGF0ZSA9IHtcbiAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklOSVRJQUxJWkVELFxuICBpc1BsYXlpbmc6IGZhbHNlLFxuICBoYXNOZXh0OiBmYWxzZSxcbiAgaGFzUHJldjogZmFsc2UsXG4gIGN1cnJJbmRleDogMCxcbiAgaXRlbXM6IFtdXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogR2FsbGVyeUNvbmZpZyA9IHtcbiAgbmF2OiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICB6b29tT3V0OiAwLFxuICBkb3RzOiBmYWxzZSxcbiAgdGh1bWI6IHRydWUsXG4gIGRvdHNTaXplOiAzMCxcbiAgY291bnRlcjogdHJ1ZSxcbiAgZ2VzdHVyZXM6IHRydWUsXG4gIGF1dG9QbGF5OiBmYWxzZSxcbiAgdGh1bWJXaWR0aDogMTIwLFxuICB0aHVtYkhlaWdodDogOTAsXG4gIHBhblNlbnNpdGl2aXR5OiAyNSxcbiAgZGlzYWJsZVRodW1iOiBmYWxzZSxcbiAgcGxheWVySW50ZXJ2YWw6IDMwMDAsXG4gIGltYWdlU2l6ZTogSW1hZ2VTaXplLkNvbnRhaW4sXG4gIHRodW1iTW9kZTogVGh1bWJuYWlsc01vZGUuU3RyaWN0LFxuICBkb3RzUG9zaXRpb246IERvdHNQb3NpdGlvbi5Cb3R0b20sXG4gIGNvdW50ZXJQb3NpdGlvbjogQ291bnRlclBvc2l0aW9uLlRvcCxcbiAgdGh1bWJQb3NpdGlvbjogVGh1bWJuYWlsc1Bvc2l0aW9uLkJvdHRvbSxcbiAgbG9hZGluZ01vZGU6IEltYWdlTG9hZGVyTW9kZS5EZXRlcm1pbmF0ZSxcbiAgbG9hZGluZ1N0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3kuRGVmYXVsdCxcbiAgc2xpZGluZ0RpcmVjdGlvbjogU2xpZGluZ0RpcmVjdGlvbi5Ib3Jpem9udGFsLFxuICBuYXZJY29uOiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN2ZyB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMjQwLjgyMyAyNDAuODIzXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMjQwLjgyMyAyNDAuODIzXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0xODMuMTkgMTExLjgybC0xMDguMy0xMDguMjZjLTQuNzUyLTQuNzQtMTIuNDUxLTQuNzQtMTcuMjE1IDAtNC43NTIgNC43NC00Ljc1MiAxMi40MzkgMCAxNy4xNzlsOTkuNzA3IDk5LjY3MS05OS42OTUgOTkuNjcxYy00Ljc1MiA0Ljc0LTQuNzUyIDEyLjQzOSAwIDE3LjE5MSA0Ljc1MiA0Ljc0IDEyLjQ2MyA0Ljc0IDE3LjIxNSAwbDEwOC4zLTEwOC4yNmM0LjY4LTQuNjkxIDQuNjgtMTIuNTExLTAuMDEyLTE3LjE5elwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPmAsXG59O1xuIl19