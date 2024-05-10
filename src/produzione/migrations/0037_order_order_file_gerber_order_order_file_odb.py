# Generated by Django 4.2.3 on 2024-05-09 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produzione', '0036_alter_order_order_placement_pick_and_place'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_file_gerber',
            field=models.FileField(blank=True, default='', upload_to='gerber'),
        ),
        migrations.AddField(
            model_name='order',
            name='order_file_odb',
            field=models.FileField(blank=True, default='', upload_to='odb'),
        ),
    ]
