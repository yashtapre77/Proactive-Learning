# Generated by Django 5.1.2 on 2024-10-16 23:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='G1',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='G2',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='G3',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='G4',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='G5',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='G6',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='G7',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='cluster_group',
            field=models.PositiveSmallIntegerField(blank=True, default=3, null=True),
        ),
        migrations.AlterField(
            model_name='students',
            name='student_categories',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
