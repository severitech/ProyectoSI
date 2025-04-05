import { Injectable } from '@nestjs/common';
import { llaveStripe } from 'src/config';
import Stripe from 'stripe';
import { CreateCheckoutDto } from './dto/insertarProductos.dto';

@Injectable()
export class StripeService {
  private stripe: Stripe;
  constructor() {
    if (!llaveStripe) {
      throw new Error('La llave de Stripe no está definida');
    }

    // Inicializamos Stripe con la clave secreta de prueba
    this.stripe = new Stripe(llaveStripe);
  }

  async createCheckoutSession(data: CreateCheckoutDto) {
    const line_items = data.productos.map((producto) => ({
      price_data: {
        currency: 'bob', // moneda fija
        product_data: {
          name: producto.nombre,
        },
        unit_amount: producto.precio, // precio en centavos
      },
      quantity: producto.cantidad,
    }));
  
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items, 
      success_url: 'http://localhost:5000/success',
      cancel_url: 'http://localhost:5000/cancel',
    });
  
    return { url: session.url };
  }
  
}
