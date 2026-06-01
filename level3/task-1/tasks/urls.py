from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.home, name='home'),

    path('register/', views.register_view, name='register'),

    path(
        'login/',
        auth_views.LoginView.as_view(
            template_name='login.html'
        ),
        name='login'
    ),

    path(
        'logout/',
        auth_views.LogoutView.as_view(),
        name='logout'
    ),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('create/',views.create_task,name='create_task'),
path('update/<int:id>/',views.update_task,name='update_task'),
path('delete/<int:id>/',views.delete_task,name='delete_task'),
path(
'password-reset/',
auth_views.PasswordResetView.as_view(
template_name='password_reset.html'
),
name='password_reset'
),
]