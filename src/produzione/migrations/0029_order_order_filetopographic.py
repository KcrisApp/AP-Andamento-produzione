# Generated by Django 4.2.3 on 2024-03-20 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produzione', '0028_board_board_img_bot'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_filetopographic',
            field=models.FileField(blank=True, null=True, upload_to='topographic'),
        ),
    ]
