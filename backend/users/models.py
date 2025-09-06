# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from projects.models import Project

class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('event_admin', 'Event Admin'),
        ('organizer', 'Organizer'),
        ('attendee', 'Attendee'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='attendee')
    project = models.ForeignKey(Project, related_name="users", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.username} ({self.project.name})"
