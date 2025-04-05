import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateCheckoutDto } from './dto/insertarProductos.dto';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('checkout')
  createCheckout(@Body() body: CreateCheckoutDto) {
    return this.stripeService.createCheckoutSession(body);
  }
}
