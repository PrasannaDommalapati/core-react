using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace promotion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestController : Controller
    {
        [HttpGet("[action]")]
        public async Task<object> Test()
        {
            HttpClient client = HttpClientFactory.Create();

            var response = await client
                .GetAsync("products/3")
                .ConfigureAwait(false);

            response.EnsureSuccessStatusCode();

            string content = await response
                .Content
                .ReadAsStringAsync()
                .ConfigureAwait(false);

            return await Task
                .Run(() => JsonConvert.DeserializeObject(content))
                .ConfigureAwait(false);
        }
    }
}
