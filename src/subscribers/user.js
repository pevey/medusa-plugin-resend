class UserSubscriber {
   constructor({ resendService, eventBusService }) {
      this.resendService_ = resendService
   
      this.eventBus_ = eventBusService
   
      this.eventBus_.subscribe("user.password_reset", async (data) => {
         await this.resendService_.sendNotification(
            "user.password_reset",
            data,
            null
         )
      })
   }
 }
 
 export default UserSubscriber