from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/',views.getNotes,name="notes"),
    path('notes/create',views.createNote,name="createNote"),
    path('note/<str:pk>/update',views.updateNote,name="updatenote"),
    path('note/<str:pk>/delete',views.deleteNote,name="deletenote"),
    path('note/<str:pk>',views.getNote,name="note")
]
