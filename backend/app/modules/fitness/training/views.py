from rest_framework import viewsets,generics,mixins


from .serializers import TrainingSerializer
from .serializers import DifficultySerializer
from .models import Training
from .models import Difficulty
from rest_framework import viewsets,generics,mixins,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import (AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly)
from app.modules.core.permissions import IsOwner

# Create your views here.

class TrainingViewSet(viewsets.ModelViewSet):
    queryset = Training.objects.all().order_by('name')
    serializer_class = TrainingSerializer
    lookup_field = 'slug'
    
    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [IsAuthenticated,]
        elif self.request.method == 'PUT':
            self.permission_classes = [IsAuthenticated,IsOwner]
        elif self.request.method == 'DELETE':
            self.permission_classes = [IsAuthenticated,IsOwner]
            
        return super(TrainingViewSet,self).get_permissions()

    def get_queryset(self):
        queryset = self.queryset
        author = self.request.query_params.get('author', None)
        if author is not None:
            queryset = queryset.filter(author__user__username=author)

        favorited_by = self.request.query_params.get('favorited', None)
        if favorited_by is not None:
            queryset = queryset.filter(favorited_by__user__username=favorited_by)
        return queryset.order_by('-id')

    def create(self, request):
        serializer_context = {
            'author': request.user.profile,
            'request': request,
        }
        serializer_data = request.data.get('training', {})

        # difficulties=serializer_data.get('difficulties')
        # lisst = []

        # for x in difficulties:


        # pepe = DifficultySerializer(difficulties[0])

        # print(pepe)    
        
        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context)
        # print(serializer_data.get('difficulties'))
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class DifficultyViewSet(viewsets.ModelViewSet):
    queryset = Difficulty.objects.all()
    serializer_class = DifficultySerializer
    # serializer_data = request.data.get('training', {})
    # print(serializer_data.get('difficulties'))