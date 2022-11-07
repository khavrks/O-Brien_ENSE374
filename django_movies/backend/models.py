from django.db import models

# Create your models here.


class UserMovies(models.Model):
    user_id = models.IntegerField()
    movie_id = models.IntegerField()
    rating = models.IntegerField()
    timestamp = models.IntegerField()

    def __str__(self):
        return self.user_id