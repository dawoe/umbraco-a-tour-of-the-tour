#A tour of the tour#

This repo contains all the code samples from my "A tour of the tour" talk.

Copy the contents of this repo to your website to see it.

After you copied the content add this to your /Config/Dashboards.config file

    
    
    <section alias="TourDemo.HelpDashBoard">
    <areas>
      <area>content</area>
    </areas>
    <tab caption="Help">
    	  <control>/App_Plugins/HelpDashBoard/starthelp.html</control>
      <control>/App_Plugins/HelpDashBoard/changepassword.html</control>
    </tab>
      </section>

The slides of the talk can be found here : [https://dawoe.github.io/umbraco-a-tour-of-the-tour](https://dawoe.github.io/umbraco-a-tour-of-the-tour)