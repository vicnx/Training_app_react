# Generated by Django 3.0.2 on 2021-02-19 11:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('exercice', '0018_auto_20210208_1032'),
        ('training', '0012_training_exercices'),
    ]

    operations = [
        migrations.AlterField(
            model_name='difficulty',
            name='exercice',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='exers', to='exercice.Exercice'),
        ),
    ]
