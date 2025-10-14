from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = (
        ("superadmin", "Super Admin"),
        ("admin", "Admin"),
        ("staff", "Staff"),
        ("customer", "Customer"),
        ("finance", "Finance"),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default="customer")
    phone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"


class Room(models.Model):
    STATUS_CHOICES = (("available","Available"), ("maintenance","Maintenance"))
    room_number = models.CharField(max_length=20, unique=True)
    room_type = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="available")
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.room_number} - {self.room_type}"


class Booking(models.Model):
    STATUS_CHOICES = (("pending","Pending"), ("confirmed","Confirmed"), ("cancelled","Cancelled"))
    user = models.ForeignKey("hotel.User", on_delete=models.CASCADE, related_name="bookings")
    room = models.ForeignKey("hotel.Room", on_delete=models.CASCADE, related_name="bookings")
    date_from = models.DateField()
    date_to = models.DateField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    booking_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    payment_status = models.CharField(max_length=20, default="pending")

    def __str__(self):
        return f"Booking {self.id} by {self.user}"


class Payment(models.Model):
    PAYMENT_STATUS = (("pending","Pending"), ("success","Success"), ("failed","Failed"))
    booking = models.ForeignKey("hotel.Booking", on_delete=models.CASCADE, related_name="payments")
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_mode = models.CharField(max_length=50, blank=True)
    transaction_id = models.CharField(max_length=200, blank=True, null=True)
    payment_status = models.CharField(max_length=20, choices=PAYMENT_STATUS, default="pending")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment {self.id} - {self.payment_status}"


class Feedback(models.Model):
    user = models.ForeignKey("hotel.User", on_delete=models.CASCADE, related_name="feedbacks")
    booking = models.ForeignKey("hotel.Booking", on_delete=models.SET_NULL, null=True, blank=True)
    rating = models.PositiveSmallIntegerField(default=5)
    comments = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Staff(models.Model):
    user = models.OneToOneField("hotel.User", on_delete=models.CASCADE, related_name="staff_profile")
    staff_role = models.CharField(max_length=100, blank=True)
    assigned_tasks = models.TextField(blank=True)

    def __str__(self):
        return f"Staff: {self.user.username}"
