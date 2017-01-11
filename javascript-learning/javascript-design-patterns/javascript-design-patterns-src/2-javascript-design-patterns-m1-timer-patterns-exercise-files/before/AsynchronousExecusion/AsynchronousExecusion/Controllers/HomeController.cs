using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AsynchronousExecusion.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Data()
        {
            var data = Enumerable.Range(0, 1000);

            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}
