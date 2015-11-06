using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TPOData.Startup))]
namespace TPOData
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
