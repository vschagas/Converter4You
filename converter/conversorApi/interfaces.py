class ICoin:
    Coin: str


class IResponse:
    ETHBRL = {
        "code": str,
        "codein": str,
        "name": str,
        "high": float,
        "low": float,
        "varBid": float,
        "pctChange": float,
        "bid": float,
        "ask": float,
        "timestamp": str,
        "create_date": str
    }
