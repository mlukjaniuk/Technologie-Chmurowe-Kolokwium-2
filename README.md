https://hub.docker.com/repository/docker/mlukjaniuk/kolokwium-2/general



### Zadanie:

Rozważmy następujący plik z danymi w formacie json: 

{
   "data": [
    {
        "_id": "1000",
        "userId": "1",
        "productId": "100",
        "quantity": 1
    },
    {
        "_id": "1001",
        "userId": "2",
        "productId": "101",
        "quantity": 2
    }
  ]
}
Wykonaj następujące polecenia:

Stwórz aplikację REST API w języku JavaScript, która będzie pobierała początkowe dane z podanego pliku w formacie JSON.
Następnie aplikacja powinna nawiązać połączenie z bazą danych MongoDB, wrzucić dane z pliku JSON i udostępniać funkcjonalności wyświetlania oraz usuwania danych.
Cała aplikacja powinna być uruchomiona i zarządzana za pomocą narzędzia Docker Compose. 
Po zaimplementowaniu funkcjonalności, aplikacja powinna zostać umieszczona jako reverse proxy w serwerze nginx. 
W Docker Compose należy uwzględnić budowanie obrazów, uruchomienie bazy danych, zdefiniowanie zmiennych środowiskowych, zarządzanie zależnościami, utworzenie sieci, wolumenów oraz zastosowanie Healthcheck. 
Ostatecznie obraz aplikacji powinien zostać przesłany na serwis Docker Hub w postaci wieloarchitekturowej.
Spakowaną aplikację prześlij przez platformę MSTeams wraz z linkiem do serwisu Docker Hub.

Uwaga: W przypadku nie działania pliku docker-compose.yml, zadanie nie będzie sprawdzane.