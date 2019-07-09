using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using promotion.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace promotion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestController : Controller
    {
        [HttpGet("[action]")]
        public async Task<ActionResult> Best()
        {
            HttpClient client = HttpClientFactory.Create();

            var response = await client
               .GetAsync("users/2")
               .ConfigureAwait(false);

            response.EnsureSuccessStatusCode();

            var content = await response
                .Content
                .ReadAsStringAsync()
                .ConfigureAwait(false);
            var jsonData = JObject.Parse(content);

            var PostList = JsonConvert
                .DeserializeObject(jsonData.GetValue("data").ToString());

            return Json(PostList);
        }
    }
}
