# from elasticsearch_dsl import Document, Text, Keyword, Nested
#
#
# class PersonDocument(Document):
#     name = Text()
#     role = Text()
#     country = Keyword()
#     fun_fact = Text(analyzer="english")
#
#     class Index:
#         name = 'person'
#         settings = {
#             "number_of_shards": 1,
#             "number_of_replicas": 0
#         }
