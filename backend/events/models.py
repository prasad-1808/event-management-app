# events/models.py
from django.db import models
from projects.models import Project

class Event(models.Model):
    project = models.ForeignKey(Project, related_name="events", on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.project.name})"
