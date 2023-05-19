class OrderSubscriber {
	constructor({ notificationService }) {
		this.notificationService_ = notificationService
		this.notificationService_.subscribe("order.shipment_created", "resend")
		this.notificationService_.subscribe("order.gift_card_created", "resend")
		this.notificationService_.subscribe("gift_card.created", "resend")
		this.notificationService_.subscribe("order.placed", "resend")
		this.notificationService_.subscribe("order.canceled", "resend")
		this.notificationService_.subscribe("customer.password_reset", "resend")
		this.notificationService_.subscribe("claim.shipment_created", "resend")
		this.notificationService_.subscribe("swap.shipment_created", "resend")
		this.notificationService_.subscribe("swap.created", "resend")
		this.notificationService_.subscribe("order.items_returned", "resend")
		this.notificationService_.subscribe("order.return_requested", "resend")
		this.notificationService_.subscribe("order.refund_created", "resend")
	}
}
 
export default OrderSubscriber