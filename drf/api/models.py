from django.db import models
from django.db.models.fields import DateField
from django.contrib.auth.models import User, AbstractUser


# class User(AbstractUser):
#     user_type = models.CharField(max_length=100)


class goods_info(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="user", default='1')
    image_path = models.CharField(db_column='image_path', max_length=100, blank=True)
    purchased_date = models.DateTimeField(db_column='purchased_date', max_length=100, blank=True)
    quality = models.CharField(db_column='quality', max_length=100, blank=True)
    material = models.CharField(db_column='material', max_length=100, blank=True)
    goods_type = models.CharField(db_column='goods_type', max_length=100, blank=True)
    style = models.CharField(db_column='style', max_length=100, blank=True)
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)

    class Meta:
        db_table = 'goods_info'


class goods_design(models.Model):
    info = models.ForeignKey(goods_info, on_delete=models.CASCADE, verbose_name="info", default='1')
    image_path = models.CharField(db_column='image_path', max_length=100, blank=True)
    image_selected = models.CharField(db_column='image_selected', max_length=100, blank=True)
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)


    def __str__(self) -> str:
        return self.image_path

    class Meta:
        db_table = 'goods_design'


class goods_result(models.Model):
    user = models.CharField(db_column='image_path', max_length=100, blank=True)
    designer = models.CharField(db_column='designer', max_length=100, blank=True)
    result_path = models.CharField(db_column='result_path', max_length=100, blank=True)

    class Meta:
        db_table = 'goods_result'


class board(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="user", default='1')
    title = models.CharField(db_column='title', max_length=100, blank=True)
    contents = models.CharField(db_column='contents', max_length=100, blank=True)
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True)
    updated_at = models.DateTimeField(db_column='updated_at', max_length=100, blank=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)
    public_flag = models.CharField(db_column='public_flag', max_length=100, blank=True)

    class Meta:
        db_table = 'board'


class comment(models.Model):
    board = models.ForeignKey(board, on_delete=models.CASCADE, verbose_name="board", default='1')
    user = models.CharField(db_column='user', max_length=100, blank=True)
    comment = models.CharField(db_column='comment', max_length=100, blank=True)
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True)
    updated_at = models.DateTimeField(db_column='updated_at', max_length=100, blank=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)

    class Meta:
        db_table = 'comment'
