# Generated by Django 3.0.2 on 2021-02-22 23:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0022_auto_20210222_2236'),
    ]

    operations = [
        migrations.AlterField(
            model_name='difficulty',
            name='training',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='exercices_t', related_query_name='exercices_t', to='training.Training'),
        ),
    ]