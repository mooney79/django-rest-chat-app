from rest_framework import serializers
from .models import Msg, Chatroom

class MsgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Msg
        fields = ('__all__')


class ChatroomSerializer(serializers.ModelSerializer):
    class MessagesListField(serializers.ListField):
        # child = figure this out!
        # queryset = Msg.objects.all()
        pass 

    class Meta:
        model = Chatroom
        fields = ('__all__')


# class StringListField(serializers.ListField):
#     child = serializers.CharField()

# Signature: ListField(child=<A_FIELD_INSTANCE>, allow_empty=True, min_length=None, max_length=None)

# child - A field instance that should be used for validating the objects in the list. If this argument is not provided then objects in the list will not be validated.
# allow_empty - Designates if empty lists are allowed.
# min_length - Validates that the list contains no fewer than this number of elements.
# max_length - Validates that the list contains no more than this number of elements.


# def get_messages(self, obj):
#         child = serializers.HyperlinkedIdentityField(
#             view_name=self.resources_view_name
#         )
#         field = serializers.ListField(child=child)
#         field.parent = self
#         return field.to_representation(obj.resources.all()) 


# class AlbumSerializer(serializers.HyperlinkedModelSerializer):
#     track_listing = serializers.HyperlinkedIdentityField(view_name='track-list')

# view_name - The view name that should be used as the target of the relationship. 
# If you're using the standard router classes this will be a string with the format
#  <modelname>-detail. required.

# Not all of these are applicable.
# queryset - The queryset used for model instance lookups when validating the field 
# input. Relationships must either set a queryset explicitly, or set read_only=True.
# many - If applied to a to-many relationship, you should set this argument to True.
# allow_null - If set to True, the field will accept values of None or the empty 
# string for nullable relationships. Defaults to False.
# lookup_field - The field on the target that should be used for the lookup. Should
# correspond to a URL keyword argument on the referenced view. Default is 'pk'.
# lookup_url_kwarg - The name of the keyword argument defined in the URL conf that
# corresponds to the lookup field. Defaults to using the same value as lookup_field.
# format - If using format suffixes, hyperlinked fields will use the same format 
# suffix for the target unless overridden by using the format argument.

#querySelector?

# def filter_queryset(self, queryset):
#     filter_backends = [CategoryFilter]

#     if 'geo_route' in self.request.query_params:
#         filter_backends = [GeoRouteFilter, CategoryFilter]
#     elif 'geo_point' in self.request.query_params:
#         filter_backends = [GeoPointFilter, CategoryFilter]

#     for backend in list(filter_backends):
#         queryset = backend().filter_queryset(self.request, queryset, view=self)

#     return queryset