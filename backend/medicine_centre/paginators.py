from rest_framework.pagination import PageNumberPagination


class PaginationBy3(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'
