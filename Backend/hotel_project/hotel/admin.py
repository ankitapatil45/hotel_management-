from django.contrib import admin
from .models import User, Room, Booking, Payment, Feedback, Staff
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = BaseUserAdmin.fieldsets + ((None, {"fields": ("role","phone")}),)

admin.site.register(Room)
admin.site.register(Booking)
admin.site.register(Payment)
admin.site.register(Feedback)
admin.site.register(Staff)
