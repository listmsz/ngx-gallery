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
export class GalleryModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFM0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFrQzdFLE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQXFCO1FBRXJDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTVDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQztvQkFDdEQsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7aUJBQ3hFO2dCQUNELFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLFNBQVM7b0JBQ1QsUUFBUTtpQkFDVDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULFFBQVE7aUJBQ1Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEdhbGxlcnlDb25maWcsIEdBTExFUllfQ09ORklHIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcblxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWNvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlEb3RzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktZG90cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVRodW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LXRodW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LXNsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeUNvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3VudGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEdhbGxlcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVRodW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LXZpZGVvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5SWZyYW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWlmcmFtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaWFsUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL3JhZGlhbC1wcm9ncmVzcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMYXp5SW1hZ2UgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZSc7XG5pbXBvcnQgeyBUYXBDbGljayB9IGZyb20gJy4vZGlyZWN0aXZlcy90YXAtY2xpY2snO1xuaW1wb3J0IHsgQ2FjaGluZ0ludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWNoZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXF1ZXN0Q2FjaGUsIFJlcXVlc3RDYWNoZVdpdGhNYXAgfSBmcm9tICcuL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IFJlcXVlc3RDYWNoZSwgdXNlQ2xhc3M6IFJlcXVlc3RDYWNoZVdpdGhNYXB9LFxuICAgIHtwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IENhY2hpbmdJbnRlcmNlcHRvciwgbXVsdGk6IHRydWV9XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdhbGxlcnlDb21wb25lbnQsXG4gICAgR2FsbGVyeU5hdkNvbXBvbmVudCxcbiAgICBHYWxsZXJ5RG90c0NvbXBvbmVudCxcbiAgICBHYWxsZXJ5Q29yZUNvbXBvbmVudCxcbiAgICBHYWxsZXJ5U2xpZGVyQ29tcG9uZW50LFxuICAgIEdhbGxlcnlDb3VudGVyQ29tcG9uZW50LFxuICAgIEdhbGxlcnlUaHVtYnNDb21wb25lbnQsXG4gICAgR2FsbGVyeVRodW1iQ29tcG9uZW50LFxuICAgIEdhbGxlcnlJdGVtQ29tcG9uZW50LFxuICAgIEdhbGxlcnlJbWFnZUNvbXBvbmVudCxcbiAgICBHYWxsZXJ5VmlkZW9Db21wb25lbnQsXG4gICAgR2FsbGVyeUlmcmFtZUNvbXBvbmVudCxcbiAgICBSYWRpYWxQcm9ncmVzc0NvbXBvbmVudCxcbiAgICBMYXp5SW1hZ2UsXG4gICAgVGFwQ2xpY2tcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEdhbGxlcnlDb21wb25lbnQsXG4gICAgTGF6eUltYWdlLFxuICAgIFRhcENsaWNrLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IEdhbGxlcnlDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR2FsbGVyeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogR0FMTEVSWV9DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19