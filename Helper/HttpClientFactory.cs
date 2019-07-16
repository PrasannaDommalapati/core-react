using System;
using System.Net.Http;

namespace promotion.Helper
{
    public class HttpClientFactory : IHttpClientFactory
    {
        public HttpClient Create()
        {
            return new HttpClient
            {
                BaseAddress = new Uri(Constants.ReqresEndpoint)
            };
        }
    }
}
