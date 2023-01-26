# from django.shortcuts import render
# def index(request):
#     return HttpResponse("Olá esse é meu primeiro passo")
import json
from django.views import View
from django.http import HttpResponse
from models import ExchangeController


class index(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            base_coin = data.get('baseCoin')
            exchange_coin = data.get('exchangeCoin')

            new_class = ExchangeController()
            converted_value = new_class.exchange(base_coin, exchange_coin)

            return HttpResponse(json.dumps(converted_value), content_type='application/json', status=200)
        except Exception as e:
            return HttpResponse(json.dumps({'error': str(e)}), content_type='application/json', status=500)