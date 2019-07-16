using System.Net.Http;

namespace promotion.Helper
{
    public interface IHttpClientFactory
    {
        HttpClient Create();
    }
}
