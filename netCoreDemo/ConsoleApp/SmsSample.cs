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
/*
Accept: application/json
Content-Type: application/json
Authorization: Bearer BF-ACSI~4~20161009231906~giC896r7W7fzt6CAJNQuQTEDjOSeAkK8

{
    "outboundSMSRequest": {
        "address":"tel:+16262521073",
      "message":"hello !"
    }
} 
*/

            try
            {
                string payload = @"
                    {
                        ""outboundSMSRequest"": {
                            ""address"":""tel:+16262521073"",
                            ""message"":""hello !""
                        }
                    }";
                string responseString = await SendSmsAsync(url_SmsOutbox, payload);
                OutboundSMSResponse outboundSMSRequest = JsonConvert.DeserializeObject<OutboundSMSResponse>(responseString);
                Console.WriteLine(outboundSMSRequest.ToString());              
                Console.WriteLine(responseString);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

        }

    }
}
