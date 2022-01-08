from django.shortcuts import render
from .serializers import ProductDetailsSerializer
from .models import ProductDetails



# manufacturer functionalities

def registered_product_details(request, manufacturer_id):
    if request.method == "GET":
        data = ProductDetails.objects.filter()
        serializer = ProductDetailsSerializer()
    elif request.method == "POST":
        pass
    else:
        pass


# customer functionalities
def scanned_product_details(request):
    if request.method == "GET":
        pass
    elif request.method == "POST":
        pass
    else:
        pass

