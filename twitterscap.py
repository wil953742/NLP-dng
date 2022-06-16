import tweepy

def connect_api():

    consumer_key = 'ydEFxTpESTRwGNlMJqKudfYX4'
    consumer_secret = 'xZR31KA7SmBdvXpBKPW7hPlYfnRPyX5t4mfKkPaKoIqPcg3xXb'
    access_token = '1520349885190766592-3lWYnaAsQLojqmCbuD74WRg5iivF1n'
    access_token_secret = 'Hs73OKbUnGH9bGLz9OA3JcVa9hdWKf6z81gvHINvpoyQC'

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)

    api = tweepy.API(auth)

    return api

print(connect_api()) 