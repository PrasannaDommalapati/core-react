using Microsoft.AspNetCore.Mvc;
using promotion.Models;
using promotion.ProxyHttp;
using System.Threading.Tasks;

namespace promotion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionController : Controller
    {
        public IPromotionsEndpointFactory PromotionsEndpointFactory { get; set; }

        public PromotionController(IPromotionsEndpointFactory promotionsEndpointFactory) => PromotionsEndpointFactory = promotionsEndpointFactory;

        [HttpGet("users/{id}")]
        public async Task<PostData> GetUser(string id)
        {
            return await PromotionsEndpointFactory
                .Create(UriPaths.GetUserEndpoint)
                .GetAsync<PostData>(id)
                .ConfigureAwait(false);
        }

        [HttpGet("unknown")]
        public async Task<PostData> GetList()
        {
            return await PromotionsEndpointFactory
                .Create(UriPaths.GetUsersListEndpoint)
                .GetAsync<PostData>()
                .ConfigureAwait(false);
        }
    }
}
