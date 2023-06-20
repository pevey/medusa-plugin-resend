class RestockNotification {
   constructor({ eventBusService, resendService }) {
      eventBusService.subscribe(
         "restock-notification.restocked",
         async (eventData) => {
            const templateId = await resendService.getTemplateId("restock-notification.restocked")
   
            if (!templateId) {
               return
            }
   
            const data = await resendService.fetchData(
               "restock-notification.restocked",
               eventData,
               null
            )
   
            if (!data.emails) {
               return
            }
   
            return await Promise.all(
               data.emails.map(async (e) => {
                  const sendOptions = {
                     template_id: templateId,
                     from: resendService.options_.from,
                     to: e,
                     dynamic_template_data: data,
                  }
      
                  return await resendService.sendEmail(sendOptions)
               })
            )
         }
      )
   }
}
 
export default RestockNotification