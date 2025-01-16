1.django-admin startproject TODO (TODO project name)
2.cd TODO(go to TODO file)
3.python manage.py startapp Home (HOME app)
4.pip install djangorestframework

5.pip install django-cors-headers

6.settings.py
EXTERNAL_APPS=[
    "Home",
    "rest_framework"
]

INSTALLED_APPS+=EXTERNAL_APPS

7.    
MIDDLEWARE = [
"corsheaders.middleware.CorsMiddleware"
]

8.MIDDLEWARE ke niche
(CORS_ORIGIN_ALLOW_ALL=True)

Note: CORS means, kis kis domain ke through mera server access kar sakte h.

9.make a model

10.make a serializer.py file

11.python manage.py makemigrations
12.python manage.py migrate

13.inside Home,make a file (urls.py)
iss Home wale urls ko main urls ke merge karna hoga .

14.connect django to mysql
pip install django mysqlclient

# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_learn',
        'USER':'root',
        'PASSWORD':'S@gar7870',
        'HOST':'localhost',
        'PORT':'3306',
    }
}


15.python manage.py runserver

