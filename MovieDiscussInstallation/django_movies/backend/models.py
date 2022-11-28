from django.db import models

# Create your models here.

class UserMovies(models.Model):
    user_id = models.IntegerField()
    movie_id = models.IntegerField()
    rating = models.IntegerField()
    timestamp = models.IntegerField()

    def __str__(self):
        return self.user_id


from django.contrib.auth.models import User

class MovieChats(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie_id = models.CharField(max_length=100)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.movie_id

    class Meta:
        ordering = ['timestamp']
        verbose_name = 'Movie Chat'
        verbose_name_plural = 'Movie Chats'