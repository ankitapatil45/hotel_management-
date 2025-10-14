from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import User, Room, Booking, Payment, Feedback, Staff
from .serializers import *
from .permissions import IsAdminOrSuperAdmin
from django.db.models import Q
from rest_framework.views import APIView
from django.utils import timezone

# Register
class RegisterView(viewsets.GenericViewSet):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=["post"])
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({"msg": "user created", "id": user.id}, status=status.HTTP_201_CREATED)

# Rooms
class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    def get_permissions(self):
        if self.action in ["create","update","partial_update","destroy"]:
            return [IsAdminOrSuperAdmin()]
        return [IsAuthenticated()]

# Bookings
class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def perform_create(self, serializer):
        room = serializer.validated_data["room"]
        days = (serializer.validated_data["date_to"] - serializer.validated_data["date_from"]).days or 1
        total = room.price * days
        serializer.save(user=self.request.user, total_amount=total)

# Payments
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

# Feedback
class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Staff
class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer
    permission_classes = [IsAdminOrSuperAdmin]



