/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GALLERY_CONFIG } from './models/config.model';
import { GalleryComponent } from './components/gallery.component';
import { GalleryNavComponent } from './components/gallery-nav.component';
import { GalleryCoreComponent } from './components/gallery-core.component';
import { GalleryDotsComponent } from './components/gallery-dots.component';
import { GalleryThumbsComponent } from './components/gallery-thumbs.component';
import { GallerySliderComponent } from './components/gallery-slider.component';
import { GalleryCounterComponent } from './components/gallery-counter.component';
import { GalleryItemComponent } from './components/gallery-item.component';
import { GalleryThumbComponent } from './components/gallery-thumb.component';
import { GalleryImageComponent } from './components/templates/gallery-image.component';
import { GalleryVideoComponent } from './components/templates/gallery-video.component';
import { GalleryIframeComponent } from './components/templates/gallery-iframe.component';
import { RadialProgressComponent } from './components/templates/radial-progress.component';
import { LazyImage } from './directives/lazy-image';
import { TapClick } from './directives/tap-click';
import { CachingInterceptor } from './services/cache.interceptor';
import { RequestCache, RequestCacheWithMap } from './services/cache.service';
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    providers: [
                        { provide: RequestCache, useClass: RequestCacheWithMap },
                        { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
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
export { GalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFM0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0U7SUFBQTtJQTZDQSxDQUFDOzs7OztJQVpRLHdCQUFVOzs7O0lBQWpCLFVBQWtCLE1BQXFCO1FBRXJDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTVDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQzt3QkFDdEQsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7cUJBQ3hFO29CQUNELFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLFNBQVM7d0JBQ1QsUUFBUTtxQkFDVDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixTQUFTO3dCQUNULFFBQVE7cUJBQ1Q7aUJBQ0Y7O0lBY0Qsb0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQWJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnLCBHQUxMRVJZX0NPTkZJRyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5cbmltcG9ydCB7IEdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeU5hdkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeUNvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5RG90c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWRvdHMuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlUaHVtYnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS10aHVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktY291bnRlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBHYWxsZXJ5SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlUaHVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LXRodW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5SW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbGxlcnktaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS12aWRlby5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeUlmcmFtZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS1pZnJhbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlhbFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9yYWRpYWwtcHJvZ3Jlc3MuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xhenktaW1hZ2UnO1xuaW1wb3J0IHsgVGFwQ2xpY2sgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFwLWNsaWNrJztcbmltcG9ydCB7IENhY2hpbmdJbnRlcmNlcHRvciB9IGZyb20gJy4vc2VydmljZXMvY2FjaGUuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgUmVxdWVzdENhY2hlLCBSZXF1ZXN0Q2FjaGVXaXRoTWFwIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWNoZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBSZXF1ZXN0Q2FjaGUsIHVzZUNsYXNzOiBSZXF1ZXN0Q2FjaGVXaXRoTWFwfSxcbiAgICB7cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBDYWNoaW5nSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHYWxsZXJ5Q29tcG9uZW50LFxuICAgIEdhbGxlcnlOYXZDb21wb25lbnQsXG4gICAgR2FsbGVyeURvdHNDb21wb25lbnQsXG4gICAgR2FsbGVyeUNvcmVDb21wb25lbnQsXG4gICAgR2FsbGVyeVNsaWRlckNvbXBvbmVudCxcbiAgICBHYWxsZXJ5Q291bnRlckNvbXBvbmVudCxcbiAgICBHYWxsZXJ5VGh1bWJzQ29tcG9uZW50LFxuICAgIEdhbGxlcnlUaHVtYkNvbXBvbmVudCxcbiAgICBHYWxsZXJ5SXRlbUNvbXBvbmVudCxcbiAgICBHYWxsZXJ5SW1hZ2VDb21wb25lbnQsXG4gICAgR2FsbGVyeVZpZGVvQ29tcG9uZW50LFxuICAgIEdhbGxlcnlJZnJhbWVDb21wb25lbnQsXG4gICAgUmFkaWFsUHJvZ3Jlc3NDb21wb25lbnQsXG4gICAgTGF6eUltYWdlLFxuICAgIFRhcENsaWNrXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHYWxsZXJ5Q29tcG9uZW50LFxuICAgIExhenlJbWFnZSxcbiAgICBUYXBDbGljayxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBHYWxsZXJ5Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdhbGxlcnlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEdBTExFUllfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==