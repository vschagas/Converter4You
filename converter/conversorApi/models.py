from django.db import models
import requests


class ExchangeController:
    def __init__(self):
        pass

    def exchange(self, base_coin, exchange_coin):
        url = f'https://economia.awesomeapi.com.br/json/last/{base_coin}-{exchange_coin}'
        try:
            response = requests.get(url)
            return response.json()
        except Exception as e:
            raise e
