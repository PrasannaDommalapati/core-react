using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

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
