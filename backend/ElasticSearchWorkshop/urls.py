"""ElasticSearchWorkshop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

# Routers provide a way of automatically determining the URL conf.
from rest_framework import routers

from ElasticSearchWorkshop.views import CreateIndexMappingView, CreateDocumentView, UpdateDocumentView, \
    DeleteDocumentView, GetDocumentView, BulkIndexDocumentView, TermLevelQuery, FullTextQuery, CompoundQuery

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/create_index/', CreateIndexMappingView.as_view()),
    path('api/v1/create_document/', CreateDocumentView.as_view()),
    path('api/v1/get_document/', GetDocumentView.as_view()),
    path('api/v1/update_document/', UpdateDocumentView.as_view()),
    path('api/v1/bulk_index_document/', BulkIndexDocumentView.as_view()),
    path('api/v1/delete_document/', DeleteDocumentView.as_view()),

    path('api/v1/term_level_query/', TermLevelQuery.as_view()),
    path('api/v1/full_text_query/', FullTextQuery.as_view()),
    path('api/v1/compound_query/', CompoundQuery.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
