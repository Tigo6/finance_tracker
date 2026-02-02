from django.contrib import admin
from django.urls import path, include
import frontend

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('api/', include('api.urls')),
]
