# Generated by Django 4.2.3 on 2024-03-29 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produzione', '0033_order_shipping_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_filetopographic',
            field=models.FileField(blank=True, default='', upload_to='topographic'),
        ),
    ]
