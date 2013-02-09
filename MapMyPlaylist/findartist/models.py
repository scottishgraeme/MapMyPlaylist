from django.db import models
import re
import textwrap

class Artist(models.Model):
    name = models.CharField(max_length=200)
    bio = models.TextField(max_length=200)

    def formatted_bio(self):
        nohtml = re.sub("<.*?>", "", self.bio)
        return textwrap.fill(nohtml, 80)
    
    image  = models.CharField(max_length=200)
    origin = models.ForeignKey('Location', related_name='artist', to_field='placename')

class Location(models.Model):
    placename = models.CharField(max_length=200, unique=True)
    latitude = models.CharField(max_length=200)
    longitude = models.CharField(max_length=200)
