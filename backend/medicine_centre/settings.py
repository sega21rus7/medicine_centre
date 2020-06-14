import os

# Build paths inside the medicine_centre like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY", default='8n!3jvl&!mrd^=4n9youvidvh!x98(mp&1=07%6gk+z3(ty%w4')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = int(os.environ.get("DEBUG", default=1))

ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS", '*').split()

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sites',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'marketing.apps.NewsConfig',
    'staff.apps.StaffConfig',
    'client.apps.ClientConfig',
    'lk.apps.LkConfig',
    'reception.apps.ReceptionConfig',
    'phonenumber_field',
    'ckeditor',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_auth',
    'rest_auth.registration',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'medicine_centre.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DATETIME_FORMAT': "%d.%m.%Y - %H:%M",
    'TIME_FORMAT': "%H:%M",
    'DATE_FORMAT': "%d.%m.%Y",
}

REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'lk.serializers.CustomerUserSerializer',
    'PASSWORD_RESET_SERIALIZER': 'lk.serializers.PasswordResetSerializer',
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
)

WSGI_APPLICATION = 'medicine_centre.wsgi.application'

SITE_URL = os.environ.get('SITE_URL', default='https://localhost:3000')
SITE_NAME = os.environ.get('SITE_NAME', default=SITE_URL)

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': os.environ.get('SQL_ENGINE', default='django.db.backends.postgresql_psycopg2'),
        'NAME': os.environ.get('SQL_DATABASE', default='medicine_centre'),
        'USER': os.environ.get('SQL_USER', default='postgres'),
        'PASSWORD': os.environ.get('SQL_PASSWORD', default='server'),
        'HOST': os.environ.get('SQL_HOST', default=''),
        'PORT': os.environ.get('SQL_PORT', default=''),
    }
}

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'ru-RU'

TIME_ZONE = 'Europe/Moscow'

USE_I18N = True

USE_L10N = True

USE_TZ = True

DATE_FORMAT = 'd E Y'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/staticfiles/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

AUTH_USER_MODEL = 'lk.CustomerUser'

SITE_ID = 1
ACCOUNT_LOGOUT_ON_GET = True
ACCOUNT_AUTHENTICATION_METHOD = 'username_email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'

CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    'https://chuvash-medicine-centre.ru',
]

EMAIL_BACKEND = os.environ.get("EMAIL_BACKEND", 'django.core.mail.backends.console.EmailBackend')
EMAIL_USE_TLS = os.environ.get("EMAIL_USE_TLS")
DEFAULT_FROM_EMAIL = os.environ.get("DEFAULT_FROM_EMAIL")
SERVER_EMAIL = os.environ.get("SERVER_EMAIL")
EMAIL_HOST = os.environ.get("EMAIL_HOST")
EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
EMAIL_PORT = os.environ.get("EMAIL_PORT")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
# send_mail('django test email', 'content', 'chuvash-medicine-centre@mail.ru',
# ['sega21rus98@mail.ru'], fail_silently=False)

ACCOUNT_ADAPTER = 'lk.adapters.DefaultAccountAdapterCustom'
