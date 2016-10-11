using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace NetCoreDemo
{
    class SmsSample
    {
        static HttpClient client = new HttpClient();
        private const string url_SmsOutbox = "sms/v3/messaging/outbox";
        private const string url_SmsInbox = "sms/v3/messaging/inbox/";
        private const string SMS_ShortCode = "48507075";

        static async Task<string> SendSmsAsync(string path, string payload)
        {
            Console.WriteLine("Call Sms send!");
            var content = new StringContent(payload, Encoding.UTF8, "application/json");
            string responseString = null;
            var response = await client.PostAsync(path, content);
            if (response.IsSuccessStatusCode)
            {
                responseString = await response.Content.ReadAsStringAsync();
            }
            return responseString;
        }

        static async Task<string> GetSmsAsync(string path) 
        {
            Console.WriteLine("Call GetSMS!");
            string responseString = null;
            HttpResponseMessage response = await client.GetAsync(path);
            if (response.IsSuccessStatusCode)
            {
                responseString = await response.Content.ReadAsStringAsync();
            }
            return responseString;
        }
        
        public static void Run()
        {
            RunAsync().Wait();
        }

        static async Task RunAsync()
        {
            client.BaseAddress = new Uri("https://api.att.com/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("Authorization", "Bearer BF-ACSI~4~20161009231906~giC896r7W7fzt6CAJNQuQTEDjOSeAkK8");

            try
            {
                //outbound test
                /*
                var outboundSMSRequest = new OutboundSMSRequestWrapper();
                outboundSMSRequest.outboundSMSRequest = 
                    new OutboundSMSRequest { address = "tel:+16262521073", message = "hello !" };
                string payload = JsonConvert.SerializeObject(outboundSMSRequest);
                string responseString = await SendSmsAsync(url_SmsOutbox, payload);
                var outboundSMSResponse = JsonConvert.DeserializeObject<OutboundSMSResponseWrapper>(responseString);
                Console.WriteLine(outboundSMSResponse.ToString());              
                */

                //inbound test
                string responseString = await GetSmsAsync(url_SmsInbox + SMS_ShortCode);
                var inboxResponse = JsonConvert.DeserializeObject<InboundSmsMessageListWrapper>(responseString);
                Console.WriteLine(inboxResponse.ToString()); 
                Console.WriteLine(responseString);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

        }

    }
}
