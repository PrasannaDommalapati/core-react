using System;
using System.Net.Http;

namespace promotion.Controllers
{
    public static class HttpClientFactory
    {
        public static HttpClient Create()
        {
            const string endpoint = "https://reqres.in/api/";

            return new HttpClient
            {
                BaseAddress = new Uri(endpoint)
            };
        }
    }
}
