using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading;

namespace RecursiveSetTimeout.Controllers
{
    public class HomeController : AsyncController
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public void DateAsync()
        {
            AsyncManager.OutstandingOperations.Increment();

            var random = new Random();

            var sleep = random.Next(5, 20);

            var date = DateTime.Now.ToString();

            AsyncManager.Sync(() =>
                                  {
                                      Thread.Sleep(sleep * 1000);

                                      AsyncManager.Parameters["date"] = date;

                                      AsyncManager.OutstandingOperations.Decrement();
                                  });
        }

        public ActionResult DateCompleted(string date)
        {
            return Json(date + " - " + DateTime.Now.ToString(), JsonRequestBehavior.AllowGet);
        }
    }
}