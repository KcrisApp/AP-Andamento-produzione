# Generated by Django 4.2.3 on 2023-07-19 08:21

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField()),
                ('updated_at', models.DateField()),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('board_name', models.CharField(max_length=180)),
                ('board_code', models.CharField(max_length=180)),
                ('board_rev', models.CharField(max_length=30)),
                ('board_img', models.ImageField(null=True, upload_to='')),
                ('board_file', models.FileField(null=True, upload_to='')),
            ],
            options={
                'verbose_name': 'Board',
                'verbose_name_plural': 'Boards',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField()),
                ('updated_at', models.DateField()),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('order_number', models.CharField(max_length=120, unique=True)),
                ('order_quantity', models.PositiveBigIntegerField()),
                ('order_process_note', models.TextField(blank=True, null=True)),
                ('order_serialnumber', models.CharField(blank=True, max_length=120, null=True)),
                ('board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order', to='produzione.board')),
            ],
            options={
                'verbose_name': 'Order',
                'verbose_name_plural': 'Orders',
            },
        ),
        migrations.CreateModel(
            name='Verify',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField()),
                ('updated_at', models.DateField()),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('missing_component', models.CharField(max_length=120, null=True)),
                ('manual_work', models.CharField(max_length=120, null=True)),
                ('changes_after_testing', models.CharField(max_length=120, null=True)),
                ('verify_date_create', models.DateTimeField(auto_now_add=True, null=True)),
                ('create_new', models.BooleanField(default=False, null=True)),
                ('status', models.BooleanField(default=False, null=True)),
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='order_verify', to='produzione.order')),
            ],
            options={
                'verbose_name': 'Verify',
                'verbose_name_plural': 'Verify',
            },
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField()),
                ('updated_at', models.DateField()),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('ict', models.BooleanField(default=False, null=True)),
                ('aoi', models.BooleanField(default=False, null=True)),
                ('xray', models.BooleanField(default=False, null=True)),
                ('functional', models.BooleanField(default=False, null=True)),
                ('non_compliance', models.CharField(max_length=120, null=True)),
                ('missing_component', models.CharField(max_length=120, null=True)),
                ('serialnumber', models.CharField(max_length=120, null=True)),
                ('note', models.CharField(max_length=120, null=True)),
                ('status', models.BooleanField(default=False, null=True)),
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='order_smd', to='produzione.order')),
            ],
            options={
                'verbose_name': 'Test',
                'verbose_name_plural': 'Tests',
            },
        ),
        migrations.CreateModel(
            name='Smt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField()),
                ('updated_at', models.DateField()),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('oven_top', models.CharField(max_length=120, null=True)),
                ('oven_bot', models.CharField(max_length=120, null=True)),
                ('cream_type', models.CharField(max_length=120, null=True)),
                ('mydata_program', models.CharField(max_length=120, null=True)),
                ('recast_profile_top', models.CharField(max_length=120, null=True)),
                ('recast_profile_bot', models.CharField(max_length=120, null=True)),
                ('my500_top', models.CharField(max_length=120, null=True)),
                ('my500_bot', models.CharField(max_length=120, null=True)),
                ('screen_printer_top', models.CharField(max_length=120, null=True)),
                ('screen_printer_bot', models.CharField(max_length=120, null=True)),
                ('cream_test', models.BooleanField(default=False, null=True)),
                ('note', models.CharField(max_length=120, null=True)),
                ('missing_component', models.CharField(max_length=120, null=True)),
                ('status', models.BooleanField(default=False, null=True)),
                ('fridge_temperature', models.BooleanField(default=False, null=True)),
                ('cream_expiration', models.BooleanField(default=False, null=True)),
                ('frame_status', models.BooleanField(default=False, null=True)),
                ('cream_deposit', models.BooleanField(default=False, null=True)),
                ('pick_and_place_setup', models.BooleanField(default=False, null=True)),
                ('board_check', models.BooleanField(default=False, null=True)),
                ('oven_parameters', models.BooleanField(default=False, null=True)),
                ('check_status', models.BooleanField(default=False, null=True)),
                ('create_new', models.BooleanField(default=False, null=True)),
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='order_smt', to='produzione.order')),
            ],
            options={
                'verbose_name': 'Smt',
                'verbose_name_plural': 'Smt',
            },
        ),
        migrations.CreateModel(
            name='Shipping',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField()),
                ('updated_at', models.DateField()),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('shipping_qta', models.PositiveIntegerField()),
                ('shipping_check', models.BooleanField(default=False)),
                ('shipping_date', models.DateTimeField()),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_shipping', to='produzione.order')),
            ],
            options={
                'verbose_name': 'Shipping',
                'verbose_name_plural': 'Shippings',
            },
        ),
    ]
