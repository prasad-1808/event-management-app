# albums/models.py
from django.db import models
from django.conf import settings
from events.models import Event
from projects.models import Project

class Album(models.Model):
    project = models.ForeignKey(Project, related_name="albums", on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    event = models.ForeignKey(Event, related_name="albums", on_delete=models.CASCADE)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Photo(models.Model):
    album = models.ForeignKey(Album, related_name="photos", on_delete=models.CASCADE)
    # image = models.ImageField(upload_to="photos/")
    caption = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.album.title} - {self.caption[:20]}"
