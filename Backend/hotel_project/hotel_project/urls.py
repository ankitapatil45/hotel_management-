from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from hotel.views import RoomViewSet, BookingViewSet, FeedbackViewSet, StaffViewSet, RegisterView, save_booking, get_all_bookings, verify_payment, create_order
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()
router.register(r"rooms", RoomViewSet)
router.register(r"bookings", BookingViewSet)

router.register(r"feedback", FeedbackViewSet)
router.register(r"staff", StaffViewSet)
router.register(r"auth/register", RegisterView, basename="register")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/auth/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    
    path('api/save-booking/', save_booking, name='save-booking'),
    path('api/bookings/', get_all_bookings, name='get_all_bookings'),
    path("create-order/", create_order, name="create_order"),
    path("verify-payment/", verify_payment, name="verify_payment"),




]
