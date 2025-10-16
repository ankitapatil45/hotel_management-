from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import User, Room, Booking, Feedback, Staff
from .serializers import *
from .permissions import IsAdminOrSuperAdmin
from django.db.models import Q
from rest_framework.views import APIView
from django.utils import timezone
from datetime import datetime

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
        if self.action in ["create", "update", "partial_update", "destroy"]:
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

# SIMPLE BOOKING API (NO PAYMENT)
@api_view(['POST'])
@permission_classes([AllowAny])
def save_booking(request):
    try:
        data = request.data
        print("🟩 Received data:", data)  # ✅ Debug print

        # Extract data
        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        check_in = data.get("check_in")
        check_out = data.get("check_out")
        guests = int(data.get("guests", 1))
        room_type = data.get("room_type")

        # Room lookup (optional)
        room = Room.objects.filter(room_type__iexact=room_type).first()
        if not room:
            print("⚠️ Room not found for:", room_type)
            room_price = 0
        else:
            room_price = room.price

        # Calculate total_amount based on days
        check_in_date = datetime.strptime(check_in, "%Y-%m-%d").date()
        check_out_date = datetime.strptime(check_out, "%Y-%m-%d").date()
        days = (check_out_date - check_in_date).days or 1
        total_amount = room_price * days

        # Create booking
        booking = Booking.objects.create(
            name=name,
            email=email,
            phone=phone,
            check_in=check_in_date,
            check_out=check_out_date,
            guests=guests,
            room_type=room_type,  # Save as string
            # total_amount=total_amount,  # Uncomment if field exists in model
        )
        booking.save()

        return Response({
            "message": "Booking saved successfully!",
            "booking_id": booking.id,
            "total_amount": total_amount
        }, status=201)

    except Exception as e:
        print("❌ Exception:", str(e))
        return Response({"error": str(e)}, status=400)
