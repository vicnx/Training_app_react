# Generated by Django 3.0.2 on 2021-02-05 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercice', '0016_auto_20210204_1052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercice',
            name='image',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
