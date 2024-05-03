# # ViewSets define the view behavior.
# import base64
# import json
# import os.path
#
# import elasticsearch_dsl.connections
# from elasticsearch.helpers.actions import bulk
# from elasticsearch_dsl import Search, Q, Index
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
#
# from ElasticSearchWorkshop.Document.PersonDocument import PersonDocument
# from ElasticSearchWorkshop.settings import BASE_DIR
#
#
# class CreateIndexMappingView(APIView):
#
#     def get(self, request):
#         PersonDocument.init()
#         response = Index("person").get_mapping()
#         return Response(response, status=status.HTTP_200_OK)
#
#
# class CreateDocumentView(APIView):
#
#     def get(self, request):
#         newDocument = PersonDocument(name="Zhi Ming", role="Technical Lead", country="Singapore",
#                                      fun_fact="I love going on hiking, walking and jogging. I love Anime and RPG Games with my own collections of Waifu. I like dealing with Software Architecture and DevOps.")
#         newDocument.meta.id = 1
#         newDocument.save()
#         return Response(newDocument.to_dict(), status=status.HTTP_200_OK)
#
#
# class GetDocumentView(APIView):
#
#     def get(self, request):
#         existingDocument = PersonDocument.get(id=1)
#         return Response(existingDocument.to_dict(), status=status.HTTP_200_OK)
#
#
# class UpdateDocumentView(APIView):
#
#     def get(self, request):
#         existingDocument = PersonDocument.get(id=1)
#         existingDocument.name = "Ng Zhi Ming"
#         existingDocument.save()
#         return Response(existingDocument.to_dict(), status=status.HTTP_200_OK)
#
#
# class BulkIndexDocumentView(APIView):
#
#     def get(self, request):
#         bulk(client=elasticsearch_dsl.connections.get_connection(), actions=self.get_data())
#         response = Search(index="person").query("match_all").execute()
#         return Response(response.to_dict(), status=status.HTTP_200_OK)
#
#     def get_data(self):
#         record_id = 0
#         with open(os.path.join(BASE_DIR + "/bulk.ndjson"), mode="r") as bulk_file:
#             for line in bulk_file:
#                 data = json.loads(line)
#                 if data.get("index", None):
#                     record_id = data["index"]["_id"]
#                 else:
#                     yield {
#                         "_op_type": "index",
#                         "_index": "person",
#                         "_id": record_id,
#                         "_source": {
#                             **data
#                         }
#                     }
#
#
# class DeleteDocumentView(APIView):
#
#     def get(self, request):
#         try:
#             existingDocument = PersonDocument.get(id=1)
#             existingDocument.delete()
#             PersonDocument.get(id=1)
#         except Exception as e:
#             return Response(e.error, status=status.HTTP_200_OK)
#
#
#
# class TermLevelQuery(APIView):
#
#     def get(self, request):
#         result = Search(index="person").query("term", country="Singapore").execute()
#         return Response(result.to_dict(), status=status.HTTP_200_OK)
#
#
# class FullTextQuery(APIView):
#
#     def get(self, request):
#         result = Search(index="person").query("match", fun_fact={"query": "love hikk", "fuzziness": "auto"}).execute()
#         return Response(result.to_dict(), status=status.HTTP_200_OK)
#
#
# class CompoundQuery(APIView):
#
#     def get(self, request):
#         query = Q("term", country="Singapore") & Q("match", fun_fact={"query": "love hikk", "fuzziness": "auto"})
#         result = Search(index="person").query(query).execute()
#         return Response(result.to_dict(), status=status.HTTP_200_OK)