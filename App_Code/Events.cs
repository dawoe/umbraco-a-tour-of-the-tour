using Umbraco.Core;
using Umbraco.Core.Events;
using Umbraco.Web;

public class Events : ApplicationEventHandler
{
    protected override void ApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
    {
		//TourFilterResolver.Current.AddFilterByFile("getting-started");     
    }
}