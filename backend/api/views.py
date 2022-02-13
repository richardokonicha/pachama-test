from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ForestSerializer
from .models import Forest

@api_view(['GET', 'POST'])
def getForests(request):
    if request.method == 'GET':
        forest = Forest.objects.all()
        serializer = ForestSerializer(forest, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ForestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


# @api_view(['GET', 'POST'])
# def getForest(request, slug):
#     if request.method == 'GET':
#         forest = Forest.objects.all()
#         serializer = ForestSerializer(forest, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = ForestSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

    
@api_view(['GET','PUT', 'DELETE'])
def getForest(request, slug):
    try:
        forest = Forest.objects.get(slug=slug)
    except forest.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ForestSerializer(forest)
        return Response(serializer.data)
    # elif request.method == 'PUT':
    #     serializer = ForestSerializer(Forest, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # elif request.method == 'DELETE':
    #     Forest.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)